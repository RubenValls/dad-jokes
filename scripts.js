const chiste = document.querySelector('#chiste')

fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=single')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        chiste.innerHTML = data.joke
    })
    .catch((error) => {
        chiste.textContent = 'Ha ocurrido un error, vuelva a generar otro chiste.'
        console.error(error)
    })