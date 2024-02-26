<template>
    <div class="container">
        <img src="@/assets/home_bg.jpg" alt="" class="background-img" style="fit: fill">
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100vh;

        .background-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
    
</style>