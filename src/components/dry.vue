<template>
	<div class="dry">
		<el-upload
			style="display: none;"
					id="el-upload"
					class="avatar-uploader"
				    action="http://nvchuanghui.com/public/index.php/index/user/upload"
				    :data="upLoadData"
					name = "file"
					accept=".jpg,.png,.jpeg,tif"
				    :show-file-list="false"
				    :on-success="handleAvatarSuccess"
				    :before-upload="beforeAvatarUpload">
		</el-upload>
		<quill-editor 
	        v-model="content" 
	        ref="myQuillEditor" 
	        :options="editorOption" 
	        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
	        @change="onEditorChange($event)">
	    </quill-editor>
	    <button v-on:click="saveHtml">保存</button>
	    <hr>
		<button @click="ceshi()">测试接口</button>
		<el-radio v-model="radio" label="1">备选项</el-radio>
  		<el-radio v-model="radio" label="2">备选项</el-radio>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
	    data() {
		    return {
		        imageUrl: '',
		        upLoadData: {
			        token: ''
			    },
			    radio:'1',
			    pic1:[],
			    content:"",
                editorOption:{
                	modules:{
                		toolbar:[
                			['bold','italic','underline','strike','image','video','clean',{ 'align': [] },{ 'color': [] }, { 'background': [] },{ 'direction': 'rtl' }],
                			[{ 'size': ['small', false, 'large', 'huge'] },{ 'font': [] },{ 'indent': '-1'}, { 'indent': '+1' }],
                		]
                	}
                },
			}
	    },
	    mounted(){
	    	var mySwiper = new Swiper('.swiper-container', {});
	    	var that=this;
	    	var imgHandler=async function(img){
	    		if(img){
	    			var uploadImg=$("#el-upload input");
	    			uploadImg.click();
	    		}
	    	}
	    	that.$refs.myQuillEditor.quill.getModule('toolbar').addHandler("image",imgHandler)
	    	
	    	this.$nextTick(()=>{
	    		var that = this;
	    		var token = window.localStorage.getItem("token");
	    		that.upLoadData.token=token;
	    	})
	    },
	    methods: {
	    	//文件上传成功时的钩子
	        handleAvatarSuccess(res, file) {
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
	        beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
	      	},
	      	
	      	onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
            saveHtml:function(event){
	          	console.log(this.content);
	        },
	        ceshi(){
	        	$.ajax({
					type:"post",
					url:join+"index/test1",
					dataType:"json",
					data:{},
					success:function(data){
						console.log(data);
					},
					error:function(err){
						console.log("请求失败");
					}
				})
	        	console.log(join+"index/index/test1");
	        }
	    }
  	}
</script>

<style>
	.dry{
		background: white;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	}
	.avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	}
	.swiper{
		width: 90%;
		height: 17rem;
		margin:0 auto;
	}
	.swiperImg{
		width: 100%;
		height: 100%;
	}
	.options{
		margin-left: 5%;
	}
	.options span{
		font-size: 1.2rem;
	}
	.options span:nth-child(2){
		font-size: 1.8rem;
	}
	.dds{
		font-size: 1.7rem !important;
		color: #FAE64E;
		border-bottom: 0.2rem solid #FAE64E;
	}
	
	.fl{
		width: 100%;
		height: 15rem;
		margin-top: 3%;
		position: relative;
		/*border: 1px solid red;*/
	}
	.fl>ul{
		width: 100%;
	}
	.fl>ul>li{
		float: left;
		width: 25%;
		height: 6rem;
		margin-bottom: 2%;
		/*border: 1px solid red;*/
	}
	.fl>ul>li>div{
		width: 3.3rem;
	    margin: auto;
	    height: 3.3rem;
	    border-radius: 50%;
	}
	.fl>ul>li>div>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/*border: 1px solid red;*/
	}
	.fl>ul>li>p{
		width: 100%;
	    height: 2rem;
	    line-height: 2rem;
	    text-align: center;
	    margin-top: 10%;
	    font-size: 1.5rem;
	}
	.fl>div{
		width: 10%;
		height: 1rem;
		position: absolute;
		bottom: 3%;
		left: 44%;
		display: flex;
		justify-content: center;
	}
	.fl>div>li{
		float: left;
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
		background: #FAFAFA;
		margin-left: 15%;	
	}
</style>