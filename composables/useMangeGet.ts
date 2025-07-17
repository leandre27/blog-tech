import type { LatestChaptersResponse, MangaSingleResponse, MangaStatsResponse } from "~/types/manga.type"

export const useMangaGet = async (id: string, limit:number = 20 , offset:number = 0) => {

    
    
    const manga = await $fetch<MangaSingleResponse>('https://api.mangadex.org/manga/'+ id,{
        params: {
            "includes[]": ['cover_art','author','artist']
        }
    });

        

    const chaptersData = await $fetch<LatestChaptersResponse>(`https://api.mangadex.org/manga/${id}/feed`, {

        params: {
            'order[chapter]': 'desc',
            limit,
            offset
        }
    });
    

    const chapter = chaptersData.data.map( (ch) => {
            
        return {
            id: ch.id,
            title: ch.attributes?.title,
            chapter: ch.attributes?.chapter,
            volume: ch.attributes?.volume,
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
    
    const author = manga.data.relationships.find((d) => d.type === "author")?.attributes;
    const artist = manga.data.relationships.find((d) => d.type === "artist")?.attributes;
    const rating = statisticData.statistics?.[manga.data.id].rating.average
    const follows = statisticData.statistics?.[manga.data.id].follows;


    const result = {

        id: manga.data.id,
        title: manga.data.attributes?.title?.fr ?? manga.data.attributes?.title?.en,
        description: manga.data.attributes?.description?.fr ?? manga.data.attributes?.description?.en,
        status: manga.data.attributes.status,
        year: manga.data.attributes?.year ?? null,
        author: {
            name: author.name,
            link: author.twitter ?? null
        },
        artist: {
            name: artist.name,
            link: artist.twitter ?? null
        },
        cover,
        tags,
        rating,
        follows,
        chapter

    }

    return result;
   

}

