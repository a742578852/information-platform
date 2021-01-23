
const BASE_URL = "http://192.168.10.51:8081"
export default{
	BASE_URL
}

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		var token = uni.getStorageSync('token')
	
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header:{
				'content-type': 'application/x-www-form-urlencoded',
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