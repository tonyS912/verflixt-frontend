<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import {ref} from "vue";
import router from "@/router";

let email = ref('');

const resetPassword = async () => {
    const url = "https://verflixt-back.tony-schiller.com/authentication/api/reset/password"

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        redirect: 'follow',
        body: JSON.stringify({
            email: email.value,
        }),
    };

    const success =  await fetch(url, requestOptions)

    if (success) {
        await router.push({path: '/passwordResetInfo'})
    }
}

</script>

<template>
    <TheWelcome/><br><br><br><br><br><br>

    <div class="my-5 d-md-flex flex-md-column align-items-md-center">

        <form id="resetPassword" class="col-12 col-md-8 col-lg-5" @submit.prevent="resetPassword">
            <div class="input-group my-3">
                <input type="email" class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserMail')"
                       :title="$t('LandingPage.InputRegistry.UserMail')"
                       v-model="email" required>
            </div>

            <div class="input-group my-3">
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="resetButton">
                    {{ $t('LandingPage.ResetPassword.Button') }}
                </button>
            </div>

        </form>

    </div><br><br><br>

    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>