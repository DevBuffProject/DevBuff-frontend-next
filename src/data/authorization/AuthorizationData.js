
export default class AuthorizationData {


    /**
     *
     * @param {HttpClient} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async GetData({code, grant_type}) {

            let params = new URLSearchParams({code: code, grant_type: `${grant_type}_oauth`, clientType: 'web'})
            const res = await this.httpClient.post('/oAuth',params)
            return res.data

            // await axios.post(`${process.env.API}/oAuth/`, params.toString())
            //     .then(result => {
            //         localStorage.setItem('access_token', result.data.access_token)
            //         localStorage.setItem('refresh_token', result.data.refresh_token)
            //         localStorage.setItem('token_type', result.data.token_type)
            //         location.assign('http://localhost:3000/explore/1')
            //     })
            // location.assign('http://localhost:3000/')
    }


    async checkUser(accessToken) {
        const params = new URLSearchParams({
            token: accessToken
        })
        const response = await this.httpClient.post("/oAuth/check", params)
        return response.data
    }
}