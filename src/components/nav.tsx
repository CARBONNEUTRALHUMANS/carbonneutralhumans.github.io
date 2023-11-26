import {component$, useSignal, useStyles$,useVisibleTask$,$, useStylesScoped$}from '@builder.io/qwik'
import styles from './nav.styl?inline';
import {LuUserCircle,LuX,LuLogOut} from '@qwikest/icons/lucide'
import { data, firstNames } from './db';

type NavBarProps = {
    isprotected?: boolean
}

export const NavBar = component$<NavBarProps>((props) => {
    useStylesScoped$(styles)
    const loggedIn = useSignal<boolean>(false)
    const dialog = useSignal<HTMLDialogElement>()
    const user = useSignal("")
    const emailInputValue = useSignal("")
    const passwordInputValue = useSignal("")
    useVisibleTask$(() => {
        if(firstNames.includes(localStorage.getItem("user"))){
            loggedIn.value = true
            user.value = localStorage.getItem("user")
        }
        if (props.isprotected && !loggedIn.value){
            dialog.value.style.display = "grid"
            dialog.value.showModal()
        }
    })
    const openDialog = $(() => {
        if (loggedIn.value) return
        dialog.value.style.display = "grid"
        dialog.value.showModal()
    })
    const closeDialog = $(() => {
        dialog.value.style.display = "none"
        dialog.value.close()
    })

    const password = "tree123#@"

    const login = $((ev) => {
        ev.preventDefault()
        console.log("HELOP)")
        switch (emailInputValue.value){
            case "rajesh121@gmail.com":{
                if (passwordInputValue.value == password){
                    loggedIn.value = true
                    user.value = "Rajesh"
                    closeDialog()
                    localStorage.setItem("user", user.value)
                    break
                }
            }
            case "bhupendra2@gmail.com":{
                if (passwordInputValue.value == password){
                    loggedIn.value = true
                    user.value = "Bhupendra"
                    closeDialog()
                    localStorage.setItem("user", user.value)
                }
            }
        }
    })
    return (
        <>
        <nav class="nav box-border justify-around">
            <div class="w-50%">
                <span data-heading class="uppercase">Carbon Neutral Humans</span>
            </div>
            <div class="w-50% px-4 box-border flex justify-around" id='login'>
                <button onClick$={openDialog} class="text-lg gap-2 flex cursor-pointer">
                    <LuUserCircle class="translate-y-4px" />
                    {loggedIn.value ? user.value : `Log In`}
                </button>
                {
                    loggedIn.value ?
                    <button class="text-lg gap-2 flex cursor-pointer" onClick$={() => {
                        localStorage.removeItem("user")
                        loggedIn.value = false
                        user.value = ""
                        if(props.isprotected) {}

                    }}><LuLogOut class="translate-y-4px"/> Log Out</button>
                    : <></>
                }
            </div>
        </nav>
        <dialog ref={dialog} class=" h-100vw hidden dialog backdrop-bg-white grid items-center   bg-red m-auto w-100vw">
            {
               !props.isprotected ?
                
                <button onClick$={closeDialog} class="font-sans w-6 h-6 absolute right-40px top-10px border-none bg-transparent cursor-pointer text-6xl" style="background-image: url('meow.png');background-size: contain;" id="cbtn">
            <LuX />
        </button> : <></>
        }
        <form id="dform" class="flex gap-3 flex-col self-center relative bottom-15">
            
            <h1 class="text-center font-sans mb-3">Login</h1>
            <input bind:value={emailInputValue} id="email" type="email" class="bg-#FBD9D8    border-none p-2 text-#010001  border-b border-2 placeholder:font-bold placeholder:text-#010001 placeholder:font-sans w-40% self-center border-#010001 border-b-solid" placeholder="Email"/>
            <input bind:value={passwordInputValue} id="pass" type="password" class="bg-#FBD9D8 border-none p-2 text-#010001  border-b border-2 placeholder:font-bold placeholder:text-#010001 placeholder:font-sans w-40% self-center border-#010001 border-b-solid" placeholder="Password"/>
            <button onClick$={login} type="button" class="bg-#010001 text-#FBD9D8 font-sans border-none cursor-pointer py-3 w-30% self-center font-bold  hover:w-40% transition-all ">Submit</button>
        </form>
        </dialog>
            </>
    )
})
