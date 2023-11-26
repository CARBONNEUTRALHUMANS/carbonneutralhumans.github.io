<script setup lang="ts">
    import { type Ref,ref, computed, onMounted } from 'vue';
import { data, type User } from './db';
    const currentUser = ref<User>()
    const currentPage = ref(1);
    let maxLocation = ref(5);
    const papers = ref<HTMLDivElement[]>(null)
    const book = ref<HTMLDivElement>()
    const previousButton = ref<HTMLButtonElement>()
    const nextButton = ref<HTMLButtonElement>()
    const totalOxygen = ref<number>(0)
    const electricBill = ref<string>("0")
    const gasBill = ref<string>("0")
    const petrolBill = ref<string>("0")
    const sum = computed(() => {
            return (currentUser.value.age * ((+electricBill.value * 105) + (+gasBill.value * 105) + (+petrolBill.value * 113)))/1000 
    })

    onMounted(() => {
        let username = localStorage.getItem("user");
       currentUser.value = data.filter((el) => {
            return el.firstName == username
        })[0]
       papers.value = Array.from(book.value.querySelectorAll("[id^='p']") as NodeListOf<HTMLDivElement>) as HTMLDivElement[]
       currentUser.value.trees.forEach((tree) => {
            totalOxygen.value += (getAge(tree.dayPlanted) * 100) + (getAge(tree.dayPlanted) * 5)
       })
       console.log(papers.value)
    })

    
    const openBook = () => {
        book.value.style.transform = "translateX(50%)";
        previousButton.value.style.transform = "translateX(-180px)";
        nextButton.value.style.transform = "translateX(180px)";
    }

    const closeBook = (isAtStart: boolean) => {
        if(isAtStart) {
            book.value.style.transform = "translateX(0%)";
        } else {
            book.value.style.transform = "translateX(100%)";
        }
        
        previousButton.value.style.transform = "translateX(0px)";
        nextButton.value.style.transform = "translateX(0px)";
    }

    const goNextPage = () => {
        if (currentPage.value < maxLocation.value){
            switch (currentPage.value){
                case 1:
                    openBook();
                    papers.value[0].classList.add("flipped");
                    papers.value[0].style.zIndex = "0";
                    break;
                case 2:
                    papers.value[1].classList.add("flipped");
                        papers.value[1].style.zIndex = "1";
                    break;
                case 3:
                    papers.value[2].classList.add("flipped");
                    papers.value[2].style.zIndex = "2";
                    papers.value[3].style.zIndex = "3";

                    break;
                case 4:
                    papers.value[3].classList.add("flipped");
                    papers.value[3].style.zIndex = "3";
                    closeBook(false)

                    break;
                case 5:
                    papers.value[3].classList.add("flipped");
                    papers.value[3].style.zIndex = "6";
                    break;
                default:
                    throw new Error("unkown state");
            }
        }
        currentPage.value++
    }

    const goPreviousPage =() => {
        if(currentPage.value > 1) {
            switch(currentPage.value) {
                case 2:
                    closeBook(true);
                    papers.value[0].classList.remove("flipped");
                    papers.value[0].style.zIndex = "3";
                    break;
                case 3:
                    papers.value[1].classList.remove("flipped");
                    papers.value[1].style.zIndex = "2";
                    break;
                case 4:
                    papers.value[2].classList.remove("flipped");
                    papers.value[2].style.zIndex = "1";
                    papers.value[3].style.zIndex = "0";

                    break;
                case 5:
                    openBook()
                    papers.value[3].classList.remove("flipped");
                    papers.value[3].style.zIndex = "0";
                    break;
                default:
                    throw new Error("unkown state");
            }
    
            currentPage.value--;
        }
    }
</script>

