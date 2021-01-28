<template>
	<view>
		<view class="baseinfo">
			<view class="cu-form-group">
				<view class="title">班组:</view>
				<input placeholder="选择班组" name="input" v-model="banzu" disabled=""></input>
			</view>
			
			<view class=""style="height: 5px; background-color: #D2F1F0;"></view>
		</view>
		<view class="" style="width: 50%;height: 30px; border: 1px solid; background-color: #CCE6FF;border-radius: 20px;margin:10px 25%;padding-left: 65px;padding-top: 5px;">安全承诺</view>
		<view class="chengnuo">
			<view class="">
				<view class="cu-form-group" >
					<button type="default" class="title" >高危生产活动及作业的安全风险可控状态</button>
				</view>
				<view class="" v-if="true">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">研判风险点数量:</view>
						<input  name="input" v-model="point" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">各风险点风险研判结果是否落实</br>相应的风险管控措施:</view>
						<radio-group name="" @change="radioChange1" style="display: flex;" >
							<label>
								<radio value="是" disabled="" :checked="check1"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check11"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">特殊作业的风险辨识、作业许可</br>及管控是否落实:</view>
						<radio-group name="" @change="radioChange2" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check2"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check22"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否处于试生产:</view>
						<radio-group name="" @change="radioChange3" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check3"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check33"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否处于开停车状态:</view>
						<radio-group name="" @change="radioChange4" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check4"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check44"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">承包商作业是否管控:</view>
						<radio-group name="" @change="radioChange5" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check5"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check55"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否存在变更情况:</view>
						<radio-group name="" @change="radioChange6" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check6"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check66"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">是否落实审批程序:</view>
						<radio-group name="" @change="radioChange7" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check7"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check77"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">一级动火数量:</view>
						<input  name="input" v-model="fire1" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">二级动火数量:</view>
						<input  name="input" v-model="fire2" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">特级动火数量:</view>
						<input  name="input" v-model="fire3" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">受限空间作业数量:</view>
						<input  name="input" v-model="space" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">高处作业数量:</view>
						<input  name="input" v-model="height" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其他作业数量:</view>
						<input  name="input" v-model="els" disabled=""></input>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" >生产装置运行状态</button>
				</view>
				<view class="" v-if="true">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">班组岗位生产装置数量:</view>
						<input  name="input" v-model="jiqi" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中运行生产装置数量:</view>
						<input  name="input" v-model="yunxing" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中停产装置数量:</view>
						<input  name="input" v-model="tingchan" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">其中检修装置数量:</view>
						<input  name="input" v-model="jianxiu" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">温度/压力/危化品/液位/流量</br>等工艺参数是否处于指标范围:</view>
						<radio-group name="" @change="radioChange8" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check8"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check88"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">特种设备是否安全运行:</view>
						<radio-group name="" @change="radioChange9" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="check9"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="check99"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">设备设施是否完好无泄漏:</view>
						<radio-group name="" @change="radioChange10" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checka"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkaa"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">超限报警、紧急切断、连锁等各类</br>安全设施配备完好投用，并可靠运行:</view>
						<radio-group name="" @change="radioChange11" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checkb"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkbb"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" >涉及罐区、仓库等重大危险源处于安全状态</button>
				</view>
				<view class="" v-if="true">
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">储罐、管道、机泵、阀门及仪表</br>系统完好无泄漏:</view>
						<radio-group name="" @change="radioChange12" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checkc"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkcc"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">储罐的液位、温度、压力无超限</br>运行:</view>
						<radio-group name="" @change="radioChange13" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checkd"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkdd"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title">装卸车时确保人员是否在岗:</view>
						<radio-group name="" @change="radioChange14" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checke"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkee"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">可燃及有毒气体报警和联锁是否</br>处于可靠运行状态:</view>
						<radio-group name="" @change="radioChange15" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checkf"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkff"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;height: 80px;">
						<view class="title" style="height: 80px;">仓库按照国家标准分区分类储存</br>危险化学品，无超量、超品种储存</br>，相互禁配物质无混放混存:</view>
						<radio-group name="" @change="radioChange16" style="display: flex;">
							<label>
								<radio value="是" disabled="" :checked="checkg"/><text style="margin-left: 5px;">是</text>
							</label>
							<label>
								<radio value="否" disabled="" :checked="checkgg"/><text style="margin-left: 5px;">否</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="cu-form-group" >
					<button type="default" class="title" >班组承诺</button>
				</view>
				<view class="" v-if="true">
					<textarea class="" value="今天我班组已根据岗位风险辨识管控相关内容以及安全风险评估表进行安全风险研判，各项安全风险防控措施已落实到位，我承诺本岗位处于安全运行状态，涉及罐区、仓库等重大危险源安全风险得到有效管控。" auto-height="true" style="width: 750rpx; border: 1px solid;border-color: #C8C7CC;"/>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">班组负责人:</view>
						<input  name="input" v-model="fzr" disabled=""></input>
					</view>
					<view class="cu-form-group" style="border-bottom: 1px solid;border-color: #C8C7CC;">
						<view class="title">日期:</view>
						<input  name="input" v-model="rq" disabled=""></input>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
				fxypAqcninfo:{
					fxd:'',
					fxgk:'',
					lscs:'',
					yj:'',
					ej:'',
					tj:'',
					sx:'',
					gc:'',
					ts:'',
					ssc:'',
					ktc:'',
					cbs:'',
					bg:'',
					lssp:'',
					bzgw:'',
					qzyx:'',
					tc:'',
					jx:'',
					zbfw:'',
					aqyx:'',
					wxl:'',
					kkyx:'',
					whwxl:'',
					cxyx:'',
					ryzg:'',
					yxzt:'',
					hfhc:'',
					bzfzr:'',
					rq:'',
				},
				
				check1:false,
				check11:false,
				check2:false,
				check22:false,
				check3:false,
				check33:false,
				check4:false,
				check44:false,
				check5:false,
				check55:false,
				check6:false,
				check66:false,
				check7:false,
				check77:false,
				check8:false,
				check88:false,
				check9:false,
				check99:false,
				checka:false,
				checkaa:false,
				checkb:false,
				checkbb:false,
				checkc:false,
				checkcc:false,
				checkd:false,
				checkdd:false,
				checke:false,
				checkee:false,
				checkf:false,
				checkff:false,
				checkg:false,
				checkgg:false,
				banzu:'',
				tianbaoren:'',
				chejian:'',
				rq:'',
				fzr:'',
				riqi:'',
				val1:'',
				val2:'',
				val3:'',
				val4:'',
				val5:'',
				val6:'',
				val7:'',
				val8:'',
				val9:'',
				val10:'',
				val11:'',
				val12:'',
				val13:'',
				val14:'',
				val15:'',
				val16:'',
				point:'',
				fire1:'',
				fire2:'',
				fire3:'',
				space:'',
				height:'',
				els:'',
				jiqi:'',
				yunxing:'',
				tingchan:'',
				jianxiu:'',
				info:{
					
				},
				
			}
		},
		async onLoad(option) {
			const bzid = option.bzid
			this.banzu = option.bz
			//根据id查看研判详情
			const res = await this.$myRequest({
				url:'/api/judge/getCnDetail',
				method:'POST',
				data:{
					bzid:bzid
				}
			})
			if(res.data.code==200){
				
				//安全承诺
				this.fxypAqcninfo = res.data.data
				this.point = this.fxypAqcninfo.fxd
				this.fire1 = this.fxypAqcninfo.yj
				this.fire2 = this.fxypAqcninfo.ej
				this.fire3 = this.fxypAqcninfo.tj
				this.space = this.fxypAqcninfo.sx
				this.height = this.fxypAqcninfo.gc
				this.els = this.fxypAqcninfo.ts
				this.jiqi = this.fxypAqcninfo.bzgw
				this.yunxing = this.fxypAqcninfo.qzyx
				this.tingchan = this.fxypAqcninfo.tc
				this.jianxiu = this.fxypAqcninfo.jx
				this.rq = this.fxypAqcninfo.rq
				this.fzr = this.fxypAqcninfo.bzfzr
				//动态改变radio
				if(this.fxypAqcninfo.fxgk=='是'){
					this.check1 = true
				}
				if(this.fxypAqcninfo.fxgk=='否'){
					this.check11 = true
				}
				if(this.fxypAqcninfo.lscs=='是'){
					this.check2 = true
				}
				if(this.fxypAqcninfo.lscs=='否'){
					this.check22 = true
				}
				if(this.fxypAqcninfo.ssc=='是'){
					this.check3 = true
				}
				if(this.fxypAqcninfo.ssc=='否'){
					this.check33 = true
				}
				if(this.fxypAqcninfo.ktc=='是'){
					this.check4 = true
				}
				if(this.fxypAqcninfo.ktc=='否'){
					this.check44 = true
				}
				if(this.fxypAqcninfo.cbs=='是'){
					this.check5 = true
				}
				if(this.fxypAqcninfo.cbs=='否'){
					this.check55 = true
				}
				if(this.fxypAqcninfo.bg=='是'){
					this.check6 = true
				}
				if(this.fxypAqcninfo.bg=='否'){
					this.check66 = true
				}
				if(this.fxypAqcninfo.lssp=='是'){
					this.check7 = true
				}
				if(this.fxypAqcninfo.lssp=='否'){
					this.check77 = true
				}
				if(this.fxypAqcninfo.zbfw=='是'){
					this.check8 = true
				}
				if(this.fxypAqcninfo.zbfw=='否'){
					this.check88 = true
				}
				if(this.fxypAqcninfo.aqyx=='是'){
					this.check9 = true
				}
				if(this.fxypAqcninfo.aqyx=='否'){
					this.check99 = true
				}
				if(this.fxypAqcninfo.wxl=='是'){
					this.checka = true
				}
				if(this.fxypAqcninfo.wxl=='否'){
					this.checkaa = true
				}
				if(this.fxypAqcninfo.kkyx=='是'){
					this.checkb = true
				}
				if(this.fxypAqcninfo.kkyx=='否'){
					this.checkbb = true
				}
				if(this.fxypAqcninfo.whwxl=='是'){
					this.checkc = true
				}
				if(this.fxypAqcninfo.whwxl=='否'){
					this.checkcc = true
				}
				if(this.fxypAqcninfo.cxyx=='是'){
					this.checkd = true
				}
				if(this.fxypAqcninfo.cxyx=='否'){
					this.checkdd = true
				}
				if(this.fxypAqcninfo.ryzg=='是'){
					this.checke = true
				}
				if(this.fxypAqcninfo.ryzg=='否'){
					this.checkee = true
				}
				if(this.fxypAqcninfo.yxzt=='是'){
					this.checkf = true
				}
				if(this.fxypAqcninfo.yxzt=='否'){
					this.checkff = true
				}
				if(this.fxypAqcninfo.hfhc=='是'){
					this.checkg = true
				}
				if(this.fxypAqcninfo.hfhc=='否'){
					this.checkgg = true
				}
			}
		},
		methods: {
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			},
			
			radioChange1(event){
				const val1 = event.value
			},
			radioChange2(event){
				const val2 = event.value
			},
			radioChange3(event){
				const val3 = event.value
			},
			radioChange4(event){
				const val4 = event.value
			},
			radioChange5(event){
				const val5 = event.value
			},
			radioChange6(event){
				const val6 = event.value
			},
			radioChange7(event){
				const val7 = event.value
			},
			radioChange8(event){
				const val8 = event.value
			},
			radioChange9(event){
				const val9 = event.value
			},
			radioChange10(event){
				const val10 = event.value
			},
			radioChange11(event){
				const val11 = event.value
			},
			radioChange12(event){
				const val12 = event.value
			},
			radioChange13(event){
				const val13 = event.value
			},
			radioChange14(event){
				const val14 = event.value
			},
			radioChange15(event){
				const val15 = event.value
			},
			radioChange16(event){
				const val16 = event.value
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
		.state1-item1{
			width: 100%;
			height: 50px;
			line-height: 50px;
			display: inline-block;
			display: flex;
			//margin-left: 10px;
			.item1{
				margin-left: 60px;
			}
		}
		.state1-item2{
			display: inline-block;
			display: flex;
			width: 100%;
			.item2{
				margin-left: 20px;
				width: 25%;
			}
			.uni-input{
				border: 1px solid;
				border-color: #C8C7CC;
			}
		}
	}
</style>
