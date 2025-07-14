<template>
    <header class="container mx-auto p-4 w-full flex justify-between items-center">
        <span>DabaScan</span>
        <nav>
            <ul class="flex items-center space-x-4">
                <li class="dark:text-yellow-500">Accueil</li>
                <li>Catégories</li>
                <li>Nouvelle saison</li>
                <li>Les plus populaires</li>
                <li class="flex items-center ">
                    <div class="flex items-center bg-slate-200 rounded-md p-2">
                        <LucideSearch :size="18" class="text-slate-400"/>
                        <input type="text" class="outline-0 ps-2" placeholder="Recherhce...">
                    </div>
                </li>
                <li class="flex items-center ">
                    <LucideBell :size="18"/>
                </li>
                <li class="flex items-center ">
                    <ToggleDarkMode />
                </li>
                <li class="space-x-2">
                    <NuxtLink class="bg-yellow-500 text-slate-800 p-2 rounded-md font-bold">Se connecter</NuxtLink>
                    <NuxtLink>Créer un compte</NuxtLink>
                </li>
            </ul>
        </nav>
        
    </header>

    <slot/>

    <footer>

    </footer>
</template>

<script setup lang="ts">
import {LucideSearch, LucideBell} from "#components"
import ToggleDarkMode from "~/components/toggleDarkMode.vue";
</script>

<style scoped>

</style>