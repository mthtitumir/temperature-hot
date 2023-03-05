// do not show api key on your js file
const API_KEY = 'cac9ee0dad64f62ac6b154af907189f2';
const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}



const displayTemp = data =>{
    console.log(data.weather[0].main);
    console.log( data.main.temp);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('wether-condition', data.weather[0].main);
    
}

const setInnerTextById = (id, text) =>{
    const element = document.getElementById(id);
    element.innerText = text;
}



document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText= city;
    
    loadTemp(city);
})
// loadTemp('dhaka');