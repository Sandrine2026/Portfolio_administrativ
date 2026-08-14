/* =====================================================
   PORTFOLIO SANDRINE
   JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ÉLÉMENTS
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const year =
        document.getElementById("year");


    /* =================================================
       ANNÉE AUTOMATIQUE
    ================================================= */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       MENU MOBILE
    ================================================= */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Fermer le menu"
                        : "Ouvrir le menu"
                );

            }
        );


        /* Fermer le menu après un clic */

        const links =
            navLinks.querySelectorAll("a");

        links.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Ouvrir le menu"
                    );

                }
            );

        });

    }


    /* =================================================
       ANIMATION AU SCROLL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                obs.unobserve(
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
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =================================================
       SECTION ACTIVE
    ================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const menuItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            menuItems.forEach(
                                (item) => {

                                    item.classList.remove(
                                        "active"
                                    );


                                    if (
                                        item.getAttribute(
                                            "href"
                                        )
                                        ===
                                        `#${entry.target.id}`
                                    ) {

                                        item.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px",

                threshold:
                    0
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

});