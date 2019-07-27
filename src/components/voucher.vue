<template>
	<!--兑换券-->
	<div class="voucher">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>兑换券</p>
		</div>
		<div class="state">
			<ul>
				<li class="cc" @click="Noexchange">未兑换</li>
				<li @click="Has_change">已使用</li>
				<li @click="overdue_change">已过期</li>
			</ul>
		</div>
		<div class="vouchers_one">
			<ul v-show="flag" class="notuse">
				<li @click="showcode">
					<div class="Voucher_amount">
						<p>￥<span>22</span></p>
						<p>通用</p>
					</div>
					<div class="name_address">
						<p>吉吉的店</p>
						<p>郑州</p>
					</div>
					<p>截止时间: <span>2019-08-12</span></p>
				</li>
			</ul>
			<ul v-show="flag1" class="notuse1">
				<li>
					<div class="Voucher_amount">
						<p>￥<span>20</span></p>
						<p>在店使用</p>
					</div>
					<div class="name_address">
						<p>卡卡的店</p>
						<p>郑州</p>
					</div>
					<p>截止时间: <span>2019-08-12</span><span>已使用</span></p>
				</li>
			</ul>
			<ul v-show="flag2" class="overdue">
				<li>
					<div class="Voucher_amount">
						<p>￥<span>5</span></p>
						<p>在店使用</p>
					</div>
					<div class="name_address">
						<p>卡吉吉的店</p>
						<p>郑州</p>
					</div>
					<p>截止时间: <span>2019-08-12</span></p>
				</li>
			</ul>
		</div>
		<div class="mask_cou"></div>
		<!--出示优惠券-->
		<div class="Show_coupon">
			<div class="show_main">
				<p>消费时请出示该二维码</p>
				<div class="Qr_code"><img src="../../build/yml.jpg"/></div>
			</div>
			<div class="close"><img src="../../build/close.png"/></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:true,
				flag1:false,
				flag2:false,
			}
		},
		methods:{
			//未兑换
			Noexchange:function(){
				this.flag1=false;
				this.flag2=false;
				this.flag = true;
				var token = window.localStorage.getItem("token");
				var that = this;
				var page = 1;
				$.ajax({
					type:"post",
					url:join+"user/exchangeno",
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			},
			//已兑换
			Has_change:function(){
				this.flag=false;
				this.flag2=false;
				this.flag1 = true;
				var token = window.localStorage.getItem("token");
				var that = this;
				var page = 1;
				$.ajax({
					type:"post",
					url:join+"user/exchangeUse",
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log(data);
					},
					error:function(err){
						console.log("请求失败！");
					}
				});
			},
			//过期兑换券
			overdue_change:function(){
				this.flag=false;
				this.flag1 = false;
				this.flag2 = true;
				var token = window.localStorage.getItem("token");
				var that = this;
				var page = 1;
				$.ajax({
					type:"post",
					url:join+"user/exchangeOver",
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			},
			//展示兑换券二维码
			showcode:function(item){
				$(".mask_cou").show();
				$(".Show_coupon").show();
			}	
		},
		mounted(){
	    	//进入页面即加载未使用优惠券
			this.$nextTick(()=>{
				this.Noexchange();
			})
	    }
		
	}
	$(function(){
		$(".state>ul>li").click(function(){
			$(this).addClass("cc").siblings().removeClass("cc");
		})
		//关闭优惠券
		$(".close").click(function(){
			$(".mask_cou").hide();
			$(".Show_coupon").hide();
		})
		
	})
</script>

<style>
	.voucher{
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
		 font-size:1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.state{
		width: 100%;
		height: 3.7rem;
		background: white;
	}
	.state>ul{
		width: 100%;
	}
	.state>ul>li{
		width: 15%;
		height: 3.7rem;
		text-align: center;
		line-height: 3.7rem;
		font-size: 1.5rem;
		float: left;
		margin-left: 13%;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.cc{
		border-bottom: 0.1rem solid #FAE64F;
		color: #FAE64F !important;
	}
	.vouchers_one{
		width: 100%;
		background: #F0F0F0;
	}
	.vouchers_one>ul{
		width: 100%;
		position: relative;
    	top: 1.5%;
    	float: left;
	}
	.vouchers_one>ul>li{
		width: 88%;
		height: 8rem;
		margin: auto;
		margin-top: 2%;
		border-radius: 0.5rem;
	}
	.notuse>li:first-child{
		background: url(../../img/hongse.png)no-repeat;
		background-size: 100% 100%;
	}
	.notuse>li:nth-child(n+2){
		background: url(../../img/lanse.png)no-repeat;
		background-size: 100% 100%;
	}
	.notuse1>li:first-child{
		background: url(../../img/hongse.png)no-repeat;
		background-size: 100% 100%;
		
	}
	.notuse1>li:nth-child(n+2){
		background: url(../../img/lanse.png)no-repeat;
		background-size: 100% 100%;
	}
	.Voucher_amount{
		width: 30%;
		height: 8rem;
		float: left;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
	}
	.Voucher_amount>p:first-child{
		font-size:15px;
		margin-top: 1rem;
	}
	.Voucher_amount>p:first-child>span{
		font-size:3.4rem;
	}
	.Voucher_amount>p:nth-child(2){
		font-size:1.4rem;
		margin-top: 0.5rem;
	}
	.name_address{
		float: left;
		margin-left:5%;
		width: 65%;
		height: 5rem;
	}
	.name_address>p:first-child{
		margin-top: 1rem;
	    font-size: 1.5rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
	.name_address>p:nth-child(2){
		margin-top: 3%;
	}
	.vouchers_one>ul>li>p{
		width: 60%;
	    height: 3rem;
	    border-bottom: 1px solid #F0F0F0;
	    float: left;
	    line-height: 3.4rem;
	    margin-left: 5%;
	    font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.vouchers_one>ul>li>p>span:nth-child(2){
		color: red;
		margin-left: 3%;
	}
	.overdue{
		color: #999999;
	}
	.overdue>li{
		background: url(../../img/guoqi.png)no-repeat;
		background-size: 100% 100%;
	}
	.overdue>li:nth-child(n+2) {
    	margin-top: 2%;
    }
	/*出示兑换券*/
	.mask_cou{
		width: 100%;
	    height: 68rem;
	    background: #A8A8A8;
	    position: fixed;
	    top: 0;
	    z-index: 22;
	    opacity: 0.2;
	    display: none;
	}
	.Show_coupon{
	    width: 26rem;
	    height: 29.6rem;
	    background: url(../../img/youhui.png)no-repeat;
	    background-size: 100% 100%;
	    position: fixed;
	    top: 14.2rem;
	    left: 2.4rem;
	    z-index: 88;
	    border-radius: 0.5rem;
	    display: none;
	}
	
	.show_main{
	    width: 75%;
	    height: 21rem;
	    margin: auto;
	    border-radius: 0.5rem;
	    margin-top: 20%;
	}
	.show_main>p{
		width: 100%;
	    height: 6.5rem;
	    text-align: center;
	    line-height: 6.5rem;
	    font-size:1.5rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.Qr_code{
		width: 10.75rem;
	    height: 10.75rem;
	    margin-left: 21%;
	    margin-top: 9%;
	}
	.Qr_code>img{
		width: 100%;
		height: 100%;
	}
	.close{
		width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    position: absolute;
	    bottom: -18%;
	    left: 42%;
	}
	.close>img{
		width: 100%;
		height: 100%;
	}
</style>