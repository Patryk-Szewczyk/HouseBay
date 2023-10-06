// Strona ta to: agencja nieruchomości



const RWD_info_Obj: {
    phone: number,
    desktop: number
    //sliderDescExtraWidthValFunc: Function
} = {
    phone: 0,
    desktop: 900,
    //sliderDescExtraWidthValFunc
};



const navbar_Mobile_Obj: {
    windowWidth: number,
    isShowed: boolean,
    eventsPageLoad: string[],
    eventsWindow: string[],
    eventsClick: string[],
    setNavbar: Function,
    setNavPgTitBxWdt: Function,
    navMoving: Function
} = {
    windowWidth: 0,
    isShowed: false,
    eventsPageLoad: ['load'],
    eventsWindow: ['load', 'resize'],
    eventsClick: ['click', 'touchend'],
    setNavbar() {
        let navbarEL: HTMLDivElement = document.querySelector('div.navbar-box');
        this.eventsPageLoad.forEach((ev) => {
            window.addEventListener(ev, () => {
                if (this.windowWidth < RWD_info_Obj.desktop) {
                    navbarEL.style.top = 0 + 'px';
                    navbarEL.style.transitionDelay = 0.1 + 's';
                    navbarEL.style.transitionDuration = 0.6 + 's';
                } else if (this.windowWidth >= RWD_info_Obj.desktop) {
                    navbarEL.style.top = 0 + 'px';
                    navbarEL.style.transitionDelay = 0.1 + 's';
                    navbarEL.style.transitionDuration = 0.6 + 's';
                }
            }, false);
        });
        this.setNavPgTitBxWdt();
    },
    setNavPgTitBxWdt() {
        // Eksperynet: (Cel: wyśrodkowanie tytułu strony)
        // Iteracja po indeksach typu "string" obiektu "Map" za pomocą indeksów z wartością 
        // "string" innej tablicy (odpowiadającej nazwą indeksów z obiektu "Map"):
        /*this.eventsWindow.forEach((ev) => {
            window.addEventListener(ev, () => {
                const navEl_Array: any[] = [];
                navEl_Array[0] = document.querySelector('div.navbar-mobile-content-box-childHanger');
                navEl_Array[1] = document.querySelector('div.page-logo-box');
                navEl_Array[2] = document.querySelector('div.page-dropdown-button-box');
                let navElVal_Array: { [index: string]: any } = [];
                navElVal_Array['cntBox'] = 0;
                navElVal_Array['logo'] = 0;
                navElVal_Array['butotn'] = 0;
                let strId: string[] = ['cntBox', 'logo', 'butotn'];
                for (let i = 0; i < navEl_Array.length; i++) {
                    const navElVal_Array_Obj: CSSStyleDeclaration = window.getComputedStyle(navEl_Array[i], null);
                    let navElVal_Array_CSS_Width_Str: string = navElVal_Array_Obj.getPropertyValue('width');
                    navElVal_Array_CSS_Width_Str = navElVal_Array_CSS_Width_Str.slice(0, -2);
                    navElVal_Array[strId[i]] = Number(navElVal_Array_CSS_Width_Str);
                };
                //console.log(navElVal_Array);
                // Calculate:
                const setNavPgTitBx: HTMLDivElement = document.querySelector('div.page-title-box');
                let toWdtVal: number = 0;
                toWdtVal = (navElVal_Array.cntBox - (navElVal_Array.logo + navElVal_Array.butotn));
                setNavPgTitBx.style.width = toWdtVal + 'px';
            }, false);
        });*/
        this.navMoving();
    },
    navMoving() {   // - mobile nav button
        const navBut: HTMLDivElement = document.querySelector('div.page-dropdown-button-proper');
        const navCntBx: HTMLDivElement = document.querySelector('div.navbar-mobile-content-box');
        const topStrip: HTMLDivElement = document.querySelector('div.bs-top');
        const centerStrip: HTMLDivElement = document.querySelector('div.bs-center');
        const bottomStrip: HTMLDivElement = document.querySelector('div.bs-bottom');
        const navButGroup: HTMLDivElement = document.querySelector('div.navbar-mobile-button-group');
        this.eventsClick.forEach((ev) => {
            navBut.addEventListener(ev, () => {
                if (this.isShowed === false) {   // Show
                    // Navbar content:
                    let toHgt: number = window.innerHeight;
                    navCntBx.style.height = (60 + (42 * 6) + 17) + 'px';
                    navCntBx.style.transitionDuration = 0.4 + 's';
                    navButGroup.style.top = 0 + 'px';
                    navButGroup.style.transitionDuration = 0.4 + 's';
                    // Navbar strips:
                    let toCenterPos: number = (((60 - 18) / 2) / 2) -0.5;
                    topStrip.style.top = toCenterPos + 'px';
                    topStrip.style.transitionDuration = 0.3 + 's';
                    bottomStrip.style.bottom = toCenterPos + 'px';
                    bottomStrip.style.transitionDuration = 0.3 + 's';
                    setTimeout(() => {
                        centerStrip.style.opacity = '0.0';
                        topStrip.style.transform = 'rotate(' + 45 + 'deg)';
                        topStrip.style.transitionDuration = 0.3 + 's';
                        bottomStrip.style.transform = 'rotate(' + -45 + 'deg)';
                        bottomStrip.style.transitionDuration = 0.3 + 's';
                    }, 300);
                    setTimeout(() => {
                        this.isShowed = true;
                        console.log(this.isShowed);
                    }, 600);
                } else if (this.isShowed === true) {   // Hide
                    // Navbar content:
                    navCntBx.style.height = 60 + 'px';
                    navCntBx.style.transitionDuration = 0.4 + 's';
                    navButGroup.style.top = -301 + 'px';
                    navButGroup.style.transitionDuration = 0.4 + 's';
                    // Navbar strips:
                    let resetPos: number = 0;
                    topStrip.style.transform = 'rotate(' + 0 + 'deg)';
                    topStrip.style.transitionDuration = 0.3 + 's';
                    bottomStrip.style.transform = 'rotate(' + 0 + 'deg)';
                    bottomStrip.style.transitionDuration = 0.3 + 's';
                    setTimeout(() => {
                        centerStrip.style.opacity = '1.0';
                        topStrip.style.top = resetPos + 'px';
                        topStrip.style.transitionDuration = 0.3 + 's';
                        bottomStrip.style.bottom = resetPos + 'px';
                        bottomStrip.style.transitionDuration = 0.3 + 's';
                    }, 300);
                    setTimeout(() => {
                        this.isShowed = false;
                        console.log(this.isShowed);
                    }, 600);
                }
            }, false);
        });
    }
};
navbar_Mobile_Obj.setNavbar();



