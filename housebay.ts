@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

* {
    box-sizing: border-box;
}

body {
    background-color: gray;
    margin: 0px;
    padding: 0px;
}

@media only screen and (min-width: 0px) {
    .window-block {
        width: 100%;
        /*height: TS;*/
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background-color: aliceblue;
        overflow: hidden;
    }
        .navbar-box {
            width: 100%;
            height: 60px;
            position: fixed;
            top: -60px;
            left: 0px;
            background-color: white;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            box-shadow: 0px 0px 0px 0px transparent;
            z-index: 2;
        }
            .navbar-desktop-content-hanger {
                display: none;
            }
            .navbar-mobile-content-box {
                width: 100%;
                height: 60px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                background-color: white;
                border: 0px solid green;
                box-shadow: 0px 0px 2px 0px #555;
                z-index: 2;
                transition-duration: 0.5s;
            }
                .navbar-mobile-content-box-childHanger {
                    width: 100%;
                    height: 60px;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                    background-color: inherit;
                    border: 0px solid orangered;
                    z-index: 10;
                }
                    .page-logo-box {
                        width: 68px;
                        height: 60px;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        align-items: center;
                        background-color: transparent;
                        border: 0px solid purple;
                    }
                        .page-logo-proper {
                            width: 34px;
                            height: 34px;
                            position: relative;
                            background-image: url(hb-images-favicon/building-148837_640.png);
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: center;
                        }
                        .page-logo-proper:hover {
                            cursor: pointer;
                        }
                    .page-title-box {
                        /*width: TS;*/
                        width: calc(100% - 68px - 68px);
                        height: 100%;
                        display: flex;
                        background-color: transparent;
                    }
                        .page-title-proper {
                            width: auto;
                            height: 100%;
                            margin-left: 8px;
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;
                            padding-left: 0px;
                            background-color: inherit;
                            align-items: center;
                            font-family: 'Rowdies', cursive;
                            font-size: 140%;
                            text-transform: capitalize;
                            text-shadow: 0px 0px 0px #AAA;
                        }
                            .pgTitPrp-color-word {
                                color: hsl(30, 100%, 50%);
                            }
                            .pgTitPrp-color-word:hover {
                                cursor: pointer;
                            }
                            .pgTitPrp-color-word::selection {
                                background-color: inherit;
                                color: hsl(30, 100%, 50%);
                            }
                            .pgTitPrp-normal-word {
                                color: #333;
                            }
                            .pgTitPrp-normal-word:hover {
                                cursor: pointer;
                            }
                            .pgTitPrp-normal-word::selection {
                                background-color: inherit;
                                color: #333;
                            }
                    .page-dropdown-button-box {
                        width: 68px;
                        height: 60px;
                        padding: 18px 32px 18px 0px;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 0px solid navy;
                    }
                        .page-dropdown-button-proper {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            border: 0px black dotted;
                        }
                        .page-dropdown-button-proper:hover {
                            cursor: pointer;
                        }
                            .but-strip {
                                width: 100%;
                                height: 4px;
                                position: absolute;
                                background-color: #aaa;
                                transform: rotate(0deg);
                            }
                            .bs-top {
                                position: absolute;
                                top: 0px;
                            }
                            .bs-center {
                                position: absolute;
                                top: calc((60px - 18px) / 2px);
                            }
                            .bs-bottom {
                                position: absolute;
                                bottom: 0px;
                            }
                    .navbar-mobile-content-proper {
                        width: 100%;
                        height: 300px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: rgb(255,255,255);   /*OLD: 230x3*/
                        border-top: 0px solid rgba(190,190,190,0.7);
                    }
                        .navbar-mobile-button-group {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: -253px;   /*-butGroup - border - bonus*/
                            z-index: 3;
                        }
                            .navbar-mobile-button-proper {
                                width: 100%;
                                height: 42px;
                                padding: 0px 34px;
                                position: relative;
                                display: flex;
                                flex-direction: row;
                                justify-content: flex-start;
                                align-items: center;
                                background-color: white;
                                color: #333;
                                font-family: 'Gabarito', cursive;
                                font-size: 115%;
                                text-transform: capitalize;
                                text-shadow: 0px 0px 0px #AAA;
                            }
                            .navbar-mobile-button-proper:hover {
                                cursor: pointer;
                                background-color: whitesmoke;
                            }
                            .navbar-mobile-button-proper::selection {
                                background-color: whitesmoke;
                                color: #333;
                            }

        .img-slider-body {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgba(255,30,30,0.0);
        }
            .img-slider-img-dim {
                width: 100%;   /*Brak połąćzenia z TS*/
                height: 100%;
                position: absolute;
                left: 0px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: rgba(30,255,30,0.3);
                border: 0px solid navy;
            }
                .img-slider-img-prp {
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: center;
                    filter: brightness(30%);
                }
                .img-slider-info-box {
                    width: auto;
                    height: calc(100% - 60px);
                    position: absolute;
                    bottom: 0px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    border: 0px solid white;
                }
                    .img-slider-info-box-hanger {
                        width: auto;
                        height: auto;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 0px solid red;
                    }
                        .img-slider-title {
                            width: auto;
                            height: auto;
                            padding: 0px 40px 14px;
                            position: relative;
                            top: -20px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            color: white;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 150%;
                            font-weight: 500;
                            text-align: center;
                            text-transform: uppercase;
                            border: 0px solid palevioletred;
                            opacity: 0;
                            transition-duration: 0.4s;
                        }
                        .img-slider-description {
                            width: auto;
                            height: 100%;
                            padding: 0px 40px 17px;
                            position: relative;
                            top: -20px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            color: white;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 100%;
                            font-weight: 400;
                            text-align: center;
                            line-height: 1.5em;
                            border: 0px solid cyan;
                            opacity: 0;
                            transition-duration: 0.4s;
                        }
                        .img-slider-button {
                            width: 130px;
                            height: 40px;
                            position: relative;
                            top: -20px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            /*background-color: hsl(30, 100%, 50%);*/
                            background-image: linear-gradient(135deg, hsl(30, 100%, 63%), hsl(30, 100%, 72%));
                            color: #333;
                            font-family: Arial;
                            font-size: 110%;
                            font-weight: 500;
                            border-radius: 5px;
                            opacity: 0;
                            transition-duration: 0.4s;
                        }
                        .img-slider-button::before {
                            content: 'Learn more';
                            width: inherit;
                            height: inherit;
                            position: absolute;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            background-image: inherit;
                            border-radius: inherit;
                            z-index: 1;
                        }
                        .img-slider-button:hover::before {
                           cursor: pointer;
                           background-image: linear-gradient(135deg, hsl(30, 100%, 68%), hsl(30, 100%, 77%));
                        }
                        .img-slider-button:active::before {
                           cursor: pointer;
                           background-image: linear-gradient(135deg, hsl(30, 100%, 73%), hsl(30, 100%, 82%));
                        }
        .img-slider-control-box {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: 0px dotted red;
        }
            .iscb-leftArrow-box, .iscb-rightArrow-box {
                width: 15%;
                height: 100%;
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-end;
                background-color: rgba(0,0,0,0.0);
                border: 0px dotted orange;
            }
                .iscb-leftArrow-cover, .iscb-rightArrow-cover {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .iscb-leftArrow-proper, .iscb-rightArrow-proper {
                    width: 100%;
                    height: calc(100% - 60px);   /*60px = navbar height*/
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    color: rgba(220,220,220,0.6);
                    font-family: Courier New, sans-serif;
                    font-size: 250%;
                    text-shadow: 0px 0px 3px #555;
                    border: 0px solid seagreen;
                    opacity: 0;
                }
                .iscb-leftArrow-proper {
                    left: 0px;
                }
                .iscb-rightArrow-proper {
                    right: 0px;
                }
                .iscb-rightArrow-box:hover .iscb-rightArrow-proper {
                    color: rgba(255,255,255,0.8);
                    transition-duration: 0.0s !important;
                }
                .iscb-leftArrow-box:hover .iscb-leftArrow-proper {
                    color: rgba(255,255,255,0.8);
                    transition-duration: 0.0s !important;
                }
                .iscb-rightArrow-box:hover, .iscb-leftArrow-box:hover {
                    cursor: pointer;
                }
            .iscb-info-box {
                width: 70%;
                height: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                background-color: transparent;
                border: 0px dotted orange;
            }
                .iscb-ib-text {
                    width: 100%;
                    height: calc(100% - 60px);
                    position: absolute;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    text-align: center;
                    border: 0px dotted fuchsia;
                }
                .iscb-ib-img-state {
                    width: 100%;
                    height: 60px;   /*Tyle ile będzie miał poziomy navbar!*/
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    border: 0px dotted fuchsia;
                }
                    .iscb-ib-is-group-box {
                        width: auto;
                        height: 100%;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        background-color: transparent;
                        border: 0px dotted cornflowerblue;
                    }
                        .iscb-ib-is-once-box {
                            width: 28px;
                            height: 3.35px;
                            position: relative;
                            top: 0px;
                            margin: 0px 3.5px;
                            background-color: rgba(220,220,220,0.6);
                            border: 0px dotted cornflowerblue;
                            box-shadow: 0px 0px 3px 0px #555;
                            opacity: 1;
                        }
    
    .content-block-space {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: whitesmoke;
        z-index: 0;
    }
        .product-slider-area {
            width: 100%;
            height: auto;
            margin: 20px 0px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 0px solid #333;
        }
            .product-slider-box {
                /*width: TS;*/   /*In depended of website window width - MOVING*/   /*To product slider arrows*/
                height: auto;
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                background-color: transparent;
                border: 0px solid #666;
            }
                .product-slider-arrowBox-left-box, .product-slider-arrowBox-right-box {
                    position: absolute;
                    width: 45px;
                    height: 45px;
                    padding: 0px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    color: hsl(30, 100%, 50%);
                    font-family: Courier New, sans-serif;
                    font-size: 140%;
                    font-weight: 600;
                    text-shadow: 0px 0px 5px 0px #333;
                    border-radius: 100px;
                    /*border: 2px solid rgba(51,51,51,0.3);*/
                    z-index: 1;
                }
                .product-slider-arrowBox-left-box {
                    left: -60px;
                }
                .product-slider-arrowBox-right-box {
                    right: -60px;
                }
                .product-slider-arrowBox-left-box:hover {
                    cursor: pointer;
                }
                .product-slider-arrowBox-right-box:hover {
                    cursor: pointer;
                }
                    .ps-arrowBox-bcg {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        display: inherit;
                        flex-direction: inherit;
                        justify-content: inherit;
                        align-items: inherit;
                        background-color: #CCC;
                        border-radius: inherit;
                        overflow: hidden;
                        transition-duration: 0.3s;
                    }
                        .ps-arrowBox-fillBox-left, .ps-arrowBox-fillBox-right {
                            width: 45px;
                            height: 45px;
                            position: absolute;
                            background-color: #333;
                            transition-duration: inherit;
                        }
                        .ps-arrowBox-fillBox-left {
                            right: -45px;
                        }
                        .ps-arrowBox-fillBox-right {
                            left: -45px;
                        }
                        .product-slider-arrowBox-left-box:hover .ps-arrowBox-fillBox-left {
                            right: 0px;
                            transition-duration: inherit;
                        }
                        .product-slider-arrowBox-right-box:hover .ps-arrowBox-fillBox-right {
                            left: 0px;
                            transition-duration: inherit;
                        }
                        .ps-arrowBox-content-left,  .ps-arrowBox-content-right{
                            width: calc(100% - 4px);
                            height: calc(100% - 4px);
                            position: absolute;
                            display: inherit;
                            flex-direction: inherit;
                            justify-content: inherit;
                            align-items: inherit;
                            background-color: whitesmoke;
                            border-radius: inherit;
                        }
                        .product-slider-arrowBox-left-box:active .ps-arrowBox-content-left {
                            background-color: rgb(235, 235, 235);
                        }
                        .product-slider-arrowBox-right-box:active .ps-arrowBox-content-right {
                            background-color: rgb(235, 235, 235);
                        }
                .product-slider-visibleArea {   /*To product slider items*/
                    width: 100%;
                    height: auto;
                    position: relative;
                    display: inherit;
                    flex-direction: inherit;
                    justify-content: inherit;
                    align-items: inherit;
                    background-color: transparent;
                    border: 0px solid #AAA;
                    overflow: hidden;
                }
                .product-slider-hanger {
                    width: auto;   /*In depended of all items width - FIXED*/
                    height: auto;
                    position: relative;
                    left: 0px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    border: 0px solid lime;
                    transition-duration: 0.5s;
                }
                    .pdc-sld-item-body {
                        /*width: TS;*/
                        height: auto;
                        padding: 4px 4px 8px;
                        position: relative;
                        background-color: transparent;
                        border: 0px solid red;
                    }
                        .pdc-sld-item-content {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            background-color: white;
                            border-radius: 0px;
                            border: 3px blueviolet;
                            box-shadow: 0px 3px 5px #AAA;
                        }
                            .pdc-sld-item-clickField {
                                width: 100%;
                                height: 100%;
                                position: relative;
                            }
                            .pdc-sld-item-clickField:hover {
                                cursor: pointer;
                            }
                                .pdc-sld-item-img-dim {
                                    width: 100%;
                                    /*height: ;*/   /*Depend of product slider item width*/
                                    position: relative;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    overflow: hidden;
                                }
                                    .pdc-sld-item-img-prp {
                                        width: 100%;
                                        height: 100%;
                                        position: relative;
                                        background-color: red;
                                        background-repeat: no-repeat;
                                        background-size: 100% 100%;
                                        background-position: center;
                                        filter: brightness(100%);
                                        transition-duration: 0.25s;
                                    }
                                    .pdc-sld-item-clickField:hover .pdc-sld-item-img-prp {
                                        width: 102%;
                                        height: 102%;
                                        filter: brightness(85%);
                                        transition-duration: 0.25s;
                                    }
                                .pdc-sld-item-price {
                                    width: 100%;
                                    height: auto;
                                    padding: 12px;
                                    position: relative;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: transparent;
                                    color: #333;
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: 125%;
                                    font-weight: 600;
                                    text-align: center;
                                    text-transform: capitalize;
                                    border-top: 2px solid transparent;
                                    border-bottom: 2px solid hsl(30, 100%, 50%);
                                    transition-duration: 0.15s;
                                }
                                .pdc-sld-item-price:hover {
                                    background-color: hsl(30, 100%, 50%);
                                    color: white;
                                    transition-duration: 0.15s;
                                }
                                .pdc-sld-item-des {
                                    width: 100%;
                                    height: 53px;
                                    padding: 0px 12px;
                                    position: relative;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: transparent;
                                    color: #333;
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: 110%;
                                    font-weight: 600;
                                    text-align: center;
                                    text-transform: capitalize;
                                    border: 0px solid lime;
                                }
                                .pdc-sld-item-area {
                                    width: 100%;
                                    height: auto;
                                    padding: 6px 12px 14px;
                                    position: relative;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: flex-start;
                                    background-color: transparent;
                                    color: #333;
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: 90%;
                                    font-weight: 500;
                                    text-align: center;
                                    text-transform: capitalize;
                                    border: 0px solid chocolate;
                                }
        .warning-info {
            width: 100%;
            height: 100%;
            padding: 80px 34px 0px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #333;
            font-family: 'Montserrat', sans-serif;
            font-size: 240%;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
        }
}

@media only screen and (min-width: 900px) {
    .navbar-box {
        box-shadow: 0px 0px 2px 0px #555;
    }
        .navbar-mobile-content-box {
            display: none;
        }
        .navbar-desktop-content-hanger {
            width: 1200px;
            min-width: 900px;
            height: 60px;
            display: flex;
            z-index: 2;
        }
        .navbar-desktop-content {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background-color: transparent;
            border: 0px solid brown;
        }
            .page-desktop-title-box {
                width: 100px;
                height: 100%;
                display: flex;
                background-color: transparent;
            }
            .page-desktop-button-group {
                width: auto;
                height: 100%;
                padding-right: 34px;
                position: absolute;
                right: 0px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                background-color: inherit;
                border: 0px solid indigo;
            }
                .page-desktop-button {
                    width: auto;
                    height: calc(100% - 30px);
                    padding: 0px 14px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: inherit;
                    border: 0px dotted cadetblue;
                    transition-duration: 0.4s;
                }
                .page-desktop-button:hover {
                    cursor: pointer;
                    color: white;
                    transition-duration: 0.4s;
                }
                .page-desktop-button::before, .page-desktop-button::after {
                    content: '';
                    width: 100%;
                    height: 4px;
                    display: flex;
                    position: absolute;
                    left: 0px;
                    background-color: #333;
                    opacity: 0;
                    z-index: -1;
                }
                .page-desktop-button::before {
                    top: -15px;
                    transition-duration: 0.4s;
                }
                .page-desktop-button::after {
                    bottom: -15px;
                    transition-duration: 0.4s;
                }
                .page-desktop-button:hover::before {
                    top: -8px;
                    opacity: 1;
                    transition-duration: 0.4s;
                }
                .page-desktop-button:hover::after {
                    bottom: -8px;
                    opacity: 1;
                    transition-duration: 0.4s;
                }
                    .pgDskBut-background {
                        width: 0%;
                        height: 0%;
                        position: absolute;
                        background-color: inherit;
                        transition-duration: 0.4s;
                    }
                    .page-desktop-button:hover .pgDskBut-background {
                        width: 100%;
                        height: 100%;
                        background-color: #333;
                        transition-duration: 0.4s;
                    }
                    .page-desktop-button:active .pgDskBut-background {
                        background-color: #666;
                        transition-duration: 0.0s;
                    }
                    .pgDskBut-text {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        background-color: inherit;
                        color: #333;
                        font-family: 'Gabarito', cursive;
                        font-size: 115%;
                        text-transform: capitalize;
                        transition-duration: 0.4s;
                    }
                    .page-desktop-button:hover .pgDskBut-text {
                        color: white;
                        transition-duration: 0.4s;
                    }
                    .pgDskBut-text::selection {
                        background-color: inherit;
                        color: #333;
                    }

        .iscb-leftArrow-proper, .iscb-rightArrow-proper {
            font-size: 400%;
        }
        .img-slider-title {
            font-size: 300%;
        }
        .img-slider-description {
            font-size: 150%;
        }
}
