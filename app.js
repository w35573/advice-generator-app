const dice = document.querySelector('.dice');
const adviceUID = document.querySelector('.advice-uid');
const adviceText = document.querySelector('.advice-text');
const card = document.querySelector('.outer-container');

const ADVICE_SLIP_URL = 'https://api.adviceslip.com/advice';

// window.addEventListener('load', () => {
//     getAdvice();
// });

dice.addEventListener('click', () => {
    getAdvice();
});

async function getAdvice() {
    const response = await fetch(ADVICE_SLIP_URL);
    const data = await response.json();

    const id = data.slip.id;
    const advice = data.slip.advice;

    adviceUID.innerHTML = `ADVICE #${id}`;
    adviceText.innerHTML = `“${advice}”`
}
