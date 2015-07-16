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
	 *  TODO 下拉数据需要重新同步
	 */
	$.getWysiwyg = function(option,id){
		var html = [];
		var data = option;
		var name = "",
			title = "",
			contains = "Go ahead&hellip;";

		if (data != undefined || data != "") {
			name = data.name != undefined ? data.name : "";
			title = data.title != undefined ? data.title : "";
			contains = data.contains != undefined ? data.contains : "Go ahead&hellip;";
		}
		//TODO 缺少表单发送地址
		html.push('<form action="" enctype="multipart/form-data" id="publish-articles" class="form-horizontal">');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-name" class="col-sm-2">标题：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<input type="text" id="art-name" class="form-control" value="'+name+'" placeholder="文章名称">');
		html.push('</div>');
		html.push('</div>');
		html.push('<div class="form-group  text-right">');
		html.push('<label for="art-funame" class="col-sm-2">副标题：</label>');
		html.push('<div class="col-sm-9">	');
		html.push('<input type="text" id="art-funame" class="form-control" value="'+title+'" placeholder="文章副标题">');
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
		html.push('<div id="editor">"'+contains+'"');
		html.push('</div>');
		html.push('</div>');
		html.push('</div>');					
		html.push('</div>');
		html.push('<div class="form-group">');
		html.push('<div class="col-lg-2"></div>');
		html.push('<div class="col-lg-10">');
		html.push('<button id="btn-submit" class="btn btn-primary btn-lg">发布</button>');
		html.push('</div>');
		html.push('</div>');
		html.push('</form>');

		$('#'+id).empty().prepend(html.join(''));

		$("#btn-submit").unbind('click').click(function(){
			alert('提交事件');
		});

		$('#editor').wysiwyg();

		function initToolbarBootstrapBindings() {
			var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
					'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
					'Times New Roman', 'Verdana'
				],
				fontTarget = $('[title=Font]').siblings('.dropdown-menu');
			$.each(fonts, function(idx, fontName) {
				fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
			});
			$('a[title]').tooltip({
				container: 'body'
			});
			$('.dropdown-menu input').click(function() {
					return false;
				})
				.change(function() {
					$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
				})
				.keydown('esc', function() {
					this.value = '';
					$(this).change();
				});

			$('[data-role=magic-overlay]').each(function() {
				var overlay = $(this),
					target = $(overlay.data('target'));
				overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
			});
			if ("onwebkitspeechchange" in document.createElement("input")) {
				var editorOffset = $('#editor').offset();
				$('#voiceBtn').css('position', 'absolute').offset({
					top: editorOffset.top,
					left: editorOffset.left + $('#editor').innerWidth() - 35
				});
			} else {
				$('#voiceBtn').hide();
			}
		};

		function showErrorAlert(reason, detail) {
			var msg = '';
			if (reason === 'unsupported-file-type') {
				msg = "Unsupported format " + detail;
			} else {
				console.log("error uploading file", reason, detail);
			}
			$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
				'<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
		};
		initToolbarBootstrapBindings();
		$('#editor').wysiwyg({
			fileUploadError: showErrorAlert
		});
		window.prettyPrint && prettyPrint();
	}

	/**
	 * 时间选择器
	 */
	$.dataTimer = function(id){

		var html = [];

		html.push('开始&nbsp;&nbsp;<div class="input-append date start-data dataTimer" id="start-data">');
		html.push('<input size="16" type="text" value="" readonly>');
		html.push('<span class="add-on"><i class="icon-time"></i></span>');
		html.push('</div>');
		html.push('&nbsp;结束&nbsp;&nbsp;<div class="input-append date end-data dataTimer" id="end-data">');
		html.push('<input size="16" type="text" value="" readonly>');
		html.push('<span class="add-on"><i class="icon-time"></i></span>');
		html.push('</div>&nbsp;');
		html.push('<button class="btn btn-success">');
		html.push('<i class="icon-search"></i> &nbsp;查询');
		html.push('</button>');

		$('#'+id).empty().prepend(html.join(''));

		$("#start-data,#end-data").datetimepicker({
			format: 'yyyy/mm/dd hh:ii',
			autoclose:true
			// minView:2//日期时间选择器所能够提供的最精确的时间选择视图。
		});
	}
	/**
	 * 分页
	 * style1：1,2,3,4,5,6,7,8,9...11,12
	 * style2：1,2...5,6,7,8,9,10,11,12
	 * style3：1,2...4,5,6,7,8,9,10...19,20
	 */
	$.fn.pagging = function (opts){
		var defaults = {
			current: 1,
			pagesize: 10,
			sum: 0,
			param: {},
			callback: null
		}

		var options = $.extend(defaults, opts || {});

		

		return this.each(function(){

			$this = $(this);
			var totalpages = Math.ceil(options.sum/options.pagesize);
			var header = 2,tail = 2;
			var pager_length  = 11 ;
			var offset = (pager_length - 1 )/2;
			var main_length = pager_length - header - tail;

			var html = [];

			html.push('<ul class="pagination">');
			if (totalpages ===0 || totalpages ===1) {
				html.push('<li class="disabled">');
				html.push('<a href="javascript:;;" aria-label="Previous">');
				html.push('<span aria-hidden="true">&laquo;</span>');
				html.push('</a>');
				html.push('</li>');
				html.push('<li class="active"><a href="javascript:;;">1</a></li>');
				html.push('<li class="disabled">');
				html.push('<a href="javascript:;;" aria-label="Next">');
				html.push('<span aria-hidden="true">&raquo;</span>');
				html.push('</a>');
				html.push('</li>');
			}else {

				html.push('<li ' + (options.current <= 1 ? 'class="disabled" data-idx="-1"' : 'data-idx="' + (options.current - 1)) + '"' + '>');
				html.push('<a href="#" aria-label="Previous">');
				html.push('<span aria-hidden="true">&laquo;</span>');
				html.push('</a>');
				html.push('</li>');

				if (totalpages > pager_length) {

					if (options.current <= offset + 1) {
						for(var i = 1 ; i<= header + main_length ; i++ ){
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"' )+ '><a href="#">' + i + '</a></li>');
						}
						html.push('	<li class="disabled" data-idx="-1"><a href="javascript:;;">...</a></li>');	
						for (var i = totalpages - tail +1; i <= totalpages; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"' )+ '><a href="#">' + i + '</a></li>');	
						}

					} else  if (options.current >= totalpages - offset){
						for (var i = 1; i <= header; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"' )+ '><a href="#">' + i + '</a></li>');			
						}
						html.push('	<li class="disabled" data-idx="-1"><a href="javascript:;;">...</a></li>');
						for (var i = totalpages- main_length; i <= totalpages; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"' )+ '><a href="#">' + i + '</a></li>');	
						}
					} else {
						for (var i = 1; i <= header; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"') + '><a href="#">' + i + '</a></li>');
						}
						html.push('	<li class="disabled" data-idx="-1"><a href="javascript:;;">...</a></li>');

						var offset_m = (main_length - 1) / 2;
						var counter = options.current + offset_m;
						for (var i = offset_m+1; i <= counter  ; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"') + '><a href="#">' + i + '</a></li>');
						}
						html.push('	<li class="disabled" data-idx="-1"><a href="javascript:;;">...</a></li>');
						for (var i = (totalpages-tail)+1; i <= totalpages; i++) {
							html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"') + '><a href="#">' + i + '</a></li>');
						}
					}

				}else{
					for (var i = 1; i <= totalpages; i++) {
						html.push('	<li ' + (options.current == i ? 'class="active" data-idx="' + i + '"' : 'data-idx="' + i + '"' )+ '><a href="#">' + i + '</a></li>');
					}
				}

				html.push('	<li ' + (options.current >= totalpages ? 'class="disabled" data-idx="-1"' : 'data-idx="' + (options.current + 1)) + '"' + '>');
				html.push('		<a href="#" aria-label="Next">');
				html.push('			<span aria-hidden="true">&raquo;</span>');
				html.push('		</a>');
				html.push('	</li>');
			}

			html.push('</ul>');

			$this.html(html.join(''));

			if ($.isFunction(options.callback)) {
				$this.find('ul > li').click(function(event) {
					var idx = $(this).data('idx');
					if (idx!=-1) {
						options.callback(idx,{});
					}
				});
			}

		});
	}

	
	
})(jQuery);