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
                        
                        <div class="">
                            <table>
                                <tbody>
                                    <tr >
                                        <td>
                                            <span>Genre :</span>
                                        </td>
                                        <td>
                                            <ul class="flex space-x-2">
                                                <li v-for="(tag,i) in manga.tags" :key="tag.id" >
                                                    <template v-if="tag.group === 'genre'">
                                                        <NuxtLink class="text-sm px-4 py-2 rounded-full border border-slate-800"> {{ tag.name }}</NuxtLink>
                                                    </template>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Année :</span>
                                        </td>
                                        <td>
                                            <ul class="flex space-x-2">
                                                <li >
                                                    <NuxtLink class="text-sm px-4 py-2 rounded-full border border-slate-800"> {{ manga.year }}</NuxtLink>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full">
                <div class=" p-2 w-full rounded-sm text-center text-xl bg-slate-700 border-b-2 border-white">
                    <h1 class="font-bold">Liste des chapitres</h1>
                </div>

                <div class="w-full space-y-4">
                    <input 
                        type="text" 
                        class="w-full outline-0 ring-1 ring-slate-500 rounded-sm p-2 mt-2 "
                        placeholder="Recherche un chapitre ...."
                    />
    
                    <div class="overflow-hidden h-96 overflow-y-scroll">
                        <ul class="grid grid-cols-5 gap-2 mt-2 ">
                            <li v-for="(chapitre,i) in manga.chapter" :key="chapitre.id">
                                <NuxtLink class="block p-2 w-full border border-slate-800 rounded-md cursor-pointer">
                                    <h1> {{ chapitre.chapter }} </h1>
                                    <span> {{ dateFormat(chapitre.publishAt)  }} </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </section>
        </div>
        <aside class="max-w-1/5">

        </aside>

    </div>

</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

const {id} = useRoute().params

const manga = await useMangaGet(id.toString());


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