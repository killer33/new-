<template>
	<!--发布-->
  <div class="certification">
  	<div class="h">
  		<img src="../../build/27.jpg"/>
        <p class="huiqu" @click="back"><i class="iconfont">&#xe646;</i></router-link>
        <p class="white">发布活动</p>
    </div>
    <div class="margleft_box">
    	<div class="margleft">
		    <p class="theme">
		       <span class="headline">活动主题</span>
		       <input type="text" placeholder="请输入活动标题" class="textline" v-model="subdata.tit">
		       <span><span class="num2">0</span>/20</span>
		    </p>
		   <!-- 文字输入区 -->
		   	<div class="content">
				<textarea name="" id="textarea"  placeholder="请描述您的活动(在下方上传至少一张图片作为活动封面)" v-model="subdata.details"></textarea>
			    <p>
			       	<span class="num">0</span>
			       	<span class="first">/300</span>
			    </p>
		    </div>
			<div class="upload">
					<el-upload
						action="http://nvchuanghui.com/public/index.php/index/user/upload"  
						list-type="picture-card"
						:limit="3"
						:data="upLoadData"
						:file-list="imglist"
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
    </div>
	<div class="fb_box">
		<div class="fb">
			<ul>
				<li class="Time_" @click="showactiveStartTime">
					<p>活动开始时间</p><p v-if="subdata.start">{{parseInt(subdata.start) | datetime}}</p><p v-else>请选择</p><i class="iconfont">&#xe61f;</i>
				</li>
				<li class="Time_1" @click="showactiveEndTime">
					<p>活动结束时间</p><p v-if="subdata.end">{{parseInt(subdata.end) | datetime}}</p><p v-else>请选择</p><i class="iconfont">&#xe61f;</i>
				</li>
				<li @click="showBuyCollage">
					<p><span class="star">*</span>拼团详细内容</p><p v-html="pintuan"></p><i class="iconfont">&#xe61f;</i>
				</li>
				<li class="Address_" @click="showAddressUp">
					<p>活动地址</p><p v-if="subdata.address">{{subdata.address}}</p><p v-else>请选择</p><i class="iconfont">&#xe61f;</i>
				</li>
				<router-link to="" tag="li">
					<p>详细地址</p><input v-model="subdata.address_info" type="text" name="" id="" value="" placeholder="请填写活动具体地址"/>
				</router-link>
				<!--<router-link to="" tag="li">
					<p>活动人数</p><input v-model="subdata.number" type="text" name="" id="" value="" placeholder="请填写活动人数"/>
				</router-link>-->
				<li>
					<p>活动方式</p>
					<el-radio-group v-model="subdata.mode" text-color="#000000" fill="#FAE64E">
						<el-radio label="线上">线上</el-radio>
  						<el-radio label="线下" >线下</el-radio>
					</el-radio-group>
				</li>
				<li @click="showSelect">
					<p>活动类型</p><p v-if="!subdata.activity_typename">请选择</p><p v-else>{{subdata.activity_typename}}</p><i class="iconfont">&#xe61f;</i>
				</li>
				<!--<router-link to="" tag="li">
					<p>开启报名</p>
		          	<el-switch
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</router-link>
				<li @click="showEnterprise()">
					<p>报名信息</p><input type="text" name="" id="" value="" placeholder="请填写具体报名信息"/>
				</li>-->
				<li @click="showEnter()">
					<p>企业信息</p><input type="text" name="" id="" value="" placeholder="请填写具体企业信息"/>
				</li>
			</ul>
		</div>
	</div>
	<div class="fb_di">
		<p class="release" @click="Release">立即发布</p>
	</div>
	<!--活动开始时间-->
	<van-popup class="avtiveTime" v-model="showactiveStart" position="bottom">
		<div class="choosetime">
			<p>请选择活动开始时间<br /><span>请上下拨动进行选择</span></p>
			<van-datetime-picker
				v-model="currentDate"
				type="datetime"
			  	:min-date="minDate"
				:max-date="maxDate"
				:show-toolbar="false"
			/>
			<button class="bu-true" @click="con">确定</button>
			<button class="bu-false" @click="showactiveStartTime">取消</button>
		</div>
	</van-popup>
	<!--活动结束时间-->
	<van-popup class="avtiveTime" v-model="showactiveEnd" position="bottom">
		<div class="choosetime">
			<p>请选择活动结束时间<br /><span>请上下拨动进行选择</span></p>
			<van-datetime-picker
				v-model="currentDate"
				type="datetime"
			  	:min-date="minDate"
				:max-date="maxDate"
				:show-toolbar="false"
			/>
			<button class="bu-true" @click="end">确定</button>
			<button class="bu-false" @click="showactiveEndTime">取消</button>
		</div>
	</van-popup>
	<!--地址-->
	<van-popup class="chooseAddress" v-model="showAddress" position="bottom">
		<div class="Address_selection">
			<p>请选择活动地址<br /><span>请上下拨动进行选择</span></p>
			<van-area :area-list="areaList" :columns-num="2" value="110101" @confirm="ress_sel" @cancel="showAddressUp"/>
		</div>
	</van-popup>
	
	
	<!--实名认证弹出框-->
	<van-popup class="realPopUp" v-model='showReal' :close-on-click-overlay='false'>
		<div class="realUp">
			<table></table>
			<div class="log_pic"><img src="../../build/renzheng@2x.png"/></div>
			<p class="Show_coupon1_p1">您还未实名认证</p>
			<p class="Show_coupon1_p2">请前往个人中心进行实名认证</p>
			<router-link to="/real_name_type" tag="p" class="href">立即认证</router-link>
		</div>
		<div class="close1" @click="closeReal"><img src="../../build/close.png"/></div >
	</van-popup>
	<!--活动费用弹出-->
	<van-popup class='regUp' v-model="showEx" position="right" :close-on-click-overlay="true" :overlay="true">
	  <expense :showExpense="showExpense"></expense>
	</van-popup>
	<!--报名信息弹出-->
  	<van-popup class='regUp' v-model="show" position="right" :close-on-click-overlay="true" :overlay="true">
	  <registration :showEnterprise="showEnterprise"></registration>
	</van-popup>
	<!--企业信息弹出-->
	<van-popup class='regUp' v-model="showEn" position="right" :close-on-click-overlay="true" :overlay="true">
	  <enterpriseSignup :showEnter="showEnter" :subdata="subdata"></enterpriseSignup>
	</van-popup>
	<!--拼团信息弹出-->
	<van-popup class='regUp' v-model="showCol" position="right" :close-on-click-overlay="true" :overlay="true">
	  <buyCollage :showBuyCollage="showBuyCollage" :subdata="subdata"></buyCollage>
	</van-popup>
	
	<!--选择分类-->
	<van-popup class='regUp' v-model="showSel" position="right" :close-on-click-overlay="true" :overlay="true">
	  <selectionsort :showSelect="showSelect" :subdata="subdata"></selectionsort>
	</van-popup>
  	
        
  </div>
 </template>
