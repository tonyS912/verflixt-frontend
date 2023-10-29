<script setup>
import {RouterLink} from "vue-router"
import ArrowRightIcon from "@/assets/icon/arrowRightIcon.vue";

</script>

<template>
    <div>
        <div class="w-100 card-img-overlay top-25">
            <!--     Background Cover Image-->
            <img class="d-block w-100 opacity-25 d-lg-none" src="../assets/icon/jpg/filmstrip.jpg"
                 alt="Background Cover"/>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center text-center">

            <h1 class="text-white d-none d-lg-block">
                {{ $t('LandingPage.MarketingBanner.Heading') }}
            </h1>
            <h1 class="text-white d-lg-none">
                {{ $t('LandingPage.MarketingBanner.Heading-2') }}
            </h1>
            <h5 class="text-white">
                {{ $t('LandingPage.MarketingBanner.ShortIntro') }}
            </h5>
            <span class="text-white">
            {{ $t('LandingPage.MarketingBanner.Content') }}
        </span>

            <div class="position-relative d-flex flex-column col-12 align-items-center justify-content-between mt-3">

                <div class="col-3 d-flex justify-content-center align-items-center">
                    <RouterLink type="button" class="btn btn-danger d-flex fw-bold"  :to="{ path: '/register'}" >{{ $t('LandingPage.InputRegistry.StartRegister') }}
                        <arrowRightIcon/>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-25 {
    top: 25%;
}
</style>
