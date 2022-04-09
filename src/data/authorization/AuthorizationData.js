import axios from "axios";
import {redirect} from "next/dist/server/api-utils";

export default class AuthorizationData {


    /**
     *
     * @param {HttpClient} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        console.log('as')
    }

    async GetData({code, grant_type}) {
        try {
            console.log('GetData')
            let params = new URLSearchParams({code: code, grant_type: `${grant_type}_oauth`, clientType: 'web'})
            await axios.post(`${process.env.API}/oAuth/`, params.toString())
                .then(result => {
                    localStorage.setItem('access_token', result.data.access_token)
                    localStorage.setItem('refresh_token', result.data.refresh_token)
                    localStorage.setItem('token_type', result.data.token_type)
                    location.assign('http://localhost:3000/explore/1')
                })
        } catch (e) {
            location.assign('http://localhost:3000/')
        }
    }

    async SetData() {
        try {
            let data = await fetch(`${process.env.API}/profile`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')} `
                }
            })
            const resolvedData = await data.json()
            if (!resolvedData.id) {
                localStorage.removeItem('token')
                throw new Error('err')
            } else {
                return resolvedData
            }
        } catch (e) {
            return e
        }
    }

    async checkUser() {
        const params = new URLSearchParams({
            token: localStorage.getItem("access_token"),
        })
        const response = await this.httpClient.post({
            method: "POST",
            url: "/oAuth/check",
            params: params
        })
        return response.data
    }
}