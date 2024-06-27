import { useEffect, useState } from "react";
import { sendSearch } from "../helpers/searchGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await sendSearch(category);
        setImages(images);
        setIsLoading(false);
    };

    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
