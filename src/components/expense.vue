<template>
	<!--费用-->
	<div class="expense">
		<div class="hea">
			<p @click="showExpense"><i class="iconfont">&#xe646;</i></p>
			<p>发布活动</p>
		</div>
		<hr />
		<div class="serve">
			<!-- 列表 -->
			<ul class="relation">
				<li>
					<p> 票种名称：</p>
					<input type="text" placeholder="请填写具体费用信息">
				</li>
				<li>
					<p>票价：</p>
					<input type="text" placeholder="免费请填0，有人报名后不可修改">
				</li>
				<li>
					<p>会员价：</p>
					<input type="text" placeholder="不填则无会员价">
				</li>
				<li>
					<p>数量：</p>
					<input type="text" placeholder="该票种可供购买的总量">
				</li>
			</ul>

			<ul class="relation1" v-show="a">

				<li>
					<p>审核：</p>
					<span class="end">购买后需要我审核</span>
					<el-switch
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</li>
				<li class="purchase">
					<p>限购：</p>
					<p>
						<input type="text">
						<span>张起售</span>
					</p>
				</li>
				<li class="purchase">
					<p></p>
					<p>
						<span class="tint1">每人最多购买</span>
						<input type="text">
						<span>张</span>
					</p>
				</li>
				<li class="purchase" @click="showSeUp">
					<p>售票时间：</p>
					<p>
						<span>{{selected}}</span>
						<i class="iconfont">&#xe61f;</i>
					</p>
				</li>
			</ul>
			<van-popup v-model="showSe" position="bottom" class="sePopup">
				<div class="title">
					<p>请选择售票截止时间</p>
					<p>请上下拨动进行选择</p>
				</div>
				<van-picker :columns="columns" @change="onChange" />
				<button class="bu-true" @click="selectTrue">确定</button>
				<button class="bu-false" @click="showSeUp">取消</button>

			</van-popup>
			<div @click="gengduo()" class="middle">
				<div  v-show="a">
					<span>收起</span>
					<i class="iconfont">&#xe60a;</i>
				</div>
				<div v-show="b">
					<span>更多</span>
					<i class="iconfont">&#xe623;</i>
				</div>
			</div>

			
			
		</div>
		<div class="true">
			<button>确定</button>
		</div>
	</div>
</template>

<script>
	import {Popup,Picker} from 'vant';
	export default {
		data() {
			return {
				a: false,
				b:true,
				value:true,
				showSe:false,
				columns:['活动开始前半小时可报名','活动结束前均可报名','活动进行中也可报名'],
				Select:'',
				selected:'活动结束前均可报名'
			}
		},
		methods: {
			gengduo() {
				this.a = !this.a;
				this.b=!this.b;
			},
			showSeUp(){
				if(this.showSe==false){
					this.showSe=true;
				}else{
					this.showSe=false;
				}
			},
			onChange(Picker,value){
				this.Select=value;
			},
			selectTrue(){
				this.selected=this.Select;
				this.showSe=false;
			}
		},
		props:{
			showExpense:{type:Function}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;
		vertical-align:baseline;
	}
	img{
		border: none;
	}
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	.expense{
		width: 100%;
	}
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
	.hea>p:first-child>i{
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
	.serve{
		width: 100%;
	}
	.relation,
	.relation1{
		width: 100%;
	}
	.relation>li,
	.relation1>li{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		float: right;
		background: white;		
	}
	.relation>li>p:first-child,
	.relation1>li>p:first-child{
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
	}
	.middle>div{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		text-align: center;
		font-size: 1.4rem;
		border-bottom: 0.1rem solid #F0F0F0;
		float: left;
		font-weight: bold;
	}
	.middle>div>i{
		font-size: 1.3rem;
	}
	.purchase input{
		border-bottom: 0.1rem solid black;
		width: 10%;
		text-align: center;
		font-weight: bold;
	}
	.end{
		margin-left: 4%;
	}
	.purchase>p:nth-child(2){
		float: right;
		text-align: right;
		margin-right: 4%;
		font-size: 1.3rem;
	}
	.true{
		width: 100%;
		float: left;
		background: #F0F0F0;
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
		margin-top: 2rem;
	}
	.sePopup{
		height: 50%;
		border-radius: 3% 3% 0 0;
		text-align: center;
	}
	.sePopup div.title{
		padding-top:2rem ;
		text-align:center;
	}
	.sePopup div.title>p:first-child{
		font-size: 2rem;
	}
	.sePopup div.title>p:nth-child(2){
		font-size: 1rem;
		color: #999;
	}
	.sePopup div.van-picker{
		height: 15rem;
		overflow: hidden;
	}
	.sePopup>button{
		width: 13rem;
		height: 3rem;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0.5rem;
	    margin-top: 9%;
	    font-size: 1.5rem;
	}
	.sePopup>button.bu-true{
		background: #FAE74F;
		color: #333333;
		margin-right: 1rem;
	}
	.sePopup>button.bu-false{
		background: #fff;
		border:1px solid #999;
		color: #999;
		margin-left: 1rem;
	}
</style>