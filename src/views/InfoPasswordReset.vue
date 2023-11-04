<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import router from "@/router";
import {onMounted} from "vue";

const confirmInfo = () => {
    setTimeout(async () => {
            await router.push({name: 'home'})
        }, 7000);
}

onMounted(confirmInfo);

</script>

<template>
<TheWelcome/>
    <br><br><br><br><br><br><br>

    <div class="d-flex justify-content-center align-content-center">
        <h1>{{ $t('LandingPage.ResetInfo') }}</h1>
    </div>

    <br><br><br><br>
    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>