<script>
	import { DatetimePicker,Area,Popup,Dialog } from 'vant';
	import areaList from '../../node_modules/vant/packages/area/demo/area.js'
	//引入报名信息子组件
	import registration_information from './registration_information'
	//企业信息组件
	import enterpriseSignup from './enterpriseSignup'
	//拼团信息子组件
	import buyCollage from './buyCollage'
	//分类子组件
	import selectionsort from './selectionsort'
	
	
	export default {
		components:{
	    	[DatetimePicker.name]:DatetimePicker,
	    	registration:registration_information,
	    	enterpriseSignup:enterpriseSignup,
	    	selectionsort:selectionsort,
	    	buyCollage:buyCollage
	  	},
		data() {
		    return {
		    	//描述图片相关
		    	dialogImageUrl: '',
		       	dialogVisible: false,
		    	upLoadData: {
			        token: '',
			    },
		      subdata:{
		      	tit:'',
		      	img:[],
		      	details:'',//描述活动
		      	start:'',//活动开始时间时间戳
			    end:'',//活动结束时间时间戳
			   	//抢购详细内容
			    num:'',//抢购人数
			   	price:'',//抢购费用
			    hd_start_time:'',//抢购开始
			    hd_end_time:'',//抢购结束
			    address:'',//活动地址
			    address_info:'',//活动详细地址
//			    number:'',//活动人数
			    mode:'', //活动方式 
			    activity_typename:'',//活动类型
			    activity_typeid:'',//活动类型id
			    company_zi_phone:'',//企业咨询电话
			    company_fu_phone:'',//企业服务电话
		      },
		      minHour: 10,
		      maxHour: 20,
		      minDate: new Date(),
		      maxDate: new Date(2050,7,7),
		      currentDate: new Date(),
		      areaList:areaList,
		      
		      showactiveStart:false,//活动开始时间选择弹窗
		      showactiveEnd:false,
		      showAddress:false,//地址选择弹窗
		      
		      pintuan:"请填写详细信息",//拼团内容
		      value:true,
		      show:false,
		      showEx:false,
		      showEn:false,
		      showBuy:false,
		      showCol:false,
		      showSel:false,
		      showReal:false,
		      imglist:[],
		    };
		},
		mounted(){
			var token = window.localStorage.getItem("token");
			this.upLoadData.token=token;
	    	if(!token){
	    		window.location.href="#/login";
	    	}
	  		this.$nextTick(()=>{
	  			var that=this;
	  			$.ajax({
	  				type:"post",
	  				url:join+"activity/activityShow",
	  				dataType:"json",
	  				data:{token:token,style:2},
	  				success:function(data){
	  					console.log(data);
	  					if(data.status==0){
	  						that.showReal=true;
	  					}else if(data.status==1){
	  						that.subdata.do=1;
	  						that.subdata.style=2;
	  					}else if(data.status==2){
	  						that.showReal=false;
	  						that.subdata=data.data;
	  						that.subdata.style=2;
	  						if(data.data.address!=''){
	  							that.dates2=data.data.address
	  						}
	  						//图片遍历
	  						if(data.data.img!=''){
//	  							console.log(data.data.img);
	  							for(var i=0;i<data.data.img.length;i++){
	  								that.imglist.push({url:data.data.img[i]});
	  							}
	  							console.log(that.imglist);
	  						}	
	  					}
	  				},
		  			error:function(err){
						console.log("请求失败");
					}
	  			});
	  		})
	  	},
		methods:{
			//活动开始结束时间弹窗
			showactiveStartTime(){
				if(this.showactiveStart==false){
					this.showactiveStart=true;
				}else{
					this.showactiveStart=false;
				}
			},
			showactiveEndTime(){
				if(this.showactiveEnd==false){
					this.showactiveEnd=true;
				}else{
					this.showactiveEnd=false;
				}
			},
			showAddressUp(){
				if(this.showAddress==false){
					this.showAddress=true;
				}else{
					this.showAddress=false;
				}
			},
			//返回/存草稿
			back(){
				var token = window.localStorage.getItem("token");
				var that=this;
				console.log(that.subdata);
				Dialog.confirm({
				  title: '保存草稿',
				  message: '是否需要保存草稿',
				  cancelButtonColor:'#b8b8b8',
				  confirmButtonColor:'#FAE64F'
				}).then(() => {		
				  	$.ajax({
						type:"post",
		  				url:join+"activity/activitySave",
		  				dataType:"json",
		  				data:{
		  					token:token,
		  					data:that.subdata
		  				},
		  				success:function(data){
		  					console.log(data);
		  					console.log(that.subdata);
		  					that.$router.push("/Release_1");
		  				},
		  				error:function(err){
		  					console.log(err);
		  				}
					})
				}).catch(() => {
				  that.$router.push("/Release_1");
				});

			},
			//发布活动
			Release(){
				console.log(this.subdata);
				var token = window.localStorage.getItem("token");
				var that=this;
				console.log(that.subdata);
//				if(!that.subdata.tit){
//					that.$message.warning('活动标题不能为空！')
//				}else if(!that.subdata.details){
//					that.$message.warning('活动内容不能为空！');
//				}else if(that.subdata.img.length<1){
//					that.$message.warning('至少需要一张活动图片！');
//				}else if(!that.subdata.start || !that.subdata.end){
//					that.$message.warning('活动开始结束时间不能为空！');
//				}else if(!that.subdata.price){
//					that.$message.warning('拼团价格不能为空！');
//				}else if(!that.subdata.num){
//					that.$message.warning('拼团人数不能为空！');
//				}else if(!that.subdata.hd_start_time || !that.subdata.hd_end_time){
//					that.$message.warning('拼团开始结束时间不能为空！');
//				}else if(!that.subdata.address){
//					that.$message.warning('活动地址不能为空！');
//				}else if(!that.subdata.activity_typename){
//					that.$message.warning('活动类型不能为空！');
//				}else if(!that.subdata.company_zi_phone){
//					that.$message.warning('咨询电话不能为空！');
//				}else if(!that.subdata.company_fu_phone){
//					that.$message.warning('服务电话不能为空！');
//				}else{
					$.ajax({
						type:"post",
		  				url:join+"activity/activityAdd",
		  				dataType:"json",
		  				data:{
		  					token:token,
		  					data:that.subdata,
		  				},
		  				success:function(data){
		  					console.log(data);
		  				},
		  				error:function(err){
		  					console.log(err);
		  				}
					})
//				}
			},
			flushCom:function(){
				this.$router.go(0); 
			},
//          活动开始时间确定按钮
            con:function(){
            	this.showStart=true;
            	var d=this.currentDate;//获取数列当前时间
	    		var start_time=new Date(d).getTime();//活动开始时间--时间戳
//	    		console.log(start_time);
	    		this.subdata.start=start_time;
	    		this.showactiveStartTime();
            },
//          活动结束时间确定按钮
            end:function(){
            	this.showEnd=true;
            	var d=this.currentDate;//获取数列当前时间
	    		var end_time1=new Date(d).getTime();//活动结束时间--时间戳
//	    		console.log(end_time1);
	    		this.subdata.end=end_time1;
	    		this.showactiveEndTime();
            },
            //地址选择
            //地址选择确定按钮
            ress_sel:function(e){
            	this.sureResult1=e[0];
            	this.sureResult2=e[1];
            	var province = this.sureResult1.name;
            	var city = this.sureResult2.name;
            	var province_city=province + city;
//          	this.dates2=province_city;
            	this.subdata.address=province_city;
            	this.showAddressUp();
            },
            //费用弹出层
            showExpense:function(){
            	if(this.showEx==false){
            		this.showEx=true;
            	}else{
            		this.showEx=false;
            	}
            },
            //活动信息弹出层
            showEnterprise:function(){
            	if(this.show==false){
            		this.show=true;
            	}else{
            		this.show=false;
            	}
            	
            },
            //企业信息弹出层
            showEnter:function(){
            	if(this.showEn==false){
            		this.showEn=true;
            	}else{
            		this.showEn=false;
            	}
            	
            },
            
            //拼团信息弹出
            showBuyCollage:function(){
            	if(this.showCol==false){
            		this.showCol=true;
            	}else{
            		this.showCol=false;
            	}
            },
            
            //分类
            showSelect:function(){
            	if(this.showSel==false){
            		this.showSel=true;
            	}else{
            		this.showSel=false;
            	}
            },
            //关闭实名认证弹窗
            closeReal:function(){
            	console.log(123);
            	if(this.showReal==true){
            		this.showReal=false;
            		this.$router.push({path:'/Release_1'});
            	}
            },
            //上传图片
           	handleRemove(file, fileList) {
	      		var imglist=[];
				var item;
				for(item of fileList){
					imglist.push(item.url)
				}
				this.subdata.img=imglist;
	     	},
	      	handlePictureCardPreview(file) {
	        	this.dialogImageUrl =imgJoin+file.response.info;
	        	this.dialogVisible = true;
	      	},
	      	success(response, file, fileList) {
	      		file.url=imgJoin+file.response.info;
	      		var that = this;
	      		var imglist=[];
				console.log(file);
				var item;
				for(item of fileList){
					imglist.push(item.url);
				}
				
				that.subdata.img=imglist;
				console.log(that.subdata.img);
	      	},
				
           
		}
	}
	
	$(function(){
		 /*字数限制*/  
	    $("#textarea").on("input propertychange", function() {  
	        var $this = $(this),  
	            _val = $this.val(),  
	            count = "";  
	        if (_val.length > 300) {  
	            $this.val(_val.substring(0, 300));  
	        }  
	        count = $this.val().length;  
	        $(".num").text(count);  
	    }); 
		 /*字数限制*/  
	    $(".textline").on("input propertychange", function() {  
	        var $this = $(this),  
	            _val = $this.val(),  
	            count = "";  
	        if (_val.length > 20) {  
	            $this.val(_val.substring(0, 20));  
	        }  
	        count = $this.val().length;  
	        $(".num2").text(count);  
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
	.certification{
		width: 100%;
		position: relative;
	}
    /*  头部 */
    .h{
    	width:100%;
		height:15rem;
		position: relative;
    }
	.white{
		color: white;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		position: absolute;
		top: 2%;
		font-size: 1.7rem;
		opacity: 0.7;
	}
	.h img{
        width:100%;
        height: 100%;
        position: relative;
        z-index: -99;
	}
	.huiqu{
	    position: absolute;
	    top: 6.5%;
	    left: 3%;
	    z-index: 15;
	}
    .h i{
    	position: absolute;
    	top: 5%;
    	left: 2%;
    	font-size: 1.7rem;
    	color: white;
    	opacity: 0.7;
    }
    .margleft_box{
    	width: 100%;
    	background: white;
    }
    .margleft{
      width: 94%;
      margin: auto;
    }
    .theme{
      height:3.5rem;
      line-height: 3.5rem;
      border-bottom: 0.1rem solid #F0F0F0;
    }
    .headline{
	 	padding-right:2rem;
	  	color:#656565;
	  	font-weight: bold;
	  	font-size: 1.5rem;
	}
	.num{
	  color:#B9B9B9;
	  font-size: 1.4rem;
	}
	.theme>input{
		width: 65%;
	    height: 3.2rem;
	}
	.content{
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
	.first{
	  color:#B9B9B9;
	}
	.certification .content p{
	    position: absolute;
	    right: 1%;
	    bottom: -14%;
	    font-size: 1.5rem;
	}
	
	.uploadx1{
		width: 100%;
		height: 7rem;
		margin-top: 1%;
	}
	.upup {
		width: 6rem;
	    height: 6rem;
	    border: 0.1rem dashed #999999;
	    position: relative;
	    border-radius: 0.5rem;
	    float: left;
	}
	.upup>img {
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
	#ypic{
		width: 30%;
	    height: 35%;
	    margin-left: 37%;
	    margin-top: 27%;
	}
	#xpic{
		display: none;
	}
	.fb_box{
		width: 100%;
		background: white;
	}
	.fb{
		width: 97%;
	}
	.fb>ul{
		width: 100%;
	}
	.fb>ul>li{
		width: 100%;
		height: 3.5rem;
		line-height: 3.5rem;
		border-bottom: 0.1rem solid #F0F0F0;
		margin-left: 3%;
		position: relative;
	}
	.fb>ul>li:first-child{
		border-top: 0.1rem solid #F0F0F0;
	}
	.fb>ul>li>p:first-child{
		float: left;
		font-size: 1.6rem;
	}
	.fb>ul>li>p:nth-child(2){
		float: right;
		text-align: right;
		margin-right: 13%;
		color: #9A9A9A;
	}
	.fb>ul>li i{
		position: absolute;
		right: 2%;
		color: #9A9A9A;
		font-size: 2rem;
	}
	.fb>ul>li>input{
		display: block;
	    float: left;
	    height: 3.5rem;
	    margin-left: 9%;
	}
	/*单选*/
	.fb>ul>li>.radiodiv{
		display: inline-block;
		 margin-left: 9%;
	}
	.certification .el-radio__label{
		font-size: 1.3rem;
	}
	.certification .el-radio__inner{
		width: 1.3rem;
		height: 1.3rem;
	}
	.certification .el-radio__inner::after{
		width: 0.4rem;
		height: 0.4rem;
	}
	.fb .star{
		color: #FAE64F;
	}
	/*线上线下选择*/
	.el-radio-group{
		margin-left: 9%;
	}
	.el-switch{
        display: inline-block;
	    position: relative;
	    vertical-align: top;
	    cursor: pointer;
	    float: right;
	    margin-top: 3%;
	    margin-right: 6%;
    }
	.Outer_ring{
		width: 1.1rem;
	    height: 1.1rem;
	    border-radius: 50%;
	    border: 0.1rem solid #FAE64E;
	    position: absolute;
	    top: 34%;
	    left: 25%;
	}
	.check{
		width: 0.7rem;
	    height: 0.7rem;
	    background: #FAE64E;
	    border-radius: 50%;
	    margin: auto;
	    margin-top: 17%;
	}
	.online{
		position: absolute;
		top: 4%;
		left: 32%;
		font-size: 1.3rem;
	}
	.Outer_ring1{
		width: 1.1rem;
	    height: 1.1rem;
	    border-radius: 50%;
	    border: 0.1em solid #D8D8D8;
	    position: absolute;
	    top: 34%;
	    left: 43%;
	}
	.offline{
		position: absolute;
		top: 4%;
		left: 51%;
		color: #D8D8D8;
		font-size: 1.3rem;
	}
	.fb_di{
		width: 100%;
		height: 6rem;
		background: #F0F0F0;
	}
	.certification .release{
		width: 80%;
		margin: auto;
		height: 3.5rem;
		background: #FAE64F;
		font-size: 1.6rem;
		text-align: center;
		line-height: 3.5rem;
		border-radius: 3rem;
		position: relative;
		top: 20%;
	}
	.Time_choose{
		display: none;
		text-align: center;
		background:#fff ;
	}
	.Time_choose1{
		display: none;
		text-align: center;
	}
	.Address_selection>p{
		width: 100%;
	    height: 6rem;
	    text-align: center;
	    font-size: 1.6rem;
	    font-weight: bold;
	    border-radius: 1.5rem 1.5rem 0 0;
	    line-height: 5rem;
	    position: relative;
	    background: white;
	}
	.Address_selection>p>span{
		display: block;
	    position: absolute;
	    top: 30%;
	    left: 36%;
	    font-size: 1.2rem;
	    font-weight: normal;
	}
	.fixed{
		position: fixed;
		z-index: 99;
		bottom: 0%;
		width: 100%;
		
	}
	.Time_choose .van-picker__toolbar{
		display: none;
	}
	.Time_choose1 .van-picker__toolbar{
		display: none;
	}
	.Time_choose>p{
		width: 100%;
	    height: 6rem;
	    text-align: center;
	    font-size: 1.6rem;
	    font-weight: bold;
	    border-radius: 1.5rem 1.5rem 0 0;
	    line-height: 5rem;
	    position: relative;
	    background: white;
	}
	.Time_choose>p>span{
		display: block;
	    position: absolute;
	    top: 30%;
	    left: 36%;
	    font-size: 1.2rem;
	    font-weight: normal;
	}
	.Time_choose1>p{
		width: 100%;
	    height: 6rem;
	    text-align: center;
	    font-size: 1.6rem;
	    font-weight: bold;
	    border-radius: 1.5rem 1.5rem 0 0;
	    line-height: 5rem;
	    position: relative;
	    background: white;
	}
	.Time_choose1>p>span{
		display: block;
	    position: absolute;
	    top: 30%;
	    left: 36%;
	    font-size: 1.2rem;
	    font-weight: normal;
	}
	.Time_choose button{
		width: 13rem;
		height: 3rem;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0.5rem;
	    margin-top: 9%;
	    font-size: 1.5rem;
	}
	.Time_choose button.bu-true{
		background: #FAE74F;
		color: #333333;
		margin-right: 1rem;
	}
	.Time_choose button.bu-false{
		background: #fff;
		border:1px solid #999;
		color: #999;
		margin-left: 1rem;
	}
	.maskd{
		width: 100%;
		height: 56rem;
		background: #868686;
		opacity: 0.5;
		position: fixed;
		top: 0;
		z-index: 10;
		display: none;
	}
	.cotrl{
		width: 100%;
		height: 7rem;
		background: white;
	}
	.cotrl>p{
		width: 10rem;
	    height: 2.5rem;
	    text-align: center;
	    line-height: 2.5rem;
	    float: left;
	    border-radius: 0.5rem;
	    margin-top: 9%;
	    margin-left: 12%;
	}
	.cotrl_sure{
		background: #FAE64E;
	}
	.cotrl_cancel{
		border: 0.1rem solid #F0F0F0;
	}
	
	/*报名信息弹出框*/
	.regUp{
		height: 100%;
		width: 100%;
		background: #F0F0F0;
	}
	/*实名认证*/
	.realPopUp{
		width: 22rem;
		height: 30rem;
		background: rgba(0,0,0,0);
	}
	.realUp{
	    width: 22rem;
	    height: 24rem;
	    background: white;
	    z-index: 88;
    	border-radius: 1rem;
	}
	.close1{
		width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    position: absolute;
	    bottom: 2rem;
	    left: 42%;
	}
	.close1>img{
		width: 100%;
		height: 100%;
	}
	.log_pic{
		width: 7rem;
		height: 7rem;
		border-radius: 50%;
/*		margin-left: 36%;*/	
		margin: 0 auto;
		margin-top: 8%;
	}
	.log_pic>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.Show_coupon1_p1{
		font-size: 1.7rem;
	    font-weight: bold;
	    width: 100%;
	    text-align: center;
	    margin-top: 7%;
	}
	.Show_coupon1_p2{
		font-size: 1.3rem;
	    width: 100%;
	    text-align: center;
	    margin-top: 4%;
	}
	.href{
		width: 15rem;
	    margin: auto;
	    height: 3rem;
	    border-radius: 30px;
	    text-align: center;
	    line-height: 3rem;
	    font-size: 1.6rem;
	    background: #FAE64F;
	    margin-top: 14%;	
	}
	/*描述图片*/
	.upload{
    	width: 94%;
/*    	margin: auto;*/
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
	/*弹出框时间*/
	.avtiveTime{
		height: 32rem;
		z-index: 999;
		border-radius: 4% 4% 0 0;
	}
	.avtiveTime .choosetime{
		text-align: center;
	}
	.avtiveTime .choosetime>p{
		width: 100%;
	    height: 6rem;
	    text-align: center;
	    font-size: 1.6rem;
	    font-weight: bold;
	    border-radius: 1.5rem 1.5rem 0 0;
	    line-height: 5rem;
	    position: relative;
	    background: white;
	}
	.avtiveTime .choosetime>p>span{
		display: block;
	    position: absolute;
	    top: 30%;
	    left: 36%;
	    font-size: 1.2rem;
	    font-weight: normal;
	}
	.avtiveTime .choosetime .cotrl{
		display: flex;
	}
	.avtiveTime .choosetime .cotrl>p{
		text-align: center;
		margin: 0 auto;
	}
	.avtiveTime button{
		width: 13rem;
		height: 3rem;
		text-align: center;
		line-height: 2.5rem;
		border-radius: 0.5rem;
	    margin-top: 9%;
	    font-size: 1.5rem;
	}
	.avtiveTime button.bu-true{
		background: #FAE74F;
		color: #333333;
		margin-right: 1rem;
	}
	.avtiveTime button.bu-false{
		background: #fff;
		border:1px solid #999;
		color: #999;
		margin-left: 1rem;
	}
	
	/*弹出框地址*/
	.chooseAddress{
		height: 32rem;
		z-index: 999;
		border-radius: 4% 4% 0 0;
	}
 </style>
 
          