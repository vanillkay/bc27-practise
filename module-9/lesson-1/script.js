// 1) Потрібно створити інтервал, який виводить у консоль кількість секунд, що минули з моменту запуску програми.
//
// "Минуло: 1 сек."
//
// "Минуло: 2 сек." ..... і так далі
// let counter = 0;
// const intervalId = setInterval(() => {
//     counter += 1
//     console.log(`Минуло: ${counter} сек.`)
// }, 1000)
//--------------------

// 2) Допишіть програму з першого завдання так, щоб вона зупинялася при досягненні 5 секунд
// let counter = 0;
// const intervalId = setInterval(() => {
//     counter += 1
//     console.log(`Минуло: ${counter} сек.`)
//     if (counter >= 5) {
//         clearInterval(intervalId);
//     }
// }, 1000)
//--------------------

// 3) Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з from і закінчуючи to.
// function printNumbers(from, to){    
//     let counter = from;
    
//      const intervalId = setInterval(() => {
//         console.log(counter);
//         counter +=1
//         if(counter > to){
//             clearInterval(intervalId);
//         }

//     }, 1000);

// }

// function printNumbersV2(from, to){
//     let counter = from;

//     setTimeout(function go(){
//         console.log(counter);
//         counter +=1;
//         if(counter <= to){
//             setTimeout(go, 1000)
//         }
//     }, 1000)

// }


// printNumbersV2(10,16);

//--------------------

// 4) Напишіть функію яка буде зчитувати з інпута введену дату, 
// та виводити на сторінку різницю секунд хвилин годин днів віддосно сьогоднішної дати

// const inputedDate = document.querySelector("input");
// const root = document.querySelector('#root');
// // console.log(new Date('asdasdfafaf'))
// inputedDate.addEventListener('change', onInputchange);

// function onInputchange(event) {
//     // console.log(event);
//     // console.log(event.target.value);
//     const userDate = new Date(event.target.value);
//     const delta = userDate.getTime() - Date.now();
    
//     const result = convertMs(delta);
//     // console.log(result);
//     root.innerHTML = createMarkup(result);
// }

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }


// function createMarkup({ days, hours, minutes, seconds }) {
//     return `<p>Days ${days}, Hours ${hours}, Minutes ${minutes}, Seconds ${seconds}</p>`
// }


//--------------------

// 5) Реалізувати програму, що показує циклічно різні картинки.

// Технічні вимоги:
//
// При запуску програми на екрані має відображатись перша картинка.
// Через 5 секунд замість неї має бути показано друге зображення.
// Ще через 5 секунд – третя.
// Ще за 5 секунд - четверта.
// Після того, як з'являться всі картинки - цей цикл має розпочатися наново.
// При запуску програми десь на екрані з'явиться кнопка з написом Stop.
// Після натискання на кнопку Stop цикл завершується, на екрані залишається показаною та картинка, 
//      яка була там при натисканні кнопки.
// Поруч із кнопкою Stop має бути кнопка Restart показ, 
//      при натисканні якої цикл продовжується з тієї картинки, яка в даний момент показана на екрані.
// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

