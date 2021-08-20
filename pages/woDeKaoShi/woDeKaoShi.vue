<template>
	<view class="">
	<view class="kaoshi">
		<view class="xu">序号</view>
		<view class="list-item" v-for="(item,index) in List" :key='index'>
			{{item.name}}
		</view>
	</view>
	<view class="shijuan" v-for="(item,index) in getShiJuanList" :key='index' @click="goKaoShi(item.issubmited,item.sttime,item.ettime,item.id)">
		<view class="shijuan-item" >{{index+1}}</view>
		<view class="shijuan-item" >{{item.kmmc}}</view>
		<view class="shijuan-item" >{{item.sttime}}</view>
		<view class="shijuan-item" >{{item.ettime}}</view>
		<view class="shijuan-item" >{{item.issubmited==0?'未考':'已考'}}</view>
		<view class="shijuan-item" >{{item.total}}</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:[
					{name:'科目名称'},
					{name:'开始时间'},
					{name:'结束时间'},
					{name:'考试状态'},
					{name:'成绩'}
				],
				getShiJuanList:[]
			}
		},
		methods: {
			async getShiJuan(){
				const res =await this.$myRequest({
					url:'/api/study/getExam',
					method:'POST'
				})
				
				if(res.data.code==200){
					this.getShiJuanList = res.data.data
					
				}
				
			},
			//明天判断时间和状态
			async goKaoShi(issubmited,sttime,ettime,id){
				console.log('试卷id：'+id);
				var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
				
			    if(issubmited==0 && timer>sttime && timer<ettime){
					uni.navigateTo({
					 url:'../kaoShi/kaoShi?id='+id,
					})
			    }else if(issubmited==1){
					uni.showToast({
						title:'考过了'
					})
				}else if(timer<sttime){
					uni.showToast({
						title:'考试还未开始'
					})
				}else if(timer>ettime){
					uni.showToast({
						title:'考试结束了'
					})
				}
			    
				
			   }
			   
		},
		onBackPress(event) {
			if (event.from === 'navigateBack') {
				return false;
			}
			uni.switchTab({
				url:'../index/index'
			})
			return true;
		},
		onLoad() {
			this.getShiJuan()
		}
	}
</script>

<style lang="scss">
.kaoshi{
	display: flex;
	margin: 8px 0;
	background-color: #D2F1F0;
	.xu{
		margin: 10px 0px;
	}
	.list-item{
		margin: 10px 9px;
	}
}
.shijuan{
	background-color: #D2F1F0;
	display: flex;
	.shijuan-item{
		margin: 10px 12px;
	}
}
</style>
