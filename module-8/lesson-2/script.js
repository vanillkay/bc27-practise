import storegeAPI from './storage.js';
const inputRef = document.querySelector('#slider');

inputRef.addEventListener('change', onInput)

// light - 'theme-light'
// dark - 'theme-dark'

const LOCAL_KEY = 'themColor';

function onInput() {
    const newThem = !inputRef.checked ? 'theme-dark' : 'theme-light';
    storegeAPI.save(LOCAL_KEY, { theme: newThem })
    
    document.body.className = newThem;

    // localStorage.setItem(LOCAL_KEY, newThem);
    
}

const isSavedThemeValid = (saveTheme) => saveTheme && saveTheme.theme

const setSavedTheme = (savedTheme) => {
    document.body.className = savedTheme;
        if(savedTheme === 'theme-dark') {
            inputRef.checked = false;
        }
}

function init(){
    const saveThem = storegeAPI.load(LOCAL_KEY);

    // const saveThem = localStorage.getItem(LOCAL_KEY);

    if(isSavedThemeValid(saveThem)) {
        setSavedTheme(saveThem.theme)
    }

}

// (function (){
//     const saveThem = storegeAPI.load(LOCAL_KEY);

//     // const saveThem = localStorage.getItem(LOCAL_KEY);

//     if(saveThem && saveThem.theme) {
//         const theme = saveThem.theme;
//         document.body.className = theme;
//         if(theme === 'theme-dark') {
//             inputRef.checked = false;
//         }
//     }

// })()

init();


//IIFE