// Strona ta to: agencja nieruchomości
var RWD_info_Obj = {
    phone: 0,
    desktop: 900,
    //sliderDescExtraWidthValFunc
};
var navbar_Mobile_Obj = {
    windowWidth: 0,
    isShowed: false,
    eventsPageLoad: ['load'],
    eventsWindow: ['load', 'resize'],
    eventsClick: ['click', 'touchend'],
    setNavbar: function () {
        var _this = this;
        var navbarEL = document.querySelector('div.navbar-box');
        this.eventsPageLoad.forEach(function (ev) {
            window.addEventListener(ev, function () {
                if (_this.windowWidth < RWD_info_Obj.desktop) {
                    navbarEL.style.top = 0 + 'px';
                    navbarEL.style.transitionDelay = 0.1 + 's';
                    navbarEL.style.transitionDuration = 0.6 + 's';
                }
                else if (_this.windowWidth >= RWD_info_Obj.desktop) {
                    navbarEL.style.top = 0 + 'px';
                    navbarEL.style.transitionDelay = 0.1 + 's';
                    navbarEL.style.transitionDuration = 0.6 + 's';
                }
            }, false);
        });
        this.setNavPgTitBxWdt();
    },
    setNavPgTitBxWdt: function () {
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
    navMoving: function () {
        var _this = this;
        var navBut = document.querySelector('div.page-dropdown-button-proper');
        var navCntBx = document.querySelector('div.navbar-mobile-content-box');
        var topStrip = document.querySelector('div.bs-top');
        var centerStrip = document.querySelector('div.bs-center');
        var bottomStrip = document.querySelector('div.bs-bottom');
        var navButGroup = document.querySelector('div.navbar-mobile-button-group');
        this.eventsClick.forEach(function (ev) {
            navBut.addEventListener(ev, function () {
                if (_this.isShowed === false) { // Show
                    // Navbar content:
                    var toHgt = window.innerHeight;
                    navCntBx.style.height = (60 + (42 * 6) + 17) + 'px';
                    navCntBx.style.transitionDuration = 0.4 + 's';
                    navButGroup.style.top = 0 + 'px';
                    navButGroup.style.transitionDuration = 0.4 + 's';
                    // Navbar strips:
                    var toCenterPos = (((60 - 18) / 2) / 2) - 0.5;
                    topStrip.style.top = toCenterPos + 'px';
                    topStrip.style.transitionDuration = 0.3 + 's';
                    bottomStrip.style.bottom = toCenterPos + 'px';
                    bottomStrip.style.transitionDuration = 0.3 + 's';
                    setTimeout(function () {
                        centerStrip.style.opacity = '0.0';
                        topStrip.style.transform = 'rotate(' + 45 + 'deg)';
                        topStrip.style.transitionDuration = 0.3 + 's';
                        bottomStrip.style.transform = 'rotate(' + -45 + 'deg)';
                        bottomStrip.style.transitionDuration = 0.3 + 's';
                    }, 300);
                    setTimeout(function () {
                        _this.isShowed = true;
                        console.log(_this.isShowed);
                    }, 600);
                }
                else if (_this.isShowed === true) { // Hide
                    // Navbar content:
                    navCntBx.style.height = 60 + 'px';
                    navCntBx.style.transitionDuration = 0.4 + 's';
                    navButGroup.style.top = -301 + 'px';
                    navButGroup.style.transitionDuration = 0.4 + 's';
                    // Navbar strips:
                    var resetPos_1 = 0;
                    topStrip.style.transform = 'rotate(' + 0 + 'deg)';
                    topStrip.style.transitionDuration = 0.3 + 's';
                    bottomStrip.style.transform = 'rotate(' + 0 + 'deg)';
                    bottomStrip.style.transitionDuration = 0.3 + 's';
                    setTimeout(function () {
                        centerStrip.style.opacity = '1.0';
                        topStrip.style.top = resetPos_1 + 'px';
                        topStrip.style.transitionDuration = 0.3 + 's';
                        bottomStrip.style.bottom = resetPos_1 + 'px';
                        bottomStrip.style.transitionDuration = 0.3 + 's';
                    }, 300);
                    setTimeout(function () {
                        _this.isShowed = false;
                        console.log(_this.isShowed);
                    }, 600);
                }
            }, false);
        });
    }
};
navbar_Mobile_Obj.setNavbar();
var slider_Obj = {
    // UWAGA: Wywołanie właściwość "length" spowoduje, iż typem wynikowym bęzie "number",
    // a nie "HTMLDivElement" w przypadku braku właściwości "length".
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageAmount: 6,
    currentImg: 0,
    sliderDescExtraWidth: 0,
    blockadeImg: false,
    eventsWindowTable: ['load', 'resize'],
    eventsClickTable: ['click', 'touchend'],
    imagesArray: [],
    stateELNodeList: [],
    setWinBdHeight: function () {
        var _this = this;
        var windowBodyEL = document.querySelector('div.window-block');
        this.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.windowHeight = window.innerHeight;
                windowBodyEL.style.height = _this.windowHeight + 'px';
                //console.log(this.windowHeight);
            });
        });
        slider_Obj.createSldELS();
    },
    createSldELS: function () {
        var sliderParentBox = document.querySelector('div.img-slider-body');
        var sldTitTxt = [
            'Your dream house',
            'True constructions',
            'Modern design',
            'Rich interiors',
            'Ideal locations',
            'Simple and modest',
        ];
        var sldDscTxt = [
            'Our company will find the house of your dreams for you.',
            'Houses which we offer to clients are building from incredibly tough materials.',
            'Among our houses can mark out many style types. The once from them is modern style, which is currently hugely popular.',
            'Our houses have rich interior, including substantial performance and abundant furnishings.',
            'All buildings are located in greater agglomerations as well as they be located close environments parks.',
            'Among a plenty our constructions also are simple style type houses. They are perfect choose for averege peoples.',
        ];
        var sldTitTN = [];
        var sldDscTN = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldTitTN[i] = document.createTextNode(sldTitTxt[i]);
            sldDscTN[i] = document.createTextNode(sldDscTxt[i]);
        }
        ;
        for (var i = 0; i < this.imageAmount; i++) {
            var sldDimEl = document.createElement('div');
            var sldPrpEl = document.createElement('img');
            var sldInfEL = document.createElement('div');
            var sldInfHngEl = document.createElement('div');
            var sldTitEL = document.createElement('div');
            var sldDscEL = document.createElement('div');
            var sldButEL = document.createElement('div');
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
        }
        ;
        // First img animation:
        var el = document.querySelectorAll('img.img-slider-img-prp')[0];
        el.style.height = 115 + '%';
        el.style.filter = 'brightness(100%)';
        setTimeout(function () {
            el.style.height = 100 + '%';
            el.style.filter = 'brightness(30%)';
            el.style.transitionDuration = 1.4 + 's';
        }, 100);
        //console.table(this.imagesArray);
        slider_Obj.setSliderDescWidthAEL();
        slider_Obj.createSldImgStateEL();
    },
    returnSliderTitELS: function () {
        var sldTitELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title');
        }
        ;
        return sldTitELS;
    },
    returnSliderDescELS: function () {
        var sldDescELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description');
        }
        ;
        return sldDescELS;
    },
    returnSliderButELS: function () {
        var sldButELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('div.img-slider-button');
        }
        ;
        return sldButELS;
    },
    setSliderDescWidthAEL: function () {
        var _this = this;
        slider_Obj.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                var sldDescELS = [];
                //console.log(sldDescELS);
                var sldTitWdtVALS = [];
                for (var i = 0; i < _this.imageAmount; i++) {
                    sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                    var sldTitWdtVALS_CSS_Obj = window.getComputedStyle(document.querySelectorAll('div.img-slider-title')[i], null);
                    var sldTitWdtVALS_CSS_Val_Str = sldTitWdtVALS_CSS_Obj.getPropertyValue('width');
                    var sldTitWdtVALS_CSS_Val_Num = Number(sldTitWdtVALS_CSS_Val_Str.slice(0, -2));
                    sldTitWdtVALS[i] = sldTitWdtVALS_CSS_Val_Num;
                }
                ;
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    _this.extraWdt = 0;
                }
                else if (window.innerWidth >= RWD_info_Obj.desktop) {
                    _this.extraWdt = 150;
                    console.log(_this.extraWdt);
                }
                if (window.innerWidth)
                    sldTitWdtVALS.map(function (value, i) {
                        sldTitWdtVALS[i] = value + _this.extraWdt;
                    });
                sldDescELS.forEach(function (value, i) {
                    var toWdtVal = sldTitWdtVALS[i];
                    sldDescELS[i].style.width = toWdtVal + 'px';
                });
                // Wywołanie kolejnej funkcji}, false);
            }, false);
        });
    },
    createSldImgStateEL: function () {
        var _this = this;
        var stateParentEL = document.querySelector('div.iscb-ib-is-group-box');
        for (var i = 0; i < this.imageAmount; i++) {
            var stateEL = document.createElement('div');
            stateEL.setAttribute('class', 'iscb-ib-is-once-box');
            stateParentEL.appendChild(stateEL);
        }
        ;
        for (var i = 0; i < this.imageAmount; i++) {
            this.stateELNodeList[i] = document.querySelectorAll('div.iscb-ib-is-once-box')[i];
            this.stateELNodeList[i].style.top = 40 + 'px';
            this.stateELNodeList[i].style.opacity = 0;
        }
        ;
        var intervIndex = 0;
        var intervFunc = setInterval(function () {
            if (intervIndex < _this.imageAmount) {
                _this.stateELNodeList[intervIndex].style.top = 0 + 'px';
                _this.stateELNodeList[intervIndex].style.opacity = 1;
                _this.stateELNodeList[intervIndex].style.transitionDuration = 0.2 + 's';
            }
            else if (intervIndex >= _this.imageAmount) {
                clearInterval(intervFunc);
            }
            intervIndex += 1;
        }, 150);
        this.positingSldEl();
    },
    positingSldEl: function () {
        var _this = this;
        ['load'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                var sldTitELS = [];
                var sldDescELS = [];
                var sldButELS = [];
                for (var i = 0; i < _this.imageAmount; i++) {
                    sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
                    sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                    sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
                }
                ;
                _this.windowWidth = window.innerWidth;
                var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth + 10); // Szerokość stałego scrollbar'a strony
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                    siteScrollbarWidth = 0;
                var _loop_1 = function (i) {
                    _this.imagesArray[i] = document.querySelectorAll('div.img-slider-img-dim')[i];
                    if (i === 0) { // Stały indeks pierwszaego obrazu
                        _this.imagesArray[i].style.left = 0 + 'px'; // (-) left i (+) left działają DOBRZE!
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                        setTimeout(function () {
                            sldTitELS[i].style.top = 0 + 'px';
                            sldTitELS[i].style.opacity = 1;
                            sldTitELS[i].style.transitionDuration = 0.0 + 'px';
                            setTimeout(function () {
                                sldDescELS[i].style.top = 0 + 'px';
                                sldDescELS[i].style.opacity = 1;
                                sldDescELS[i].style.transitionDuration = 0.0 + 'px';
                                setTimeout(function () {
                                    sldButELS[i].style.top = 0 + 'px';
                                    sldButELS[i].style.opacity = 1;
                                    sldButELS[i].style.transitionDuration = 0.0 + 'px';
                                }, 200);
                            }, 200);
                        }, 400);
                        return "continue";
                    }
                    else { }
                    _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                };
                for (var i = 0; i < _this.imageAmount; i++) {
                    _loop_1(i);
                }
                ;
                // Arrows animation:
                var arrowELS = [];
                arrowELS[0] = document.querySelector('div.iscb-leftArrow-proper');
                arrowELS[1] = document.querySelector('div.iscb-rightArrow-proper');
                arrowELS[0].style.left = 100 + 'px';
                arrowELS[0].style.opacity = '0';
                arrowELS[1].style.right = 100 + 'px';
                arrowELS[1].style.opacity = '0';
                setTimeout(function () {
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
    setAEL_SldMoving: function () {
        var _this = this;
        var addToLeftPx = 0;
        var sliderBut = {
            left: document.querySelector('div.iscb-leftArrow-box'),
            right: document.querySelector('div.iscb-rightArrow-box')
        };
        console.log('Aktualny obraz: ' + (this.currentImg + 1));
        this.eventsClickTable.forEach(function (ev) {
            var sldTitELS = [];
            var sldDescELS = [];
            var sldButELS = [];
            for (var i = 0; i < _this.imageAmount; i++) {
                sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
                sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
                sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
            }
            ;
            sliderBut.right.addEventListener(ev, function () {
                var imgSwitchLimit = (_this.imageAmount - 1); // Start = 0. Oper +1 = img_1 znika => img_2 pojawia się
                if (_this.currentImg < imgSwitchLimit && _this.blockadeImg === false) {
                    var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth); // Stały pasek przewijania na stronie
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                        siteScrollbarWidth = 0;
                    // Image:
                    _this.imagesArray[_this.currentImg].style.left = ((_this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(function () {
                        sldTitELS[_this.currentImg].style.top = 0 + 'px';
                        sldTitELS[_this.currentImg].style.opacity = 1;
                        sldTitELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg].style.top = 0 + 'px';
                            sldDescELS[_this.currentImg].style.opacity = 1;
                            sldDescELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(function () {
                                sldButELS[_this.currentImg].style.top = 0 + 'px';
                                sldButELS[_this.currentImg].style.opacity = 1;
                                sldButELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    // Counter
                    _this.currentImg += 1;
                    // Image
                    _this.imagesArray[_this.currentImg].style.left = 0 + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    // Info:
                    setTimeout(function () {
                        sldTitELS[_this.currentImg - 1].style.top = -20 + 'px';
                        sldTitELS[_this.currentImg - 1].style.opacity = 0;
                        sldTitELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg - 1].style.top = -20 + 'px';
                            sldDescELS[_this.currentImg - 1].style.opacity = 0;
                            sldDescELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(function () {
                                sldButELS[_this.currentImg - 1].style.top = -20 + 'px';
                                sldButELS[_this.currentImg - 1].style.opacity = 0;
                                sldButELS[_this.currentImg - 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    // Slider status color:
                    for (var i = 0; i < _this.imageAmount; i++) {
                        if (i === _this.currentImg) {
                            _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                            continue;
                        }
                        else { }
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    }
                    ;
                    _this.blockadeImg = true;
                    setTimeout(function () {
                        _this.blockadeImg = false;
                    }, 1200); // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                }
                else { }
            }, false);
            sliderBut.left.addEventListener(ev, function () {
                if (_this.currentImg > 0 && _this.blockadeImg === false) {
                    var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth);
                    if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                        siteScrollbarWidth = 0;
                    _this.imagesArray[_this.currentImg].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(function () {
                        sldTitELS[_this.currentImg].style.top = 0 + 'px';
                        sldTitELS[_this.currentImg].style.opacity = 1;
                        sldTitELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg].style.top = 0 + 'px';
                            sldDescELS[_this.currentImg].style.opacity = 1;
                            sldDescELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            setTimeout(function () {
                                sldButELS[_this.currentImg].style.top = 0 + 'px';
                                sldButELS[_this.currentImg].style.opacity = 1;
                                sldButELS[_this.currentImg].style.transitionDuration = 0.4 + 'px';
                            }, 200);
                        }, 200);
                    }, 600);
                    _this.currentImg -= 1;
                    _this.imagesArray[_this.currentImg].style.left = 0 + 'px';
                    _this.imagesArray[_this.currentImg].style.transitionDuration = 1.5 + 's';
                    setTimeout(function () {
                        sldTitELS[_this.currentImg + 1].style.top = -20 + 'px';
                        sldTitELS[_this.currentImg + 1].style.opacity = 0;
                        sldTitELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                        setTimeout(function () {
                            sldDescELS[_this.currentImg + 1].style.top = -20 + 'px';
                            sldDescELS[_this.currentImg + 1].style.opacity = 0;
                            sldDescELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            setTimeout(function () {
                                sldButELS[_this.currentImg + 1].style.top = -20 + 'px';
                                sldButELS[_this.currentImg + 1].style.opacity = 0;
                                sldButELS[_this.currentImg + 1].style.transitionDuration = 0.2 + 'px';
                            }, 100);
                        }, 100);
                    }, 0);
                    for (var i = 0; i < _this.imageAmount; i++) {
                        if (i === _this.currentImg) {
                            _this.stateELNodeList[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
                            continue;
                        }
                        else { }
                        _this.stateELNodeList[i].style.backgroundColor = 'rgba(200,200,200,0.6)';
                    }
                    ;
                    _this.blockadeImg = true;
                    setTimeout(function () {
                        _this.blockadeImg = false;
                    }, 1200); // Taka sama jak w powyższym "transitionDuration" obrazka
                    //console.log('Aktualny obraz: ' + (this.currentImg + 1));   // LEFT aktualnego obrazu
                }
                else { }
            }, false);
        });
    },
    setAEL_ImgLeftResize: function () {
        var _this = this;
        this.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.windowWidth = innerWidth;
                var siteScrollbarWidth = (window.innerWidth - document.documentElement.clientWidth);
                if (siteScrollbarWidth === undefined || siteScrollbarWidth === null)
                    siteScrollbarWidth = 0;
                for (var i = 0; i < _this.imageAmount; i++) {
                    var onceImg_CSS_Obj = window.getComputedStyle(_this.imagesArray[i], null);
                    var onceImg_CSS_Str = onceImg_CSS_Obj.getPropertyValue('left');
                    onceImg_CSS_Str = onceImg_CSS_Str.slice(0, -2);
                    var onceImg_CSS_Num = Number(onceImg_CSS_Str);
                    //console.log('Obraz ' + (i + 1) + ': "left" = ' + onceImg_CSS_Num);   // LEFT po RESISE aktualnego obrazu
                    if (onceImg_CSS_Num > 0) { // right
                        _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * 1) + 'px';
                        _this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                    else if (onceImg_CSS_Num === 0) { // center
                        continue;
                    }
                    else if (onceImg_CSS_Num < 0) { // left
                        _this.imagesArray[i].style.left = ((_this.windowWidth - siteScrollbarWidth) * -1) + 'px';
                        _this.imagesArray[i].style.transitionDuration = 0.0 + 's';
                    }
                }
                ;
            }, false);
        });
    }
};
slider_Obj.setWinBdHeight();
slider_Obj.setAEL_ImgLeftResize();
var productSlider_Sources_Obj = {
    pdcSldSrc_Tit: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ],
    pdcSldSrc_Dsc: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
};
var productSlider_Obj = {
    windowWidth: 0,
    windowHeight: 0,
    productsAmount: productSlider_Sources_Obj.pdcSldSrc_Tit.length,
    curWidStat: 0,
    pdcSldItBd_Wdt: 0,
    pdcSldItBd_MgnLft: 15,
    resSpace: 350,
    resLimitVals: [],
    curPdcSldMovVal: [],
    evWinLoadRes: ['load', 'resize'],
    evElClick: ['click', 'touchend'],
    setVisibleAreaWidth: function () {
        var _this = this;
        this.evWinLoadRes.forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.windowWidth = window.innerWidth;
                var pdcSldBox = document.querySelector('div.product-slider-box');
                var pdcSldHng = document.querySelector('div.product-slider-hanger');
                // Counting values for limit array:
                //const resLimitVals: number[] = [];   // Global variable
                var productsWide = [5, 4, 3, 2, 1];
                // (1200 - (34 * 2)) = navbar width without side elements margin/padding =
                // ([desktop-navbar-width] - ([side-elements-margin/padding]) * [elements-amunt])
                _this.pdcSldItBd_Wdt = (((1200 - (34 * 2)) / 5) - ((_this.pdcSldItBd_MgnLft * (productsWide.length - 1)) / 5)); // 214.4   |   depend of nev pseudo-width
                for (var i = 0; i < productsWide.length; i++) {
                    _this.resLimitVals[i] = ((_this.pdcSldItBd_Wdt * productsWide[i]) + (_this.pdcSldItBd_MgnLft * (productsWide[i] - 1)));
                }
                ;
                _this.resLimitVals[productsWide.length] = (_this.pdcSldItBd_Wdt * -1); // Naprawione niechciane rozszerzanie się bloku slidera
                console.log(_this.resLimitVals);
                // resSpace: current-slider-item-box-width
                var oneTime = true; // I don't know why I must use this...
                for (var i = 0; i < _this.resLimitVals.length; i++) {
                    if (i === 0 && oneTime === true) {
                        oneTime = false;
                        var val = _this.resLimitVals[i];
                        pdcSldBox.style.width = val + 'px';
                        _this.curWidStat = productsWide[i]; /* CURRENT WIDE STATUS - When you want to be add mowe images  */
                    }
                    else if (i > 0) {
                        oneTime = true;
                        if (_this.windowWidth < (_this.resLimitVals[i] + _this.resSpace) && _this.windowWidth >= (_this.resLimitVals[i + 1] + _this.resSpace)) {
                            var val = _this.resLimitVals[i];
                            pdcSldBox.style.width = val + 'px';
                            _this.curWidStat = productsWide[i]; /* CURRENT WIDE STATUS - When you want to be add mowe images */
                        }
                        else { }
                    }
                }
                ;
                console.log("CURRENT WIDE STATUS: ".concat(_this.curWidStat));
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
                    const pdcSldItBd: HTMLDivElement = document.createElement('div');
                    pdcSldItBd.setAttribute('class', 'pdc-sld-item-body');
                    pdcSldItBd.style.width = this.pdcSldItBd_Wdt + 'px';
                    if (i === 0) {
                    } else if (i > 0) {
                        pdcSldItBd.style.marginLeft = this.pdcSldItBd_MgnLft + 'px';
                    }
                    pdcSldHng.appendChild(pdcSldItBd);
                };*/
                //console.log('Product slider box width - according to window width:');
                //console.table(this.resLimitVals);   /* Product slider hanger will moving according to this value of index array BUT from 0 to penultimate index, because las index = (-) value*/
            }, false);
        });
        this.createItems_fixedAmount();
    },
    createItems_fixedAmount: function () {
        var _this = this;
        window.addEventListener('load', function () {
            var itemsHanger = document.querySelector('div.product-slider-hanger');
            for (var i = 0; i < _this.productsAmount; i++) {
                var itBd = document.createElement('div');
                var itCnt = document.createElement('div');
                var itClkFld = document.createElement('div');
                var itImgDim = document.createElement('div');
                var itImgPrp = document.createElement('img');
                var itTit = document.createElement('div');
                var itDes = document.createElement('div');
                itBd.setAttribute('class', 'pdc-sld-item-body');
                itCnt.setAttribute('class', 'pdc-sld-item-content');
                itClkFld.setAttribute('class', 'pdc-sld-item-clickField');
                itImgDim.setAttribute('class', 'pdc-sld-item-img-dim');
                itImgPrp.setAttribute('class', 'pdc-sld-item-img-prp');
                itTit.setAttribute('class', 'pdc-sld-item-title');
                itDes.setAttribute('class', 'pdc-sld-item-des');
                itBd.appendChild(itCnt);
                itBd.style.width = _this.pdcSldItBd_Wdt + 'px';
                if (i === 0) {
                }
                else if (i > 0) {
                    itBd.style.marginLeft = _this.pdcSldItBd_MgnLft + 'px';
                }
                itCnt.appendChild(itClkFld);
                itClkFld.appendChild(itImgDim);
                itClkFld.appendChild(itTit);
                itClkFld.appendChild(itDes);
                itImgDim.appendChild(itImgPrp);
                var itImgDimVal = (_this.pdcSldItBd_Wdt * 0.7);
                itImgDim.style.height = itImgDimVal + 'px';
                itemsHanger.appendChild(itBd);
            }
            ;
        }, false);
        this.reverseResLimVals_Func();
    },
    reverseResLimVals_Func: function () {
        var _this = this;
        // Iterujemy tą tablicą "this.curWidStat" po tej "this.resLimitVals" i w ten sposób mamy aktualną wartość przesunięcia produktu względem odpowiedniego rozstawy tychże produktów
        this.evWinLoadRes.forEach(function (ev) {
            window.addEventListener(ev, function () {
                var reverseResLimVals = _this.resLimitVals.reverse();
                _this.curPdcSldMovVal = reverseResLimVals[_this.curWidStat];
                //console.log(`CURRENT PRODUCT SLIDER MOVING: ${this.curPdcSldMovVal}`);
                //this.setAEL_PdcSldMoving();
            }, false);
        });
        this.setAEL_PdcSldMoving();
    },
    setAEL_PdcSldMoving: function () {
        var _this = this;
        var pdcSldButLft = document.querySelector('div.product-slider-arrowBox-left-box');
        var pdcSldButRgt = document.querySelector('div.product-slider-arrowBox-right-box');
        var itemsHanger = document.querySelector('div.product-slider-hanger');
        var moveVal = 0;
        this.evElClick.forEach(function (ev) {
            pdcSldButLft.addEventListener(ev, function () {
                moveVal += ((_this.curPdcSldMovVal + _this.pdcSldItBd_MgnLft) * 1); // MEGA WAŻNE!
                // Trzeba dodać 1x margin-left, gdyż pole widoczności zawiera elemnety łącznie z marginami! 
                // Inaczej hanger ruszy się na niewystarczającą odległość
                itemsHanger.style.left = moveVal + 'px';
                itemsHanger.style.transitionDuration = 1 + 's';
                console.log("LEFT: ".concat(moveVal));
            }, false);
        });
        this.evElClick.forEach(function (ev) {
            pdcSldButRgt.addEventListener(ev, function () {
                moveVal += ((_this.curPdcSldMovVal + _this.pdcSldItBd_MgnLft) * -1);
                itemsHanger.style.left = moveVal + 'px';
                itemsHanger.style.transitionDuration = 1 + 's';
                console.log("RIGHT: ".concat(moveVal));
            }, false);
        });
    }
};
productSlider_Obj.setVisibleAreaWidth();
