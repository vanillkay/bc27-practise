

// 1. Реалізувати перемикання вкладок (таби) на чистому Javascript.
//
// Технічні вимоги:
//
// 1) Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки.
//      При цьому решта тексту має бути прихована. У коментарях зазначено, який текст має відображатися для якоїсь вкладки.

// 2) Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

// 3) Потрібно передбачити, що текст на вкладках може змінюватися і вкладки можуть додаватися і видалятися.
//      При цьому потрібно, щоб функція, написана в джаваскрипті, через такі виправлення не переставала працювати.

//-------------
const listTabsRef = document.querySelector(".tabs");
// const liRef = [...listTabsRef.children]
// const listTabsContentRef = [...document.querySelectorAll(".tabs-content > li")]

listTabsRef.addEventListener("click",onTabClick)



function onTabClick({ target }) {

    if (!target.classList.contains("tabs-title")) { return }

    const liActiveRef = listTabsRef.querySelector(".active")
    

    if (target.textContent === liActiveRef.textContent) {return }
    // console.log(liActiveRef );
   

    liActiveRef.classList.remove("active")
    target.classList.add("active")

    // liRef.forEach((element) => {
    //     if (target.textContent === element.textContent) {
    //         target.classList.add("active")
    //     }
    //     else if (element.classList.contains("active")) { 
    //         element.classList.remove("active")
    //     }
    // })
  
    const oldTabData = document.querySelector('.tabs-content > li:not(.hidden)');
    const newTabData = document.querySelector(`[data-tabname=${target.textContent}]`);

    oldTabData.classList.add('hidden')
    newTabData.classList.remove("hidden")

    // listTabsContentRef.forEach(element => {
    //     if (element.dataset.tabname === target.textContent) {
    //         element.classList.remove("hidden")
    //     }
    //          else if (!element.classList.contains("hidden")) { 
    //         element.classList.add("hidden")
    //     }
        
    // })
    
}



// 2. Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//
// Технічні вимоги:
//
// 1) При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//    Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинна бути створений і додана на сторінку за допомогою Javascript.

//  2) При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола.
//      При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл випадкового кольору.
//      При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// 3) У вас може виникнути бажання поставити обробник події на кожне коло для його зникнення.
//    Це неефективно, так не треба робити. На всю сторінку має бути лише один обробник подій, який це робитиме.

const button = document.querySelector('button');
const div = document.querySelector('#root');
const mainContent = document.querySelector('#circle-task')

button.addEventListener('click', onButtonClick, { once: true });

const input = document.createElement('input');

function onButtonClick() {    
    input.placeholder = 'Enter the radius';
    input.addEventListener('input', onInputValid);
    mainContent.append(input);
    button.disabled = true;
    

}

function onInputValid({target}) {
    const parsed = Number(target.value)
   
    const drawBtn = document.querySelector('.draw');

    if (isNaN(parsed) || parsed === 0) {
        if(drawBtn){
            drawBtn.remove();
        }
        return;
    }

    if(drawBtn){
        return
    }

    const createButton = document.createElement('button')
    createButton.classList.add('draw');
    createButton.addEventListener('click', onCreateCircle);
    createButton.textContent = 'DRAW';
    mainContent.append(createButton);
}

const createCircle = (value) => {
    const divCircle = document.createElement('div');
        divCircle.dataset.type = 'circle';
        divCircle.style.width = `${value * 2}px`;
        divCircle.style.height = `${value * 2}px`;
        divCircle.style.borderRadius = '50%';
        divCircle.style.border = '3px solid white';
        divCircle.style.backgroundColor = getRandomHexColor();
        return divCircle;
}

function onRemoveCircle({ target }){
    if(target.dataset.type === undefined){
        return
    }
    if(!target.classList.contains('hidden-circle')){
        target.style.border = `3px solid ${target.style.backgroundColor}`;
        target.textContent = 'it'
    }else{
        target.style.border = '3px solid white';
        target.textContent = 'pop'
    }
    target.classList.toggle('hidden-circle');
}

div.addEventListener('click', onRemoveCircle)

console.log(anime)

setTimeout(() => {
    
    anime({
        targets: 'button',
        translateX: '500',
        translateY: 20,
        scale: 2,
        rotate: '1turn',
        opacity: 1
      });

}, 1000)


function onCreateCircle() {

    const circles = new Array(100)
        .fill()
        .reduce((acum) => [...acum, createCircle(Number(input.value))], [])

    // while(circles.length <= 100){
    //     const divCircle = document.createElement('div');
    //     divCircle.style.width = `${value * 2}px`;
    //     divCircle.style.height = `${value * 2}px`;
    //     divCircle.style.borderRadius = '50%';
    //     divCircle.style.backgroundColor = getRandomHexColor();
    //     circles.push(divCircle)
    // }

    // for (let i = 0; i < 100; i += 1) {
    //     const divCircle = document.createElement('div');
    //     divCircle.style.width = `${value * 2}px`;
    //     divCircle.style.height = `${value * 2}px`;
    //     divCircle.style.borderRadius = '50%';
    //     divCircle.style.backgroundColor = getRandomHexColor();
    //     circles.push(divCircle);
    // }

    div.append(...circles);
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
