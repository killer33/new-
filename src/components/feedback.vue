<template>
	<!--意见反馈-->
	<div class="feedback">
		<div class="hea">
			<router-link to="/personal" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>意见反馈</p>
		</div>
		<form action="" method="" enctype="multipart/form-data"  method="post">
			<div class="text">
				<div class="text_axi">
					<div class="textcontrol">
						<textarea id="area" placeholder="请输入你想要反馈的的内容或遇到的问题"></textarea>  
						<p><span id="text-count">0</span><span>/200</span></p>  
					</div>
				</div>
				<!--action必选参数，上传的地址-->
				<!--list-type	文件列表的类型	string	text/picture/picture-card	text-->
				<!--on-preview	点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据	function(file)-->
				<!--on-remove	文件列表移除文件时的钩子	function(file, fileList)-->
				<div class="upload">
					<el-upload
						action="http://nvchuanghui.com/public/index.php/index/user/upload"  
						list-type="picture-card"
						:limit="5"
						:data="upLoadData"
						name = "file"
						accept=".jpg,.png,.jpeg,tif"
						:on-preview="handlePictureCardPreview"
						:on-success="success"
						:on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible" size="tiny" >
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</div>
			</div>
			<div class="pnum">
				<p>手机号</p>
				<input type="number" name="" id="p" value="" placeholder="请输入您的电话，我们方便与您取得联系"/>
			</div>
			<div class="lastdiv">
				<p class="tjfk" @click="subfeed">提交反馈</p>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
	    data() {
		    return {
		       	dialogImageUrl: '',
		       	dialogVisible: false,
		      	upLoadData: {
			        token: ''
			    },
			    pic:[],
		    };
	    },
	    mounted(){
	    	this.$nextTick(()=>{
	    		var that = this;
	    		var token = window.localStorage.getItem("token");
	    		that.upLoadData.token=token;
	    	})
	    },
	    methods: {
//	    	file-list	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array	—	[]
	      	handleRemove(file, fileList) {
	        	console.log(file, fileList);
	     	},
	      	handlePictureCardPreview(file) {
	        	this.dialogImageUrl = file.url;
	        	this.dialogVisible = true;
	      	},
	      	success(response, file, fileList) {
	      		var that = this;
	      		var info = response.info;
	      		that.pic.push(info);
	      		console.log(that.pic);
	      	},
	      	subfeed:function(){
	      		var that = this;
	      		var token = window.localStorage.getItem("token");
	      		var idea = $("#area").val();
	      		var phone = $("#p").val();
	      		var pic = that.pic;
	      		var pattern=/^1[34578]\d{9}$/;//手机号正则
				var rts=pattern.test(phone);//rts返回布尔
				if (rts==false) {
					alert("手机号码格式错误");
					return;
				}else{
					$.ajax({
		      			type:"post",
		      			url:join+"user/idea/",
		      			data:{token:token,idea:idea,phone:phone,pic:pic},
		      			dataType:"json",
		      			success:function(data){
		      				if (data.ret==1) {
		      					that.$alert('提交成功！请点击确定进行跳转', '提示', {
							        confirmButtonText: '确定',
							        center:true,
							        showClose:false,
							        callback: action => {
							            window.location.href="#/personal"
						            }
						        });
//		      					that.$message.success('提交成功！');  
		      					
		      				}
		      			},
		      			error:function(err){
		      				console.log("请求失败");
		      			}
		      		});
				}
	      		
	      	}
	    }
	}
	$(function(){
		 /*字数限制*/  
	    $("#area").on("input propertychange", function() {  
	        var $this = $(this),  
	            _val = $this.val(),  
	            count = "";  
	        if (_val.length > 200) {  
	            $this.val(_val.substring(0, 200));  
	        }  
	        count = $this.val().length;  
	        $("#text-count").text(count);  
	    }); 
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
	.feedback{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		background: white;
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
	.text{
		width: 100%;
		background: #F0F0F0;
    	margin-top: 1rem;
    	margin-bottom: 1rem;
	}
	.text_axi{
		width: 94%;
		margin: auto;
		background: white;
		position: relative;
		top: 3%;
		border-radius: 0.5rem 0.5rem 0 0;
	}
	.textcontrol{
		width: 100%;
		height: 14rem;
	}
	#area{
		width: 94%;
	    height: 11rem;
	    margin-left: 3%;
	    margin-top: 2%;	
	    font-size: 1.4rem;	
	}
	.textcontrol>p{
		float: right;
	    margin-right: 3%;
	    font-size: 1.4rem;
	    margin-top: 1%;
	}
	.textcontrol>p>span:nth-child(2){
		color: #929292;
	}
	
    .pnum{
    	width: 100%;
    	height: 3.75rem;
    	line-height: 3.75rem;
    	background: white;
    }
    .pnum>p{
    	width: 17%;
	    height: 3.75rem;
	    line-height: 3.75rem;
	    font-size: 1.5rem;
	    font-weight: bold;
	    float: left;
	    margin-left: 3%;
    }
    .pnum>input{
    	width: 70%;
	    height: 3.75rem;
	    line-height: 3.75rem;
	    font-size: 1.3rem;
	    display: block;
	    float: left;
    }
    .lastdiv{
    	width: 100%;
    	background: #F0F0F0;
    }
    .tjfk{
    	width: 80%;
    	height: 3.5rem;
    	text-align: center;
    	line-height: 3.5rem;
    	background: #FAE64F;
    	font-size: 1.5rem;
    	margin: auto;
    	border-radius: 3rem;
    	margin-top: 8%;
    }
    /*上传图片*/
    .upload{
    	width: 94%;
    	margin: auto;
		background: white;
		border-radius: 0 0 0.5rem 0.5rem;
	}
	.el-upload-list--picture-card .el-upload-list__item{
		overflow: hidden;
	    background-color: #fff;
	    border: 0.1rem solid #c0ccda;
	    border-radius: 0.6rem;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 8rem;
	    height: 8rem;
	    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
	    display: inline-block;
	    margin-left: 1rem;
	}
	.el-upload--picture-card{
		background-color: #fbfdff;
	    border: 0.1rem dashed #c0ccda;
	    border-radius: 0.6rem;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 8rem;
	    height: 8rem;
	    line-height: 8.5rem;
	    vertical-align: top;
	    margin-top: 0.5rem;
	    margin-bottom: 0.8rem;
	    margin-left: 1rem;
	}
	
	
	.el-message-box--center {
	    padding-bottom: 30px;
	}
	.el-message-box{
		display: inline-block;
	    width: 290px;
	    padding-bottom: 10px;
	    vertical-align: middle;
	    background-color: #FFF;
	    border-radius: 4px;
	    border: 1px solid #EBEEF5;
	    font-size: 18px;
	    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	    text-align: left;
	    overflow: hidden;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	}
	.el-message-box--center .el-message-box__header {
	    padding-top: 30px;
	}
	.el-message-box__header {
	    position: relative;
	    padding: 15px 15px 10px;
	}
	.el-message-box--center .el-message-box__content {
	    padding-left: 27px;
	    padding-right: 27px;
	}
	
	.el-message-box--center .el-message-box__btns, .el-message-box--center .el-message-box__content {
	    text-align: center;
	}
	.el-message-box__content {
	    position: relative;
	    padding: 10px 15px;
	    color: #606266;
	    font-size: 14px;
	}
	

.el-message-box__btns {
    padding: 5px 15px 0;
    text-align: right;
}

.el-message-box__wrapper::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
}
</style>