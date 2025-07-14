<template>

    <Hero/>

    <div class=" container mx-auto p-4 w-full ">
        <h1 class="text-xl font-bold my-4">Derniers manga en ligne</h1>
        <ul class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-cols-1 gap-4 ">
            <li v-for="(manga, index) in TopFollowedChapters" :key="manga.mangaId" class="relative">
                <NuxtLink :to="`/catalogue/${manga.mangaId}`" class="cursor-pointer">
                    <img :src="manga.cover" :alt="`cover-${manga.title}`" class="h-64 w-44 object-cover shadow-xl">
                    <div class="relative h-full flex flex-col items-start mt-2">
                        <h1 class="text-sm">{{ manga.title }}</h1>
                        <p class="text-sm text-gray-400"> chapitre {{ manga.chapterNumber }} </p>
                        <span class="text-xs">⭐ {{ manga.rating?.toFixed(1) ?? 'N/A' }}/10</span>
                        <p class="text-xs opacity-60 mt-1">🕒 {{ new Date(manga.publishAt).toLocaleDateString() }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import Hero from '~/components/hero.vue';
import type { MangaMostFollowed } from '~/types/manga.type';


const colorMode = useColorMode();
const TopFollowedChapters = await useMangaTopFollowedChapters();


console.log(TopFollowedChapters);


const isDark =  ref();







watchEffect(()=> {
    isDark.value =  colorMode.preference === 'dark' ? true : false 
})



</script>

<style scoped>
.background-home-black {
   background: #000000;
background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.56) 20%, rgba(0, 0, 0, 0.67) 60%, rgba(0, 0, 0, 1) 85%);
background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 0.56) 20%, rgba(0, 0, 0, 0.67) 60%, rgba(0, 0, 0, 1) 85%);
background: linear-gradient(180deg, rgba(0, 0, 0, 0.56) 20%, rgba(0, 0, 0, 0.67) 60%, rgba(0, 0, 0, 1) 85%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#000000", GradientType=0);
}

.background-home-white {
    background: #ffffff;
    background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0.56) 20%, rgba(255, 245, 245, 0.67) 60%, rgba(255, 255, 255, 1) 85%);
    background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 0.56) 20%, rgba(255, 245, 245, 0.67) 60%, rgba(255, 255, 255, 1) 85%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.56) 20%, rgba(255, 245, 245, 0.67) 60%, rgba(255, 255, 255, 1) 85%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#FFFFFF", GradientType=0);
}
</style>