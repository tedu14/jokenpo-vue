import swrv from 'swrv'
import api from '../services/api'

export default function fetcher(){
    return{
        registerPlayer(url, sendData){
            const { data, error, mutate } = swrv(url, (url) => {
                const res = api.post(url, sendData).then(res => res.data)

                return res
            })

            return { data, error, mutate }
        }
    }
}