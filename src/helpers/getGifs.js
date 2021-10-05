const getGifs = async (categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=3PqVC43w9xhYdA2Gg0HvXFAz1LIftaec`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}

export default getGifs;