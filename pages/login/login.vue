<template>
	<view>
		<view style="padding-top:260rpx;">
			<view style="height:80px;">
				<view class="welcome">欢迎使用信息化平台</view>
				<view class="login-input"  :class="{active:distinguish==true}">
					<image src="../../static/yx-login/user.png"></image>
					<input type="text" placeholder="请输入当前账号" v-model="From.UserName" placeholder-style="color:#fff"/>
					<!-- <image src="../../static/yx-login/delete.png" v-if="From.UserName" @click="From.UserName=null" class="delete"></image> -->
				</view>
				<!-- <text class="tips" v-show="distinguish">{{UserNametips}}</text> -->
			</view>
			
			<view style="height:80px;">
			<view class="login-input"  :class="{active:distinguish==true}">
				<image src="../../static/yx-login/password.png"></image>
				<input type="test" placeholder="请输入当前密码" :password="showPassword" v-model="From.PassWord"  placeholder-style="color:#fff" />
				
				<image src="../../static/yx-login/yanjing.png" class="switch" @click="Switch()"></image>
			</view>
			<!-- <text class="tips" v-show="distinguish">{{PassWordtips}}</text> -->
			</view>
		</view>
		
		<view class="login-button">
			<text class="register" @click="Jump">首次登录请设置IP</text>
			<button @click="login">点击登录</button>
		</view>
		
	</view>
</template>

<script>
	/* 本图标全部使用阿里图标,图标目录static yx-login */
	export default {
		data() {
			return {
				From:{
					UserName:'', //账号
					PassWord:'', //密码
				},
				checked:false, //单选框
				distinguish:false,
				UserNametips:'',
				PassWordtips:'',
				showPassword:true,
				tx:''
			}
		},
		
		// 读取本地存储密码及账号
		onShow() {
		  this.From.UserName =uni.getStorageSync('username')
		  // this.From.PassWord = uni.getStorageSync('password')
		},
		onBackPress(options) {  
		            return true;  
		        }, 
		methods: {
			
			/* 
			登录逻辑部分
			 */
			async login(){
				var that = this
				var address = uni.getStorageSync('address')
				console.log(address);
				if(address!=''){
					if(that.From.UserName==''){
						uni.showToast({
							title:'请填写用户名'
						})
						that.UserNametips='请输入用户名'
					}else if(that.From.PassWord==''){
						uni.showToast({
							title:'请输入密码'
						})
						that.PassWordtips='请输入密码'
					}else{
					const res =await this.$myRequest({
							url:'/login/goLogin',
							method:'POST',
							data:{
								address:address,
								username:that.From.UserName,
								password:that.From.PassWord
							}
						})
						
						if(res.data.code==200){
							uni.setStorageSync('admin',res.data.data.admin)
							uni.setStorageSync('token',res.data.data.token)
							console.log(res.data.data.token);
							uni.setStorageSync('username',that.From.UserName)
							uni.setStorageSync('password',that.From.PassWord)
							uni.switchTab({
								url:'../index/index'
							})
						}else{
							uni.showToast({
								title:'用户名或密码错误'
							})
						}
					}
				}else{
					uni.showToast({
						title:'请先设置IP'
					})
				}
				
			},
			Jump(){
				uni.navigateTo({
					url:'../setIp/setIp',
					
				})
			},
			/* 记住密码用户第二次进入页面直接填充 */
			clickchecked(){
				var that = this
				this.checked =!this.checked
				if(that.checked == true){
					if(that.From.UserName && that.From.PassWord){
						uni.setStorage({
							key:'UserInfo',
							data:that.From
						})
					}	
				}
			},
			Delete(){
				this.From.UserName = ""
			},
			Delete2(){
				this.From.PassWord = ""
			},
			
			Switch(){
				this.showPassword = !this.showPassword
			}
		}
	}
</script>

<style lang="less">
	/* 背景图设置 */
	page{
		width:100%;
		height:100%;
		background-image: url(../../static/yx-login/index1.jpg);
		background-repeat: no-repeat;
		background-size:100% 100%;
		}
	.login-input{
		width:85%;
		height:47px;
		margin:0px auto;
		border-bottom:1px solid rgb(255,255,255);
		display: flex;
		input{
			width:91%;
			border: none;
			height:20px;
			color: rgb(255,255,255);
			padding-left:15px;
			padding-right:15px;
			font-size:14px;
			margin-top:27px;
			outline: none;
			-webkit-appearance: none; /*去除系统默认的样式*/
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/
		}
		
		image{
			width:23px;
			height:20px;
			margin-top:25px;
			
		}
		.delete{
			width:20px;
			height:20px;
			margin-left:-20px;
		}
		.switch{
			width:23px;
			height:14px;
			padding-top:3px;
		}
	}
	.login-button{
		width:85%;
		margin:0px auto;
		button{
			width:100%;
			font-size:15px;
			height:40px;
			color: rgb(255,255,255);
			background-color: rgb(78,110,242);
			margin-top:16px;
		}
		
		.register{
			font-size:16px;
			color: white;
			float: right;
			padding-top:2px;
			padding-bottom:5px;
			text-decoration: underline;
			
		}
		
	}
	.active{
		color:rgb(245,8,8);
		border-bottom:1px solid rgb(245,8,8);
	}
	.tips{
	   	color:rgb(245,8,8);
		font-size:12px;
		display: initial;
		float: right;
		padding-right:30px;
	}
	.welcome{
		font-size: 20px;
		color: white;
		text-align: center;
		
	}
</style>
