<template>
	<!--个人中心实名认证-类型-->
	<div class="real_name_type">
		<div class="heaa">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>实名认证</p>
		</div>
		<p class="choose_type">请选择认证类型</p>
		<div class="choose">
			<p :class="{'chosen':idType==1}" @click="choseQi">企业</p>
			<p :class="{'chosen':idType==2}" @click="choseGe">个人</p>
		</div>
		<div class="next" :class="{'nexTrue':idType!=0}" @click="nextPage">下一步</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				idType:0
			}
		},
		methods:{
			choseQi(){
				this.idType=1;
			},
			choseGe(){
				this.idType=2;
			},
			nextPage(){
				if(this.idType==1){
					window.location.href="#/Enterprise_certification";
				}else if(this.idType==2){
					window.location.href="#/Personal_authentication";
				}
			}
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
	html{
		height: 100%;
	}
	body{
		height: 100%;
	}
	#app{
		height: 100%;
	}
	.real_name_type{
		width: 100%;
		height: 100%;
		background-color:#fff ;
	}
	.heaa{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.heaa>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.heaa>p:first-child{
		width: 10%;
	}
	.heaa>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.8rem;
	}
	.choose{
		width: 100%;
	}
	.choose_type{
		width: 100%;
		height: 8rem;
		text-align: center;
		line-height: 8rem;
		font-size: 1.7rem;
		font-weight: 500;
	}
	.choose>p{
		width: 50%;
		height: 6rem;
		text-align: center;
		line-height: 6rem;
		font-size:1.8rem;
		margin: auto;
		margin-top: 10%;
		border-radius: 10px;
	}
	.next{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		border-radius: 30px;
		background: #E6E6E6;
		font-size: 17px;
		margin: auto;
		margin-top: 35%;
	}
	.nexTrue{
		background-color:#FAE74F ;
	}
	.chosen{
		color: #FAE74F;
	}
</style>