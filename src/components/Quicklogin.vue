<template>
	<!--登录-->
	<div class="Quicklogin">
		<header>
			<div class="logo1">logo</div>
		</header>
		<section>
			<div class="main3">
				<div class="op1">
					<router-link to="" tag="p" class="l11">快 速 登 录</router-link>
					<span>/</span>
					<router-link to="/login" tag="p" class="l22">登 录</router-link>
				</div>
				<div class="cond1">
					<form action="" method="">
						<input type="number" name="" id="quick_phone" value="" placeholder="请输入手机号码"/>
						<input type="number" name="" id="password1" value="" placeholder="请输入验证码"/>
						<!--获取验证码-->
						<input type="button" class="getcode" id="btn1" value="获取验证码" />
						<i class="iconfont user1">&#xe677;</i>
						<i class="iconfont pass1">&#xe668;</i>
						<router-link to="/Forgotpassword" tag="p" class="forgot1" @click.native="flushCom">忘记密码?</router-link>
						<input type="submit" id="thelogin1" name="" value="登录" @click="quicklogin"/>
					</form>
				</div>
			</div>
			<div class="main4">
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
			quicklogin:function(){
				var phone = $("#quick_phone").val();//取得登录的手机号码
				var code = $("#password1").val();//取得验证码
				$.ajax({
					type:"post",
					url:join+"login/login2",
					dataType:'json',
					data:{
						phone:phone,
						code:code,
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
//							window.location.href="#/Quicklogin";
							console.log("登录失败");
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
	$(function(){
		var wait=60;
		function time(o) {
	        if (wait == 0) {
	            o.removeAttribute("disabled");            
	            o.value="获取验证码";
	            wait = 60;
	        } else {
	            o.setAttribute("disabled", true);
	            o.value="重新发送(" + wait + ")";
	            wait--;
	            setTimeout(function() {
	                time(o)
	            },
	            1000)
	        }
	    }
		$("#btn1").click(function(){
			var phone = $("#quick_phone").val();//手机号
			var pattern=/^1[34578]\d{9}$/;//手机号正则
			var rts=pattern.test(phone);//rts返回布尔
			//手机号约束
			if(rts==false){
				alert("手机号格式错误！");
				return;
			}else{
				time(this);
				$.ajax({
					type:"post",
					url:join+"login/getLoginCode",
					dataType:'json',
					data:{phone:phone},
					success:function(data){
						console.log(data);
						console.log("请求成功");
						if (data.ret!=1) {
							wait=0;
							alert("手机号未注册！");
							return;
						}
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			}
		})
	})
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
	.Quicklogin{
		height: 100%;
		width: 100%;
		background: url(../../img/beijing.png)no-repeat;
		background-size: 100% 100%;
	}
	header{
		width: 100%;
		height: 17rem;
	}
	.logo1{
		width: 6.6rem;
		height: 6.6rem;
		border-radius: 50%;
		background: white;
		margin:auto;
		position: relative;
		top: 40%;
		text-align: center;
		line-height: 6.6rem;
		font-size: 20px;
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
	.main3{
		width: 96%;
		height: 27rem;
		margin: auto;
		background: white;
		border-radius: 10px;
		position: relative;
		top: 3%;
	}
	.op1{
		width: 80%;
		height: 6rem;
		margin: auto;
		line-height: 6rem;
		text-align: left;
		font-family: arial;
	}
	.l11{
		width: 46%;
	    height: 5rem;
	    float: left;
	    line-height: 6rem;
	    text-align: center;
	    font-size: 27px;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	    border-bottom: 2px solid #FAE64F;
	}
	.op1>span{
		display: block;
	    float: left;
	    line-height: 6.6rem;	 
	    margin-left: 2%;
	    margin-right: 2%;
	    font-size: 17px;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.l22{
		width: 29%;
	    height: 5rem;
	    line-height: 6.6rem;
	    float: left;
	    font-size: 17px;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.cond1{
		width: 86%;
		height: 18rem;
		margin: auto;
		margin-top: 1rem;
	}
	.cond1>form>input{
		width: 15rem;
	    height: 4.3rem;
	    background: #F8F8F8;
	    border-radius: 26px;
	    padding: 0% 20%;
	    font-size: 15px;
	}
	#password1{
		margin-top: 6%;
	}
	.getcode{
		width: 21%!important;
	    height: 3rem !important;
	    border-radius: 50px !important;
	    padding: 0% 0% !important;
	    position: absolute;
	    text-align: left;
	    right: 13%;
	    top: 50%;
	    font-size: 12px!important;
	    font-weight: bold;
	}
	.getcode>span{
		color: #FAE64F;
	}
	.user1{
	    position: absolute;
	    top: 29.5%;
	    left: 12%;
	    font-size: 25px;
	}
	.pass1{
		position: absolute;
	    top: 51.5%;
	    left: 12%;
	    font-size: 25px;
	}
	.forgot1{
		width: 4.5rem;
	    height: 1rem;
	    float: right;
	    font-size:12px;
	    text-align: center;
	    margin-right: 6%;
	    margin-top: 6%;
	    color: #666666;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		line-height:11px;
	}
	#thelogin1{
		width:25.25rem;
		height:3.75rem;
		background:rgba(250,231,79,1);
		border-radius:23px;
		font-size:17px;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		margin-top: 2rem;
	}
	.main4{
		width: 74%;
	    height: 5rem;
	    background: #FFF7EA;
	    text-align: center;
	    line-height: 6rem;
	    margin: auto;
	    border-radius: 10px;
	}
	.main4>p{
		width: 100%;
		height: 5rem;
		font-size:14px;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
</style>