import axios from "axios";

const searchImages = async (word) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers : {
            Authorization : 'Client-ID 2lwa_EBR_9NhmveKJ9qgswQGE_LS4cdVg7ua-sv6mj0',
        },
        params : {
            query : word,
        },
    });
    return response.data.results;
}

export default searchImages;