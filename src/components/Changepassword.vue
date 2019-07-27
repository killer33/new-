<template>
	<!--个人中心-修改密码-->
	<div class="Changepassword">
		<div class="head12">
			<router-link to="/SecurityCenter" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>修改密码</p>
		</div>
		<div class="fill12">
			<form action="" method="">
				<p><span>原密码</span><input type="password" name="" id="oldpass" value="" placeholder="请输入"/></p>
				<p><span>新密码</span><input type="password" name="" id="newpass" value="" placeholder="请输入"/></p>
				<p><span>确认新密码</span><input type="password" name="" id="repass" value="" placeholder="请输入"/></p>
				<div class="under12">
					<input type="submit" id="Register12" name="" value="确认修改" @click="Confirm_change"/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				info:[],
			}
		},
		methods:{
			Confirm_change:function(){
				var oldpass = $("#oldpass").val();
				var newpass = $("#newpass").val();
				var repass = $("#repass").val();
				var token = window.localStorage.getItem("token");
				var that = this;
				var pattern1 = /^[\w_-]{6,16}$/;//密码正则6-16大小写字母、数字、-_;
				var rtp = pattern1.test(newpass);
				if (rtp==false) {
					that.$message.warning("密码格式错误，密码格式为6-16位大小写字母、数字、-和_ ");
					return;
				}
				if (newpass!=repass) {
					that.$message.warning("确认密码错误，不一致 ");
					return;
				}
				$.ajax({
					type:"post",
					url:join+"user/passedit",
					dataType:"json",
					data:{
						token:token,
						oldpass:oldpass,
						newpass:newpass,
						repass:repass
					},
					success:function(data){
		  				if (data.ret!=1) {
							that.$message.error("修改失败");
						}else{
							that.$message.success("修改成功，请重新登录");
							window.location.href="#/login";
						}
		  			},
		  			error:function(err){
						console.log("请求失败"+err);
					}
					
				});
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
	.Changepassword{
		width: 100%;
	}
	.head12{
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #F0F0F0;
		background: white;
	}
	.head12>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left; 
	}
	.head12>p:first-child{
		width: 10%;
	}
	.head12>p:first-child>i{
		font-size: 1.7rem;
	}
	.head12>p:nth-child(2){
		width: 20%;
		margin-left: 29%;
		font-size: 1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.fill12>form>p{
		width: 100%;
		height: 3.75rem;
		margin: auto;
		line-height: 3.75rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 1.5rem;
		position: relative;
		background: white;
	}
	.fill12>form>p>span:first-child{
		margin-left: 3%;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.fill12>form>p>input{
		width: 40%;
		height: 3.75rem;
		line-height: 3.75rem;
		font-size: 1.4rem;
		position: absolute;
		left: 30%;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.under12{
		width: 100%;
		height: 30rem;
		background: #F0F0F0;
	}
	#Register12{
		width: 80%;
	    height: 3.75rem;
	    line-height: 3.75rem;
	    text-align: center;
	    background: #FAE64F;
	    font-size: 1.7rem;
	    border-radius: 2.3rem;
	    margin-top: 10%;
	    margin-left: 9%;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	}
</style>