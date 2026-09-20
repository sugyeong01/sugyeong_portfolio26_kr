/*const acceptBtn = document.querySelector(".accept");

acceptBtn.addEventListener("click", () => {

    document.querySelector(".airdrop_box").classList.add("hide");

    setTimeout(() => {

        window.location.href = "portfolio.html";

    }, 500);

});
*/

/* ========================================= */
/* AirDrop -> Portfolio */
/* ========================================= */

const acceptBtn = document.querySelector(".accept");

if (acceptBtn) {

    acceptBtn.addEventListener("click", () => {

        const box = document.querySelector(".airdrop_box");

        if (box) {
            box.classList.add("hide");
        }

        setTimeout(() => {

            window.location.href = "portfolio.html";

        }, 500);

    });

}


/* ========================================= */
/* Portfolio Navigation */
/* ========================================= */

const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

if (buttons.length > 0 && pages.length > 0) {

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // 메뉴 active 제거
            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // 페이지 숨기기
            pages.forEach(page => {
                page.classList.remove("active");
            });

            // 클릭한 메뉴 active
            button.classList.add("active");

            // 해당 페이지 보이기
            const targetPage = document.getElementById(button.dataset.page);

            if (targetPage) {
                targetPage.classList.add("active");
            }

        });

    });

}

/* ========================================= */
/* PROJECT DATA */
/* ========================================= */

const projects = {

    1: {
        number: "PROJECT 11",
        category: "EDITORIAL DESIGN",
        title: "The Korea Times Internship",
        description: "A one-year design experience at The Korea Times’ Los Angeles headquarters, focused on editorial layouts, advertising design, and print production.",
        year: "2025-2026",
        role: "Page Layout · Advertising Design · Print production",
        tools: "InDesign · Photoshop · Illustrator",
        image: "img/projects/project_koreatimes.jpg"
    },

    2: {
        number: "PROJECT 10",
        category: "AI Generated",
        title: "EjectX AI Video Contest",
        description: "AI-generated advertising campaign for an AI video competition, combining cinematic storytelling, game-inspired visuals, and a zombie apocalypse concept.",
        year: "2026",
        role: "Creative Direction · Concept Development · AI Generation · Video Editing",
        tools: "ChatGPT· Kling AI · CapCut",
        media: [
            {
                type: "video",
                src: "video/ejectx.mp4"
            },
            {
                type: "image",
                src: "img/projects/project_ejectx.jpg"
            },
        
        ]
    },

    11: {
        number: "PROJECT 09",
        category: "Ai Generated",
        title: "MIUMIU X WILSON",
        description: "An AI-generated visual concept exploring a fictional Miu Miu × Wilson collaboration, blending California tennis culture with a playful, nostalgic summer aesthetic.",
        year: "2026",
        role: "AI Content Design",
        tools: "ChatGPT · Kling AI · Photoshop · CapCut",
        media: [
            {
                type: "image",
                src: "img/projects/project_miuwil.jpg"
            },
            {
                type: "video",
                src: "video/miuwil.mㅔ4"
            },
        
        ]
    },

    3: {
        number: "PROJECT 08",
        category: "Branding",
        title: "'Aureal' Beuaty Brand",
        description: "AI-generated conceptual beauty brand exploring minimalism, femininity, and freshness through branding and visual design.",
        year: "2026",
        role: "Creative Direction · Brand Identity · Logo Design · Art Direction · AI Image Generation",
        tools: "Photoshop, Illurstration, Chat GPT, Figma",
        image: "img/projects/project_aureal.jpg"
    },

    4: {
        number: "PROJECT 07",
        category: "Branding",
        title: "BYM Gym Brand",
        description: "A bold fitness brand identity built around strength, growth, and an energetic visual language.",
        year: "2025",
        role: "Branding · Visual Identity · Graphic Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_bym.jpg"
    },

    5: {
        number: "PROJECT 06",
        category: "Poster",
        title: "Jeju Cream Matcha Latte Poster",
        description: "Seasonal beverage poster exploring a refresh, modern visual direction through bold typography and a vibrant green palette.",
        year: "2025",
        role: "Graphic Design · Poster Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_matcha.jpg"
    },

    6: {
        number: "PROJECT 05",
        category: "Poster",
        title: "Fashion Brand Pop-up Poster",
        description: "Poster design for a multi-brand fashion pop-up in Seongsu, combining bold typography and playful 3D graphics to create a contemporary and eye-catching visual.",
        year: "2025",
        role: "Graphic Design · Poster Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_brand.jpg"
    },

    7: {
        number: "PROJECT 04",
        category: "UI / UX",
        title: "H&M App Redesign",
        description: "A mobile app redesign focused on improving the shopping experience through a cleaner interface, intuitive navigation, and a more streamlined user flow.",
        year: "2025",
        role: "UX Research · Wireframing · UI/UX Design · Visual Design",
        tools: "Figma · Photoshop",
        image: "img/projects/project_h&m.png"
    },

    8: {
        number: "PROJECT 03",
        category: "Web Design",
        title: "Balenciaga Web Redesign",
        description: "A fashion editorial-inspired website redesign designed to recreate the immersive experience of reading a magazine in a digital space..",
        year: "2025",
        role: "Information Architecture · Wireframing · Web Design & Development",
        tools: "Figma · Photoshop · HTML · CSS · jQuery · Chat GPT",
        image: "img/projects/project_balenciaga.png",
        link: "https://sugyeong01.github.io/balenciaga/"
    },

    9: {
        number: "PROJECT 02",
        category: "Web Design",
        title: "AirBusan Web Redesign",
        description: "Website redesign focused on simplifying the booking experience through intuitive navigation, clear information architecture, and a more user-friendly interface.",
        year: "2025",
        role: "Information Architecture · Wireframing · Web Design & Development",
        tools: "Figma · Photoshop · HTML · CSS · jQuery",
        image: "img/projects/project_airbusan.png",
        link: "https://sugyeong01.github.io/airbusan/"
    },

    10: {
        number: "PROJECT 01",
        category: "Award",
        title: "Yeongnam Univ Eblem & Slogan Design Contest",
        description: "Encouragement Award — Emblem & Slogan Design Contest, Yeungnam University 77th Anniversary",
        year: "2024",
        role: "Concept Development · Logo Design · Visual Identityn",
        tools: "Illustrator",
        image: "img/projects/project_unilogo.jpg"
    },


};


