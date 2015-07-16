(function($){
	var manageValidate = function(){};
	manageValidate.fn = manageValidate.prototype={
		isEmptys:function (val) {
			return val == "" ? true : false;
		},
		isNumber:function(val){
			var regex = /^\d*$/;// 只能输入数字
			return regex.test(val) ? true : false;
		},
		isUser:function(val){
			var regex = /^[\u4e00-\u9fa5\w]{6,16}$/; //用户名可以匹配中文下划线数字字符6到16位 
			return regex.test(val) ? true : false;
		},
		isMail:function(val){
			var regex = /^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\.\\w+([-.]\\w+)*$/;
			return regex.test(val) ? true : false;
		},
		isUserPwd:function(val){
			var regex = /^\w{6,12}$/;//用户名只能是字母字符数组下划线6到16位
			return regex.test(val) ? true : false;
		}
	}
	window.validate = new manageValidate();

	var cookie = function(){};
	cookie.fn = cookie.prototype= {
		setCookie:function(name,value){
			var never = new Date();
			never.setTime(never.getTime()+60*60*24*7);    
			document.cookie=name+"="+escape(value)+";expire="+never.toGMTString();
		},
		getCookie:function (name) {
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
			if(arr != null) return unescape(arr[2]); return null; 
		}
	}
	window.COOKIE = new cookie();
})($);