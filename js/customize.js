(function($){
	/**
	 * 折线图 
	 */
	$.lineCharts = function(options){
		var defaults =['一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'];
		var $charts = options.charts;
		var charttype = options.charttype || "";
		var title = options.title || "";
		var text = options.text || "";
		var yAxistext = options.yAxistext || "";
		var valueSuffix = options.valueSuffix || "";
		var categories = options.categories || defaults;

		return $charts.highcharts({
			chart: {
                type: charttype
            },
			title: {
				text: title,
				x: -20 //center
			},
			subtitle: {
				text: text,
				x: -20
			},
			xAxis: {
				categories: categories
			},
			yAxis: {
				title: {
					text: yAxistext
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: valueSuffix
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: series //数组 格式 
		});
	};

	/**
	 * 饼图
	 */
	$.pieCharts = function(options){
		var $charts = options.charts;
		var title = options.title;
		var series = options.series;

		$charts.highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title: {
				text: 'Browser market shares at a specific website, 2010'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			series: series // map 对象
		});
	};

	/**
	 *	编辑器
	 *  所见即所得
	 */
	$.wysiwyg = function(option){
		var html = [];
		
		html.push('<form action="" id="publish-articles" class="form-horizontal">');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-name" class="col-sm-2">标题：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<input type="text" id="art-name" class="form-control" placeholder="文章名称">');
		html.push('</div>');
		html.push('</div>');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-funame" class="col-sm-2">副标题：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<input type="text" id="art-funame" class="form-control" placeholder="文章副标题">');
		html.push('</div>');
		html.push('</div>');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-menu" class="col-sm-2">菜单：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<select id="art-menu" class="form-control"  name="art-menu">');
		html.push('<option value="0">--请选择--</option>');
		html.push('<option value="1"></option>');
		html.push('<option value="2"></option>');
		html.push('<option value="3"></option>');
		html.push('</select>');
		html.push('</div>');
		html.push('</div>');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-prop" class="col-sm-2">类型：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<select id="art-prop" class="form-control"  name="art-prop">');
		html.push('<option value="0">--请选择--</option>');
		html.push('<option value=""></option>');
		html.push('<option value=""></option>');
		html.push('<option value=""></option>');
		html.push('</select>');
		html.push('</div>');
		html.push('</div>');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-prop" class="col-sm-2">内容：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">');
		html.push('<div class="btn-group">');
		html.push('<a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="icon-font"></i><b class="caret"></b></a>');
		html.push('<ul class="dropdown-menu">');
		html.push('</ul>');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a>');
		html.push('<ul class="dropdown-menu">');
		html.push('<li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>');
		html.push('<li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>');
		html.push('<li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>');
		html.push('</ul>');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>');
		html.push('<a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>');
		html.push('<a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>');
		html.push('<a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a>');
		html.push('<a class="btn" data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a>');
		html.push('<a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>');
		html.push('<a class="btn" data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a>');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a>');
		html.push('<a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a>');
		html.push('<a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a>');
		html.push('<a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a>');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a>');
		html.push('<div class="dropdown-menu input-append">');
		html.push('<input class="span2" placeholder="URL" type="text" data-edit="createLink"/>');
		html.push('<button class="btn" type="button">Add</button>');
		html.push('</div>');
		html.push('<a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a>');

		html.push('</div>');

		html.push('<div class="btn-group btn-file">');
		html.push('<a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="icon-picture"></i></a>');
		html.push('<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />');
		html.push('</div>');
		html.push('<div class="btn-group">');
		html.push('<a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a>');
		html.push('<a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a>');
		html.push('</div>');
		html.push('<input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="">');
		html.push('</div>');
		html.push('<div id="editor">Go ahead&hellip;');
		html.push('</div>');
		html.push('</div>');
		html.push('</div>');					
		html.push('</div>');
		html.push('<div class="form-group">');
		html.push('<div class="col-lg-2"></div>');
		html.push('<div class="col-lg-10">');
		html.push('<button class="btn btn-primary btn-lg">发布</button>');
		html.push('</div>');
		html.push('</div>');
		html.push('</form>');
	}


})(jQuery);