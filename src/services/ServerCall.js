
import axios from "axios";

class ServerCall {
    static get(url) {
        return axios.get(url)

    }
    static async get_fetch(url) {
        const res = await fetch(url);
        return res.json();

    }

    static get_xhr(url) {
        return new Promise((resolve, reject) => {
            const httpObj = new XMLHttpRequest();
            httpObj.open("get", url);
            httpObj.send();
            httpObj.onload = () => {
                resolve(httpObj.responseText)
            }
            httpObj.onerror = () => {
                reject(httpObj.responseText)
            }

        });


    }

    static put(url, data) {
        return axios.put(url, data)

    }
    static post(url, data) {
        return axios.put(url, data)
    }
    static delete(url) {
        return axios.put(url)
    }
}

export default ServerCall;