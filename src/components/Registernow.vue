<template>
	<!--立即注册-->
	<div class="Registernow">
		<div class="head">
			<router-link to="/login" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>注册</p>
			<p><i class="iconfont">&#xe648;</i></p>
		</div>
		<div class="fill">
			<form action="" method="">
				<p><span>手机号</span><input type="number" name="" id="tel" value="" placeholder="请输入手机号"/></p>
				<p>
					<span>图片验证</span>
					<input type="number" name="" id="tucode" value="" placeholder="请输入图片中的字符" style="margin-left: 7.5%!important;"/>
				</p>
				<p><span>验证码</span><input type="number" name="" id="code" value="" placeholder="请输入验证码"/></p>
				<p><span>新密码</span><input type="password" name="" id="passwords" value="" placeholder="请输入新密码"/></p>
				<p><span>新密码</span><input type="password" name="" id="passwords1" value="" placeholder="请再次输入新密码"/></p>
				<!--图片验证-->
				<div class="imgcode"></div>
				<!--刷新验证码-->
				<div class="refresh"><i class="iconfont">&#xe61e;</i></div>
				<!--获取验证码-->
				<input type="button" class="getcode1" id="btn" value="获取验证码" />
				<div class="under">
					<p>
						<input type="radio" name="" id="radios" checked="checked"/>
						我已阅读并同意<span>（用户注册协议）</span>
					</p>
					<input type="submit" id="Register" name="" value="立即注册"/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
	 
	}
	$(function(){
		createimgcode();//图片验证
		//图片验证生成
		var imgcode; 
		function createimgcode(){
			imgcode = "";
			var imgcodeLength = 4;//验证码长度
			var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,);
			for (var i=0;i<imgcodeLength;i++) {
				var charIndex=Math.floor(Math.random()*10);
				imgcode += selectChar[charIndex];
			}
			$(".imgcode").html(imgcode);
		}
		$(".imgcode").click(function(){
			createimgcode();
		})
		$(".refresh").click(function(){
			createimgcode();
		})
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
		$("#btn").click(function(){
			var phone = $("#tel").val();//手机号
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
					url:join+"register/getRegisterCode",
					dataType:'json',
					data:{phone:phone},
					success:function(data){
						console.log(data);
						console.log("请求成功");
						if (data.ret!=1) {
							alert("该手机号已被注册！");
							wait=0;
							return;
						}
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			}
		})
		
		//立即注册按钮
		$("#Register").click(function(){
			//取值
			var phone = $("#tel").val();//手机号
			var code = $("#code").val();//验证码
			var passwords = $("#passwords").val();//新密码
			var passwords1 = $("#passwords1").val();//新密码1
			var imgcode = $(".imgcode").text();//获取图片验证
			var tucode = $("#tucode").val();//获取图片验证填写值
			var pattern=/^1[34578]\d{9}$/;//手机号正则
			var rts=pattern.test(phone);//rts返回布尔
			var pattern1 = /^[\w_-]{6,16}$/;//密码正则6-16大小写字母、数字、-_;
			var rtp = pattern1.test(passwords);
//			手机号约束
			if(rts==false){
				alert("手机号格式错误！");
				return;
			}
//			图片验证
			if (tucode!=imgcode) {
				alert("图片验证错误！");
				return;
			}
//			验证码
			if(code==""){
				alert("验证码不可为空！");
				return;
			}
//			验证密码
			if (rtp==false) {
				alert("密码格式错误，密码格式为6-16位大小写字母、数字、-和_ ");
				return;
			}
			if (passwords!=passwords1) {
				alert("确认密码错误，不一致 ");
				return;
			}
			$.ajax({
				type:"post",
				url:join+"register/register/",
				dataType:'json',
				data:{
					phone:phone,
					code:code,
					password:passwords,
				},
				success:function(data){
					console.log(data);
					console.log("请求成功");
					if (data.ret!=1) {
						console.log("注册失败");
					}else{
						window.location.href="#/login";
						window.location.reload();
					}
				},
				error:function(err){
					console.log("请求失败");
				}	
			});
			
			

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
	.Registernow{
		width: 100%;
	}
	.Registernow>div{
		background: white;
	}
	.head{
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head>p{
		width: 10%;
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.head>p:nth-child(2){
		margin-left: 34%;
		font-size: 1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.head>p:nth-child(3){
		margin-left: 33%;
	}
	.head i {
		font-size: 1.7rem;
	}
	.fill>form>p{
		width: 94%;
		height: 3.75rem;
		margin: auto;
		line-height: 3.75rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 1.5rem;
	}
	.fill>form>p>span:first-child{
		font-size:1.5rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.fill>form>p>input{
		width: 40%;
		height: 3.4rem;
		line-height: 3.4rem;
		margin-left: 13%;
		font-size:1.4rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.imgcode{
		width: 5.8rem;
	    height: 2.5rem;
	    border: 1px solid #E9E9E9;
	    position: absolute;
	    top: 8.9rem;
	    right: 12%;
	    text-align: center;
	    line-height: 2.5rem;
	    font-size: 1.5rem;
	    font-family: inherit;
	    color: #0091EA;
	    font-weight: bold;
	    letter-spacing: 0.3rem;
	}
	.refresh{
		width: 5%;
	    height: 3.5rem;
	    position: absolute;
	    top: 8.55rem;
	    right: 5%;
	    text-align: center;
	    line-height: 3.5rem;
	}
	.refresh i {
		font-size: 1.5rem;
	}
	.getcode1{
		width: 25%;
	    height: 3rem;
	    text-align: right;
	    line-height: 3rem;
	    background: white;
	    position: absolute;
	    top: 12.7rem;
	    right: 5%;
	    font-size:1.2rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.under{
		width: 100%;
		height: 46.2rem;
		background: #F0F0F0;
	}
	.under>p{
		width: 94%;
	    height: 4rem;
	    line-height: 4rem;
	    margin: auto;
	    font-size:1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	#Register{
		width: 25.25rem;
	    height: 3.75rem;
	    line-height: 3.75rem;
	    text-align: center;
	    background:rgba(250,231,79,1);
		border-radius:2.3rem;
	    margin-top: 4%;
	    margin-left: 9%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
</style>