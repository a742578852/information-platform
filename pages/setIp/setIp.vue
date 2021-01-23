<template>
	
	<view id="setIp"  >
		
		<view class="setIp">请配置网址信息</view>
		<view class="ipDddress">IP:</view>
		<view class="ipPort">端口:</view>
		<input type="text" class="ip" v-model="ip" placeholder="请输入IP">
		<input type="text" class="port" v-model="port" placeholder="请输入端口号">
		<button class="btn" @click="btn">保存</button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				ip:'',
				port:''
			}
		},
		onShow() {
			this.ip = uni.getStorageSync('ip')
			this.port = uni.getStorageSync('port')
		},
		methods: {
			async btn(){
				uni.setStorageSync('ip',this.ip)
				uni.setStorageSync('port',this.port)
				if((this.ip.trim()!='') && (this.port.trim()!='')){
					var p = this.ip+':'+this.port
					console.log(p)
					const res =await this.$myRequest({
						method:'POST',
						url:'/login/testConnection',
						data:{
							address:p
						}
					})
					if(res.data.code==200){
						uni.setStorageSync('address',p)
						uni.navigateTo({
							url:'../login/login',
							})
					}
				}else{
					uni.showToast({
						title:'请填写IP和端口号'
					})
				}
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 600px;
		background-color: #66ffff;
	}
	#setIp{
		margin-top: 100px;
		
	}
	.setIp{
		text-align: center;
		font-size: 20px;
	}
	
		/* #ifdef APP-PLUS */
	.ipDddress{
		font-size: 18px;
		position: absolute ;
		top: 145px;
		left: 15px;
	}
	.ipPort{
		font-size: 18px;
		position: absolute ;
		top: 185px;
		left: 15px;
	}
	/* #endif */
	
	/* 运行在H5 */
	/* #ifdef H5 */
	.ipDddress{
		font-size: 18px;
		position: absolute ;
		top: 48px;
		left: 15px;
	}
	.ipPort{
		font-size: 18px;
		position: absolute ;
		top: 90px;
		left: 15px;
	}
	/* #endif */
	.ip{
		width:65%;
		height:47px;
		margin:0px auto;
		border-bottom:1px solid;
		display: flex;
	}
	.port{
		width:65%;
		height:47px;
		margin:0px auto;
		border-bottom:1px solid;
		display: flex;
	}
	.btn{
		width: 60%;
		background-color: #007AFF;
		margin-top: 20px;
	}
</style>
