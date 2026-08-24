document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "nav.resume": "Resume",

            "hero.eyebrow": "HELLO, I'M ANDRÉS",
            "hero.title1": "Computer Science",
            "hero.title2": "& Economics",
            "hero.title3": "Student.",
            "hero.description":
                "I build software, analyze data, and solve complex problems through technology and computational thinking.",
            "hero.github": "GitHub",
            "hero.projects": "View Projects",
            "hero.status":
                "Open to internship opportunities",

            "about.title": "About Me",

            "about.paragraph1":
                "I am a Computer Science and Economics student interested in software development, data analysis, and problem solving.",

            "about.paragraph2":
                "Throughout my university experience, I have worked on projects involving programming, backend development, data analysis, econometrics, computer architecture, and software engineering.",

            "about.paragraph3":
                "I enjoy learning new technologies and turning theoretical concepts into practical solutions.",

            "about.education": "Education",
            "about.field": "Field",
            "about.fieldValue":
                "Computer Science & Economics",
            "about.status": "Status",
            "about.semester": "7th Semester",
            "about.location": "Location",

            "projects.title": "Featured Projects",

            "projects.tictactoe.title":
                "Tic Tac Toe",

            "projects.tictactoe.description":
                "Full-stack implementation of a Tic Tac Toe game using a REST API and a separate frontend.",

            "projects.census.title":
                "Ecuador Census Analysis",

            "projects.census.description":
                "Data analysis project using Ecuador's census data to study socioeconomic and demographic variables.",

            "projects.software.title":
                "Software Projects",

            "projects.software.description":
                "Collection of academic projects developed during my Computer Science studies.",

            "skills.title":
                "Skills & Technologies",

            "skills.languages":
                "Languages",

            "skills.development":
                "Development",

            "skills.data":
                "Data",

            "contact.title":
                "Let's Connect.",

            "contact.description":
                "I'm currently preparing for internship opportunities and would love to connect.",

            "footer.built":
                "Built with HTML, CSS & JavaScript"
        },


        es: {
            "nav.about": "Sobre mí",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.contact": "Contacto",
            "nav.resume": "CV",

            "hero.eyebrow": "HOLA, SOY ANDRÉS",
            "hero.title1": "Estudiante de",
            "hero.title2": "Computación",
            "hero.title3": "y Economía.",

            "hero.description":
                "Desarrollo software, analizo datos y resuelvo problemas complejos mediante tecnología y pensamiento computacional.",

            "hero.github": "GitHub",
            "hero.projects": "Ver proyectos",

            "hero.status":
                "Disponible para oportunidades de pasantías",

            "about.title":
                "Sobre mí",

            "about.paragraph1":
                "Soy estudiante de Ciencias de la Computación y Economía, interesado en el desarrollo de software, análisis de datos y resolución de problemas.",

            "about.paragraph2":
                "Durante mi trayectoria universitaria he trabajado en proyectos relacionados con programación, desarrollo backend, análisis de datos, econometría, arquitectura de computadores e ingeniería de software.",

            "about.paragraph3":
                "Me gusta aprender nuevas tecnologías y transformar conceptos teóricos en soluciones prácticas.",

            "about.education":
                "Educación",

            "about.field":
                "Carrera",

            "about.fieldValue":
                "Ciencias de la Computación y Economía",

            "about.status":
                "Estado",

            "about.semester":
                "Séptimo semestre",

            "about.location":
                "Ubicación",

            "projects.title":
                "Proyectos destacados",

            "projects.tictactoe.title":
                "Tres en Raya",

            "projects.tictactoe.description":
                "Implementación full-stack de un juego de Tres en Raya utilizando una API REST y un frontend independiente.",

            "projects.census.title":
                "Análisis del Censo de Ecuador",

            "projects.census.description":
                "Proyecto de análisis de datos utilizando información del censo ecuatoriano para estudiar variables socioeconómicas y demográficas.",

            "projects.software.title":
                "Proyectos de Software",

            "projects.software.description":
                "Colección de proyectos académicos desarrollados durante mis estudios de Ciencias de la Computación.",

            "skills.title":
                "Habilidades y tecnologías",

            "skills.languages":
                "Lenguajes",

            "skills.development":
                "Desarrollo",

            "skills.data":
                "Datos",

            "contact.title":
                "Conectemos.",

            "contact.description":
                "Actualmente estoy preparándome para oportunidades de pasantías y me encantaría conectar.",

            "footer.built":
                "Desarrollado con HTML, CSS y JavaScript"
        }

    };


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage(language) {

        console.log("Changing language to:", language);

        const selectedLanguage =
            translations[language];

        if (!selectedLanguage) {
            console.error(
                "Language not found:",
                language
            );
            return;
        }


        /* ---------------------------------------------
           Translate elements
        --------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.dataset.i18n;

                if (
                    Object.prototype.hasOwnProperty.call(
                        selectedLanguage,
                        key
                    )
                ) {

                    element.textContent =
                        selectedLanguage[key];

                }

            });


        /* ---------------------------------------------
           Update HTML language
        --------------------------------------------- */

        document.documentElement.lang =
            language;


        /* ---------------------------------------------
           Update buttons
        --------------------------------------------- */

        const englishButton =
            document.getElementById("lang-en");

        const spanishButton =
            document.getElementById("lang-es");


        englishButton?.classList.remove("active");

        spanishButton?.classList.remove("active");


        if (language === "en") {

            englishButton?.classList.add("active");

        } else {

            spanishButton?.classList.add("active");

        }


        /* ---------------------------------------------
           Save language
        --------------------------------------------- */

        localStorage.setItem(
            "portfolioLanguage",
            language
        );


        console.log(
            "Language successfully changed to:",
            language
        );
    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    const englishButton =
        document.getElementById("lang-en");

    const spanishButton =
        document.getElementById("lang-es");


    if (englishButton) {

        englishButton.addEventListener(
            "click",
            () => changeLanguage("en")
        );

    }


    if (spanishButton) {

        spanishButton.addEventListener(
            "click",
            () => changeLanguage("es")
        );

    }


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            "portfolioLanguage"
        );


    if (
        savedLanguage === "es" ||
        savedLanguage === "en"
    ) {

        changeLanguage(savedLanguage);

    } else {

        changeLanguage("en");

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });


    console.log(
        "✓ Portfolio JavaScript loaded correctly."
    );

});
