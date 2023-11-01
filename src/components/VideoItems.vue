<script setup>

import {onBeforeMount, ref} from "vue";

const videos = ref([]);

const fetchVideo = async () => {
    const url = "https://verflixt-back.tony-schiller.com/videos";
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Token ${token}`},
        redirect: 'follow',
    };
    try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const videoData = await response.json();
            videos.value = videoData; // Videos in der Datenvariable speichern
        } else {
            console.error('Fehler bei der Anfrage:', response.status);
        }
    } catch (error) {
        console.error('Fehler bei der Anfrage:', error);
    }
};

onBeforeMount(() => {
    fetchVideo(); // Fetch-Befehl beim Laden der Seite ausführen
});

</script>

<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 my-4">

        <div v-for="video in videos" :key="video.id" class="col">
            <div class="card bg-secondary mb-2">
                <h3 class="ps-3 mx-1 mt-3">{{ video.title }}</h3>
                <div class="card-body">
                    <video class="align-self-center col-12 justify-content-center mb-2" :src="video.video_file" controls preload="auto"></video>
                    <p class="card-text mx-1">{{ video.description }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>