<template>
	<!--积分-提现-微信-->
	<div class="withdrawal_WeChat">
		<div class="hea">
			<router-link to="/Integral_record" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>提现</p>
			<router-link to="/Withdrawal_record" tag="p">提现记录</router-link>
		</div>
		<div class="way">
			<p class="way_color" @click="toggle"><i class="iconfont">&#xe6cc;</i><span>微信</span></p>
			<p @click="toggle1"><i class="iconfont">&#xe643;</i><span>支付宝</span></p>
		</div>
		<hr />
		<div v-show="flag">
			<div class="account">
				<p class="account_p1"><span>到账微信账户</span><span>17603888523</span></p>
				<p class="account_p2">审核后到账</p>
				<i class="iconfont">&#xe61f;</i>
			</div>
			<div class="withdrawal_amount">
				<span>提现金额</span><br /><span>￥</span><span>5000</span>
			</div>
			<p class="withdrawal_sm">
				可提现金额:
				<span>5000.00</span>
				元<span>全部提现</span>
			</p>
		</div>
		<div v-show="flag1">
			<router-link to="/Add_alipay" tag="div" class="account">
				<p class="account_p1"><span>到账支付宝账户</span><span>17603888523</span></p>
				<p class="account_p2">审核后到账</p>
				<i class="iconfont">&#xe61f;</i>
			</router-link>
			<div class="withdrawal_amount">
				<span>提现金额</span><br /><span>￥</span><span>5000</span>
			</div>
			<p class="withdrawal_sm">
				可提现金额:
				<span>5000.00</span>
				元<span>全部提现</span>
			</p>
		</div>
		<div class="remind"><p><img src="../../build/remind.png"/></p><span>手续费10元</span></div>
		<router-link to="" tag="p" class="ljtx">立即提现</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:true,
				flag1:false,
			}
		},
		methods:{
			toggle(){
				this.flag1=false;
				this.flag = true;
				
			},
			toggle1(){
				this.flag=false;
				this.flag1 = true;
			},
		}
	}
	$(function(){
		$(".way>p").click(function(){
			$(this).addClass("way_color").siblings().removeClass("way_color");
		})
		
	})
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
	.withdrawal_WeChat{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.hea>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.hea>p:nth-child(3){
	    margin-left: 22%;
	}
	.way{
		width: 100%;
		height: 4rem;
	}
	.way>p{
		float: left;
	    margin-left: 15.5%;
	    width: 8rem;
	    height: 2.5rem;
	    border-radius: 30px;
	    line-height: 2.5rem;
	    font-size: 15px;
	    text-align: center;
	    margin-top: 0.8rem;
	}
	.way>p>span{
		margin-left: 5%;
	}
	.way_color{
		background: #FAE64F;
		color: white;
	}
	hr{
		width: 100%;
		height: 5px;
		background: #F0F0F0;
	}
	.account{
		width: 90%;
	    height: 6rem;
	    background: #FAFAFA;
	    margin: auto;
	    margin-top: 3%;
	    border-radius: 5px;
	    border: 1px solid #EEEEEE;
	    position: relative;
	}
	.account_p1{
		width: 80%;
	    height: 4rem;
	    line-height: 4rem;
	    font-size: 15px;
	}
	.account_p1>span:first-child{
		margin-left: 3%;
	}
	.account_p1>span:nth-child(2){
	    position: relative;
	    font-weight: bold;
	    left: 51%;
	    bottom: 100%;
	    display: block;
	}
	.account_p2{
		width: 62%;
	    height: 2rem;
	    font-size: 14px;
	    text-align: right;
	    position: relative;
	    top: -12%;
	}
	.account>i{
	    display: block;
	    float: left;
	    position: absolute;
	    right: 3%;
	    top: 32%;
	    font-size: 22px;
	}
	.withdrawal_amount{
		width: 30%;
		height: 6rem;
		margin-top: 8%;
		margin-left: 5%;
	}
	.withdrawal_amount>span:first-child{
		font-size: 13px;
	}
	.withdrawal_amount>span:nth-child(3){
		font-size: 17px;
	    font-weight: bold;
	    margin-top: 18%;
	    display: inline-block;
	}
	.withdrawal_amount>span:nth-child(4){
		font-size: 28px;
    	font-weight: bold;
	}
	.withdrawal_sm{
		font-size: 13px;
		margin-left: 5%;
	}
	.withdrawal_sm>span:first-child{
		margin-left: 2%;
		color: red;
		font-size: 16px;
	}
	.withdrawal_sm>span:nth-child(2){
		margin-left: 10%;
		color: red;
	}
	.remind{
		position: relative;
	}
	.remind>p{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		margin-left: 5%;
    	margin-top: 3%;
	}
	.remind>p>img{
		width: 100%;
		height: 100%;
	}
	.remind>span{
		position: absolute;
		top: -10%;
		left: 10%;
		color: red;
	}
	.ljtx{
		width: 80%;
		height: 3.5rem;
		font-size: 16px;
		background: #FAE64F;
		border-radius: 30px;
		margin: auto;
		text-align: center;
		line-height: 3.5rem;
		margin-top: 25%;
	}
</style>