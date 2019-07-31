<template>
	<div id="hurry">
		<div class="hea">
			<p @click="showBuyhurry"><i class="iconfont">&#xe646;</i></p>
			<p>抢购信息</p>
		</div>
		<hr />
		<div class="cont">
			<ul class="relation">
				<li>
					<p>抢购人数：</p>
					<input type="text" v-model="subdata.num" placeholder="请填写具体费用信息"/>
				</li>
				<li>
					<p>费用/人：</p>
					<input type="text" v-model="subdata.price" placeholder="免费请填0，有人报名后不仅可修改"/>
				</li>
				<li @click="showStartTime">
					<p>抢购时间：</p>
					<p>{{hurryStart}}</p>
				</li>
				<li @click="showEndTime"> 
					<p></p>
					<p>{{hurryEnd}}</p>
				</li>
				<!--<li>
					<p>审核</p>
					<span>抢购成功后需要我审核</span>
					<el-switch class="switch"
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</li>-->
			</ul>
		</div>
		<div class="true">
			<button @click="showBuyhurry">确定</button>
		</div>
		<van-popup class="buyTime" v-model="showStart" position="bottom">
			<div class="choosetime">
				<p>请选择秒杀开始时间<br /><span>请上下拨动进行选择</span></p>
				<van-datetime-picker
				  v-model="currentDate"
				  type="datetime"
				  :min-date="minDate"
				  :max-date="maxDate"
				  :show-toolbar="false"
				/>
				<button class="bu-true" @click="con">确定</button>
				<button class="bu-false" @click="showStartTime">取消</button>
			</div>
		</van-popup>
		<van-popup class="buyTime" v-model="showEnd" position="bottom">
			<div class="choosetime">
				<p>请选择秒杀结束时间<br /><span>请上下拨动进行选择</span></p>
				<van-datetime-picker
				  v-model="currentDate"
				  type="datetime"
				  :min-date="minDate"
				  :max-date="maxDate"
				  :show-toolbar="false"
				/>
				<button class="bu-true" @click="end">确定</button>
				<button class="bu-false" @click="showEndTime">取消</button>
			</div>
		</van-popup>
	</div>
</template>
<script>
	import { Popup,DatetimePicker } from 'vant';
	export default {
		data(){
			return{
				value:true,
				showStart:false,
				showEnd:false,
		      	minDate: new Date(),
		      	maxDate: new Date(2020,12,31),
		      	currentDate: new Date(),
		      	hurryStart:'请选择开始时间',
		      	hurryEnd:'请选择结束时间'
			}
		},
		props:{
			showBuyhurry:{type:Function},
			subdata:{type:Object},
		},
		methods:{
			showStartTime(){
				if(this.showStart==false){
					this.showStart=true;
				}else{
					this.showStart=false;
				}
			},
			showEndTime(){
				if(this.showEnd==false){
					this.showEnd=true;
				}else{
					this.showEnd=false;
				}
			},
//          抢购开始时间确定按钮
            con:function(){
            	var d=this.currentDate;//获取数列当前时间
            	var year = d.getFullYear();
            	var month = d.getMonth()+1;
            	var day = d.getDate();
            	var hour = d.getHours();
            	var mintes = d.getMinutes();
            	//判断当值小于10+“ 0 ”
            	if (month<10) {
            		month="0"+month;
            	}
            	if (day<10) {
            		day="0"+day;
            	}
            	if (hour<10) {
            		hour="0"+hour;
            	}
            	if (mintes<10) {
            		mintes="0"+mintes;
            	}
            	var resDate = year + '-' + month + '-' + day + ' ' + hour + ':' + mintes;
            	this.hurryStart=resDate;//打印到页面
	    		var start_time=new Date(d).getTime();//活动开始时间--时间戳
//	    		console.log(start_time);
	    		this.subdata.hurryStart=start_time;
	    		this.showStartTime();
            },
//          抢购结束时间确定按钮
            end:function(){
            	var d=this.currentDate;//获取数列当前时间
            	var year = d.getFullYear();
            	var month = d.getMonth()+1;
            	var day = d.getDate();
            	var hour = d.getHours();
            	var mintes = d.getMinutes();
            	//判断当值小于10+“ 0 ”
            	if (month<10) {
            		month="0"+month;
            	}
            	if (day<10) {
            		day="0"+day;
            	}
            	if (hour<10) {
            		hour="0"+hour;
            	}
            	if (mintes<10) {
            		mintes="0"+mintes;
            	}
            	var resDate = year + '-' + month + '-' + day + ' ' + hour + ':' + mintes;
            	this.hurryEnd=resDate;//打印到页面
	    		var end_time1=new Date(d).getTime();//活动结束时间--时间戳
//	    		console.log(end_time1);
	    		this.subdata.hurryEnd=end_time1;
				this.showEndTime();
            },
		},

	}
</script>
<style type="text/css">
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
	}
	.hea>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.hea>p:first-child{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	hr{
		width: 100%;
		height: 0.5rem;
		background: #F0F0F0;
	}
	.relation{
		width: 100%;
	}
	.relation>li{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		float: right;
		background: white;
	}
	.relation>li>p:first-child{
		width: 20%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    float: left;
	    font-size: 1.4rem;
	    font-weight: bold;	
	    margin-left: 3%;
	}
	.relation input{
		width: 60%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    margin-left: 4%;
	    color: #999999;
	}
	.relation>li>p:nth-child(2){
		width: 60%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    margin-left: 4%;
	    float: left;
	    color: #999999;
	}
	.relation>li>span{
		margin-left: 4%;
		font-weight:500;
		color:#333333;
	}
	.switch{
		margin-left: 20%;
	}
	.true{
		width: 100%;
		float: left;
		background: #F0F0F0;		
		margin-top: 20rem;
	}
	.true>button{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		font-size: 1.6rem;
		background: #FAE64E;
		border-radius: 3rem;
		margin-left: 10%;

	}
	/*活动开始时间*/
	.buyTime{
		height: 32rem;
		z-index: 999;
		border-radius: 4% 4% 0 0;
	}
	.buyTime .choosetime{
		text-align: center;
	}
	.buyTime .choosetime>p{
		width: 100%;
	    height: 6rem;
	    text-align: center;
	    font-size: 1.6rem;
	    font-weight: bold;
	    border-radius: 1.5rem 1.5rem 0 0;
	    line-height: 5rem;
	    position: relative;
	    background: white;
	}
	.buyTime .choosetime>p>span{
		display: block;
	    position: absolute;
	    top: 30%;
	    left: 36%;
	    font-size: 1.2rem;
	    font-weight: normal;
	}
	.buyTime .choosetime .cotrl{
		display: flex;
	}
	.buyTime .choosetime .cotrl>p{
		text-align: center;
		margin: 0 auto;
	}
	.buyTime button{
		width: 13rem;
		height: 3rem;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0.5rem;
	    margin-top: 9%;
	    font-size: 1.5rem;
	}
	.buyTime button.bu-true{
		background: #FAE74F;
		color: #333333;
		margin-right: 1rem;
	}
	.buyTime button.bu-false{
		background: #fff;
		border:1px solid #999;
		color: #999;
		margin-left: 1rem;
	}
</style>