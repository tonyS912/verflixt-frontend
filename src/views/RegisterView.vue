<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import IconEye from "@/assets/icon/IconEye.vue";
import IconEyeSlash from "@/assets/icon/IconEyeSlash.vue";
import MyFooter from "@/components/MyFooter.vue";

import {ref} from "vue";

let username = ref('');
let email = ref('');
let password = ref('');
let password2 = ref('');
let firstName = ref('');
let lastName = ref('');
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

const registerUser = ref(() => {
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
    fetch(url, requestOptions)
});

</script>

<template>
    <TheWelcome/>
    <div class="mt-5 d-md-flex flex-md-column align-items-md-center">
        <h1>{{ $t('LandingPage.InputRegistry.Heading') }}</h1>
        <form id="registerUser" class="col-12 col-md-8 col-lg-5" @submit="registerUser">
            <!--Username-->
            <div class="input-group my-3">
                <input type="text"
                       class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserName')"
                       :title="$t('LandingPage.InputRegistry.UserName')" required
                       v-model="username">
            </div>

            <!--Email-->
            <div class="input-group my-3">
                <input type="email" class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserMail')"
                       :title="$t('LandingPage.InputRegistry.UserMail')"
                       v-model="email" required>
            </div>

            <!--Password Section -->
            <div class="input-group my-3">
                <input :type="showPassword ? 'text' : 'password'"
                       class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.Password')"
                       :title="$t('LandingPage.InputRegistry.Password')" required
                       v-model="password">
                <button class="btn btn-danger" type="button"
                        @click="() =>togglePasswordVisibility('password')">
                    <component :is="eyeIcon"/>
                </button>
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
                <span class="text-danger" :class="password !== password2 ? 'd-block' : 'd-none'">Passwörter stimmen nicht überein</span>
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
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1">
                    {{ $t('LandingPage.InputRegistry.Button') }}
                </button>
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