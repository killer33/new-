<template>
	<!--发布-->
  <div class="certification">
  	<div class="h">
  		<img src="../../build/27.jpg"/>
        <router-link to="/Release_1" tag="p" class="huiqu" @click.native="flushCom"><i class="iconfont">&#xe646;</i></router-link>
        <p class="white">发布活动</p>
    </div>
    <div class="margleft_box">
    	<div class="margleft">
		    <p class="theme">
		       <span class="headline">活动主题</span>
		       <input type="text" placeholder="请输入活动标题" class="textline" v-model="subdata.title">
		       <span><span class="num2">0</span>/20</span>
		    </p>
		   <!-- 文字输入区 -->
		   	<div class="content">
				<textarea name="" id="textarea"  placeholder="请描述您的活动" v-model="subdata.desActivity"></textarea>
			    <p>
			       	<span class="num">0</span>
			       	<span class="first">/300</span>
			    </p>
		    </div>
			<div class="uploadx1">
				<li class="upup">
					<img id="ypic" src="../../build/upup.png" />
					<img id="xpic" src="" />
					<input type="file" name="file" id="file" value="" accept="image/*" multiple  @change="uppp"/>
				</li>
			</div>
		</div>
    </div>
	<div class="fb_box">
		<div class="fb">
			<ul>
				<router-link to="" tag="li" class="Time_">
					<p>活动开始时间</p><p v-html='dates'></p><i class="iconfont">&#xe61f;</i>
				</router-link>
				<router-link to="" tag="li" class="Time_1">
					<p>活动结束时间</p><p v-html='dates1'></p><i class="iconfont">&#xe61f;</i>
				</router-link>
				<li @click="showBuyCollage()">
					<p><span class="star">*</span>拼团详细内容</p><p v-html="pintuan"></p><i class="iconfont">&#xe61f;</i>
				</li>
				<router-link to="" tag="li" class="Address_">
					<p>活动地址</p><p v-html='dates2'></p><i class="iconfont">&#xe61f;</i>
				</router-link>
				<router-link to="" tag="li">
					<p>详细地址</p><input v-model="subdata.address" type="text" name="" id="" value="" placeholder="请填写活动具体地址"/>
				</router-link>
				<router-link to="" tag="li">
					<p>活动人数</p><input v-model="subdata.number" type="text" name="" id="" value="" placeholder="请填写活动人数"/>
				</router-link>
				<li>
					<p>活动方式</p>
					<!--<div class="Outer_ring"><p class="check"></p></div><span class="online">线上</span>
					<div class="Outer_ring1"><p ></p></div><span class="offline">线下</span>-->
					<el-radio-group v-model="subdata.mode" text-color="#000000" fill="#FAE64E">
						<el-radio label="线上">线上</el-radio>
  						<el-radio label="线下" >线下</el-radio>
					</el-radio-group>
				</li>
				<li @click="showSelect">
					<p>活动类型</p><p>IT互联网</p><i class="iconfont">&#xe61f;</i>
				</li>
				<router-link to="" tag="li">
					<p>开启报名</p>
		          	<el-switch
						v-model="value"
						active-color="#FAE64F"
						inactive-color="#F0F0F0">
					</el-switch>
				</router-link>
				<li @click="showEnterprise()">
					<p>报名信息</p><input type="text" name="" id="" value="" placeholder="请填写具体报名信息"/>
				</li>
				<li @click="showEnter()">
					<p>企业信息</p><input type="text" name="" id="" value="" placeholder="请填写具体企业信息"/>
				</li>
			</ul>
		</div>
	</div>
	<div class="fb_di">
		<p class="release" @click="Release">立即发布</p>
	</div>
	<div class="fixed">
		<div class="Time_choose">
			<p>请选择活动开始时间<br /><span>请上下拨动进行选择</span></p>
			<van-datetime-picker
			  v-model="currentDate"
			  type="datetime"
			  :min-date="minDate"
			  :max-date="maxDate"
			/>
			<div class="cotrl">
				<p class="cotrl_sure" @click="con">确定</p>
				<p class="cotrl_cancel">取消</p>
			</div>
		</div>
		<div class="Time_choose1">
			<p>请选择活动结束时间<br /><span>请上下拨动进行选择</span></p>
			<van-datetime-picker
			  v-model="currentDate"
			  type="datetime"
			  :min-date="minDate"
			  :max-date="maxDate"
			/>
			<div class="cotrl">
				<p class="cotrl_sure" @click="end">确定</p>
				<p class="cotrl_cancel">取消</p>
			</div>
		</div>
		<div class="Address_selection">
			<p>请选择活动地址<br /><span>请上下拨动进行选择</span></p>
			<van-area :area-list="areaList" :columns-num="2" value="110101" @confirm="ress_sel" @cancel="cancel"/>
		</div>
	</div>
	<div class="maskd"></div>
	
	
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
	  <enterpriseSignup :showEnter="showEnter"></enterpriseSignup>
	</van-popup>
	
	<!--抢购信息弹出-->
    <!--<van-popup class='regUp' v-model="showBuy" position="right" :close-on-click-overlay="true" :overlay="true">
	  <buyhurry :showBuyhurry="showBuyhurry" :subdata="subdata"></buyhurry>
	</van-popup>-->
	<!--拼团信息弹出-->
	<van-popup class='regUp' v-model="showCol" position="right" :close-on-click-overlay="true" :overlay="true">
	  <buyCollage :showBuyCollage="showBuyCollage" :subdata="subdata"></buyCollage>
	</van-popup>
	
	<!--选择分类-->
	<van-popup class='regUp' v-model="showSel" position="right" :close-on-click-overlay="true" :overlay="true">
	  <selectionsort :showSelect="showSelect"></selectionsort>
	</van-popup>
  	
        
  </div>
 </template>
