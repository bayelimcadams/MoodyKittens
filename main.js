console.log("Connected")

function petCat() {
  // console.log("Petting the cat")
  cat.petCount++
  // console.log(cat.petCount)
  draw()
  if (cat.petCount > 5) {
    drawCatMood()
  }
}

function randomizeCatMood() {
  let moodIndex = Math.floor(Math.random() * cat.moods.length)
  let mood = cat.moods[moodIndex]
  return mood
}

function drawCatMood() {
  let catImageElem = document.getElementById("cat-image")
  let catStatusElem = document.getElementById("cat-status")
  let catMood = randomizeCatMood()

  catStatusElem.innerText = catMood.status
  catImageElem.src = catMood.img
}

function intialDraw() {
  let catNameElem = document.querySelector("#cat-name")
  let catStatusElem = document.getElementById("cat-status")
  let catImageElem = document.getElementById("cat-image")
  catImageElem.src = cat.moods[0].img
  catNameElem.textContent = cat.name
  catStatusElem.innerText = cat.moods[0].status

}

function giveCatnip() {
  if (cat.dosed) {
    return
  }
  let interval = setInterval(drawCatMood, 1000)
  setTimeout(function () { cat.dosed = false; clearInterval(interval) }, 10000)
  cat.dosed = true
}



// update petcount on the page dynamically with each button click
function draw() {
  let catPetCountElem = document.getElementById("cat-pet-count")

  // @ts-ignore
  catPetCountElem.innerText = cat.petCount.toString()
}


intialDraw()