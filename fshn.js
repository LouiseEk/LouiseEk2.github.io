new Chartist.Pie('.ct-chart', {
  series: [65, 35]
}, {
  donut: true,
  donutWidth: 120,
  startAngle: 0,
  total: 100,
  showLabel: false
});



var data = {
  series: [5, 3]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

