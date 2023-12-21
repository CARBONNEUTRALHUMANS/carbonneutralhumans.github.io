<script setup lang="ts">
    import {ref,onMounted, type Ref, computed}from'vue'
import { data } from './db';
    let dialog = ref(null) as Ref<HTMLDialogElement>;
    let m = ref(null) as Ref<HTMLDivElement>;
    let f = ref()
    const rew = ref<HTMLElement>()
    let user = computed(() => {
        return data.filter((el) => {
            return el.firstName == f.value
        })[0]
    })
    const rewards =ref([
        2,5,10,20,30,40,50,60,70,80,90,100
    ])
    
    onMounted(() => {
        console.log('is claimed: '+isClaimed(2))
        f.value = localStorage.getItem("user")
    })  
    var showModal = async (num,event:Event) => {
        let lottie = await import('lottie-web')
        if (!dialog) return
        (event.target as HTMLButtonElement).style.background = "red" as string
        (event.target as HTMLButtonElement).disabled = true
        localStorage.setItem(`${num}`, "true")
        localStorage.setItem("credit", `${+localStorage.getItem("credit") + (10 * num)}`)
        window.credit = +localStorage.getItem("credit") + (10 * num)
        window.dispatchEvent( new Event('storage') ) // <----- 

        lottie.default.loadAnimation({
            container: m.value,
            path:'/anim.json',
            loop:false,
            name:"Check",
        })
        lottie.default.setSpeed(0.5)
        dialog.value.showModal()
    }
    var isClaimed = (num) => {
        var storedValue = localStorage.getItem(`${num}`)
        
        if (storedValue == undefined){
            return false
        }
        return true
    }
    var closeModal = async () => {
        let lottie = await import('lottie-web')
        
        if (!dialog) return

        dialog.value.setAttribute("closing","")
        dialog.value.addEventListener("animationend",() => {
            lottie.default.destroy("Check")
            dialog.value.removeAttribute("closing")
            dialog.value.close()
        },{once:true});
    }

    
</script>

<template>
    <div class="div">
        <div ref="rew" class="rewards shadow-2xl rounded-4">
            <h1 class="text-7xl" style="font-family: 'Harlouda';">Rewards:</h1>
            <div v-for="reward in rewards" class="reward">
                <template v-if="user">
                    <h2>
                        Claim Your Reward: {{ reward }}
                    </h2>
                    <div class="spacer"></div>
                    <button :disabled="user.trees.length < reward || isClaimed(reward)" @click="(e) => showModal(reward,e)" class="bg-amber cursor-pointer pointer-events-auto  hover:bg-amber-200 transition-all border-none p-3 text-lg rounded-3"> 
                        Claim Reward
                    </button>
                </template>
            </div>
        </div>
    </div>
    <dialog ref="dialog" class=" text-center shadow-5 shadow-black font-sans gap-4 m-auto t w-40vw h-50vh">
        <div ref="m" class="w-50 h-50 m-auto"></div>
        <h1>Reward Successfully Claimed</h1>
        <button @click="closeModal" class="bg-cyan cursor-pointer hover:bg-cyan-500 p-4 text-lg transition-all border-none rounded-4 px-6">Close</button>
    </dialog>
</template>

<style>
    dialog[open]{
        animation: slide-up 1000ms forwards, fade-in 500ms forwards;
    }
    dialog::backdrop{
        background-color: rgb(0 0 0 / 0.5);
        backdrop-filter: blur(10px);
    }
    dialog[open]::backdrop{
        animation: fade-in 1000ms forwards;
    }
    .div{
        font-family: sans-serif;
        width:100vw;
        height: calc(100vh - 64px);
        display: grid;
        place-items: center;
    }
        dialog[closing] {
        display: block;
        pointer-events: none;
        inset: 0;
        animation: fade-out 500ms forwards;
        }

    .rewards {
        overflow-y: scroll;
        height: 70vh;
        width: 40vw;
        background-color: white ;
        box-sizing: border-box;
        padding: 40px;
        display:grid;
        text-align: center;
    }

        *::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
        }

        *::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
        }

        *::-webkit-scrollbar-thumb {
        background-color: black;    /* color of the scroll thumb */
        border-radius: 1rem;  
        }
    .rewards > * {
        display:flex;
        align-items: center;
        padding: 18px;
        border-bottom: 1px solid #D9DDDE;
        margin: 0;
    }

    .spacer {
        flex:1;
    }

    
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>