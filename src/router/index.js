import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//登录
import login from '@/components/login'
//快速登录
import Quicklogin from '@/components/Quicklogin'
//立即注册
import Registernow from '@/components/Registernow'
//忘记密码
import Forgotpassword from '@/components/Forgotpassword'
//首页
import Home from '@/components/Home'
//更多企业
import moreCompanies from '@/components/moreCompanies'
//更多活动
import moreActivities from '@/components/moreActivities'
//购买
import buy from '@/components/buy'
//订单界面
import order from '@/components/order'
//订单界面-输入密码
import order_enterpassword from '@/components/order_enterpassword'
//购买后详情
import buyafter from '@/components/buyafter'
//企业
import enterprise from '@/components/enterprise'
//企业简介
import enterpriseintroduction from '@/components/enterpriseintroduction'
//企业-分享
import EnterpriseShare from '@/components/EnterpriseShare'
//企业活动-更多
import Corporateactivities_more from '@/components/Corporateactivities_more'
//活动
import activity from '@/components/activity'
//活动简介
import activityIntroduction from '@/components/activityIntroduction'
//安全中心
import SecurityCenter from '@/components/SecurityCenter'
//个人中心-修改密码
import Changepassword from '@/components/Changepassword'
//个人中心-修改支付密码
import Change_payment_password from '@/components/Change_payment_password'
//个人中心 -设置支付密码
import Set_payment_password from '@/components/Set_payment_password'
//意见反馈
import feedback from '@/components/feedback'
//他人主页+简介
import Otherspage from '@/components/Otherspage'
//个人中心实名认证-类型
import real_name_type from '@/components/real_name_type'
//个人中心-企业认证
import Enterprise_certification from '@/components/Enterprise_certification'
//个人中心-个人认证
import Personal_authentication from '@/components/Personal_authentication'
//个人资料-继续认证
import Continue_certification from '@/components/Continue_certification'
//个人资料
import personal_data from '@/components/personal_data'
//个人资料-修改
import personal_data_Modify from '@/components/personal_data_Modify'
//个人中心-关系族谱-空白页
import family_tree_blank from '@/components/family_tree_blank'
//个人中心-关系族谱
import family_tree from '@/components/family_tree'
//优惠券空白页
import Coupon_blank_page from '@/components/Coupon_blank_page'
//优惠券
import coupons from '@/components/coupons'
//账单记录
import bill_record from '@/components/bill_record'
//提现记录
import Withdrawal_record from '@/components/Withdrawal_record'
//积分-提现-微信
import withdrawal_WeChat from '@/components/withdrawal_WeChat'

//发布
import certification from '@/components/certification'
//抢购发布
import certification_buyhurry from '@/components/certification_buyhurry'
//拼团发布
import certification_buycollage from '@/components/certification_buycollage'

//选择分类
import selectionsort from '@/components/selectionsort'
//个人中心
import personal from '@/components/personal'
//消息通知
import messagecation from '@/components/messagecation'
//消息通知-详情
import messagedetails from '@/components/messagedetails'
//个人中心-关注
import Focus_on from '@/components/Focus_on'
//个人中心-粉丝
import fans from '@/components/fans'
//个人中心-粉丝-空白
import Blank_fan from '@/components/Blank_fan'
//个人中心-推荐
import recommended from '@/components/recommended'
//积分记录
import Integral_record from '@/components/Integral_record'
//充值
import top_up from '@/components/top_up'
//添加支付宝
import Add_alipay from '@/components/Add_alipay'
//发布1
import Release_1 from '@/components/Release_1'
//个人中心-活动
import Personal_activity from '@/components/Personal_activity'
//个人中心-推荐活动
import re_activity from '@/components/re_activity'
//展示个人认证信息
import show_certification from '@/components/show_certification'
//展示企业认证信息
import show_certification_qi from '@/components/show_certification_qi'
//兑换券
import voucher from '@/components/voucher'
//邀请码
import invitation from '@/components/invitation'
import dry from '@/components/dry'
//首页更多活动
import homeMoreActivities from '@/components/homeMoreActivities'
//首页更多企业
import homeMoreCompanies from '@/components/homeMoreCompanies'


Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  }
//	重定向路由
    {
    	path:'/',
    	redirect:'/home',
    },
//   登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dry',
      name: 'dry',
      component: dry
    },
//  快速登录
    {
      path: '/Quicklogin',
      name: 'Quicklogin',
      component: Quicklogin
    },
//  立即注册
    {
      path: '/Registernow',
      name: 'Registernow',
      component: Registernow
    },
//  忘记密码
    {
      path: '/Forgotpassword',
      name: 'Forgotpassword',
      component: Forgotpassword
    },
//  首页
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
//  更多企业
    {
      path: '/moreCompanies',
      name: 'moreCompanies',
      component: moreCompanies
    },
//  更多活动
    {
      path: '/moreActivities',
      name: 'moreActivities',
      component: moreActivities
    },
//  购买
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
//  订单界面
    {
      path: '/order',
      name: 'order',
      component: order
    },
//  订单界面-输入密码
    {
      path: '/order_enterpassword',
      name: 'order_enterpassword',
      component: order_enterpassword
    },
//  购买后详情
    {
      path: '/buyafter',
      name: 'buyafter',
      component: buyafter
    },
//  企业
    {
      path: '/enterprise',
      name: 'enterprise',
      component: enterprise
    },
//  企业简介
    {
      path: '/enterpriseintroduction/:company_id',
      name: 'enterpriseintroduction',
      component: enterpriseintroduction
    },
