<template>
	<!--安全中心-->
	<div class="SecurityCenter">
		<div class="head7">
			<router-link to="/personal" tag="p" @click.native="flushCom"><i class="iconfont">&#xe646;</i></router-link>
			<p>安全中心</p>
		</div>
		<div class="sec_div">
			<ul>
				<router-link to="/Changepassword" tag="li">
					<p>修改登录密码</p><i class="iconfont">&#xe61f;</i>
				</router-link>
				<router-link to="/Change_payment_password" tag="li" v-show="hasPayPass">
					<p>修改支付密码</p><i class="iconfont">&#xe61f;</i>
				</router-link>
				<router-link to="/Set_payment_password" tag="li" v-show="!hasPayPass">
					<p>设置支付密码</p><i class="iconfont">&#xe61f;</i>
				</router-link>
			</ul>
		</div>
		<div class="bk"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				hasPayPass:true
			}
		},
		mounted(){
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/get_user_paypass",
					dataType:"json",
					data:{token:token},
					success:function(data){
			  			console.log(data);
			  			if(data.status==0){
			  				that.hasPayPass=false;
			  			}else if(data.status==1){
			  				that.hasPayPass=true;
			  			}
			  		},
			  		error:function(err){
						console.log("请求失败");
					}
				});
			})
		},
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			}
		},
		
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
	.SecurityCenter{
		width: 100%;
		background-color:#fff;
	}
	.SecurityCenter .head7{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.SecurityCenter .head7>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.SecurityCenter .head7>p:first-child{
		width: 10%;
	}
	.SecurityCenter .head7>p:nth-child(2){
		width: 20%;
		margin-left: 31%;
		font-size: 16px;
	}
	.SecurityCenter .sec_div{
		width: 94%;
		margin: auto;
	}
	.SecurityCenter .sec_div>ul{
		width: 100%;
	}
	.SecurityCenter .sec_div>ul>li{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		font-size: 15px;
		font-family: fantasy;
		border-bottom: 1px solid #F0F0F0;
		position: relative;
	}
	.SecurityCenter .sec_div>ul>li>p{
		float: left;
	}
	.SecurityCenter .sec_div>ul>li>i{
		position: absolute;
		right: 0;
		font-size: 21px;
	}
	.SecurityCenter .bk{
		width: 100%;
		height: 30rem;
		background: #F0F0F0;
	}
</style>