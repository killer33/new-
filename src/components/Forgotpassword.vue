<template>
	<!--忘记密码-->
	<div class="Forgotpassword">
		<div class="head1">
			<router-link to="/login" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>忘记密码</p>
		</div>
		<div class="fill1">
			<form action="" method="">
				<p><span>手机号</span><input type="number" name="" id="zhphone" value="" placeholder="请输入手机号"/></p>
				<p><span>验证码</span><input type="number" name="" id="zhcode" value="" placeholder="请输入验证码"/></p>
				<p><span>新密码</span><input type="password" name="" id="newpass" value="" placeholder="请输入新密码"/></p>
				<p><span>新密码</span><input type="password" name="" id="repass" value="" placeholder="请再次输入新密码"/></p>
				<!--获取验证码-->
				<input type="button" class="getcode2" id="btns" value="获取验证码" />
				<div class="under1">
					<input type="submit" id="Register1" name="" value="确认修改"/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	$(function(){
		$("#Register1").click(function(){
			//取值
			var phone = $("#zhphone").val();//手机号
			var code = $("#zhcode").val();//验证码
			var newpass = $("#newpass").val();//新密码
			var repass = $("#repass").val();//重复密码
			var pattern=/^1[34578]\d{9}$/;//手机号正则
			var rts=pattern.test(phone);//rts返回布尔
			var pattern1 = /^[\w_-]{6,16}$/;//密码正则6-16大小写字母、数字、-_;
			var rtp = pattern1.test(newpass);			
//			手机号约束
			if(rts==false){
				alert("手机号格式错误！");
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
			if (newpass!=repass) {
				alert("确认密码错误，不一致 ");
				return;
			}
			$.ajax({
				type:"post",
				url:join+"login/findpass/",
				dataType:'json',
				data:{
					phone:phone,
					code:code,
					newpass:newpass,
					repass:repass
				},
				success:function(data){
					console.log(data);
					console.log("请求成功");
					if (data.ret!=1) {
						console.log("修改失败");
					}else{
						alert("修改成功，请重新登录");
						window.location.href="#/login";
						window.location.reload();
					}
				},
				error:function(err){
					console.log("请求失败");
				}	
			});
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
		$("#btns").click(function(){
			var phone = $("#zhphone").val();//手机号
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
					url:join+"login/getFindCode",
					dataType:'json',
					data:{phone:phone},
					success:function(data){
						console.log(data);
						console.log("请求成功");
						if (data.ret!=1) {
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
	.Forgotpassword{
		width: 100%;
	}
	.Forgotpassword>div{
		background: white;
	}
	.head1{
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #F0F0F0;
		color: #333333;
	}
	.head1>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.head1>p:first-child{
		width: 10%;
	}
	.head1>p:first-child>i{
		font-size: 1.7rem;
	}
	.head1>p:nth-child(2){
		width: 20%;
		margin-left: 30%;
		font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.fill1>form>p{
	    width: 94%;
	    height: 3.75rem;
	    margin: auto;
	    line-height: 3.75rem;
	    border-bottom: 1px solid #F0F0F0;
	    font-size: 1.5rem;
	    background: rgba(255,255,255,1);
	}
	.fill1>form>p>span:first-child{
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.fill1>form>p>input{
		width: 40%;
		height: 3.4rem;
		line-height: 3.4rem;
		margin-left: 13%;
		font-size:1.4rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.getcode2{
		width: 25%;
	    height: 3rem;
	    text-align: right;
	    line-height: 3rem;
	    background: white;
	    position: absolute;
	    top: 8.8rem;
	    right: 5%;
	    font-size:1.2rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.under1{
		width: 100%;
		height: 49rem;
		background: #F0F0F0;
	}
	#Register1{
		width: 25.25rem;
	    height: 3.75rem;
	    line-height: 3.75rem;
	    text-align: center;
	    background: rgba(250,231,79,1);
	    border-radius: 2.3rem;
	    margin-top: 3rem;
    	margin-left: 10%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
</style>