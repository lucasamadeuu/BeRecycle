import axios from "axios";
import base64 from "react-native-base64";
import { api, baseUrl, baseUrlUser } from "../../services/api";

export const getAxios = async (CallBack, url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        CallBack(data);
    } catch (error) {
        console.error(error);
    }
};

export const postAxios = async (CallBack, url, data) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrl}/${url}`

    axios
        .post(completeUrl, data, { headers })
        .then((response) => {
            console.log("Inserido no banco de dados!")
            CallBack(response.status)
        }).catch(function (error) {
            console.log(error);
            CallBack(error)
        })
};

export const GetUser = async (CallBack, url, data) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrlUser}/${url}`

    axios
        .post(completeUrl, data, { headers })
        .then((response) => {
            CallBack(response.data)
        }).catch(function (error) {
            console.log(error);
            CallBack(error)
        })
};