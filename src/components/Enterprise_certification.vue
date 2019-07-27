<template>
	<!--个人中心-企业认证-->
	<div class="Enterprise_certification">
		<div class="heade">
			<router-link to="/real_name_type" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>企业实名认证</p>
		</div>
		<p>上传营业执照</p>
		<div class="uppic">
			<div class="uploads">
				<p>上传法人身份证正面</p>
				<el-upload
					class="avatar-uploader"
				    :action="joinUrl+'/user/upload'"
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
			<div class="uploads">
				<p>上传法人身份证反面</p>
				<el-upload
					class="avatar-uploader1"
				    :action="joinUrl+'/user/upload'"
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
			<div class="uploads">
				<p>上传法人手持身份证</p>
				<el-upload
					class="avatar-uploader2"
				    :action="joinUrl+'/user/upload'"
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
			<div class="uploads">
				<p>上传企业营业执照</p>
				<el-upload
					class="avatar-uploader3"
				    :action="joinUrl+'/user/upload'"
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess3"
				    :before-upload="beforeAvatarUpload3">
				    <img v-if="imageUrl3" :src="imageUrl3" class="avatar3">
				    <i v-else class="el-icon-plus3 avatar-uploader-icon3"></i>
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
		<div class="uppic">
			<div class="uploads">
				<p>请上传您的企业logo</p>
				<el-upload
					class="avatar-uploader4"
				    :action="joinUrl+'/user/upload'"
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess4"
				    :before-upload="beforeAvatarUpload4">
				    <img v-if="imageUrl4" :src="imageUrl4" class="avatar4">
				    <i v-else class="el-icon-plus4 avatar-uploader-icon4"></i>
				</el-upload>
			</div>
		</div>
		<div class="fil">
			<form action="" method="">
				<p><span>法人姓名</span><input type="text" name="" id="" value="" placeholder="请输入" class="relname" v-model="realname"/></p>
				<p><span>法人电话</span><input type="number" name="" id="" value="" placeholder="请输入" class="phone" v-model="phone"/></p>
				<p><span>身份证号</span><input type="text" name="" id="" value="" placeholder="请输入" class="idcard" v-model="ids"/></p>
				<p>
					<span>请选择企业类型</span>
					<select class="select" @change="kaka" v-model="company_type_id">
						<option v-for="(item,index) in info" :value="item.id" :key="index">{{item.company_type}}</option>
					</select>
				</p>
				<p><span>企业名称</span><input type="text" name="" id="" value="" placeholder="请输入" class="company_name" v-model="company_name"/></p>
				<p><span>企业邮箱</span><input type="email" name="" id="" value="" placeholder="请输入" class="email" v-model="email"/></p>
				<p><span>企业固话</span><input type="number" name="" id="" value="" placeholder="请输入" class="telephone" v-model="telephone"/></p>
				<p><span>企业地址</span><input type="text" name="" id="" value="" placeholder="请输入" class="company_address" v-model="company_address"/></p>
				<p><span>企业唯一注册号</span><input type="number" name="" id="" value="" placeholder="请输入" class="company_idcard" v-model="company_idcard"/></p>
				<p><span>缴纳保证金</span><input type="number" name="" id="" value="" placeholder="请输入" class="bzj" v-model="money"/></p>
				<span style="color: red;">*必须缴纳，否则无法认证成功，缴纳金额最低为3000元，也可自定义金额</span>
				<p><span>企业描述</span></p>
				<div class="bjtext">
					<el-upload
						style="display: none;"
						id="el-upload"
						class="avatar-uploader"
					    :action= 'joinUrl+"user/upload"'
					    :data="upLoadData"
						name = "file"
						accept=".jpg,.png,.jpeg,tif"
					    :show-file-list="false"
					    :on-success="handleAvatarSuccess5"
					    :before-upload="beforeAvatarUpload5">
					</el-upload>
					<quill-editor 
				        v-model="content" 
				        ref="myQuillEditor" 
				        :options="editorOption" 
				        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
				        @change="onEditorChange($event)">
				    </quill-editor>
				</div>
				<!--<p><span>企业描述</span></p>
			   	<div class="areacontent">
					<textarea v-model="content" id="textarea"  placeholder="请描述您的企业"></textarea>
			    </div>-->
				<div class="un">
					<input @click="renzheng" type="submit" id="Regist" name="" v-model="subType"/>
				</div>
			</form>
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
	            imageUrl3: '',
	            imageUrl4: '',
	            upLoadData: {
			        token: ''
			    },
			    pic1:[],//存放上传返回的图片
			    pic2:[],
			    pic3:[],
			    pic4:[],
			    pic5:[],
			    content:null,
                editorOption:{
                	modules:{
                		toolbar:[
                			['bold','italic','underline','strike','image','video','clean',{ 'align': [] },{ 'color': [] }, { 'background': [] },{ 'direction': 'rtl' }],
                			[{ 'size': ['small', false, 'large', 'huge'] },{ 'font': [] },{ 'indent': '-1'}, { 'indent': '+1' }],
                		]
                	}
                },
                info:[],
                company_type_id:10,
                realname:'',
                phone:'',
                ids:'',
                company_name:'',
                email:'',
                telephone:'',
                company_address:'',
                company_idcard:'',
                money:'',
                
	        }
	    },
	    mounted(){
	    	this.joinUrl=join;
	    	this.$nextTick(()=>{
	    		var that = this;
	    		var token = window.localStorage.getItem("token");
	    		that.upLoadData.token=token;
	    		$.ajax({
	    			type:"post",
	    			url:join+"company/gettype",
	    			dataType:"json",
	    			data:{token:token},
	    			success:function(data){
						that.info=data.info;
//						console.log(that.info);
	    			},
	    			error:function(err){
	    				console.log("select请求失败!");
	    			}
	    		});
	    		//获取提交过的认证信息
	    		$.ajax({
					type:"post",
					url:join+"user/show_company_type",
					dataType:"json",
					data:{token:token},
					success:function(data){
		  				console.log(data.data);
		  				if(data.type==5){
		  					that.$message.warning('请修改');
							that.imageUrl=imgJoin+data.data.front_pic;
		  					that.imageUrl1=imgJoin+data.data.behind_pic;
		  					that.imageUrl2=imgJoin+data.data.hand_pic;
							that.imageUrl3=imgJoin+data.data.company_pic;
							that.imageUrl4=imgJoin+data.data.logo_src;
							that.realname=data.data.realname;
			                that.phone=data.data.phone;
			                that.ids=data.data.idcard;
			                that.company_name=data.data.company_name;
			                that.email=data.data.email;
			                that.telephone=data.data.telephone;
			                that.company_address=data.data.company_address;
			                that.company_idcard=data.data.company_idcard;
			                that.content=data.data.details;
			                that.money=data.data.money;
			                //企业类型判断
			                that.company_type_id=data.data.company_type_id;
			                //修改按钮内容
			                that.subType="重新认证"
			                
			                
		  					that.pic1.splice(0);
	           				that.pic1.push(data.data.front_pic);
	           				that.pic2.splice(0);
	           				that.pic2.push(data.data.behind_pic);
	           				that.pic3.splice(0);
	           				that.pic3.push(data.data.hand_pic);
	           				that.pic4.splice(0);
	           				that.pic4.push(data.data.company_pic);
	           				that.pic5.splice(0);
	           				that.pic5.push(data.data.logo_src);
		  				}
		  			},
		  			error:function(err){
						console.log("请求失败");
					}
				});
	    	})
	    	
//	    	替换富文本编辑器上传图片事件
	    	var that=this;
	    	var imgHandler=async function(img){
	    		if(img){
	    			var uploadImg=$("#el-upload input");
	    			uploadImg.click();
	    		}
	    	}
	    	that.$refs.myQuillEditor.quill.getModule('toolbar').addHandler("image",imgHandler)
	    },
	    methods: {
	    	kaka:function(val){
	    		var that = this;
	    		var index = val.target.value;
	    		that.company_type_id = index;
	    		console.log(index);
	    	},
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
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	//上传身份证反面
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
	      	//上传手持身份证
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
	      	//上传营业执照
	      	//文件上传成功时的钩子
	        handleAvatarSuccess3(res, file) {
	            this.imageUrl3 = URL.createObjectURL(file.raw);
	           	var that = this;
	           	var info = res.info;
	           	that.pic4.splice(0);
	           	that.pic4.push(info);
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload3(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	//上传logo
	      	//文件上传成功时的钩子
	        handleAvatarSuccess4(res, file) {
	            this.imageUrl4 = URL.createObjectURL(file.raw);
	           	var that = this;
	           	var info = res.info;
	           	that.pic5.splice(0);
	           	that.pic5.push(info);
	        },
	        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	        beforeAvatarUpload4(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	
	      	//富文本编辑器发布图片的上传
	      	//文件上传成功时的钩子
	        handleAvatarSuccess5(res, file) {
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
	        beforeAvatarUpload5(file) {
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
	      		var behind_pic = that.pic2[0];
	      		//手持照
	      		var hand_pic = that.pic3[0];
	      		//营业执照
	      		var company_pic = that.pic4[0];
	      		//logo
	      		var logo_src = that.pic5[0];
	      		
	      		if (that.pic1.length==0||that.pic3.length==0||that.pic2.length==0) {
	      			this.$message.error('认证材料不足!');
	      			return;
	      		}
	      		var realname = $(".relname").val();//姓名
	      		var phone = $(".phone").val();//手机号
	      		var idcard = $(".idcard").val();//身份证号
	      		var company_name = $(".company_name").val();//企业名称
	      		var email = $(".email").val();//企业邮箱
	      		var telephone = $(".telephone").val();//企业固话
	      		var company_address = $(".company_address").val();//企业地址
	      		var company_idcard = $(".company_idcard").val();//企业唯一注册号
	      		var company_type_id = that.company_type_id;//企业种类id
	      		var bzj = $(".bzj").val();//保证金
	      		var details=this.content;
	      		//姓名验证
	      		var regName =/^[\u4e00-\u9fa5]{2,4}$/;  
			    if(regName.test(realname)==false){  
			        this.$message.error('法人姓名填写有误！');  
					return;
			    } 
			    //手机号验证
			    var regIdNo = /^1[34578]\d{9}$/;  
				if(regIdNo.test(phone)==false){  
				    this.$message.error('手机号格式错误！');  
				    return;  
				} 
				//身份证验证
			    var regIdNos = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
				if(regIdNos.test(idcard)==false){  
				    this.$message.error('身份证号填写有误！');  
				    return;  
				} 
				//邮箱验证
				var emailze = /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/;
				if (emailze.test(email)==false) {
					this.$message.error('邮箱格式错误！');  
				    return;
				}
				//固话验证
//				var reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
//				if (reg.test(telephone)==false) {
//					this.$message.error('固话格式错误！');  
//				    return;
//				}
				//保证金
				if(bzj<3000){
	      			this.$message.error('保证金不得低于3000元！');  
	      			return;
	      		}
				//企业详情不为空
				if(!details){
					this.$message.error('企业详情不能为空');  
	      			return;
				}
				console.log(bzj);
				$.ajax({
	      			type:"post",
	      			url:join+"user/company",
	      			dataType:"json",
	      			data:{
	      				token:token,
	      				front_pic:front_pic,
	      				behind_pic:behind_pic,
	      				hand_pic:hand_pic,
	      				company_pic:company_pic,
	      				realname:realname,
	      				idcard:idcard,
	      				phone:phone,
	      				company_name:company_name,
	      				email:email,
	      				telephone:telephone,
	      				company_address:company_address,
	      				company_type_id:company_type_id,
	      				company_idcard:company_idcard,
	      				logo_src:logo_src,
	      				details:details,
	      				money:bzj
	      			},
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
	      		
	      	}
	    }
	}
</script>

<style>
	.Enterprise_certification{
		width: 100%;
	}
	.Enterprise_certification>p{
		height: 2rem;
	    line-height: 2rem;
	    font-size: 1.3rem;
	    padding: 0% 3%;
	}
	.heade{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
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
	.fil{
    	width: 100%;
    	background: white;
    	margin-top: 0.5rem;
    }
    .fil>form>p{
		width: 94%;
		height: 3.5rem;
		margin: auto;
		line-height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
		font-size: 15px;
		position: relative;
	}
	.fil>form>p>span:first-child{
		font-weight: bold;
	}
	.fil>form>p>input{
		width: 40%;
		height: 3.4rem;
		line-height: 3.4rem;
		font-size: 14px;
		position: absolute;
		left: 37%;
	}
	.un{
		width: 100%;
		height: 12rem;
		background: #F0F0F0;
	}
	#Regist{
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
	.uppic{
		background: white;
	}
	.uploads{
		padding: 5% 0%;
		position: relative;
	}
	.uploads>p:first-child{
		position: absolute;
	    top: 8rem;
    	left: 11.5rem;
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
	.avatar-uploader3 .el-upload {
	    border: 0.1rem dashed #d9d9d9;
	    border-radius: 0.6rem;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    margin-left: 8rem;
	}
	.avatar-uploader3 .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon3 {
	    color: #8c939d;
	    width: 15.5rem;
	    height: 9rem;
	    line-height: 9rem;
	    text-align: center;
	}
	.avatar3 {
	    width: 15.5rem;
	    height: 9rem;
	    display: block;
	}
	.el-icon-plus3:before{
		content:url(../../img/xiaojing.png);
		position: absolute;
	    top: 0rem;
	    right: 6rem;
	}
	.avatar-uploader4 .el-upload {
	    border: 0.1rem dashed #d9d9d9;
	    border-radius: 15rem;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	    margin-left: 8rem;
	}
	.avatar-uploader4 .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon4 {
	    color: #8c939d;
	    width: 15.5rem;
	    height: 9rem;
	    line-height: 9rem;
	    text-align: center;
	}
	.avatar4 {
	    width: 15.5rem;
	    height: 9rem;
	    display: block;
	}
	.el-icon-plus4:before{
		content:url(../../img/xiaojing.png);
		position: absolute;
	    top: 0rem;
	    right: 6rem;
	}
	.bjtext{
		background: white;
		margin-top: 0.5rem;
	}
	.select{
		height: 3rem;
		margin-left: 1.7rem;
		font-size: 1.5rem;
	}
	/*多行文本*/
	.areacontent{
	  	width:100%;
	  	position: relative;
	  	margin-top: 2%;
	}
	textarea{
	    height: 9rem;
	    width: 100%;
	    border: none;
	    font-size: 1.4rem;
	}
</style>