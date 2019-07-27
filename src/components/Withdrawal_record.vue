<template>
	<!--提现记录-->
	<div class="Withdrawal_record">
		<div class="hea1">
			<router-link to="/withdrawal_WeChat" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>账单记录</p>
		</div>
		<div class="bill_details1">
			<ul>
				<li>
					<p class="bill_p11">
						<span>支付宝</span><span>2019-02-03</span>
					</p>
					<p class="bill_p22">金额:<span>￥</span><span>300</span></p>
					<i class="iconfont">&#xe649;</i>
				</li>
				<li>
					<p class="bill_p11">
						<span>支付宝</span><span>2019-02-03</span>
					</p>
					<p class="bill_p22">金额:<span>￥</span><span>300</span></p>
					<i class="iconfont">&#xe649;</i>
				</li>
				<li>
					<p class="bill_p11">
						<span>支付宝</span><span>2019-02-03</span>
					</p>
					<p class="bill_p22">金额:<span>￥</span><span>300</span></p>
					<i class="iconfont">&#xe649;</i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
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
	.Withdrawal_record{
		width: 100%;
	}
	.hea1{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.hea1>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.hea1>p:first-child{
		width: 10%;
	}
	.hea1>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.bill_details1{
		width: 100%;
	}
	.bill_details1>ul{
		width: 100%;
	}
	.bill_details1>ul>li{
		width: 100%;
		height: 5rem;
		border-bottom: 1px solid #F0F0F0;
		position: relative;
	}
	.bill_p11{
		width: 28%;
	    height: 5rem;
	    margin-left: 3%;
	    float: left;
	}
	.bill_p11>span:first-child{
		font-size: 15px;
		display: inline-block;
    	margin-top: 5%;
	}
	.bill_p11>span:nth-child(2){
		color: #9B9B9B;
		display: inline-block;
   		margin-top: 5%;
	}
	.bill_p22{
		width: 20%;
	    height: 5rem;
	    line-height: 5rem;
	    float: right;
	    margin-right: 10%;
	}
	.bill_p22>span{
		color: red;
	}
	.bill_p22>span:nth-child(2){
		font-size: 17px;
	}
	.bill_details1 i{
		position: absolute;
	    right: 2%;
	    top: 30%;
	    font-size: 20px;
	}
</style>