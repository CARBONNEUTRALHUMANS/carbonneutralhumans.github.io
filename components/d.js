const book = document.querySelector("#book");


  var currentUser = getData().filter((el) => {
    return el.firstName == user.value
  })

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
currentUser[0].trees.forEach((v,i,a) => {
      if (i != 0)  {
        const page = document.createElement("div")
      page.id = "p"+(i+2)
      page.classList.add("paper")
      page.innerHTML = /html/`
      <div class="front">
      <div id="f2" class="front-content">
        <h1>Day Planted: ${v.dayPlanted.toDateString()}</h1>
        <h1>Oxygen Produced: ${getAge(v.dayPlanted.toDateString())}</h1>
      </div>
      </div>
      <div class="back">
      <div id="b2" class="back-content">
        <h1>Back 2</h1>
      </div>
      </div>
      `
      book.appendChild(page)
      }
      else {
        /** @type {HTMLDivElement} */
        var p1 = window.p1
        p1.querySelector(".back").innerHTML = /html/`
     <div id="b2" class="back-content px-4 gap-4  ">

     <h2 class="text-2xl text-center">Account Details</h2><hr>
     <h2 class="text-2xl text-center mt-2">Name: ${currentUser[0].firstName + " "+ currentUser[0].lastName}</h2>
     <h2 class="text-2xl text-center">Age: ${getAge(currentUser[0].birthday)}</h2>
     <h2 class="text-2xl text-center">Gender: ${currentUser[0].gender}</h2>
     <hr>
     <h2 class="text-2xl text-center mt-2">Account Number: ${Math.floor(Math.random() * 10000000000)}</h2>
     <h2 class="text-2xl text-center mt-2">IFSC code: ${Math.floor(Math.random() * 10000000000)}</h2>
     <hr>
     <h2 class="text-2xl text-center mt-2">For Further Details please contact: <a href="#">  EnherBank.com</a></h2>

      </div>
        `
        if ((i + 1) === a.length){
          const page = document.createElement("div")
          page.id = "p"+2
          page.classList.add("paper")
          page.innerHTML = /html/ `
          <div class="front">
          <div id="f2" class="front-content justify-center">
            <img src="i.png" alt="">
          </div>
          </div>
          <div class="back">
          <div id="b2" class="back-content">
            <h1>Your Passbook</h1>
          </div>
          </div>
          `
          book.appendChild(page)
        }
      }    
})


    // References to DOM Elements
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    const papers = Array.from(document.querySelectorAll([id^="p"])).filter((v) => {
      return v.id != "prev-btn" && v.id != "pass"
    })
    
    // Event Listener
    prevBtn.addEventListener("click", goPrevPage);
    nextBtn.addEventListener("click", goNextPage);
    
    // Business Logic
    let currentLocation = 1;
    let numOfPapers = papers.length;
    let maxLocation = numOfPapers + 1;
    
    console.log(book)
    
    function openBook() {
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
    
    function closeBook(isAtBeginning) {
        if(isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }
        
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }
    function goNextPage() {
      if(currentLocation < maxLocation) {
          openBook();
          papers[currentLocation - 1].classList.add("flipped");
          papers[currentLocation - 1].style.zIndex = currentLocation;
          if (currentLocation === numOfPapers) {
              closeBook(false);
          }
          currentLocation++;
      }
    }
    
    function goPrevPage() {
      if(currentLocation > 1) {
          currentLocation--;
          papers[currentLocation - 1].classList.remove("flipped");
          papers[currentLocation - 1].style.zIndex = numOfPapers - currentLocation + 1;
          if (currentLocation === 1) {
              closeBook(true);
          } else {
              openBook();
          }
      }
    } 
  /** @type {HTMLDialogElement} */
