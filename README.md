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
 使用iframe  自适应 高度 会牵扯到很多问题，兼容、跨域、缓存...... 所有我们尽量采用 javascript 绑定点击事件。<br/>
 

 <h1><a href="http://www.bootcss.com/p/bootstrap-datetimepicker/">日期时间选择器</a></h1>
 <h3>Bootstrap日期和时间表单组件。</h3>

<h1><a href="falls.html">瀑布流</a></h1>
<h3>初始化</h3>
描述场景：在main 下面有多个 thumbnail 的集合，thumbnail 里放着 一张 宽225，高自适应的图片 
<h4>瀑布流 的一个特点就是定宽不定高</h4> 	
<h5>实现步骤：</h5>
1.获取 所有 thumbnail 元素  【thumbnails】 <br>
2.获取页面的宽度 【pageWidth】<br>
3.计算 一个 thumbnail 的 宽度 【oBox】<br>
4.计算 一页显示几列  （pageWidth/oBox）【oBoxCount】<br>
5. 让 main 内元素居中<br>
6.存放每一列的高度 ,遍历数组【thumbnails】for (var i = 0; i < thumbnails.length; i++) <br>
I.首先判断 i 是否小于 oBoxCount  是就添加到 hArr 的数组中   否则  :<br>
II. 获取 hArr 里的最小值 ，通过 Math.min.apply(null,hArr) 获取最小值 hMin , 然后再获取最小值的索引，最后把 thumbnails[i] 下第二行的第一个值，添加到 hArr 中 最小的一个数组下面 。<br>
III. <em>此时注意</em> 根据以上操作， 从第二行往下，所有的thumbnails 全部重叠到 第一行最小值下面了。 所有 每添加一次到hArr 最小数组中就要把自身高度累加到 对应下标的数组里。就能解上面的问题。<br>

<h3><a href="falls.html">滚轮事件</a></h3>
<h4>判断  最后一张图片的高度 <  屏幕可视区域 + 滚轮高度  ? true : false </h4>
<h5>实现步骤：</h5>
1.获取 所有 thumbnail 元素  【thumbnails】 <br>
2.获取 最后一张图 的高度 + 自身高度的一半 【我这边是想当最后一张图被加载一半的时候，继续加载数据】 <br> 
3.获取 滚动高度  document.body.scrollTop || document.documentElement.scrollTop<br>
4.获取可是区域 高度 $(window).height()<br>
5.比较 true : false <br>
I.true: 追加，false : 不显示。

<h1><a href="">分页</a></h1>
分页格式 I.  1 2 3 4 5 6 7 8 9... 12 <br>
		  II. 1 2 ...5 6 7 8 9 ... 11 12 <br>
		  II. 1 2 ....5 6 7 8 9 10 11 12 <br>
<h5>实现步骤：</h5>
根据上面的 格式 我们 分两种情况来判断。
1.总页数小于11 。就直接展示 pager_length

2.总页数 > 10 分别 以上面三种情况来展示
首先我们先确定 左右两边 以 2 个开头 和 结尾 header tail

I.
II.
III.



