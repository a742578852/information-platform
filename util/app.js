
const BASE_URL = "http://47.114.110.211:9501"
export default{
	BASE_URL
}

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		var token = uni.getStorageSync('token')
		var url = BASE_URL
		if (uni.getStorageSync('address') == '218.92.167.118:8089'){
			url = 'http://218.92.167.118:8082'
		}
		if (uni.getStorageSync('address') == '58.220.132.188:8001'){
			url = 'http://58.220.132.188:8006'
		}
		uni.request({
			url: url + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header:options.header || {
				 'content-type': 'application/x-www-form-urlencoded',
				//'content-type': 'application/json',
				'token': token
			},
			success: (res) => {
				if (res.data.code != 200) {
					if(res.data.code==201){
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
					
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败"
				})
				reject(err)
			}
		})
	})
}
