function newChild(event) {
    let father = event.target.parentNode.parentNode.parentNode;
    let name = window.prompt('escolha um nome')
    let color = window.prompt('Escolha uma cor para o elemento filho')
    let child = factoryChild(name, color);
    console.log(father)
    father.querySelector('.children').appendChild(child);
}

function factoryChild(name, color) {
    let cBody = document.createElement('section');
    let settings = document.createElement('nav');
    settings.setAttribute('class','settings');
    let settings_name = document.createElement('h1');
    settings_name.innerText = name;
    settings.appendChild(settings_name);
    let settings_button = document.createElement('button');
    settings_button.setAttribute('class', 'newChild');
    settings_button.addEventListener('click', newChild);
    let settings_button_text = document.createElement('b');
    settings_button_text.innerText = 'Criar nova janela';
    settings_button.appendChild(settings_button_text);
    settings.appendChild(settings_button)
    let children = document.createElement('div');
    children.setAttribute('class', 'children');

    
    cBody.style = 'background-color:'+color+';height:80%;';
    cBody.setAttribute('class','mainFrame')
    cBody.appendChild(settings)
    cBody.appendChild(children)

    return cBody
}

mainFrame =document.querySelector('body > #page > .mainFrame > .settings > .newChild');
mainFrame.addEventListener('click', newChild);