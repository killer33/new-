<template>
	<!--个人资料-继续认证-->
	<div class="Continue_certification">
		<div class="hea">
			<router-link to="" tag="p"><i class="iconfont">&#xe646;</i></router-link>
			<p>个人资料</p>
		</div>
		<div class="describe">
			<div class="describe_text">
				<div class="text2control">
					<textarea id="area1" placeholder="请描述您的性格、爱好、才艺等。"></textarea>  
					<p><span id="text-count">0</span><span>/300</span></p>  
				</div>
			</div>
			<div class="uploadx">
				<li class="upu">
					<img id="pic1" src="../../build/upup.png" />
					<img id="pic2" src="" />
					<input type="file" name="file" id="file" value="" accept="image/*" multiple  @change="uppic1"/>
				</li>
				<li class="upu">
					<img id="pic3" src="../../build/upup.png" />
					<img id="pic4" src="" />
					<input type="file" name="file" id="file" value="" accept="image/*" multiple  @change="uppic2"/>
				</li>
				<li class="upu">
					<img id="pic5" src="../../build/upup.png" />
					<img id="pic6" src="" />
					<input type="file" name="file" id="file" value="" accept="image/*" multiple  @change="uppic3"/>
				</li>
				<li class="upu">
					<img id="pic7" src="../../build/upup.png" />
					<img id="pic8" src="" />
					<input type="file" name="file" id="file" value="" accept="image/*" multiple  @change="uppic4"/>
				</li>
			</div>
			<div class="sure">
				<router-link to="/personal_data_Modify" tag="p">确定</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			uppic1:function(e){
                var that=this;
                var file = e.target.files[0];
                var imgSize=file.size/1024;
                if(imgSize>800){
                    alert('请上传大小不要超过800KB的图片')
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = function () {
                        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                        var dataURL = reader.result;
                        
                        $("#pic2").attr("src", dataURL);
						$("#pic1").next().hide();
						
						$(function(){
							$("#pic2").show();
							$("#pic1").hide();
						})
                    };
                }
            },
			uppic2:function(e){
                var that=this;
                var file = e.target.files[0];
                var imgSize=file.size/1024;
                if(imgSize>800){
                    alert('请上传大小不要超过800KB的图片')
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = function () {
                        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                        var dataURL = reader.result;
                        
                        $("#pic4").attr("src", dataURL);
						$("#pic3").next().hide();
						
						$(function(){
							$("#pic4").show();
							$("#pic3").hide();
						})
                    };
                }
            },
			uppic3:function(e){
                var that=this;
                var file = e.target.files[0];
                var imgSize=file.size/1024;
                if(imgSize>800){
                    alert('请上传大小不要超过800KB的图片')
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = function () {
                        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                        var dataURL = reader.result;
                        
                        $("#pic6").attr("src", dataURL);
						$("#pic5").next().hide();
						
						$(function(){
							$("#pic6").show();
							$("#pic5").hide();
						})
                    };
                }
            },
			uppic4:function(e){
                var that=this;
                var file = e.target.files[0];
                var imgSize=file.size/1024;
                if(imgSize>800){
                    alert('请上传大小不要超过800KB的图片')
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = function () {
                        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                        var dataURL = reader.result;
                        
                        $("#pic8").attr("src", dataURL);
						$("#pic7").next().hide();
						
						$(function(){
							$("#pic8").show();
							$("#pic7").hide();
						})
                    };
                }
            },

		}
	}
	$(function(){
		 /*字数限制*/  
	    $("#area1").on("input propertychange", function() {  
	        var $this = $(this),  
	            _val = $this.val(),  
	            count = "";  
	        if (_val.length > 300) {  
	            $this.val(_val.substring(0, 300));  
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
	.Continue_certification{
		width: 100%;
	}
	.hea{
		width: 100%;
		height: 3.5rem;
		border-bottom: 1px solid #F0F0F0;
	}
	.hea>p{
	    height: 3.5rem;
	    line-height: 3.5rem;
	    text-align: center;
	    float: left;
	}
	.hea>p:first-child{
		width: 10%;
	}
	.hea>p:nth-child(2){
		width: 25%;
	    margin-left: 26%;
	    font-size: 15px;
	}
	.describe{
		width: 100%;
		height: 13rem;
	}
	.describe_text{
		width: 98%;
	    height: 12rem;
	    margin: auto;
	    position: relative;
	    top: 3%;
	}
	.text2control{
		width: 100%;
		 height: 12rem;
	}
	#area1{
		width: 78%;
	    height: 12rem;
	    margin-left: 3%;
	    margin-top: 2%;
	    font-size: 14px;
	}
	.text2control>p{
		float: right;
	    margin-right: 3%;
	    font-size: 14px;
	    margin-top: 5%;
	}
	.text2control>p>span:nth-child(2){
		color: #929292;
	}
	.uploadx{
		width: 100%;
		height: 7rem;
		margin-top: 4%;
	}
	.upu {
		width: 6rem;
	    height: 6rem;
	    border: 1px dashed #999999;
	    position: relative;
	    border-radius: 5px;
	    float: left;
	    margin-left: 4%;
	}
	.upu>img {
		position: relative;
	    width: 100%;
	    height: 100%
	}
	#file {
		position: absolute;
	    top: 0%;
	    left: 0%;
	    width: 6rem;
	    height: 6rem;
	    opacity: 0; 
	}
	#pic1{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#pic2{
		display: none;
	}
	#pic3{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#pic4{
		display: none;
	}
	#pic5{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#pic6{
		display: none;
	}
	#pic7{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#pic8{
		display: none;
	}
	.sure{
		width: 100%;
		height: 31.8rem;
		background: #F0F0F0;
	}
	.sure>p{
		width: 80%;
		height: 3.5rem;
		text-align: center;
		line-height: 3.5rem;
		font-size: 16px;
		border-radius: 30px;
		background: #FAE64F;
		margin: auto;
		position: relative;
		top: 25%;
	}
</style>