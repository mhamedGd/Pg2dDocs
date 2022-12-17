const DOCUMENTATION = [
    /* World -------------------------- */
    {
        class: 'World',
        description: 'The entry point to the application. It creates a window and handles the application loop for you. You can customize its contents by adding different scenes to it.',
        class_code: 'class World (WindowProperties& windowProps)',
        functions: [
            {
                function_code: 'void Run()',
                function_parameters: [
                    
                ],
                function_description: 'Called at the end of "int main()", It runs the application.'
            },
            {
                function_code: 'void Start()',
                function_parameters: [
                    
                ],
                function_description: 'Runs the "OnStart()" functions of all scenes added to this world.'
            },
            {
                function_code: 'void Update()',
                function_parameters: [
                    
                ],
                function_description: 'Runs the "OnUpdate()" functions of all scenes added to this world.'
            },
            {
                function_code: 'void Draw()',
                function_parameters: [
                    
                ],
                function_description: 'Runs the "OnDraw()" functions of all scenes added to this world.'
            },
            {
                function_code: 'void OnEvent(Event& e)',
                function_parameters: [
                    'Event& e : Current Event happening in the application.'
                ],
                function_description: 'Handles and polls native events that are happening in the application (i.e Changing Window Size, Key Pressed, Mouse Cursor Moved etc...).'
            },
            {
                function_code: 'void AddScene(const std::string& sceneName)',
                function_parameters: [
                    'const std::string& sceneName : The name of the registered scene you want to add in this world'
                ],
                function_description: 'Adding a registered scene from the ScenesList belonging to this world.'
            },
            {
                function_code: 'ScenesList* GetScenesList()',
                function_parameters: [
                    
                ],
                function_description: 'Returns a pointer to the ScenesList that belongs to this world.'
            },
            {
                function_code: 'Window* GetWindow()',
                function_parameters: [
                    
                ],
                function_description: 'Returns a pointer to the Window that belongs to this world.'
            },
            {
                function_code: 'const float TimeSinceInitialization()',
                function_parameters: [
                    
                ],
                function_description: 'Returns the time since the initialization of the current application.'
            },
        ],
    },
    /* -------------------------------- */
    /* Window ------------------------- */
    {
        class: 'Window',
        description: 'A Wrapper around GLFWWindow, Handles windowing and events for the application. Only one window per world.',
        class_code: 'class World (WindowProperties& windowProps)',
        functions: [
            {
                function_code: 'void Dispose()',
                function_parameters: [
                    
                ],
                function_description: 'Terminate the window after quitting the application.'
            },
            {
                function_code: 'void Create(WindowProperties& windowProps)',
                function_parameters: [
                    'WindowProperties& windowProps : Assigns the properties the window would hold.'
                ],
                function_description: 'Initializes GLFW and creates a glfwWindow with the proper properties, Also assigns the events to the proper event callback.'
            },
            {
                function_code: 'void Update()',
                function_parameters: [
                    
                ],
                function_description: 'Swaps the window canvas and Polls events.'
            },
            {
                function_code: 'void SetEventCallback(const EventCallbackFn callback)',
                function_parameters: [
                    'const EventCallbackFn callback : The callback that would be set for WindowData.EventCallback'
                ],
                function_description: 'Sets the callback method for the WindowData struct. This one is used for assiging callbacks for window events.'
            },
            {
                function_code: 'int GetWidth()',
                function_parameters: [
                    
                ],
                function_description: 'Returns the width of the window.'
            },
            {
                function_code: 'int GetHeight()',
                function_parameters: [
                    
                ],
                function_description: 'Returns the height of the window.'
            },
            {
                function_code: 'GLFWwindow* GetWindow()',
                function_parameters: [
                    
                ],
                function_description: 'Returns a pointer to the glfwWindow Object.'
            },
        ]
    },
    /* -------------------------------- */
    /* WindowProperties --------------- */
    {        
        class: 'WindowProperties',
        description: 'Window displaying properties, for now it only handles width, height, label, and configurations.',
        class_code: 'struct WindowProperties { int width; int height; std::string label; WindowConfigurations WindowConfigurations }',
        functions: []
    },
    /* -------------------------------- */
    /* WindowConfigurations ----------- */
    {
        class: 'WindowConfigurations',
        description: 'Window configurations that decides i.e if the window is resizable or if it should be maximized on start.',
        class_code: `enum class WindowConfigurations
        {
            NONE	= 0b00000000
            UNRESIZABLE = 0b00000001,
            MAXIMIZED   = 0b00000010,
            // IF SUPPORTED BY THE SYSTEM
            INVISIBLE   = 0b00000100
        };`,
        functions: []
    },
    /* -------------------------------- */
    /* Scene -------------------------- */
    {
        class: 'Scene',
        description: 'Your interface to create applications, Creating a scene or multiple scenes and adding it to the world to inject content into the world.',
        class_code: 'class Scene(const std::string& _sceneName)',
        functions: [
            {
                function_code: 'void SetSceneIndex(int _sceneIndex)',
                function_parameters: [
                    "int _sceneIndex : This scene's index that the world uses to organise added scenes."
                ],
                function_description: "Sets this scene's index for organising scenes in the world, useful for adding scenes and removing scenes."
            },
            {
                function_code: 'virtual void OnStart()',
                function_parameters: [
                    
                ],
                function_description: "A virtual function that you can override in your scene class, It is called at the beginning of the application."
            },
            {
                function_code: 'virtual void OnUpdate()',
                function_parameters: [
                    
                ],
                function_description: "A virtual function that you can override in your scene class, It is called at every frame of the application."
            },
            {
                function_code: 'virtual void OnDraw()',
                function_parameters: [
                    
                ],
                function_description: "A virtual function that you can override in your scene class, It is called at every frame of the application right after Update()."
            },
            {
                function_code: 'virtual void OnEvent(Event& e)',
                function_parameters: [
                    'Event& e : Current event being handled by the application'
                ],
                function_description: "A virtual function that you can override in your scene class, It is called an event fires."
            },
            {
                function_code: 'const std::string& GetSceneName()',
                function_parameters: [
                    
                ],
                function_description: "Returns the name of this scene registered in this world's ScenesList."
            },
            {
                function_code: 'const int GetSceneIndex()',
                function_parameters: [
                    
                ],
                function_description: "Returns the index of this scene added in the world."
            },
            {
                function_code: 'void SetOwnerWorld(World* _ownerWorld)',
                function_parameters: [
                    "World* _ownerWorld : A pointer to the world this scene would belong to."
                ],
                function_description: "Returns a pointer to the owner world of this scene."
            },
            {
                function_code: 'Timing::TimeStep m_DeltaTime',
                function_parameters: [
                    "m_DeltaTime.GetSeconds() : Returns the difference in time between frames in seconds.",
                    "m_DeltaTime.GetMilliseconds() : Returns the difference in time between frames in milliseconds."
                ],
                function_description: "You can use this as a time step to compensate the difference of performance in between frames."
            },
        ]
    },
    /* -------------------------------- */
    {
        class: 'ScenesList',
        description: 'A wrapper around a vector of pointers of Scenes, It is used in the World class as way to keep track of scenes created so that you can add and remove them during run time.',
        class_code: 'class ScenesList(World* _ownerWorld)',
        functions: [
            {
                function_code: 'void RegisterScene(Scene* sceneToRegister)',
                function_parameters: [
                    "Scene* sceneToRegister : The scene to be added to the registered scenes."
                ],
                function_description: "Adding a scene to the registered scenes so that it can still be in track."
            },
            {
                function_code: 'void RegisterScene(Scene* sceneToRegister)',
                function_parameters: [
                    "Scene* sceneToRegister : The scene to be added to the registered scenes."
                ],
                function_description: "Adding a scene to the registered scenes so that it can still be in track."
            },
            {
                function_code: 'Scene* GetRegisteredScene(const std::string& sceneName)',
                function_parameters: [
                    "const std::string& sceneName : The name of the registered scene you want to return."
                ],
                function_description: "Returns a pointer to a registered scene based on name."
            },
            {
                function_code: 'void DisposeOfScenes()',
                function_parameters: [
                    
                ],
                function_description: "Used in the destructor of World class to delete the scenes allocated on the heap."
            },
        ]
    },
]

function GetDocID(name) {
    for(let i = 0; i < DOCUMENTATION.length; i++){
        if(DOCUMENTATION[i].class == name){
            return i;
        }
    }
}

let docIndex = JSON.parse(localStorage.getItem('DocIndex'));

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
        FUNCTION_CODE.classList.add('prettyprint', 'code-block');
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

FillInformation(DOCUMENTATION[docIndex]);
