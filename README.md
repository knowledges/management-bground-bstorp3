<h1>bootstrop3 management background</h1><br/>
version 1.0<br/>
author Mr.Qiu<br/>
time:2015年6月16日<br/>
Product description<br/>
我做个项目主要学习并且把它灵活的使用起来！：“未来的你一定感激现在奋斗的你”！<br/>
product  function<br/>
1.XX数据的统计（原图、折线、柱形），table 展示基本统计数据<br/>
2.对tabel 数据的增删改查<br/>
3.文章的发布，消息的提醒<br/>
4.后台管理人员的基本设置<br/>
5.登陆 <br/>
目前我是向这个方向去的......<br/>

<h1>font-awesome</h1><br/>
bootstrop 字体图标 <br/>
在html文档中的  head 部分，引入 font-awesome.min.css 文件。 <br/>
bootstrap.min.css <br/>
font-awesome.min.css <br/>
<h3>需要支持 IE7 浏览器</h3>
bootstrap.min.css <br/>
font-awesome.min.css <br/>
font-awesome-ie7.min.css <br/>
<!--[if IE 7]>
<link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css">
<![endif]-->

<h1>流式布局容器 <h3>.container-fluid</h3></h1>
<h3>.container-fluid</h3>
.container-fluid：可以将固定宽度的栅格布局转换为 100% 宽度的布局<br/>
<h3>.pull-right 快速浮动</h3>
.pull-left .pull-right  .clearfix


<h1><a href="http://www.hcharts.cn/">Highcharts</a></h1>
<!-- 
	version 1.0 
	封装了2个简单的统计图 待测试 
	后续有需求在加
-->
<h3>折线图</h3>
数据格式：数组
<!-- [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
}] -->
<h3>饼图</h3>
数据格式：map对象 <br/>
<!-- 
	[{
	    type: 'pie',
	    name: 'Browser share',
	    data: [
		        ['Firefox',   45.0],
		        ['IE',       26.8],
		        {
		            name: 'Chrome',
		            y: 12.8,
		            sliced: true,
		            selected: true
		        },
		        ['Safari',    8.5],
		        ['Opera',     6.2],
		        ['Others',   0.7]
	    	]
	}]
 -->
 <h4>环形图</h4>
 pie：{	<br />
	size:300 ;'环形图大小'<br/> 
	innerSize:'150';内环大小 <br/>
 }

 <h1>iframe 高度动态自适应</h1>
 使用iframe  自适应 高度 会牵扯到很多问题，兼容、跨域...... 而解决这个问题可以使用父页面和框架子页面相互配合，框架子页面想父页面传递其高度，父页面则获取高度，然后改变iframe 的高度<br/>
 

 <h1><a href="http://www.bootcss.com/p/bootstrap-datetimepicker/">日期时间选择器</a></h1>
 <h3>Bootstrap日期和时间表单组件。</h3>