<script>
	import { DatetimePicker,Area,Popup } from 'vant';
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
	    	buyCollage:buyCollage,
	    	selectionsort:selectionsort
	  	},
		data() {
		    return {
		      subdata:{
		      	title:'',
		      	desActivity:'',//描述活动
		      	dates:'',//活动开始时间时间戳
			    dates1:'',//活动结束时间时间戳

			    dates2:'',//活动地址
			    address:'',//活动详细地址
			    number:'',//活动人数
			    mode:'', //活动类型
			    
		      },
		      dates:'请选择',//活动开始时间请选择
			  dates1:'请选择',//活动结束时间请选择
			  dates2:'请选择',//活动地址请选择
		      minHour: 10,
		      maxHour: 20,
		      minDate: new Date(2019,5,26),
		      maxDate: new Date(2020,7,7),
		      currentDate: new Date(),
		      areaList:areaList,
		      
		      pintuan:"请填写详细信息",//拼团内容
		      value:true,
		      show:false,
		      showEx:false,
		      showEn:false,
		      showBuy:false,
		      showCol:false,
		      showSel:false,
		      showReal:false
		    };
		},
		mounted(){
			var token = window.localStorage.getItem("token");
	    	if(!token){
	    		window.location.href="#/login";
	    	}
	  		this.$nextTick(()=>{
	  			var that=this;
	  			$.ajax({
	  				type:"post",
	  				url:join+"activity/activityAdd",
	  				dataType:"json",
	  				data:{token:token,style:1},
	  				success:function(data){
	  					console.log(data);
	  					if(data.ret==0){
	  						that.showReal=true;
	  					}else{
	  						that.showReal=false;
	  					}
	  				},
		  			error:function(err){
						console.log("请求失败");
					}
	  			});
	  		})
	  	},
		methods:{
			//发布活动
			Release(){
				console.log(this.subdata);
			},
			flushCom:function(){
				this.$router.go(0); 
			},
			//上传图片
			uppp:function(e){
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
                        
                        $("#xpic").attr("src", dataURL);
						$("#ypic").next().hide();
						
						$(function(){
							$("#xpic").show();
							$("#ypic").hide();
						})
                    };
                }
            },
