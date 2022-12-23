import { DOCUMENTATION } from "./documentation_information.mjs";

function GetDocID(name) {
    for(let i = 0; i < DOCUMENTATION.length; i++){
        if(DOCUMENTATION[i].class == name){
            return i;
        }
    }
}


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
    //NAV_LABEL_LINK.innerHTML = '<b>Playground2D</b>';
    NAV_LABEL_LINK.innerHTML = '<b>Playground2D</b>';
    NAV_LABEL_LINK.setAttribute('href', './index.html');
    NAV_LABEL_LINK.classList.add('navbar-link');
    NAV_LABEL.appendChild(NAV_LABEL_LINK);

    const BURGER_BUTTON_CONTAINER = document.createElement('div');
    BURGER_BUTTON_CONTAINER.classList.add('center-content');
    NAV.appendChild(BURGER_BUTTON_CONTAINER);

    const BURGER_BUTTON = document.createElement('button');
    BURGER_BUTTON.classList.add('navbar-item', 'navbar-button');
    BURGER_BUTTON.addEventListener('click', ()=>{
        ActivateMenu();
    });
    BURGER_BUTTON_CONTAINER.appendChild(BURGER_BUTTON);


    const BURGER_LINE1 = document.createElement('span');
    BURGER_LINE1.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE1);

    const BURGER_LINE2 = document.createElement('span');
    BURGER_LINE2.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE2);

    const BURGER_LINE3 = document.createElement('span');
    BURGER_LINE3.classList.add('burger-line');
    BURGER_BUTTON.appendChild(BURGER_LINE3);


    // CREATING THE DOCS MENU
    const DOCS_MENU = document.createElement('div');
    DOCS_MENU.classList.add('docs-menu');
    document.querySelector('body').appendChild(DOCS_MENU);

    const DOCS_LIST = document.createElement('ul');
    DOCS_MENU.appendChild(DOCS_LIST);

    // Installation List Item
    const INSTALLATION_LIST_ITEM = document.createElement('li');        
    const INSTALLATION_ITEM_LINK = document.createElement('a');
    INSTALLATION_ITEM_LINK.textContent = "Installation";
    INSTALLATION_ITEM_LINK.setAttribute('href', './index.html');
    INSTALLATION_LIST_ITEM.appendChild(INSTALLATION_ITEM_LINK);
    DOCS_LIST.appendChild(INSTALLATION_LIST_ITEM);
    // --------------------------
    
    const LINE = document.createElement('hr');
    INSTALLATION_LIST_ITEM.appendChild(LINE);
    
    // Example List Item
    const EXAMPLE_LIST_ITEM = document.createElement('li');        
    const EXAMPLE_ITEM_LINK = document.createElement('a');
    EXAMPLE_ITEM_LINK.textContent = "Example";
    EXAMPLE_ITEM_LINK.setAttribute('href', './example.html');
    EXAMPLE_ITEM_LINK.addEventListener('click', () => {
        localStorage.setItem('DocIndex', JSON.stringify(0));
    });
    EXAMPLE_LIST_ITEM.appendChild(EXAMPLE_ITEM_LINK);
    DOCS_LIST.appendChild(EXAMPLE_LIST_ITEM);
    // --------------------------
    
    const LINE2 = document.createElement('hr');
    EXAMPLE_LIST_ITEM.appendChild(LINE2);

    // Documentation List Items
    for(let i = 0; i < DOCUMENTATION.length; i++) {
        const DOCS_LIST_ITEM = document.createElement('li');

        const DOCS_ITEM_LINK = document.createElement('a');
        DOCS_ITEM_LINK.textContent = DOCUMENTATION[i].class;
        DOCS_ITEM_LINK.setAttribute('href', './documentation.html');
        DOCS_ITEM_LINK.addEventListener('click', () => {
            localStorage.setItem('DocIndex', JSON.stringify(i));
        });
        DOCS_LIST_ITEM.appendChild(DOCS_ITEM_LINK);
        DOCS_LIST.appendChild(DOCS_LIST_ITEM);
    }
    // --------------------------
}

function CreateDocsInfo() {
    
}

CreateNavBar();

const DOCUMENTATION_BUTTON = document.querySelector('#documenation-button');
if(DOCUMENTATION_BUTTON != null) {
    DOCUMENTATION_BUTTON.addEventListener('click', ()=>{
        localStorage.setItem('DocIndex', JSON.stringify(0));
    });
}

function GetDocumentation() {
    localStorage.setItem('DocIndex', JSON.stringify(0));
}

function ActivateMenu() {
    const ACTIVE_CLASS = 'active';
    const BURGER_BUTTON = document.querySelector('.navbar-button');
    const DOCS_MENU = document.querySelector('.docs-menu');
    BURGER_BUTTON.classList.toggle(ACTIVE_CLASS);
    DOCS_MENU.classList.toggle(ACTIVE_CLASS);
}
