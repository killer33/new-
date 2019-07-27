<template>
	<!--个人中心-个人认证-->
	<div class="Personal_authentication">
		<div class="heade">
			<router-link to="/real_name_type" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>个人实名认证</p>
		</div>
		<p>上传身份证照片</p>
		<div class="uppic">
			<div class="upload">
				<p>上传身份证正面</p>
				<el-upload
					class="avatar-uploader"
				    :action= 'joinUrl+"user/upload"'
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess"
				    :before-upload="beforeAvatarUpload">
				    <img v-if="imageUrl" :src="imageUrl" class="avatar">
				    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<div class="upload">
				<p>上传手持身份证</p>
				<el-upload
					class="avatar-uploader1"
				    :action= 'joinUrl+"user/upload"'
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess1"
				    :before-upload="beforeAvatarUpload1">
				    <img v-if="imageUrl1" :src="imageUrl1" class="avatar2">
				    <i v-else class="el-icon-plus1 avatar-uploader-icon1"></i>
				</el-upload>
			</div>
			<div class="upload">
				<p>上传身份证反面</p>
				<el-upload
					class="avatar-uploader2"
				    :action= 'joinUrl+"user/upload"'
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess2"
				    :before-upload="beforeAvatarUpload2">
				    <img v-if="imageUrl2" :src="imageUrl2" class="avatar2">
				    <i v-else class="el-icon-plus2 avatar-uploader-icon2"></i>
				</el-upload>
			</div>
		</div>
		<div class="upload_template">
			<p>上传标准</p>
			<ul>
				<li><i><img src="../../img/biaozhun.png"/></i>
					<div><img src="../../img/zhenghque.png"/></div>
					<p>标准照片</p>
				</li>
				<li><i><img src="../../img/mohu.png"/></i>
					<div><img src="../../img/cuowu.png"/></div>
					<p>模糊照片</p>
				</li>
				<li><i><img src="../../img/shanguang.png"/></i>
					<div><img src="../../img/cuowu.png"/></div>
					<p>闪光照片</p>
				</li>
			</ul>
		</div>
		<hr />
		<div class="for">
			<p>真实姓名：<input type="text" class="relname" v-model="realName"/></p>
			<p>身份证号：<input type="text" class="idcard" v-model="ids"/></p>
		</div>
		<!--<div class="bjtext">
			<el-upload
					style="display: none;"
					id="el-upload"
					class="avatar-uploader"
				    :action= 'joinUrl+"user/upload"'
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess3"
				    :before-upload="beforeAvatarUpload3">
			</el-upload>
			<quill-editor 
		        v-model="content" 
		        ref="myQuillEditor" 
		        :options="editorOption" 
		        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
		        @change="onEditorChange($event)">
		    </quill-editor>
		</div>-->
		<div class="ljrz">
			<p @click="renzheng">{{subType}}</p>
		</div>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
	export default {
	    data() {
	        return {
	        	subType:'立即认证',
	        	joinUrl:'',
	            imageUrl: '',
	            imageUrl1: '',
	            imageUrl2: '',
	            upLoadData: {
			        token: ''
			    },
			    pic1:[],
			    pic2:[],
			    pic3:[],
			    content:null,
                editorOption:{
                	modules:{
                		toolbar:[
                			['bold','italic','underline','strike','image','video','clean',{ 'align': [] },{ 'color': [] }, { 'background': [] },{ 'direction': 'rtl' }],
                			[{ 'size': ['small', false, 'large', 'huge'] },{ 'font': [] },{ 'indent': '-1'}, { 'indent': '+1' }],
                		]
                	}
                },
                realName:'',
                ids:''
	        }
	    },
	    mounted(){
	    	this.joinUrl=join;
	    	this.$nextTick(()=>{
	    		var that = this;
	    		var token = window.localStorage.getItem("token");
	    		that.upLoadData.token=token;
	    		//获取提交过的认证信息
	    		$.ajax({
					type:"post",
					url:join+"user/show_geren_type",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log(data.data);
		  				if(data.type==5){
		  					that.$message.warning('请修改');
		  					that.imageUrl=imgJoin+data.data.front_pic;
		  					that.imageUrl1=imgJoin+data.data.behind_pic;
		  					that.imageUrl2=imgJoin+data.data.hand_pic;
		  					that.realName=data.data.realname;
		  					that.ids=data.data.idcard;
		  					that.pic1.splice(0);
	           				that.pic1.push(data.data.front_pic);
	           				that.pic2.splice(0);
	           				that.pic2.push(data.data.behind_pic);
	           				that.pic3.splice(0);
	           				that.pic3.push(data.data.hand_pic);
	           				that.subType="重新认证"
		  				}
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
	    		
	    	})
	    	//替换富文本编辑器上传图片事件
//	    	var that=this;
//	    	var imgHandler=async function(img){
//	    		if(img){
//	    			var uploadImg=$("#el-upload input");
//	    			uploadImg.click();
//	    		}
//	    	}
//	    	that.$refs.myQuillEditor.quill.getModule('toolbar').addHandler("image",imgHandler)
			
	    },
	    methods: {
	    	onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
	    	//上传身份证正面
	    	//文件上传成功时的钩子
	        handleAvatarSuccess(res, file) {
	            this.imageUrl = URL.createObjectURL(file.raw);
	           	var that = this;
	           	var info = res.info;
	           	that.pic1.splice(0);
	           	that.pic1.push(info);
	           	console.log(that.pic1);
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	//上传手持身份证
	      	//文件上传成功时的钩子
	        handleAvatarSuccess1(res, file) {
	            this.imageUrl1 = URL.createObjectURL(file.raw);
	           	var that = this;
	           	var info = res.info;
	           	that.pic2.splice(0);
	           	that.pic2.push(info);
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload1(file) {
		       	const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	//上传身份证反面
	      	//文件上传成功时的钩子
	        handleAvatarSuccess2(res, file) {
	            this.imageUrl2 = URL.createObjectURL(file.raw);
	           	var that = this;
	           	var info = res.info;
	           	that.pic3.splice(0);
	           	that.pic3.push(info);
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload2(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	
	      	//富文本编辑器发布图片的上传
	      	//文件上传成功时的钩子
	        handleAvatarSuccess3(res, file) {
	           	var that = this;
	           	var info = res.info;
	           	that.pic1.splice(0);
	           	that.pic1.push(info);
				if(res.ret==1){                        
					var imgUrl=imgJoin+res.info;
                    that.$refs.myQuillEditor.quill.insertEmbed(0, 'image',imgUrl)
                }
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload3(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	
	      	//认证
	      	renzheng:function(){
	      		var that = this;
	      		var token = window.localStorage.getItem("token");
	      		//身份证正面
	      		var front_pic = that.pic1[0];
	      		//身份证背面
	      		var behind_pic = that.pic3[0];
	      		//手持照
	      		var hand_pic = that.pic2[0];
	      		
	      		if (that.pic1.length==0||that.pic3.length==0||that.pic2.length==0) {
	      			this.$message.error('认证材料不足!');
	      			return;
	      		}
	      		//姓名
	      		var realname = that.realName;
	      		//身份证号
	      		var idcard = that.ids;
	      		//姓名验证
	      		var regName =/^[\u4e00-\u9fa5]{2,4}$/;  
			    if(regName.test(realname)==false){  
			        this.$message.error('真实姓名填写有误！');  
					return;
			    } 
			    //身份证验证
			    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
				if(regIdNo.test(idcard)==false){  
				    this.$message.error('身份证号填写有误！');  
				    return;  
				} 
				$.ajax({
	      			type:"post",
	      			url:join+"user/idcard",
	      			dataType:"json",
	      			data:{token:token,front_pic:front_pic,behind_pic:behind_pic,hand_pic:hand_pic,realname:realname,idcard:idcard},
	      			success:function(data){
	      				that.$message.success('已提交认证!');
	      				console.log(front_pic,behind_pic,hand_pic);
	      				console.log(data);
		      				window.location.href="#/personal";
	      			},
	      			error:function(err){
	      				console.log("请求失败");
	      			}
	      		});
	      		console.log([front_pic,behind_pic,hand_pic,realname,idcard]);
	      		
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
	.Personal_authentication{
		width: 100%;
	}
	.heade{
		width: 100%;
		height: 4.5rem;
		background: white;
		border-bottom: 0.1rem solid #F0F0F0;
	}
	.heade>p{
	    height: 4.5rem;
	    line-height: 4.5rem;
	    text-align: center;
	    float: left;
	}
	.heade>p:first-child{
		width: 10%;
	}
	.heade>p:first-child>i{
		font-size: 1.7rem;
	}
	.heade>p:nth-child(2){
		width: 30%;
	    margin-left: 26%;
	    font-size: 1.7rem;
	}
	.Personal_authentication>p{
		height: 3rem;
	    line-height: 5rem;
	    background: white;
	    font-size: 1.5rem;
	    padding: 0% 3% 0%;
	}
	.uppic{
		background: white;
	}
	.upload{
		padding: 5% 0%;
		position: relative;
	}
	.upload>p:first-child{
		position: absolute;
	    top: 8rem;
    	left: 12.5rem;
	    font-size:1.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(204,204,204,1);
	}
	.avatar-uploader .el-upload {
	    border: 0.1rem dashed #d9d9d9;
	    border-radius: 0.6rem;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    margin-left: 8rem;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
	    color: #8c939d;
	    width: 15.5rem;
	    height: 9rem;
	    line-height: 9rem;
	    text-align: center;
	}
	.avatar {
	    width: 15.5rem;
	    height: 9rem;
	    display: block;
	}
	.el-icon-plus:before{
		content:url(../../img/xiaojing.png);
		position: absolute;
	    top: 0rem;
	    right: 6rem;
	}
	.avatar-uploader1 .el-upload {
	    border: 0.1rem dashed #d9d9d9;
	    border-radius: 0.6rem;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    margin-left: 8rem;
	}
	.avatar-uploader1 .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon1 {
	    color: #8c939d;
	    width: 15.5rem;
	    height: 9rem;
	    line-height: 9rem;
	    text-align: center;
	}
	.avatar1 {
	    width: 15.5rem;
	    height: 9rem;
	    display: block;
	}
	.el-icon-plus1:before{
		content:url(../../img/xiaojing.png);
		position: absolute;
	    top: 0rem;
	    right: 6rem;
	}
	.avatar-uploader2 .el-upload {
	    border: 0.1rem dashed #d9d9d9;
	    border-radius: 0.6rem;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    margin-left: 8rem;
	}
	.avatar-uploader2 .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon2 {
	    color: #8c939d;
	    width: 15.5rem;
	    height: 9rem;
	    line-height: 9rem;
	    text-align: center;
	}
	.avatar2 {
	    width: 15.5rem;
	    height: 9rem;
	    display: block;
	}
	.el-icon-plus2:before{
		content:url(../../img/xiaojing.png);
		position: absolute;
	    top: 0rem;
	    right: 6rem;
	}
	.upload_template{
		width: 100%;
		background: white;	
	}
	.upload_template i{
		display: block;
	    float: left;
	    width: 8.75rem;
	    height: 5.33rem;
	}
	.upload_template i>img{
		width: 100%;
		height: 100%;
	}
	.upload_template>p{
		width: 80%;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 1.5rem;
		margin-left: 3%;
	}
	.upload_template>ul{
		width: 100%;
	    height: 7.7rem;
	    margin-top: 2%;
	}
	.upload_template>ul>li{
		width: 28%;
	    height: 8rem;
	    float: left;
	    margin-left: 4%;
	    text-align: center;
	}
	.upload_template>ul>li>div{
		width: 1rem;
	    height: 1rem;
	    float: left;
	    margin-left: 18%;
	    margin-top: 0.7rem;
	}
	.upload_template>ul>li>div>img{
		width: 100%;
		height: 100%;
	}
	.upload_template>ul>li>p{
		float: left;
		margin-top: 0.4rem;
    	margin-left: 0.3em;
	}
	.ljrz{
		width: 100%;
	    height: 8.9rem;
	    background: #F0F0F0;
	}
	.ljrz>p{
		width: 80%;
	    height: 3.5rem;
	    border-radius: 2.3rem;
	    font-size: 1.7rem;
	    background: #FAE64F;
	    position: relative;
	    top: 25%;
	    margin: auto;
	    text-align: center;
	    line-height: 3.5rem;
	}
	hr{
		height: 0.5rem;
		background: #F0F0F0;
	}
	.for{
		width: 100%;
	}
	.for>p{
		height: 3.5rem;
	    border-bottom: 0.1rem solid #F0F0F0;
	    background: white;
	    padding: 0% 3%;
	    line-height: 3.5rem;
	    font-size: 1.4rem;
	}
	.for>p>input{
		height: 3rem;
    	margin-left: 1.5rem;
	}
	.bjtext{
		background: white;
		margin-top: 0.5rem;
	}
</style>