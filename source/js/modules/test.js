const _ = require('lodash');
let width;
let height;
let counter = 0;
let prepair;

let detectWrap = function(className) {
    let wrappedItems = [];
    let prevItem = [];
    let currItem = {};
    let items = document.querySelectorAll(className)
    let prevRatio = [];

    return () => {
        if(wrappedItems.length !== 0) counter = 0;
        let ratio;
        
        for (var i = 0; i < items.length; i++) {
            ratio = items[i].getBoundingClientRect().top - items[i].parentElement.getBoundingClientRect().top;
            currItem = items[i].getBoundingClientRect();

            if(prevItem[i]) {
                if (Math.abs(prevItem[i].top - currItem.top) > 1 && Math.abs(ratio - prevRatio[i]) > 1) {
                    if(items[i].getBoundingClientRect().left === items[i].parentElement.getBoundingClientRect().left) {
                        items[i].classList.add("wrapped")
                        
                    } else {
                        items[i].classList.remove("wrapped")
                        
                    }
                } 
            }

            prevRatio.push(ratio);
            prevItem.push(currItem);
        };

        if(prevRatio.length + prevItem.length > 4) { 
            prevRatio = prevRatio.slice(2);
            prevItem = prevItem.slice(2);
        }

        return wrappedItems;
    }
}

function svgViewBox() {
    if(window.innerWidth < 992) {
        const mySVG = document.querySelector('.svgView');
        // 900w 600VB // 800w 680 // 700w 700VB // 600w 780VB
        mySVG.setAttribute("viewBox", `10 510 380 380`);
    }
}

function regression(x) {
    return  - 0.51 * x + 1110
}

const root = document.querySelector(":root");
function observer() {
    let flag;
    let observable = [document.querySelector('.block5-grid-2'), document.querySelector('.block8-right')];
    let observer = new MutationObserver((mutationRecords) => 
    {
        flag = mutationRecords[0].target.className.includes('wrapped')
        switch (mutationRecords[0].target) {
            case observable[0]:
                let image = observable[0].parentElement.querySelector('.block5-grid-slider')?.style;
                if(flag) {
                    root.style.setProperty("--grid-auto-row", 'auto');
                    image.setProperty("max-width", 'initial');
                }  else {
                    root.style.setProperty("--grid-auto-row", '346px');
                    image.setProperty("max-width", '500px');
                }
                
                break;
            case observable[1]:
                flag ? root.style.setProperty("--grid-auto-row", 'auto') : root.style.setProperty("--grid-auto-row", '346px');
                break;
        }
    })
    
    observable.forEach(el => {
        observer.observe(el, {
            attributes: true,
            attributeFilter: ['class']
        });
    })
}

observer()
let img = new Image()
let elements = document.querySelectorAll('.block5-preview')
let src = elements[0].children[0].href.baseVal;

function handler(event) {
    svgViewBox();
    if(!counter) {
        prepair = detectWrap('.block5-grid-2, .block8-right');
        counter++;
    }
    prepair()
    elements.forEach((el, index) => {
        let parentWidth = window.getComputedStyle(el.parentElement).width;
        let parentWValue = parentWidth.match(/\d+/g)[0];
        // для svg block5-preview
        el.style.width = parentWidth;
        el.style.height = parentWValue / 1.552;
        // для image
        el.children[0].style.width = parentWidth;
        el.children[0].style.height = parentWValue / 1.552;
        root.style.setProperty(`--padding${index}`, `${parentWValue / 1.552 + 'px'}`);
    })
    //  = window.getComputedStyle(element.parentElement).width;
    // let ratioW;
    // let ratioH;
    // if(width > parentWidth.match(/\d+/g)[0]) {
    //     ratioW = parentWidth.match(/\d+/g)[0] / width;
    //     ratioH = parentHeight.match(/\d+/g)[0] / height;
    // } else {
    //     ratioW = width / parentWidth.match(/\d+/g)[0]
    //     ratioH = height / parentHeight.match(/\d+/g)[0]
    // } 
    // console.log(parentWidth.match(/\d+/g)[0] / 1.552 );
    // element.parentElement.style.paddingTop =    parentWidth.match(/\d+/g)[0] / 1.552+'px';
    
    
    // 1,552 соотношение для предпросмотра
}
window.addEventListener('resize', handler);


img.src = src;
img.onload = function() {
    // element.style.width = this.width;
    // element.style.height = this.height;
    width = this.width;
    height = this.height;
}

