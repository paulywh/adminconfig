<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>注册</title>
<link media="all" rel="stylesheet" href="css/memberprod.authreg-1.1.css" type="text/css">
<link media="all" rel="stylesheet" href="css/alice.common.v1-1.4.css" type="text/css">
<link media="all" rel="stylesheet" href="css/reg.css" type="text/css">
<link media="all" rel="stylesheet" href="css/jquery/tipswindown.css" type="text/css">
<script type="text/javascript" src="js/jquery/jQuery.js"></script>
<script type="text/javascript" src="js/jquery/tipswindown.js"></script>
<script type="text/javascript" src="js/register/register.js"></script>
</head>
<body>
<div style="display:none;">
	<div id="simTestContent" class="simScrollCont">
		<div class="mainlist">
			<div class="ui-tipbox-content">
                <h3>请在24小时内点击邮件中的链接继续完成注册。</h3>
                <p class="ui-tipbox-explain"><div id="registerreturn"></div></p>
							 <p class="ui-tipbox-other">
					<span class="ui-button  ui-button-mblue "><a target="_blank" class="ui-button-text" id="submitBtn" seed="content-submitBtn" smartracker="on">立即查收邮件</a></span>
				 </p>
            </div>
		</div>
	</div>
</div>
<header id="header">
<div class="grid-990 header-wrap fn-clear">
	<figure class="fn-left" id="alipay-img-logo">
       <a title="计算中心-注册" href="www.bcc.ac.cn" seed="alipayImgLogo-link" smartracker="on"><img alt="计算中心-注册" src="img/logo.gif" width="111" height="37"></a><strong>注册</strong>
	</figure>
	
	<div class="global-toplink">
        <a href="#" class="global-toplink-link" seed="global-header-login">登录</a>
        <em class="global-separator">-</em>
        <a href="#" class="global-toplink-link" seed="global-header-register">注册</a>
        <em class="global-separator">|</em>
            
        <div id="global-header-i" class="global-dropdown">
            <div class="global-dropdown-hd">
                <div class="global-dropdown-hd-normal">
                    <a href="#" class="global-toplink-i global-toplink-link" seed="global-i-i">我的用户</a>
                </div>
            </div>
            <div class="global-dropdown-bd global-dropdown-bd-pl sl-alpha global-hide" style="z-index: 99; left: -2px; top: 24px; position: absolute; display: none; ">
                <div class="global-dropdown-bd-cnt global-dropdown-i">
                    <ul id="global-list-i" class="global-list">
                        <li><a href="https://lab.alipay.com/user/assets/index.htm" seed="global-i-account" target="_blank">账户管理</a></li>
                        <li><a href="https://lab.alipay.com/consume/record/index.htm" target="_blank" seed="global-i-record">交易记录</a></li>
                        <li><a href="https://securitycenter.alipay.com/sc/index.htm" seed="global-i-security" target="_blank">安全中心</a></li>
                        <li><a href="https://huiyuan.alipay.com/benefits/index.htm" seed="global-i-benefit" target="_blank">会员专享</a></li>
                        <li><a href="https://app.alipay.com/" seed="global-i-appstore" target="_blank">应用中心</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <em class="global-separator">|</em>
            
    
        <a href="#" seed="global-header-help" target="_blank" class="global-toplink-link">帮助中心</a>
        <em class="global-separator">|</em> 
    
        <a href="#" seed="global-header-egg" target="_blank" class="global-toplink-link">提建议</a>
        <em class="global-separator">|</em>

       <div id="global-header-more" class="global-dropdown">
          <div class="global-dropdown-hd">
              <div class="global-dropdown-hd-normal">
                  <a href="#" class="global-toplink-more global-toplink-link" seed="global-more-link">更多</a>
              </div>
          </div>
          <div class="global-dropdown-bd global-dropdown-bd-pr sl-alpha global-hide" style="z-index: 99; left: -73px; top: 24px; position: absolute; display: none; ">
              <div class="global-dropdown-bd-cnt global-dropdown-more">
                  <ul id="global-list-more" class="global-list">
			        <li class=""><a href="http://mobile.alipay.com/" title="无线支付" seed="global-more-mobile" target="_blank">无线支付</a></li>
			        <li class=""><a href="https://financeprod.alipay.com/account/finance/index.htm" title="理财专区" seed="global-more-finance" target="_blank">理财专区</a></li>
			        <li class=""><a href="https://b.alipay.com/newIndex.htm?src=person_alipay_001" title="商家服务" seed="global-more-merchant" target="_blank">商家服务</a></li>
			        <li class=""><a href="http://club.alipay.com/" title="论坛" seed="global-more-club" target="_blank">论坛</a></li>
			        <li class=""><a href="https://www.alipay.com/" title="返回支付宝首页" seed="global-more-home" target="_blank">返回支付宝首页</a></li>
                  </ul>
              </div>
          </div>
      </div>
	</div>
