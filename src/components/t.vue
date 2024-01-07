<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Qrcode from 'easyqrcodejs'
    const {index} = defineProps<{
        index: number
    }>()
    const qr = ref<HTMLElement>()
    const a = ref<HTMLElement>()
    let origin = ref("");
    onMounted(() => {
        origin.value = location.origin;

        new Qrcode(qr.value, {
            text:`${location.origin}/mytree?i=`+index,
            height:150,
            width:150,
            logo: '/btree.png'
        })
    })
</script>

<template>
    <a ref="a" class="my-5 inline-block" :href="`${origin}/mytree?i=${index}`">

        <h1>    
            <div ref="qr" class="qr"></div>
        </h1>
        </a>
</template>