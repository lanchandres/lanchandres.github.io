/* =========================================================
   ANDRÉS LANCHIMBA
   PORTFOLIO JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            nav: {

                about: "About",

                projects: "Projects",

                skills: "Skills",

                contact: "Contact",

                resume: "Resume"

            },


            hero: {

                eyebrow:
                    "HELLO, I'M ANDRÉS",

                title1:
                    "Computer Science",

                title2:
                    "& Economics",

                title3:
                    "Student.",

                description:
                    "I build software, analyze data, and solve complex problems through technology and computational thinking.",

                github:
                    "GitHub",

                projects:
                    "View Projects",

                status:
                    "Open to internship opportunities"

            },


            about: {

                title:
                    "About Me",

                paragraph1:
                    "I am a Computer Science and Economics student interested in software development, data analysis, and problem solving.",

                paragraph2:
                    "Throughout my university experience, I have worked on projects involving programming, backend development, data analysis, econometrics, computer architecture, and software engineering.",

                paragraph3:
                    "I enjoy learning new technologies and turning theoretical concepts into practical solutions.",

                education:
                    "Education",

                field:
                    "Field",

                fieldValue:
                    "Computer Science & Economics",

                status:
                    "Status",

                semester:
                    "7th Semester",

                location:
                    "Location"

            },


            projects: {

                title:
                    "Featured Projects",


                tictactoe: {

                    title:
                        "Tic Tac Toe",

                    description:
                        "Full-stack implementation of a Tic Tac Toe game using a REST API and a separate frontend."

                },


                census: {

                    title:
                        "Ecuador Census Analysis",

                    description:
                        "Data analysis project using Ecuador's census data to study socioeconomic and demographic variables."

                },


                software: {

                    title:
                        "Software Projects",

                    description:
                        "Collection of academic projects developed during my Computer Science studies."

                }

            },


            skills: {

                title:
                    "Skills & Technologies",

                languages:
                    "Languages",

                development:
                    "Development",

                data:
                    "Data"

            },


            contact: {

                title:
                    "Let's Connect.",

                description:
                    "I'm currently preparing for internship opportunities and would love to connect."

            },


            footer: {

                built:
                    "Built with HTML, CSS & JavaScript"

            }

        },


        /* =================================================
           SPANISH
        ================================================= */

        es: {

            nav: {

                about:
                    "Sobre mí",

                projects:
                    "Proyectos",

                skills:
                    "Habilidades",

                contact:
                    "Contacto",

                resume:
                    "CV"

            },


            hero: {

                eyebrow:
                    "HOLA, SOY ANDRÉS",

                title1:
                    "Estudiante de",

                title2:
                    "Computación",

                title3:
                    "y Economía.",

                description:
                    "Desarrollo software, analizo datos y resuelvo problemas complejos mediante tecnología y pensamiento computacional.",

                github:
                    "GitHub",

                projects:
                    "Ver proyectos",

                status:
                    "Disponible para oportunidades de pasantías"

            },


            about: {

                title:
                    "Sobre mí",

                paragraph1:
                    "Soy estudiante de Ciencias de la Computación y Economía, interesado en el desarrollo de software, análisis de datos y resolución de problemas.",

                paragraph2:
                    "Durante mi trayectoria universitaria he trabajado en proyectos relacionados con programación, desarrollo backend, análisis de datos, econometría, arquitectura de computadores e ingeniería de software.",

                paragraph3:
                    "Me gusta aprender nuevas tecnologías y transformar conceptos teóricos en soluciones prácticas.",

                education:
                    "Educación",

                field:
                    "Carrera",

                fieldValue:
                    "Ciencias de la Computación y Economía",

                status:
                    "Estado",

                semester:
                    "Séptimo semestre",

                location:
                    "Ubicación"

            },


            projects: {

                title:
                    "Proyectos destacados",


                tictactoe: {

                    title:
                        "Tres en Raya",

                    description:
                        "Implementación full-stack de un juego de Tres en Raya utilizando una API REST y un frontend independiente."

                },


                census: {

                    title:
                        "Análisis del Censo de Ecuador",

                    description:
                        "Proyecto de análisis de datos utilizando información del censo ecuatoriano para estudiar variables socioeconómicas y demográficas."

                },


                software: {

                    title:
                        "Proyectos de Software",

                    description:
                        "Colección de proyectos académicos desarrollados durante mis estudios de Ciencias de la Computación."

                }

            },


            skills: {

                title:
                    "Habilidades y tecnologías",

                languages:
                    "Lenguajes",

                development:
                    "Desarrollo",

                data:
                    "Datos"

            },


            contact: {

                title:
                    "Conectemos.",

                description:
                    "Actualmente estoy preparándome para oportunidades de pasantías y me encantaría conectar."

            },


            footer: {

                built:
                    "Desarrollado con HTML, CSS y JavaScript"

            }

        }

    };


    /* =====================================================
       GET NESTED TRANSLATION
    ===================================================== */

    function getTranslation(language, key) {

        const keys = key.split(".");

        let value = translations[language];

        for (const currentKey of keys) {

            if (
                value === undefined ||
                value === null
            ) {

                return null;

            }

            value = value[currentKey];

        }

        return value;

    }


    /* =====================================================
       SET LANGUAGE
    ===================================================== */

    function setLanguage(language) {

        if (!translations[language]) {

            console.error(
                "Invalid language:",
                language
            );

            return;

        }


        /* Translate all elements */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            const translation =
                getTranslation(
                    language,
                    key
                );


            if (translation !== null) {

                element.textContent =
                    translation;

            }

        });


        /* Update active language button */

        const languageButtons =
            document.querySelectorAll(
                ".language-btn"
            );


        languageButtons.forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

            }
        );


        const activeButton =
            document.getElementById(
                "lang-" + language
            );


        if (activeButton) {

            activeButton.classList.add(
                "active"
            );

        }


        /* Update HTML language */

        document.documentElement.lang =
            language;


        /* Save preference */

        localStorage.setItem(
            "preferredLanguage",
            language
        );


        console.log(
            "Language changed to:",
            language
        );

    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    const englishButton =
        document.getElementById(
            "lang-en"
        );


    const spanishButton =
        document.getElementById(
            "lang-es"
        );


    if (englishButton) {

        englishButton.addEventListener(
            "click",
            function () {

                setLanguage("en");

            }
        );

    }


    if (spanishButton) {

        spanishButton.addEventListener(
            "click",
            function () {

                setLanguage("es");

            }
        );

    }


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            "preferredLanguage"
        );


    if (
        savedLanguage === "en" ||
        savedLanguage === "es"
    ) {

        setLanguage(
            savedLanguage
        );

    } else {

        setLanguage("en");

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

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

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
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

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "✓ Andrés Lanchimba Portfolio loaded successfully."
    );

});
