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
})(jQuery);