// do not show api key on your js file
const API_KEY = 'cac9ee0dad64f62ac6b154af907189f2';
const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
    console.log(url);
}

const displayTemp = data =>{
    const temperature = document.getElementById('temp');
    temperature.innerText = data.main.temp;

    
}
loadTemp('dhaka');