<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import IconEye from "@/assets/icon/IconEye.vue";
import IconEyeSlash from "@/assets/icon/IconEyeSlash.vue";
import MyFooter from "@/components/MyFooter.vue";

import {computed, ref} from "vue";
import router from "@/router";

let username = ref('');
let usernameError = ref('');
let email = ref('');
let password = ref('');
let password2 = ref('');
let passwordError = ref('');
let firstName = ref('');
let lastName = ref('');
let showPassword = ref(false);
let showPassword2 = ref(false);
let eyeIcon = ref(IconEye);
let eyeIcon2 = ref(IconEye);

const validateUsername = () => {
    const noSpacesPattern = /^[^\s]+$/;

    usernameError.value = noSpacesPattern.test(username.value);
    //console.log(usernameError.value)
}

const togglePasswordVisibility = (id) => {
    if (id === 'password') {
        showPassword.value = !showPassword.value;
        eyeIcon.value = showPassword.value ? IconEyeSlash : IconEye;
    } else if (id === 'confirm_password') {
        showPassword2.value = !showPassword2.value;
        eyeIcon2.value = showPassword.value ? IconEyeSlash : IconEye;
    }
};

const validatePassword = () => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!?$%^&+=]).{6,}$/;

    passwordError.value = passwordPattern.test(password.value);
    //console.log(passwordError.value)
}

const disableSubmitButton = computed(() => {
    return usernameError.value !== true || passwordError.value !== true || password.value !== password2.value;
});

const registerUser = async () => {
    const url = "https://verflixt-back.tony-schiller.com/authentication/register/";
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
    };
    requestOptions.body = JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        confirm_password: password2.value,
        first_name: firstName.value,
        last_name: lastName.value,
    });
    const success = await fetch(url, requestOptions)

    if (success) {
        await router.push({name: "confirmation"})
    }
};

</script>

<template>
    <TheWelcome/>
    <div class="mt-5 d-md-flex flex-md-column align-items-md-center">
        <h1>{{ $t('LandingPage.InputRegistry.Heading') }}</h1>
        <form id="registerUser" class="col-12 col-md-8 col-lg-5" @submit.prevent="registerUser">
            <!--Username-->
            <div class="input-group my-3 d-flex flex-column">
                <div class="input-group">
                    <input type="text"
                           class="form-control col-12"
                           :placeholder="$t('LandingPage.InputRegistry.UserName')"
                           :title="$t('LandingPage.InputRegistry.UserName')" required
                           v-model="username" @input="validateUsername">

                </div>
                <span class="text-light" :class="usernameError ? 'd-none' : 'd-block'">{{
                        $t('LandingPage.RegisterPage.notAllowed')
                    }}</span>
            </div>

            <!--Email-->
            <div class="input-group my-3">
                <input type="email" class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserMail')"
                       :title="$t('LandingPage.InputRegistry.UserMail')"
                       v-model="email" required>
            </div>

            <!--Password Section -->
            <div class="input-group my-3 d-flex flex-column">
                <div class="input-group">
                    <input :type="showPassword ? 'text' : 'password'"
                           class="form-control"
                           :placeholder="$t('LandingPage.InputRegistry.Password')"
                           :title="$t('LandingPage.InputRegistry.Password')" required
                           v-model="password"
                           @input="validatePassword">
                    <button class="btn btn-danger" type="button"
                            @click="() =>togglePasswordVisibility('password')">
                        <component :is="eyeIcon"/>
                    </button>
                </div>
                <span class="text-light" :class="passwordError ? 'd-none' : 'd-block'">{{
                        $t('LandingPage.RegisterPage.requirements')
                    }}</span>
            </div>
            <div class="input-group my-3 d-flex flex-column">
                <div class="input-group">
                    <input :type="showPassword2 ? 'text' : 'password'" class="form-control"
                           :placeholder="$t('LandingPage.InputRegistry.ConfirmPassword')"
                           :title="$t('LandingPage.InputRegistry.ConfirmPassword')" required
                           v-model="password2">

                    <button class="btn btn-danger" type="button"
                            @click="() =>togglePasswordVisibility('confirm_password')">
                        <component :is="eyeIcon2"/>
                    </button>
                </div>
                <span class="text-light" :class="password !== password2 ? 'd-block' : 'd-none'">{{
                        $t('LandingPage.RegisterPage.unequalPassword')
                    }}</span>
            </div>

            <!--User Credentials -->
            <div class="input-group my-3">
                <input type="text" class="form-control" :placeholder="$t('LandingPage.InputRegistry.FirstName')"
                       :title="$t('LandingPage.InputRegistry.FirstName')" required
                       v-model="firstName">
            </div>
            <div class="input-group my-3">
                <input type="text" class="form-control" :placeholder="$t('LandingPage.InputRegistry.LastName')"
                       :title="$t('LandingPage.InputRegistry.LastName')" required
                       v-model="lastName">
            </div>

            <!--Register -->
            <div class="input-group my-3">
                <Button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1"
                        :disabled="disableSubmitButton">
                    {{ $t('LandingPage.InputRegistry.Button') }}
                </Button>
            </div>

        </form>
    </div>
    <MyFooter class="mt-5"/>
</template>

<style scoped>
input::placeholder {
    color: lightcoral;
}
</style>