const slider_Obj: {
    windowHeight: number,
    windowWidth: number,
    imageAmount: number,
    currentImg: number,
    sliderDescExtraWidth: number,
    blockadeImg: boolean,
    eventsWindowTable: string[],
    eventsClickTable: string[],
    imagesArray: HTMLDivElement[],
    stateELNodeList: HTMLDivElement[],
    setWinBdHeight: Function,
    createSldELS: Function,
    returnSliderTitELS: Function,
    returnSliderDescELS: Function,
    returnSliderButELS: Function,
    setSliderDescWidthAEL: Function,
    createSldImgStateEL: Function,
    setAEL_SldMoving: Function,
    setAEL_ImgLeftResize: Function,
    positingSldEl: Function
} = {
    // UWAGA: Wywołanie właściwość "length" spowoduje, iż typem wynikowym bęzie "number",
    // a nie "HTMLDivElement" w przypadku braku właściwości "length".
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageAmount: 6,   // RUCHOMA WARTOŚĆ - wartość jest równoważna z ilością zdjęć do image slidera
    currentImg: 0,
    sliderDescExtraWidth: 0,
    blockadeImg: false,
    eventsWindowTable: ['load', 'resize'],
    eventsClickTable: ['click', 'touchend'],
    imagesArray: [],
    stateELNodeList: [],
    setWinBdHeight() {
        const windowBodyEL: HTMLDivElement = document.querySelector('div.window-block');
        this.eventsWindowTable.forEach((ev) => {
            window.addEventListener(ev, () => {
                this.windowHeight = window.innerHeight;
                windowBodyEL.style.height = this.windowHeight + 'px';
                //console.log(this.windowHeight);
            });
        });
        slider_Obj.createSldELS();
    },
    createSldELS() {
        const sliderParentBox: HTMLDivElement = document.querySelector('div.img-slider-body');
        const sldTitTxt: string[] = [
            'Your dream house',
            'True constructions',
            'Modern design',
            'Rich interiors',
            'Ideal locations',
            'Simple and modest',
        ];
        const sldDscTxt: string[] = [
            'Our company will find the house of your dreams for you.',
            'Houses which we offer to clients are building from incredibly tough materials.',
            'Among our houses can mark out many style types. The once from them is modern style, which is currently hugely popular.',
            'Our houses have rich interior, including substantial performance and abundant furnishings.',
            'All buildings are located in greater agglomerations as well as they be located close environments parks.',
            'Among a plenty our constructions also are simple style type houses. They are perfect choose for averege peoples.',
        ];
        const sldTitTN: Text[] = [];
        const sldDscTN: Text[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldTitTN[i] = document.createTextNode(sldTitTxt[i]);
            sldDscTN[i] = document.createTextNode(sldDscTxt[i]);
        };
        for (let i = 0; i < this.imageAmount; i++) {
            const sldDimEl: HTMLDivElement = document.createElement('div');
            const sldPrpEl: HTMLImageElement = document.createElement('img');
            const sldInfEL: HTMLDivElement = document.createElement('div');
            const sldInfHngEl: HTMLDivElement = document.createElement('div');
            const sldTitEL: HTMLDivElement = document.createElement('div');
            const sldDscEL: HTMLDivElement = document.createElement('div');
            const sldButEL: HTMLDivElement = document.createElement('div');
            sldDimEl.setAttribute('class', 'img-slider-img-dim');
            sldPrpEl.setAttribute('class', 'img-slider-img-prp');
            sldInfEL.setAttribute('class', 'img-slider-info-box');
            sldInfHngEl.setAttribute('class', 'img-slider-info-box-hanger');
            sldTitEL.setAttribute('class', 'img-slider-title');
            sldDscEL.setAttribute('class', 'img-slider-description');
            sldButEL.setAttribute('class', 'img-slider-button');
            sldPrpEl.setAttribute('src', 'hb-images-slider/img_' + (i + 1) + '.jpg');
            sldDimEl.appendChild(sldPrpEl);
            sldTitEL.appendChild(sldTitTN[i]);
            sldInfHngEl.appendChild(sldTitEL);
            sldDscEL.appendChild(sldDscTN[i]);
            sldInfHngEl.appendChild(sldDscEL);
            sldInfHngEl.appendChild(sldButEL);
            sldInfEL.appendChild(sldInfHngEl);
            sldDimEl.appendChild(sldInfEL);
            sliderParentBox.appendChild(sldDimEl);
        };
        // First img animation:
        let el: any = document.querySelectorAll('img.img-slider-img-prp')[0];
        el.style.height = 115 + '%';
        el.style.filter = 'brightness(100%)';
        setTimeout(() => {
            el.style.height = 100 + '%';
            el.style.filter = 'brightness(30%)';
            el.style.transitionDuration = 1.4 + 's';
        }, 100);
        //console.table(this.imagesArray);
        slider_Obj.setSliderDescWidthAEL();
        slider_Obj.createSldImgStateEL();
    },
    returnSliderTitELS() {
        const sldTitELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title');
        };
        return sldTitELS;
    },
    returnSliderDescELS() {
        const sldDescELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description');
        };
        return sldDescELS;
    },
    returnSliderButELS() {
        const sldButELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('div.img-slider-button');
        };
        return sldButELS;
    },
    setSliderDescWidthAEL() {
        slider_Obj.eventsWindowTable.forEach((ev) => {
            window.addEventListener(ev, () => {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                const sldDescELS: any[] = [];
                //console.log(sldDescELS);
                const sldTitWdtVALS: any[] = [];
                for (let i = 0; i < this.imageAmount; i++) {
                    sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                    const sldTitWdtVALS_CSS_Obj: CSSStyleDeclaration = window.getComputedStyle(document.querySelectorAll('div.img-slider-title')[i], null);
                    let sldTitWdtVALS_CSS_Val_Str: string = sldTitWdtVALS_CSS_Obj.getPropertyValue('width');
                    let sldTitWdtVALS_CSS_Val_Num: number = Number(sldTitWdtVALS_CSS_Val_Str.slice(0, -2));
                    sldTitWdtVALS[i] = sldTitWdtVALS_CSS_Val_Num;
                };
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    this.extraWdt = 0;
                } else if (window.innerWidth >= RWD_info_Obj.desktop) {
                    this.extraWdt = 150;
                    console.log(this.extraWdt);
                }
                if (window.innerWidth )
                sldTitWdtVALS.map((value, i) => {   // Modyfikowanie wartości szerokości
                    sldTitWdtVALS[i] = value + this.extraWdt;
                });
                sldDescELS.forEach((value, i) => {   // Ustawianie szerokości dla każdego elementu
                    let toWdtVal = sldTitWdtVALS[i];
                    sldDescELS[i].style.width = toWdtVal + 'px';
                });
                // Wywołanie kolejnej funkcji}, false);
            }, false);
        });
    },
    createSldImgStateEL() {
        const stateParentEL: HTMLDivElement = document.querySelector('div.iscb-ib-is-group-box');
        for (let i = 0; i < this.imageAmount; i++) {
            const stateEL: HTMLDivElement = document.createElement('div');
            stateEL.setAttribute('class', 'iscb-ib-is-once-box');
            stateParentEL.appendChild(stateEL);
        };
        for (let i = 0; i < this.imageAmount; i++) {
            this.stateELNodeList[i] = document.querySelectorAll('div.iscb-ib-is-once-box')[i];
            this.stateELNodeList[i].style.top = 40 + 'px';
            this.stateELNodeList[i].style.opacity = 0;
        };
        let intervIndex: number = 0;
        let intervFunc = setInterval(() => {
            if (intervIndex < this.imageAmount) {
                this.stateELNodeList[intervIndex].style.top = 0 + 'px';
                this.stateELNodeList[intervIndex].style.opacity = 1;
                this.stateELNodeList[intervIndex].style.transitionDuration = 0.2 + 's';
            } else if (intervIndex >= this.imageAmount) {
                clearInterval(intervFunc);
            }
            intervIndex += 1;
        }, 150);

        this.positingSldEl();
    },
    positingSldEl() {
        ['load'].forEach((ev) => {   // UWAGA! MEGA WAŻNE! Jeżeli skończyłeś funkcję "resize" właściwośći "left"/"right", usuń stąd zdarzenie "resize", a zostaw samo "load"
            window.addEventListener(ev, () => {
                const sldTitELS: any[] = [];
                const sldDescELS: any[] = [];
                const sldButELS: any[] = [];
                for (let i = 0; i < this.imageAmount; i++) {
                    sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
                    sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                    sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
                };
                this.windowWidth = window.innerWidth;
                let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth + 10);   // Szerokość stałego scrollbar'a strony
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                for (let i = 0; i < this.imageAmount; i++) {
                    this.imagesArray[i] = document.querySelectorAll('div.img-slider-img-dim')[i];
                    if (i === 0) {   // Stały indeks pierwszaego obrazu
                        this.imagesArray[i].style.left = 0 + 'px';   // (-) left i (+) left działają DOBRZE!
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                        setTimeout(() => {
                            sldTitELS[i].style.top = 0 + 'px';
                            sldTitELS[i].style.opacity = 1; 
                            sldTitELS[i].style.transitionDuration = 0.0 + 'px';
                            setTimeout(() => {
                                sldDescELS[i].style.top = 0 + 'px';
                                sldDescELS[i].style.opacity = 1; 
                                sldDescELS[i].style.transitionDuration = 0.0 + 'px';
                                setTimeout(() => {
                                    sldButELS[i].style.top = 0 + 'px';
                                    sldButELS[i].style.opacity = 1; 
                                    sldButELS[i].style.transitionDuration = 0.0 + 'px';
                                }, 200);
                            }, 200);
                        }, 400);
                        continue;
                    } else {}
                    this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                };
                // Arrows animation:
                const arrowELS: HTMLDivElement[] = [];
                arrowELS[0] = document.querySelector('div.iscb-leftArrow-proper');
                arrowELS[1] = document.querySelector('div.iscb-rightArrow-proper');
                arrowELS[0].style.left = 100 + 'px';
                arrowELS[0].style.opacity = '0';
                arrowELS[1].style.right = 100 + 'px';
                arrowELS[1].style.opacity = '0';
                setTimeout(() => {
                    arrowELS[0].style.left = 0 + 'px';
                    arrowELS[0].style.opacity = '1';
                    arrowELS[0].style.transitionDuration = 0.6 + 's';
                    arrowELS[1].style.right = 0 + 'px';
                    arrowELS[1].style.opacity = '1';
                    arrowELS[1].style.transitionDuration = 0.6 + 's';
                }, 150);
            }, false);
        });
        this.setAEL_SldMoving();
    },
    setAEL_SldMoving() {
        let addToLeftPx: number = 0;
        const sliderBut: { [index: string]: HTMLDivElement } = {
            left: document.querySelector('div.iscb-leftArrow-box'),
            right: document.querySelector('div.iscb-rightArrow-box')
        };
        console.log('Aktualny obraz: ' + (this.currentImg + 1));
        this.eventsClickTable.forEach((ev) => {
            const sldTitELS: any[] = [];
            const sldDescELS: any[] = [];
            const sldButELS: any[] = [];
            for (let i = 0; i < this.imageAmount; i++) {
                sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
                sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
            };
            sliderBut.right.addEventListener(ev, () => {
                let imgSwitchLimit: number = (this.imageAmount - 1);   // Start = 0. Oper +1 = img_1 znika => img_2 pojawia się
                if (this.currentImg < imgSwitchLimit && this.blockadeImg === false) {
                    let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth);   // Stały pasek przewijania na stronie
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                    // Image:
                    this.imagesArray[this.currentImg].style.left = ((this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(() => {
                        sldTitELS[this.currentImg].style.top = 0 + 'px';
                        sldTitELS[this.currentImg].style.opacity = 1; 
                        sldTitELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg].style.top = 0 + 'px';
                            sldDescELS[this.currentImg].style.opacity = 1; 
                            sldDescELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(() => {
                                sldButELS[this.currentImg].style.top = 0 + 'px';
                                sldButELS[this.currentImg].style.opacity = 1; 
                                sldButELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    // Counter
                    this.currentImg += 1;
                    // Image
                    this.imagesArray[this.currentImg].style.left = 0 + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(() => {
                        sldTitELS[this.currentImg - 1].style.top = -20 + 'px';
                        sldTitELS[this.currentImg - 1].style.opacity = 0; 
                        sldTitELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg - 1].style.top = -20 + 'px';
                            sldDescELS[this.currentImg - 1].style.opacity = 0; 
                            sldDescELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(() => {
                                sldButELS[this.currentImg - 1].style.top = -20 + 'px';
                                sldButELS[this.currentImg - 1].style.opacity = 0; 
                                sldButELS[this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    // Slider status color:
                    for (let i = 0; i < this.imageAmount; i++) {
                        if (i === this.currentImg) {
                            this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                            continue;
                        } else {}
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    };
                    this.blockadeImg = true;
                    setTimeout(() => {
                        this.blockadeImg = false;
                    }, 1200);   // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                } else {}
            }, false);
            sliderBut.left.addEventListener(ev, () => {
                if (this.currentImg > 0 && this.blockadeImg === false) {
                    let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth);
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                    this.imagesArray[this.currentImg].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(() => {
                        sldTitELS[this.currentImg].style.top = 0 + 'px';
                        sldTitELS[this.currentImg].style.opacity = 1; 
                        sldTitELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg].style.top = 0 + 'px';
                            sldDescELS[this.currentImg].style.opacity = 1; 
                            sldDescELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(() => {
                                sldButELS[this.currentImg].style.top = 0 + 'px';
                                sldButELS[this.currentImg].style.opacity = 1; 
                                sldButELS[this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    this.currentImg -= 1;
                    this.imagesArray[this.currentImg].style.left = 0 + 'px';
                    this.imagesArray[this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(() => {
                        sldTitELS[this.currentImg + 1].style.top = -20 + 'px';
                        sldTitELS[this.currentImg + 1].style.opacity = 0; 
                        sldTitELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(() => {
                            sldDescELS[this.currentImg + 1].style.top = -20 + 'px';
                            sldDescELS[this.currentImg + 1].style.opacity = 0; 
                            sldDescELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(() => {
                                sldButELS[this.currentImg + 1].style.top = -20 + 'px';
                                sldButELS[this.currentImg + 1].style.opacity = 0; 
                                sldButELS[this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    for (let i = 0; i < this.imageAmount; i++) {
                        if (i === this.currentImg) {
                            this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                            continue;
                        } else {}
                        this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    };
                    this.blockadeImg = true;
                    setTimeout(() => {
                        this.blockadeImg = false;
                    }, 1200);   // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                } else {}
            }, false);
        });
    },
    setAEL_ImgLeftResize() {
        this.eventsWindowTable.forEach((ev) => {   // Zmień na load i sprawdź co się stanie
            window.addEventListener(ev, () => {
                this.windowWidth = innerWidth;
                let siteScrollbarWidth: number = (window.innerWidth - document.documentElement.clientWidth);
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null) siteScrollbarWidth = 0;
                for (let i = 0; i < this.imageAmount; i++) {
                    let onceImg_CSS_Obj: CSSStyleDeclaration = window.getComputedStyle(this.imagesArray[i], null);
                    let onceImg_CSS_Str: string = onceImg_CSS_Obj.getPropertyValue('left');
                    onceImg_CSS_Str = onceImg_CSS_Str.slice(0, -2);
                    let onceImg_CSS_Num: number = Number(onceImg_CSS_Str);
                    //console.log('Obraz ' + (i + 1) + ': "left" = ' + onceImg_CSS_Num);   // LEFT po RESISE aktualnego obrazu
                    if (onceImg_CSS_Num > 0) {   // right
                        this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                        this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    } else if (onceImg_CSS_Num === 0) {   // center
                        continue;
                    } else if (onceImg_CSS_Num < 0) {   // left
                        this.imagesArray[i].style.left = ((this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                        this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                };
            }, false);
        });
    }
};
slider_Obj.setWinBdHeight();
slider_Obj.setAEL_ImgLeftResize();



const productSlider_Sources_Obj: {
    pdcSldSrc_Prc: string[],
    pdcSldSrc_Dsc: string[],
    pdcSldSrc_Area: string[]
} = {
    pdcSldSrc_Prc: [
        '830 000 PLN',
        '770 000 PLN',
        '1 230 000 PLN',
        '850 000 PLN',
        '560 000 PLN',
        '1 310 000 PLN',
        '890 000 PLN',
        '715 000 PLN',
        '699 000 PLN',
        '835 000 PLN',
        '910 000 PLN',
        '1 105 000 PLN',
        '1 110 000 PLN',
        '735 000 PLN',
        '750 000 PLN'
    ],
    pdcSldSrc_Dsc: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
    ],
    pdcSldSrc_Area: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
    ]
};



const productSlider_Obj: {
    windowWidth: number,
    windowHeight: number,
    productsAmount: number,
    curWidStat: number,
    pdcSldItBd_Wdt: number,
    pdcSldItBd_MgnLft: number,
    resSpace: number,
    resLimitVals: number[],
    curPdcSldMovVal: number[],
    evWinLoadRes: string[],
    evElClick: string[],
    setVisibleAreaWidth: Function,
    createItems_fixedAmount: Function,
    reverseResLimVals_Func: Function,
    setAEL_PdcSldMoving: Function
} = {
    windowWidth: 0,
    windowHeight: 0,
    productsAmount: productSlider_Sources_Obj.pdcSldSrc_Prc.length,   // Amount of products in slider hanger
    curWidStat: 0,   // Amount of visibled items for current product slider box width
    pdcSldItBd_Wdt: 0,   // - slider item width | (0 - this value is setting in "setVisibleAreaWidth" function, where "width" is depend of navbar proper pseudo-width [graphics width without margin/padding{34px*2}])
    pdcSldItBd_MgnLft: 15,   //  - space betwen items
    resSpace: 350,   // - (dividing from 2 for two slider product box sides) extra area, which is addition to slider product box width to calculate transform area borders
    resLimitVals: [],   // Values of slider box width, which are calculate form items for current product slider box width
    curPdcSldMovVal: [],   // Values of current product slider moving distance on once move action (reverse "resLimitVals" array)
    evWinLoadRes: ['load', 'resize'],
    evElClick: ['click', 'touchend'],
    setVisibleAreaWidth() {
        this.evWinLoadRes.forEach((ev) => {
            window.addEventListener(ev, () => {
                this.windowWidth = window.innerWidth;
                const pdcSldBox: HTMLDivElement = document.querySelector('div.product-slider-box');
                const pdcSldHng: HTMLDivElement = document.querySelector('div.product-slider-hanger');
                // Counting values for limit array:
                //const resLimitVals: number[] = [];   // Global variable
                const productsWide: number[] = [5, 4, 3, 2, 1];
                // (1200 - (34 * 2)) = navbar width without side elements margin/padding =
                // ([desktop-navbar-width] - ([side-elements-margin/padding]) * [elements-amunt])
                this.pdcSldItBd_Wdt = (((1200 - (34 * 2)) / 5) - ((this.pdcSldItBd_MgnLft * (productsWide.length - 1)) / 5));  // 214.4   |   depend of nev pseudo-width
                for (let i: number = 0; i < productsWide.length; i++) {
                    this.resLimitVals[i] = ((this.pdcSldItBd_Wdt * productsWide[i]) + (this.pdcSldItBd_MgnLft * (productsWide[i] - 1)));
                };
                this.resLimitVals[productsWide.length] = (this.pdcSldItBd_Wdt * -1);   // Naprawione niechciane rozszerzanie się bloku slidera
                console.log(this.resLimitVals);
                // resSpace: current-slider-item-box-width
                let oneTime = true;   // I don't know why I must use this...
                for (let i: number = 0; i < this.resLimitVals.length; i++) {
                    if (i === 0 && oneTime === true) {
                        oneTime = false;
                        let val = this.resLimitVals[i];
                        pdcSldBox.style.width = val + 'px';
                        this.curWidStat = productsWide[i];   /* CURRENT WIDE STATUS - When you want to be add mowe images  */
                    } else if (i > 0) {
                        oneTime = true;
                        if (this.windowWidth < (this.resLimitVals[i] + this.resSpace) && this.windowWidth >= (this.resLimitVals[i+1] + this.resSpace)) {
                            let val = this.resLimitVals[i];
                            pdcSldBox.style.width = val + 'px';
                            this.curWidStat = productsWide[i];   /* CURRENT WIDE STATUS - When you want to be add mowe images */
                        } else {}
                    }
                };
                console.log(`CURRENT WIDE STATUS: ${this.curWidStat}`);
                // THIS OPERATIONS IS ALLOWED FOR RESIZE SLIDER ITEMS DEPEND OF WEBSITE WINDOW WIDTH: (scope: 5 - 1)
                /*// Clear slider items:
                const itemsHanger: HTMLDivElement = document.querySelector('div.product-slider-hanger');
                const children: HTMLCollection = itemsHanger.children;
                let childrenAmount = children.length;
                if (itemsHanger.childElementCount > 0) {
                    for (let i = childrenAmount - 1; i >= 0; i--) {
                        itemsHanger.removeChild(children[i]);
                    };
                } else {}
                // Create slider items:
                for (let i: number = 0; i < this.curWidStat; i++) {
                    // IS NOT DONE IN BOTTOM
                };*/
                //console.log('Product slider box width - according to window width:');
                //console.table(this.resLimitVals);   /* Product slider hanger will moving according to this value of index array BUT from 0 to penultimate index, because las index = (-) value*/
            }, false);
        });
        this.createItems_fixedAmount();
    },
    createItems_fixedAmount() {
        window.addEventListener('load', () => {
            const itemsHanger: HTMLDivElement = document.querySelector('div.product-slider-hanger');
            for (let i: number = 0; i < this.productsAmount; i++) {
                const itBd: HTMLDivElement = document.createElement('div');
                const itCnt: HTMLDivElement = document.createElement('div');
                const itClkFld: HTMLDivElement = document.createElement('div');
                const itImgDim: HTMLDivElement = document.createElement('div');
                const itImgPrp: HTMLImageElement = document.createElement('img');
                const itPrc: HTMLDivElement = document.createElement('div');
                const itPrcTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Prc[i]);
                const itDes: HTMLDivElement = document.createElement('div');
                const itDesTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Dsc[i]);
                const itArea: HTMLDivElement = document.createElement('div');
                const itAreaTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Area[i]);
                itBd.setAttribute('class', 'pdc-sld-item-body');
                itCnt.setAttribute('class', 'pdc-sld-item-content');
                itClkFld.setAttribute('class', 'pdc-sld-item-clickField');
                itImgDim.setAttribute('class', 'pdc-sld-item-img-dim');
                itImgPrp.setAttribute('class', 'pdc-sld-item-img-prp');
                itImgPrp.setAttribute('src', 'hb-images-product-slider/img_' + (i + 1) + '.jpg');
                itPrc.setAttribute('class', 'pdc-sld-item-price');
                itDes.setAttribute('class', 'pdc-sld-item-des');
                itArea.setAttribute('class', 'pdc-sld-item-area');
                itBd.appendChild(itCnt);
                itBd.style.width = this.pdcSldItBd_Wdt + 'px';
                if (i === 0) {
                } else if (i > 0) {
                    itBd.style.marginLeft = this.pdcSldItBd_MgnLft + 'px';
                }
                itCnt.appendChild(itClkFld);
                itClkFld.appendChild(itImgDim);
                itPrc.appendChild(itPrcTN);
                itClkFld.appendChild(itPrc);
                itDes.appendChild(itDesTN);
                itClkFld.appendChild(itDes);
                itImgDim.appendChild(itImgPrp);
                itArea.appendChild(itAreaTN);
                itClkFld.appendChild(itArea);
                let itImgDimVal = (this.pdcSldItBd_Wdt * 0.7);
                itImgDim.style.height = itImgDimVal + 'px';
                itemsHanger.appendChild(itBd);
            };
        }, false);
        this.reverseResLimVals_Func();
    },
    reverseResLimVals_Func() {
        // Iterujemy tą tablicą "this.curWidStat" po tej "this.resLimitVals" i w ten sposób mamy aktualną wartość przesunięcia produktu względem odpowiedniego rozstawy tychże produktów
        this.evWinLoadRes.forEach((ev) => {
            window.addEventListener(ev, () => {
                let reverseResLimVals: number[] = this.resLimitVals.reverse();
                this.curPdcSldMovVal = reverseResLimVals[this.curWidStat];
                //console.log(`CURRENT PRODUCT SLIDER MOVING: ${this.curPdcSldMovVal}`);
                //this.setAEL_PdcSldMoving();
            }, false);
        });
        this.setAEL_PdcSldMoving();
    },
    setAEL_PdcSldMoving() {
        const pdcSldButLft: HTMLDivElement = document.querySelector('div.product-slider-arrowBox-left-box');
        const pdcSldButRgt: HTMLDivElement = document.querySelector('div.product-slider-arrowBox-right-box');
        const itemsHanger: HTMLDivElement = document.querySelector('div.product-slider-hanger');
        let moveVal = 0;
        this.evElClick.forEach((ev) => {
            pdcSldButLft.addEventListener(ev, () => {   // LEFT
                moveVal += ((this.curPdcSldMovVal + this.pdcSldItBd_MgnLft) * 1);   // MEGA WAŻNE!
                // Trzeba dodać 1x margin-left, gdyż pole widoczności zawiera elemnety łącznie z marginami! 
                // Inaczej hanger ruszy się na niewystarczającą odległość
                itemsHanger.style.left = moveVal + 'px';
                itemsHanger.style.transitionDuration = 1 + 's';
                console.log(`LEFT: ${moveVal}`);
            }, false);
        });
        this.evElClick.forEach((ev) => {
            pdcSldButRgt.addEventListener(ev, () => {   // RIGHT
                moveVal += ((this.curPdcSldMovVal + this.pdcSldItBd_MgnLft) * -1);
                itemsHanger.style.left = moveVal + 'px';
                itemsHanger.style.transitionDuration = 1 + 's';
                console.log(`RIGHT: ${moveVal}`);
            }, false);
        });
    }
};
productSlider_Obj.setVisibleAreaWidth();
