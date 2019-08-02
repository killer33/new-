<template>
	<!--订单界面-->
	<div class="order">
		<div class="head5">
			<router-link to="/buy" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>订单确认</p>
		</div>
		<div class="paytime">
			<span>支付剩余时间</span><br />
			<span>1</span> <span>4</span> : <span>5</span> <span>9</span>
		</div>
		<div class="tj3">
			<ul>
				<router-link to="" tag="li">
					<div class="tup3">
						<img src="../../build/zz.jpg"/>
					</div>
					<div class="fus3">
						<p class="q3">空调清理保养服务</p>
						<p class="w3"><span>2019.05.04</span>-<span>2019.05.04</span></p>
						<p class="t3">奥体中心</p>
						<p class="r3"><span>X1</span>
							<span>￥<span>150.00</span></span>
						</p>
					</div>
				</router-link>
			</ul>
		</div>
		<hr />
		<div class="payment">
			<ul>
				<li>
					<div class="payment_p1">
						<p><img src="../../build/star.png"/></p>
					</div>
					<div class="payment_p2">
						<p>
							<span>平台积分支付</span>
							<span>余额: 300</span>
						</p>
						<p>如没有积分请前往个人中心进行充值</p>
					</div>
					<div class="payment_p3">
						<p><img src="../../build/for.png"/></p>
					</div>
				</li>
			</ul>
		</div>
		<div class="determine">
			<p tag="p" @click='toPay'>确认支付</p>
		</div>
		<van-popup class='passUp' v-model="showSel" :close-on-click-overlay="true" :overlay="false">
		  		<van-password-input
				  :value="payPassword"
				  info="密码为 6 位数字"
				  @focus="showKeyboard = true"
				/>
				<button @click="paymoney">支付</button>
		</van-popup>
		<van-number-keyboard
			:show="showKeyboard"
			@input="onInput"
			@delete="onDelete"
			@blur="showKeyboard = false"
		/>
	</div>
</template>

<script>
	import { PasswordInput, NumberKeyboard,Popup } from 'vant';
	export default {
		data(){
			return{
				payPassword:'',
				showKeyboard:false,
				showSel:false,
			}
		},
		methods:{
			onInput(key) {
			    this.payPassword = (this.payPassword + key).slice(0, 6);
			},
			onDelete() {
			    this.payPassword= this.payPassword.slice(0, this.payPassword.length - 1);
			},
			toPay(){
				if(this.showSel==true){
					this.showSel=false;
				}else{
					this.showSel=true;
				}
			},
			paymoney(){
				var order_id=this.$route.query.order_id;
				var token = window.localStorage.getItem("token");
				var that = this;
				$.ajax({
					type:"post",
					url:join+"activity/pay_order",
					dataType:"json",
					data:{token:token,order_id:order_id,paypass:that.payPassword},
					success:function(data){
		  				console.log(data);
//		  				that.info=data.data;
		  			},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
			}
		},
		mounted(){
			var order_id=this.$route.query.order_id;
			var token = window.localStorage.getItem("token");
			var that = this;
			this.$nextTick(()=>{
				$.ajax({
					type:"post",
					url:join+"activity/order_detail",
					dataType:"json",
					data:{token:token,order_id:order_id},
					success:function(data){
		  				console.log(data);
//		  				that.info=data.data;
		  			},
		  			error:function(err){
						console.log("请求失败");
						console.log(err);
					}
				});
		  		return;
			})
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
	.order{
		width: 100%;
		background: #fff;
	}
	.head5{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head5>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head5>p:first-child{
		width: 10%;
	}
	.head5>p:nth-child(2){
		width: 20%;
		margin-left: 31%;
		font-size: 15px;
	}
	.paytime{
		width: 100%;
		height: 5rem;
		text-align: center;
	}
	.paytime>span{
		display: inline-block;
		margin-top: 2%;
	}
	.paytime>span:nth-child(n+2){
		background: #FAE64E;
		padding: 0.5% 1.5%;
		color: white;
	}
	.tj3{
		width: 100%;
		margin-top: 2%;
	}
	.tj3>ul{
		width: 100%;
	}
	.tj3>ul>li{
	    height: 8rem;
	    margin-left: 3%;
	}
	.tj3>ul>li:nth-child(n+2){
		margin-top: 2%;
	}
	.tup3{
		width: 35%;
	    height: 8rem;
	    float: left;
    }
	.tup3>img{
		width: 100%;
		height: 8rem;
		border-radius: 5px;
	}
	.fus3{
		width: 59%;
	    height: 8rem;
	    float: left;
	    position: relative;
	}
	.q3{
		width: 100%;
		text-align: left;
		font-size: 15px;
		font-family: "微软雅黑";
		margin-left: 4%;
		font-weight: bold;
	}
	.w3{
		text-align: left;
		margin-top: 2%;
		margin-left: 4%;
	}
	.t3{
	    margin-top: 2%;
	    text-align: left;
	    margin-left: 4%;
	}
	.t3>span{
		color: red;
		font-weight: bold;
	}
	.t3>span>span{
		font-size: 17px;
	}
	.r3{
		width: 100%;
		position: relative;
		margin-top: 10%;
	}
	.r3>span:first-child{
		margin-left: 4%;
	}
	.r3>span:nth-child(2){
		position: absolute;
		right: 0%;
		color: red;
	}
	.r3>span:nth-child(2)>span{
		font-size: 16px;
	}
	hr{
		width: 100%;
		height: 5px;
		background: #F8F8F8;
		margin-top: 2%;
	}
	.payment{
		width: 100%;
	}
	.payment>ul{
		width: 100%;
	}
	.payment>ul>li{
		width: 95%;
		height: 5rem;
		margin: auto;
	}
	.payment_p1{
		width: 8%;
		height: 5rem;
		position: relative;
		float: left;
	}
	.payment_p1>p{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid black;
		position: absolute;
		top: 10%;
	}
	.payment_p1>p>img{
		width: 100%;
		height: 100%;
	}
	.payment_p2{
		width: 70%;
	    height: 5rem;
	    float: left;
	    margin-left: 3%;
	}
	.payment_p2>p{
		margin-top: 3%;
	}
	.payment_p2>p:first-child>span:first-child{
		font-weight: bold;
		font-size: 14px;
	}
	.payment_p2>p:first-child>span:nth-child(2){
		font-size: 10px;
		color: #C9C9C9;
		margin-left: 3%;
	}
	.payment_p2>p:nth-child(2){
		color: #C9C9C9;
	}
	.payment_p3{
		width: 18%;
		height: 5rem;
		position: relative;
		float: left;
	}
	.payment_p3>p{
		width: 18px;
	    height: 18px;
	    border-radius: 50%;
	    position: absolute;
	    top: 35%;
	    right: 25%;
	}
	.payment_p3>p>img{
		width: 100%;
		height: 100%;
	}
	.determine{
		width: 100%;
		height: 31.5rem;
		background: #FAFAFA;
		margin-top: 2%;
	}
	.determine>p{
		width: 80%;
	    height: 3.5rem;
	    border-radius: 20px;
	    background: #FAE64E;
	    font-size: 15px;
	    text-align: center;
	    line-height: 3.5rem;
	    margin: auto;
	    position: relative;
	    top: 50%;
	}
	.passUp{
		width: 80%;
		height: 20rem;
	}
	.van-number-keyboard{
		z-index: 2008;
	}
</style>