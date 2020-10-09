import Axios from 'axios';

export const getItems = ({ lat, lng }) => {
    let msgError = null;
    let results = [];
    const suspender = async () => {
        try {
            const { data } = await Axios.get(`/store?lat=${lat}&lng=${lng}`)
            msgError = false;
            results = data;
        } catch (error) {
            msgError = true;
            results = [];
        }
    }
    return {
        read: async function () {
            if (msgError === null) await suspender();
            return { results, msgError };
        }
    }
}

export const addItem = (requestBody) => {
    alert(2)
    let msgError = null;
    let result = {}
    const suspender = async () => {
        try {
            const { data } = await Axios.post(`http://localhost:3000/graphql`, requestBody);
            result = data;
            msgError = false;
        } catch (error) {
            alert(5)
            console.log(error);
            console.log(error.messsage);
            msgError = true;
        }
    }
    return {
        read: async function () {
            if (msgError === null) await suspender();
            return { result, msgError };
        }
    }
}