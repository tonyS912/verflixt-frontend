<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import IconEyeSlash from "@/assets/icon/IconEyeSlash.vue";
import IconEye from "@/assets/icon/IconEye.vue";
import {ref} from "vue";

let password = ref('');
let password2 = ref('');
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

</script>

<template>
    <TheWelcome/>

    <div class="my-5 d-md-flex flex-md-column align-items-md-center">

        <form id="resetPassword" class="col-12 col-md-8 col-lg-5">
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
                           v-model="password2">

                    <button class="btn btn-danger" type="button"
                            @click="() =>togglePasswordVisibility('confirm_password')">
                        <component :is="eyeIcon2"/>
                    </button>
                </div>
                <span class="text-danger" :class="password !== password2 ? 'd-block' : 'd-none'">Passwörter stimmen nicht überein</span>
            </div>

            <div class="input-group my-3">
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1">
                    {{ $t('LandingPage.ResetPassword.Button') }}
                </button>
            </div>

        </form>

    </div>

    <MyFooter/>
</template>

<style scoped>

</style>