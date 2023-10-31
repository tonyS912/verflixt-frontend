<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import IconEye from "@/assets/icon/IconEye.vue";
import IconEyeSlash from "@/assets/icon/IconEyeSlash.vue";

import {ref} from "vue";
import router from "@/router"

let email = ref('');
let password = ref('');
let eyeIcon = ref(IconEye);
let showPassword = ref(false);

const togglePasswordVisibility = (id) => {
    if (id === 'password') {
        showPassword.value = !showPassword.value;
        eyeIcon.value = showPassword.value ? IconEyeSlash : IconEye;
    }
}

const loginUser = async () => {
    try {
        const url = "https://verflixt-back.tony-schiller.com/authentication/login/";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem('username', responseData.username);
            localStorage.setItem('token', responseData.token);
            //console.log(responseData);
            await router.push({ name: 'video' });
        } else {
            console.log('Fehler bei der Anfrage:', response.status);
        }
    } catch (error) {
        console.error('Fehler bei der Anfrage:', error);
    }
};

</script>

<template>
    <TheWelcome/>

    <div class="d-flex flex-column justify-content-center align-items-center" style="height: 70vh;">
        <h1>{{ $t('LandingPage.LoginPage.Heading') }}</h1>
        <form id="loginUser" class="col-12 col-md-8 col-lg-5" @submit.prevent="loginUser">

            <!--Email-->
            <div class="input-group my-3">
                <input type="email" class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserMail')"
                       :title="$t('LandingPage.LoginPage.UserMail')"
                       v-model="email" required>
            </div>

            <div class="input-group my-3">
                <input :type="showPassword ? 'text' : 'password'"
                       class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.Password')"
                       :title="$t('LandingPage.LoginPage.Password')" required
                       v-model="password">
                <button class="btn btn-danger" type="button"
                        @click="() =>togglePasswordVisibility('password')">
                    <component :is="eyeIcon"/>
                </button>
            </div>

            <!--Register -->
            <div class="input-group my-3">
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1">
                    {{ $t('LandingPage.LoginPage.Button') }}
                </button>
            </div>

        </form>
    </div>

    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>