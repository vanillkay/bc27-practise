// Створити таблицю, при натисканні на комірки якої вони змінюватимуть колір.
//
// Технічні вимоги:
//
//  1) Створити поле 30*30 із білих клітинок з допомогою елемента <table>.
//  2) При натисканні на білу клітинку вона повинна змінювати колір на чорний. При натисканні на чорну клітинку вона повинна змінювати колір назад на білий.
//  3) Сама таблиця повинна бути не вставлена у вихідний HTML-код, а згенерована і додана в DOM сторінки за допомогою Javascript.
//  4) При натисканні на будь-яке місце документа поза таблицею, всі кольори клітин повинні змінитися на протилежні (підказка: необхідно поставити Event Listener на <body>).
//  5) Щоб змінити кольори всіх клітин одночасно, не потрібно обходити їх у циклі. Якщо помічати натиснуті клітини певним класом, то перефарбувати їх всі одночасно можна однією дією - змінивши клас на самій таблиці.

const div = document.querySelector('#root')

const table = document.createElement("table")


for (let i = 0; i < 30; i += 1) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 30; j += 1) {
         const tableData = document.createElement('td')
          tableData.classList.add('cell')
          tableRow.append(tableData)       
    }
    table.append(tableRow)
}

div.insertAdjacentElement("afterbegin", table)

function onTdClick(e) {
    if (e.target.tagName !== 'TD') {
        return
    }
    e.target.classList.toggle('black')
}

const tdList = document.getElementsByTagName('td')

console.log(tdList.forEach)

table.addEventListener('click', onTdClick)

function onBodyClick(e) {
     if (e.target.id !== 'root') {
        return
     }
    
    table.classList.toggle('reverse')
}

document.body.addEventListener('click', onBodyClick)