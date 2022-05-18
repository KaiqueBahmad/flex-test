function newChild(event) { //here it set who is the main section from the button, then get name & color, and them factory and append child to him
    let father = event.target.parentNode.parentNode.parentNode;
    let name = window.prompt('escolha um nome')
    let color = window.prompt('Escolha uma cor para o elemento filho')
    let child = factoryChild(name, color);
    console.log(father)
    father.querySelector('.children').appendChild(child);
}

function factoryChild(name, color) { //function that creates a child model that will be used on html
    let cBody = document.createElement('section'); //main element will be returned later
    let settings = document.createElement('nav'); //settings nav
    settings.setAttribute('class','settings'); //setting up class
    let settings_name = document.createElement('h1'); //h1 that goes inside setting nav
    settings_name.innerText = name; //changing his inner text
    settings.appendChild(settings_name); //and putting it into settings
    let settings_button = document.createElement('button'); //-
    settings_button.setAttribute('class', 'newChild');  //Same proces like above
    settings_button.addEventListener('click', newChild);//- and here setting up button to create new child inside new element when clicked
    let settings_button_text = document.createElement('b'); 
    settings_button_text.innerText = 'Criar nova janela';
    settings_button.appendChild(settings_button_text);
    settings.appendChild(settings_button)//just appended everything
    let children = document.createElement('div');
    children.setAttribute('class', 'children'); 

    
    cBody.style = 'background-color:'+color+';height:80%;';
    cBody.setAttribute('class','mainFrame')
    cBody.appendChild(settings)//keep appending
    cBody.appendChild(children)

    return cBody //and here we returns
}

mainFrame =document.querySelector('body > #page > .mainFrame > .settings > .newChild'); //setting up the first main window
mainFrame.addEventListener('click', newChild);
