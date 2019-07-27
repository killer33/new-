<template>
	<!--优惠券空白页-->
	<div class="Coupon_blank_page">
		<div class="hea">
			<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>优惠券</p>
		</div>
		<router-link to="/coupons" tag="div" class="null">
			<img src="../../build/Nocoupons.png"/>
			<p>您还没有优惠券哟</p>
		</router-link>
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
	.Coupon_blank_page{
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
	.null{
		width: 60%;
		height: 15rem;
		margin: auto;
		margin-top: 40%;
	}
	.null>img{
		width: 75%;
    	height: 80%;
    	margin-left: 13%;
	}
	.null>p{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		color: #B8B8B8;
		font-size: 16px;
	}
</style>