<template>

    <div class="container mx-auto p-4 w-full h-full">

        <div class="max-w-4/5 flex flex-col justify-center items-center space-y-6">

            <section class="p-4 border border-gray-400 flex flex-col justify-center items-center">

                <div class="p-6 rounded-xl w-full text-center bg-slate-900">
                    <h1 class="text-2xl font-bold "> {{ manga.title }} </h1>
                </div>
                <div class="w-full mt-4 space-x-4 flex justify-between">
                    <div class="block">
                        <img :src="manga.cover" :alt="'cover-'+manga.title" class="max-h-[64vh] rounded-md object-cover">
                    </div>
                    <div class="block max-w-3xl space-y-4">
                        <div class="">
                            <p> {{ manga.description }} </p>
                        </div>
                        
                        <div class="w-full mt-2 ">
                            <div class="space-x-4">
                                <span >  
                                    <lucideStar :stroke-width="1" :size="18" class="inline stroke-amber-300 fill-amber-500 transition ease-in-out hover:scale-110"/> 
                                {{ manga.rating.toFixed(1) }}/10 </span>
                                <span>  
                                    <LucideBookmark  :stroke-width="1" :size="18" class="inline  fill-white  transition ease-in-out hover:scale-110" />
                                    {{ manga.follows.toLocaleString().slice(0, 2) }} {{ manga.follows.toLocaleString().length > 5 ?  'k' : '' }}  </span>
                            </div>

                            <div v-if="manga.author">
                                <h1>Auteur</h1>
                                <a class="text-sm px-4 py-2 rounded-full border border-slate-800 " :href="manga.author.link" target="_blank"> {{ manga.author.name }} </a>
                            </div>

                            <div v-if="manga.artist">
                                <h1>Artiste</h1>
                                <a  class="text-sm px-4 py-2 rounded-full border border-slate-800 " :href="manga.artist.link" target="_blank"> {{ manga.artist.name }} </a>
                            </div>
                        </div>
                        

                        <div class="w-full">
                            <h1>Genres</h1>
                            <div  class="flex w-full space-x-2 my-2">
                                <template v-for="(tag,i) in manga.tags" :key="tag.id">
                                    <div v-if="tag.group === 'genre'">
                                        <NuxtLink class="text-sm px-4 py-2 rounded-full border border-slate-800"> {{ tag.name }}</NuxtLink>
                                    </div>
                                </template>
                            </div>
                        </div>

                        <div class="w-full">
                            <h1>Theme</h1>
                            <div  class="flex w-full space-x-2 my-2">
                                <template v-for="(tag,i) in manga.tags" :key="tag.id">
                                    <div v-if="tag.group === 'theme'">
                                        <NuxtLink class="text-sm px-4 py-2 rounded-full border border-slate-800"> {{ tag.name }}</NuxtLink>
                                    </div>
                                </template>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </section>

            <section class="w-full">
                <div class=" p-2 w-full rounded-sm text-center text-xl bg-slate-700 border-b-2 border-white">
                    <h1 class="font-bold">Liste des chapitres</h1>
                </div>

                <div class="w-full space-y-4">
                    <!-- <input 
                        type="text" 
                        class="w-full outline-0 ring-1 ring-slate-500 rounded-sm p-2 mt-2 "
                        placeholder="Recherche un chapitre ...."
                    /> -->
    
                    <ul class="grid grid-cols-5 gap-2 mt-2 ">
                        <li v-for="(chapitre,i) in manga.chapter" :key="chapitre.id">
                            <NuxtLink class="block p-2 w-full border border-slate-800 rounded-md cursor-pointer">
                                <h1> {{ chapitre.chapter }} </h1>
                                <span> {{ dateFormat(chapitre.publishAt)  }} </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                
            </section>
        </div>
        <aside class="max-w-1/5">

        </aside>

    </div>

</template>

<script setup lang="ts">
import { LucideStar, LucideBookmark, NuxtLink } from '#components';

const {id} = useRoute().params

const manga = await useMangaGet(id.toString());

console.log(manga);


function dateFormat( timetemp: string ) {
    const date = new Date(timetemp);
    const option = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    } as {}

    return  new Intl.DateTimeFormat('fr-FR', option).format(date);
}


</script>

<style scoped>

</style>