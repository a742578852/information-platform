<template>
	<view>
		<view>
			<view style="text-align: center;font-size: 40rpx;margin-top: 25rpx;">隐患整改率统计</view>
			 <view>
				 <view class="cu-form-group">
				 	<view class="title"><span style="color:red;"></span>查询日期</view>
				 	<picker mode="date" start="2019-09" end="2030-09" fields="month" v-model:value="date" @change="bindDateChange">
				 		<view class="picker">
				 			{{date}}
				 		</view>
				 	</picker>
				 </view>
				<view class="qiun-charts" >
							<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
						</view>
				 
			 </view>
			
			
		</view>
	
	
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				date:'2020-12'
			}
		},
		methods: {
		bindDateChange: function(e) {
		            this.date = e.target.value
		        }
		}
	}
</script>

<style>

</style>
