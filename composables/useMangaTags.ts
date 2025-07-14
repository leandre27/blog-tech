export const useMangaTags = async () => {
    const cashed = useState('manga-tags',() => null);

    if(!cashed.value) {
        const {data} = await useFetch('https://api.mangadex.org/manga/tag');
        const tags = data.value?.data.map((datas: any) => {

            if(datas.attributes.group === "genre") {

                return {
                    id: datas.id as string,
                    group: datas.attributes.group as string,
                    name: datas.attributes.name as object
                }
            }

            
        })

        cashed.value = tags.filter((data: [])=> data != undefined)
    }

    return cashed.value;
}