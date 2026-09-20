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
        description: "로스앤젤레스에 위치한 The Korea Times 미주본사에서 1년간 진행한 디자인 인턴십으로, 신문 지면 편집, 광고 디자인, 인쇄 제작 등 다양한 실무 디자인을 경험했습니다.",
        year: "2025-2026",
        role: "Page Layout · Advertising Design · Print production",
        tools: "InDesign · Photoshop · Illustrator",
        image: "img/projects/project_koreatimes.jpg"
    },

    2: {
        number: "PROJECT 10",
        category: "AI Generated",
        title: "EjectX AI Video Contest",
        description: "AI 영상 공모전을 위해 제작한 광고 캠페인으로, 시네마틱한 스토리텔링과 게임에서 영감을 받은 비주얼, 좀비 아포칼립스 콘셉트를 결합해 총 2명의 팀원들과 독창적인 영상 콘텐츠를 제작했습니다.",
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
        description: "미우미우와 윌슨의 가상 협업을 바탕으로 제작한 AI 비주얼 콘셉트로, 캘리포니아의 테니스 문화와 유쾌하고 빈티지한 여름의 감성을 결합했습니다.",
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
                src: "video/miuwil.mp4"
            },
        
        ]
    },

    3: {
        number: "PROJECT 08",
        category: "Branding",
        title: "'Aureal' Beuaty Brand",
        description: "미니멀리즘과 여성스러움, 산뜻한 이미지를 중심으로 브랜딩과 비주얼 디자인을 전개한 AI 기반의 가상 뷰티 브랜드 콘셉트입니다.",
        year: "2026",
        role: "Creative Direction · Brand Identity · Logo Design · Art Direction · AI Image Generation",
        tools: "Photoshop, Illurstration, Chat GPT, Figma",
        image: "img/projects/project_aureal.jpg"
    },

    4: {
        number: "PROJECT 07",
        category: "Branding",
        title: "BYM Gym Brand",
        description: "강인함과 성장, 에너지 넘치는 비주얼을 중심으로 구축한 피트니스 브랜드 아이덴티티 프로젝트입니다.",
        year: "2025",
        role: "Branding · Visual Identity · Graphic Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_bym.png"
    },

    5: {
        number: "PROJECT 06",
        category: "Poster",
        title: "Jeju Cream Matcha Latte Poster",
        description: "볼드한 타이포그래피와 생동감 있는 그린 컬러를 활용해 산뜻하고 현대적인 비주얼을 표현한 시즌 한정 음료 포스터 디자인 프로젝트입니다.",
        year: "2025",
        role: "Graphic Design · Poster Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_matcha.jpg"
    },

    6: {
        number: "PROJECT 05",
        category: "Poster",
        title: "Fashion Brand Pop-up Poster",
        description: "성수에서 진행되는 멀티 브랜드 패션 가상 팝업 포스터 디자인으로, 볼드한 타이포그래피와 유쾌한 3D 그래픽을 활용해 현대적이고 시선을 끄는 비주얼을 구성했습니다.",
        year: "2025",
        role: "Graphic Design · Poster Design",
        tools: "Photoshop · Illustrator",
        image: "img/projects/project_brand.jpg"
    },

    7: {
        number: "PROJECT 04",
        category: "UI / UX",
        title: "H&M App Redesign",
        description: "더 깔끔한 인터페이스와 직관적인 내비게이션, 간결한 사용자 흐름을 통해 쇼핑 경험을 개선하는 데 초점을 맞춘 모바일 앱 리디자인 프로젝트입니다.",
        year: "2025",
        role: "UX Research · Wireframing · UI/UX Design · Visual Design",
        tools: "Figma · Photoshop",
        image: "img/projects/project_h&m.png"
    },

    8: {
        number: "PROJECT 03",
        category: "Web Design",
        title: "Balenciaga Web Redesign",
        description: "패션 에디토리얼에서 영감을 받은 웹사이트 리디자인으로, 디지털 공간에서 매거진을 읽는 듯한 몰입감 있는 경험을 구현했습니다.",
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
        description: "직관적인 내비게이션과 명확한 정보 구조, 사용자 친화적인 인터페이스를 통해 항공권 예약 경험을 보다 간결하고 편리하게 개선한 웹사이트 리디자인 프로젝트입니다.",
        year: "2025",
        role: "Information Architecture · Wireframing · Web Design & Development",
        tools: "Figma · Photoshop · HTML · CSS · jQuery",
        image: "img/projects/project_airbusan.png",
        link: "https://sugyeong01.github.io/airbusan/"
    },

    10: {
        number: "PROJECT 01",
        category: "Award",
        title: "Yeongnam Univ Emblem & Slogan Design Contest",
        description: "영남대학교 개교 77주년 기념 엠블럼 및 슬로건 디자인 공모전 출품작으로, 엠블럼과 슬로건을 통해 대학의 정체성과 미래에 대한 비전을 시각적으로 표현했습니다.",
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