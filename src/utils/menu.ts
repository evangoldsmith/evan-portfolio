// Control hamburger nav menu
document.addEventListener('astro:page-load', () => {
    const hamburger_expand = document.querySelector('.hamburger_expand') as HTMLElement;
    const hamburger_close = document.querySelector('.hamburger_close') as HTMLElement;
    const sidebar = document.querySelector('.side-bar') as HTMLElement;


    hamburger_expand.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
    
    hamburger_close.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
});
