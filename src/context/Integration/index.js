import axios from "axios";

export const getAxios = async (CallBack, url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        CallBack(data);
    } catch (error) {
        console.error(error);
    }
};