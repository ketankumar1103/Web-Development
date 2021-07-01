console.log(`Project - Calculator using HTML, CSS, JavaScript.`);

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (const item of buttons) {
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log(`Button text is:`, buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } 
        else if(buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}