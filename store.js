// import Cat from "./catModel.js";


//       //NOTE Local Storage


// let state = {

//   /** @type {Cat[]} */
//   cats: [],
// };


// //NOTE this method will get the lists from local storage at the start of the app
// function loadState() {

//   let data = JSON.parse(localStorage.getItem("MoodyKittens"));

//   if (data) {

//       data.cats = data.cats.map(c =>{

//         let cat = new Cat(c);
//         // cat.tasks = cat.tasks.map(t => new Task(t))
//         return cat;

//       });

//     state = data;
//   }

// }

// loadState();

// class Store {
//   /**
//    * Provides access to application state data
//    */
//   get State() {

//     return state;
//   }

//   //NOTE call saveState everytime you change the state in any way
//   saveState() {

//     localStorage.setItem("MoodyKittens", JSON.stringify(state));
//   }

// }

// const store = new Store();
// export default store;