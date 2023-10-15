<script setup>
import {RouterLink} from "vue-router"
import {ref} from "vue"
import {useRouter} from "vue-router";

const userEmail = ref('')  // Saving User e-mail

const registerUser = () => {
    const router = useRouter();
    router.push({ path: '/register', query: { email: userEmail.value }})
}

</script>

<template>
    <div>
        <div class="w-100 card-img-overlay top-25">
            <!--     Background Cover Image-->
            <img class="d-block w-100 opacity-25 " src="../assets/icon/jpg/filmstrip.jpg"
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
                <div class="col-12 mb-3">
                    <label for="exampleFormControlInput1"
                           class="d-none form-label">{{ $t('LandingPage.InputRegistry.Label') }}</label>
                    <input v-model="userEmail" type="email" class="form-control" id="exampleFormControlInput1"
                           :placeholder="$t('LandingPage.InputRegistry.Label')">
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <RouterLink type="button" class="btn btn-danger d-flex fw-bold" to="/register" @click="registerUser">{{ $t('LandingPage.InputRegistry.StartRegister') }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-caret-right align-self-center ms-2" viewBox="0 0 16 16">
                            <path
                                d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
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
