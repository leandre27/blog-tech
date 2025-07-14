import type { LatestChaptersResponse, MangaListResponse, MangaSingleResponse, MangaStatsResponse, MangaTopFollowedChapters } from "~/types/manga.type";

export const useMangaTopFollowedChapters = async () => {


    const order = {
        followedCount: 'desc',
    }

    const finalOrderQuery:any = [];

    for(const [key,value] of Object.entries(order)) {

        finalOrderQuery[`order[${key}]`]  = value         
    }

    const topFolloweds = await $fetch<MangaListResponse>('https://api.mangadex.org/manga',{
        params: {
            limit: 100,
            finalOrderQuery,
            'availableTranslatedLanguage[]': ['en']
        }
    })

    const topFollowedsIds = topFolloweds.data.map((m) => m.id);


    const resp = await $fetch<LatestChaptersResponse>('https://api.mangadex.org/chapter',{
        params: {
            'translatedLanguage[]': ['fr'],
            'order[publishAt]': 'desc',
            'includes[]': ['manga'],
            limit: 50,
        }
    })
    

    const topFollowedChapter = resp.data.filter((chapter: any) => {

        const mangaID = chapter.relationships.find((manga: any)=> manga.type === "manga")

        return mangaID && topFollowedsIds.includes(mangaID.id);
    })


    const result =  await Promise.all(

        topFollowedChapter.map( async (chapter: any): Promise<MangaTopFollowedChapters> => {
            
            // get manga
            const mangaID = chapter.relationships.find( (d: any) => d.type === "manga" )?.id;
            const manga = await $fetch<MangaSingleResponse>('https://api.mangadex.org/manga/'+ mangaID, {
                params: {
                    "includes[]": ['cover_art']
                }
            });
            

            //get cover of manga
            const coverFileName = manga.data.relationships.find((c: any) => c.type === "cover_art" )?.attributes.fileName;
            const cover = `https://uploads.mangadex.org/covers/${mangaID}/${coverFileName}`; 

            //get statistic

            const statisticData = await $fetch<MangaStatsResponse>(`https://api.mangadex.org/statistics/manga/${mangaID}`);

            const rating = statisticData.statistics?.[mangaID].rating.average
            const follows = statisticData.statistics?.[mangaID].follows;

            

            return {

                chapterId: chapter.id,
                chapterNumber: chapter.attributes?.chapter ?? null,
                chapterTilte: chapter.attributes?.title ?? null,
                publishAt: chapter.attributes.publishAt,
                mangaId: mangaID,
                title: manga.data.attributes?.title?.fr ?? manga.data.attributes?.title?.en,
                cover,
                rating,
                follows
            }
            

            
        })
    )

    return result;

}