//          活动开始时间确定按钮
            con:function(){
            	var d=this.currentDate;//获取数列当前时间
            	var year = d.getFullYear();
            	var month = d.getMonth()+1;
            	var day = d.getDate();
            	var hour = d.getHours();
            	var mintes = d.getMinutes();
            	//判断当值小于10+“ 0 ”
            	if (month<10) {
            		month="0"+month;
            	}
            	if (day<10) {
            		day="0"+day;
            	}
            	if (hour<10) {
            		hour="0"+hour;
            	}
            	if (mintes<10) {
            		mintes="0"+mintes;
            	}
            	var resDate = year + '-' + month + '-' + day + ' ' + hour + ':' + mintes;
            	this.dates=resDate;//打印到页面
            	$(".maskd").hide();
	    		$(".Time_choose").hide();
	    		$(".Time_choose1").hide();
	    		var start_time=new Date(d).getTime();//活动开始时间--时间戳
//	    		console.log(start_time);
	    		this.subdata.dates=start_time;
            },
//          活动结束时间确定按钮
            end:function(){
            	var d=this.currentDate;//获取数列当前时间
            	var year = d.getFullYear();
            	var month = d.getMonth()+1;
            	var day = d.getDate();
            	var hour = d.getHours();
            	var mintes = d.getMinutes();
            	//判断当值小于10+“ 0 ”
            	if (month<10) {
            		month="0"+month;
            	}
            	if (day<10) {
            		day="0"+day;
            	}
            	if (hour<10) {
            		hour="0"+hour;
            	}
            	if (mintes<10) {
            		mintes="0"+mintes;
            	}
            	var resDate = year + '-' + month + '-' + day + ' ' + hour + ':' + mintes;
            	this.dates1=resDate;//打印到页面
            	$(".maskd").hide();
	    		$(".Time_choose").hide();
	    		$(".Time_choose1").hide();
	    		var end_time1=new Date(d).getTime();//活动结束时间--时间戳
//	    		console.log(end_time1);
	    		this.subdata.dates1=end_time1;
            },
            //地址选择
            //地址选择确定按钮
            ress_sel:function(e){
            	this.sureResult1=e[0];
            	this.sureResult2=e[1];
            	var province = this.sureResult1.name;
            	var city = this.sureResult2.name;
            	var province_city=province + city;
            	$(".Address_selection").hide();
            	$(".maskd").hide();
            	this.dates2=province_city;
            	this.subdata.dates2=province_city;
            },
            //地址选择取消按钮
            cancel:function(){
            	$(".Address_selection").hide();
            	$(".maskd").hide();
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
            
            //抢购信息弹出
            showBuyhurry:function(){
            	if(this.showBuy==false){
            		this.showBuy=true;
            	}else{
            		this.showBuy=false;
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
            }
				
           
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
	    //开始时间选择
	    $(".Time_").click(function(){
			$(".maskd").show();
			$(".Time_choose").toggle();
			$(".Address_selection").hide();			
		})
	    //结束时间选择
	    $(".Time_1").click(function(){
			$(".maskd").show();
			$(".Time_choose1").toggle();
			$(".Time_choose").hide();
			$(".Address_selection").hide();			
		})
	    //时间选择按钮并获取值
//	    	取消
	    $(".cotrl_cancel").click(function(){
	    	$(".maskd").hide();
	    	$(".Time_choose").hide();
	    	$(".Time_choose1").hide();
	    })
	    //地点选择
		$(".Address_").click(function(){
			$(".maskd").show();
			$(".Address_selection").toggle();
			$(".Time_choose").hide();
			$(".Time_choose1").hide();
		})
		//活动方式选择
//		$(".Outer_ring1").click(function(){
//			$(this).children().addClass("check");
//			$(this).css("border","0.1rem solid #FAE64E");
//			$(".Outer_ring").css("border","0.1rem solid #D8D8D8");
//			$(".offline").css("color","black");
//			$(".online").css("color","#D8D8D8");
//			$(".Outer_ring>.check").hide();
//		})
//		$(".Outer_ring").click(function(){
//			$(this).children().show();
//			$(this).css("border","0.1rem solid #FAE64E");
//			$(".Outer_ring1").css("border","0.1rem solid #D8D8D8");
//			$(".online").css("color","black");
//			$(".offline").css("color","#D8D8D8");
//			$(".Outer_ring1>.check").removeClass("check");
//		})
		//开启报名
		$(".switchOn").click(function(){
        	$(this).toggleClass('switchOff'); 
        })
	
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
	}
	.Time_choose1{
		display: none;
	}
	.Address_selection{
		display: none;
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
 </style>
 
          