<template>
	<!--他人主页+简介-->
	<div class="Otherspage">
		<div class="headd">
			<router-link to="/login" tag="p"><i class="iconfont">&#xe646;</i></router-link>
		</div>
		<div class="others">
			<div class="others_logo"><img src="../../build/27.jpg"/></div>
			<p class="others_name">被这风吹散的人</p>
			<div class="others_sm">
				<p>已发布  <span>2534</span></p><p>粉丝  <span>5696</span></p>
			</div>
			<div class="others_gz">
				<p>+关注</p>
			</div>
			<ul>
				<li class="color" @click="toggle">简介</li>
				<li @click="toggle1">活动</li>
			</ul>
		</div>
		<hr />
		<div class="hdxq22" v-show="flag">
			<p class="xqtit22">个人简介</p>
			<p class="xqsm22">徐志摩（1897年1月15日—1931年11月19日），现代诗人、散文家。
				原名章垿，字槱森，留学英国时改名志摩。新月派代表诗人。先后就读于上海沪江大学、天津北洋大学和北京大学。
				1918年赴美留学学习经济，1921年赴英国留学，入剑桥大学当特别生，研究政治经济学。在剑桥两年深受西方教育的熏陶及欧美浪漫主义和唯美派诗人的影响。
				1923年成立新月社。1924年任北京大学教授。1926年任光华大学、大夏大学和南京中央大学（1949年更名为南京大学）教授。1930年辞去了上海和南京的职务，应胡适之邀，再度任北京大学教授，兼北京女子师范大学教授。
				1931年11月19日因飞机失事罹难。代表作品有《再别康桥》《翡冷翠的一夜》等。
			</p>
			<div class="pt">
				<ul>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
					<li><img src="../../build/yml.jpg"/></li>
				</ul>
			</div>
		</div>
		<div class="hd" v-show="flag1">
			<div class="guesslove2">
				<p><router-link to="" tag="span">已发布活动</router-link>
					<router-link to="" tag="span">查看更多 》</router-link>
				</p>
				<div class="love3">
					<ul>
						<router-link to="" tag="li">
							<img src="../../build/27.jpg"/>
							<p class="PH5"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
							<p class="Ph6">4月16日  8:00 开始  <span>北京</span></p>
						</router-link>
						<router-link to="" tag="li">
							<img src="../../build/27.jpg"/>
							<p class="PH5"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
							<p class="Ph6">4月16日  8:00 开始  <span>北京</span></p>
						</router-link>
						<router-link to="" tag="li">
							<img src="../../build/27.jpg"/>
							<p class="PH5"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
							<p class="Ph6">4月16日  8:00 开始  <span>北京</span></p>
						</router-link>
						<router-link to="" tag="li">
							<img src="../../build/27.jpg"/>
							<p class="PH5"><span>{豌豆思维}</span>数学体验课欢迎<br />参与</p>
							<p class="Ph6">4月16日  8:00 开始  <span>北京</span></p>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
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
			}
		}
	}
	$(function(){
		$(".others>ul>li").click(function(){
			$(this).addClass("color").siblings().removeClass("color");
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
	.Otherspage{
		width: 100%;
	}
	.headd{
		width: 100%;
		height: 3.5rem;
	}
	.headd>p{
		width: 10%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.others{
		width: 100%;
		height: 17rem;
	}
	.others_logo{
		width: 20%;
	    height: 6rem;
	    border-radius: 50%;
	    position: relative;
	    top: 1%;
    	left: 39%;
	}
	.others_logo>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.others_name{
		width: 100%;
		height: 2.5rem;
		text-align: center;
		line-height: 2.5rem;
		font-size: 15px;
		font-weight: bold;
		margin-top: 1%;
	}
	.others_sm{
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #9C9C9C;
	}
	.others_sm>p:first-child{
		width: 45%;
		float: left;
		text-align: right;
	}
	.others_sm>p:nth-child(2){
		width: 45%;
		float: right;
		text-align: left;
	}
	.others_gz{
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.others_gz>p{
		width: 15%;
	    height: 2rem;
	    text-align: center;
	    line-height: 2rem;
	    background: #FAE64F;
	    margin: 0.25rem auto;
	    border-radius: 3px;
	    font-size: 14px;
	}
	.others>ul{
		width: 100%;
	}
	.others>ul>li{
		width: 50%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		float: left;
		font-size: 14px;
	}
	.color{
		color: #FAE64F;
		border-bottom: 2px solid #FAE64F;
	}
	hr{
		width: 100%;
		height: 5px;
		background: #F0F0F0;
	}
	.hdxq22{
		width: 95%;
		margin: auto;
	}
	.xqtit22{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 15px;
		margin-top: 2%;
	}
	.pt{
		width: 100%;
		margin-top: 2%;
	}
	.pt>ul{
		width: 100%;
	}
	.pt>ul>li{
		width: 30%;
		height: 6rem;
		float: left;
		margin-left: 2%;
		margin-top: 2%;
	}
	.pt>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.hd{
		width: 100%;
	}
	.guesslove2{
		width: 100%;
	}
	.guesslove2>p{
		width: 100%;
		height: 3rem;
		line-height: 3rem;	
	}
	.guesslove2>p>span:first-child{
		margin-left: 3%;
	    font-size: 16px;
	    font-weight: bold;
	}
	.guesslove2>p>span:last-child{
		margin-left: 56%;
	}
	.love3{
		width: 100%;
	}
	.love3>ul{
		width: 100%;
	}
	.love3>ul>li{
		width: 45%;
	    height: 13rem;	
	    float: left;
	    margin-left: 3%;  
	}
	.love3>ul>li:nth-child(n+3){
		 margin-top: 3%;
	}
	.love3>ul>li>img{
		width: 100%;
	    height: 8rem;
	    margin-left: 0%;
	    border-radius: 5px;
	}
	.love3>ul>li>p{
		margin-left: 2%;
		margin-top: 2%;
		text-align: left;
	}
	.Ph5{
		font-size: 13px;
		margin-left: 4% !important;
	}
	.Ph5>span{
		font-weight: bold;
	}
	.Ph6{
		color: #A1A1A1;
	}
	.Ph6>span{
		margin-left: 20%;
	}
</style>