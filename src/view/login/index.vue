<template>
	<div class="login">
	<nav class="nav">
	<div class="nav-container" style="opacity: 1;">
	<span class="nav-left nav-back">
		
	</span>
	<p class="nav-title">登录</p>
	</div>
	<div class="nav-padding">
		
	</div>
	</nav>
	<div class="telephone">
	<input name="telephone" maxlength="11" placeholder="手机号码"></div>
	<div class="captcha-container" style="position: relative;"><input type="text" class="captcha" placeholder="请输入图形验证码"><img class="img-code" src="/ws/user/getCaptcha?phone=13675825740&amp;t=0" alt="验证码"></div>
	<div class="code"><input name="code" placeholder="验证码" maxlength="6"><button class="getCode">获取验证码</button></div>
	<div class="button disabled" disabled="">登录</div></div>
</template>
<style>
	
</style>
<script>
	export default {
	};
</script>