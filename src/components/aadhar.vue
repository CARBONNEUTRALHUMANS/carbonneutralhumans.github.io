<script setup lang="ts">
    import { ref } from 'vue';
    import { data } from './db';
    const currentUser = ref(data.filter((el) => {
        return el.firstName == localStorage.getItem("user")
    })[0])

</script>

<template>
    <div class="flex flex-col justify-self-center p-4 rounded-5 min-w-fit min-h-fit bg-white w-50vw h-60vh m-auto font-sans">
        <div class="h-30% justify-around flex">
            <img src="/aadhar.png" class="h-100%" alt="">
            <img src="/aadha.png" class="h-100%" alt="">

        </div>
        <div class="flex flex-col pl-6">
            <div class="w-100% flex flex-row">

            <div class="relative">

                <img  src="/44.jpg">
                <div class="absolute right--150% font-bold bottom-0 text-5xl">

                    {{ Math.floor(Math.random() * 10 ** 4) }} {{ Math.floor(Math.random() * 10 ** 4) }} {{ Math.floor(Math.random() * 10 ** 4) }}
                </div>
            </div>
            <div class="flex-1"></div>
            <div class="text-md pr-10">
                <h1>नाम</h1>
                <h1>{{ currentUser.firstName }} {{ currentUser.lastName }}</h1>
                <h1>जन्म तारीख</h1>
                <h1>{{ currentUser.birthday.toLocaleDateString() }}</h1>
                <h1>पुरुष / {{ currentUser.gender }}</h1>

            </div>
        </div>
    </div>

        <div class="border-top border-red text-center border-t-solid w-103.141592653% self-center" >
                    <h1 class="mt-1">आधार - आम आदमी का अधिकार</h1>
                </div>
    </div>
</template>
