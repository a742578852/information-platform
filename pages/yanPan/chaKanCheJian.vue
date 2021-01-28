<template>
	<view>
		<view class="baseinfo">
			<view class="cu-form-group">
				<view class="title">部门:</view>
				<input name="input" v-model="bumen"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报人:</view>
				<input  name="input" v-model="tianbaoren"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">填报日期:</view>
				<input  name="input" v-model="riqi"></input>
			</view>
			<view class=""style="height: 5px; background-color: #D2F1F0;"></view>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">班组岗位生产装置数量:</view>
			<input  name="input" v-model="jiqi" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">其中运行生产装置数量:</view>
			<input  name="input" v-model="yunxing" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">其中停产装置数量:</view>
			<input  name="input" v-model="tingchan" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">其中检修装置数量:</view>
			<input  name="input" v-model="jianxiu" ></input>
		</view>
		<view class=""style="height: 5px; background-color: #D2F1F0;"></view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">一级动火数量:</view>
			<input  name="input" v-model="fire1" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">二级动火数量:</view>
			<input  name="input" v-model="fire2" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">特级动火数量:</view>
			<input  name="input" v-model="fire3" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">受限空间作业数量:</view>
			<input  name="input" v-model="space" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">高处作业数量:</view>
			<input  name="input" v-model="height" ></input>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
			<view class="title">其他作业数量:</view>
			<input  name="input" v-model="els" ></input>
		</view>
		<view class=""style="height: 5px; background-color: #D2F1F0;"></view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
			<view class="title">是否处于试生产:</view>
			<radio-group name="" @change="radioChange3" style="display: flex;">
				<label>
					<radio value="是" :checked="check3"/><text style="margin-left: 5px;">是</text>
				</label>
				<label>
					<radio value="否" :checked="check33"/><text style="margin-left: 5px;">否</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
			<view class="title">是否处于开停车状态:</view>
			<radio-group name="" @change="radioChange4" style="display: flex;">
				<label>
					<radio value="是" :checked="check4"/><text style="margin-left: 5px;">是</text>
				</label>
				<label>
					<radio value="否" :checked="check44"/><text style="margin-left: 5px;">否</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
			<view class="title">罐区、仓库等重大危险源</br>是否处于安全状态:</view>
			<radio-group name="" @change="radioChange" style="display: flex;">
				<label>
					<radio value="是" :checked="check"/><text style="margin-left: 5px;">是</text>
				</label>
				<label>
					<radio value="否" :checked="checks"/><text style="margin-left: 5px;">否</text>
				</label>
			</radio-group>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="table">
				<view class="table-item" style="padding-left: 10px;">序号</view>
				<view class="table-item" style="padding-left: 17px;">班组</view>
				<view class="table-item" style="padding-left: 20px;">上报人</view>
				<view class="table-item" style="padding-left: 18px;">日期</view>
				<view class="table-item" style="padding-left: 55px;">研判材料</view>
			</view>
		<view class="table-data" v-for="(item,index) in bzjList">
			<view class="table-data-item" >{{index+1}}</view>
			<view class="table-data-item">{{item.bz}}</view>
			<view class="table-data-item">{{item.tbr}}</view>
			<view class="table-data-item" style="width: 25%;">{{item.tbrq}}</view>
			<view class="table-data-item" style="width: 35%; font-size: 10px;line-height: 15px;">
				<view class="">《安全风险研判表》</view></br>
				<view class="">《研判报告及承诺书》</view>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cjinfo:{
					bm:'',
					sbsj:'',
					sbr:'',
					sczz:'',
					qzyx:'',
					tc:'',
					jx:'',
					yj:'',
					ej:'',
					tj:'',
					kjzy:'',
					gczy:'',
					tszy:'',
					ssc:'',
					tczt:'',
					aqzt:''
				},
				bzjList:[
					{
						bz:'',
						tbr:'',
						tbrq:''
					}
				],
				
				bumen:'',
				tianbaoren:'',
				riqi:'',
				jiqi:'',
				yunxing:'',
				tingchan:'',
				jianxiu:'',
				fire1:'',
				fire2:'',
				fire3:'',
				space:'',
				height:'',
				els:'',
				check3:false,
				check33:false,
				check4:false,
				check44:false,
				check:false,
				checks:false
			}
		},
		methods: {
			radioChange3(event){
				const val3 = event.value
			},
			radioChange4(event){
				const val4 = event.value
			},
			radioChange(event){
				const val = event.value
			}
		},
		
		async onLoad(option) {
			const cjid = option.bid
			//根据id查看研判详情
			const res = await this.$myRequest({
				url:'/api/judge/getCjinfoDetail',
				method:'POST',
				data:{
					cjid:cjid
				}
			})
			if(res.data.code==200){
				this.cjinfo = res.data.data.cjinfo
				this.bzjList = res.data.data.bzjList
				this.bumen = this.cjinfo.bm
				this.tianbaoren = this.cjinfo.sbr
				this.riqi = this.cjinfo.sbsj
				this.jiqi = this.cjinfo.sczz
				this.yunxing = this.cjinfo.qzyx
				this.tingchan = this.cjinfo.tc
				this.jianxiu = this.cjinfo.jx
				this.fire1 = this.cjinfo.yj
				this.fire2 = this.cjinfo.ej
				this.fire3 = this.cjinfo.tj
				this.space = this.cjinfo.kjzy
				this.height = this.cjinfo.gczy
				this.els = this.cjinfo.tszy
				
			}
			
			if(this.cjinfo.ssc=='是'){
				this.check3 = true
			}
			if(this.cjinfo.ssc=='否'){
				this.check33 = true
			}
			if(this.cjinfo.tczt=='是'){
				this.check4 = true
			}
			if(this.cjinfo.tczt=='否'){
				this.check44 = true
			}
			if(this.cjinfo.aqzt=='是'){
				this.check = true
			}
			if(this.cjinfo.aqzt=='否'){
				this.checks = true
			}
		}
	}
</script>

<style lang="scss">
	.scroll{
		width: 100%;
	
	.table{
		white-space: nowrap;
		width: 100%;
		height: 60px;
		line-height: 40px;
		display: flex;
		padding: 10px 0;
		font-size: 18px;
		background-color: #D2F1F0;
		.table-item{
			display: inline-block;
			padding-left: 30px;
		}
	}
	
	.table-data{
		display: flex;
		font-size: 12px;
		height: 60px;
		width: 100%;
		// background-color: #D2F1F0;
		.table-data-item{
			// margin-left: 20px;
			border: 1px solid;
			height: 60px;
			width: 20%;
			line-height: 60px;
			text-align: center;
		}
	}
	}
</style>
