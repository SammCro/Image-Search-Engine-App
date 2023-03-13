import axios from "axios";

const searchImages = async (word) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers : {
            Authorization : 'Client-ID i99PJTL1axcAB-1UqieYu8rJNHeHq2OsJ9n02CKK554',
        },
        params : {
            query : word,
        },
    });
    return response.data.results;
}

export default searchImages;