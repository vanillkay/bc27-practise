import voca from 'voca';


const input = document.querySelector('.form__field');
const divBtn = document.querySelector('.controls');

divBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
   if (event.target.tagName !== 'BUTTON' || input.value.length === 0) {
      return;
   }
   

   const resultSpan = event.target.nextElementSibling;
   const caseId = event.target.parentNode.id; // 'camelCase'
   

   const transformedText = voca[caseId](input.value);


   if (transformedText === resultSpan.textContent) {
    console.log(transformedText, resultSpan.textContent)
      return;
   }

   console.log('change text content to -> ', transformedText); 
   resultSpan.textContent = transformedText;

}