<template>
    <div class="div_img">
        <img :src="imgProp" alt="Imagen" />

   </div>
</template>
<script>
import img from '@/utils/img.js';
export default {
    props: {
        imgProp: {
            type: String
        }
    },
    methods: {
        
    }
}
</script>
<style>
.div_img {
    text-align: center;
}
</style>