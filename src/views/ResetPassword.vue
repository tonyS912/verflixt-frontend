<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import IconEyeSlash from "@/assets/icon/IconEyeSlash.vue";
import IconEye from "@/assets/icon/IconEye.vue";
import {ref} from "vue";
import router from "@/router";

let password = ref('');
let confirm_password = ref('');
let showPassword = ref(false);
let showPassword2 = ref(false);
let eyeIcon = ref(IconEye);
let eyeIcon2 = ref(IconEye);

const togglePasswordVisibility = (id) => {
    if (id === 'password') {
        showPassword.value = !showPassword.value;
        eyeIcon.value = showPassword.value ? IconEyeSlash : IconEye;
    } else if (id === 'confirm_password') {
        showPassword2.value = !showPassword2.value;
        eyeIcon2.value = showPassword.value ? IconEyeSlash : IconEye;
    }
};

const resetPassword = async () => {
    //let base_url = window.location.origin + window.location.pathname + window.location.search
    const token = new URLSearchParams(window.location.search).get('token');

    const url = "https://verflixt-back.tony-schiller.com/authentication/api/reset/password/confirm/";

    const url_token = url + token;
    console.log(url_token);

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        body: JSON.stringify({
            password: password.value,
            confirm_password: confirm_password.value,
        }),
    };

    console.log(requestOptions)
    console.log("start fetching")
    const success = await fetch(url_token, requestOptions)


    if (success) {
        await router.push({name: "home"})
    }
}

</script>

<template>
    <TheWelcome/><br><br><br><br>

    <div class="my-5 d-md-flex flex-md-column align-items-md-center">

        <form id="resetPassword" class="col-12 col-md-8 col-lg-5" @submit.prevent="resetPassword">
            <div class="input-group my-3">
                <input :type="showPassword ? 'text' : 'password'"
                       class="form-control"
                       :placeholder="$t('LandingPage.ResetPassword.Placeholder')"
                       :title="$t('LandingPage.ResetPassword.Placeholder')" required
                       v-model="password">
                <button class="btn btn-danger" type="button"
                        @click="() =>togglePasswordVisibility('password')">
                    <component :is="eyeIcon"/>
                </button>
            </div>
            <div class="input-group my-3 d-flex flex-column">
                <div class="input-group">
                    <input :type="showPassword2 ? 'text' : 'password'" class="form-control"
                           :placeholder="$t('LandingPage.ResetPassword.Placeholder2')"
                           :title="$t('LandingPage.ResetPassword.Placeholder2')" required
                           v-model="confirm_password">

                    <button class="btn btn-danger" type="button"
                            @click="() =>togglePasswordVisibility('confirm_password')">
                        <component :is="eyeIcon2"/>
                    </button>
                </div>
                <span class="text-danger" :class="password !== confirm_password ? 'd-block' : 'd-none'">Passwörter stimmen nicht überein</span>
            </div>

            <div class="input-group my-3">
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1">
                    {{ $t('LandingPage.ResetPassword.Button') }}
                </button>
            </div>

        </form>

    </div><br><br>

    <MyFooter/>
</template>

<style scoped>

</style>