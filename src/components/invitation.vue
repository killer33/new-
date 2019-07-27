<template>
	<!--邀请码-->
	<div class="invitation">
		<div class="invitation_header">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>我的邀请码</p>
		</div>
		<div class="show_invitation">
			<p>邀请码</p>
			<div><img :src="info.invitation_pic"/></div>
			<p>我的邀请链接</p>
		</div>
		<div class="showurl"><span style="background: #F0F0F0;">{{info.invitation_url}}</span></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				info:[],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/invitation",
					dataType:"json",
					data:{token:token},
					success:function(data){
						console.log(data);
						that.info = data.info;
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			})
	    }
	}
</script>

<style>
	.invitation{
		width: 100%;
		background: white;
	}
	.invitation_header{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
	}
	.invitation_header>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.invitation_header>p:first-child{
		width: 10%;
	}
	.invitation_header>p:first-child>i{
		font-size:1.7rem;
	}
	.invitation_header>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.show_invitation{
		width: 100%;
		margin-top: 0.3rem;
	}
	.show_invitation>p{
		width: 90%;
	    height: 4rem;
	    font-size: 1.7rem;
	    line-height: 4rem;
	    padding: 0% 3%;
	}
	.show_invitation>div{
		width: 20rem;
		height: 20rem;
		margin: auto;
		overflow: hidden;
		border: dashed 0.2rem #F0F0F0;
		border-radius: 1.5rem;
	}
	.show_invitation>div>img{
		width: 100%;
		height: 100%;
	}
	.showurl{
		font-size: 1.4rem;
    	padding: 0% 0% 3% 4%;
	}
</style>