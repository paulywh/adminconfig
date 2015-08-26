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
                <p class="ui-tipbox-explain">邮件已发送到邮箱 xxx***@126.com</p>
							 <p class="ui-tipbox-other">
					<span class="ui-button  ui-button-mblue "><a target="_blank" class="ui-button-text" id="submitBtn" href="http://www.126.com/" seed="content-submitBtn" smartracker="on">立即查收邮件</a></span>
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
			<li class="ui-roundstep-finish ui-roundstep-first"><em><strong></strong>1</em><span>验证账户名</span></li>
			<li class="ui-roundstep-current"><em>2</em><span>填写账户信息</span></li>
			<li class="ui-roundstep-todo"><em>3</em><span>企业实名认证</span></li>
			<li class="ui-roundstep-success"><em></em><span>注册成功</span></li>
		</ol>
	</div>
	<div class="grid-780 box-shadow fn-clear">
		<div class="ui-form-welcome">
		账户名： 
		<strong class="account">${param.flagMail}</strong>
		</div>
		<div class="ui-form-dashed"></div>
		<h3 class="ui-form-title ui-form-title-enterprise ui-for   m-title-first">
		<strong>登录密码</strong>
		<span class="explain">登录时需验证，保护账户信息</span>
		</h3>
		<div class="ui-form-item">
		<label class="ui-label" for="queryPwd">登录密码</label>
		<input id="queryPwd" class="ui-input" type="password" data-error=" " name="queryPwd" autocomplete="off" seed="JCompleteForm-queryPwd" smartracker="on" data-widget-cid="widget-2" data-validator-set="widget-1">
		</div>
		<div class="ui-form-item">
		<label class="ui-label" for="queryPwdConfirm">再输入一次</label>
		<input id="queryPwdConfirm" class="ui-input" type="password" data-explain="请再次输入登录密码。" data-error=" " name="queryPwdConfirm" autocomplete="off" seed="JCompleteForm-queryPwdConfirm" smartracker="on" data-widget-cid="widget-2" data-validator-set="widget-2">
		</div>
		<div class="ui-form-dashed"></div>
		
		<h3 class="ui-form-title ui-form-title-enterprise ui-form-title-first">
		<strong>内部密码</strong>
		<span class="explain">支付时需验证，保护账户信息</span>
		</h3>
		<div class="ui-form-item">
		<label class="ui-label" for="queryPwd">登录密码</label>
		<input id="queryPwd" class="ui-input" type="password" data-error=" " name="queryPwd" autocomplete="off" seed="JCompleteForm-queryPwd" smartracker="on" data-widget-cid="widget-2" data-validator-set="widget-1">
		</div>
		<div class="ui-form-item">
		<label class="ui-label" for="queryPwdConfirm">再输入一次</label>
		<input id="queryPwdConfirm" class="ui-input" type="password" data-explain="请再次输入登录密码。" data-error=" " name="queryPwdConfirm" autocomplete="off" seed="JCompleteForm-queryPwdConfirm" smartracker="on" data-widget-cid="widget-2" data-validator-set="widget-2">
		</div>
		<div class="ui-form-dashed"></div>
		
		<h3 class="ui-form-title ui-form-title-enterprise">
		<strong>安全保护问题</strong>
		<span class="explain">忘记密码时，可通过回答问题找回密码</span>
		</h3>
		<div class="ui-form-item" style="z-index: 97;">
		<label class="ui-label" for="protectPasswordIssue">安全保护问题</label>
		<a class="ui-select-trigger" href="#" style="width: 97px;">－－请选择－－</a>
		</div>
		<div class="ui-form-item">
		<label class="ui-label" for="protectPasswordKey">安全保护答案</label>
		<input id="protectPasswordKey" class="ui-input" type="text" data-error=" " value="" data-explain="答案长度是2-32。" name="securityAnswer" autocomplete="off" seed="JCompleteForm-protectPasswordKey" smartracker="on" data-widget-cid="widget-6" data-validator-set="widget-6">
		</div>
	    <div class="ui-form-dashed"></div>
		    <div class="ui-form-item">
			<div class="ui-button ui-button-lblue" id="submitBtn">
				<input type="submit" value="下一步" class="ui-button-text" id="submitregstep2">
			</div>
			<span class="ui-form-confirm"><span class="loading-text fn-hide">正在提交信息</span></span>
        </div>
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