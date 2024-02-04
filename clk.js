setInterval(getCurrentTime, 1000);

function getCurrentTime(){
    let currentTime = new Date();
    let hourRatio = currentTime.getHours();
    let minuteRatio = currentTime.getMinutes();
    let secondRatio = currentTime.getSeconds();

    let hourHand = (30 * hourRatio) + (minuteRatio/2);
    let minuteHand = (6 * minuteRatio);
    let secondHand = (6 * secondRatio);

    hour.style.transform = `rotate(${hourHand}deg)`;
    minute.style.transform = `rotate(${minuteHand}deg)`;
    second.style.transform = `rotate(${secondHand}deg)`;

}