//  企业-分享
    {
      path: '/EnterpriseShare',
      name: 'EnterpriseShare',
      component: EnterpriseShare
    },
//  企业-分享
    {
      path: '/Corporateactivities_more',
      name: 'Corporateactivities_more',
      component: Corporateactivities_more
    },
//  活动
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
//  活动简介
    {
      path: '/activityIntroduction',
      name: 'activityIntroduction',
      component: activityIntroduction
    },
//  安全中心
    {
      path: '/SecurityCenter',
      name: 'SecurityCenter',
      component: SecurityCenter
    },
//  安全中心-修改密码
    {
      path: '/Changepassword',
      name: 'Changepassword',
      component: Changepassword
    },
//  安全中心-修改支付密码
    {
      path: '/Change_payment_password',
      name: 'Change_payment_password',
      component: Change_payment_password
    },
    
//  安全中心-设置支付密码
    {
      path: '/Set_payment_password',
      name: 'Set_payment_password',
      component: Set_payment_password
    },
//  意见反馈
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
//  他人主页+简介
    {
      path: '/Otherspage',
      name: 'Otherspage',
      component: Otherspage
    },
//  个人中心实名认证-类型
    {
      path: '/real_name_type',
      name: 'real_name_type',
      component: real_name_type
    },
//  个人中心-企业认证
    {
      path: '/Enterprise_certification',
      name: 'Enterprise_certification',
      component: Enterprise_certification
    },
//  个人中心-个人中心
    {
      path: '/Personal_authentication',
      name: 'Personal_authentication',
      component: Personal_authentication
    },
//  个人资料-继续认证
    {
      path: '/Continue_certification',
      name: 'Continue_certification',
      component: Continue_certification
    },
//  个人资料
    {
      path: '/personal_data',
      name: 'personal_data',
      component: personal_data
    },
//  个人资料-修改
    {
      path: '/personal_data_Modify',
      name: 'personal_data_Modify',
      component: personal_data_Modify
    },
//  个人中心-关系族谱-空白页
    {
      path: '/family_tree_blank',
      name: 'family_tree_blank',
      component: family_tree_blank
    },
//  个人中心-关系族谱
    {
      path: '/family_tree',
      name: 'family_tree',
      component: family_tree
    },
//  优惠券空白页
    {
      path: '/Coupon_blank_page',
      name: 'Coupon_blank_page',
      component: Coupon_blank_page
    },
//  优惠券
    {
      path: '/coupons',
      name: 'coupons',
      component: coupons
    },
//  账单记录
    {
      path: '/bill_record',
      name: 'bill_record',
      component: bill_record
    },
//  提现记录
    {
      path: '/Withdrawal_record',
      name: 'Withdrawal_record',
      component: Withdrawal_record
    },
//  积分-提现-微信
    {
      path: '/withdrawal_WeChat',
      name: 'withdrawal_WeChat',
      component: withdrawal_WeChat
    },
//  发布
    {
      path: '/certification',
      name: 'certification',
      component: certification
    },
//  抢购发布
    {
      path: '/certification_buyhurry',
      name: 'certification_buyhurry',
      component: certification_buyhurry
    },
//  拼团发布
    {
      path: '/certification_buycollage',
      name: 'certification_buycollage',
      component: certification_buycollage
    },
//分类
    {
      path: '/selectionsort',
      name: 'selectionsort',
      component: selectionsort
    },
//  个人中心
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
//  消息通知
    {
      path: '/messagecation',
      name: 'messagecation',
      component: messagecation
    },
//  消息通知-详情
    {
      path: '/messagedetails',
      name: 'messagedetails',
      component: messagedetails
    },
//  个人中心-关注
    {
      path: '/Focus_on',
      name: 'Focus_on',
      component: Focus_on
    },
//  个人中心-粉丝
    {
      path: '/fans',
      name: 'fans',
      component: fans
    },
//  个人中心-粉丝-空白
    {
      path: '/Blank_fan',
      name: 'Blank_fan',
      component: Blank_fan
    },
//  个人中心-推荐
    {
      path: '/recommended',
      name: 'recommended',
      component: recommended
    },
//  积分记录
    {
      path: '/Integral_record',
      name: 'Integral_record',
      component: Integral_record
    },
//  充值
    {
      path: '/top_up',
      name: 'top_up',
      component: top_up
    },
//  添加支付宝
    {
      path: '/Add_alipay',
      name: 'Add_alipay',
      component: Add_alipay
    },
//  发布1
    {
      path: '/Release_1',
      name: 'Release_1',
      component: Release_1
    },
//  个人中心-活动
    {
      path: '/Personal_activity',
      name: 'Personal_activity',
      component: Personal_activity
    },
//  个人中心-推荐活动
    {
      path: '/re_activity',
      name: 're_activity',
      component: re_activity
    },
//  展示个人认证信息
    {
      path: '/show_certification',
      name: 'show_certification',
      component: show_certification
    },
//  展示企业认证信息
    {
      path: '/show_certification_qi',
      name: 'show_certification_qi',
      component: show_certification_qi
    },
//  兑换券
    {
      path: '/voucher',
      name: 'voucher',
      component: voucher
    },
//  邀请码
    {
      path: '/invitation',
      name: 'invitation',
      component: invitation
    },
//  首页查看更多活动
		{
      path: '/homeMoreActivities',
      name: 'homeMoreActivities',
      component: homeMoreActivities
    },
    //  首页查看更多企业
		{
      path: '/homeMoreCompanies',
      name: 'homeMoreCompanies',
      component: homeMoreCompanies
    },
    
  ]
})
