// import Cat from "./catModel.js";
// import store from "./store.js";


//       //NOTE  What needs to happen


//   // let _api = axios.create({
//   //   baseURL: '//bcw-sandbox.herokuapp.com/api/cats',
//   //   timeout: 3000
//   // })


// class CatService {

//   add(newCatData) {

//     event.preventDefault();

//     let newCat = new Cat(newCatData)

//     store.State.cats.push(newCat)
//     store.saveState()

//     // let cats = [newCat, ...store.State.cats]
//     // store.commit('cats', cats)
//   }


//   delete(catId) {

//     let index = store.State.cats.findIndex(cat => cat.id == catId);
//     store.State.cats.splice(index, 1)
//     store.State.cats = store.State.cats.filter(cat => cat.id != catId);
//     store.saveState()
//   }


//   pet(catId) {


//   }


//   dose(catId) {


//   }


// }


// const SERVICE = new CatService();
// export default SERVICE;