<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
<footer class="d-flex flex-column">
    <RouterLink class="col-4 text-white d-flex fw-bold" :to="{ path: '/LegalNotice'}" >{{ $t('LandingPage.MyFooter.LegalNotice') }}
    </RouterLink>
    <RouterLink class="col-7 text-white d-flex fw-bold" :to="{ path: '/PrivacyPolicy'}" >{{ $t('LandingPage.MyFooter.PrivacyPolicy') }}
    </RouterLink>
</footer>
</template>

<style scoped>

</style>