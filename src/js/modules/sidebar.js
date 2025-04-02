const sidebar = function (){
    const btn = document.querySelector(`.header--menu`),
        sidebar = document.querySelector(`.sidebar`),
        closeHeader = document.querySelector(`.header--menu`),
        body = document.querySelector(`body`),
        lg = document.querySelector(`.sidebar--lg`),
        lgChoise = document.querySelector(`.sidebar--lg-choice`),
        theme = document.querySelector(`.sidebar--theme`),
        themeChoise = document.querySelector(`.sidebar--theme-choice`);



    btn.addEventListener(`click`, (e) =>{
        sidebar.classList.toggle(`sidebar-active`);
        closeHeader.classList.toggle(`header--menu-active`);
    });
    
    lg.addEventListener(`click`, (e) =>{
        lgChoise.classList.toggle(`sidebar--lg-choice-active`);
    })

    theme.addEventListener(`click`, (e) =>{
        e.preventDefault();
        themeChoise.classList.toggle(`sidebar--theme-choice-active`);
    })

    window.history.replaceState({}, document.title, '/');
}

export default sidebar;