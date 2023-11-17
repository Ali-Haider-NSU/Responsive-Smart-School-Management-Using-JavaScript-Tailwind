/*
// Navigation Part 

let menu = document.getElementById('menubar');
            let crossbar = document.getElementById('crossbar');
            let mainul = document.getElementById('mainul');
            let navdiv = document.getElementById('navdiv');

            menu.addEventListener('click', () => {
                mainul.style.display = 'block';
                menu.style.display = 'none';
                crossbar.style.display = 'block';
                navdiv.style.height = '310px';

            })

            crossbar.addEventListener('click', () => {
                mainul.style.display = 'none';
                menu.style.display = 'block';
                crossbar.style.display = 'none';
                navdiv.style.height = '96px';

            })

            // Dropdown Ul 

            let dropmenu = document.getElementById('dropmenu');
            let menudown = document.getElementById('menudown');
            let menuup = document.getElementById('menuup');
            let dropul = document.getElementById('dropul');

            menudown.addEventListener('click', () => {
                menudown.style.display = 'none';
                menuup.style.display = 'block';
                dropul.style.display = 'block';
                if (window.innerWidth >= 1024) {
                    navdiv.style.height = '96px';
                } else {
                    navdiv.style.height = '430px';
                }
            });


            menuup.addEventListener('click', () => {
                menuup.style.display = "none";
                menudown.style.display = "block";
                dropul.style.display = "none";
                if (window.innerWidth >= 1024) {
                    navdiv.style.height = '96px';
                } else {
                    navdiv.style.height = '308px';
                }
            });


            // For Large and Small Screen

            function hideOnLgScreen() {
                let elementToHide = document.getElementById('menubar');
                let elementToHidecross = document.getElementById('crossbar');
                let element = document.getElementById('mainul');
                let isLgScreen = window.matchMedia('(min-width: 1024px)').matches;
                if (isLgScreen) {
                    elementToHide.style.display = 'none';
                    elementToHidecross.style.display = 'none';
                    element.style.visibility = 'visible';
                    element.style.position = 'fixed';
                    element.style.left = '27%';
                    element.style.top = '30px';
                    element.style.display = 'flex';
                    element.style.justifyContent = 'around';
                    element.style.marginTop = '0px';
                    element.style.width = '0px';
                    navdiv.style.height = '96px';

                } else {
                    elementToHide.style.display = 'block';
                    element.style.display = 'none';
                    element.style.marginTop = '80px';
                    element.style.position = 'fixed';
                    element.style.left = '28px';
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

            // For Background Image

            window.addEventListener('resize', () => {
                let bgimg1 = document.getElementById('bgimg1');
                let bgimg2 = document.getElementById('bgimg2');
                let ratio = 1.5;
                let newWidth = bgimg1.offsetWidth;
                let newHeight = newWidth / ratio;
                bgimg1.style.height = newHeight + 'px';
                bgimg2.style.height = newHeight + 'px';
            })

            let bgimg1 = document.getElementById('bgimg1');
            let bgimg2 = document.getElementById('bgimg2');
            let leftbtn = document.getElementById('left-btn');
            let rightbtn = document.getElementById('right-btn');

            leftbtn.addEventListener('click', () => {

                if (window.getComputedStyle(bgimg1, null).getPropertyValue("display") == 'block') {
                    bgimg1.style.display = 'none';
                    bgimg2.style.display = 'block';

                } else {
                    bgimg1.style.display = 'block';
                    bgimg2.style.display = 'none';
                }

            })

            rightbtn.addEventListener('click', () => {

                if (window.getComputedStyle(bgimg2, null).getPropertyValue("display") == 'none') {
                    bgimg1.style.display = 'none';
                    bgimg2.style.display = 'block';


                } else {
                    bgimg1.style.display = 'block';
                    bgimg2.style.display = 'none';

                }
            })


            // Facility Section

            let facilityicon1 = document.querySelector('.facility-icon1');

            facilityicon1.addEventListener('mouseover', () => {
                for (let i = 0; i < facilityicon1.getElementsByClassName('textcol').length; i++) {
                    facilityicon1.getElementsByClassName('textcol')[i].style.color = 'white';
                    if (i < 2) {
                        facilityicon1.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#FE5D37';
                    }

                }
            })
            facilityicon1.addEventListener('mouseout', () => {
                facilityicon1.getElementsByClassName('textcol')[2].style.color = '#103741';
                for (let i = 0; i < facilityicon1.getElementsByClassName('textcol').length - 1; i++) {
                    facilityicon1.getElementsByClassName('textcol')[i].style.color = '#FE5D37';
                    if (i < 2) {
                        facilityicon1.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#FFEFEB';
                    }

                }
            })


            let facilityicon2 = document.querySelector('.facility-icon2');

            facilityicon2.addEventListener('mouseover', () => {
                for (let i = 0; i < facilityicon2.getElementsByClassName('textcol').length; i++) {
                    facilityicon2.getElementsByClassName('textcol')[i].style.color = 'white';
                    if (i < 2) {
                        facilityicon2.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#198754';
                    }

                }
            })
            facilityicon2.addEventListener('mouseout', () => {
                facilityicon2.getElementsByClassName('textcol')[2].style.color = '#103741';
                for (let i = 0; i < facilityicon2.getElementsByClassName('textcol').length - 1; i++) {
                    facilityicon2.getElementsByClassName('textcol')[i].style.color = '#198754';
                    if (i < 2) {
                        facilityicon2.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#E8F3EE';
                    }

                }
            })



            let facilityicon3 = document.querySelector('.facility-icon3');

            facilityicon3.addEventListener('mouseover', () => {
                for (let i = 0; i < facilityicon3.getElementsByClassName('textcol').length; i++) {
                    facilityicon3.getElementsByClassName('textcol')[i].style.color = 'white';
                    if (i < 2) {
                        facilityicon3.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#FFC107';
                    }

                }
            })
            facilityicon3.addEventListener('mouseout', () => {
                facilityicon3.getElementsByClassName('textcol')[2].style.color = '#103741';
                for (let i = 0; i < facilityicon3.getElementsByClassName('textcol').length - 1; i++) {
                    facilityicon3.getElementsByClassName('textcol')[i].style.color = '#FFC107';
                    if (i < 2) {
                        facilityicon3.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#FFF9E7';
                    }

                }
            })


            let facilityicon4 = document.querySelector('.facility-icon4');

            facilityicon4.addEventListener('mouseover', () => {
                for (let i = 0; i < facilityicon4.getElementsByClassName('textcol').length; i++) {
                    facilityicon4.getElementsByClassName('textcol')[i].style.color = 'white';
                    if (i < 2) {
                        facilityicon4.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#0DCAF0';
                    }

                }
            })
            facilityicon4.addEventListener('mouseout', () => {
                facilityicon4.getElementsByClassName('textcol')[2].style.color = '#103741';
                for (let i = 0; i < facilityicon4.getElementsByClassName('textcol').length - 1; i++) {
                    facilityicon4.getElementsByClassName('textcol')[i].style.color = '#0DCAF0';
                    if (i < 2) {
                        facilityicon4.getElementsByClassName('innerdiv')[i].style.backgroundColor = '#E7FAFE';
                    }

                }
            })


            // Testimonial Slider Section

            let slides = document.querySelectorAll('.client');
            var counter = 0;
            slides.forEach(
                (slide, index) => {
                    slide.style.left = `${index*100}%`
                }
            )

            let goPrev = () => {
                counter--;

                slideImage();

            }

            let goNext = () => {
                counter++;

                slideImage();


            }
            let slideImage = () => {
                slides.forEach(
                    (slide) => {
                        slide.style.transform = `translateX(-${counter*100}%)`
                    }
                )
            }
*/