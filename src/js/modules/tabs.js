const tabs = function(){
    const btnModal = document.querySelector(`.header--modal`),
        closeModal = document.querySelector(`.modal--close`),
        modal = document.querySelector(`.modal`),
        tabsContent = document.querySelectorAll(`.modal--block`),
        tabsBtns = document.querySelectorAll(`.modal-script`),
        arrowsModal = document.querySelector(`.modal--arrow`),
        wrapperTabs = document.querySelector(`.modal--tabs`),
        overlay = document.querySelector(`.modal .overlay`);
        

    btnModal.addEventListener(`click`, (e) =>{
        e.preventDefault();
        modal.classList.toggle(`modal-active`);
    });

    function close(item){
        item.addEventListener(`click`, (e) =>{
            e.preventDefault();
            modal.classList.toggle(`modal-active`);
                setTimeout(function() {
                    hideTabContent();
                    showTabContent();
                }, 500)
            });
    }

    close(closeModal);

    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add(`d-none`);
            item.classList.remove(`modal--block-active`);
        });
    }
    function showTabContent(i = 0){
        tabsContent[i].classList.remove(`d-none`);
        tabsContent[i].classList.add(`modal--block-active`);
        arrowsModal.classList.remove(`modal--arrow-active`);
    }
    function backTab(){
        arrowsModal.addEventListener(`click`, () =>{
            hideTabContent();
            showTabContent();
        });
    }
    hideTabContent();
    showTabContent();


    tabsBtns.forEach(function(tab, i) {
        tab.addEventListener('click', function() {
            hideTabContent();
            if(i + 1 > 0){
                arrowsModal.classList.add(`modal--arrow-active`);
            }
            backTab();
            // this.classList.add('tab-header_show');
            tabsContent[i+1].classList.add('modal--block-active');
        });
    });
}

export default tabs;