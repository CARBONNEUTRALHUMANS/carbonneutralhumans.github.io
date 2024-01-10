    <script setup lang="ts">
        import { type Ref,ref, computed, onMounted } from 'vue';
    import { data, type User } from './db';
        import { getAge } from './passbook';
        import T from './t.vue'
        import {ArrowRightCircle,ArrowLeftCircle,ArrowBigLeft} from "lucide-vue-next"
        const currentUser = ref<User>()
        const currentPage = ref(1);
        let maxLocation = ref(5);
        const papers = ref<HTMLDivElement[]>(null)
        const book = ref<HTMLElement>()
        const previousButton = ref<HTMLButtonElement>()
        const nextButton = ref<HTMLButtonElement>()
        const totalOxygen = ref<number>(0)
        const electricBill = ref<string>("1725")
        const gasBill = ref<string>("200")
        const petrolBill = ref<string>("125")
        const credit = ref<number>(0)
        const sum = computed<number>(() => {
            if (!currentUser.value) return 0
            return (currentUser.value.age * ((+electricBill.value * 105) + (+gasBill.value * 105) + (+petrolBill.value * 113)))/1000
        })
        onMounted(() => {

            document.addEventListener("keydown", (e) => {
            if (e.key == "ArrowLeft") {
                goPreviousPage()
            }

            if (e.key == "ArrowRight") {
                goNextPage()
            }
        })
            book.value.classList.remove("hidden")
            book.value.animate({
                opacity:1,
            },{duration:200})
            book.value.style.opacity = "1";
            currentUser.value = data.filter((el) => {
                return el.firstName == localStorage.getItem("user")
            })[0]
            credit.value = +localStorage.getItem("credit")
            console.log(credit.value)
            currentUser.value.trees.forEach((tree) => {
                if(tree.notFound) return
                totalOxygen.value += ((getAge(tree.dayPlanted) * 100) + (getAge(tree.dayPlanted) * 5))
        })
            papers.value = Array.from(document.querySelector(".book").querySelectorAll(".paper") as NodeListOf<HTMLDivElement>) as HTMLDivElement[]
            console.log(papers.value,book.value)

        })

        const openBook = () => {
            book.value.style.transform = "translateX(50%)";
            previousButton.value.style.transform = "translateX(-21vw)";
            nextButton.value.style.transform = "translateX(21vw)";
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
                        papers.value[0].style.zIndex = "1";
                        break;
                    case 2:
                        papers.value[1].classList.add("flipped");
                        papers.value[1].style.zIndex = "2";
                        break;
                    case 3:
                        console.log(papers.value[2])
                        papers.value[2].classList.add("flipped");
                        papers.value[2].style.zIndex = "3";
                        papers.value[3].style.zIndex = "4";

                        break;
                    case 4:
                        papers.value[3].classList.add("flipped");
                        console.log(papers.value[3])
                        papers.value[3].style.zIndex = "4";
                        closeBook(false)

                        break;
                    case 5:
                        papers.value[3].classList.add("flipped");
                        papers.value[3].style.zIndex = "5";
                        break;
                    default:
                        throw new Error("unkown state");
                }
            }
            currentPage.value++
        }

        const goPreviousPage = () => {
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
        <div class="body">

        <button @click="goPreviousPage" ref="previousButton" id="prev-btn">
            <ArrowLeftCircle/>
        </button>


        <!-- Book -->
        <div id="book" ref="book" class="book relative hidden opacity-0">

            <div id="p1" class="paper">
                <div class="front">
                    <div id="f1" class="front-content front-content font-sans!   flex justify-center items-center  bg-#607144! text-white">
                        <img src='/b.jpg'/>

                    </div>
                </div>
                <div class="back">
                    <div id="b1" class="back-content justify-between flex-col text-center gap-3 px-4 box-border py-5 ">
                        <template v-if="currentUser">
                        <h1 style="font-family: 'harlouda';">Account Details</h1>
                        <div class="w-full h-1px border-b-1 border-b-solid border-b-black box-border px-2"></div>
                        <h2 class="text-3xl">Name: {{ currentUser.firstName }} {{ currentUser.lastName }} </h2>
                        <h2 class="text-3xl">Age: {{currentUser.age}}</h2>
                        <h2 class="text-3xl">Gender: {{ currentUser.gender }} </h2>
                        <div class="w-full h-1px border-b-1 border-b-solid border-b-black box-border px-2"></div>

                        <h2 class="text-3xl">Account Number: {{Math.floor(Math.random() * 10 ** 12)}} </h2>
                        <h2 class="text-3xl">Aadhar Number: {{currentUser.aadharNumber}} </h2>
                        <div class="w-full h-1px border-b-1 border-b-solid border-b-black box-border px-2"></div>

                        <h2 class="text-3xl bg-orange-200 p-2 box-border text-center mt-2">For Further Details please contact: <a href="/aadhar">  EnviroBank.com</a></h2>

                        </template>
                    </div>
                </div>
            </div>
            <!-- Paper 2 -->
            <div id="p2" class="paper">
                <div class="front">
                    <div id="f2" class="front-content front-content font-sans!   flex justify-center items-center  bg-#607144! text-white">
                        <img src='/b.jpg'/>

                    </div>
                </div>
                <div class="back overflow-hidden absolute">
                <div id="b2" class="back-content flex flex-col justify-between! overflow-y-scroll max-h-full! text-center box-border">
                    <h1 class="text-4xl mt-4" style='font-family: "harlouda";'>Credit</h1>
                    <hr />
                    <template v-if="currentUser">
                        <T v-for="tree,index in currentUser.trees" :index="index"/>
                    </template>
                    </div>
                </div>
            </div>
            <!-- Paper 3 -->
            <div id="p3" class="paper">
                <div class="front">
                    <div id="f3" class="front-content  flex flex-col gap-8 overflow-y-scroll max-h-full! text-center box-border">
                        <h1 class="text-4xl mt-4" style='font-family: "harlouda";'>Credit</h1>
                    <hr />
                    <template v-if="currentUser">
                            <div v-for="tree,index in currentUser.trees">
                                <h1>
                                    <ArrowBigLeft/>
                                    {{(!tree.notFound ? (getAge(tree.dayPlanted) * 100) + (getAge(tree.dayPlanted) * 5) : 0) }}

                                </h1>
                            </div>
                            <h1>Rewards Credit:</h1>
                            <h2>{{ credit }}</h2>
                    </template>
                    </div>
                </div>
                <div class="back">
                    <div id="b3" class="back-content text-center font-sans! px-4 box-border">
                        <h1 class="text-4xl mt-4" style='font-family: "harlouda'>Debit</h1>
                        <hr />

                        <h1 class="bg-orange-200 dsd p-2 box-border  font-bold mt-10" style="font-family: 'Anton';">To check your carbon emission & Enjoy our services please fill the following form with your respected response:</h1>

                    </div>
                </div>
            </div>
            <div id="p4" class="paper">
                <div class="front">
                    <div class="front">
                    <div id="f4" class="front-content font-sans!  text-center">
                    <h1 class="text-4xl mt-4" style='font-family;: "harlouda"'>Debit</h1>
                        <hr />
                    <div class="w-full h-full flex justify-evenly flex-col">
                        <h1 class="bg-orange-200 p-2 box-border  font-bold mt-3" style="font-family: 'Anton';">
                            Carbon Emisson Calculator
                        </h1>
                        <hr />
                        <div class="flex flex-col flex-1 justify-evenly"> 

                            <label class="block text-2xl">
                                Your Monthly Electric Bill Charges
                                <input class="w-90% h-8 text-2xl" type="number" v-model="electricBill"/> 
                            </label>
                            <label class="block text-2xl">
                                Your Monthly Gas Bill 
                                <br>
                                <input class="w-90% h-8 text-2xl " type="number" v-model="gasBill"/> 
                            </label>
                            <hr />
                            <label class="block bg-orange-200 text-xl p-2 box-border  font-bold">
                                Your Monthly Petroleum Bill Charges
                                <input class="w-full h-8 text-2xl" type="number" v-model="petrolBill"/> 
                            </label>
                            <h1>Result: {{(Math.floor(((totalOxygen + credit) - sum ) * 100 ) ) / 100 }}</h1>
                            <a href="/" class="bg-#607222 p-4 no-underline text-white mt-3"><LuStepForward class="w-5  h-5"/>Continue</a>
                            <a v-if="totalOxygen < (Math.floor(((totalOxygen + credit) - sum ) * 100 ) ) " href="/license" class="bg-blue m-0 mt-1 p-4 no-underline text-white "><LuStepForward class="w-5  h-5"/>
                                Claim Your Driving License
                            </a>
                        </div> 

                        </div>
                    </div>
            </div>
                </div>
                <div class="back">
                    <div id="b4" class="back-content">
                    <img class="w-100% h-100%" src="/Picture1.png" alt="" />
                </div>
                </div>
            </div>

        </div>

        <!-- Next Button -->
        <button @click="goNextPage" ref="nextButton" id="next-btn">
            <ArrowRightCircle/>
        </button>
    </div>

    </template>

    <style>
    @import url('./passbook.css');
    </style>
