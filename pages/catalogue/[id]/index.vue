<template>

    <div class="container mx-auto p-4 w-full h-full">

        <div class="max-w-4/5">
            
        </div>
        <aside class="max-w-1/5">

        </aside>

    </div>

</template>

<script setup lang="ts">
const {id} = useRoute().params

const manga = await useMangaGet(id.toString());


console.log(manga);



</script>

<style scoped>

</style>