
                      NOTE LocalStorage



let state = {
  /** @type {Cat[]} */
  cats: [],
};


//NOTE this method will get the lists from local storage at the start of the app
function loadState() {

  let data = JSON.parse(localStorage.getItem("MoodyKittens"));

  if (data) {

      data.lists = data.lists.map(l =>{
      let list = new List(l);
      list.tasks = list.tasks.map(t => new Task(t))
      return list;

    });

    state = data;
  }
}
loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("Checkpoint-3", JSON.stringify(state));
  }
}





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

  cats.push(newCat)
  saveState()

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




                      NOTE New Cat Info

// function getStarted() {
//   document.getElementById("welcome").remove();
//   drawKittens();
// }

let myNewCatInfo = {
  
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