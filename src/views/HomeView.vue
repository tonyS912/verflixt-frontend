<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import WelcomeItem from "@/components/WelcomeItem.vue";
import MyFooter from "@/components/MyFooter.vue";
</script>

<template>
    <main class="vh-90 d-flex flex-column justify-content-between">
        <TheWelcome class="z-2"/>
        <WelcomeItem/>
        <MyFooter class="z-2"/>
    </main>
</template>

<style scoped>
.vh-90 {
    height: 90vh;
}
</style>