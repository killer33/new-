<template>
	<!--个人资料-->
	<div class="personal_data">
		<div class="hea">
			<router-link to="/personal" tag="p" @click.native="flushCom"><i class="iconfont">&#xe646;</i></router-link>
			<p>个人资料</p>
		</div>
		<hr />
		<section class="data-s">
			<li class="txs">
				<span>头像</span> <p class="tx" @click="uploadAvatar"><img :src="info.userpic"/></p><i class="iconfont">&#xe649;</i>
			</li>
			<router-link to="" tag="li" class="nickname">
				<span>昵称</span> <p class="username"  @click="nickName">{{info.username}}</p><i class="iconfont">&#xe649;</i>
			</router-link>
			<router-link to="" tag="li">
				<span>电话</span> <p>{{info.phone}}</p>
			</router-link>
			<li @click="isRenzheng">
				<span>实名认证</span> <p class="certification"></p>
			</li>
			<router-link to="" tag="li" v-show="info.type==3||info.type==4">
				<span>真实姓名</span> <p>{{info.realname}}</p>
			</router-link>
			<router-link to="" tag="li" v-show="info.type==3||info.type==4">
				<span>身份证号</span> <p>{{info.idcard}}</p>
			</router-link>
		</section>
		<div class="jxws">
			<router-link to="/Continue_certification" tag="p">继续完善</router-link>
		</div>
		<!--<div class="mask_Modify_nickname"></div>
		<div class="Modify_nickname">
			<div class="Modify_nickname_div1">
				<p>请输入新的昵称</p>
				<input type="text" name="" id="" value="" />
			</div>
			<div class="Modify_nickname_div2">
				<p style="border-right: 1px solid #F0F0F0;" class="determine">确定</p><p class="cancel">取消</p>
			</div>
		</div>-->
		<van-popup v-model="showNickName" class="showNickName">
			<div class="Modify_nickname_div1">
				<p>请输入新的昵称</p>
				<input type="text" v-model="newName"/>
			</div>
			<div class="Modify_nickname_div2">
				<p style="border-right: 1px solid #F0F0F0;" class="determine" @click="nickTrue">确定</p><p class="cancel" @click="nickFalse">取消</p>
			</div>
		</van-popup>
		<el-upload
			id="uploadAva"
			class="upload_avatar"
			:action="joinUrl+'/user/upload'"
			:data="upLoadData"
			name = "file"
			accept=".jpg,.png,.jpeg,tif"
			:show-file-list="false"
			:on-success="handleAvatarSuccessAva"
			:before-upload="beforeAvatarUploadAva">
		</el-upload>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default{
		data(){
			return{
				info:[],
				joinUrl:'',
				upLoadData: {
			        token: ''
			    },
			    imgInfoUrl:'',
			    showNickName:false, //修改昵称弹窗
			    newName:'' //新昵称
			}
		},
		methods:{
			flushCom:function(){
				this.$router.go(0); 
			},
			uploadAvatar(){
				var uploadImg=$("#uploadAva input");
	    		uploadImg.click();
			},
			//文件上传成功时的钩子
	        handleAvatarSuccessAva(res, file) {
	           	var that = this;
	           	var info = res.info;
				if(res.ret==1){                        
					that.info.userpic=imgJoin+res.info;
					that.imgInfoUrl=res.info;
					$.ajax({
						type:"post",
						url:join+"user/add_userpic",
						dataType:"json",
						data:{
							token:that.upLoadData.token,
							userpic:that.imgInfoUrl
						},
						success:function(data){
							that.$message.success("上传头像成功");
						},
		  				error:function(err){
							console.log("请求失败");
						}	
						
					})
                }
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUploadAva(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	//修改昵称
	      	nickName(){
	      		this.showNickName=true;
	      	},
	      	nickTrue(){
	      		var that=this;
				$.ajax({
					type:"post",
					url:join+"user/editUsername",
					dataType:"json",
					data:{token:that.upLoadData.token,username:that.newName},
					success:function(data){
						console.log("成功");
						console.log(data);
						if (data.ret==0) {
							that.$message({
								message:"昵称不合法！长度最长为7",
								type:'error'
							});
							return;
						}else{
							that.showNickName=false;
							that.$message.success("昵称修改成功");
							that.info.username=that.newName;
						}
						
					},
					error:function(err){
						console.log(err);
					}
	      		})
			},
			nickFalse(){
				this.showNickName=false;
			},
			//是否实名认证
			isRenzheng(){
				if(this.info.type==0||this.info.type==5){
					Dialog.alert({
					  title: '提示',
					  message: '请前往认证中心进行实名认证',
					  confirmButtonColor:'#A2A2A2'
					}).then(() => {
					
					});
				}
			}
		},
		mounted(){
			this.joinUrl=join;
			var token = window.localStorage.getItem("token");
	    	this.upLoadData.token=token;
			this.$nextTick(()=>{
				var that = this;
				var token = window.localStorage.getItem("token");
				$.ajax({
					type:"post",
					url:join+"user/userinfo",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log("个人资料请求成功");
		  				console.log(data);
		  				that.info=data.info;
		  				if (that.info.type==0) {
		  					$(".certification").text("未认证");
		  					return;
		  				}
		  				if (that.info.type==1) {
		  					$(".certification").text("个人认证审核中");
		  					return;
		  				}
		  				if (that.info.type==2) {
		  					$(".certification").text("企业认证审核中");
		  					return;
		  				}
		  				if (that.info.type==3) {
		  					$(".certification").text("已认证个人");
		  					return;
		  				}
		  				if (that.info.type==4) {
		  					$(".certification").text("已认证企业");
		  					return;
		  				}
		  				if (that.info.type==5) {
		  					$(".certification").text("认证不合格");
		  					return;
		  				}
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
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
	.personal_data{
		width: 100%;
	}
	.personal_data>div{
		background: white;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
	}
	.hea>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.hea>p:first-child>i{
		font-size: 1.7rem;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	hr{
		width: 100%;
		height: 0.3rem;
		background: #F0F0F0;
	}
	.data-s{
		width: 100%;
		background: white;
	}
	.data-s>li{
		width: 97%;
		height: 3.75rem;
		border-bottom: 1px solid #F0F0F0;
		text-align: left;
		line-height: 3.75rem;
		list-style: none;
		font-size: 1.5rem;
		margin-left: 3%;
		position: relative;
	}
	.data-s>li>span{
		margin-left: 2%;
		font-size:1.5rem;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.data-s>li>p{
		width: 40%;
	    height: 3rem;
	    text-align: right;
	    float: right;
	    margin-right: 12%;
	    font-size:1.4rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.data-s>.txs{
		width: 97%;
		height: 5rem;
		line-height: 5rem;
	}
	.data-s>.txs>.tx{
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		text-align: center;
		color: white;
		overflow: hidden;
		margin-top: 2%;
	}
	.data-s>.txs>.tx>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.upload_avatar{
		display: none;
	
	}
	
	.data-s>li>i{
		position: absolute;
		right: 3%;
	}
	.jxws{
		width: 100%;
		height: 25rem;
		background: #F0F0F0 !important;
	}
	.jxws>p{
		width:25.25rem;
		height:3.75rem;
		background:rgba(250,231,79,1);
		border-radius:2.3rem;
		text-align: center;
		line-height: 3.75rem;
		margin: auto;
		font-size: 1.6rem;
		position: relative;
		top: 10%;
	}
	.showNickName{
		width: 24.7rem;
	    height: 15.8rem;
	    border-radius: 0.5rem;
	}
	
	.personal_data>.van-overlay{
		background: rgba(0,0,0,0.7);
	}
	.Modify_nickname_div1{
		width: 100%;
		height: 11rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.Modify_nickname_div1>p{
		width: 100%;
		height: 6rem;
		text-align: center;
		line-height: 6rem;
		font-size:1.7rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.Modify_nickname_div1>input{
		margin-left: 10%;
		padding: 0% 2%;
		width:19.2rem;
		height:3.5rem;
		background:rgba(248,248,248,1);
		border-radius:0.5rem;
	}
	.Modify_nickname_div2>p{
		width: 49%;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		float: left;
		font-size: 1.5rem;
		color: #A2A2A2;
	}
</style>