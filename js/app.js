//*****************************
// Step 4. Create some data for our PWA to work with
//*****************************
const container = document.querySelector(".container")

// Our Data. In a real life app this would come from a database.
const coffees = [
    {name: "Perspiciatis", image: "images/coffee1.jpg"},
    {name: "Voluptatem", image: "images/coffee2.jpg"},
    {name: "Explicabo", image: "images/coffee3.jpg"},
    {name: "Rchitecto", image: "images/coffee4.jpg"},
    {name: " Beatae", image: "images/coffee5.jpg"},
    {name: " Vitae", image: "images/coffee6.jpg"},
    {name: "Inventore", image: "images/coffee7.jpg"},
    {name: "Veritatis", image: "images/coffee8.jpg"},
    {name: "Accusantium", image: "images/coffee9.jpg"},
]

//*****************************
// Step 5. Add functionality to show the data in the page
// IRL you might want to use a framework (Vue, React, Angular)
// for the templating stuff.
// This might look intimidating, but it is 'just JavaScript'.
//*****************************

// 5a. function that is called when the page is fully loaded
const showCoffees = () => {
    let output = ''
    coffees.forEach(
        // 5b. ES6-destructuring: destructure array data into separate variables
        ({name, image}) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} alt="image from coffee" />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
    )
    // 5c. add the composed output to the DOM
    container.innerHTML = output
}
// 5d. call the function
document.addEventListener("DOMContentLoaded", showCoffees)

//....See steps 6 - 10 in other files.

//*****************************
// Step 11. Register the service worker with this website
//*****************************
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("ALL GOOD: service worker registered"))
            .catch(err => console.log("ERROR: service worker not registered", err))
    })
}
