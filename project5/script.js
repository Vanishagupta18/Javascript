let intervalId; // store the interval ID


const RandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(RandomColor());
document.querySelector("#start").addEventListener("click", () => {
   intervalId = setInterval(() => {
        document.body.style.backgroundColor = RandomColor();
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId);
    console.log("Stopped");
});