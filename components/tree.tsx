import {$, component$, useSignal, useStyles$, useVisibleTask$} from '@builder.io/qwik'
import { data, type Tree as T, type User } from './db';

export const Tree = component$(() => {
    const currentUser = useSignal<User>()
    const tree = useSignal<T>()
    useVisibleTask$(() => {
        let username = localStorage.getItem("user");

        currentUser.value = data.filter((el) => {

            return el.firstName == username
        })[0]
    const url = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop:string) => searchParams.get(prop),
          }) as any;
          tree.value = currentUser.value.trees[url.i]
    })
    return (
        <div class="w-100vw flex justify-center flex-row flex-wrap items-center font-sans overflow-hidden" style="height: calc(100vh - 64px);">
            {
              tree.value ? (
              <><div class="w-50vw h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6374.823124732459!2d75.8939488189096!3d22.71359714188747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700908975707!5m2!1sen!2sin" class="w-100% h-100%" style="border:0;" loading="lazy"></iframe>
              </div>
              <div class="">
                <div class="bg-white p-6 rounded-4 shadow-2xl shadow-black">

              <h1>Type: {tree.value.biologicalType}</h1>
              <h1>Generic Type: {tree.value.genericType}</h1>
              <h1>Day Planted: {tree.value.dayPlanted.toLocaleDateString()}</h1>
              <h1>Height: {tree.value.height} Inches</h1>
                <h1>Owner Name: {currentUser.value.firstName} {currentUser.value.lastName}</h1>
                </div>
            
              </div> 
              </>
                )
              : <h1>Loading....</h1>
            }
        </div>
    )
})