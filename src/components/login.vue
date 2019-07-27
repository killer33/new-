<template>
	<!--登录-->
	<div class="login">
		<header>
			<div class="logo">logo</div>
		</header>
		<section>
			<div class="main">
				<div class="op">
					<router-link to="" tag="p" class="l1">登 录</router-link>
					<span>/</span>
					<router-link to="/Quicklogin" tag="p" class="l2">快 速 登 录</router-link>
				</div>
				<div class="cond">
					<form action="" method="">
						<input type="number" name="" id="phone" value="" placeholder="请输入手机号码"/>
						<input type="password" name="" id="password" value="" placeholder="请输入密码"/>
						<i class="iconfont user">&#xe677;</i>
						<i class="iconfont pass">&#xe60c;</i>
						<router-link to="/Forgotpassword" tag="p" class="forgot" @click.native="flushCom">忘记密码?</router-link>
						<input type="submit" id="thelogin" name="" value="登录" @click="login"/>
					</form>
				</div>
			</div>
			<div class="main2">
				<router-link to="/Registernow" tag="p" @click.native="flushCom">立即注册</router-link>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			},
			//登录
			login:function(){
				var phone = $("#phone").val();//取得登录的手机号码
				var password = $("#password").val();//取得登录密码
//				console.log(phone);
//				console.log(password);
				$.ajax({
					type:"post",
					url:join+"login/login",
					dataType:'json',
					data:{
						phone:phone,
						password:password
					},
					success:function(data){
						console.log(data);
						console.log("请求成功");
						this.refresh_token=data.info.refresh_token;//获取refresh_token
						this.token=data.info.token;//获取token
						window.localStorage.setItem('refresh_token',this.refresh_token);//存储refresh_token
						window.localStorage.setItem('token',this.token);//存储token
						console.log(data.ret);
						if (data.ret==0) {
							alert("登录失败");
							window.location.href="#/login";
							console.log(data);
						}else{
							window.location.href="#/Home";
							window.location.reload();
						}
					},
					error:function(err){
						console.log("请求失败");
					}	
				});
				
			}
		}
	}
</script>

<style>
	html{
		height: 100%;
	}
	body{
		height: 100%;
	}
	#app{
		height: 100%;
	}
	.login{
		height: 100%;
		width: 100%;
		background: url(../../img/beijing.png) no-repeat;
		background-size: 100% 100%;
	}
	header{
		width: 100%;
		height: 17rem;
	}
	.logo{
		width: 6.6rem;
		height: 6.6rem;
		border-radius: 50%;
		background: white;
		margin:auto;
		position: relative;
		top: 40%;
		text-align: center;
		line-height: 6.6rem;
		font-size: 2rem;
		font-family: arial;
	}
	.logo>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	section{
		width: 100%;
		height: 35rem;
	}
	.main{
		width: 96%;
		height: 27rem;
		margin: auto;
		background: white;
		border-radius: 1rem;
		position: relative;
		top: 3%;
	}
	.op{
		width: 80%;
		height: 6rem;
		margin: auto;
		line-height: 6rem;
		text-align: left;
		font-family: arial;
	}
	.l1{
		width: 22%;
	    height: 5rem;
	    float: left;
	    line-height: 6rem;
	    text-align: center;
	    font-size: 2.7rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	    border-bottom: 0.2rem solid #FAE64F;
	}
	.op>span{
	    display: block;
	    float: left;
	    line-height: 6.6rem;	 
	    margin-left: 2%;
	    margin-right: 2%;
	    font-size: 1.7rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.l2{
		width: 29%;
	    height: 5rem;
	    line-height: 6.6rem;
	    float: left;
	    font-size: 1.7rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.cond{
		width: 86%;
		height: 18rem;
		margin: auto;
		margin-top: 1rem;
	}
	.cond>form>input{
		width: 15rem;
	    height: 4.3rem;
	    background: #F8F8F8;
	    border-radius: 2.6rem;
	    padding: 0% 20%;
	    font-size: 1.5rem;
	}
	#password{
		margin-top: 6%;
	}
	.user{
	    position: absolute;
	    top: 29.5%;
	    left: 12%;
	    font-size: 2.5rem;
	}
	.pass{
		position: absolute;
	    top: 51.5%;
	    left: 12%;
	    font-size: 2.5rem;
	}
	.forgot{
		width: 5.5rem;
	    height: 1rem;
	    float: right;
	    font-size:1.2rem;
	    text-align: center;
	    margin-right: 6%;
	    margin-top: 6%;
	    color: #666666;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		line-height:1.1rem;
	}
	#thelogin{
		width:25.25rem;
		height:3.75rem;
		background:rgba(250,231,79,1);
		border-radius:2.3rem;
		font-size:1.7rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		margin-top: 2rem;
	}
	.main2{
		width: 74%;
	    height: 5rem;
	    background: #FFF7EA;
	    text-align: center;
	    line-height: 6rem;
	    margin: auto;
	    border-radius: 1rem;
	}
	.main2>p{
		width: 100%;
		height: 5rem;
		font-size:1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
</style>