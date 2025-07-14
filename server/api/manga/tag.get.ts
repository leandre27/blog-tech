export default defineEventHandler(async () => {

    try {

        const data =  await $fetch('https://api.mangadex.org/manga/tag',{ method: 'GET'});
        return data
        
    } catch (error) {
        console.error('Une erreur est a été détecté: '+ error);
    }

})