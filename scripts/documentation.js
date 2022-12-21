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
    /* ScenesList --------------------- */
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
    /* -------------------------------- */
    /* Camera2D ----------------------- */
    {
        class: 'Camera2D',
        description: 'The Camera is your viewport into the world, You can scale, move, and render only specific objects on it. You can have multiple Cameras in your scene to render for example a Hud on top of the world.',
        class_code: 'class Camera2D(Window* window)',
        functions: [
            {
                function_code: 'virtual void Update()',
                function_parameters: [
                    
                ],
                function_description: "Updates the camera viewport, Don't forget to call it in 'OnUpdate' in your scene."
            },
            {
                function_code: 'void SetPosition(glm::vec2 _position)',
                function_parameters: [
                    "glm::vec2 _position : The camera's new position."
                ],
                function_description: "Sets a new position for the camera."
            },
            {
                function_code: 'void SetScale(float _scale)',
                function_parameters: [
                    "float _scale : The camera's new scale."
                ],
                function_description: "Sets a new scale for the camera."
            },
            {
                function_code: 'const glm::vec2 ScreenPointToWorld (glm::vec2 _screenPoint)',
                function_parameters: [
                    "glm::vec2 _screenPoint : 2D point to be transfered to 2D point relativ to the camera view."
                ],
                function_description: "Returns a 2D point that is relative to the camera's scale, mainly used to get the Camera Mouse Position."
            },
            {
                function_code: 'const glm::mat4& GetProjectionMatrix()',
                function_parameters: [
                    
                ],
                function_description: "Return the camera's projection matrix."
            },
            {
                function_code: 'const glm::mat4& GetViewMatrix()',
                function_parameters: [
                    
                ],
                function_description: "Return the camera's view matrix, Mainly used with the shader's MVP uniform."
            },
            {
                function_code: 'const glm::vec2& GetPosition()',
                function_parameters: [
                    
                ],
                function_description: "Return The camera's position."
            },
            {
                function_code: 'const float GetScale()',
                function_parameters: [
                    
                ],
                function_description: "Return The camera's scale."
            },
        ]
    },
    /* -------------------------------- */
    /* HudCamera ---------------------- */
    {
        class: 'HudCamera',
        description: 'A sub-class of the Camera2D, Mainly used for UI and Hud values.',
        class_code: 'class HudCamera(Window* window) : Camera2D(window)',
        functions: [
            {
                function_code: 'virtual void Update()',
                function_parameters: [
                    
                ],
                function_description: "Updates the camera viewport, Don't forget to call it in 'OnUpdate' in your scene."
            },
        ]
    },
    /* Event ------------------------- */
    {
        class: 'Event',
        description: 'An Abstract Class, The Event class gets passed around by the application after being called around the scenes added in the world in reverse order.',
        class_code: 'class Event',
        functions: [
            {
                function_code: 'virtual EventType GetEventType()',
                function_parameters: [
                    
                ],
                function_description: "Returns the type of the Event."
            },
            {
                function_code: 'virtual const char* GetName()',
                function_parameters: [
                    
                ],
                function_description: "Returns the name of the Event (Experimental)."
            },
            {
                function_code: 'virtual int GetCategoryFlags()',
                function_parameters: [
                    
                ],
                function_description: "Get The Categories of this Event."
            },
            {
                function_code: 'inline bool IsInCategory(EventCategory category)',
                function_parameters: [
                    "EventCategory category : The category to cross-check with the categories this Event belongs to."
                ],
                function_description: "Check if this EventCategory exists withing the categories this Event belongs to."
            },
            {
                function_code: 'bool IsHandled()',
                function_parameters: [
                    
                ],
                function_description: "Check if the event has been handled."
            },
        ]
    },
    /* -------------------------------- */
    /* WindowResizeEvent -------------- */
    {
        class: 'WindowResizeEvent',
        description: 'An Event that gets called whenever the window gets resized.',
        class_code: 'class WindowResizeEvent(unsigned int width, unsigned int height) : public Event',
        functions: [
            {
                function_code: 'inline unsigned int GetWidth()',
                function_parameters: [
                    
                ],
                function_description: "Returns the width of the window."
            },
            {
                function_code: 'inline unsigned int GetHeight()',
                function_parameters: [
                    
                ],
                function_description: "Returns the height of the window."
            }
        ]
    },
    /* WindowResizeEvent -------------- */
    {
        class: 'WindowCloseEvent',
        description: 'An Event that gets called when the window closes.',
        class_code: 'class WindowCloseEvent : public Event',
        functions: [
            
        ]
    },
    /* -------------------------------- */
    /* KeyEvent ----------------------- */
    {
        class: 'KeyEvent',
        description: 'An Abstract Event Class that gets called whenever a key is pressed or released or repeated.',
        class_code: 'class KeyEvent : public Event',
        functions: [
            {
                function_code: 'inline int GetKeyCode()',
                function_parameters: [
                    
                ],
                function_description: "Returns which key was triggered."
            }
        ]
    },
    /* -------------------------------- */
    /* KeyPressedEvent ---------------- */
    {
        class: 'KeyPressedEvent',
        description: 'An Event that gets called whenever a key is pressed or repeated.',
        class_code: 'class KeyPressedEvent(int keycode, int repeatCount) : KeyEvent(keycode)',
        functions: [
            {
                function_code: 'inline int GetRepeatCount()',
                function_parameters: [
                    
                ],
                function_description: "Returns if the key press is repeated."
            }
        ]
    },
    /* -------------------------------- */
    /* KeyReleasedEvent --------------- */
    {
        class: 'KeyReleasedEvent',
        description: 'An Event that gets called whenever a key is released.',
        class_code: 'class KeyReleasedEvent(int keycode) : KeyEvent(keycode)',
        functions: [
        ]
    },
    /* -------------------------------- */
    /* MouseMovedEvent ---------------- */
    {
        class: 'MouseMovedEvent',
        description: 'An Event that gets called whenever the mouse cursor moves.',
        class_code: 'class MouseMovedEvent(float x, float y) : public Event',
        functions: [
            {
                function_code: 'inline float GetX()',
                function_parameters: [
                    
                ],
                function_description: "Returns The Window Mouse Cursor X Position."
            },
            {
                function_code: 'inline float GetY()',
                function_parameters: [
                    
                ],
                function_description: "Returns The Window Mouse Cursor Y Position."
            },
        ]
    },
    /* -------------------------------- */
    /* MouseScrolledEvent ------------- */
    {
        class: 'MouseScrolledEvent',
        description: 'An Event that gets called whenever the mouse scrolls.',
        class_code: 'class MouseScrolledEvent(float xOffset, float yOffset) : public Event',
        functions: [
            {
                function_code: 'inline float GetXOffset()',
                function_parameters: [
                    
                ],
                function_description: "Returns The Window Mouse Scroll X Offset."
            },
            {
                function_code: 'inline float GetYOffset()',
                function_parameters: [
                    
                ],
                function_description: "Returns The Window Mouse Scroll Y Offset."
            },
        ]
    },
    /* -------------------------------- */
    /* MouseButtonEvent --------------- */
    {
        class: 'MouseButtonEvent',
        description: 'An Abstract Event Class that gets called whenever a mouse button is pressed or released.',
        class_code: 'class MouseButtonEvent : public Event',
        functions: [
            {
                function_code: 'inline int GetMouseButton()',
                function_parameters: [
                    
                ],
                function_description: "Returns Which Mouse Button Is Pressed."
            },
        ]
    },
    /* -------------------------------- */
    /* MouseButtonPressedEvent -------- */
    {
        class: 'MouseButtonPressedEvent',
        description: 'An Abstract Event Class that gets called whenever a mouse button is pressed.',
        class_code: 'class MouseButtonPressedEvent(int button) : MouseButtonEvent(button)',
        functions: [
        ]
    },
    /* -------------------------------- */
    /* MouseButtonReleasedEvent ------- */
    {
        class: 'MouseButtonReleasedEvent',
        description: 'An Abstract Event Class that gets called whenever a mouse button is released.',
        class_code: 'class MouseButtonReleasedEvent(int button) : MouseButtonEvent(button)',
        functions: [
        ]
    },
    /* -------------------------------- */
    /* EventDispatcher ---------------- */
    {
        class: 'EventDispatcher',
        description: "Used to catch events when they fire. Mainly used in the OnEvent(Event& e) method to call a method on the event calling.",
        class_code: 'class EventDispatcher(Event& event)',
        functions: [
            {
                function_code: 'bool Dispatch(EventFn<T> func)',
                function_parameters: [
                    "EventFn<T> func : The method that will be called when the event is dispatched. IMPORTANT the return type of the method should be a bool."
                ],
                function_description: "Call a function when the event specified in the constructer is dispatched."
            },
        ]
    },
    /* -------------------------------- */
    /* Input -------------------------- */
    {
        class: 'Input',
        description: "The general Input class that can be used to detect any Input going on in the application. From the press of a key to the position of the mouse relative to the window.",
        class_code: 'class Input',
        functions: [
            {
                function_code: 'inline static bool IsKeyPressed(int keyCode)',
                function_parameters: [
                    "keyCode : the code of the key pressed."
                ],
                function_description: "Check if a key is pressed."
            },
            {
                function_code: 'inline static bool IsMouseButtonPressed(int button)',
                function_parameters: [
                    "button : the index of a mouse button."
                ],
                function_description: "Check if a mouse button is pressed."
            },
            {
                function_code: 'inline static glm::ivec2 MousePosition()',
                function_parameters: [
                   
                ],
                function_description: "Return Mouse Cursor Postion relative to the window."
            },
            {
                function_code: 'inline static float MousePositionX()',
                function_parameters: [
                   
                ],
                function_description: "Return MousePostion().x ."
            },
            {
                function_code: 'inline static float MousePositionY()',
                function_parameters: [
                   
                ],
                function_description: "Return MousePostion().y ."
            },
            {
                function_code: 'inline static glm::ivec2 DeltaMousePosition()',
                function_parameters: [
                   
                ],
                function_description: "Return the difference of the Mouse Cursor Position between this frame and the previous, Relative to the window."
            },
            {
                function_code: 'inline static int DeltaMousePositionX()',
                function_parameters: [
                   
                ],
                function_description: "Return DeltaMousePosition().x ."
            },
            {
                function_code: 'inline static int DeltaMousePositionY()',
                function_parameters: [
                   
                ],
                function_description: "Return DeltaMousePosition().y ."
            },
        ]
    },
    /* -------------------------------- */
    /* Input Keycodes and Mouse Buttons */
    {
        class: 'InputKeys and MouseButtons',
        description: "The Key Codes for the keyboard, and the mouse buttons.",
        class_code: '',
        functions: [
            {
                function_code:
                `
    PG_KEY_SPACE              /* Space */
    PG_KEY_APOSTROPHE         /* ' */
    PG_KEY_COMMA              /* , */
    PG_KEY_MINUS              /* - */
    PG_KEY_PERIOD             /* . */
    PG_KEY_SLASH              /* / */
    PG_KEY_0                  /* 0 */
    PG_KEY_1                  /* 1 */
    PG_KEY_2                  /* 2 */
    PG_KEY_3                  /* 3 */
    PG_KEY_4                  /* 4 */
    PG_KEY_5                  /* 5 */
    PG_KEY_6                  /* 6 */
    PG_KEY_7                  /* 7 */
    PG_KEY_8                  /* 8 */
    PG_KEY_9                  /* 9 */
    PG_KEY_SEMICOLON          /* ; */
    PG_KEY_EQUAL              /* = */
    PG_KEY_A                  /* A */
    PG_KEY_B                  /* B */
    PG_KEY_C                  /* C */
    PG_KEY_D                  /* D */
    PG_KEY_E                  /* E */
    PG_KEY_F                  /* F */
    PG_KEY_G                  /* G */
    PG_KEY_H                  /* H */
    PG_KEY_I                  /* I */
    PG_KEY_J                  /* J */
    PG_KEY_K                  /* K */
    PG_KEY_L                  /* L */
    PG_KEY_M                  /* M */
    PG_KEY_N                  /* N */
    PG_KEY_O                  /* O */
    PG_KEY_P                  /* P */
    PG_KEY_Q                  /* Q */
    PG_KEY_R                  /* R */
    PG_KEY_S                  /* S */
    PG_KEY_T                  /* T */
    PG_KEY_U                  /* U */
    PG_KEY_V                  /* V */
    PG_KEY_W                  /* W */
    PG_KEY_X                  /* X */
    PG_KEY_Y                  /* Y */
    PG_KEY_Z                  /* Z */
    PG_KEY_LEFT_BRACKET       /* [ */
    PG_KEY_BACKSLASH          /* \\ */
    PG_KEY_RIGHT_BRACKET      /* ] */
    PG_KEY_GRAVE_ACCENT       /* \`  */
    PG_KEY_WORLD_1            /* non-US #1 */
    PG_KEY_WORLD_2            /* non-US #2 */


    PG_KEY_ESCAPE             /* Esc */
    PG_KEY_ENTER              /* Enter */
    PG_KEY_TAB                /* Tap */
    PG_KEY_BACKSPACE          /* Backspace */
    PG_KEY_INSERT             /* Insert */
    PG_KEY_DELETE             /* Delete */
    PG_KEY_RIGHT              /* Right Arrow */
    PG_KEY_LEFT               /* Left Arrow */
    PG_KEY_DOWN               /* Down Arrow */
    PG_KEY_UP                 /* Up Arrow */
    PG_KEY_PAGE_UP            /* Page up */
    PG_KEY_PAGE_DOWN          /* Page down */
    PG_KEY_HOME               /* Home */
    PG_KEY_END                /* End */
    PG_KEY_CAPS_LOCK          /* Caps-Lock */
    PG_KEY_SCROLL_LOCK        /* Scroll-Lock */
    PG_KEY_NUM_LOCK           /* Num-Lock */
    PG_KEY_PRINT_SCREEN       /* Print-Screen */
    PG_KEY_PAUSE              /* Pause */
    PG_KEY_F1                 /* F1 */
    PG_KEY_F2                 /* F2 */
    PG_KEY_F3                 /* F3 */
    PG_KEY_F4                 /* F4 */
    PG_KEY_F5                 /* F5 */
    PG_KEY_F6                 /* F6 */
    PG_KEY_F7                 /* F7 */
    PG_KEY_F8                 /* F8 */
    PG_KEY_F9                 /* F9 */
    PG_KEY_F10                /* F10 */
    PG_KEY_F11                /* F11 */
    PG_KEY_F12                /* F12 */
    PG_KEY_F13                /* F13 */
    PG_KEY_F14                /* F14 */
    PG_KEY_F15                /* F15 */
    PG_KEY_F16                /* F16 */
    PG_KEY_F17                /* F17 */
    PG_KEY_F18                /* F18 */
    PG_KEY_F19                /* F19 */
    PG_KEY_F20                /* F20 */
    PG_KEY_F21                /* F21 */
    PG_KEY_F22                /* F22 */
    PG_KEY_F23                /* F23 */
    PG_KEY_F24                /* F24 */
    PG_KEY_F25                /* F25 */
    PG_KEY_KP_0               /* Keypad 0 */
    PG_KEY_KP_1               /* Keypad 1 */
    PG_KEY_KP_2               /* Keypad 2 */
    PG_KEY_KP_3               /* Keypad 3 */
    PG_KEY_KP_4               /* Keypad 4 */
    PG_KEY_KP_5               /* Keypad 5 */
    PG_KEY_KP_6               /* Keypad 6 */
    PG_KEY_KP_7               /* Keypad 7 */
    PG_KEY_KP_8               /* Keypad 8 */
    PG_KEY_KP_9               /* Keypad 9 */
    PG_KEY_KP_DECIMAL         /* Keypad . */
    PG_KEY_KP_DIVIDE          /* Keypad / */
    PG_KEY_KP_MULTIPLY        /* Keypad * */
    PG_KEY_KP_SUBTRACT        /* Keypad - */
    PG_KEY_KP_ADD             /* Keypad + */
    PG_KEY_KP_ENTER           /* Keypad Enter */
    PG_KEY_KP_EQUAL           /* Keypad = */
    PG_KEY_LEFT_SHIFT         /* Left Shift */
    PG_KEY_LEFT_CONTROL       /* Left Control */
    PG_KEY_LEFT_ALT           /* Left Alt */
    PG_KEY_LEFT_SUPER         /* Left Window/Command Key */
    PG_KEY_RIGHT_SHIFT        /* Right Shift */
    PG_KEY_RIGHT_CONTROL      /* Right Control */
    PG_KEY_RIGHT_ALT          /* Right Alt */
    PG_KEY_RIGHT_SUPER        /* Right Window/Command Key */
    PG_KEY_MENU               /* Key Menu */
                `,
                function_parameters: [
                    
                ],
                function_description: "The Keyboard Key Codes that can be used in pair with 'Input::IsKeyPressed'."
            },
            {
                function_code:
                `
    PG_MOUSE_BUTTON_1         /* Mouse Button 0 */
    PG_MOUSE_BUTTON_2         /* Mouse Button 1 */
    PG_MOUSE_BUTTON_3         /* Mouse Button 2 */
    PG_MOUSE_BUTTON_4         /* Mouse Button 3 */
    PG_MOUSE_BUTTON_5         /* Mouse Button 4 */
    PG_MOUSE_BUTTON_6         /* Mouse Button 5 */
    PG_MOUSE_BUTTON_7         /* Mouse Button 6 */
    PG_MOUSE_BUTTON_8         /* Mouse Button 7 */
    PG_MOUSE_BUTTON_LAST      /* Last Mouse Button   (8) */
    PG_MOUSE_BUTTON_LEFT      /* Left Mouse Button   (1) */
    PG_MOUSE_BUTTON_RIGHT     /* Right Mouse Button  (2) */
    PG_MOUSE_BUTTON_MIDDLE    /* Middle Mouse Button (3) */
                `,
                function_parameters: [
                    
                ],
                function_description: "The Mouse Buttons that can be used in pair with 'Input::IsMouseButtonPressed'."
            },  
        ]
    },
    /* -------------------------------- */
    /* Logger -------------------------- */
    {
        class: 'Logger',
        description: "The main logger class, It uses (spd log) to customize the output in the console.",
        class_code: 'class Logger',
        functions: [
            {
                function_code: 'static void Init()',
                function_parameters: [
                    
                ],
                function_description: "Initialize the Logger class."
            },
            {
                function_code: 'inline static std::shared_ptr <spdlog::logger>& GetCoreLogger()',
                function_parameters: [
                    
                ],
                function_description: "Return a the framework spd logger."
            },
            {
                function_code: 'inline static std::shared_ptr <spdlog::logger>& GetClientLogger()',
                function_parameters: [
                    
                ],
                function_description: "Return a the client (Application) spd logger."
            },
        ]
    },
    /* -------------------------------- */
    /* Logger ------------------------- */
    {
        class: 'Common',
        description: "Common functionalities between multiple classes.",
        class_code: '',
        functions: [
            {
                function_code: '#define PI 3.145f',
                function_parameters: [
                    
                ],
                function_description: ""
            },
            {
                function_code: '#define SHIFT_BIT(x) 1 << x',
                function_parameters: [
                    
                ],
                function_description: "Shift a bit (x) times to the left."
            },
            {
                function_code: '#ifdef PLAYGROUND_2D_DEBUG',
                function_parameters: [
                    
                ],
                function_description: "Only show output in the console if it's in Debug configuration."
            },
            {
                function_code: '#define PG_CORE_TRACE(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the framework spd logger a white text to the console."
            },
            {
                function_code: '#define PG_CORE_WARN(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the framework spd logger a yellow text to the console."
            },
            {
                function_code: '#define PG_CORE_ERROR(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the framework spd logger a red text to the console."
            },
            {
                function_code: '#define PG_CORE_INFO(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the framework spd logger a green text to the console."
            },
            {
                function_code: '#define PG_CORE_ASSERT(x, ...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the framework spd logger a green text if (x) is true otherwise output a red text to the console."
            },            
            {
                function_code: '#define PG_TRACE(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the application spd logger a white text to the console."
            },
            {
                function_code: '#define PG_WARN(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the application spd logger a yellow text to the console."
            },
            {
                function_code: '#define PG_ERROR(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the application spd logger a red text to the console."
            },
            {
                function_code: '#define PG_INFO(...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the application spd logger a green text to the console."
            },
            {
                function_code: '#define PG_ASSERT(x, ...)',
                function_parameters: [
                    
                ],
                function_description: "Output using the application spd logger a green text if (x) is true otherwise output a red text to the console."
            },
        ]
    },
    /* -------------------------------- */
    /* TimeStep ----------------------- */
    {
        class: 'TimeStep',
        description: "A Timestep class made solely for the m_DeltaTime in World Class",
        class_code: 'class TimeStep(float time = 0.0f)',
        functions: [
            {
                function_code: 'float GetSeconds()',
                function_parameters: [
                    
                ],
                function_description: "return TimeStep in Seconds."
            },
            {
                function_code: 'float GetMilliseconds()',
                function_parameters: [
                    
                ],
                function_description: "return TimeStep in Milliseconds."
            },
        ]
    },
    /* -------------------------------- */
    /* RGBA8 -------------------------- */
    {
        class: 'RGBA8',
        description: "The color struct used in the framework. It consists of 4 unsigned chars (r, g, b, a).",
        class_code: 'struct RGBA8 { unsigned char r, g, b, a; }',
        functions: [
        ]
    },
    /* -------------------------------- */
    /* Vertex ------------------------- */
    {
        class: 'Vertex',
        description: "The Vertex struct used in ShapeBatch and SpriteBatch.",
        class_code: `
            struct Vertex {
                glm::vec2 position;
                RGBA8 color;
                glm::vec2 uv;
            };
        `,
        functions: [
        ]
    },
    /* -------------------------------- */
    /* Texture ------------------------ */
    {
        class: 'Texture',
        description: "The Texture struct that holds the necessary information to display a Texture on the screen.",
        class_code: `
            struct Texture {
                int width, height, bpp;
                unsigned int textureID;
            };
        `,
        functions: [
        ]
    },
    /* -------------------------------- */
    /* Texture2D ---------------------- */
    {
        class: 'Texture2D',
        description: "This class contains the functions to load images into the application (Only PNG for now).",
        class_code: 'class Texture2D',
        functions: [
            {
                function_code: 'static Texture LoadPNG(const std::string& filePath)',
                function_parameters: [
                    "const std::string& filePath : The image path."
                ],
                function_description: "This functions loads up a PNG image and returns a Texture struct with the appropriate properties."
            },
        ]
    },
    /* -------------------------------- */
    /* ShaderProgram ------------------ */
    {
        class: 'ShaderProgram',
        description: "This class handles shaders loading, parsing and creation. It only works for GLSL now.",
        class_code: 'class ShaderProgram',
        functions: [
            {
                function_code: 'void Dispose()',
                function_parameters: [
                    
                ],
                function_description: "Delete this shader program."
            },
            {
                function_code: 'void ParseShader(const std::string& filePath)',
                function_parameters: [
                    "const std::string& filePath : shader file path."
                ],
                function_description: "Load a shader file and parses it into the member ShaderSource struct variable."
            },
            {
                function_code: 'void ParseShader(const std::string& vertexShader, const std::string& fragmentShader)',
                function_parameters: [
                    "const std::string& vertexShader : vertex shader string.",
                    "const std::string& fragmentShader : fragment shader string."
                ],
                function_description: "Load a shader from 2 strings, an parses them into the member ShaderSource struct variable."
            },
            {
                function_code: 'void CreateShaderProgram()',
                function_parameters: [

                ],
                function_description: "Create the shader program and pass it unto the GPU and assign an id uniquelly to this object locally to (m_ShaderProgramID), Then delete the shader program locally."
            },
            {
                function_code: 'void AddAttribute(const std::string& attributeName)',
                function_parameters: [
                    "const std::string& attributeName : The attribute name to be passed unto the shader in the GPU."
                ],
                function_description: "Passes an attribute (value) unto the shader that is stored and is running on the GPU."
            },
            {
                function_code: 'void Use()',
                function_parameters: [
                    
                ],
                function_description: "Use the current shader in the gpu (only one shader can be used at a time)."
            },
            {
                function_code: 'void Unuse()',
                function_parameters: [
                    
                ],
                function_description: "Unuse the current shader in the gpu (only one shader can be used at a time)."
            },
            {
                function_code: 'void Unuse()',
                function_parameters: [
                    
                ],
                function_description: "Unuse the current shader in the gpu (only one shader can be used at a time)."
            },
            {
                function_code: 'void FloatUniform(const std::string& uniformName, float value)',
                function_parameters: [
                    "const std::string& uniformName : The uniform name in the shader",
                    "float value : The new value of the uniform."
                ],
                function_description: "Change a uniform's value in the shader with a specific name and of type float."
            },
            {
                function_code: 'void IntUniform(const std::string& uniformName, int value)',
                function_parameters: [
                    "const std::string& uniformName : The uniform name in the shader",
                    "int value : The new value of the uniform."
                ],
                function_description: "Change a uniform's value in the shader with a specific name and of type int."
            },
            {
                function_code: 'Matrix4x4Uniform(const std::string& uniformName, const glm::mat4& matrix)',
                function_parameters: [
                    "const std::string& uniformName : The uniform name in the shader",
                    "int value : The new value of the uniform."
                ],
                function_description: "Change a uniform's value in the shader with a specific name and of type int."
            },
            {
                function_code: 'GLint GetUniformLocation(const std::string& uniformName)',
                function_parameters: [
                    "const std::string& uniformName : The name of uniform you want to find the location of."
                ],
                function_description: "Return an OpenGL int that corresponds to the location of the uniform that matches the name."
            },
        ]
    },
    /* -------------------------------- */
    /* SpriteBatch -------------------- */
    {
        class: 'SpriteBatch',
        description: "A Render Batch Class that allows the user to render images to the world. It is mainly built with the intent of minimizing draw calls as much as possible.",
        class_code: 'class SpriteBatch(const std::string& shaderPath = "Assets/default.shader")',
        functions: [
            {
                function_code: 'void DrawSpriteLeftBottom(const glm::vec2& pos, const glm::vec2& dimensions, const glm::vec4 uvRect, GLuint textureID, RGBA8 color)',
                function_parameters: [
                    "const glm::vec2& pos : Bottom left position of the sprite.",
                    "const glm::vec2& dimensions : Dimensions of the sprite.",
                    "const glm::vec4 uvRect : UV Coordinates of the sprite.",
                    "GLuint textureID : Texture ID that the sprite will display.",
                    "RGBA8 color : Sprite tint color."
                ],
                function_description: "Draw A Sprite in the world that starts from the bottom left."
            },
            {
                function_code: 'void DrawSprite(const glm::vec2& pos, const glm::vec2& dimensions, const glm::vec4 uvRect, GLuint textureID, RGBA8 color)',
                function_parameters: [
                    "const glm::vec2& pos : Center-most position of the sprite.",
                    "const glm::vec2& dimensions : Dimensions of the sprite.",
                    "const glm::vec4 uvRect : UV Coordinates of the sprite.",
                    "GLuint textureID : Texture ID that the sprite will display.",
                    "RGBA8 color : Sprite tint color."
                ],
                function_description: "Draw A Sprite in the world that is pivoted at the center."
            },
            {
                function_code: 'void DrawSprite(const glm::vec2& pos, const glm::vec2& dimensions, const glm::vec4 uvRect, GLuint textureID, RGBA8 color, float angle)',
                function_parameters: [
                    "const glm::vec2& pos : Center-most position of the sprite.",
                    "const glm::vec2& dimensions : Dimensions of the sprite.",
                    "const glm::vec4 uvRect : UV Coordinates of the sprite.",
                    "GLuint textureID : Texture ID that the sprite will display.",
                    "RGBA8 color : Sprite tint color.",
                    "float angle : Sprite Angle."
                ],
                function_description: "Draw A Sprite in the world that is pivoted at the center with an angle."
            },
            {
                function_code: 'void Render(Camera2D& camera)',
                function_parameters: [
                    "Camera2D& camera : The camera in which to render everything drawn so-far in this SpriteBatch object"
                ],
                function_description: "Render Everything that has been drawn in this SpriteBatch object, preferred if this function is called at the of every draw call belonging to this object."
            },
        ]
    },
    /* -------------------------------- */
    /* Glyph -------------------------- */
    {
        class: 'Glyph',
        description: "The rect that is mainly used by class SpriteBatch as a data holder for the drawing process.",
        class_code: `
        class Glyph(const glm::vec2& pos, const glm::vec2& dimensions, const glm::vec4& uv, GLuint _textureID, RGBA8 color, float _depth)
        class Glyph(const glm::vec2& pos, const glm::vec2& dimensions, const glm::vec4& uv, GLuint _textureID, RGBA8 color, float _depth, float angle)
        class Glyph(const glm::vec4& rect, const glm::vec4& uv, GLuint _textureID, RGBA8 color, float _depth)
        
        `,
        functions: [
            {
                function_code: 'glm::vec2 RotatePoint(const glm::vec2& originalPoint, float angleInDegrees)',
                function_parameters: [
                    "const glm::vec2& originalPoint : The 2D point you want to rotate.",
                    "float angleInDegrees : The angle you want the 2D point rotated towards."
                ],
                function_description: "Rotate a 2D Point in space to a certain angle."
            },
        ]
    },
    /* -------------------------------- */
    /* ShapeBatch --------------------- */
    {
        class: 'RenderBatch',
        description: "A Render Batch Class that allows the user to render shapes to the world. It is mainly built with the intent of minimizing draw calls as much as possible.",
        class_code: "class RenderBatch(GLuint _offset, GLuint _numVerts, GLuint _textureID)",
        functions: [
        ]
    },
    /* -------------------------------- */
    /* Glyph -------------------------- */
    {
        class: 'ShapeBatch',
        description: "The rect that is mainly used by class SpriteBatch as a data holder for the drawing process.",
        class_code: "class ShapeBatch",
        functions: [
            {
                function_code: 'void DrawLine(const glm::vec2& startPos, const glm::vec2& targetPos, RGBA8 color)',
                function_parameters: [
                    "const glm::vec2& startPos : Line start position.",
                    "const glm::vec2& targetPos : Line end position.",
                    "RGBA8 color : Line color."
                ],
                function_description: "Draw a line from Point A to Point B with a color."
            },
            {
                function_code: 'void DrawBox(const glm::vec2& origin, const glm::vec2& dimensions, RGBA8 color)',
                function_parameters: [
                    "const glm::vec2& origin : Rect center position.",
                    "const glm::vec2& dimensions : Rect dimensions.",
                    "RGBA8 color : Rect line color."
                ],
                function_description: "Draw an outline rect at a specific position with specific dimensions and line color."
            },
            {
                function_code: 'void DrawBox(const glm::vec2& origin, const glm::vec2& dimensions, RGBA8 color, float angleInDegrees)',
                function_parameters: [
                    "const glm::vec2& origin : Rect center position.",
                    "const glm::vec2& dimensions : Rect dimensions.",
                    "RGBA8 color : Rect line color.",
                    "float angleInDegrees : Rect angle."
                ],
                function_description: "Draw an outline rect at a specific position with specific dimensions, line color, and an angle."
            },
            {
                function_code: 'void DrawCirlce(const glm::vec2& center, float radius, RGBA8 color)',
                function_parameters: [
                    "const glm::vec2& center : Circle center position.",
                    "float radius : Circle radius.",
                    "RGBA8 color : Circle line color."
                ],
                function_description: "Draw an outline circle at a specific position with specific a radius and line color."
            },
            {
                function_code: 'void Render(Camera2D& m_Camera, float lineWidth)',
                function_parameters: [
                    "Camera2D& m_Camera : The camera to render the shapes that had been draw in this object to.",
                    "float lineWidth : The line width of all shapes drawn in this object."
                ],
                function_description: "Render everything that has been drawn using this object, Preferred if used after all Draw calls used with this object."
            },
        ]
    },
    /* -------------------------------- */
    /* FontBatch ---------------------- */
    {
        class: 'FontBatch',
        description: "A Wrapper class around SpriteBatch that decodes (.ttf) font types and draws them in the world.",
        class_code: "class FontBatch(const std::string& fontPath, const FontBatchSettings& fontBatchSettings = { 32.0f, 32.0f })",
        functions: [
            {
                function_code: 'void DrawString(const std::string& text, glm::vec2 pos, float scale, const RGBA8& color)',
                function_parameters: [
                    "const std::string& text : Text you want to draw. P.S: use '\\n' to add a new line.",
                    "glm::vec2 pos : Left-most position of the text.",
                    "float scale : Text scale, It can be used together with the font-size to set the size of the text on screen.",
                    "const RGBA8& color : Text tint color."
                ],
                function_description: "Draw a string in the world."
            },
            {
                function_code: 'void Render(Camera2D& camera)',
                function_parameters: [
                    "Camera2D& camera : The camera you want to render all strings drawn using this object to."
                ],
                function_description: "Render all strings drawn using this object, Preferred if used after all Draw calls used with this object."
            },
        ]
    },
    /* -------------------------------- */
    /* FontBatchSettings -------------- */
    {
        class: 'FontBatchSettings',
        description: "Properties of the decoded fonts, for now only (font size, line height).",
        class_code: "struct FontBatchSettings { float fontSize; float lineHeight; }",
        functions: [
        ]
    },
    /* -------------------------------- */
    /* CharGlyph -------------- */
    {
        class: 'CharGlyph',
        description: "Settings struct that determine how to draw each character unto the screen, They're automatically assigned when first creating a FontBatch object.",
        class_code: "struct CharGlyph { GLuint textureID; glm::ivec2 size; glm::ivec2 bearing; unsigned int advance; }",
        functions: [
        ]
    },
    /* -------------------------------- */
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

FillInformation(DOCUMENTATION[docIndex]);
