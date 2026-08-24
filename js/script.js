
/* =========================================================
   ANDRÉS LANCHIMBA — PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   1. TRANSLATIONS
   ========================================================= */

const translations = {


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        nav: {

            about:
                "About",

            projects:
                "Projects",

            skills:
                "Skills",

            contact:
                "Contact",

            resume:
                "Resume"

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

        }

    },


    /* =====================================================
       SPANISH
    ===================================================== */

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

        }

    }

};


/* =========================================================
   2. GET TRANSLATION
   ========================================================= */

function getTranslation(object, path) {

    return path
        .split(".")
        .reduce(

            (current, key) =>
                current
                    ? current[key]
                    : null,

            object

        );

}


/* =========================================================
   3. SET LANGUAGE
   ========================================================= */

function setLanguage(language) {


    /* Get all translatable elements */

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    /* Translate elements */

    elements.forEach(
        (element) => {


            const key =
                element.getAttribute(
                    "data-i18n"
                );


            const value =
                getTranslation(
                    translations[language],
                    key
                );


            if (value) {

                element.textContent =
                    value;

            }

        }
    );


    /* Update language buttons */

    document
        .querySelectorAll(
            ".language-btn"
        )
        .forEach(
            (button) => {

                button.classList.remove(
                    "active"
                );

            }
        );


    const activeButton =
        document.querySelector(
            `#lang-${language}`
        );


    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }


    /* Update document language */

    document.documentElement.lang =
        language;


    /* Save preference */

    localStorage.setItem(
        "preferredLanguage",
        language
    );

}


/* =========================================================
   4. LANGUAGE BUTTONS
   ========================================================= */

const englishButton =
    document.querySelector(
        "#lang-en"
    );


const spanishButton =
    document.querySelector(
        "#lang-es"
    );


if (englishButton) {

    englishButton.addEventListener(
        "click",
        () => setLanguage("en")
    );

}


if (spanishButton) {

    spanishButton.addEventListener(
        "click",
        () => setLanguage("es")
    );

}


/* =========================================================
   5. LOAD SAVED LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem(
        "preferredLanguage"
    );


if (savedLanguage === "es") {

    setLanguage("es");

} else {

    setLanguage("en");

}


/* =========================================================
   6. SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {


            entries.forEach(
                (entry) => {


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

            threshold:
                0.12

        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   7. SMOOTH NAVIGATION
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        '.nav-links a, .logo, .btn-secondary'
    );


navigationLinks.forEach(
    (link) => {


        link.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    !targetId.startsWith("#")
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

                    behavior:
                        "smooth"

                });

            }
        );

    }
);


/* =========================================================
   8. CURRENT YEAR
   ========================================================= */

const yearElement =
    document.querySelector(
        ".footer-container span"
    );


if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Andrés Lanchimba`;

}
