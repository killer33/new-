<template>
	<!--发布1-->
	<div class="Release_1">
		<div class="hea">
			<router-link to="" tag="p"></router-link>
			<p>发布</p>
		</div>
		<div class="ccc">
			<ul>
				<router-link :to="{path:'/certification',query:{name:0}}" tag="li" >
					<div><img src="../../build/xianshimiaosha.png"/></div><p>立即使用</p>
				</router-link>
				<router-link :to="{path:'/certification',query:{name:1}}" tag="li">
					<div><img src="../../build/pintuan .png"/></div><p>立即使用</p>
				</router-link>
				<router-link :to="{path:'/certification',query:{name:2}}" tag="li" @click.native="flushCom">
					<div><img src="../../build/zidongyi.png"/></div><p>立即使用</p>
				</router-link>
			</ul>
		</div>
		<!--底部-->
		<div class="footer">
			<ul>
				<router-link to="/Home" tag="li">
					<i class="iconfont">&#xe619;</i><br />
					<span>首页</span>
				</router-link>
				<router-link to="/activity" tag="li">
					<i class="iconfont">&#xe687;</i><br />
					<span>活动</span>
				</router-link>
				<router-link to="/Release_1" tag="li" class="release" @click.native="flushCom">
					<p><img src="../../build/fabu.png"/></p>
					<span style="color:#FAE64F">发布</span>
				</router-link>
				<router-link to="/enterprise" tag="li">
					<i class="iconfont">&#xe6b0;</i><br />
					<span>企业</span>
				</router-link>
				<router-link to="/personal" tag="li">
					<i class="iconfont">&#xe625;</i><br />
					<span>我的</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			},
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
	.top_up{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4rem;
		border-bottom: 1px solid #F0F0F0;
		background-color:#fff;
	}
	.hea>p{
	    height: 3.5rem;
	    line-height: 4rem;
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
	.ccc{
		width: 100%;
		height: 50rem;
		background: #F0F0F0;
	}
	.ccc>ul{
		width: 100%;
		position: relative;
		top: 2%;
	}
	.ccc>ul>li{
		width: 92%;
		height: 13rem;
		background: white;
		margin: auto;
		border-radius: 5px;
	}
	.ccc>ul>li:nth-child(n+2){
		margin-top: 3%;
	}
	.ccc>ul>li>div{
		width: 100%;
		height: 11rem;
	}
	.ccc>ul>li>div>img{
		width: 100%;
		height: 100%;
		border-radius: 5px 5px 0px 0px;
	}
	.ccc>ul>li>p{
		width: 96%;
		height: 2rem;
		line-height: 2rem;
		text-align: right;
		font-size: 14px;
	}
	/*底部*/
	.footer{
		width: 100%;
		height: 4.2rem;
		position: fixed;
		bottom: 0%;
		z-index: 999;
		background: white;
		border-top: 0.1rem solid #F0F0F0;
	}
	.footer>ul{
		width: 100%;
		height: 4.2rem;
	}
	.footer>ul>li{
		width: 15%;
	    height: 4.2rem;
	    float: left;
	    text-align: center;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	    margin-left: 4%;
	}
	.footer>ul>li>i{
		display: inline-block;
		font-size: 2rem;
		margin-top: 10%;
	}
	.release{
		position: relative;
		bottom: 45%;
	}
	.release>p{
		width: 3.5rem;
	    height: 3.5rem;
	    background: #FAE64F;
	    border-radius: 50%;
	    text-align: center;
	    line-height: 2.5rem;
	    margin-left: 13%;
	}
	.release>p>img{
		width: 100%;
		height: 100%;
	}
	.release>span{
		position: absolute;
	    bottom: -30%;
	    right: 28%;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	}
</style>