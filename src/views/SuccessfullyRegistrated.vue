<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";


</script>

<template>
    <TheWelcome/>
    <br><br><br><br><br><br><br>

    <div class="d-flex justify-content-center align-content-center">
        <h1>{{ $t('LandingPage.Success') }}</h1>
    </div>

    <br><br><br><br>
    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>