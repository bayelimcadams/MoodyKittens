

/**
 * Stores the list of kittens
 * @type {Kitten[]}
 */
let kittens = [];
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {

  event.preventDefault()
  console.log("drawing template")

  document.getElementById("cat-name").textContent =
  document.getElementById("catName").value;
  
//   return /*html*/`
//   <div class="container-fluid main">
//   <div class="row">
//     <div class="col-2 cat shadow mx-auto text-center">
//       <img class="img-fluid" id="cat-image" src="cat.jpeg" alt="Cat">
//       <p class="cat-name"><b>Name: </b><span id="cat-name">--</span></p>
//       <p class="cat-mood"><b>Mood: </b><span id="cat-mood">--</span></p>
//       <p class="cat-happiness">Happiness: <span id="cat-happiness">0</span></p>
//       <button class="btn-pet btn-sm btn-info" onclick="petCat()">Pet <span id="cat-name">--</span></button>
//       <button class="btn-dose btn-sm btn-danger" onclick="giveCatnip()">Give Catnip</button>
//     </div>
//   </div>
// </div>
//   `

}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens() {}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */
function findKittenById(id) {
  return kittens.find(k => k.id == id);
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .7
 * increase the kittens affection
 * otherwise decrease the affection
 * save the kittens
 * @param {string} id
 */
function pet(id) {}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * save the kittens
 * @param {string} id
 */
function catnip(id) {}

/**
 * Sets the kittens mood based on its affection
NOTE
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Kitten} kitten
 */
function setKittenMood(kitten) {}

/**
 * Defines the Properties of a Kitten
 * @typedef {{id: string, name: string, mood: string, affection: number}} Kitten
 */

/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return (
    Math.floor(Math.random() * 10000000) +
    "-" +
    Math.floor(Math.random() * 10000000)
  );
}





let cat = {
  // name: "Mr. Snibbley",
  happinessCount: 0,
  dosed: false,
  moods: [
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.QLtE6OCwp8Kcch7i59Fh2gHaEK&pid=Api",
      mood: "Happy"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.fedjzXLMzRVxviwIYhQebAHaFY&pid=Api",
      mood: "Annoyed"
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.6kGbWS5V4oyckWLjU9kcmQHaE8&pid=Api",
      mood: "Mad"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.iFdFNkirx0PqGqgPE-PvHQHaEK&pid=Api",
      mood: "Lethal"
    }
  ]
}


function getStarted() {
  document.getElementById("welcome").remove();
  drawKittens();
}




function petCat() {

  console.log("Petting the cat")
  cat.happinessCount++
  console.log(cat.happinessCount)
  draw()

  if (cat.happinessCount > 5) {
    drawCatMood()
  }
  if (cat.happinessCount == 5) {
    return cat.moods[1]
  } else if (cat.happinessCount == 4 || cat.happinessCount == 3) {
    return cat.moods[2]
  }
  if (cat.happinessCount == 2 || cat.happinessCount == 1) {
    return cat.moods[3]
  } else if (cat.happinessCount == 0) {
    return cat.moods[4]
  }


}

function randomizeCatMood() {

  let moodIndex = Math.floor(Math.random() * cat.moods.length)
  let mood = cat.moods[moodIndex]
  return mood
}

function drawCatMood() {

  console.log("drawing cat mood")
  let catImageElem = document.getElementById("cat-image")
  let catMoodElem = document.getElementById("cat-mood")
  let catMood = randomizeCatMood()

  catMoodElem.innerText = catMood.mood
  catImageElem.src = catMood.img

  if (cat.moods[0]) {
    cat.happinessCount++
  }
  if (cat.moods[2]) {
    cat.happinessCount--
  }
  // if (cat.moods[3]) {
  //   cat.happinessCount-2
  // }
}

function intialDraw() {

  console.log("drawing inital mood")
  // let catNameElem = document.querySelector("#cat-name")
  let catMoodElem = document.getElementById("cat-mood")
  let catImageElem = document.getElementById("cat-image")
  catImageElem.src = cat.moods[0].img
  // catNameElem.textContent = cat.name
  catMoodElem.innerText = cat.moods[0].mood
}

function giveCatnip() {
  if (cat.dosed) {
    return
  }
  let interval = setInterval(drawCatMood, 1000)
  setTimeout(function() { cat.dosed = false; clearInterval(interval) }, 10000)
  cat.dosed = true
}



// update happinessCount on the page dynamically with each button click
function draw() {

  let catHappinessCountElem = document.getElementById("cat-happiness")
  // @ts-ignore
  catHappinessCountElem.innerText = cat.happinessCount.toString()
}


intialDraw();