<template>
        <div v-if="currentUser" class="body font-sans!">

        <button @click="goPreviousPage" ref="previousButton" id="prev-btn">
            Previous
    </button>
    
    
    <div ref="book" id="book" class="book">
        <div id="p1" class="paper ">
            <div class="front">
                <div id="f1" class="front-content font-sans!   flex justify-center items-center  bg-#607144! text-white">
                    <img src='/b.jpg'/>
                </div>
            </div>
            <div class="back">
                <div id="b1" class="back-content text-center gap-3 px-4 box-border py-5">
                <h1 style="font-family: 'harlouda';">Account Details</h1>
                <hr />
                <h2 class="text-2xl">Name: {{currentUser.firstName}} {currentUser.value ? currentUser.value.lastName : ""} </h2>
                <h2 class="text-2xl">Age: {currentUser.value ? currentUser.value.age : ""} </h2>
                <h2 class="text-2xl">Gender: {currentUser.value ? currentUser.value.gender : ""} </h2>
                <hr />
                <h2 class="text-2xl">Account Number: {Math.floor(Math.random() * 10 ** 12)} </h2>
                <h2 class="text-2xl">Aadhar Number: {Math.floor(Math.random() * 10 ** 12)} </h2>
                <hr />
                <h2 class="text-2xl bg-orange-200 p-2 box-border text-center mt-2">For Further Details please contact: <a href="#">  EnherBank.com</a></h2>

            </div>
        </div>
        
        </div>
        <div id="p2" class="paper ">
            <div class="front">
                <div id="f2" class="front-content font-sans! bg-#607144! justify-center      text-white">
                   <img src="/tree.jpg" alt="" />
                </div>
            </div>
            <div class="back">
                <div id="b2" class="back-content overflow-scroll text-center px-4 box-border">
                <h1 class="text-4xl mt-4" style="font-family: 'harlouda';">Credit</h1>
                <hr />
                <!-- {currentUser.value && currentUser.value.trees.map((tree,index,array) => 
                    <Tree key={index} index={index} />
                )} -->
            </div>
        </div>
        </div>
        <div id="p3" class="paper ">
            <div class="front relative">
               <div id="f3" class="front-content  gap-17 text-center font-sans! overflow-scroll px-4 box-border ">
                    <h1 class="text-4xl mt-4" style="font-family: 'harlouda';">Credit</h1>
                    <hr />
                    <!-- {currentUser.value && currentUser.value.trees.map((tree,index,array) => 
                    <TreeCalculation key={index} tree={tree} array={array} />
                )} -->
                
                <h1 class="bg-orange-200 p-2 box-border absolute bottom-0">Enher Points: {totalOxygen.value}</h1>
                </div>
            </div>
            <div class="back">
                <div id="b3" class="back-content text-center font-sans! px-4 box-border">
                    <h1 class="text-4xl mt-4" style="font-family: 'harlouda';">Debit</h1>
                    <hr />

                     <h1 class="bg-orange-200 dsd p-2 box-border  font-bold mt-10" style="font-family: 'Anton';">To check your carbon emission & Enjoy our services please fill the following form with your respected response:</h1>

                </div>
        </div>
        </div>
        <div id="p4" class="paper ">
            <div class="front">
                <div id="f4" class="front-content font-sans!  text-center">
                <h1 class="text-4xl mt-4" style="font-family: 'harlouda';">Debit</h1>
                    <hr />
                <div>
                     <h1 class="bg-orange-200 p-2 box-border  font-bold mt-3" style="font-family: 'Anton';">
                        Carbon Emisson Calculator
                     </h1>
                     <hr />
                     <div class="flex flex-col"> 

                        <label class="block">
                            Your Monthly Electric Bill Charges
                            <input type="number" v-model="electricBill"/> 
                        </label>
                        <label class="block">
                            Your Monthly Gas Bill Charges
                            <input type="number" v-model="gasBill"/> 
                        </label>
                        <hr />
                        <label class="block bg-orange-200 p-2 box-border  font-bold">
                            Your Monthly Petroleum Bill Charges
                            <input type="number" v-model="petrolBill" /> 
                        </label>
                        <h1>Result: {{totalOxygen - sum}}</h1>
                        <br />
                        <a href="/" class="bg-#607222 p-4 no-underline text-white mt-3">
                            <LuStepForward class="w-5  h-5"/>
                            Continue</a>
                     </div>

                    </div>
                </div>
            </div>
            <div class="back">
                <div id="b4" class="back-content">
                <h1>Back 1</h1>
            </div>
        </div>
        </div>
</div>
<button @click="goNextPage" ref="nextButton" id="next-btn">
    Next
</button>

        </div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Hind:wght@500&family=Montserrat&display=swap');

.body {
    height: calc(100vh - 64px );
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    font-family: sans-serif;
    background-color: #ff7700;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

/* Book */
.book {
    position: relative;
    width: 350px;
    height: 500px;
    transition: transform 0.5s;
}

.paper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    perspective: 1500px;

}

.dsd{
    font-family: 'Anton';
}

.front,
.back {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left;
    transition: transform 0.5s;
}

.front {
    z-index: 1;
    backface-visibility: hidden;
    border-left: 3px solid powderblue;
}

.back {
    z-index: 0;
}

.front-content,
.back-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.back-content {
    transform: rotateY(180deg)
}

/* Paper flip effect */
.flipped .front,
.flipped .back {
    transform: rotateY(-180deg);
}

/* Controller Buttons */
button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.5s;
}

button:focus {
    outline: none;
}

button:hover i {
    color: #636363;
}

i {
    font-size: 50px;
    color: gray;
}

/* Paper stack order */
#p1 {
    z-index: 3;
}

#p2 {
    z-index: 2;
}

#p3 {
    z-index: 1;
}

#p4 {
    z-index: 0;
}
</style>