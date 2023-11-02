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
};


const loginUser = async () => {
    try {
        const url = "https://verflixt-back.tony-schiller.com/authentication/login/";

        //console.log("triggern der sendLoginRequest funktion")
        const response = await sendLoginRequest(url);
        //console.log("fetching abgeschlossen");

        //console.log("response if start")
        if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem('username', responseData.username);
            localStorage.setItem('token', responseData.token);
            //console.log("daten wurd im localstorage gespeichert")

            const token = responseData.token;
            //console.log("sendAuthenticatedRequest getriggert")
            const success = await sendAuthenticatedRequest(token);

            if (success) {
                await router.push({name: 'video'});
            } else {
                console.log('Fehler bei der Anfrage');
            }
        }
    } catch (error) {
        console.error('Fehler bei der Anfrage:', error);
        // TODO: ob du behindert bist hab ich gefragt
    }
};


const sendLoginRequest = async (url) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        redirect: 'follow',
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
    };
    //console.log("fetching start", url)
    return await fetch(url, requestOptions);
};


const sendAuthenticatedRequest = async (token) => {
    const url = "https://verflixt-back.tony-schiller.com/videos/"
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        redirect: 'follow',
    };
    //console.log("mitten in sendAuth", url, requestOptions)
    const response = await fetch(url, requestOptions);
    return response.ok;
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
            <a class="text-danger" href="/forgotPassword">Passwort Vergessen</a>

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