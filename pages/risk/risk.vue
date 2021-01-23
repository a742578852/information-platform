<template>
	<view>
		<view style="margin-left:520rpx ;"><button @click="addRisk" class="cu-btn bg-red margin-tb-sm">添加风险上报</button></view>
		<wTable :columns="columns" :data="tableData" @on-row-click="clickrow" border />
	</view>
</template>

<script>
	import wTable from '@/components/wang-wTable/wTable.vue';
	export default {
		components: {
			wTable
		},

		data() {
			return {
				id: '',
				tableData: [],
				columns: [

					{

						type: 'index',
						width: 70,
						align: "center"
					},
					{
						title: '风险位置',
						key: 'fxwz'
					},
					{
						title: '风险因素',
						key: 'fxys'
					},
					{
						title: '风险描述',
						key: 'fxms'
					},
					{
						title: '发现人',
						key: 'fxrxm'
					},
					{
						title: '发现日期',
						key: 'fxrq'
					},

				]
			}
		},
		methods: {
			async getRisk() {
				const res = await this.$myRequest({
					url: '/api/risk/getRisks',
					method: 'POST'
				})
				this.tableData = res.data.data
			},

			addRisk() {
				uni.navigateTo({
					url: '../risk/addRisk',

				})
			},
			clickrow(val) {

				this.id = val.item.id

				uni.navigateTo({
					url: '../risk/riskDetail?id=' + this.id,

				})
			}
		},

		created() {
			this.getRisk();
		},

		onBackPress(event) {

			if (event.from === 'navigateBack') {
				return false;
			}

			uni.switchTab({
				url: '../index/index'
			})
			return true;
		}

	}
</script>

<style>

</style>
