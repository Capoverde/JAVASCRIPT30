const secondHand = document.querySelector('.hand-second');
const minsHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');
const digitNums = document.querySelector('.digit-nums');

function setDate() {
    const now = new Date();
    // SEKUNDY
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // MINUTY
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;


    // Godziny
    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    minsHand.style.transform = `rotate(${minsDegrees}deg)`
    console.log(mins);

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    console.log(hours);

    digitNums.innerHTML = `${hours} : ${mins} : ${seconds}`;

}

setInterval(setDate, 1000);