/* ========================================= */
/* PROJECT PAGE */
/* ========================================= */

const projectMedia = document.getElementById("projectMedia");

if (projectMedia) {

    const params = new URLSearchParams(window.location.search);

    const projectId = params.get("id") || "1";

    const project = projects[projectId];

    if (project) {

        document.getElementById("projectNumber").textContent =
            project.number;

        document.getElementById("projectCategory").textContent =
            project.category;

        document.getElementById("projectTitle").textContent =
            project.title;

        document.getElementById("projectDescription").textContent =
            project.description;

        document.getElementById("projectYear").textContent =
            project.year;

        document.getElementById("projectRole").textContent =
            project.role;

        document.getElementById("projectTools").textContent =
            project.tools;


        /* ========================================= */
        /* IMAGE / VIDEO */
        /* ========================================= */

        if (project.media) {

            projectMedia.innerHTML = "";

            project.media.forEach(item => {

                if (item.type === "image") {

                    projectMedia.innerHTML += `
                        <div class="case_media_item">
                            <img
                                src="${item.src}"
                                alt="${project.title}"
                            >
                        </div>
                    `;

                }

                if (item.type === "video") {

                    projectMedia.innerHTML += `
                        <div class="case_media_item">
                            <video
                                src="${item.src}"
                                autoplay
                                loop
                                playsinline
                                controls
                            ></video>
                        </div>
                    `;

                }

            });

        } else {

            projectMedia.innerHTML = `
                <div class="case_media_item">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >
                </div>
            `;

        }


        /* ========================================= */
        /* LIVE WEBSITE LINK */
        /* ========================================= */

        const projectLink =
            document.getElementById("projectLink");

        if (projectLink) {

            if (project.link) {

                projectLink.href = project.link;

                projectLink.style.display = "inline-flex";

            } else {

                projectLink.style.display = "none";

            }

        }


        /* ========================================= */
        /* PAGE TITLE */
        /* ========================================= */

        document.title =
            project.title + " — Sugyeong";

    }

}