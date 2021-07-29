import fetch from '../../../request/fetch'
import qs from 'qs'


export const getAirticle = (data) => {
    return fetch({
        url: 'http://localhost:5000/api/article_list',
        method: 'get',
        params: data,
    })
}

export const postAirticle = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`http://localhost:5000/api/add_article`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}


export const updateAirticle = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`http://localhost:5000/api/update_article`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}