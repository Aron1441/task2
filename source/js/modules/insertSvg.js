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

append()

/* Вставка svg */
function append() {
    const newDiv = document.createElement("div");
    newDiv.append();
    document.querySelector('.block3-right').innerHTML = `<div class="svg">${svg}</div>`;
}