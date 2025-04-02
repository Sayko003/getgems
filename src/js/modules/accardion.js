import sliders from "./sliders";

const aboutAccardion = function(){
    const btns = document.querySelectorAll(`.about--btn`),
        blocks = document.querySelectorAll(`.about--block`);

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener(`click`, (e) =>{
            e.preventDefault();
            blocks[i].classList.add(`about--block-active`);
            sliders();
        });
    }
}

export default aboutAccardion;