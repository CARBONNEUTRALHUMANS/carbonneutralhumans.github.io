<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Qrcode from 'easyqrcodejs'
    import {inView,animate} from 'motion'
    const {index} = defineProps<{
        index: number
    }>()
    const qr = ref<HTMLElement>()
    const a = ref<HTMLElement>()

    onMounted(() => {
        inView(a.value, () => {
            animate(a.value, {
                opacity:1
            }, {duration:0.4})
            return (leaveInfo) => a.value.style.opacity = "0";

        })
        new Qrcode(qr.value, {
            text:'http://localhost:4321/mytree?i='+index,
            height:150,
            width:150,
            logo: '/btree.png'
        })
    })
</script>

<template>
    <a ref="a" class="my-5 inline-block opacity-0" :href="`http://localhost:4321/mytree?i=${index}`">

        <h1>    
            <div ref="qr" class="qr"></div>
        </h1>
        </a>
</template>