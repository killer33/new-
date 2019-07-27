<template>
	<!--个人资料-修改-->
	<div class="personal_data_Modify">
		<div class="hea">
			<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>个人资料</p>
		</div>
		<hr />
		<section>
			<router-link to="" tag="li" class="txs">
				<span>头像</span> <p class="tx"><img src="../../build/bz1.jpg"/></p><i class="iconfont">&#xe649;</i>
			</router-link>
			<router-link to="" tag="li">
				<span>昵称</span> <p class="username">被这风吹散的人</p><i class="iconfont">&#xe649;</i>
			</router-link>
			<router-link to="" tag="li">
				<span>电话</span> <p>17603888523</p>
			</router-link>
			<router-link to="" tag="li">
				<span>实名认证</span> <p>已实名</p>
			</router-link>
			<router-link to="" tag="li">
				<span>真实姓名</span> <p>赵诚</p>
			</router-link>
			<router-link to="" tag="li">
				<span>身份证号</span> <p>412724********2119</p>
			</router-link>
		</section>
		<div class="xg">
			<router-link to="/Continue_certification" tag="p">修改</router-link>
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
	.personal_data{
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
	hr{
		width: 100%;
		height: 3px;
		background: #F0F0F0;
	}
	section{
		width: 100%;
	}
	section>li{
		width: 97%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
		text-align: left;
		line-height: 3.5rem;
		list-style: none;
		font-size: 15px;
		margin-left: 3%;
		position: relative;
	}
	section>li>span{
		margin-left: 2%;
		font-weight: bold;
	}
	section>li>p{
		width: 40%;
	    height: 3rem;
	    text-align: right;
	    float: right;
	    margin-right: 12%;
	    color: #B1B1B1;
	    font-size: 13px;
	}
	.txs{
		width: 97%;
		height: 4rem;
		line-height: 4rem;
	}
	.tx{
		width: 12%;
		height: 3.5rem;
		border-radius: 50%;
		text-align: center;
		color: white;
		overflow: hidden;
		margin-top: 0.5%;
	}
	.tx>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	section>li>i{
		position: absolute;
		right: 3%;
	}
	.xg{
		width: 100%;
		height: 29.7rem;
		background: #F0F0F0;
	}
	.xg>p{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		background: #FAE64F;
		margin: auto;
		font-size: 16px;
		position: relative;
		top: 15%;
		border-radius: 30px;
	}
</style>