export default defineEventHandler(async () => {
    return await $fetch('https://api.mangadex.org/manga',{
        method: 'GET',
    })
})