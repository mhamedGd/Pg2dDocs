function CreateNavBar(){
    /*
    <nav class="navbar-container">
        <div class="navbar-item">
            <a class="navbar-link" href="">
                <b>Playground2D</b>
            </a>
        </div>
        <button class="navbar-item navbar-button">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </button>
    </nav>
    */
    const NAV = document.createElement('nav');
    NAV.classList.add('navbar-container');
    document.querySelector('body').appendChild(NAV);

    const NAV_LABEL = document.createElement('div');
    NAV_LABEL.classList.add('navbar-item');
    NAV.appendChild(NAV_LABEL);

    const NAV_LABEL_LINK = document.createElement('a');
    NAV_LABEL_LINK.innerHTML = '<b>Playground2D</b>';
    NAV_LABEL_LINK.setAttribute('href', './index.html');
    NAV_LABEL_LINK.classList.add('navbar-link');
    NAV_LABEL.appendChild(NAV_LABEL_LINK);

    const BURGER_BUTTON = document.createElement('button');
    BURGER_BUTTON.classList.add('navbar-item', 'navbar-button');
    NAV.appendChild(BURGER_BUTTON);


    const BURGER_LINE1 = document.createElement('span');
    BURGER_LINE1.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE1);

    const BURGER_LINE2 = document.createElement('span');
    BURGER_LINE2.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE2);

    const BURGER_LINE3 = document.createElement('span');
    BURGER_LINE3.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE3);
}

CreateNavBar();