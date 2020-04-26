console.log("Connected")


                      //NOTE Local Storage

// /**
//  * Stores the list of cats
//  * @type {Cat[]}
//  */
// let cats = [];

let state = {

  /** @type {Cat[]} */
  cats: [],
};


//NOTE this method will get the cats from local storage at the start of the app
function loadState() {

  console.log("Getting Cats from Local Storage")

  let data = JSON.parse(localStorage.getItem("MoodyKittens"));

  if (data) {

      data.cats = data.cats.map(c =>{

        let cat = new Cat(c);
        // cat.tasks = cat.tasks.map(t => new Task(t))
        return cat;

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

    console.log("updating cats in local storage")

    localStorage.setItem("MoodyKittens", JSON.stringify(state));
  }

}




/**
 * Draw all of the Cats to the Cats element
 */
function drawCats() {


}


                      //NOTE Adding a New Cat


    let cat = {
      
      id: generateId(),
      name: "",
      happiness: 5,
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
        },
        {
          img: "https://tse3.mm.bing.net/th?id=OIP.6kGbWS5V4oyckWLjU9kcmQHaE8&pid=Apihttps://tse1.mm.bing.net/th?id=OIP.9n0OFrF7q4p0tP5tCe_8uQHaER&pid=Api",
          mood: "Cat has ran away..."
        },
      ]
    }


    function intialDraw() {


      console.log("drawing inital mood")
      // let catNameElem = document.querySelector("#cat-name")
      let catMoodElem = document.getElementById("cat-mood")
      let catImageElem = document.getElementById("cat-image")
      // catNameElem.textContent = cat.name
      catMoodElem.innerText = cat.moods[0].mood
      catImageElem.src = cat.moods[0].img
    }


/**
 * Called when submitting the new cat Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the cats list.
 * Then reset the form
 */
function addCat(event) {
  
  event.preventDefault()
  console.log("adding a new cat")


    document.getElementById("cat-name").textContent = document.getElementById("nameInput").value;

    let catNameElem = document.getElementById("nameInput").value

    
  //   // document.querySelector("#cat-name")
  //   let catHappinessElem = document.getElementById("cat-happiness")
  //   let catImageElem = document.getElementById("cat-image")
  //   let catMoodElem = document.getElementById("cat-mood")

  //   catNameElem.textContent = cat.name
  //   catHappinessElem.innerText = cat.happiness.toString()
  //   catImageElem.src = cat.moods[0].img
  //   catMoodElem.innerText = cat.moods[0].mood

  // let newCat = {

  //   id
  // }
  intialDraw();
  // state.cats.push(newCat)
  // state.saveState()
  // FormData .reset()
}


                      //NOTE Cat by ID


/**
 * Find the Cat in the array by its id
 * @param {string} id
 * @return {Cat}
 */
function findCatById(id) {
  return state.cats.find(c => c.id == id);
}

/**
 * Find the cat in the array of cats
 * Generate a random Number
 * if the number is greater than .7
 * increase the cats affection
 * otherwise decrease the affection
 * save the cats
 * @ param {string} id
 */
function pet() {


}

/**
 * Find the cat in the array of cats
 * Set the cat's mood to tolerant
 * Set the cat's affection to 5
 * save the cats
 * @ param {string} id
 */
function dose() {


}

/**
 * Sets the cats mood based on its affection
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Cat} cat
 */
function setCatMood(cat) {


}


/**
 * Defines the Properties of a Cat
 * @ type def {{id: string, name: string, mood: string, affection: number}} Cat
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
