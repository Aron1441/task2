const root = document.querySelector(":root");
let counter = 0;
let prepair;

observer()
window.addEventListener('resize', handler);
window.onload = () => {
    changeSvgBox('.block5-preview');
}

/* Определяет произошел ли flex-wrap на выбранном элементе */
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

/* Меняет ViewBox у svg */
function svgViewBox() {
    if(window.innerWidth < 992) {
        const mySVG = document.querySelector('.svgView');
        mySVG.setAttribute("viewBox", `10 510 380 380`);
    }
}

/* Следит за изменением wrap у грида и меняет стили */
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

function handler() {
    svgViewBox();
    changeSvgBox('.block5-preview');

    if(!counter) {
        prepair = detectWrap('.block5-grid-2, .block8-right');
        counter++;
    }

    prepair();
}

/* Изменяет размеры svg слайдера */
function changeSvgBox(svgName) {
    const elements = document.querySelectorAll(svgName)

    elements.forEach((el, index) => {
        let parentWidth = window.getComputedStyle(el.parentElement).width;
        let parentWValue = parentWidth.match(/\d+/g)[0];

        el.style.width = parentWidth;
        el.style.height = parentWValue / 1.552;
        
        el.children[0].style.width = parentWidth;
        el.children[0].style.height = parentWValue / 1.552;
        root.style.setProperty(`--padding${index}`, `${parentWValue / 1.552 + 'px'}`);
    })
}

