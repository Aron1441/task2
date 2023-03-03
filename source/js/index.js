import './index.scss'
import './modules/test'
import '../assets/images/section1/kamin.png'
import '../assets/icons/section1/blur1.svg'
import '../assets/icons/section2/kamin.svg'
import '../assets/icons/section2/fire.svg'
import '../assets/icons/section2/oil.svg'
import '../assets/icons/section2/krest.svg'
import '../assets/icons/section3/image.svg'
import '../assets/icons/section3/horseshoe.svg'
import '../assets/icons/section3/switch.svg'
import '../assets/icons/section4/kamin.svg'
import '../assets/icons/section5/kamin.svg'
import '../assets/icons/section5/leftarrow.svg'
import '../assets/icons/section5/rightarrow.svg'
import '../assets/icons/section6/btn.svg'
import '../assets/icons/section8/kamin.svg'
import '../assets/icons/gradient.svg'
import '../assets/icons/header/phone.svg'
import '../assets/icons/section2/blur.svg'
import '../assets/icons/section3/blur.svg'
import '../assets/icons/section3/background-blur.svg'
import '../assets/icons/section5/blur.svg'
import '../assets/icons/section8/kamin.svg'
import '../assets/icons/section8/rend.svg'
import '../assets/icons/section8/plusSign.svg'
import '../assets/icons/section3/svg.svg'
import '../assets/icons/section3/clear.svg'


const svg = `<svg class="svgView" viewBox="10 410 380 380" xmlns="http://www.w3.org/2000/svg">
<defs>
    <filter id="f3" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
     <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="specOut"/>
   </filter>
</defs>



<image class="svg2-image" preserveAspectRatio="xMinYMid meet" href="http://localhost:4200/assets/icons/section3/svg.svg" x="0" y="0" width="486px" height="486px" />


<svg viewBox="0 0 780 780" x="-11" y="262" width="500px" height="500px">

<symbol id="msk4">
    <ellipse class="svg-cirlcle-mask2 svg-cirlcle-mask-opacity" rx="47px" ry="47px" fill="white" opacity=".7"/>
    <ellipse class="svg-cirlcle-mask1 svg-cirlcle-mask-opacity" rx="24px" ry="24px" fill="white" opacity=".7"/>
</symbol>

<mask id="mask-circles4" maskUnits="userSpaceOnUse">
    <use href="#msk4" />
</mask>
<image mask="url(#mask-circles4)" class="svg2-image" preserveAspectRatio="xMinYMid meet" href="http://localhost:4200/assets/icons/section3/clear.svg" x="0" y="0" width="486px" height="486px" />
</svg>

<ellipse class="svg-cirlcle-mask2-border" rx="38px" ry="38px" fill="none" stroke="#FFCF7A" stroke-width="2px"/>
<ellipse class="svg-cirlcle-mask1-border" rx="15px" ry="15px" fill="none" stroke="#FFCF7A" stroke-width="2px"/>
</svg>`;

function append() {
    const newDiv = document.createElement("div");
    newDiv.append();
    document.querySelector('.block3-right').innerHTML = `<div class="svg">${svg}</div>`;
}
append()

class Slider {
    left;
    right;
    current = 1;
    constructor() {
        this.left = document.querySelector('.block8-ss-content .left-arrow');
        this.right = document.querySelector('.block8-ss-content .left-arrow--to-right');
        
        [this.left, this.right].forEach(el => el.addEventListener('click', (ev) => {
            let slides = this.getSlides()
            if(ev.target.matches('.left-arrow')) {
                if(this.current - 1 === 0) {
                    this.current = slides.length;
                } else {
                    this.current-=1;
                }
            }

            if(this.current + 1 > slides.length) {
                this.current = 1;
            }

            this.current+=1;
            console.log(this.current);
        }))
      
    }


    getSlides() {
        console.log(document.querySelectorAll('.block8-ss-content img'));
        return document.querySelectorAll('.block8-ss-content img');
    }
}

new Slider();

