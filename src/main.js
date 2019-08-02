// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'

//import {quillEditor, Quill} from 'vue-quill-editor'
//import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
//
//Quill.register('modules/ImageExtend', ImageExtend)

// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

//引入jq
import $ from 'jquery'
//域名字段
import  "../src/api/join.js"//接口截取字段
//阿里巴巴矢量库icon
import '../icon/iconfont.css'
//vant
import Vant from 'vant';
import 'vant/lib/index.css';
import {Popup} from 'vant';
Vue.use(Popup);

Vue.use(Vant);

Vue.config.productionTip = false

//1. 创建日期的过滤器
Vue.filter("datetimeFilter",function(val){
// 创建日期对象
var date=new Date(val);
// 获取 月 日 小时 分 钟
var m=date.getMonth()+1;//月份0~11
var d=date.getDate();//日
var h=date.getHours();
var mi=date.getMinutes();
// 返回字符串 Y-M-D h:mi:s
// m<10&&(m="0"+m);//如果月份<10;月份前面+0
d<10&&(d="0"+d);
mi<10&&(mi="0"+mi)
return `${m}月${d}日${h}:${mi}`;
});
// 2.创建日期的过滤器
Vue.filter("datetimeFilte",function(val){
// 创建日期对象
var date=new Date(val);
// 获取年 月 日
var y=date.getFullYear();//年份
var m=date.getMonth()+1;//月份0~11
var d=date.getDate();//日
// 返回字符串 Y-M-D
// m<10&&(m="0"+m);//如果月份<10;月份前面+0
d<10&&(d="0"+d);
return `${y}-${m}-${d}`;
});

Vue.filter("activity_datetime",function(val){
// 创建日期对象
var date=new Date(val);
// 获取 月 日 小时 分 钟
var y=date.getFullYear();//年份
var m=date.getMonth()+1;//月份0~11
var d=date.getDate();//日
var h=date.getHours();
var mi=date.getMinutes();
// 返回字符串 Y-M-D h:mi:s
// m<10&&(m="0"+m);//如果月份<10;月份前面+0
d<10&&(d="0"+d);
mi<10&&(mi="0"+mi)
return `${y}.${m}.${d} ${h}:${mi}`;
});

//活动查看过滤器
Vue.filter("activity_Num",function(val){
	if(val+1){
		var hh=val.toString();
		var f=hh.slice(0,1);
		var s=hh.slice(1,2);
		if(val>10000){
			return `${f}.${s}w`;
		}else{
			return val;
		}
	}

})

//1. 创建日期的过滤器
Vue.filter("datetime",function(val){
// 创建日期对象
var date=new Date(val);
// 获取 月 日 小时 分 钟
var y=date.getFullYear();//年份
var m=date.getMonth()+1;//月份0~11
var d=date.getDate();//日
var h=date.getHours();
var mi=date.getMinutes();
// 返回字符串 Y-M-D h:mi:s
// m<10&&(m="0"+m);//如果月份<10;月份前面+0
d<10&&(d="0"+d);
mi<10&&(mi="0"+mi)
return `${y}年${m}月${d}日${h}:${mi}`;
});







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
