<template>
	<div class="login">
	<nav class="nav">

	<div class="nav-padding">

	</div>
	</nav>
	<div class="telephone loginInput">
	<label for="telephone">手机号</label>
	<input name="telephone" maxlength="11" placeholder="请输入手机号码"></div>
	<div class="captcha-container loginInput" style="position: relative;">
	<label for="captcha-container">图形验证码</label>
	<input type="text" class="captcha" placeholder="请输入4位数验证码" name="captcha-container">
	<img class="img-code" src="/ws/user/getCaptcha?phone=13675825740&t=0" alt="验证码"></div>
	<div class="code loginInput">
	<label for="captcha-container ">短信验证码</label>
	<input name="code" placeholder="验证码" maxlength="6"><div class="getCode">发送验证码</div></div>
	<div class="button disabled" disabled="">登录</div></div>
</template>
<style>

</style>
<script>
    export default {
    };
</script>
