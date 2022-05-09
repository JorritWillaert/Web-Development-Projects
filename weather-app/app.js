window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = '';
            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                // Set DOM elements from the API
                temperatureDegree.textContent = temperature
                
            })
        })
    } else {
        h1.textContent = "This is not working"
    }
});
