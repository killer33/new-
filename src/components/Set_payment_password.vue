<template>
	<!--个人中心-设置支付密码-->
	<div class="Set_payment_password">
		<div class="head121">
			<router-link to="/SecurityCenter" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>设置支付密码</p>
		</div>
		<div class="fill121">
			<form action="" method="">
				<p>密码:</p>
				<van-password-input
				  :value="setPayPassword"	  
				  @focus="showKeyboard = true;blurpass=0"
				/>
				<p>确认密码:</p>
				<van-password-input
				  :value="reSetPayPassword"
				  info="密码为 6 位数字"
				  @focus="showKeyboard = true;blurpass=1"
				/>
				<van-number-keyboard
				  :show="showKeyboard"
				  @input="onInput"
				  @delete="onDelete"
				  @blur="showKeyboard = false"
				/>
				<div class="under121">
					<input type="submit" id="Register122" name="" value="确认设置" @click="setPayPasswordF"/>
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
				setPayPassword:"",
				reSetPayPassword:'',
				showKeyboard:false,
				blurpass:0,
			}
		},
		methods:{
			onInput(key){
				if(this.blurpass==0){
					this.setPayPassword = (this.setPayPassword + key).slice(0, 6);
				}else if(this.blurpass==1){
					this.reSetPayPassword = (this.reSetPayPassword + key).slice(0, 6);
				}
				
			},
			onDelete(){
				if(this.blurpass==0){
					this.setPayPassword = this.setPayPassword.slice(0, this.setPayPassword.length - 1);
				}else if(this.blurpass==1){
					this.reSetPayPassword = this.reSetPayPassword.slice(0, this.reSetPayPassword.length - 1);
				}
				
			},
			setPayPasswordF(){
				var token = window.localStorage.getItem("token");
				var that = this;
				if (that.setPayPassword!=that.reSetPayPassword) {
					that.$message.warning("确认密码错误，不一致 ");
					return;
				};
				$.ajax({
					type:"post",
					url:join+"user/add_user_paypass",
					dataType:"json",
					data:{
						token:token,
						paypass:that.setPayPassword
					},
					success:function(data){
						console.log(data);
		  				if (data.status!=1) {
							that.$message.error("设置失败");
						}else{
							that.$message.success("设置成功！");
							window.location.href="#/SecurityCenter";
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
	.Set_payment_password{
		width: 100%;
		background: #fff;
	}
	.Set_payment_password .head121{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.Set_payment_password .head121>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.Set_payment_password .head121>p:first-child{
		width: 10%;
	}
	.Set_payment_password .head121>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.Set_payment_password .fill121>form>p{
		width: 94%;
		height: 3.5rem;
		margin: auto;
		line-height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 15px;
		position: relative;
	}
	.Set_payment_password .under121{
		width: 100%;
		height: 20rem;
		background: #F0F0F0;
	}
	.Set_payment_password #Register122{
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
</style>