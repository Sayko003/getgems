const theme = function() {
    const btnDark = document.querySelector(`.sidebar--theme-dark`),
        btnLight = document.querySelector(`.sidebar--theme-light`),
        btnAuto = document.querySelector(`.sidebar--theme-auto`),
        textColor = document.querySelector(`.text-visible`),
        body = document.querySelector(`body`),
        textColorClass = document.querySelectorAll(`.sidebar--theme-text`),
        textColorEn = document.querySelector(`.text-visible-en`);



        function themeClick(item){
            item.addEventListener(`click`, (e) =>{
                e.preventDefault();
                if(textColor){
                    if(item.classList.contains(`sidebar--theme-auto`)){
                        body.classList.remove(`light`);
                        body.classList.add(`dark`);
                        textColorClass[1].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[2].classList.remove(`sidebar--theme-dark-active`);
                        textColor.textContent = `Авто`;
                        textColorClass[0].classList.toggle(`sidebar--theme-dark-active`);
                    }
                    if(item.classList.contains(`sidebar--theme-dark`)){
                        body.classList.remove(`light`);
                        body.classList.add(`dark`);
                        textColorClass[0].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[2].classList.remove(`sidebar--theme-dark-active`);
                        textColor.textContent = `Тёмная`;
                        textColorClass[1].classList.toggle(`sidebar--theme-dark-active`);
                    }
                    if(item.classList.contains(`sidebar--theme-light`)){
                        body.classList.remove(`dark`);
                        body.classList.add(`light`);
                        textColorClass[0].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[1].classList.remove(`sidebar--theme-dark-active`);
                        textColor.textContent = `Светлая`;
                        textColorClass[2].classList.toggle(`sidebar--theme-dark-active`);
                    }
                }
                if(textColorEn){
                    if(item.classList.contains(`sidebar--theme-auto`)){
                        body.classList.remove(`light`);
                        body.classList.add(`dark`);
                        textColorClass[1].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[2].classList.remove(`sidebar--theme-dark-active`);
                        textColorEn.textContent = `Auto`;
                        textColorClass[0].classList.toggle(`sidebar--theme-dark-active`);
                    }
                    if(item.classList.contains(`sidebar--theme-dark`)){
                        body.classList.remove(`light`);
                        body.classList.add(`dark`);
                        textColorClass[0].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[2].classList.remove(`sidebar--theme-dark-active`);
                        textColorEn.textContent = `Dark`;
                        textColorClass[1].classList.toggle(`sidebar--theme-dark-active`);
                    }
                    if(item.classList.contains(`sidebar--theme-light`)){
                        body.classList.remove(`dark`);
                        body.classList.add(`light`);
                        textColorClass[0].classList.remove(`sidebar--theme-dark-active`);
                        textColorClass[1].classList.remove(`sidebar--theme-dark-active`);
                        textColorEn.textContent = `Light`;
                        textColorClass[2].classList.toggle(`sidebar--theme-dark-active`);
                    }
                }
            })
        }
        themeClick(btnDark);
        themeClick(btnLight);
        themeClick(btnAuto);
        btnAuto.click();
}

export default theme();