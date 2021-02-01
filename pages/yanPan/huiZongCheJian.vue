<template>
	<view>
		<view class="cu-form-group">
			<view class="title">汇总日期:</view>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			<!-- <input  name="input" v-model="hzrq" ></input> -->
		</view>
		<view class="cu-form-group">
			<view class="title">所属公司:</view>
			<!-- <picker @change="bindPickerChange" :value="index" :range="arrayBz" class="item2" style="">
				<view class="uni-input" style="">{{arrayBz[index]}}</view>
			</picker> -->
			<input  name="input" v-model="ssgs" disabled=""></input>
		</view>
		<view class="cu-form-group">
			<view class="title">填报人:</view>
			<input  name="input" v-model="tianbaoren" disabled=""></input>
		</view>
		<button type="default" @click="save" style="background-color: #FBBD08;">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				tianbaoren:'',
				arrayBz:[],
				index:0,
				date:currentDate,
				ssgs:'总公司'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.navigateTo({
				url:'cheJian'
			})
			return true;
		},
		methods: {
			async save(){
				uni.showLoading({
					title:'汇总成功'
				})
				setTimeout(function(){
					uni.hideLoading()
				},1500)
				const res = await this.$myRequest({
					url:'/api/judge/mergeGsinfo',
					data:{
						'date':this.date,
						'gsName':this.ssgs,
						'sbr':this.tianbaoren
					},
					method:'POST'
				})
				if(res.data.code==200){
					uni.navigateTo({
						url:"cheJian"
					})
				}else{
					uni.showToast({
						title:res.data.message
					})
				}
			},
			// bindPickerChange(e) {
			// 	console.log('picker发送选择改变，携带值为', e.target.value)
			// 	this.index = e.detail.value
			// },
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		onLoad() {
			// const res = await this.$myRequest({
			// 		url:'/api/util/getDepartment',
			// 		method:'POST'
			// 	})
			// 	 for (var i = 0; i < res.data.data.length; i++) {
			// 		 this.arrayBz.push(res.data.data[i].bmmc)  
			// 	 }
			var tianbr = uni.getStorageSync('admin').nick
			this.tianbaoren = tianbr
		}
	}
</script>

<style>

</style>
