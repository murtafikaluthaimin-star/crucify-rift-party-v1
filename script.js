// ============================================================
// CRUCIFY RIFT PARTY
// SCRIPT.JS
// ============================================================


// ============================================================
// THEME BUTTON
// ============================================================

const themeButton =
    document.getElementById("themeButton");

const body =
    document.body;


// ============================================================
// LOAD THEME
// ============================================================

const savedTheme =
    localStorage.getItem("crucify-theme");


if (savedTheme === "day") {

    body.classList.add("day-mode");

    themeButton.textContent = "🌙";

} else {

    themeButton.textContent = "☀️";

}


// ============================================================
// THEME CHANGE
// ============================================================

themeButton.addEventListener(
    "click",
    function () {

        body.classList.toggle("day-mode");

        const isDay =
            body.classList.contains("day-mode");


        if (isDay) {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "crucify-theme",
                "day"
            );

        } else {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "crucify-theme",
                "night"
            );

        }

    }
);


// ============================================================
// RIFT CLICK EFFECT
// ============================================================

function createRiftClickEffect(x, y) {

    const effect =
        document.createElement("div");

    effect.className =
        "rift-click-effect";


    effect.style.left =
        x + "px";

    effect.style.top =
        y + "px";


    document.body.appendChild(
        effect
    );


    setTimeout(
        function () {

            effect.remove();

        },
        800
    );

}


// ============================================================
// FLASH EFFECT
// ============================================================

function createFlashEffect() {

    const flash =
        document.createElement("div");

    flash.className =
        "screen-flash";


    document.body.appendChild(
        flash
    );


    setTimeout(
        function () {

            flash.remove();

        },
        300
    );

}


// ============================================================
// PARTICLE EFFECT
// ============================================================

function createClickParticles(x, y) {

    const particleCount = 14;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "click-particle";


        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";


        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            40
            + Math.random()
            * 90;


        const moveX =
            Math.cos(angle)
            * distance;


        const moveY =
            Math.sin(angle)
            * distance;


        particle.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        particle.style.setProperty(
            "--move-y",
            moveY + "px"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            700
        );

    }

}


// ============================================================
// CLICK ANIMATION UNTUK SEMUA ELEMEN
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        const x =
            event.clientX;

        const y =
            event.clientY;


        createRiftClickEffect(
            x,
            y
        );


        createClickParticles(
            x,
            y
        );


        createFlashEffect();

    }
);


// ============================================================
// BUTTON PRESS EFFECT
// ============================================================

const buttons =
    document.querySelectorAll(
        "button, .button, .rift-card, .footer-social a, .navigation a"
    );


buttons.forEach(
    function (button) {

        button.addEventListener(
            "mousedown",
            function () {

                button.classList.add(
                    "clicking"
                );

            }
        );


        button.addEventListener(
            "mouseup",
            function () {

                button.classList.remove(
                    "clicking"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.classList.remove(
                    "clicking"
                );

            }
        );

    }
);


// ============================================================
// SOCIAL CARD
// ============================================================

const socialCards =
    document.querySelectorAll(
        ".rift-card"
    );


socialCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function (event) {

                const platform =
                    card.dataset.platform;


                if (
                    card.getAttribute("href")
                    === "#"
                ) {

                    event.preventDefault();


                    setTimeout(
                        function () {

                            alert(
                                "⚡ " +
                                platform +
                                " RIFT ⚡\n\n" +

                                "Link " +
                                platform +
                                " belum diatur.\n\n" +

                                "Buka index.html lalu " +

                                "ganti href=\"#\" dengan " +

                                "link " +
                                platform +
                                " kamu."
                            );

                        },
                        350
                    );

                }

            }
        );

    }
);


// ============================================================
// SMOOTH SCROLL
// ============================================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetID === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                    }

                }
            );

        }
    );


// ============================================================
// RIFT ONLINE ANIMATION
// ============================================================

const statusDot =
    document.querySelector(
        ".status-dot"
    );


setInterval(
    function () {

        if (!statusDot) {

            return;

        }


        statusDot.style.boxShadow =
            "0 0 25px var(--accent)";


        setTimeout(
            function () {

                statusDot.style.boxShadow =
                    "0 0 8px var(--accent)";

            },
            400
        );

    },
    1800
);


// ============================================================
// MOUSE MOVE GLOW
// ============================================================

let mouseX = 0;
let mouseY = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        document.documentElement.style.setProperty(
            "--mouse-x",
            mouseX + "px"
        );


        document.documentElement.style.setProperty(
            "--mouse-y",
            mouseY + "px"
        );

    }
);


// ============================================================
// CONSOLE
// ============================================================

console.log(
    "✦ CRUCIFY RIFT PARTY"
);

console.log(
    "Rift System: ONLINE"
);

console.log(
    "Warper System: ACTIVE"
);

console.log(
    "Interactive Rift Effects: ONLINE"
);


