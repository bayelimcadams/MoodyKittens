// import CatService from "./catService.js";
// import store from './store.js';


//       //NOTE  Controls what is displayed and what changes


//   // function intialDraw() {
  
//   //   console.log("drawing inital mood")
//   //   // let catNameElem = document.querySelector("#cat-name")
//   //   let catMoodElem = document.getElementById("cat-mood")
//   //   let catImageElem = document.getElementById("cat-image")
//   //   catImageElem.src = theCat.moods[0].img
//   //   // catNameElem.textContent = cat.name
//   //   catMoodElem.innerText = theCat.moods[0].mood
//   // }

//   function drawCats() {

//     console.log("drawing stored cats")

//     let template = ''
//     let cats = store.State.cats

//     cats.forEach(cat => template += cat.Template)

//     document.getElementById("cats").innerHTML = template
//   }


//   function drawHappiness() {
  
//     let catHappinessCountElem = document.getElementById("cat-happiness")
//     // @ts-ignore
//     catHappinessCountElem.innerText = cat.happinessCount.toString()
//   }


//   function drawMood() {
  
//     console.log("drawing cat mood")
  
//     let catImageElem = document.getElementById("cat-image")
//     let catMoodElem = document.getElementById("cat-mood")
//     let catMood = randomizeMood()
  
//     catMoodElem.innerText = catMood.mood
//     catImageElem.src = catMood.img
//   }


//   function randomizeMood() {
  
//     let moodIndex = Math.floor(Math.random() * theCat.moods.length)
//     let mood = theCat.moods[moodIndex]
//     return mood
//   }
  



// export default class CatController {
//   constructor() {

//     //NOTE: After the store loads, we can automatically call to draw the Cats.
//     drawCats();
//   }


//   add(event) {

//     event.preventDefault();

//     console.log("adding new cat")

//     let formData = document.getElementById("name").value;

//     // document.getElementById("cat-name").textContent =
//     // .value;

//     let newCat = {
      
//       name: formData,

//       happinessCount: 5,
//       dosed: false,
//       moods: [
//         {
//           img: "https://tse3.mm.bing.net/th?id=OIP.QLtE6OCwp8Kcch7i59Fh2gHaEK&pid=Api",
//           mood: "Happy"
//         },
//         {
//           img: "https://tse2.mm.bing.net/th?id=OIP.fedjzXLMzRVxviwIYhQebAHaFY&pid=Api",
//           mood: "Annoyed"
//         },
//         {
//           img: "https://tse3.mm.bing.net/th?id=OIP.6kGbWS5V4oyckWLjU9kcmQHaE8&pid=Api",
//           mood: "Mad"
//         },
//         {
//           img: "https://tse2.mm.bing.net/th?id=OIP.iFdFNkirx0PqGqgPE-PvHQHaEK&pid=Api",
//           mood: "Lethal"
//         },
//         {
//           img: "https://tse3.mm.bing.net/th?id=OIP.6kGbWS5V4oyckWLjU9kcmQHaE8&pid=Apihttps://tse1.mm.bing.net/th?id=OIP.9n0OFrF7q4p0tP5tCe_8uQHaER&pid=Api",
//           mood: "Cat has ran away..."
//         },
//       ]
      

//     }

//     CatService.add(newCat)
//     // $('#cats')

//     console.log(newCat.name)

//     drawCats();
//     store.saveState();
//     formData.reset();

//   }

//   delete(catId) {

//     event.preventDefault();
//     console.log("deleting a cat")

//     let confirmed = window.confirm("Are you sure you want to delete this cat?")
//     if(confirmed) {

//       CatService.delete(catId)
//       store.saveState();
//       drawCats();
//     }
//   }



//   pet(catId) {

//     event.preventDefault();
//     console.log("Petting the cat")

//     CatService.pet(catId)
//     drawHappiness();
  
//       if (theCat.happinessCount > 5) {
  
//         drawMood();
//       }
  
//       if (theCat.happinessCount == 5) {
  
//         return theCat.moods[1]
//         } else if (theCat.happinessCount == 4 || theCat.happinessCount == 3) {
  
//           return theCat.moods[2]
//       }
  
//       if (theCat.happinessCount == 2 || theCat.happinessCount == 1) {
  
//         return theCat.moods[3]
//         } else if (theCat.happinessCount == 0) {
          
//           return theCat.moods[4]
//       }
  
      
//       if (theCat.moods[0]) {
  
//         theCat.happinessCount++
//       }
  
//       if (theCat.moods[2] || theCat.moods[3]) {
  
//         theCat.happinessCount--
//       }
  
//       console.log(theCat.happinessCount)
//   }
  
  
//   dose(catId) {

//     console.log("Dosing the cat")

//     CatService.dose(catId)
//     drawHappiness();

//     if (theCat.dosed) {

//       return
//     }

//     let interval = setInterval(drawMood, 1000)
//     setTimeout( function() { theCat.dosed = false; clearInterval(interval) }, 10000)
//     theCat.dosed = true
//   }
  

// }
