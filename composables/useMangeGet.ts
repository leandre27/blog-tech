import type { LatestChaptersResponse, MangaSingleResponse, MangaStatsResponse } from "~/types/manga.type"

export const useMangaGet = async (id: string) => {

    
    
    const manga = await $fetch<MangaSingleResponse>('https://api.mangadex.org/manga/'+ id,{
        params: {
            "includes[]": ['cover_art','author','artist']
        }
    });

    


    const chaptersData = await $fetch<LatestChaptersResponse>(`https://api.mangadex.org/manga/${id}/feed`, {

        params: {
            'order[chapter]': 'desc'
        }
    });

    const chapter = chaptersData.data.map( (ch) => {
            
        return {
            id: ch.id,
            title: ch.attributes?.title,
            chapter: ch.attributes?.chapter,
            language: ch.attributes?.translatedLanguage,
            publishAt: ch.attributes.publishAt,
        }

    }) ;


    const tags = manga.data.attributes?.tags?.map((tag:any) => {
         return {
             id: tag.id,
             name: tag.attributes?.name?.fr ?? tag.attributes?.name?.en,
             group: tag?.attributes?.group
         }
    })


    const coverFileName = manga.data.relationships.find((co) => co.type === "cover_art")?.attributes.fileName;
    const cover = `https://uploads.mangadex.org/covers/${manga.data.id}/${coverFileName}`;

    const statisticData = await $fetch<MangaStatsResponse>(`https://api.mangadex.org/statistics/manga/${manga.data.id}`);

    const rating = statisticData.statistics?.[manga.data.id].rating.average
    const follows = statisticData.statistics?.[manga.data.id].follows;


    const result = {

        id: manga.data.id,
        title: manga.data.attributes?.title?.fr ?? manga.data.attributes?.title?.en,
        description: manga.data.attributes?.description?.fr ?? manga.data.attributes?.description?.en,
        status: manga.data.attributes.status,
        year: manga.data.attributes?.year ?? null,
        cover,
        tags,
        rating,
        follows,
        chapter

    }

    return result;
   

}

