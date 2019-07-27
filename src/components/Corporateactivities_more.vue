<template>
	<!--企业活动-更多-->
	<div class="Corporateactivities_more">
		<div class="head3">
			<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>已发布活动</p>
		</div>
		<div class="love1">
			<ul>
				<router-link to="" tag="li">
					<img src="../../build/27.jpg"/>
					<p class="Ph11"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
					<p class="Ph22"><span>4月16日  8:00</span> 开始  <span>北京</span></p>
				</router-link>
				<router-link to="" tag="li">
					<img src="../../build/27.jpg"/>
					<p class="Ph11"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
					<p class="Ph22"><span class="col">进行中</span>  <span class="col_s">北京</span></p>
				</router-link>
				<router-link to="" tag="li">
					<img src="../../build/27.jpg"/>
					<p class="Ph11"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
					<p class="Ph22"><span class="col">进行中</span>  <span class="col_s">北京</span></p>
				</router-link>
				<router-link to="" tag="li">
					<img src="../../build/27.jpg"/>
					<p class="Ph11"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
					<p class="Ph22"><span>4月16日  8:00</span> 开始  <span>北京</span></p>
				</router-link>
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
	.Corporateactivities_more{
		width: 100%;
	}
	.head3{
		width: 100%;
		height: 3.5rem;
		border-bottom: 5px solid #F0F0F0;
	}
	.head3>p:first-child{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head3>p:nth-child(2){
		margin-left: 38%;
		font-size: 15px;
		width: 25%;
		height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	}
	.love1{
		width: 100%;
		margin-top: 2%;
	}
	.love1>ul{
		width: 100%;
	}
	.love1>ul>li{
		width: 45%;
	    height: 13rem;	
	    float: left;
	    margin-left: 3%;  
	}
	.love1>ul>li:nth-child(n+3){
		 margin-top: 3%;
	}
	.love1>ul>li>img{
		width: 100%;
	    height: 8rem;
	    margin-left: 0%;
	    border-radius: 5px;
	}
	.love1>ul>li>p{
		margin-left: 2%;
		margin-top: 2%;
		text-align: left;
	}
	.Ph11{
		font-size: 13px;
		margin-left: 4% !important;
	}
	.Ph11>span{
		font-weight: bold;
	}
	.Ph22{
		color: #A1A1A1;
	}
	.col{
		color: #FAE64F;
	}
	.col_s{
		margin-left: 57%!important;
	}
	.Ph22>span:last-child{
		margin-left: 20%;
	}
</style>