</div>
</header>

<div id="container">
	<div class="grid-780 grid-780-pd fn-clear">
	    <ol class="ui-roundstep  ui-roundstep-blue   ui-roundstep-4 ">
			<li class="ui-roundstep-current ui-roundstep-first"><em><strong></strong>1</em><span>验证账户名</span></li>
			<li class="ui-roundstep-todo"><em>2</em><span>填写账户信息</span></li>
			<li class="ui-roundstep-todo"><em>3</em><span>企业实名认证</span></li>
			<li class="ui-roundstep-success"><em></em><span>注册成功</span></li>
		</ol>
	</div>
	<div class="grid-780 fn-clear"> 
	    <ul class="tab-choose">
	        <li class="tab-choose-item tab-choose-item-business-b"><a href="#" seed="tabChooseItem-linkT1" smartracker="on">企业账户</a></li>
	    </ul>
	</div>
	<div class="grid-780 box-shadow fn-clear">
		<div class="ui-form ui-form-l fn-pt50">
	        <fieldset>
	            <legend>企业注册</legend>
	            <div class="ui-form-item">
	                <label class="ui-label" for="J-accName">登录名称</label>
	                <input type="test" value="" maxlength="100" placeholder="登录名称" class="ui-input" name="loginName" id="loginName">
	            </div>
	            <div class="ui-form-item">
	                <label class="ui-label" for="J-accName">企业名</label>
	                <input type="test" value="" maxlength="100" placeholder="企业名" class="ui-input" name="qyName" id="qyName">
	            </div>
	            <div class="ui-form-item">
	                <label class="ui-label" for="J-accName">电子邮件</label>
	                <input type="email" value="" maxlength="100" class="ui-input" name="email" id="email">
	            </div>
	            <div class="ui-form-item">
	                <label class="ui-label" for="J-checkcode">验证码</label>
	                <input type="text" maxlength="4" data-error="    " data-explain="输入左图中的字符，不区分大小写。" placeholder="输入验证码" class="ui-input ui-input-110 ime-disabled" name="checkCode" id="checkCode" >
	                <span class="sl-checkcodeIcon"><span id="checkcodeIcon" class="checkcodeIcon"></span></span>
	                <img style="cursor:pointer;" alt="输入验证码" src="https://omeo.alipay.com/service/checkcode?sessionID=eba085d9f9674f3945b72296525325ba&amp;r=0.6545526726823345" complete="complete" class="checkcode-img" title="点击图片刷新验证码" id="J-checkcode-img" seed="JEnterpriseIndexForm-J-checkcode-img" smartracker="on">
	            </div>
	            <div class="ui-form-item ui-form-item-checkbox">
	                <input type="checkbox" class="ui-checkbox" checked="checked" name="agree" id="J-agree" seed="JEnterpriseIndexForm-JAgree" smartracker="on">
	                <label class="ui-checkbox-label" for="J-agree">我同意<a target="_blank" href="#" class="ft-grey" id="J-alipay-treaty" seed="JEnterpriseIndexForm-JAlipayTreaty" smartracker="on">计算中心服务协议</a></label>
	            </div>
	            <div class="ui-form-item">
					<div class="ui-button ui-button-lblue" id="submitBtn">
						<input type="submit" value="下一步" class="ui-button-text" id="submitreg">
					</div>
					<span class="ui-form-confirm"><span class="loading-text fn-hide">正在提交信息</span></span>
	            </div>
	        </fieldset>
	    </div>
	    <div class="link-trigger"><a href="javascript:;" class="J-slide" id="J-reg-need" seed="linkTrigger-JRegNeed" smartracker="on">注册前需要准备什么资料？</a></div>
	</div>
</div>

<footer class="footer-enterprise" id="footer">
	<div class="copyright">
	  京ICP备09068502号  	 京公网安备11010802009464号
	  <a target="_blank" href="#" seed="copyright-link" smartracker="on"></a>
	</div>
</footer>
</body>
</html>