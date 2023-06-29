<template>
    <div class="div_img">
        <img :src="src" alt="" />
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String
        },
    }
}
</script>
<style>
.div_img {
    text-align: center;
}
</style>