/* =========================================================
   CRUCIFY RIFT PARTY
   JOIN PRANK / WARNING SYSTEM
   ========================================================= */

(function () {

    const DISCORD_LINK = "https://discord.gg/TXmskT5Vx";

    /*
     * false = belum membaca peringatan
     * true  = sudah membaca, klik JOIN berikutnya membuka Discord
     */
    let joinReady = false;


    /* =====================================================
       HANYA TOMBOL JOIN YANG ADA DI BAGIAN PALING ATAS
       ===================================================== */

    const joinButton = document.querySelector(
        '.hero-buttons .primary-button'
    );


    if (!joinButton) {
        return;
    }


    /* =====================================================
       BUAT TAMPILAN PERINGATAN
       Tidak perlu mengubah index.html
       ===================================================== */

    const warning = document.createElement("div");

    warning.id = "crucifyJoinWarning";

    warning.innerHTML = `
        <div class="crucify-warning-box">

            <div class="crucify-warning-line"></div>

            <div class="crucify-warning-icon">
                ⚠
            </div>

            <div class="crucify-warning-small">
                BEFORE YOU ENTER THE RIFT
            </div>

            <h2>
                ARE YOU
                <span>REALLY SURE?</span>
            </h2>

            <p class="crucify-warning-intro">
                Kalau anda benar-benar yakin ingin
                join <b>CRUCIFY</b>, pastikan anda
                benar-benar siap menjadi bagian dari
                party ini.
            </p>

            <div class="crucify-warning-rules">

                <div>
                    <span>✦</span>
                    <p>
                        Harus benar-benar
                        <b>aktif dan mau ngumpul</b>
                        bersama.
                    </p>
                </div>

                <div>
                    <span>✦</span>
                    <p>
                        Tidak ada namanya
                        <b>ngerusuh</b>
                        atau membuat keributan.
                    </p>
                </div>

                <div>
                    <span>✦</span>
                    <p>
                        Wajib menghargai semua
                        member yang ada di dalam
                        komunitas.
                    </p>
                </div>

                <div>
                    <span>✦</span>
                    <p>
                        Sudah yakin?
                        <b>Baca semua RULES</b>
                        terlebih dahulu.
                    </p>
                </div>

            </div>

            <div class="crucify-warning-direction">

                <div class="crucify-warning-arrow">
                    ↑
                </div>

                <strong>
                    KALAU SUDAH BENAR-BENAR YAKIN...
                </strong>

                <small>
                    Silahkan kembali ke atas dan
                    tekan JOIN THE PARTY sekali lagi.
                </small>

            </div>

            <button
                type="button"
                id="crucifyWarningButton"
            >
                SAYA SUDAH MEMBACA →
            </button>

        </div>
    `;


    document.body.appendChild(warning);


    /* =====================================================
       STYLE PERINGATAN
       Dibuat lewat JavaScript supaya style.css kamu
       TIDAK PERLU DIUBAH.
       ===================================================== */

    const warningStyle = document.createElement("style");

    warningStyle.textContent = `

        #crucifyJoinWarning {

            position: fixed;

            inset: 0;

            z-index: 999999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background: rgba(5, 7, 12, 0.88);

            backdrop-filter: blur(9px);

            -webkit-backdrop-filter: blur(9px);

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
                opacity .35s ease,
                visibility .35s ease;

        }


        #crucifyJoinWarning.show {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

        }


        .crucify-warning-box {

            position: relative;

            width: min(620px, 100%);

            max-height: 90vh;

            overflow-y: auto;

            padding: 38px 32px;

            box-sizing: border-box;

            background:
                linear-gradient(
                    145deg,
                    #151923,
                    #0b0e15
                );

            border:
                1px solid
                rgba(174, 255, 0, .55);

            box-shadow:
                0 0 30px
                rgba(174, 255, 0, .12),

                0 25px 80px
                rgba(0, 0, 0, .65);

            transform:
                translateY(30px)
                scale(.96);

            transition:
                transform .35s ease,
                opacity .35s ease;

            opacity: 0;

        }


        #crucifyJoinWarning.show
        .crucify-warning-box {

            transform:
                translateY(0)
                scale(1);

            opacity: 1;

        }


        .crucify-warning-line {

            position: absolute;

            top: 0;

            left: 0;

            width: 100%;

            height: 3px;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    #b6ff00,
                    transparent
                );

            box-shadow:
                0 0 15px
                rgba(182,255,0,.8);

        }


        .crucify-warning-icon {

            width: 65px;

            height: 65px;

            margin:
                0 auto 18px;

            border:
                1px solid
                rgba(182,255,0,.55);

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            color: #b6ff00;

            font-size: 30px;

            box-shadow:
                0 0 25px
                rgba(182,255,0,.16);

        }


        .crucify-warning-small {

            text-align: center;

            color: #b6ff00;

            font-size: 12px;

            font-weight: 800;

            letter-spacing: 3px;

            margin-bottom: 10px;

        }


        .crucify-warning-box h2 {

            margin: 0;

            text-align: center;

            color: #ffffff;

            font-size:
                clamp(28px, 6vw, 45px);

            line-height: 1.05;

        }


        .crucify-warning-box h2 span {

            color: #b6ff00;

        }


        .crucify-warning-intro {

            margin:
                25px auto 20px;

            max-width: 520px;

            text-align: center;

            color:
                rgba(255,255,255,.78);

            line-height: 1.7;

            font-size: 15px;

        }


        .crucify-warning-intro b {

            color: #b6ff00;

        }


        .crucify-warning-rules {

            padding: 18px;

            border:
                1px solid
                rgba(255,255,255,.08);

            background:
                rgba(255,255,255,.025);

        }


        .crucify-warning-rules div {

            display: flex;

            align-items: flex-start;

            gap: 11px;

            margin-bottom: 12px;

        }


        .crucify-warning-rules div:last-child {

            margin-bottom: 0;

        }


        .crucify-warning-rules span {

            flex-shrink: 0;

            color: #b6ff00;

            margin-top: 2px;

        }


        .crucify-warning-rules p {

            margin: 0;

            color:
                rgba(255,255,255,.78);

            line-height: 1.55;

            font-size: 14px;

        }


        .crucify-warning-rules b {

            color: #ffffff;

        }


        .crucify-warning-direction {

            margin-top: 20px;

            padding: 17px;

            text-align: center;

            border:
                1px dashed
                rgba(182,255,0,.4);

            background:
                rgba(182,255,0,.035);

        }


        .crucify-warning-arrow {

            color: #b6ff00;

            font-size: 30px;

            line-height: 1;

            margin-bottom: 8px;

        }


        .crucify-warning-direction strong {

            display: block;

            color: #ffffff;

            font-size: 15px;

        }


        .crucify-warning-direction small {

            display: block;

            margin-top: 6px;

            color:
                rgba(255,255,255,.55);

            line-height: 1.5;

        }


        #crucifyWarningButton {

            width: 100%;

            margin-top: 20px;

            padding: 14px 18px;

            border: 0;

            background: #b6ff00;

            color: #090c11;

            font-weight: 900;

            font-size: 14px;

            letter-spacing: 1px;

            cursor: pointer;

            transition:
                transform .2s ease,
                box-shadow .2s ease;

        }


        #crucifyWarningButton:hover {

            transform:
                translateY(-2px);

            box-shadow:
                0 0 25px
                rgba(182,255,0,.35);

        }


        #crucifyWarningButton:active {

            transform:
                scale(.98);

        }


        @media (max-width: 600px) {

            #crucifyJoinWarning {

                padding: 14px;

            }


            .crucify-warning-box {

                padding:
                    30px 20px;

            }


            .crucify-warning-icon {

                width: 55px;

                height: 55px;

                font-size: 25px;

            }


            .crucify-warning-small {

                font-size: 10px;

                letter-spacing: 2px;

            }


            .crucify-warning-intro {

                font-size: 14px;

            }


            .crucify-warning-rules p {

                font-size: 13px;

            }

        }

    `;


    document.head.appendChild(warningStyle);


    /* =====================================================
       TOMBOL PERINGATAN
       ===================================================== */

    const warningButton =
        document.getElementById(
            "crucifyWarningButton"
        );


    /* =====================================================
       KLIK JOIN
       ===================================================== */

    joinButton.addEventListener(
        "click",
        function (event) {

            /*
             * KLIK PERTAMA
             */

            if (!joinReady) {

                event.preventDefault();

                warning.classList.add("show");

                document.body.style.overflow =
                    "hidden";

                return;

            }


            /*
             * KLIK KEDUA
             * BARU MASUK DISCORD
             */

            event.preventDefault();

            window.open(
                DISCORD_LINK,
                "_blank"
            );

        }
    );


    /* =====================================================
       SETELAH MEMBACA PERINGATAN
       ===================================================== */

    warningButton.addEventListener(
        "click",
        function () {

            warning.classList.remove("show");

            document.body.style.overflow = "";

            joinReady = true;


            /*
             * Kembali ke paling atas
             */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /*
             * Efek kecil pada tombol JOIN
             * Tidak mengubah sistem animasi klik kamu.
             */

            setTimeout(
                function () {

                    joinButton.style.transform =
                        "scale(1.05)";

                    setTimeout(
                        function () {

                            joinButton.style.transform =
                                "";

                        },
                        180
                    );

                },
                500
            );

        }
    );


    /* =====================================================
       KLIK DI LUAR BOX
       ===================================================== */

    warning.addEventListener(
        "click",
        function (event) {

            if (
                event.target === warning
            ) {

                warning.classList.remove("show");

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* =====================================================
       ESC UNTUK MENUTUP
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                warning.classList.contains("show")
            ) {

                warning.classList.remove("show");

                document.body.style.overflow =
                    "";

            }

        }
    );

})();