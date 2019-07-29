<template>
	<!--个人中心-->
	<div class="personal">
		<div class="header">
			<router-link to="/messagecation" tag="div" class="xiaoxi">
				<img src="../../build/xiaoxi.png"/>
				<span>{{info.new_information_num}}</span>
			</router-link>
      	</div>
      	<div class="bq"></div>
      	<!-- 卡片 -->
    	<div class="card">
          	<router-link to="" tag="div"><img :src="info.userpic"></router-link>
            <p class="card_p1">{{info.username}}</p>
            <p class="card_p2">{{info.phone}}</p>
            <p class="card_p3">
            	<button v-show="isCe==5" class="CeFiled">认证失败</button>
                <button v-show="isCe==0||isCe==1||isCe==3" :class="{'NotCe':isCe==0}">{{perCe}}</button>
                <button v-show="isCe==0||isCe==2||isCe==4" :class="{'NotCe':isCe==0}">{{enterCe}}</button>
                <span><img src="../../img/xunzhag.png"/></span>
                <i>+3</i>
            </p>
            <ul>
                <router-link to="/Focus_on" tag="li" @click.native="flushCom">
                    <p>{{info.follow_num}}</p>
                    <p>关注</p>
                </router-link>
                <router-link to="/Blank_fan" tag="li">
                    <p>{{info.fans_num}}</p>
                    <p>粉丝</p>
                </router-link>
                <router-link to="/recommended" tag="li">
                    <p>{{info.recommend}}</p>
                    <p>我的推荐</p>
                </router-link>
                <router-link to="/re_activity" tag="li" @click.native="flushCom">
                    <p>269</p>
                    <p>推荐活动</p>
                </router-link>
          	</ul>
      	</div>
      	<div class="content">
	      	<ul>
	          	<router-link to="/Integral_record" tag="li">
	              	<p class="cosnd"><img src="../../img/jifen.png"/></p>
	              	<p>
	              		<span class="left">积分</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	          	</router-link>
	            <router-link to="/bill_record" tag="li">
	              	<p class="cosnd"><img src="../../img/zhangdan.png"/></p>
	              	<p>
	              		<span class="left">账单</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	          	</router-link>
	          	<router-link to="/Coupon_blank_page" tag="li">
	              	<p class="cosnd"><img src="../../img/youhuiquan.png"/></p>
	              	<p>
	              		<span class="left">优惠券</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	         	</router-link>
	          	<router-link to="/voucher" tag="li">
	              	<p class="cosnd"><img src=""/></p>
	              	<p>
	              		<span class="left">兑换券</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	         	</router-link>
	          	<router-link to="/invitation" tag="li">
	              	<p class="cosnd"><img src=""/></p>
	              	<p>
	              		<span class="left">我的邀请码</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	         	</router-link>
	          	<router-link to="/Personal_activity" tag="li">
	              	<p class="cosnd"><img src=""/></p>
	              	<p>
	              		<span class="left">活动</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	         	</router-link>
	            <router-link to="/family_tree_blank" tag="li">
	              	<p class="cosnd"><img src="../../img/guanxizupu.png"/></p>
	              	<p>
	              		<span>关系族谱</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	          	</router-link>
	            <router-link to="/personal_data" tag="li">
	              	<p class="cosnd"><img src="../../img/ziliao.png"/></p>
	              	<p>
	              		<span>个人资料</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	         	</router-link>
	            <li @click="to_certification">
	             	<p class="cosnd"><img src="../../img/shimingrenzheng.png"/></p>
	             	<p>
	             		<span>实名认证</span>
	             		<i class="iconfont right">&#xe61f;</i>
	             	</p>
	         	</li>
	            <router-link to="/SecurityCenter" tag="li">
	             	<p class="cosnd"><img src="../../img/anquanzhongxin.png"/></p>
	              	<p>
	              		<span>安全中心</span>
	              		<i class="iconfont right">&#xe61f;</i>
	              	</p>
	          	</router-link>
	            <router-link to="/feedback" tag="li" @click.native="flushCom">
	              	<p class="cosnd"><img src="../../img/yijianfankui.png"/></p>
	             	<p>
	             		<span>意见反馈</span>
	              		<i class="iconfont right">&#xe61f;</i>
	             	</p>
	          	</router-link>
	          	<li @click="logout">
	          		<p><span>退出登录</span></p> 
	          	</li>
	      	</ul>
      	</div>
      	<div class="lk"></div>
      	<!--底部-->
		<div class="footer">
			<ul>
				<router-link to="/Home" tag="li">
					<i class="iconfont">&#xe619;</i><br />
					<span>首页</span>
				</router-link>
				<router-link to="/activity" tag="li">
					<i class="iconfont">&#xe687;</i><br />
					<span>活动</span>
				</router-link>
				<router-link to="/Release_1" tag="li" class="release">
					<p><img src="../../build/fabu.png"/></p>
					<span>发布</span>
				</router-link>
				<router-link to="/enterprise" tag="li">
					<i class="iconfont">&#xe6b0;</i><br />
					<span>企业</span>
				</router-link>
				<router-link to="" tag="li">
					<i class="iconfont" style="color:#FAE64F">&#xe625;</i><br />
					<span style="color:#FAE64F">我的</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				info:[],
				isCe:0,
				perCe:'个人认证',
				enterCe:'企业认证'
			}
		},
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			},
			//前往认证
			to_certification:function(){
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/show_geren_type",
					dataType:"json",
					data:{token:token},
					success:function(data){
//						console.log("请求成功");
//						console.log(data);
						if (data.type==0||data.type==5) { 
							window.location.href="#/real_name_type";
						}else if(data.type==1||data.type==2){
							that.$message.warning("正在审核中！");	
						}else if (data.type==3) {
							window.location.href="#/show_certification";
						}else if(data.type==4){
							window.location.href="#/show_certification_qi";
						}else if(data.info=="") {
							that.$message.warning(data.mas);  
						}
						
					},
					error:function(err){
						console.log("请求失败");
					}
				});
			},
			//退出登录
			logout(){
				var token = window.localStorage.getItem("token");
				var that=this;
				$.ajax({
					type:"post",
					url:join+"user/rm_cache",
					dataType:"json",
					data:{token:token},
					success:function(data){
						window.localStorage.removeItem("token");
						that.$router.push({ path:"/login"});
					},
					error:function(err){
						console.log("请求失败");
					}
				});
				

				
				
			}
		},
		mounted(){

			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				if(token){
					$.ajax({
						type:"post",
						url:join+"user/index",
						dataType:"json",
						data:{token:token},
						success:function(data){
			  				that.info=data.info;
			  			},
			  			error:function(err){
							console.log("请求失败");
						}
					});
					$.ajax({
						type:"post",
						url:join+"user/show_geren_type",
						dataType:"json",
						data:{token:token},
						success:function(data){
//							console.log("请求成功");
							console.log(data);
							switch(data.type){
								case 0:that.isCe=0; 
									break;
								case 1:that.isCe=1; 
									break;
								case 2:that.isCe=2; 
									break;
								case 3:that.isCe=3; 
									break;
								case 4:that.isCe=4; 
									break;
								case 5:that.isCe=5; 
									break;
								default:that.$message.error("认证状态获取失败");
							}
							if(that.isCe==1){
								that.perCe="个人认证中";
							}else if(that.isCe==2){
								that.enterCe="企业认证中";
							}else if(that.isCe==3){
								that.perCe="个人已认证";
							}else if(that.isCe==4){
								that.enterCe="企业已认证";
							}else if(that.isCe==5){
								that.perCe="认证失败";
							}
							
						},
						error:function(err){
							console.log("请求失败");
						}
					});
				}else{
					window.location.href="#/login";
				}
			})
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
	.personal{
		width: 100%;
		position: relative;
	}
	.personal .bq{
		width: 100%;
	    height: 12rem;
	    background: white;
	    position: absolute;
	    top: 17%;
	    z-index: -1;
	}
	.personal .header{
		width: 100%;
	    height: 15rem;
	    background: #FAE64E;
	    border-radius: 0% 0% 30% 30%;
	    position: relative;
	}
	.personal .xiaoxi{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: 5%;
		right: 2%;
	}
	.personal .xiaoxi>img{
		width: 100%;
		height: 100%;
	}
	.personal .xiaoxi>span{
		color: white;
		position: absolute;
		right: 0%;
		bottom: 53%;
	}
	.personal .card{
	    background: rgba(255,255,255,1);
	    box-shadow: 0px 2px 18px 0px rgba(206,206,206,0.48);
	    border-radius: 10px;
	    width: 91%;
	    height: 16.4rem;
	    margin-left: 4.5%;
	    position: absolute;
	    top: 5rem;
	}
	.personal .card img{
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 50%;
		position: absolute;
		right: 4%;
		top: 12%;
	}
	.personal .card_p1{
		height: 3rem;
	    line-height: 3rem;
	    font-size: 2.1rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(51,51,51,1);
	    text-align: left;
	    margin-top: 8%;
	    margin-left: 6%;
	}
	.personal .card_p2{
		margin-left: 6%;
	    font-size: 1.4rem;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    color: rgba(102,102,102,1);
	}
	.personal .card_p3{
		width: 70%;
	    height: 3rem;
	    margin-top: 1%;
	    line-height: 3rem;
	    position: relative;
	}
	.personal .card_p3>button{
		width: 6rem;
	    height: 1.7rem;
	    line-height: 1.7rem;
	    text-align: center;
	    background: rgba(156,78,238,1);
	    border-radius: 0.8rem;
	    margin-left: 8%;
	    font-size:1.1rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(255,255,255,1);
	}
	.personal .card_p3>.NotCe{
		background: #808080;
	}
	.personal .card_p3>.CeFiled{
		background-color: #FF6347;
	}
	.personal .card_p3>span{
		display: inline-block;
	    width: 16px;
	    height: 25px;
	    position: absolute;
	    right: 14%;
	}
	.personal .card_p3>span>img{
		width: 100%;
		height: 100%;
	}
	.personal .card_p3>i{
		font-size:1.7rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(235,46,68,1);
		position: absolute;
	    right: 6%;
	    top: -30%;
	}
	.personal .card>ul{
		width: 100%;
		margin-top: 5%;
	}
	.personal .card>ul>li{
		width: 5rem;
	    height: 4rem;
	    text-align: center;
	    float: left;
	    line-height: 1.7rem;
	    font-size: 1.3rem;
	    margin-left: 5%;
	}
	.personal .card>ul>li>p:first-child{
		font-size:1.4rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.personal .card>ul>li>p:nth-child(2){
		font-size:1.4rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.personal .content{
		width: 100%;
		margin-top: 25%;
		background: white;
	}
	.personal .content>ul{
		width: 97%;
		margin-left: 3%;
	}
	.personal .content>ul>li{
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
	}
	.personal .cosnd{
		width: 1.5rem;
		height: 1.5rem;
		float: left;
		margin-top: 1.5%;
    	margin-left: 1%;
	}
	.personal .cosnd>img{
		width: 100%;
		height: 100%;
	}
	.personal .content>ul>li>p:nth-child(2){
		width: 86%;
	    height: 4.5rem;
	    float: left;
	    margin-left: 5%;
	    position: relative;
	    font-size:1.4rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.personal .content>ul>li>p:nth-child(2)>i{
		position: absolute;
		right: 0%;
		color: #B2B2B2;
	}
	.personal .lk{
		width: 100%;
		height: 5rem;
		background: #F0F0F0;
	}
	/*底部*/
	.personal .footer{
		width: 100%;
		height: 4.2rem;
		position: fixed;
		bottom: 0%;
		z-index: 999;
		background: white;
		border-top: 0.1rem solid #F0F0F0;
	}
	.personal .footer>ul{
		width: 100%;
		height: 4.2rem;
	}
	.personal .footer>ul>li{
		width: 15%;
	    height: 4.2rem;
	    float: left;
	    text-align: center;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	    margin-left: 4%;
	}
	.personal .footer>ul>li>i{
		display: inline-block;
		font-size: 2rem;
		margin-top: 10%;
	}
	.personal .release{
		position: relative;
		bottom: 45%;
	}
	.personal .release>p{
		width: 3.5rem;
	    height: 3.5rem;
	    background: #FAE64F;
	    border-radius: 50%;
	    text-align: center;
	    line-height: 2.5rem;
	    margin-left: 13%;
	}
	.personal .release>p>img{
		width: 100%;
		height: 100%;
	}
	.personal .release>span{
		position: absolute;
	    bottom: -30%;
	    right: 28%;
	    font-family: PingFang-SC-Regular;
	    font-weight: 400;
	    color: rgba(51,51,51,1);
	}
</style>