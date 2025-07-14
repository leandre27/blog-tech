import type { LatestChaptersResponse, MangaListResponse, MangaStatsResponse } from "~/types/manga.type"

export const useMangaGet = async (id: string) => {


    const mangaData = await $fetch<MangaListResponse>('https://api.mangadex.org/manga/'+ id,{
        params: {
            "includes[]": ['cover_art','author','artist','tag']
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



    return await Promise.all(

        mangaData.data.map(async (ma) => {


            const tags = ma.attributes?.tags?.map((tag:any) => {
                return {
                    id: tag.id,
                    name: tag.attributes?.name?.fr ?? tag.attributes?.name?.en,
                    group: tag.group
                }
            })


            const coverFileName = ma.relationships.find((co) => co.type === "cover_art")?.attributes.fileName;
            const cover = `https://uploads.mangadex.org/covers/${ma.id}/${coverFileName}`;

            const statisticData = await $fetch<MangaStatsResponse>(`https://api.mangadex.org/statistics/manga/${ma.id}`);

            const rating = statisticData.statistics?.[ma.id].rating.average
            const follows = statisticData.statistics?.[ma.id].follows;


            return {

                id: ma.id,
                title: ma.attributes?.title?.fr ?? ma.attributes?.title?.en,
                description: ma.attributes?.description?.fr ?? ma.attributes?.description?.en,
                status: ma.attributes.status,
                year: ma.attributes?.year ?? null,
                cover,
                tags,
                rating,
                follows,
                chapter

            }
        })
    )


}

