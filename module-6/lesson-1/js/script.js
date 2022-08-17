const elem = document.querySelector("#text")
// elem.style.color = "red"
// elem.style.fontSize = "30px"

const color = 'red';

elem.style.cssText = `
    color: ${color};
    font-size: 30px
`;

elem.textContent += " World"
 
const elem1 = document.createElement('p')
const img = document.createElement("img")
img.setAttribute("src", 'https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA=')
elem1.append(img, img)

elem.after(elem1) // 1 Visit to the DOM

const texxt = 'inside'
const spanEL = `<span> hello i am span ${texxt}</span>`

elem.insertAdjacentHTML('beforebegin', spanEL) // 2 Visit to the DOM