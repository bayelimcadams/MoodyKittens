// import { generateId } from "./utils.js";


//       //NOTE  New Cat Data


// export default class Cat {
//   constructor(data) {

//     this.name = data.name;
//     // this.mood = data.mood;
//     this.id = data.id || generateId();

//         //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
//   }


// get Template() {

//     return /*html*/`

//       <div class="col-2 cat shadow mx-auto text-center">

//         <button type="button" class="w-100 text-right close" onclick="catController.delete('${this.id}')">
//         <span>&times;</span>
//         </button>
//         <img class="img-fluid" id="cat-image" src="cat.jpeg" alt="Cat">
//         <p class="cat-name"><b>Name: </b><span id="cat-name">${this.name}</span></p>
//         <p class="cat-mood"><b>Mood: </b><span id="cat-mood">--</span></p>
//         <p class="cat-happiness">Happiness: <span id="cat-happiness">0</span></p>
//         <button class="btn-pet btn-sm btn-info" onclick="catController.pet()">Pet <span id="cat-name">${this.name}</span></button>
//         <button class="btn-dose btn-sm btn-danger" onclick="catController.dose()">Give Catnip</button>

//       </div>

//       <style>

//         .cat {
//           outline: solid white 3px;
//           background-color: rgba(255, 255, 255, 0.575);
//           margin-top: 35px;
//           padding-top: 45px;
//           padding-bottom: 40px;
//         }
//         .cat-name {
//           font-size: larger;
//           padding-top: 20px;
//           color: black;
//         }
//         .cat-mood {
//           font-size: larger;
//           color: black;
//         }
//         .cat-happiness {
//           font-size: larger;
//           color: black;
//           text-decoration: underline black;
//         }
//         .btn-pet {
//           color: white;
//           font-size: 110%;
//           margin-right: 15px;
//         }
//         .btn-dose {
//           font-size: 110%;
//           margin-top: 15px;
//         }

//       </style>
//     `
//   }


// }

//       // <div style="margin-left: 20px; margin-right: 20px;"
//       // class="col-3 border border-warning">
//       // <button type="button" class="w-100 text-right close" onclick="app.listController.delete('${this.id}')">
//       // <span>&times;</span>
//       // </button>
//       //   <h3 class="text-black">${this.listName}</h3>
//       //   <h5 style="padding-left:10px;" class="w-100 text-left"><i>Tasks:</i></h5>
//       //   <form onsubmit="app.listController.createTask(event, '${this.id}')">
//       //     <div class="form-group">
//       //       <input type="text" name="taskName" class="form-control" placeholder="Add new task...">
//       //       <button type="submit" class="w-25 btn btn-warning btn-sm"><b>+</b></button>
//       //     </div>
//       //   </form>
//       // </div>