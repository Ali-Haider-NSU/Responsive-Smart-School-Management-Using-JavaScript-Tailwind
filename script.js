/*
// Menu bar
let menu = document.getElementById("menubar");
            let crossbar = document.getElementById("crossbar");
            let mainul = document.getElementById("mainul");

            menu.addEventListener('click', () => {
                mainul.style.display = "block";
                menu.style.display = "none";
                crossbar.style.display = "block";

            })

            crossbar.addEventListener('click', () => {
                mainul.style.display = "none";
                menu.style.display = "block";
                crossbar.style.display = "none";

            })


            let dropmenu = document.getElementById("dropmenu");
            let menudown = document.getElementById("menudown");
            let menuup = document.getElementById("menuup");
            let dropul = document.getElementById("dropul");

            menudown.addEventListener('click', () => {
                menudown.style.display = "none";
                menuup.style.display = "block";
                dropul.style.display = "block";

            });


            menuup.addEventListener('click', () => {
                menuup.style.display = "none";
                menudown.style.display = "block";
                dropul.style.display = "none";

            });

            function hideOnLgScreen() {
                let elementToHide = document.getElementById('menubar');
                let elementToHidecross = document.getElementById('crossbar');
                let element = document.getElementById("mainul");
                let isLgScreen = window.matchMedia('(min-width: 1024px)').matches;
                if (isLgScreen) {
                    elementToHide.style.display = 'none';
                    elementToHidecross.style.display = 'none';
                    element.style.marginRight = '400px';
                    element.style.visibility = "visible";
                    element.style.position = 'static';
                    element.style.display = "flex";
                    element.style.justifyContent = "around";
                    element.style.marginTop = '5px';
                    element.style.width = '0px';

                } else {
                    elementToHide.style.display = 'block';
                    element.style.display = "none";
                    element.style.marginTop = '80px';
                    element.style.position = 'fixed';
                    let computedStyle = window.getComputedStyle(elementToHide);
                    if (computedStyle.display === 'block') {
                        elementToHidecross.style.display = 'none';
                    } else {
                        elementToHide.style.display = 'none';
                        elementToHidecross.style.display = 'block';
                    }
                }
            }
            window.addEventListener('load', hideOnLgScreen);
            window.addEventListener('resize', hideOnLgScreen);
*/