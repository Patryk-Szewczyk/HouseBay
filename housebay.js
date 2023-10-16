// Strona ta to: agencja nieruchomości
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var one = document.getElementById('splash-screen');
        //let two: HTMLDivElement = document.querySelector('div.website-content');
        one.style.display = 'none';
        //two.style.display = 'block';
    }, 1800);
}, false);
function createContent() {
}
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
        var navbarEL = document.querySelector('nav.navbar-box');
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
            sldPrpEl.setAttribute('alt', sldTitTxt[i]);
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
            sldTitELS[i] = document.querySelectorAll('div.img-slider-title')[i];
        }
        ;
        return sldTitELS;
    },
    returnSliderDescELS: function () {
        var sldDescELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldDescELS[i] = document.querySelectorAll('div.img-slider-description')[i];
        }
        ;
        return sldDescELS;
    },
    returnSliderButELS: function () {
        var sldButELS = [];
        for (var i = 0; i < this.imageAmount; i++) {
            sldButELS[i] = document.querySelectorAll('div.img-slider-button')[i];
        }
        ;
        return sldButELS;
    },
    setSliderDescWidthAEL: function () {
        var _this = this;
        slider_Obj.eventsWindowTable.forEach(function (ev) {
            window.addEventListener(ev, function () {
                // Ustawienie szerokości bloku opisu, względem szerkości bloku tytułowego slidera (+ ~100px)
                var sldDescELS = _this.returnSliderDescELS();
                var sldTitELS = _this.returnSliderTitELS();
                //console.log(sldDescELS);
                var sldTitWdtVALS = [];
                for (var i = 0; i < _this.imageAmount; i++) {
                    var sldTitWdtVALS_CSS_Obj = window.getComputedStyle(sldTitELS[i], null);
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
                var sldTitELS = _this.returnSliderTitELS();
                var sldDescELS = _this.returnSliderDescELS();
                var sldButELS = _this.returnSliderButELS();
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
            var sldTitELS = _this.returnSliderTitELS();
            var sldDescELS = _this.returnSliderDescELS();
            var sldButELS = _this.returnSliderButELS();
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
;
var ProductSlider = /** @class */ (function () {
    function ProductSlider(arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7) {
        this.windowWidth = 0;
        this.windowHeight = 0;
        this.curWidStat = 0; // Amount of visibled items for current product slider box width
        this.itemsPage = 0;
        this.pdcSldmoveVal = 0;
        this.statBallsAmount = 0;
        this.currentPage = 0;
        this.statusLimitAR = [];
        this.pageStartLimit = this.curWidStat;
        this.resLimitVals = []; // Values of slider box width, which are calculate form items for current product slider box width
        this.curPdcSldMovVal = []; // Values of current product slider moving distance on once move action (reverse "resLimitVals" array)
        this.evWinLoadRes = ['load', 'resize'];
        this.evElClick = ['click', 'touchend'];
        this.productsAmount = arg_1;
        this.sldStlIdxNumToWdt = arg_2;
        this.sldInfoNum = arg_3;
        this.pdcSldItBd_Wdt = arg_4;
        this.pdcSldItBd_MgnLft = arg_5;
        this.resSpace = arg_6;
        this.sldImgFileNum = arg_7;
    }
    ProductSlider.prototype.setVisibleAreaWidth = function () {
        var _this = this;
        this.evWinLoadRes.forEach(function (ev) {
            window.addEventListener(ev, function () {
                _this.windowWidth = window.innerWidth;
                var pdcSldBox = document.querySelectorAll('div.product-slider-box')[_this.sldStlIdxNumToWdt];
                var pdcSldHng = document.querySelectorAll('div.product-slider-hanger')[_this.sldStlIdxNumToWdt];
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
        this.createItems_fixedAmount(); // FIXED AMOUNT OF TEMS
    };
    ;
    ProductSlider.prototype.createItems_fixedAmount = function () {
        var _this = this;
        window.addEventListener('load', function () {
            var itemsHanger = document.querySelectorAll('div.product-slider-hanger')[_this.sldStlIdxNumToWdt];
            for (var i = 0; i < _this.productsAmount; i++) {
                var itBd = document.createElement('div');
                var itCnt = document.createElement('div');
                var itClkFld = document.createElement('div');
                var itImgDim = document.createElement('div');
                var itImgPrp = document.createElement('img');
                var itPrc = document.createElement('div');
                var itPrcTN = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Prc[_this.sldInfoNum][i]);
                var itDes = document.createElement('div');
                var itDesTN = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Dsc[_this.sldInfoNum][i]);
                var itArea = document.createElement('div');
                var itAreaText = document.createElement('div');
                var itAreaTextTN = document.createTextNode(productSlider_Sources_Obj.pdcSldSrc_Area[_this.sldInfoNum][i]);
                var itAreaSup = document.createElement('sup');
                var itAreaSupTN = document.createTextNode('2');
                itBd.setAttribute('class', 'pdc-sld-item-body');
                itCnt.setAttribute('class', 'pdc-sld-item-content');
                itClkFld.setAttribute('class', 'pdc-sld-item-clickField');
                itImgDim.setAttribute('class', 'pdc-sld-item-img-dim');
                itImgPrp.setAttribute('class', 'pdc-sld-item-img-prp');
                itImgPrp.setAttribute('src', 'hb-images-product-slider-' + (_this.sldImgFileNum + 1) + '/img_' + (i + 1) + '.jpg');
                itImgPrp.setAttribute('alt', productSlider_Sources_Obj.pdcSldSrc_Dsc[_this.sldInfoNum][i]);
                itPrc.setAttribute('class', 'pdc-sld-item-price');
                itDes.setAttribute('class', 'pdc-sld-item-des');
                itArea.setAttribute('class', 'pdc-sld-item-area');
                itAreaText.setAttribute('class', 'pdc-sld-item-area-text');
                itAreaSup.setAttribute('class', 'pdc-sld-item-area-sup');
                itBd.appendChild(itCnt);
                itBd.style.width = _this.pdcSldItBd_Wdt + 'px';
                if (i === 0) {
                }
                else if (i > 0) {
                    itBd.style.marginLeft = _this.pdcSldItBd_MgnLft + 'px';
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
                var itImgDimVal = (_this.pdcSldItBd_Wdt * 0.7);
                itImgDim.style.height = itImgDimVal + 'px';
                itemsHanger.appendChild(itBd);
            }
            ;
        }, false);
        this.createStatusLimitAR();
        this.reverseResLimVals_Func();
    };
    ;
    ProductSlider.prototype.createStatusLimitAR = function () {
        // Also this function is pause in work, because this mechanism require a lot more work...
        var productsWide = [1, 2, 3, 4, 5];
        var statNumAR = [];
        for (var i = 0; i < 5; i++) {
            statNumAR[i] = Math.ceil(this.productsAmount / (i + 1));
        }
        ; // [15, 8, 5, 4, 3]
        //console.log(statNumAR);
        var res = [];
        for (var i = 0; i < 5; i++) {
            res[i] = []; // UWAGA! MEGA ULTRA HIPER WAŻNE! Jeżeli chcesz przypisaywać 
            // wartości do kolejnego/następnego indeksu zagnieżdżonego, MUSISZ uprzednio
            // UTWORZYĆ ten INDEKS za pomocą "[]", inaczej wyskorzy ci BŁĄD!;
            var startVal = (productsWide[i] * -1);
            for (var j = 0; j < statNumAR[i]; j++) {
                //res[i][j] = productsWide[i];
                res[i][j] = []; // UWAGA! Tutaj tak samo! W zwykłym DżawaSkripcie tak nie ma
                startVal += productsWide[i];
                for (var k = 0; k < productsWide[i]; k++) {
                    res[i][j][k] = ((startVal + k) + 1);
                }
                ;
            }
            ;
        }
        ;
        //console.log(`STAT_NUM_AR: ${statNumAR}`);
        //console.log('START_VALUE: ' + startValue);
        //console.log(res);
        return res;
    };
    ;
    ProductSlider.prototype.reverseResLimVals_Func = function () {
        var _this = this;
        // Iterujemy tą tablicą "this.curWidStat" po tej "this.resLimitVals" i w ten sposób mamy aktualną wartość przesunięcia produktu względem odpowiedniego rozstawy tychże produktów
        this.evWinLoadRes.forEach(function (ev) {
            window.addEventListener(ev, function () {
                var reverseResLimVals = _this.resLimitVals.reverse();
                var val = reverseResLimVals[_this.curWidStat];
                _this.curPdcSldMovVal = val;
                //console.log(`CURRENT PRODUCT SLIDER MOVING: ${this.curPdcSldMovVal}`);   // OK
                //console.log(typeof this.curPdcSldMovVal);   // OK
                //console.log(Number(this.curPdcSldMovVal) + 15);   // OK
            }, false);
        });
        this.setAEL_PdcSldMoving();
    };
    ;
    ProductSlider.prototype.setAEL_PdcSldMoving = function () {
        var _this = this;
        var pdcSldButLft = document.querySelectorAll('div.product-slider-arrowBox-left-box')[this.sldStlIdxNumToWdt];
        var pdcSldButRgt = document.querySelectorAll('div.product-slider-arrowBox-right-box')[this.sldStlIdxNumToWdt];
        var itemsHanger = document.querySelectorAll('div.product-slider-hanger')[this.sldStlIdxNumToWdt];
        var pageEndLimit = this.productsAmount;
        var isMoved = false;
        var tnsDur_Timeout = 1000;
        var tnsDur_Style = (tnsDur_Timeout / 1000);
        console.log('PAGE_END_LIMIT:' + pageEndLimit);
        console.log('PAGE_START_LIMIT:' + this.pageStartLimit);
        this.evElClick.forEach(function (ev) {
            pdcSldButLft.addEventListener(ev, function () {
                _this.pageStartLimit = _this.curWidStat;
                // Limit of second statement operand are moving according to "this.curWidStat"
                if (_this.itemsPage >= _this.pageStartLimit && isMoved === false) { // Example: 4 >= 3 = true | 3 >= true   -> Result: element.style.left = moveVal + 'px';
                    _this.itemsPage -= _this.curWidStat;
                    isMoved = true;
                    _this.pdcSldmoveVal += ((Number(_this.curPdcSldMovVal) + _this.pdcSldItBd_MgnLft) * 1); // MEGA WAŻNE!
                    // Trzeba dodać 1x margin-left, gdyż pole widoczności zawiera elemnety łącznie z marginami! 
                    // Inaczej hanger ruszy się na niewystarczającą odległość
                    itemsHanger.style.left = _this.pdcSldmoveVal + 'px';
                    itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                    console.log("LEFT: ".concat(_this.pdcSldmoveVal));
                    setTimeout(function () {
                        isMoved = false;
                    }, tnsDur_Timeout);
                }
                else if ((_this.itemsPage < _this.pageStartLimit && (_this.itemsPage % _this.pageStartLimit) > 0) === true && (isMoved === false)) { // Example: 3 < 2 = true   [&]   (3 / 2) > 0 = true
                    _this.itemsPage = 0;
                    isMoved = true;
                    _this.pdcSldmoveVal = 0;
                    itemsHanger.style.left = _this.pdcSldmoveVal + 'px';
                    itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                    console.log("LEFT: ".concat(_this.pdcSldmoveVal));
                    setTimeout(function () {
                        isMoved = false;
                    }, tnsDur_Timeout);
                }
                var stsBallAR = [];
                _this.currentPage = _this.itemsPage / _this.curWidStat; // [current-item-page-value] / [current-wide-status (slider-hanger-position-in-click-steps)] = [current-page-number] !!! with decimal
                _this.currentPage = Math.ceil(_this.currentPage);
                console.log("CURRENT PAGE: ".concat(_this.currentPage)); /*IMPORTANT SHORTTIME INFO*/
                console.log("ITEMS PAGE: ".concat(_this.itemsPage)); /*IMPORTANT SHORTTIME INFO*/
                //if (this.currentPage % 2 > 0) {   // Clean decimal by round up this value
                /*if (this.lastArrowStatus === 'LEFT') {
                    this.currentPage = Math.ceil(this.currentPage);
                } else if (this.lastArrowStatus === 'RIGHT') {
                    this.currentPage = Math.floor(this.currentPage);
                }*/
                //} else {}
                if (_this.curWidStat > 1) {
                    var statusBox = document.querySelectorAll('div.product-slider-status-box')[_this.sldStlIdxNumToWdt];
                    var stBxChildren = statusBox.children;
                    if (statusBox.childElementCount > 0) {
                        for (var i = stBxChildren.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren[i];
                        }
                        ;
                    }
                    else { }
                    for (var i = 0; i < _this.statBallsAmount; i++) {
                        if (i === _this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                        else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    }
                    ;
                }
                else { }
            }, false);
        });
        this.evElClick.forEach(function (ev) {
            _this.pageStartLimit = _this.curWidStat;
            pdcSldButRgt.addEventListener(ev, function () {
                // Limit of second statement operand are moving according to "this.curWidStat"
                if (_this.itemsPage < (pageEndLimit - _this.curWidStat) && isMoved === false) {
                    _this.itemsPage += _this.curWidStat;
                    isMoved = true;
                    _this.pdcSldmoveVal += ((Number(_this.curPdcSldMovVal) + _this.pdcSldItBd_MgnLft) * -1);
                    itemsHanger.style.left = _this.pdcSldmoveVal + 'px';
                    itemsHanger.style.transitionDuration = tnsDur_Style + 's';
                    console.log("RIGHT: ".concat(_this.pdcSldmoveVal));
                    setTimeout(function () {
                        isMoved = false;
                    }, tnsDur_Timeout);
                }
                else { }
                var stsBallAR = [];
                _this.currentPage = _this.itemsPage / _this.curWidStat;
                _this.currentPage = Math.ceil(_this.currentPage);
                console.log("ITEMS PAGE: ".concat(_this.itemsPage)); /*IMPORTANT SHORTTIME INFO*/
                console.log("CURRENT PAGE: ".concat(_this.currentPage)); /*IMPORTANT SHORTTIME INFO*/
                //if (this.currentPage % 2 > 0) {
                /*if (this.lastArrowStatus === 'LEFT') {
                    this.currentPage = Math.ceil(this.currentPage);
                } else if (this.lastArrowStatus === 'RIGHT') {
                    this.currentPage = Math.floor(this.currentPage);
                }*/
                //} else {}
                if (_this.curWidStat > 1) {
                    var statusBox = document.querySelectorAll('div.product-slider-status-box')[_this.sldStlIdxNumToWdt];
                    var stBxChildren = statusBox.children;
                    if (statusBox.childElementCount > 0) {
                        for (var i = stBxChildren.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren[i];
                        }
                        ;
                    }
                    else { }
                    for (var i = 0; i < _this.statBallsAmount; i++) {
                        if (i === _this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                        else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    }
                    ;
                }
                else { }
            }, false);
        });
        this.createPdcSldPageStatus();
    };
    ;
    ProductSlider.prototype.createPdcSldPageStatus = function () {
        var _this = this;
        this.evWinLoadRes.forEach(function (ev) {
            window.addEventListener(ev, function () {
                var statusBox = document.querySelectorAll('div.product-slider-status-box')[_this.sldStlIdxNumToWdt];
                var stBxChildren = statusBox.children;
                if (statusBox.childElementCount > 0) {
                    for (var i = stBxChildren.length - 1; i >= 0; i--) {
                        statusBox.removeChild(stBxChildren[i]);
                    }
                    ;
                }
                else { }
                // To slider status not finished experiment
                //let statusInfoAR: number[][][] = this.createStatusLimitAR();
                //console.log(statusInfoAR);
                _this.statBallsAmount = _this.productsAmount / _this.curWidStat;
                _this.currentPage = _this.itemsPage / _this.curWidStat;
                _this.currentPage = Math.ceil(_this.currentPage);
                console.log('STATUS BALL AMOUNT: ' + _this.statBallsAmount);
                if (_this.curWidStat > 1) {
                    for (var i = 0; i < _this.statBallsAmount; i++) {
                        var statusBall = document.createElement('div');
                        statusBall.setAttribute('class', 'ps-status-ball');
                        statusBox.appendChild(statusBall);
                    }
                    ;
                }
                else if (_this.curWidStat === 1) { }
                _this.currentPage = _this.itemsPage / _this.curWidStat;
                _this.currentPage = Math.ceil(_this.currentPage);
                console.log("CURRENT PAGE: ".concat(_this.currentPage));
                console.log("ITEMS PAGE: ".concat(_this.itemsPage));
                var stsBallAR = [];
                if (_this.curWidStat > 1) {
                    var statusBox_1 = document.querySelectorAll('div.product-slider-status-box')[_this.sldStlIdxNumToWdt];
                    var stBxChildren_1 = statusBox_1.children;
                    if (statusBox_1.childElementCount > 0) {
                        for (var i = stBxChildren_1.length - 1; i >= 0; i--) {
                            stsBallAR[i] = stBxChildren_1[i];
                        }
                        ;
                    }
                    else { }
                    for (var i = 0; i < _this.statBallsAmount; i++) {
                        if (i === _this.currentPage) {
                            stsBallAR[i].style.border = '2px solid #333';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                        else {
                            stsBallAR[i].style.border = '2px solid #CCC';
                            stsBallAR[i].style.transitionDuration = '0.1s';
                        }
                    }
                    ;
                }
                else { }
            }, false);
        });
    };
    ;
    return ProductSlider;
}());
var begeinInfoImg_Obj = {
    imgBox: document.querySelector('img.bi-img-prp'),
    setAttr: function () {
        this.imgBox.setAttribute('src', 'bg-images-begin-info/residential-property-2858226_640.jpg');
        this.imgBox.setAttribute('alt', 'company-build');
    }
};
begeinInfoImg_Obj.setAttr();
var productSlider_Sources_Obj = {
    pdcSldSrc_Prc: [
        [
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
        [
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
        [
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
        [
            'Dom na sprzedaż: Łódź, Wapienna 4',
            'Dom na sprzedaż: Toruń, Drzymały 23',
            'Dom na sprzedaż: Łódź, Rukocka 11',
            'Dom na sprzedaż: Piaseczno, Mała 3',
            'Dom na sprzedaż: Poznań, Perłowa 93',
            'Dom na sprzedaż: Puck, Długa 10',
            'Dom na sprzedaż: Kraków, Zamkowa 2',
            'Dom na sprzedaż: Kraków, Podła 55',
            'Dom na sprzedaż: Łódź, Drewnowska 9',
            'Dom na sprzedaż: Zwoleń, Alejkowa 7',
            'Dom na sprzedaż: Kozienice, Gruba 77',
            'Dom na sprzedaż: Pionki, Piękna 42',
            'Dom na sprzedaż: Warszawa, Zielona 4',
            'Dom na sprzedaż: Warszawa, Maja 93',
            'Dom na sprzedaż: Radom, Stara 237'
        ],
        [
            'Dom na sprzedarz: Warszawa, Mokotów',
            'Dom na sprzedarz: Warszawa, Młynów',
            'Dom na sprzedarz: Warszawa, Filtry',
            'Dom na sprzedarz: Warszawa, Radość',
            'Dom na sprzedarz: Katowice, Bogucice',
            'Dom na sprzedarz: Poznań, Wilda',
            'Dom na sprzedarz: Kraków, Dąbie',
            'Dom na sprzedarz: Nowy Sącz Wólki',
            'Dom na sprzedarz: Radom Glinice'
        ],
        [
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Kraków',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Poznań',
            'Mieszkanie na sprzedaż: Kraków',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Radom',
            'Mieszkanie na sprzedaż: Łódź',
            'Mieszkanie na sprzedaż: Poznań',
            'Mieszkanie na sprzedaż: Lublin',
            'Mieszkanie na sprzedaż: Wrocław',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Warszawa',
            'Mieszkanie na sprzedaż: Solina'
        ]
    ],
    pdcSldSrc_Area: [
        [
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
        [
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
        [
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
var sliderFactory_Obj = {
    sliderAmount: document.querySelectorAll('div.product-slider-area').length,
    sliderAR: [],
    createSliders: function () {
        // SERIES PRODUCTION: ARGUMENTS
        for (var i = 0; i < this.sliderAmount; i++) {
            var arg_1 = productSlider_Sources_Obj.pdcSldSrc_Prc[i].length; // Amount of products in product, which has been in choosed slider
            var arg_2 = i; // [product-slider-box] & [product-slider-hanger] elmenet number from choosed slider. If you wand siliar sliders width, you give the same value in each create slider object
            var arg_3 = i; // Informations from slider info object. WARNING: Begin is from 0!
            var arg_4 = i; // - slider item width | (0 - this value is setting in "setVisibleAreaWidth" function, where "width" is depend of navbar proper pseudo-width [graphics width without margin/padding{34px*2}])
            var arg_5 = 15; //  - space betwen items
            var arg_6 = 350; // - (dividing from 2 for two slider product box sides) extra area, which is addition to slider product box width to calculate transform area borders
            var arg_7 = i; // - number of slider images file
            var productSlider = new ProductSlider(arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7);
            productSlider.setVisibleAreaWidth();
            /*productSlider.createItems_fixedAmount();
            productSlider.createStatusLimitAR();
            productSlider.reverseResLimVals_Func();
            productSlider.setAEL_PdcSldMoving();
            productSlider.createPdcSldPageStatus();*/
            this.sliderAR.push(productSlider);
        }
        ;
        console.log(sliderFactory_Obj.sliderAR);
    }
};
sliderFactory_Obj.createSliders();
var CategoriesGrid = /** @class */ (function () {
    function CategoriesGrid(arg_1, arg_2, arg_3) {
        this.dataTit = arg_1;
        this.itemAmount = arg_2;
        this.currentGnBox = arg_3;
    }
    ;
    CategoriesGrid.prototype.createEL = function () {
        var genInfoBoxEL = document.querySelectorAll('div.general-news-box')[this.currentGnBox];
        var newsELS = [];
        var imgELS = [];
        var titELS = [];
        var txtELS = [];
        for (var i = 0; i < this.itemAmount; i++) {
            var newsEL = document.createElement('div');
            newsELS.push(newsEL);
            var imgEL = document.createElement('img');
            imgELS.push(imgEL);
            var titEL = document.createElement('div');
            titELS.push(titEL);
            var txtEL = document.createElement('div');
            txtELS.push(txtEL);
            var txtTN = document.createTextNode(this.dataTit[i]);
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
        }
        ;
        this.hoverAEL_DESKTOP(newsELS, imgELS, titELS, txtELS, this.itemAmount);
        this.checkGIBlockPosAEL_MOBILE(newsELS, this.itemAmount, this.currentGnBox);
        this.scrollAEL_MOBILE(titELS, txtELS, this.itemAmount);
    };
    ;
    CategoriesGrid.prototype.hoverAEL_DESKTOP = function (newsELS, imgELS, titELS, txtELS, itmAm) {
        var _loop_2 = function (i) {
            ['mouseover'].forEach(function (ev) {
                newsELS[i].addEventListener(ev, function (e) {
                    if (window.innerWidth >= RWD_info_Obj.desktop) {
                        var el = e.currentTarget;
                        var id = el.id;
                        var prpEditEl = imgELS[id];
                        //console.log(prpEditEl);
                        prpEditEl.style.filter = 'brightness(80%)';
                        prpEditEl.style.transitionDuration = '0.4s';
                        titELS[id].style.height = 70 + 'px';
                        txtELS[id].style.bottom = 0 + 'px';
                        txtELS[id].style.opacity = 1.0;
                        titELS[id].transitionDuration = 0.4 + 's';
                        txtELS[id].transitionDuration = 0.4 + 's';
                    }
                    else { }
                }, false);
            });
        };
        // pierdzielenia się z pętlami, id i dodawaniem atrybutu id z wartością w tworzeniu 
        // eleemntów, ale zrobiłem tak, dla treningu kombinowania
        for (var i = 0; i < itmAm; i++) {
            _loop_2(i);
        }
        ;
        var _loop_3 = function (i) {
            ['mouseout'].forEach(function (ev) {
                newsELS[i].addEventListener(ev, function (e) {
                    if (window.innerWidth >= RWD_info_Obj.desktop) {
                        var el = e.currentTarget;
                        var id = el.id;
                        var prpEditEl = imgELS[id];
                        //console.log(prpEditEl);
                        prpEditEl.style.filter = 'brightness(100%)';
                        prpEditEl.style.transitionDuration = '0.4s';
                        titELS[id].style.height = 0 + 'px';
                        txtELS[id].style.bottom = -10 + 'px';
                        txtELS[id].style.opacity = 0.0;
                        titELS[id].transitionDuration = 0.4 + 's';
                        txtELS[id].transitionDuration = 0.4 + 's';
                    }
                    else { }
                }, false);
            });
        };
        for (var i = 0; i < itmAm; i++) {
            _loop_3(i);
        }
        ;
    };
    ;
    CategoriesGrid.prototype.scrollAEL_MOBILE = function (titELS, txtELS, itmAm) {
        var _this = this;
        ['load', 'resize', 'scroll'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                if (window.innerWidth < RWD_info_Obj.desktop) {
                    for (var i = 0; i < itmAm; i++) {
                        var catBorder = (window.innerHeight / 1.65);
                        //console.log('CURR' + this.newsELPosAR[i]);
                        if (_this.newsELPosAR[i] <= catBorder) {
                            titELS[i].style.height = 70 + 'px';
                            txtELS[i].style.bottom = 0 + 'px';
                            txtELS[i].style.opacity = 1.0;
                            titELS[i].transitionDuration = 0.4 + 's';
                            txtELS[i].transitionDuration = 0.4 + 's';
                        }
                        else if (_this.newsELPosAR[i] > catBorder) {
                            titELS[i].style.height = 0 + 'px';
                            txtELS[i].style.bottom = -10 + 'px';
                            txtELS[i].style.opacity = 0.0;
                            titELS[i].transitionDuration = 0.4 + 's';
                            txtELS[i].transitionDuration = 0.4 + 's';
                        }
                    }
                }
                else {
                    for (var i = 0; i < itmAm; i++) {
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
    ;
    CategoriesGrid.prototype.checkGIBlockPosAEL_MOBILE = function (newsELS, itmAm, currentGnBox) {
        console.log(currentGnBox);
        var arr = [];
        ['load', 'resize', 'scroll'].forEach(function (ev) {
            window.addEventListener(ev, function () {
                for (var i = 0; i < itmAm; i++) {
                    var el = newsELS[i].getBoundingClientRect();
                    var pos = Math.round(el.top);
                    arr[i] = pos;
                    //console.log(arr[i]);
                }
            }, false);
        });
        this.newsELPosAR = arr;
    };
    return CategoriesGrid;
}());
var generalInfoSources_Obj = {
    gnTit: [
        [
            'Detached house',
            'Twin house',
            'Terraced development',
            'Block of flat',
            'Skyscrapper',
            'Tenement'
        ],
        [
            'Modern',
            'Minimalist',
            'Country',
            'Classic',
            'Mediterranean',
            'Eclectic'
        ]
    ]
};
var generalInfoFactory_Obj = {
    createGnInfoEL: function () {
        var gnBoxEL = document.querySelectorAll('div.general-news-box');
        for (var i = 0; i < gnBoxEL.length; i++) {
            var arg_1 = generalInfoSources_Obj.gnTit[i];
            var arg_2 = generalInfoSources_Obj.gnTit[i].length;
            var arg_3 = i;
            var generalInfoObj = new CategoriesGrid(arg_1, arg_2, arg_3);
            generalInfoObj.createEL();
        }
        ;
    }
};
generalInfoFactory_Obj.createGnInfoEL();
var ourTeam_Obj = {
    itemAmount: 4,
    createItems: function () {
        for (var i = 0; i < this.itemAmount; i++) {
            var otBox_EL = document.querySelector('div.our-team-box');
            var otItem_EL = document.createElement('div');
            otItem_EL.setAttribute('class', 'ot-item');
            var otImgBox_EL = document.createElement('div');
            otImgBox_EL.setAttribute('class', 'ot-img-box');
            var otCrcImgDim_EL = document.createElement('div');
            otCrcImgDim_EL.setAttribute('class', 'ot-circle-img-dim');
            var otCrcImgPrp_EL = document.createElement('img');
            otCrcImgPrp_EL.setAttribute('class', 'ot-circle-img-prp');
            otCrcImgPrp_EL.setAttribute('src', 'hb-images-worker/img_' + (i + 1) + '.jpg');
            otCrcImgPrp_EL.setAttribute('alt', ourTeam_Sources_Obj.name[i]);
            var otTitBox_EL = document.createElement('div');
            otTitBox_EL.setAttribute('class', 'ot-tit-box');
            var otTitPrp_EL = document.createElement('div');
            var otTitPrp_TN = document.createTextNode(ourTeam_Sources_Obj.name[i]);
            otTitPrp_EL.setAttribute('class', 'ot-tit-prp');
            var otDesBox_EL = document.createElement('div');
            otDesBox_EL.setAttribute('class', 'ot-des-box');
            var otDesPrp_EL = document.createElement('div');
            var otDesPrp_TN = document.createTextNode(ourTeam_Sources_Obj.desc[i]);
            otDesPrp_EL.setAttribute('class', 'ot-des-prp');
            var otIcnBox_EL = document.createElement('div');
            otIcnBox_EL.setAttribute('class', 'ot-icon-box');
            var otIcnPrp_EL = document.createElement('img');
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
        }
        ;
    }
};
var ourTeam_Sources_Obj = {
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
