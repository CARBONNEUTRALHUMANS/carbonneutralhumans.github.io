<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { data, type Tree, type User } from '../components/db';
    const r = ref<HTMLElement>()
    const currentUser = ref<User>()
    const tree = ref<Tree>() as Ref<Tree>
    onMounted(() => {
        let username = localStorage.getItem("user");

        currentUser.value = data.filter((el) => {

            return el.firstName == username
        })[0]
        const url = new Proxy(new URLSearchParams(window.location.search), {
          get: (searchParams, prop:string) => searchParams.get(prop),
        }) as any;
        tree.value = currentUser.value.trees[url.i]
        console.log(tree.value,currentUser.value)
    })
</script>

<template>
        <div v-if="currentUser" class="w-100vw grid place-items-center grid-cols-2 font-sans overflow-hidden" style="height: calc(100vh - 64px);">
            <template v-if="tree.height != 24">
              <div class="w-50vw h-full grid pulse  items-center bg-white">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6374.823124732459!2d75.8939488189096!3d22.71359714188747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700908975707!5m2!1sen!2sin" style="border:0;" class="w-full h-full" loading="lazy"></iframe>
              </div>
              <div class="">
                <div class="bg-white p-6 rounded-4 shadow-2xl shadow-black">
                  
                  <h1>Type: {{tree.biologicalType}}</h1>
                  <h1>Generic Type: {{tree.genericType}}</h1>
                  <h1>Day Planted: {{tree.dayPlanted.toLocaleDateString()}}</h1>
              <h1>Height: {{tree.height}} Inches</h1>
                <h1>Owner Name: {{currentUser.firstName}} {{currentUser.lastName}}</h1>
                </div>
                
              </div> 
            </template>
            <template v-else>
              <h1>Tree Not Found</h1>
            </template>
            </div>
          </template>
<style>
.pulse {
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  -webkit-animation: pulse 1.2s ease-in-out infinite;
          animation: pulse 1.2s ease-in-out infinite;
}
@-webkit-keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}

html, body {
  height: 100%;
}

.content {
  display: flex;
}

.lines {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.lines .line, .lines .thumb {
  background-color: #f5f5f5;
  width: 15rem;
  height: 1rem;
  margin: 0.25rem;
}
.lines .thumb {
  height: 7.5rem;
}</style>