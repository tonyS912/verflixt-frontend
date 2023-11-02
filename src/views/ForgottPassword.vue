<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import MyFooter from "@/components/MyFooter.vue";
import {ref} from "vue";

let email = ref('');

</script>

<template>
    <TheWelcome/>

    <div class="my-5 d-md-flex flex-md-column align-items-md-center">

        <form id="resetPassword" class="col-12 col-md-8 col-lg-5">
            <div class="input-group my-3">
                <input type="email" class="form-control"
                       :placeholder="$t('LandingPage.InputRegistry.UserMail')"
                       :title="$t('LandingPage.InputRegistry.UserMail')"
                       v-model="email" required>
            </div>

            <div class="input-group my-3">
                <button class="btn btn-danger col-12 fw-bold" type="submit" id="button-addon1">
                    {{ $t('LandingPage.ResetPassword.Button') }}
                </button>
            </div>

        </form>

    </div>

    <MyFooter class="mt-5"/>
</template>

<style scoped>

</style>