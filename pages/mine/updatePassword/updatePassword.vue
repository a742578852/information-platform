<template>
	<view class="update">
		<view class="" style="display: flex;">
			<view class="">旧密码:</view>
			<input type="text" class="old" v-model="old" placeholder="请输入旧密码">
		</view>
		<view class="" style="display: flex;">
			<view class="">新密码:</view>
			<input type="text" class="new1" v-model="new1" placeholder="请输入新密码">
		</view>
		<view class="" style="display: flex;">
			<view class="">新密码:</view>
			<input type="text" class="new2" v-model="new2" placeholder="请确认新密码">
		</view>
		
		<button class="btn" @click="btn">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				old:'',
				new1:'',
				new2:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #D2F1F0;
	}
.update{
	margin: 20px;
	font-size: 25px;
	line-height: 60px;
	input{
		border-bottom: 1px solid;
		margin-top: 20px;
		margin-left: 10px;
	}
}
</style>
