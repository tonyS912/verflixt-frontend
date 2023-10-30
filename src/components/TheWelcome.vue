<script setup>
import TranslationIcon from "@/assets/icon/TranslationIcon.vue";
import {ref} from "vue";
import {useI18n} from 'vue-i18n';


const selectedLanguage = ref('');
const {locale} = useI18n();

const toggleLanguage = (option) => {
    selectedLanguage.value = option;
    if (selectedLanguage.value === 'Deutsch') {
        console.log(selectedLanguage.value)
        console.log('jetzt sollte Deutsch sein')
        locale.value = selectedLanguage.value
    } else if (selectedLanguage.value === 'English') {
        console.log(selectedLanguage.value)
        console.log('jetzt sollte Englisch sein')
        locale.value = selectedLanguage.value
    }
};

</script>

<template>
    <!--  Header-->
    <div class="d-flex justify-content-between position-sticky top-0">

        <!--    Logo-->
        <div class="col-6">
            <a type="button" href="#"><img class="h-auto w-75" src="../assets/icon/png/verflixtLogo.png"
                                           alt="videoflix logo"/></a>
        </div>

        <!--    Choose Language Model-->
        <div class="col-3 d-flex justify-content-center me-2">
            <div class="dropdown-center">
                <button class="btn btn-dark border-white text-white dropdown-toggle" type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <TranslationIcon/>
                    <span class="d-none">{{ $t('LandingPage.ChooseLanguage') }}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark border-1 border-secondary-subtle">
                    <li class="btn dropdown-item text-white fw-bold"
                            @click="toggleLanguage('Deutsch')">
                        {{ $t('LandingPage.LanguageOptions.option-1') }}
                    </li>
                    <li>
                        <hr class="dropdown-divider bg-secondary-subtle">
                    </li>
                    <li class="btn dropdown-item text-white fw-bold"
                           @click="toggleLanguage('English')">
                        {{ $t('LandingPage.LanguageOptions.option-2') }}
                    </li>
                </ul>
            </div>
        </div>

        <!--    Login Button-->
        <div class="col-3 d-flex justify-content-center">
            <RouterLink type="button" class="btn btn-danger" :to="{ path: '/login' }" >{{ $t('LandingPage.Login') }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>