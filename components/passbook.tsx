import {$, component$, useComputed$, useSignal, useStyles$, useTask$, useVisibleTask$} from '@builder.io/qwik'
import {type User,data, type Tree} from './db'
import styles from './passbook.css?inline'
import Qrcode from 'easyqrcodejs'
import tippy from 'tippy.js';
import {LuArrowBigLeft,LuStepForward,LuChevronLeftCircle,LuChevronRightCircle} from '@qwikest/icons/lucide'
export function getAge(birthDate: Date): number {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const PassBook = component$(() => {
    useStyles$(styles)
    const currentUser = useSignal<User>()
    const currentPage = useSignal(1);
    let maxLocation = useSignal(5);
    const papers = useSignal<HTMLDivElement[]>(null)
    const book = useSignal<HTMLDivElement>()
    const previousButton = useSignal<HTMLButtonElement>()
    const nextButton = useSignal<HTMLButtonElement>()
    const totalOxygen = useSignal<number>(0)
    const electricBill = useSignal<string>("0")
    const gasBill = useSignal<string>("0")
    const petrolBill = useSignal<string>("0")
    const sum = useSignal<number>(0)
    useTask$(({track}) => {
        track(() => electricBill.value)
        track(() => petrolBill.value)
        track(() => gasBill.value)
        if (currentUser.value){

            sum.value = (currentUser.value.age * ((+electricBill.value * 105) + (+gasBill.value * 105) + (+petrolBill.value * 113)))/1000   
        }
    })
    useVisibleTask$(() => {
        let username = localStorage.getItem("user");
       currentUser.value = data.filter((el) => {
            return el.firstName == username
        })[0]
       papers.value = Array.from(book.value.querySelectorAll("[id^='p']") as NodeListOf<HTMLDivElement>) as HTMLDivElement[]
       currentUser.value.trees.forEach((tree) => {
            totalOxygen.value += (getAge(tree.dayPlanted) * 100) + (getAge(tree.dayPlanted) * 5)
       })
    })

    const openBook = $(() => {
        book.value.style.transform = "translateX(50%)";
        previousButton.value.style.transform = "translateX(-180px)";
        nextButton.value.style.transform = "translateX(180px)";
    })
    const closeBook = $((isAtStart: boolean) => {
        if(isAtStart) {
            book.value.style.transform = "translateX(0%)";
        } else {
            book.value.style.transform = "translateX(100%)";
        }
        
        previousButton.value.style.transform = "translateX(0px)";
        nextButton.value.style.transform = "translateX(0px)";
    })

    const goNextPage = $(() => {
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
    })

    const goPreviousPage = $(() => {
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
    })
    return (
        <div class="body font-sans!">
                <button onClick$={goPreviousPage} ref={previousButton} id="prev-btn">
            <LuChevronLeftCircle class="w-12 h-12"/>
    </button>
    
    
    <div ref={book} id="book" class="book">
        <div id="p1" class="paper ">
            <div class="front">
                <div id="f1" class="front-content font-sans!   flex justify-center items-center  bg-#607144! text-white">
                    <img src='/b.jpg'/>
                </div>
            </div>
            <div class="back">
                <div id="b1" class="back-content text-center gap-3 px-4 box-border">
                <h1 style={{fontFamily: "harlouda"}}>Account Details</h1>
                <hr />
                <h2 class="text-2xl">Name: {currentUser.value ? currentUser.value.firstName : ""} {currentUser.value ? currentUser.value.lastName : ""} </h2>
                <h2 class="text-2xl">Age: {currentUser.value ? currentUser.value.age : ""} </h2>
                <h2 class="text-2xl">Gender: {currentUser.value ? currentUser.value.gender : ""} </h2>
                <hr />
                <h2 class="text-2xl">Account Number: {Math.floor(Math.random() * 10 ** 12)} </h2>
                <h2 class="text-2xl">Aadhar Number: {Math.floor(Math.random() * 10 ** 12)} </h2>
                <hr />
                <h2 class="text-2xl bg-orange-200 p-2 box-border text-center mt-2">For Further Details please contact: <a href="#">  EnherBank.com</a>
                <br />
                <a href='/aadhar'>EnherAadhar.in</a>
                </h2>

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
                <h1 class="text-4xl mt-4" style={{fontFamily: "harlouda"}}>Credit</h1>
                <hr />
                {currentUser.value && currentUser.value.trees.map((tree,index,array) => 
                    <Tree key={index} index={index} />
                )}
            </div>
        </div>
        </div>
        <div id="p3" class="paper ">
            <div class="front relative">
               <div id="f3" class="front-content  gap-17 text-center font-sans! overflow-scroll px-4 box-border ">
                    <h1 class="text-4xl mt-4" style={{fontFamily: "harlouda"}}>Credit</h1>
                    <hr />
                    {currentUser.value && currentUser.value.trees.map((tree,index,array) => 
                    <TreeCalculation key={index} tree={tree} array={array} />
                )}
                
                <h1 class="bg-orange-200 p-2 box-border absolute bottom-0">Enher Points: {totalOxygen.value}</h1>
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
        <div id="p4" class="paper ">
            <div class="front">
                <div id="f4" class="front-content font-sans!  text-center">
                <h1 class="text-4xl mt-4" style={{fontFamily: "harlouda"}}>Debit</h1>
                    <hr />
                <div>
                     <h1 class="bg-orange-200 p-2 box-border  font-bold mt-3" style="font-family: 'Anton';">
                        Carbon Emisson Calculator
                     </h1>
                     <hr />
                     <div class="flex flex-col"> 

                        <label class="block">
                            Your Monthly Electric Bill Charges
                            <input type="number" bind:value={electricBill}/> 
                        </label>
                        <label class="block">
                            Your Monthly Gas Bill Charges
                            <input type="number" bind:value={gasBill}/> 
                        </label>
                        <hr />
                        <label class="block bg-orange-200 p-2 box-border  font-bold">
                            Your Monthly Petroleum Bill Charges
                            <input type="number" bind:value={petrolBill}/> 
                        </label>
                        <h1>Result: {totalOxygen.value - sum.value}</h1>
                        <br />
                        <a href="/" class="bg-#607222 p-4 no-underline text-white mt-3"><LuStepForward class="w-5  h-5"/>Continue</a>
                     </div>

                    </div>
                </div>
            </div>
            <div class="back">
            <div id="b4" class="back-content">
                <img class="w-100% h-100%" src="/Picture1.png" alt="" />
            </div>
        </div>
        {/* */}</div>
</div>
<button onClick$={goNextPage } ref={nextButton} id="next-btn">
 <LuChevronRightCircle class="w-12 h-12"/>
</button>

        </div>
    )
}) 

type TreeProps = {
    index: number
}

const Tree = component$<TreeProps>(({index}) => {
    const qr = useSignal<HTMLElement>()
    useVisibleTask$(() => {
        new Qrcode(qr.value, {
            text:'http://localhost:4321/mytree?i='+index,
            height:150,
            width:150,
            logo: '/btree.png'
        })
    })
    return (
        <a class="my-5" href={'http://localhost:4321/mytree?i='+index}>

            <h1>
                {/* Tree {index+1} */}
                <div ref={qr} class="qr"></div>
            </h1>
        </a>
    )
})

type TreeCalculationProps = {
    tree: Tree
    array: Tree[]
}

const TreeCalculation = component$<TreeCalculationProps>(({tree}) => {
    const elTip = useSignal<HTMLHeadingElement>()
    useVisibleTask$(() => {
        tippy(elTip.value,{
            content: "Oxygen Produced By Tree"
        })
    })
    return (
        <>
            <h1 ref={elTip}>
                <LuArrowBigLeft/>
                {(getAge(tree.dayPlanted) * 100) + (getAge(tree.dayPlanted) * 5)}</h1>
            <hr />
        </>
    )
})