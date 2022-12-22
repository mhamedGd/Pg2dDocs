import { DOCUMENTATION } from "./documentation_information.mjs";

function GetDocID(name) {
    for(let i = 0; i < DOCUMENTATION.length; i++){
        if(DOCUMENTATION[i].class == name){
            return i;
        }
    }
}

let docIndex = 0

if(JSON.parse(localStorage.getItem('DocIndex')) != null){
    docIndex = JSON.parse(localStorage.getItem('DocIndex'));
    console.log("EXISTS");
}


function FillInformation(info_object){
    const CLASS_HEADER = document.querySelector('#class-name');
    CLASS_HEADER.textContent = info_object.class;

    const CLASS_DESCRIPTION = document.querySelector('#class-description');
    CLASS_DESCRIPTION.textContent = info_object.description;

    const CLASS_CODE = document.querySelector('#class-code');
    CLASS_CODE.textContent = info_object.class_code;

    const FUNCTIONS = document.querySelector('.functions');
    /*
    <div class="function">
          <pre class="prettyprint code-block">void</pre>
          <ul>
            <li>parameter1</li>
            <li>parameter2</li>
          </ul>
          <p>function description</p>
        </div>
    */
    for(let i = 0; i < info_object.functions.length; i++){
        const FUNCTION = document.createElement('div');
        FUNCTION.classList.add('function');
        FUNCTIONS.appendChild(FUNCTION);

        const FUNCTION_CODE = document.createElement('pre');
        FUNCTION_CODE.classList.add('code-block');
        FUNCTION_CODE.classList.add('prettyprint');
        FUNCTION_CODE.textContent = info_object.functions[i].function_code;
        FUNCTION.appendChild(FUNCTION_CODE);

        const PARAMETER_LIST = document.createElement('ul');
        FUNCTION.appendChild(PARAMETER_LIST);
        for(let j = 0; j < info_object.functions[i].function_parameters.length; j++){
            const PARAMETER = document.createElement('li');
            PARAMETER.textContent = info_object.functions[i].function_parameters[j];
            PARAMETER_LIST.appendChild(PARAMETER);
        }

        const FUNCTION_DESCRIPTION = document.createElement('p');
        FUNCTION_DESCRIPTION.textContent = info_object.functions[i].function_description;
        FUNCTION.appendChild(FUNCTION_DESCRIPTION);
    }

    const PREVIOUS_BUTTON = document.querySelector('#previous-button');
    
    if(docIndex == 0) {
        PREVIOUS_BUTTON.setAttribute('href', './example.html');
    }else {
        PREVIOUS_BUTTON.setAttribute('href', './documentation.html');
        PREVIOUS_BUTTON.textContent = DOCUMENTATION[docIndex - 1].class;
        PREVIOUS_BUTTON.addEventListener('click', ()=>{
        localStorage.setItem('DocIndex', docIndex - 1);
        });
    }
    
    const NEXT_BUTTON = document.querySelector('#next-button');
    if(docIndex == DOCUMENTATION.length - 1) {
        NEXT_BUTTON.style.display = 'none';
    }else {
        NEXT_BUTTON.setAttribute('href', './documentation.html');
        NEXT_BUTTON.textContent = DOCUMENTATION[docIndex + 1].class;
        NEXT_BUTTON.addEventListener('click', ()=>{
            localStorage.setItem('DocIndex', docIndex + 1);
        });
    }
}

console.log(docIndex);

FillInformation(DOCUMENTATION[docIndex]);
