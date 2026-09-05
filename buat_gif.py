from PIL import Image, ImageDraw, ImageFont
import math
import os


# ============================================================
# PENGATURAN GIF
# ============================================================

WIDTH = 900
HEIGHT = 500

TOTAL_FRAMES = 60

# Kecepatan animasi
FRAME_DURATION = 60

# Folder output
OUTPUT_FOLDER = "assets"

# Nama GIF
OUTPUT_FILE = os.path.join(
    OUTPUT_FOLDER,
    "showreel.gif"
)


# ============================================================
# BUAT FOLDER ASSETS JIKA BELUM ADA
# ============================================================

if not os.path.exists(OUTPUT_FOLDER):
    os.makedirs(OUTPUT_FOLDER)


# ============================================================
# FONT
# ============================================================

try:

    FONT_TITLE = ImageFont.truetype(
        "DejaVuSans-Bold.ttf",
        43
    )

    FONT_SUBTITLE = ImageFont.truetype(
        "DejaVuSans.ttf",
        18
    )

except:

    FONT_TITLE = None
    FONT_SUBTITLE = None


# ============================================================
# MENYIMPAN SEMUA FRAME
# ============================================================

frames = []


# ============================================================
# LOOP ANIMASI
# ============================================================

for frame_number in range(TOTAL_FRAMES):

    # --------------------------------------------------------
    # CANVAS
    # --------------------------------------------------------

    image = Image.new(
        "RGB",
        (WIDTH, HEIGHT),
        (7, 9, 16)
    )

    draw = ImageDraw.Draw(image)


    # ========================================================
    # BACKGROUND GRADIENT
    # ========================================================

    for y in range(HEIGHT):

        progress = y / HEIGHT

        r = int(7 + 20 * progress)
        g = int(9 + 8 * progress)
        b = int(16 + 38 * progress)

        draw.line(
            (0, y, WIDTH, y),
            fill=(r, g, b)
        )


    # ========================================================
    # GRID LANTAI RIFT
    # ========================================================

    grid_offset = (
        frame_number * 5
    ) % 60

    for x in range(
        -100,
        WIDTH + 100,
        60
    ):

        draw.line(
            (
                x + grid_offset,
                310,

                x + grid_offset - 170,
                HEIGHT
            ),
            fill=(39, 30, 76),
            width=1
        )


    for y in range(
        310,
        HEIGHT,
        35
    ):

        draw.line(
            (
                0,
                y,
                WIDTH,
                y
            ),
            fill=(32, 28, 62),
            width=1
        )


    # ========================================================
    # POSISI RIFT
    # ========================================================

    rift_x = 450
    rift_y = 235

    # Waktu animasi
    t = (
        frame_number
        / TOTAL_FRAMES
        * math.tau
    )


    # ========================================================
    # RIFT BERDENYUT
    # ========================================================

    pulse = (
        1
        + 0.08
        * math.sin(t * 3)
    )


    # Lingkaran luar Rift

    for radius in [
        120,
        105,
        90,
        75
    ]:

        r = radius * pulse

        draw.ellipse(
            (
                rift_x - r,
                rift_y - r,

                rift_x + r,
                rift_y + r
            ),
            outline=(90, 35, 190),
            width=4
        )


    # ========================================================
    # RIFT SPIRAL
    # ========================================================

    spiral_points = []


    for i in range(100):

        progress = (
            i / 99
        )

        angle = (
            progress
            * math.tau
            * 3

            - t * 2.8
        )

        radius = (
            5
            + progress * 70
        )

        x = (
            rift_x
            + radius
            * math.cos(angle)
        )

        y = (
            rift_y
            + radius
            * 0.70
            * math.sin(angle)
        )

        spiral_points.append(
            (x, y)
        )


    draw.line(
        spiral_points,
        fill=(184, 255, 0),
        width=5
    )


    # ========================================================
    # INTI RIFT
    # ========================================================

    for i in range(4):

        radius = (
            12
            + i * 8
        )

        rotation = (
            t * 2
            + i
        )

        points = []


        for j in range(16):

            angle = (
                j / 16
                * math.tau
                + rotation
            )

            x = (
                rift_x
                + radius
                * math.cos(angle)
            )

            y = (
                rift_y
                + radius
                * 0.7
                * math.sin(angle)
            )

            points.append(
                (x, y)
            )


        draw.line(
            points + [points[0]],
            fill=(184, 255, 0),
            width=2
        )


    # ========================================================
    # PARTIKEL RIFT
    # ========================================================
    #
    # CATATAN:
    # Tidak ada titik pink lagi.
    # Semua partikel sekarang menjadi efek Rift.
    #

    for i in range(24):

        angle = (
            t * 0.8
            + i * math.tau / 24
        )

        radius = (
            80
            + 20
            * math.sin(
                t * 2 + i
            )
        )

        particle_x = (
            rift_x
            + radius
            * math.cos(angle)
        )

        particle_y = (
            rift_y
            + radius
            * 0.72
            * math.sin(angle)
        )

        particle_size = (
            2
            + i % 3
        )


        draw.ellipse(
            (
                particle_x - particle_size,
                particle_y - particle_size,

                particle_x + particle_size,
                particle_y + particle_size
            ),
            fill=(184, 255, 0)
        )


    # ========================================================
    # WARPER MENGELILINGI RIFT
    # ========================================================
    #
    # Warper TIDAK DIAM.
    # Bergerak mengelilingi Rift menggunakan orbit.
    #

    orbit_width = 155
    orbit_height = 95


    warper_x = (
        rift_x
        + orbit_width
        * math.cos(t)
    )


    warper_y = (
        rift_y
        + orbit_height
        * math.sin(t)

        + 7
        * math.sin(t * 2)
    )


    # ========================================================
    # JEJAK WARPER
    # ========================================================

    for trail in range(10):

        old_time = (
            t
            - trail * 0.07
        )


        trail_x = (
            rift_x
            + orbit_width
            * math.cos(old_time)
        )


        trail_y = (
            rift_y
            + orbit_height
            * math.sin(old_time)
        )


        opacity_effect = max(
            1,
            8 - trail
        )


        draw.ellipse(
            (
                trail_x - 3,
                trail_y - 3,

                trail_x + 3,
                trail_y + 3
            ),
            fill=(110, 45, 220)
        )


    # ========================================================
    # WARPER GLOW
    # ========================================================

    for radius in [
        38,
        31,
        25
    ]:

        draw.ellipse(
            (
                warper_x - radius,
                warper_y - radius,

                warper_x + radius,
                warper_y + radius
            ),
            outline=(130, 60, 230),
            width=2
        )


    # ========================================================
    # WARPER
    # ========================================================

    body_width = 70
    body_height = 86


    body_x = (
        warper_x
        - body_width / 2
    )


    body_y = (
        warper_y
        - body_height / 2
    )


    # --------------------------------------------------------
    # BAYANGAN WARPER
    # --------------------------------------------------------

    draw.ellipse(
        (
            body_x + 5,
            body_y + body_height - 1,

            body_x
            + body_width
            - 5,

            body_y
            + body_height
            + 13
        ),
        fill=(0, 0, 0)
    )


    # --------------------------------------------------------
    # BADAN WARPER
    # --------------------------------------------------------

    draw.ellipse(
        (
            body_x,
            body_y,

            body_x
            + body_width,

            body_y
            + body_height
        ),
        fill=(150, 155, 165),

        outline=(225, 230, 238),

        width=3
    )


    # ========================================================
    # KEPALA WARPER
    # ========================================================

    draw.ellipse(
        (
            body_x + 12,
            body_y - 17,

            body_x + 58,
            body_y + 28
        ),
        fill=(175, 180, 190),

        outline=(225, 230, 238),

        width=3
    )


    # ========================================================
    # MATA WARPER
    # ========================================================

    eye_y = (
        body_y
        + 28
    )


    # Mata mengikuti arah gerakan

    look = int(
        3
        * math.cos(t)
    )


    # Mata kiri

    draw.ellipse(
        (
            body_x + 19 + look,
            eye_y,

            body_x + 31 + look,
            eye_y + 16
        ),
        fill=(25, 25, 35)
    )


    # Mata kanan

    draw.ellipse(
        (
            body_x + 40 + look,
            eye_y,

            body_x + 52 + look,
            eye_y + 16
        ),
        fill=(25, 25, 35)
    )


    # Highlight mata

    draw.ellipse(
        (
            body_x + 22 + look,
            eye_y + 2,

            body_x + 25 + look,
            eye_y + 5
        ),
        fill=(255, 255, 255)
    )


    draw.ellipse(
        (
            body_x + 43 + look,
            eye_y + 2,

            body_x + 46 + look,
            eye_y + 5
        ),
        fill=(255, 255, 255)
    )


    # ========================================================
    # MULUT WARPER
    # ========================================================

    draw.arc(
        (
            body_x + 28,
            body_y + 48,

            body_x + 44,
            body_y + 63
        ),
        10,
        170,

        fill=(50, 50, 60),

        width=2
    )


    # ========================================================
    # TANGAN WARPER BERGERAK
    # ========================================================

    hand_animation = (
        5
        * math.sin(t * 4)
    )


    # Tangan kiri

    draw.ellipse(
        (
            body_x - 18,
            body_y + 48 + hand_animation,

            body_x + 7,
            body_y + 64 + hand_animation
        ),
        fill=(155, 160, 170),

        outline=(220, 225, 235),

        width=2
    )


    # Tangan kanan

    draw.ellipse(
        (
            body_x + body_width - 7,
            body_y + 45 - hand_animation,

            body_x + body_width + 18,
            body_y + 61 - hand_animation
        ),
        fill=(155, 160, 170),

        outline=(220, 225, 235),

        width=2
    )


    # ========================================================
    # SIMBOL RIFT DI ATAS WARPER
    # ========================================================

    symbol_x = warper_x

    symbol_y = (
        body_y
        - 28
    )


    symbol_points = []


    for i in range(8):

        angle = (
            i
            * math.pi
            / 4
        )


        radius = (
            14
            if i % 2 == 0
            else 5
        )


        symbol_points.append(
            (
                symbol_x
                + radius
                * math.cos(angle),

                symbol_y
                + radius
                * math.sin(angle)
            )
        )


    draw.polygon(
        symbol_points,

        fill=(184, 255, 0)
    )


    # ========================================================
    # DEKORASI RIFT
    # ========================================================

    for i in range(8):

        x = (
            80
            + i * 105
            + int(
                15
                * math.sin(
                    t + i
                )
            )
        )


        y = (
            75
            + int(
                45
                * math.cos(
                    t * 0.8 + i
                )
            )
        )


        size = (
            12
            + (i % 3) * 5
        )


        points = [

            (x, y - size),

            (x + size, y),

            (x, y + size),

            (x - size, y)

        ]


        draw.polygon(
            points,

            outline=(184, 255, 0),

            width=2
        )


    # ========================================================
    # JUDUL
    # ========================================================

    title = (
        "CRUCIFY RIFT PARTY"
    )


    if FONT_TITLE:

        box = draw.textbbox(
            (0, 0),
            title,
            font=FONT_TITLE
        )


        text_width = (
            box[2]
            - box[0]
        )


        draw.text(
            (
                (WIDTH - text_width) / 2,
                215
            ),

            title,

            fill=(245, 245, 245),

            font=FONT_TITLE
        )


    # ========================================================
    # SUBTITLE
    # ========================================================

    subtitle = (
        "ANIMATED RIFT • WARPER LOOP"
    )


    if FONT_SUBTITLE:

        box = draw.textbbox(
            (0, 0),
            subtitle,
            font=FONT_SUBTITLE
        )


        text_width = (
            box[2]
            - box[0]
        )


        draw.text(
            (
                (WIDTH - text_width) / 2,
                270
            ),

            subtitle,

            fill=(184, 255, 0),

            font=FONT_SUBTITLE
        )


    # ========================================================
    # MASUKKAN FRAME
    # ========================================================

    frames.append(
        image
    )


# ============================================================
# SIMPAN GIF
# ============================================================

frames[0].save(
    OUTPUT_FILE,

    save_all=True,

    append_images=frames[1:],

    duration=FRAME_DURATION,

    loop=0,

    optimize=True
)


# ============================================================
# SELESAI
# ============================================================

print()
print("======================================")
print("   GIF CRUCIFY RIFT PARTY SELESAI")
print("======================================")
print()
print("File:")
print(OUTPUT_FILE)
print()
print("Fitur:")
print("- Titik pink dihapus")
print("- Diganti partikel Rift")
print("- Rift berputar")
print("- Rift berdenyut")
print("- Warper bergerak mengelilingi Rift")
print("- Warper memiliki efek trail")
print("- Tangan Warper ikut bergerak")
print("- Mata Warper ikut mengikuti arah gerakan")
print("- GIF looping")
print()