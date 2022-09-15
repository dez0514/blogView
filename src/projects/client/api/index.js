import fetch from '../../../request/fetch'
import { baseUrl } from '../../../request/getUrls'

import qs from 'qs'
// 文章列表
export const getArtList = (data) => {
    return fetch({
        url: `${baseUrl}/api/article_list`,
        method: 'get',
        params: data,
    })
}
//文章详情
export const getArtDetail = (data) => {
    return fetch({
        url: `${baseUrl}/api/article_detail`,
        method: 'get',
        params: data,
    })
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
        url: 'http://localhost:5001/api/article_list',
        method: 'get',
        params: data,
    })
}

export const getAirticleDetail = (data) => {
    return fetch({
        url: 'http://localhost:5001/api/article_detail',
        method: 'get',
        params: data,
    })
}


export const postAirticle = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`http://localhost:5001/api/add_article`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}


export const updateAirticle = (params) => {
    let data = qs.stringify(params)
    return fetch.post(`http://localhost:5001/api/update_article`, data, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}