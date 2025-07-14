<template>
   <div class="relative min-h-screen w-full">
        <img 
            :src="mostFollowedData[0].cover" 
            alt="home-one-piece" 
            class="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 z-0">


       
        
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" >
            <template v-for="(manga, index) in mostFollowedData" :key="manga.id">
                
                <div class="container mx-auto relative h-full w-full flex justify-between items-center">
                   <div class="">
                       <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow"> {{ manga.title }} </h1>
                       <p class="text-sm md:text-lg max-w-2xl line-clamp-4"> {{ manga.description }}</p>
                       <div class="flex gap-4 text-sm opacity-80 mt-4">
                            <span>⭐ {{ manga.rating?.toFixed(1) ?? 'N/A' }}/10</span>
                            <span>👥 {{ manga.follows?.toLocaleString() }} abonnés</span>
                            <span>📘 Chap. {{ manga.lastChapter ?? 'N/A' }}</span>
                        </div>
                        <button class="p-3 bg-yellow-500 mt-2 rounded-sm">Lire maintenant</button>

                   </div>
                    <img 
                        :src="manga.cover ?? 'https://fakeimg.pl/300x400'" 
                        alt="home-one-piece" 
                        class="max-h-[70vh] object-contain z-10 drop-shadow-2xl rounded-m">
                </div>
            </template>
           
        </div>  

        <!-- <div :class=" [isDark ? 'bg-black opacity-30 ' : 'bg-white opacity-30 ','absolute inset-0 z-0']  "></div>
        <div :class="[ isDark ? 'background-home-black' : 'background-home-white' , 'absolute inset-0 z-0']  "></div>
       <div class="relative">

            <ul>
                <li v-for="(manga, index) in lastedUpdateChapter" :key="manga.id">
                    {{manga.title}}
                </li>
            </ul>

       </div> -->
    </div>
</template>

<script setup lang="ts">
import { description } from '~/pages/auth/Register.vue';
import type { MangaMostFollowed } from '~/types/manga.type';

const mostFollowedData = await useMostFollowedManga() as MangaMostFollowed[];








</script>

<style scoped>

</style>