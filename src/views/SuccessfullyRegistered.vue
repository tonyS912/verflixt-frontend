<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import router from "@/router";
import {onBeforeMount} from "vue";


const finishRegister = async () => {
    const token = new URLSearchParams(window.location.search).get('token');

    const url = "https://verflixt-back.tony-schiller.com/authentication/confirm_email/";

    const url_token = url + token;

    const success = await fetch(url_token)

    if (success) {
        setTimeout(async () => {
            await router.push({name: 'login'})
        }, 2000);
    }
};

onBeforeMount(finishRegister);

console.log("works")

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