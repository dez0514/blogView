import fetch from '../../../request/fetch'
import { baseUrl } from '../../../request/getUrls'
import qs from 'qs'

export const getTagList = (data) => {
    return fetch({
        url: `${baseUrl}/api/tag_list`,
        method: 'get',
        params: data,
    })
}
export const addNewTag = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`${baseUrl}/api/add_tag`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}

export const addNewArticle = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`${baseUrl}/api/add_article`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}

export const getTags = (data) => {
    return fetch({
        url: 'http://localhost:5000/api/tag_list',
        method: 'get',
        params: data,
    })
}
export const addTags = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`http://localhost:5000/api/add_tag`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}

export const getAirticle = (data) => {
    return fetch({
        url: 'http://localhost:5000/api/article_list',
        method: 'get',
        params: data,
    })
}

export const getAirticleDetail = (data) => {
    return fetch({
        url: 'http://localhost:5000/api/article_list_detail',
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