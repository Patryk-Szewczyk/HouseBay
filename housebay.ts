// Strona ta to: agencja nieruchomości


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {   // IN WORK
        let one: HTMLElement = document.getElementById('splash-screen');
        //let two: HTMLDivElement = document.querySelector('div.website-content');
        one.style.display = 'none';
        //two.style.display = 'block';
    }, 1800);
}, false);


function createContent() {

}


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
    setNavbar(): void {
        let navbarEL: HTMLDivElement = document.querySelector('nav.navbar-box');
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
    setNavPgTitBxWdt(): void {
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
    navMoving(): void {   // - mobile nav button
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
                        //console.log(this.isShowed);   // ! --> IMPORTANT CONSOLLOG <-- !
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
                        //console.log(this.isShowed);   // ! --> IMPORTANT CONSOLLOG <-- !
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
    setWinBdHeight(): void {
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
    createSldELS(): void {
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
            sldPrpEl.setAttribute('alt', sldTitTxt[i])
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
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
        };
        return sldTitELS;
    },
    returnSliderDescELS() {
        const sldDescELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
        };
        return sldDescELS;
    },
    returnSliderButELS() {
        const sldButELS: any[] = [];
        for (let i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
        };
        return sldButELS;
    },
    setSliderDescWidthAEL(): void {
        slider_Obj.eventsWindowTable.forEach((ev) => {
            window.addEventListener(ev, () => {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                const sldDescELS: any[] = this.returnSliderDescELS();
                const sldTitELS: any[] = this.returnSliderTitELS();
                //console.log(sldDescELS);
                const sldTitWdtVALS: any[] = [];
                for (let i = 0; i < this.imageAmount; i++) {
                    const sldTitWdtVALS_CSS_Obj: CSSStyleDeclaration = window.getComputedStyle(sldTitELS[i], null);
                    let sldTitWdtVALS_CSS_Val_Str: string = sldTitWdtVALS_CSS_Obj.getPropertyValue('width');
                    let sldTitWdtVALS_CSS_Val_Num: number = Number(sldTitWdtVALS_CSS_Val_Str.slice(0, -2));
                    sldTitWdtVALS[i] = sldTitWdtVALS_CSS_Val_Num;
                };
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    this.extraWdt = 0;
                } else if (window.innerWidth >= RWD_info_Obj.desktop) {
                    this.extraWdt = 150;
                    //console.log(this.extraWdt);   // ! --> IMPORTANT CONSOLLOG <-- !
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
    createSldImgStateEL(): void {
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
    positingSldEl(): void {
        ['load'].forEach((ev) => {   // UWAGA! MEGA WAŻNE! Jeżeli skończyłeś funkcję "resize" właściwośći "left"/"right", usuń stąd zdarzenie "resize", a zostaw samo "load"
            window.addEventListener(ev, () => {
                const sldTitELS: any[] = this.returnSliderTitELS();
                const sldDescELS: any[] = this.returnSliderDescELS();
                const sldButELS: any[] = this.returnSliderButELS();
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
    setAEL_SldMoving(): void {
        let addToLeftPx: number = 0;
        const sliderBut: { [index: string]: HTMLDivElement } = {
            left: document.querySelector('div.iscb-leftArrow-box'),
            right: document.querySelector('div.iscb-rightArrow-box')
        };
        console.log('Aktualny obraz: ' + (this.currentImg + 1));
        this.eventsClickTable.forEach((ev) => {
            const sldTitELS: any[] = this.returnSliderTitELS();
            const sldDescELS: any[] = this.returnSliderDescELS();
            const sldButELS: any[] = this.returnSliderButELS();
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
    setAEL_ImgLeftResize(): void {
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



interface pdcSld_Interface {
    windowWidth: number,
    windowHeight: number,
    curWidStat: number,
    pdcSldItBd_Wdt: number,
    pdcSldItBd_MgnLft: number,
    resSpace: number,
    itemsPage: number,
    pdcSldmoveVal: number;
    pageStartLimit: number,
    statBallsAmount: number,
    currentPage: number,
    productsAmount: number,
    sldStlIdxNumToWdt: number,
    sldInfoNum: number,
    sldImgFileNum: number,
    resLimitVals: number[],
    curPdcSldMovVal: number[],
    statusLimitAR: number[][][][],
    evWinLoadRes: string[],
    evElClick: string[],
    setVisibleAreaWidth: Function;
    createItems_fixedAmount(): void;
    createStatusLimitAR();
    reverseResLimVals_Func(): void;
    setAEL_PdcSldMoving(): void;
    createPdcSldPageStatus(): void;
};

class ProductSlider implements pdcSld_Interface {
    productsAmount: number;  // Amount of products in product, which has been in choosed slider
    sldStlIdxNumToWdt: number;   // [product-slider-box] & [product-slider-hanger] elmenet number from choosed slider. If you wand siliar sliders width, you give the same value in each create slider object
    sldInfoNum: number   // Informations from slider info object. WARNING: Begin is from 0!
    pdcSldItBd_Wdt: number;   // - slider item width | (0 - this value is setting in "setVisibleAreaWidth" function, where "width" is depend of navbar proper pseudo-width [graphics width without margin/padding{34px*2}])
    pdcSldItBd_MgnLft: number;   //  - space betwen items
    resSpace: number;   // - (dividing from 2 for two slider product box sides) extra area, which is addition to slider product box width to calculate transform area borders
    sldImgFileNum: number;   // - number of slider images file
    constructor(arg_1: number, arg_2: number, arg_3: number, arg_4: number, arg_5: number, arg_6: number, arg_7: number) {
        this.productsAmount = arg_1;
        this.sldStlIdxNumToWdt = arg_2;
        this.sldInfoNum = arg_3;
        this.pdcSldItBd_Wdt = arg_4;
        this.pdcSldItBd_MgnLft = arg_5;
        this.resSpace = arg_6;
        this.sldImgFileNum = arg_7;
    }
    windowWidth = 0;
    windowHeight = 0;
    curWidStat = 0;   // Amount of visibled items for current product slider box width
    itemsPage = 0;
    pdcSldmoveVal = 0;
    statBallsAmount = 0;
    currentPage = 0;
    statusLimitAR = [];
    pageStartLimit = this.curWidStat;
    resLimitVals = [];   // Values of slider box width, which are calculate form items for current product slider box width
    curPdcSldMovVal = [];   // Values of current product slider moving distance on once move action (reverse "resLimitVals" array)
    evWinLoadRes = ['load', 'resize'];
    evElClick = ['click', 'touchend'];
    public setVisibleAreaWidth(): void {
        this.evWinLoadRes.forEach((ev) => {
            window.addEventListener(ev, () => {
                this.windowWidth = window.innerWidth;
                const pdcSldBox: any = document.querySelectorAll('div.product-slider-box')[this.sldStlIdxNumToWdt];
                const pdcSldHng: any = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
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
                ///console.log(this.resLimitVals);   // ! --> IMPORTANT CONSOLLOG <-- !
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
                //console.log(`CURRENT WIDE STATUS: ${this.curWidStat}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                // THIS OPERATIONS IS ALLOWED FOR RESIZE SLIDER ITEMS DEPEND OF WEBSITE WINDOW WIDTH: (scope: 5 - 1)
                /*// Clear slider items:
                const itemsHanger: any = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
                const children: HTMLCollection = itemsHanger.children;
                let childrenAmount = children.length;
                if (itemsHanger.childElementCount > 0) {
                    for (let i = childrenAmount - 1; i >= 0; i--) {
                        itemsHanger.removeChild(children[i]);
                    };
                } else {}
                // Create slider items:
                for (let i: number = 0; i < this.curWidStat; i++) {
                    const itemsHanger: any = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
                    for (let i: number = 0; i < this.productsAmount; i++) {
                        const itBd: HTMLDivElement = document.createElement('div');
                        const itCnt: HTMLDivElement = document.createElement('div');
                        const itClkFld: HTMLDivElement = document.createElement('div');
                        const itImgDim: HTMLDivElement = document.createElement('div');
                        const itImgPrp: HTMLImageElement = document.createElement('img');
                        const itPrc: HTMLDivElement = document.createElement('div');
                        const itPrcTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Prc[this.sldInfoNum][i]);
                        const itDes: HTMLDivElement = document.createElement('div');
                        const itDesTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Dsc[this.sldInfoNum][i]);
                        const itArea: HTMLDivElement = document.createElement('div');
                        const itAreaText: HTMLDivElement = document.createElement('div');
                        const itAreaTextTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Area[this.sldInfoNum][i]);
                        const itAreaSup: HTMLElement = document.createElement('sup');
                        const itAreaSupTN: Text = document.createTextNode('2');
                        itBd.setAttribute('class', 'pdc-sld-item-body');
                        itCnt.setAttribute('class', 'pdc-sld-item-content');
                        itClkFld.setAttribute('class', 'pdc-sld-item-clickField');
                        itImgDim.setAttribute('class', 'pdc-sld-item-img-dim');
                        itImgPrp.setAttribute('class', 'pdc-sld-item-img-prp');
                        itImgPrp.setAttribute('src', 'hb-images-product-slider-' + (this.sldImgFileNum + 1) + '/img_' + (i + 1) + '.jpg');
                        itImgPrp.setAttribute('alt', productSlider_Sources_Obj.pdcSldSrc_Dsc[this.sldInfoNum][i]);
                        itPrc.setAttribute('class', 'pdc-sld-item-price');
                        itDes.setAttribute('class', 'pdc-sld-item-des');
                        itArea.setAttribute('class', 'pdc-sld-item-area');
                        itAreaText.setAttribute('class', 'pdc-sld-item-area-text');
                        itAreaSup.setAttribute('class', 'pdc-sld-item-area-sup');
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
                        itClkFld.appendChild(itArea);
                        itArea.appendChild(itAreaText);
                        itAreaText.appendChild(itAreaTextTN);
                        itArea.appendChild(itAreaSup);
                        itAreaSup.appendChild(itAreaSupTN);
                        let itImgDimVal = (this.pdcSldItBd_Wdt * 0.7);
                        itImgDim.style.height = itImgDimVal + 'px';
                        itemsHanger.appendChild(itBd);
                    };
                };*/
                //console.log('Product slider box width - according to window width:');
                //console.table(this.resLimitVals);   /* Product slider hanger will moving according to this value of index array BUT from 0 to penultimate index, because las index = (-) value*/
            }, false);
        });
        // YOU CAN CHOOSE ONLY ONE FROM FOLLOWWING:
        //this.reverseResLimVals_Func();   // MOVING AMOUNT OF ITEMS (depend to website window width). IF YOU CHOOSE IT, GET IN COMMENT NEXT (on bottom) FUNCTION CALL
        this.createItems_fixedAmount();   // FIXED AMOUNT OF TEMS
    };
    public createItems_fixedAmount(): void {
        window.addEventListener('load', () => {
            const itemsHanger: any = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
            for (let i: number = 0; i < this.productsAmount; i++) {
                const itBd: HTMLDivElement = document.createElement('div');
                const itCnt: HTMLDivElement = document.createElement('div');
                const itClkFld: HTMLDivElement = document.createElement('div');
                const itImgDim: HTMLDivElement = document.createElement('div');
                const itImgPrp: HTMLImageElement = document.createElement('img');
                const itPrc: HTMLDivElement = document.createElement('div');
                const itPrcTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Prc[this.sldInfoNum][i]);
                const itDes: HTMLDivElement = document.createElement('div');
                const itDesTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Dsc[this.sldInfoNum][i]);
                const itArea: HTMLDivElement = document.createElement('div');
                const itAreaText: HTMLDivElement = document.createElement('div');
                const itAreaTextTN: Text = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Area[this.sldInfoNum][i]);
                const itAreaSup: HTMLElement = document.createElement('sup');
                const itAreaSupTN: Text = document.createTextNode('2');
                itBd.setAttribute('class', 'pdc-sld-item-body');
                itCnt.setAttribute('class', 'pdc-sld-item-content');
                itClkFld.setAttribute('class', 'pdc-sld-item-clickField');
                itImgDim.setAttribute('class', 'pdc-sld-item-img-dim');
                itImgPrp.setAttribute('class', 'pdc-sld-item-img-prp');
                itImgPrp.setAttribute('src', 'hb-images-product-slider-' + (this.sldImgFileNum + 1) + '/img_' + (i + 1) + '.jpg');
                itImgPrp.setAttribute('alt', productSlider_Sources_Obj.pdcSldSrc_Dsc[this.sldInfoNum][i]);
                itPrc.setAttribute('class', 'pdc-sld-item-price');
                itDes.setAttribute('class', 'pdc-sld-item-des');
                itArea.setAttribute('class', 'pdc-sld-item-area');
                itAreaText.setAttribute('class', 'pdc-sld-item-area-text');
                itAreaSup.setAttribute('class', 'pdc-sld-item-area-sup');
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
                itClkFld.appendChild(itArea);
                itArea.appendChild(itAreaText);
                itAreaText.appendChild(itAreaTextTN);
                itArea.appendChild(itAreaSup);
                itAreaSup.appendChild(itAreaSupTN);
                let itImgDimVal = (this.pdcSldItBd_Wdt * 0.7);
                itImgDim.style.height = itImgDimVal + 'px';
                itemsHanger.appendChild(itBd);
            };
        }, false);
        this.createStatusLimitAR();
        this.reverseResLimVals_Func();
    };
    public createStatusLimitAR() {   // This function is not finished experiment about slider status checking
        // Also this function is pause in work, because this mechanism require a lot more work...
        let productsWide: number[] = [1, 2, 3, 4, 5];
        let statNumAR: any[] = [];
        for (let i: number = 0; i < 5; i++) {
            statNumAR[i] = Math.ceil(this.productsAmount / (i + 1));
        };   // [15, 8, 5, 4, 3]
        //console.log(statNumAR);
        let res: number[][][] = [];
        for (let i: number = 0; i < 5; i++) {
            res[i] = [];   // UWAGA! MEGA ULTRA HIPER WAŻNE! Jeżeli chcesz przypisaywać 
            // wartości do kolejnego/następnego indeksu zagnieżdżonego, MUSISZ uprzednio
            // UTWORZYĆ ten INDEKS za pomocą "[]", inaczej wyskorzy ci BŁĄD!;
            let startVal: number = (productsWide[i] * -1);
            for (let j: number = 0; j < statNumAR[i]; j++) {
                //res[i][j] = productsWide[i];
                res[i][j] = [];   // UWAGA! Tutaj tak samo! W zwykłym DżawaSkripcie tak nie ma
                startVal += productsWide[i];
                for (let k: number = 0; k < productsWide[i]; k++) {
                    res[i][j][k] = ((startVal + k) + 1);
                };
            };
        };
        //console.log(`STAT_NUM_AR: ${statNumAR}`);
        //console.log('START_VALUE: ' + startValue);
        //console.log(res);
        return res;
    };
    public reverseResLimVals_Func(): void {
        // Iterujemy tą tablicą "this.curWidStat" po tej "this.resLimitVals" i w ten sposób mamy aktualną wartość przesunięcia produktu względem odpowiedniego rozstawy tychże produktów
        this.evWinLoadRes.forEach((ev) => {
            window.addEventListener(ev, () => {
                let reverseResLimVals: number[] = this.resLimitVals.reverse();
                let val: any = reverseResLimVals[this.curWidStat];
                this.curPdcSldMovVal = val;
                //console.log(`CURRENT PRODUCT SLIDER MOVING: ${this.curPdcSldMovVal}`);   // OK
                //console.log(typeof this.curPdcSldMovVal);   // OK
                //console.log(Number(this.curPdcSldMovVal) + 15);   // OK
            }, false);
        });
        this.setAEL_PdcSldMoving();
    };
    public setAEL_PdcSldMoving(): void {
        const pdcSldButLft: any = document.querySelectorAll('div.product-slider-arrowBox-left-box')[this.sldStlIdxNumToWdt];
        const pdcSldButRgt: any = document.querySelectorAll('div.product-slider-arrowBox-right-box')[this.sldStlIdxNumToWdt];
        const itemsHanger: any = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
        let pageEndLimit: number = this.productsAmount;
        let isMoved: boolean = false;
        let tnsDur_Timeout = 1000;
        let tnsDur_Style = (tnsDur_Timeout / 1000);
        //console.log('PAGE_END_LIMIT:' + pageEndLimit);   // ! --> IMPORTANT CONSOLLOG <-- !
        //console.log('PAGE_START_LIMIT:' + this.pageStartLimit);   // ! --> IMPORTANT CONSOLLOG <-- !
        this.evElClick.forEach((ev) => {
            pdcSldButLft.addEventListener(ev, () => {   // LEFT
                this.pageStartLimit = this.curWidStat;
                // Limit of second statement operand are moving according to "this.curWidStat"
                if (this.itemsPage >= this.pageStartLimit && isMoved === false) {   // Example: 4 >= 3 = true | 3 >= true   -> Result: element.style.left = moveVal + 'px';
                        this.itemsPage -= this.curWidStat;
                        isMoved = true;
                        this.pdcSldmoveVal += ((Number(this.curPdcSldMovVal) + this.pdcSldItBd_MgnLft) * 1);   // MEGA WAŻNE!
                        // Trzeba dodać 1x margin-left, gdyż pole widoczności zawiera elemnety łącznie z marginami! 
                        // Inaczej hanger ruszy się na niewystarczającą odległość
                        itemsHanger.style.left = this.pdcSldmoveVal + 'px';
                        itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                        //console.log(`LEFT: ${this.pdcSldmoveVal}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                        setTimeout(() => {
                            isMoved = false;
                        }, tnsDur_Timeout);
                } else if ((this.itemsPage < this.pageStartLimit && (this.itemsPage % this.pageStartLimit) > 0) === true && (isMoved === false)) {   // Example: 3 < 2 = true   [&]   (3 / 2) > 0 = true
                    this.itemsPage = 0;
                    isMoved = true;
                    this.pdcSldmoveVal = 0;
                    itemsHanger.style.left = this.pdcSldmoveVal + 'px';
                    itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                    //console.log(`LEFT: ${this.pdcSldmoveVal}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                    setTimeout(() => {
                        isMoved = false;
                    }, tnsDur_Timeout);
                }
                let stsBallAR: any[] = [];
                this.currentPage = this.itemsPage / this.curWidStat;   // [current-item-page-value] / [current-wide-status (slider-hanger-position-in-click-steps)] = [current-page-number] !!! with decimal
                this.currentPage = Math.ceil(this.currentPage);
                //console.log(`CURRENT PAGE: ${this.currentPage}`);   /*IMPORTANT SHORTTIME INFO*/   // ! --> IMPORTANT CONSOLLOG <-- !
                //console.log(`ITEMS PAGE: ${this.itemsPage}`);   /*IMPORTANT SHORTTIME INFO*/   // ! --> IMPORTANT CONSOLLOG <-- !
                //if (this.currentPage % 2 > 0) {   // Clean decimal by round up this value
                    /*if (this.lastArrowStatus === 'LEFT') {
                        this.currentPage = Math.ceil(this.currentPage);
                    } else if (this.lastArrowStatus === 'RIGHT') {
                        this.currentPage = Math.floor(this.currentPage);
                    }*/
                //} else {}
                if (this.curWidStat > 1) {
                    const statusBox: any = document.querySelectorAll('div.product-slider-status-box')[this.sldStlIdxNumToWdt];
                    const stBxChildren: HTMLCollection = statusBox.children;
                    if (statusBox.childElementCount > 0) {
                        for (let i = stBxChildren.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren[i];
                        };
                    } else {}
                    for (let i: number = 0; i < this.statBallsAmount; i++) {
                        if (i === this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        } else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    };
                } else {}
            }, false);
        });
        this.evElClick.forEach((ev) => {
            this.pageStartLimit = this.curWidStat;
            pdcSldButRgt.addEventListener(ev, () => {   // RIGHT
                // Limit of second statement operand are moving according to "this.curWidStat"
                if (this.itemsPage < (pageEndLimit - this.curWidStat) && isMoved === false) {
                    this.itemsPage += this.curWidStat;
                    isMoved = true;
                    this.pdcSldmoveVal += ((Number(this.curPdcSldMovVal) + this.pdcSldItBd_MgnLft) * -1);
                    itemsHanger.style.left = this.pdcSldmoveVal + 'px';
                    itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                    //console.log(`RIGHT: ${this.pdcSldmoveVal}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                    setTimeout(() => {
                        isMoved = false;
                    }, tnsDur_Timeout);
                } else {}

                let stsBallAR: any[] = [];
                this.currentPage = this.itemsPage / this.curWidStat;
                this.currentPage = Math.ceil(this.currentPage);
                //console.log(`ITEMS PAGE: ${this.itemsPage}`);   /*IMPORTANT SHORTTIME INFO*/   // ! --> IMPORTANT CONSOLLOG <-- !
                //console.log(`CURRENT PAGE: ${this.currentPage}`);   /*IMPORTANT SHORTTIME INFO*/   // ! --> IMPORTANT CONSOLLOG <-- !
                //if (this.currentPage % 2 > 0) {
                    /*if (this.lastArrowStatus === 'LEFT') {
                        this.currentPage = Math.ceil(this.currentPage);
                    } else if (this.lastArrowStatus === 'RIGHT') {
                        this.currentPage = Math.floor(this.currentPage);
                    }*/
                //} else {}
                if (this.curWidStat > 1) {
                    const statusBox: any = document.querySelectorAll('div.product-slider-status-box')[this.sldStlIdxNumToWdt];
                    const stBxChildren: HTMLCollection = statusBox.children;
                    if (statusBox.childElementCount > 0) {
                        for (let i = stBxChildren.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren[i];
                        };
                    } else {}
                    for (let i: number = 0; i < this.statBallsAmount; i++) {
                        if (i === this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        } else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    };
                } else {}
            }, false);
        });
        this.createPdcSldPageStatus();
    };
    public createPdcSldPageStatus(): void {
        this.evWinLoadRes.forEach((ev) => {
            window.addEventListener(ev, () => {
                const statusBox: any = document.querySelectorAll('div.product-slider-status-box')[this.sldStlIdxNumToWdt];
                const stBxChildren: HTMLCollection = statusBox.children;
                if (statusBox.childElementCount > 0) {
                    for (let i = stBxChildren.length - 1; i >= 0; i--) {
                        statusBox.removeChild(stBxChildren[i]);
                    };
                } else {}

                // To slider status not finished experiment
                //let statusInfoAR: number[][][] = this.createStatusLimitAR();
                //console.log(statusInfoAR);

                this.statBallsAmount = this.productsAmount / this.curWidStat;
                this.currentPage = this.itemsPage / this.curWidStat;
                this.currentPage = Math.ceil(this.currentPage);
                //console.log('STATUS BALL AMOUNT: ' + this.statBallsAmount);   // ! --> IMPORTANT CONSOLLOG <-- !
                if (this.curWidStat > 1) {
                    for (let i: number = 0; i < this.statBallsAmount; i++) {
                        const statusBall: HTMLDivElement = document.createElement('div');
                        statusBall.setAttribute('class', 'ps-status-ball');
                        statusBox.appendChild(statusBall);
                    };
                } else if (this.curWidStat === 1) {}
                this.currentPage = this.itemsPage / this.curWidStat;
                this.currentPage = Math.ceil(this.currentPage);
                //console.log(`CURRENT PAGE: ${this.currentPage}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                //console.log(`ITEMS PAGE: ${this.itemsPage}`);   // ! --> IMPORTANT CONSOLLOG <-- !
                let stsBallAR: any[] = [];
                if (this.curWidStat > 1) {
                    const statusBox: any = document.querySelectorAll('div.product-slider-status-box')[this.sldStlIdxNumToWdt];
                    const stBxChildren: HTMLCollection = statusBox.children;
                    if (statusBox.childElementCount > 0) {
                        for (let i = stBxChildren.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren[i];
                        };
                    } else {}
                    for (let i: number = 0; i < this.statBallsAmount; i++) {
                        if (i === this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        } else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    };
                } else {}


            }, false);
        });
    };
}



const begeinInfoImg_Obj: {
    imgBox: HTMLImageElement,
    setAttr: Function
} = {
    imgBox: document.querySelector('img.bi-img-prp'),
    setAttr(): void {
        this.imgBox.setAttribute('src', 'hb-images-begin-info/residential-property-2858226_640.jpg');
        this.imgBox.setAttribute('alt', 'company-build');
    }

};
begeinInfoImg_Obj.setAttr();


const productSlider_Sources_Obj: {
    pdcSldSrc_Prc: string[][],
    pdcSldSrc_Dsc: string[][],
    pdcSldSrc_Area: string[][]
} = {
    pdcSldSrc_Prc: [
        [   // Prooduct slider #1
            '830 000 PLN',
            '770 000 PLN',
            '1 730 000 PLN',
            '1 350 000 PLN',
            '560 000 PLN',
            '1 310 000 PLN',
            '890 000 PLN',
            '715 000 PLN',
            '699 000 PLN',
            '835 000 PLN',
            '910 000 PLN',
            '1 105 000 PLN',
            '2 110 000 PLN',
            '1 299 000 PLN',
            '750 000 PLN'
        ],
        [   // Prooduct slider #2
            '1 250 000 PLN',
            '890 500 PLN',
            '1 945 999 PLN',
            '5 670 000 PLN',
            '850 000 PLN',
            '640 000 PLN',
            '580 000 PLN',
            '635 000 PLN',
            '945 000 PLN'
        ],
        [   // Prooduct slider #3
            '890 000 PLN',
            '930 000 PLN',
            '750 999 PLN',
            '640 000 PLN',
            '895 000 PLN',
            '1 210 000 PLN',
            '650 000 PLN',
            '670 000 PLN',
            '740 000 PLN',
            '435 000 PLN',
            '485 000 PLN',
            '510 000 PLN',
            '480 000 PLN',
            '525 000 PLN',
            '855 999 PLN',
            '825 000 PLN',
            '723 999 PLN',
            '585 000 PLN'
        ]
    ],
    pdcSldSrc_Dsc: [
        [   // Prooduct slider #1
            'House for sale: Łódź, Wapienna 4',
            'House for sale: Toruń, Drzymały 23',
            'House for sale: Łódź, Rukocka 11',
            'House for sale: Piaseczno, Mała 3',
            'House for sale: Poznań, Perłowa 93',
            'House for sale: Puck, Długa 10',
            'House for sale: Kraków, Zamkowa 2',
            'House for sale: Kraków, Podła 55',
            'House for sale: Łódź, Drewnowska 9',
            'House for sale: Zwoleń, Alejkowa 7',
            'House for sale: Kozienice, Gruba 77',
            'House for sale: Pionki, Piękna 42',
            'House for sale: Warszawa, Zielona 4',
            'House for sale: Warszawa, Maja 93',
            'House for sale: Radom, Stara 237'
        ],
        [   // Prooduct slider #2
            'House for sale: Warszawa, Mokotów',
            'House for sale: Warszawa, Młynów',
            'House for sale: Warszawa, Filtry',
            'House for sale: Warszawa, Radość',
            'House for sale: Katowice, Bogucice',
            'House for sale: Poznań, Wilda',
            'House for sale: Kraków, Dąbie',
            'House for sale: Nowy Sącz Wólki',
            'House for sale: Radom Glinice'
        ],
        [   // Prooduct slider #3
            'Apartament for sale: Warszawa',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Kraków',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Poznań',
            'Apartament for sale: Kraków',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Radom',
            'Apartament for sale: Łódź',
            'Apartament for sale: Poznań',
            'Apartament for sale: Lublin',
            'Apartament for sale: Wrocław',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Warszawa',
            'Apartament for sale: Solina'
        ]
    ],
    pdcSldSrc_Area: [
        [   // Prooduct slider #1
            '179.3 m',
            '162.4 m',
            '254.0 m',
            '236.1 m',
            '105.4 m',
            '228.8 m',
            '168.9 m',
            '135.0 m',
            '124.2 m',
            '142.6 m',
            '138.0 m',
            '252.4 m',
            '202.3 m',
            '151.5 m',
            '166.0 m'
        ],
        [   // Prooduct slider #2
            '152.2 m',
            '143.1 m',
            '220.5 m',
            '382.8 m',
            '124.2 m',
            '109.0 m',
            '98.4 m',
            '113.5 m',
            '178.7 m'
        ],
        [   // Prooduct slider #3
            '120.0 m',
            '114.3 m',
            '98.4 m',
            '74.5 m',
            '78.2 m',
            '146.2 m',
            '83.9 m',
            '72.1 m',
            '69.4 m',
            '65.9 m',
            '74.8 m',
            '61.5 m',
            '68.8 m',
            '64.4 m',
            '89.8 m',
            '85.0 m',
            '72.3 m',
            '95.3 m'
        ]
    ]
};



// SERIES PRODUCTION: FACTORY
const sliderFactory_Obj: {
    sliderAmount: number,
    createSliders: Function,
    sliderAR: ProductSlider[]
} = {
    sliderAmount: document.querySelectorAll('div.product-slider-area').length,
    sliderAR: [],
   createSliders(): void {
        // SERIES PRODUCTION: ARGUMENTS
        for (let i: number = 0; i < this.sliderAmount; i++) {
            let arg_1: number = productSlider_Sources_Obj.pdcSldSrc_Prc[i].length;  // Amount of products in product, which has been in choosed slider
            let arg_2: number = i;   // [product-slider-box] & [product-slider-hanger] elmenet number from choosed slider. If you wand siliar sliders width, you give the same value in each create slider object
            let arg_3: number = i;   // Informations from slider info object. WARNING: Begin is from 0!
            let arg_4: number = i;   // - slider item width | (0 - this value is setting in "setVisibleAreaWidth" function, where "width" is depend of navbar proper pseudo-width [graphics width without margin/padding{34px*2}])
            let arg_5: number = 15;   //  - space betwen items
            let arg_6: number = 350;   // - (dividing from 2 for two slider product box sides) extra area, which is addition to slider product box width to calculate transform area borders
            let arg_7: number = i;   // - number of slider images file
            let productSlider = new ProductSlider(arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7);
            productSlider.setVisibleAreaWidth();
            /*productSlider.createItems_fixedAmount();
            productSlider.createStatusLimitAR();
            productSlider.reverseResLimVals_Func();
            productSlider.setAEL_PdcSldMoving();
            productSlider.createPdcSldPageStatus();*/
            this.sliderAR.push(productSlider);
        };
        //console.log(sliderFactory_Obj.sliderAR);   // ! --> IMPORTANT CONSOLLOG <-- !
    }
};
sliderFactory_Obj.createSliders();

// arg_1 - This argument is in FORM lop, because they require steady iteration
//let arg_2: number = 0;   // [product-slider-box] & [product-slider-hanger] elmenet number from choosed slider. If you wand siliar sliders width, you give the same value in each create slider object
//let arg_3: number = 0;   // Informations from slider info object. WARNING: Begin is from 0!
//let arg_4: number = 0;   // - slider item width | (0 - this value is setting in "setVisibleAreaWidth" function, where "width" is depend of navbar proper pseudo-width [graphics width without margin/padding{34px*2}])
//let arg_5: number = 15;   //  - space betwen items
//let arg_6: number = 350;   // - (dividing from 2 for two slider product box sides) extra area, which is addition to slider product box width to calculate transform area borders
//sliderFactory_Obj.createSliders();

// HAND CREATING  // IS BAD - IN WORK
/*let arg_1 = productSlider_Sources_Obj.pdcSldSrc_Prc[0].length;
let productSlider_1 = new ProductSlider(arg_1, 0, 0, 0, 15, 350);
productSlider_1.setVisibleAreaWidth();
productSlider_1.createItems_fixedAmount();
productSlider_1.reverseResLimVals_Func();
productSlider_1.setAEL_PdcSldMoving();
productSlider_1.createPdcSldPageStatus();
console.log(productSlider_1);*/





// Robimy od nowa nową klasę z konstruktorem na rodzaje nieruchomości na sprzedaż i style domów

interface generalInfo_ITF {
    currentGnBox: number;
    newsELPosAR: number[];
    dataTit: string[];
    itemAmount: number;
    createEL: Function;
    hoverAEL_DESKTOP: Function;
    scrollAEL_MOBILE: Function;
    checkGIBlockPosAEL_MOBILE: Function;
}

class CategoriesGrid implements generalInfo_ITF {
    currentGnBox: number;
    itemAmount: number;
    dataTit: string[];
    constructor(arg_1, arg_2, arg_3) {   // arg_1 - choosed slider data index | arg_2 - items amount on each slider
        this.dataTit = arg_1;
        this.itemAmount = arg_2;
        this.currentGnBox = arg_3;
    };
    newsELPosAR: number[];
    createEL(): void {
        const genInfoBoxEL = document.querySelectorAll('div.general-news-box')[this.currentGnBox];
        let newsELS: any[] = [];
        let imgELS: any[] = [];
        let titELS: any[] = [];
        let txtELS: any[] = [];
        for (let i: number = 0; i < this.itemAmount; i++) {
            let newsEL = document.createElement('div');
            newsELS.push(newsEL);
            let imgEL = document.createElement('img');
            imgELS.push(imgEL);
            let titEL = document.createElement('div');
            titELS.push(titEL);
            let txtEL = document.createElement('div');
            txtELS.push(txtEL);
            let txtTN = document.createTextNode(this.dataTit[i]);
            newsEL.setAttribute('class', 'news');
            newsEL.setAttribute('id', String(i));
            imgEL.setAttribute('class', 'gn-img-box');
            imgEL.setAttribute('src', 'hb-images-gn-tit-' + (this.currentGnBox + 1) + '/img_' + (i + 1) + '.jpg');
            imgEL.setAttribute('alt', this.dataTit[this.currentGnBox][i]);
            titEL.setAttribute('class', 'gn-tit');
            txtEL.setAttribute('class', 'gn-tit-txt');
            newsEL.appendChild(imgEL);
            newsEL.appendChild(titEL);
            titEL.appendChild(txtEL);
            txtEL.appendChild(txtTN);
            genInfoBoxEL.appendChild(newsEL);
        };
        this.hoverAEL_DESKTOP(newsELS, imgELS, titELS, txtELS, this.itemAmount);
        this.checkGIBlockPosAEL_MOBILE(newsELS, this.itemAmount, this.currentGnBox);
        this.scrollAEL_MOBILE(titELS, txtELS, this.itemAmount);
    };
    hoverAEL_DESKTOP(newsELS, imgELS, titELS, txtELS, itmAm): void {   // Można to zrobić na "target" bez 
        // pierdzielenia się z pętlami, id i dodawaniem atrybutu id z wartością w tworzeniu 
        // eleemntów, ale zrobiłem tak, dla treningu kombinowania
        for (let i: number = 0; i < itmAm; i++) {
            ['mouseover'].forEach((ev) => {
                newsELS[i].addEventListener(ev, (e) => {
                    if (window.innerWidth >= RWD_info_Obj.desktop) {
                        let el = e.currentTarget;
                        let id = el.id;
                        let prpEditEl: any = imgELS[id];
                        //console.log(prpEditEl);
                        prpEditEl.style.filter = 'brightness(80%)';
                        prpEditEl.style.transitionDuration = '0.4s';
                        titELS[id].style.height = 70 + 'px';
                        txtELS[id].style.bottom = 0 + 'px';
                        txtELS[id].style.opacity = 1.0;
                        titELS[id].transitionDuration = 0.4 + 's';
                        txtELS[id].transitionDuration = 0.4 + 's';
                    } else {}
                }, false);
            });
        };
        for (let i: number = 0; i < itmAm; i++) {
            ['mouseout'].forEach((ev) => {
                newsELS[i].addEventListener(ev, (e) => {
                    if (window.innerWidth >= RWD_info_Obj.desktop) {
                        let el = e.currentTarget;
                        let id = el.id;
                        let prpEditEl: any = imgELS[id];
                        //console.log(prpEditEl);
                        prpEditEl.style.filter = 'brightness(100%)';
                        prpEditEl.style.transitionDuration = '0.4s';
                        titELS[id].style.height = 0 + 'px';
                        txtELS[id].style.bottom = -10 + 'px';
                        txtELS[id].style.opacity = 0.0;
                        titELS[id].transitionDuration = 0.4 + 's';
                        txtELS[id].transitionDuration = 0.4 + 's';
                    } else {}
                }, false);
            });
        };
    };
    scrollAEL_MOBILE(titELS, txtELS, itmAm): void {
        ['load', 'resize', 'scroll'].forEach((ev) => {
            window.addEventListener(ev, () => {
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    for (let i: number = 0; i < itmAm; i++) {
                        let catBorder: number = (window.innerHeight / 1.65);
                        //console.log('CURR' + this.newsELPosAR[i]);
                        if (this.newsELPosAR[i] <= catBorder) {
                            titELS[i].style.height = 70 + 'px';
                            txtELS[i].style.bottom = 0 + 'px';
                            txtELS[i].style.opacity = 1.0;
                            titELS[i].transitionDuration = 0.4 + 's';
                            txtELS[i].transitionDuration = 0.4 + 's';
                        } else if (this.newsELPosAR[i] > catBorder) {
                            titELS[i].style.height = 0 + 'px';
                            txtELS[i].style.bottom = -10 + 'px';
                            txtELS[i].style.opacity = 0.0;
                            titELS[i].transitionDuration = 0.4 + 's';
                            txtELS[i].transitionDuration = 0.4 + 's';
                        }
                    }
                } else {
                    for (let i: number = 0; i < itmAm; i++) {
                        titELS[i].style.height = 0 + 'px';
                        txtELS[i].style.bottom = 0 + 'px';
                        txtELS[i].style.opacity = 0.0;
                        titELS[i].transitionDuration = 0.4 + 's';
                        txtELS[i].transitionDuration = 0.4 + 's';
                    }
                }
            }, false);
        });
    };
    checkGIBlockPosAEL_MOBILE(newsELS, itmAm, currentGnBox): void {
        console.log(currentGnBox);
        let arr: number[] = [];
        ['load', 'resize', 'scroll'].forEach((ev) => {
            window.addEventListener(ev, () => {
                for (let i: number = 0; i < itmAm; i++) {
                    let el = newsELS[i].getBoundingClientRect();
                    let pos = Math.round(el.top);
                    arr[i] = pos;
                    //console.log(arr[i]);
                }
            }, false);
        });
        this.newsELPosAR = arr;
    }
}

const generalInfoSources_Obj: {
    gnTit: string[][],   // Title, ALT
} = {
    gnTit: [
        [   // rodzaje nieruchomości
            'Detached house',
            'Twin house',
            'Terraced development',
            'Block of flat',
            'Skyscrapper',
            'Tenement'   
        ],
        [   // style domów
            'Modern',
            'Minimalist',
            'Country',
            'Classic',
            'Mediterranean',
            'Eclectic'
        ]
    ]
}

const generalInfoFactory_Obj: {
    createGnInfoEL: Function
} = {
    createGnInfoEL() {
        let gnBoxEL: NodeListOf<HTMLDivElement> = document.querySelectorAll('div.general-news-box');
        for (let i: number = 0; i < gnBoxEL.length; i++) {
            let arg_1: string[] = generalInfoSources_Obj.gnTit[i];
            let arg_2: number = generalInfoSources_Obj.gnTit[i].length;
            let arg_3: number = i;
            let generalInfoObj = new CategoriesGrid(arg_1, arg_2, arg_3);
            generalInfoObj.createEL();
        };
    }
};
generalInfoFactory_Obj.createGnInfoEL();




const ourTeam_Obj: {
    itemAmount: number,
    createItems: Function
} = {
    itemAmount: 4,
    createItems(): void {
        for (let i: number = 0; i < this.itemAmount; i++) {

            let otBox_EL = document.querySelector('div.our-team-box');
            let otItem_EL: HTMLDivElement = document.createElement('div');
            otItem_EL.setAttribute('class', 'ot-item');
            let otImgBox_EL = document.createElement('div');
            otImgBox_EL.setAttribute('class', 'ot-img-box');
            let otCrcImgDim_EL: HTMLDivElement = document.createElement('div');
            otCrcImgDim_EL.setAttribute('class', 'ot-circle-img-dim');
            let otCrcImgPrp_EL: HTMLDivElement = document.createElement('img');
            otCrcImgPrp_EL.setAttribute('class', 'ot-circle-img-prp');
            otCrcImgPrp_EL.setAttribute('src', 'hb-images-worker/img_' + (i + 1) + '.jpg');
            otCrcImgPrp_EL.setAttribute('alt', ourTeam_Sources_Obj.name[i]);
            let otTitBox_EL: HTMLDivElement = document.createElement('div');
            otTitBox_EL.setAttribute('class', 'ot-tit-box');
            let otTitPrp_EL: HTMLDivElement = document.createElement('div');
            let otTitPrp_TN: Text = document.createTextNode(ourTeam_Sources_Obj.name[i]);
            otTitPrp_EL.setAttribute('class', 'ot-tit-prp');
            let otDesBox_EL: HTMLDivElement = document.createElement('div');
            otDesBox_EL.setAttribute('class', 'ot-des-box');
            let otDesPrp_EL: HTMLDivElement = document.createElement('div');
            let otDesPrp_TN: Text = document.createTextNode(ourTeam_Sources_Obj.desc[i]);
            otDesPrp_EL.setAttribute('class', 'ot-des-prp');
            let otIcnBox_EL: HTMLDivElement = document.createElement('div');
            otIcnBox_EL.setAttribute('class', 'ot-icon-box');
            let otIcnPrp_EL: HTMLDivElement = document.createElement('img');
            otIcnPrp_EL.setAttribute('class', 'ot-icon-prp');
            otIcnPrp_EL.setAttribute('src', 'hb-images-worker/social-media-5995266_1280.png');
            otIcnPrp_EL.setAttribute('alt', 'social-media-icons');
            
            otItem_EL.appendChild(otImgBox_EL);
            otImgBox_EL.appendChild(otCrcImgDim_EL);
            otCrcImgDim_EL.appendChild(otCrcImgPrp_EL);
            otItem_EL.appendChild(otTitBox_EL);
            otTitBox_EL.appendChild(otTitPrp_EL);
            otTitPrp_EL.appendChild(otTitPrp_TN);
            otItem_EL.appendChild(otDesBox_EL);
            otDesBox_EL.appendChild(otDesPrp_EL);
            otDesPrp_EL.appendChild(otDesPrp_TN);
            otItem_EL.appendChild(otIcnBox_EL);
            otIcnBox_EL.appendChild(otIcnPrp_EL);

            otBox_EL.appendChild(otItem_EL);
        };
    }
};

const ourTeam_Sources_Obj: {
    name: string[],
    desc: string[]
} = {
    name: [
        'Walter White',
        'Sarah Black',
        'Carl Johnson',
        'Annah Beverly'
    ],
    desc: [
        'Professionalist from finding ideal houses and appartaments. He worked in few IT companies, as SEO specialist.',
        'The best specialist in caunselling all time. She help everybody to choose appropriate house as well as appartament.',
        'One form few the best specialist in caunselling in history. He can in no time pick appropriate property kind for everybody.',
        'This woman helps everything in difficulty chooses in which often people don\'t know what is good choose for them.'
    ],
};
ourTeam_Obj.createItems();



const clientOpinions_Obj: {
    mainEl: any,
    colAm: number,   // liczba kolumn   // ruchoma jako argument
    colWdt: number,   // szerokość jednej kolumny   // ruchoma w programie
    colArn: number,   // szerokość strefy kolumn   // stała
    optItmWidtTypeAR: number[],
    optItmWidtTypeAR_TransfBord: number[],
    colAmPerTransfBord: number[],
    setCol: Function
} = {
    mainEl: document.getElementsByClassName('opinion-box')[0],
    colAm: 4,
    colWdt: 250,   // default - according to website baner content laying
    colArn: 0,
    optItmWidtTypeAR: [],
    optItmWidtTypeAR_TransfBord: [],
    colAmPerTransfBord: [],
    setCol() {
        for (let i: number = 0; i < this.colAm; i++) {
            this.optItmWidtTypeAR[i] = (this.colWdt * (i + 1));
            this.optItmWidtTypeAR_TransfBord[i] = this.optItmWidtTypeAR[i];
        };
        this.optItmWidtTypeAR = this.optItmWidtTypeAR.reverse();
        this.optItmWidtTypeAR_TransfBord.map((el, i, arr) => {
            return arr[i] = el + 388;   // 320 - do krawędzi + (34 x 2) padding
        });
        this.optItmWidtTypeAR_TransfBord = this.optItmWidtTypeAR_TransfBord.reverse();
        let cmaptb_idx: number = 0;
        for (let i: number = this.colAm; i > 0; i--) {
            this.colAmPerTransfBord[cmaptb_idx] = i;
            cmaptb_idx += 1;
        };
        this.optItmWidtTypeAR_TransfBord[0] = Infinity;
        this.optItmWidtTypeAR_TransfBord[this.optItmWidtTypeAR_TransfBord.length] = -200;
        //console.log(this.optItmWidtTypeAR);   // ! --> IMPOSTANT CONSOLE_LOF <-- !
        //console.log(this.optItmWidtTypeAR_TransfBord);   // ! --> IMPOSTANT CONSOLE_LOF <-- !
        //console.log(this.colAmPerTransfBord);   // ! --> IMPOSTANT CONSOLE_LOF <-- !
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, () => {
                for (let i: number = 0; i < this.colAmPerTransfBord.length; i++) {
                    if (window.innerWidth < this.optItmWidtTypeAR_TransfBord[i] && window.innerWidth >= this.optItmWidtTypeAR_TransfBord[i + 1]) {
                        this.colAm = this.colAmPerTransfBord[i];
                        let mainELWdtVal = this.optItmWidtTypeAR[i];
                        this.mainEl.style.width = mainELWdtVal + 'px';
                        //console.log(this.optItmWidtTypeAR[i]);   // ! --> IMPOSTANT CONSOLE_LOF <-- !
                        //console.log(this.colAm);   // ! --> IMPOSTANT CONSOLE_LOF <-- !
                        let mainBox_ChildrenNL = this.mainEl.children;
                        if (mainBox_ChildrenNL.length > 0) {
                            for (let i: number = mainBox_ChildrenNL.length - 1; i >= 0; i--) {
                                this.mainEl.removeChild(this.mainEl.lastChild);
                            };
                        } else {}
                        mainBox_ChildrenNL = this.mainEl.children;
                        if (mainBox_ChildrenNL.length === 0) {
                            // Tworzenie masonry kolumn:
                            for (let i: number = 0; i < this.colAm; i++) {
                                // Several elements:
                                let opnColEL = document.createElement('div');
                                opnColEL.setAttribute('class', 'option-col');
                                opnColEL.style.width = this.colWdt +'px';
                                this.mainEl.appendChild(opnColEL);



                                /*let opnTitBoxEL = document.createElement('div');
                                let opnTitImgBoxEL = document.createElement('div');
                                //
                                let opnTextBoxEL = document.createElement('div');
                                let opnTitPrpEL = document.createElement('div');
                                let opnTitPrpTN = document.createTextNode('imię i nazwisko');
                                let opnDatEL = document.createElement('div');
                                let opnDatTN = document.createTextNode('data');
                                opnTitBoxEL.setAttribute('class', 'opn-tit-box');
                                opnTitImgBoxEL.setAttribute('class', 'opn-img-box');
                                //
                                opnTextBoxEL.setAttribute('class', 'opn-txt-box');
                                opnTitPrpEL.setAttribute('class', 'opn-txt-tit');
                                opnDatEL.setAttribute('class', 'opn-txt-dat');
                                // User name row:
                                opnTitBoxEL.appendChild(opnTitImgBoxEL);
                                opnTitBoxEL.appendChild(opnTextBoxEL);
                                opnTitPrpEL.appendChild(opnTitPrpTN);
                                opnTextBoxEL.appendChild(opnTitPrpEL);
                                opnDatEL.appendChild(opnDatTN);
                                opnTextBoxEL.appendChild(opnDatEL);
                                opnColEL.appendChild(opnTitBoxEL);*/
                            };
                            // Tworzenie masonry elementów:
                            for (let el: number = 0; el < clientOpinions_Sources_Obj.name.length; el++) {
                                let opnColAR: any[] = [];
                                let opnColHgh: number[] = [];
                                for (let i: number = 0; i < document.querySelectorAll('div.option-col').length; i++) {
                                    opnColAR[i] = document.querySelectorAll('div.option-col')[i];
                                    let opnColBoun = opnColAR[i].getBoundingClientRect();
                                    opnColHgh[i] = opnColBoun.height;
                                };
                                console.log(opnColHgh);
                                let mostMinVal: number = Infinity;
                                for (let i: number = 0; i < opnColHgh.length; i++) {
                                    if (opnColHgh[i] < mostMinVal) {
                                        mostMinVal = opnColHgh[i];
                                    } else {}
                                };
                                console.log(`MOST_MIN_VAL: ${mostMinVal}`);
                                for (let i: number = 0; i < opnColHgh.length; i++) {
                                    if (opnColHgh[i] === mostMinVal) {
                                        let targetBox = document.querySelectorAll('div.option-col')[i];
                                        let opnItmBoxEL = document.createElement('div');
                                        opnItmBoxEL.setAttribute('class', 'opn-item-box');
                                         // User name row:
                                        let opnTitBoxEL = document.createElement('div');
                                        let opnTitImgBoxEL = document.createElement('div');
                                        let opnTitImgBoxTN = document.createTextNode(clientOpinions_Sources_Obj.imgLtr[el]);
                                        let opnTextBoxEL = document.createElement('div');
                                        let opnTitPrpEL = document.createElement('div');
                                        let opnTitPrpTN = document.createTextNode(clientOpinions_Sources_Obj.name[el]);
                                        let opnDatEL = document.createElement('div');
                                        let opnDatTN = document.createTextNode(clientOpinions_Sources_Obj.date[el]);
                                        opnTitBoxEL.setAttribute('class', 'opn-tit-box');
                                        opnTitImgBoxEL.setAttribute('class', 'opn-img-box');
                                        opnTitImgBoxEL.style.backgroundColor = clientOpinions_Sources_Obj.imgBchCl[el];
                                        opnTextBoxEL.setAttribute('class', 'opn-txt-box');
                                        opnTitPrpEL.setAttribute('class', 'opn-txt-tit');
                                        opnDatEL.setAttribute('class', 'opn-txt-dat');
                                        opnItmBoxEL.appendChild(opnTitBoxEL);
                                        opnTitBoxEL.appendChild(opnTitImgBoxEL);
                                        opnTitImgBoxEL.appendChild(opnTitImgBoxTN);
                                        opnTitBoxEL.appendChild(opnTextBoxEL);
                                        opnTitPrpEL.appendChild(opnTitPrpTN);
                                        opnTextBoxEL.appendChild(opnTitPrpEL);
                                        opnDatEL.appendChild(opnDatTN);
                                        opnTextBoxEL.appendChild(opnDatEL);
                                        // Stars Box:
                                        let opnStsBoxEL = document.createElement('div');
                                        let opnStsPrpEL = document.createElement('img');
                                        opnStsBoxEL.setAttribute('class', 'opn-stars-box');
                                        opnStsPrpEL.setAttribute('class', 'opn-stars-prp');
                                        opnStsPrpEL.setAttribute('src', 'hb-images-opinions/five-stars-7292866_640.png');
                                        opnStsPrpEL.setAttribute('alt', 'five-stars');
                                        opnStsBoxEL.appendChild(opnStsPrpEL);
                                        opnItmBoxEL.appendChild(opnStsBoxEL);
                                        // Description box:
                                        let opnDscBoxEL = document.createElement('div');
                                        let opnDscPrpEL = document.createElement('div');
                                        let opnDscPrpTN = document.createTextNode(clientOpinions_Sources_Obj.opinion[el]);
                                        opnDscBoxEL.setAttribute('class', 'opn-dsc-box');
                                        opnDscPrpEL.setAttribute('class', 'opn-dsc-prp');
                                        opnDscPrpEL.appendChild(opnDscPrpTN);
                                        opnDscBoxEL.appendChild(opnDscPrpEL);
                                        opnItmBoxEL.appendChild(opnDscBoxEL);
                                        // Finaly connect:
                                        targetBox.appendChild(opnItmBoxEL);

                                        break;   //      M E G A   W A Ż N E   I N F O   !
                                        // break - odnosi się do aktualnie wykonywanego if / else if,
                                        // a nie jak return - do całej funkcji

                                    } else {}
                                };
                            };
                        } else {}
                    } else {}
                };
            }, false);
        });
    }
};
const clientOpinions_Sources_Obj: {
    imgBchCl: string[],   // kolor tła
    imgLtr: string[],   // litera
    setLtr: Function,
    name: string[],   // imię i nazwisko
    date: string[],   // data
    opinion: string[]   // opinia
} = {
    imgBchCl: [
        'crimson',
        'steelblue',
        'green',
        'orangered',
        'cornflowerblue',
        '#777',
        'purple',
        'brown',
        'cadetblue',
    ],
    imgLtr: [],
    name: [
        'Amanda Onshee',
        'Alex Hawking',
        'John Wick',
        'Peter Kick',
        'Samara Brown',
        'Joseph Smith',
        'Carl Washington',
        'Smoke Big',
        'Tyson Warner'
    ],
    date: [
        '1 days ago',
        '3 days ago',
        '5 weeks ago',
        '5 week ago',
        '7 days ago',
        '7 days ago',
        '9 days ago',
        '12 days ago',
        '13 days ago'
    ],
    opinion: [
        'I am very pleased with the purchase of this villa. My husband and I were previously looking for a residence for eight wasps, but the prices were astronomical. I managed to buy a beautiful property with you twice as cheaply as with other sellers.',
        'Professional service as well as the purchased house. Mr. Carl is a real expert in consulting.',
        'I was looking for a small house in a quiet place near the city. With your company, and especially with Ms. Sarah, my problem was solved in no time and decently',
        'The apartment I bought from you works great. Everything is richly made, no scratches or scuffs. You are doing a wonderful job.',
        'I was looking for a modest and functional house in a small town. Your company gave me everything I needed. I recommend you to everyone with all my heart.',
        'For a long time I had trouble choosing the right apartment for me due to my poor physical condition. Ms. Annah quickly helped me choose the perfect apartment for me, on the ground floor.',
        'I finally have the house of my dreams. You guys are great, this whole company is great, especially Mr. Walter and his gift of finding homes.',
        'I was looking for the perfect home for myself in over Los Santos and I couldn\'t find it, so I decided to contact with your company. Now I living in huge mansion and I\'am so happy! Oooh I thank you very much and especially Carl Johnson!',
        'It\'s amazing. So that I contacted you and the next day you showed me this wonderful parament. Your properties deserve a big five stars!'
    ],
    setLtr(): void {
        for (let i = 0; i < this.name.length; i++) {
            this.imgLtr[i] = this.name[i].slice(0, 1);
        };
        //console.log(this.imgLtr);
    }
};
clientOpinions_Sources_Obj.setLtr();
clientOpinions_Obj.setCol();




const footerImg_Obj: {
    imgBox: HTMLImageElement,
    setAttr: Function
} = {
    imgBox: document.querySelector('img.footer-icons-prp'),
    setAttr(): void {
        this.imgBox.setAttribute('src', 'hb-images-worker/social-media-5995266_1280.png');
        this.imgBox.setAttribute('alt', 'social-media-icons');
    }

};
footerImg_Obj.setAttr();




/* // Patrykowe różne rzeczy
// Domknięcie - tzw. "Curring". Wiem o co w tym chodzi, ale ciężko mi jesst to opisać.
// Po prostu zwracana funkcja zagnieżdżona ma zapisany zakres funkcji, w której została 
// zadeklarowana i w ten sposób się domyka - coś w tym stylu i dzięki temu można 
// swobodnie korzystać z uprzednio zadeklarowanych parametrów w funkcji "func_1".
//let a: number = 2;
//let b: number = 4;
//let c: number = 6;
function func_1(a, b) {
    return function func_2(c) {
        return ((a + c) / b);
    };
};
let one: Function = func_1(2, 4);
let two: Function = one(6);
console.log(two);


let forRes: HTMLElement = document.getElementById('for');
for (let i: number = 1, m: number = 7; i < 7; i++, m--) {
    for (let j: number = 2; j < m; j++) {   // pirewszy argument = od ilu znaków 
        // np. "*" zaczynami i później w drugim argumencie do ilu znaków liczymy, 
        //względem iteracji zmiennej (iteracyjnej) "i"
        forRes.innerHTML += '&nbsp&nbsp ';
        // Zero "&nbsp" = wyrównaj do lewej
        // Jedno "&nbsp" + ' ' = wyrównaj do środka
        // Dwa "&nbsp" = wyrównaj do prawej
    };
    for (let j: number = 1; j < i; j++) {
        forRes.innerHTML += String(j) + ' ';
    };
    for (let j: number = 2; j < i; j++) {
        forRes.innerHTML += ' ' + String(i - j) + ' ';
    };
    forRes.innerHTML += '<br>';
};



let numbAR: number[] = [10, 7, 33, -4, 53, -16, 987];
let minVal: number = Infinity;

for (let i: number = 0; i < numbAR.length; i++) {
    if (numbAR[i] < minVal) {
        minVal = numbAR[i];
    } else {}
}
//alert('Najmniejsza liczba: ' + minVal);

let maxVal: number = -Infinity;
for (let i: number = 0; i < numbAR.length; i++) {
    if (numbAR[i] > maxVal) {
        maxVal = numbAR[i];
    } else {}
}
//alert('Największa liczba: ' + maxVal);
*/
