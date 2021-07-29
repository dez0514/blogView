import axios from 'axios'; // 引入axios
// 创建axios实例
var instance = axios.create({ timeout: 10000 });
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

instance.interceptors.request.use(
	config => {
    //这里做拦截处理
    // console.log('请求的接口', config.url)
		return config;
	},
	error => Promise.error(error)
);
// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	res => {
        // console.log('响应的数据：', res)
        return Promise.resolve(res)
        // return (res.status === 200 && res.data.error_no == '0' ? Promise.resolve(res) : Promise.reject(res))
    },
	// 请求失败
	error => {
    const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围
			return Promise.reject(response);
		} else {
			return Promise.reject(error);
		}
	}
);

export default instance;
