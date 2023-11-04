<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import router from "@/router";
import {onMounted} from "vue";


const confirmRegistry = () => {
    setTimeout(async () => {
            await router.push({name: 'home'})
        }, 7000);
}

onMounted(confirmRegistry);

</script>

<template>
<TheWelcome/>
    <br><br><br><br><br><br><br>

    <div class="d-flex justify-content-center align-content-center flex-column">
        <h1>{{ $t('LandingPage.Success') }}</h1>
        <h3>{{ $t('LandingPage.Confirm') }}</h3>
    </div>

    <br><br><br><br>
    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>