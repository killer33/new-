<template>
	<!--个人中心-修改支付密码-->
	<div class="Change_payment_password">
		<div class="head121">
			<router-link to="/SecurityCenter" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>修改支付密码</p>
		</div>
		<div class="fill121">
			<form action="" method="">
				<p>原密码:</p>
				<van-password-input
				  :value="oldPayPassword"
				  info="密码为 6 位数字"
				  @focus="showKeyboard = true;blurpass=0"
				/>
				<p>新密码:</p>
				<van-password-input
				  :value="newPayPassword"
				  :mask="false"
				  @focus="showKeyboard = true;blurpass=1"
				/>
				<p>确认密码:</p>
				<van-password-input
				  class="repayword"
				  :value="rePayPassword"
				  :mask="false"
				  @focus="showKeyboard = true;blurpass=2"
				/>
				<van-number-keyboard
				  :show="showKeyboard"
				  @input="onInput"
				  @delete="onDelete"
				  @blur="showKeyboard = false"
				/>
				<div class="under121">
					<input type="submit" id="Register121" name="" value="确认修改" @click="changePayPassword"/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { PasswordInput, NumberKeyboard } from 'vant';
	export default{
		data(){
			return{
				showKeyboard:false,
				oldPayPassword:'',
				newPayPassword:'',
				rePayPassword:'',
				blurpass:'',
			}
		},
		methods:{
			changePayPassword(){
				var token = window.localStorage.getItem("token");
				var that = this;
				var pattern1 = /^[0-9]{6}$/;//密码正则6-16大小写字母、数字、-_;
				var rtp = pattern1.test(that.newPayPassword);
				if (rtp==false) {
					that.$message.warning("密码格式错误，密码格式6位数字");
					return;
				}
				if (that.newPayPassword!=that.rePayPassword) {
					that.$message.warning("确认密码错误，不一致 ");
					return;
				}
				$.ajax({
					type:"post",
					url:join+"user/payPassEdit",
					dataType:"json",
					data:{
						token:token,
						oldpass:that.oldPayPassword,
						newpass:that.newPayPassword,
						repass:that.rePayPassword
					},
					success:function(data){
						console.log(data);
		  				if (data.ret!=1) {
		  					
							that.$message.error("修改失败!"+data.mas);
						}else{
							that.$message.success("修改成功！");
							window.location.href="#/SecurityCenter";
						}
		  			},
		  			error:function(err){
						console.log("请求失败"+err);
					}
					
				});
			},
			onInput(key) {
				if(this.blurpass==0){
					this.oldPayPassword = (this.oldPayPassword + key).slice(0, 6);
				}else if(this.blurpass==1){
					this.newPayPassword = (this.newPayPassword + key).slice(0, 6);
				}else if(this.blurpass==2){
					this.rePayPassword = (this.rePayPassword + key).slice(0, 6);
				}
		    },
		    onDelete() {
		    	if(this.blurpass==0){
					this.oldPayPassword = this.oldPayPassword.slice(0, this.oldPayPassword.length - 1);
				}else if(this.blurpass==1){
					this.newPayPassword = this.newPayPassword.slice(0, this.newPayPassword.length - 1);
				}else if(this.blurpass==2){
					this.rePayPassword = this.rePayPassword.slice(0, this.rePayPassword.length - 1);
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
	.Change_payment_password{
		width: 100%;
		background: #fff;
	}
	.head121{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.head121>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.head121>p:first-child{
		width: 10%;
	}
	.head121>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.fill121>form>p{
		width: 94%;
		height: 3.5rem;
		margin: auto;
		line-height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 15px;
		position: relative;
	}
	.under121{
		width: 100%;
		height: 20rem;
		background: #F0F0F0;
	}
	#Register121{
		width: 80%;
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    background: #FAE64F;
	    font-size: 15px;
	    border-radius: 30px;
	    margin-top: 10%;
	    margin-left: 9%;
	}
	.repayword{
		margin-bottom: 3rem;
	}
</style>