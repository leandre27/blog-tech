import type { MangaListResponse, MangaMostFollowed, MangaStatsResponse } from "~/types/manga.type";

export const useMostFollowedManga = async () => {
    const topMangaData = await $fetch<MangaListResponse>('https://api.mangadex.org/manga',{
        params: {
            limit: 1,
            "order[followedCount]": "desc",
            "availableTranslatedLanguage[]":["fr"],
            "includes[]":['cover_art'],
            hasAvailableChapters: true,
            "order[rating]": "desc"
        }
    })

    
    return await Promise.all(

        topMangaData?.data.map(async( manga:any): Promise<MangaMostFollowed | null> => {

            
            
            const fileName = manga.relationships.find((r: any) => r.type === 'cover_art').attributes?.fileName;
            const cover = `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`;


            const statData = await $fetch<MangaStatsResponse>(`https://api.mangadex.org/statistics/manga/${manga.id}`)
                        

            const follows = statData.statistics?.[manga.id].follows;
            const rating = statData.statistics?.[manga.id].rating?.average;        
            
            
            return {
                id: manga.id,
                title: manga?.attributes?.title?.fr ?? manga?.attributes?.title?.en,
                description: manga?.attributes?.description.fr ?? manga?.attributes?.description?.en,
                lastChapter: manga?.attributes?.lastChapter ?? null,
                updatedAt: manga?.attributes?.updatedAt,
                cover,
                follows,
                rating,            
            }
    }) ?? []
)
}