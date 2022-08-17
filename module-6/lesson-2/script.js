// 1. Зробіть так щоб при кліку на кнопку ховався текст та додайте кнопку для повторного відображення цього тексту

// const controlSettings = document.querySelector(".controls");
// const switchTextBtn = controlSettings.firstElementChild;

// const showTextBtn = document.createElement("button");
// showTextBtn.textContent = "show text";
// controlSettings.append(showTextBtn);

// const textToShow = document.querySelector("#text");
// textToShow.style.opacity = "1";

// switchTextBtn.addEventListener("click", function () {
//     if (textToShow.style.opacity === "1") {
//         this.textContent = "Show Text";
//         textToShow.style.opacity = "0"
//         return;
//     }
//     this.textContent = "Hide Text";
//     textToShow.style.opacity = "1";
// });

// hideTextBtn.addEventListener("click", () => {
//     textToShow.style.opacity = "0";
// });

// showTextBtn.addEventListener("click", () => {
//     textToShow.style.opacity = "1";
// });

// 2. Зробити логіку показу поп апу через натискання на кнопку. При кліку на ESC закривати модалку
// Слухач для закриття по апу має бути тільки тоді коли він відкритий і прибиратись коли поп ап закритий

// const openModalBtn = document.querySelector('button');
// const popup = document.querySelector('.popup')



// openModalBtn.addEventListener('click', onOpenModal);

// function onOpenModal() {
//     popup.classList.add('popup_open')
//     document.addEventListener('keydown', onCloseModal);
// }



// function onCloseModal(event) {
// console.log('listen...')
//     const ESC_KEY_CODE = 'Escape';
//     if (event.key === ESC_KEY_CODE) {
//         popup.classList.remove('popup_open');
//         document.removeEventListener('keydown', onCloseModal);
//     }
// }



//  3. Створити на сторінці 16 прямокутників з контентом ...
//  При кліці на кожен прямокутник записувати в його контент його порядковий номер

// const boxHolder = document.querySelector('#root')

// new Array(16).fill(document.createElement("div"))

// for (let i = 0; i < 16; i+= 1) {
//         let box = document.createElement("div");
//         box.classList.add('item')
//         box.textContent = '...'
//         box.dataset.action = i + 1
//         boxHolder.append(box)
// }

// const onBoxClick = (event) => {

    
//     if (event.target.dataset.action !== undefined) {
//         const boxNumber = Number(event.target.textContent)
        
        //   if (!isNaN(boxNumber)) {
        //       event.target.textContent = boxNumber + 1
        //       return
        //   }

//         event.target.textContent = !isNaN(boxNumber) ? boxNumber + 1 : event.target.dataset.action
//     }
// }

// boxHolder.addEventListener('click', onBoxClick)

// const boxEl = document.querySelectorAll('.item')

// boxEl.forEach((el, index) => {
//     el.addEventListener('click', () => {
//         el.textContent = index +1
//     })
// })



// 4. Зробити логіку обрахування квадрату числа яке вводиться в інпут. Результат записати в span.result > span.square

const numberInput = document.querySelector('input');
const resultBtn = document.querySelector('button');
const incertSpan = document.querySelector('.square');
const incertDiv = document.querySelector('.result');

resultBtn.addEventListener('click', () => {
    const num = Number(numberInput.value);
    
    if (isNaN(num)){
        return;
    }
    incertDiv.classList.add('result_ready');
    incertSpan.textContent = num * num;
})