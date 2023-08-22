const joke = document.querySelector('#chiste')
const button = document.querySelector("#btn")

const changeJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        joke.innerHTML = data.joke
    })
    .catch((error) => {
        joke.textContent = 'Ha ocurrido un error, vuelva a generar otro chiste.'
        console.error(error)
    })
}

changeJoke();

button.addEventListener("click", () => changeJoke())