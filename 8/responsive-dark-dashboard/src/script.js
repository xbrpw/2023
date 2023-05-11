Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.animation = false;
var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.3)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [6502, 5908, 8000, 8100, 5611, 5525, 4045, 2220, 3800]
  }, {
    label: "My Second dataset",
    fillColor: "rgba(90,170,225,0.4)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [2820, 4833, 4023, 1900, 8600, 2700, 9110, 5532, 4805]
  }]
};

var ctx = document.getElementById("linechart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  pointDot: false,
  showScale: false,
  bezierCurveTension: 0.45,
  datasetStrokeWidth: 3,
  multiTooltipTemplate: "<%= value %>$",
  pointHitDetectionRadius: 60,
});
var data2 = [{
  value: 350,
  color: "#5AB3D1",
  highlight: "#5AB3D1",
  label: "Red"
}, {
  value: 50,
  color: "#DAD3EC",
  highlight: "#DAD3EC",
  label: "<Green>"
}, {
  value: 150,
  color: "rgba(0,0,0,0.2)",
  label: "",
}]
var data3 = [{
  value: 200,
  color: "#5AB3D1",
  highlight: "#5AB3D1",
  label: "Red"
}, {
  value: 20,
  color: "#DAD3EC",
  highlight: "#DAD3EC",
  label: "<Green>"
}, {
  value: 300,
  color: "rgba(0,0,0,0.2)",
  label: "",
}]

var data4 = [{
  value: 100,
  color: "#5AB3D1",
  highlight: "#5AB3D1",
  label: "Red"
}, {
  value: 70,
  color: "#DAD3EC",
  highlight: "#DAD3EC",
  label: "<Green>"
}, {
  value: 50,
  color: "rgba(0,0,0,0.2)",
  label: "",
}]

var myDoughnutChart = new Chart(document.getElementById("piechart").getContext("2d")).Doughnut(data2, {
  animateScale: false,
  percentageInnerCutout: 80,
  segmentShowStroke: false,
  tooltipTemplate: "",
});

var myDoughnutChart2 = new Chart(document.getElementById("piechart2").getContext("2d")).Doughnut(data3, {
  animateScale: false,
  percentageInnerCutout: 80,
  segmentShowStroke: false,
  tooltipTemplate: "",
});
var myDoughnutChart3 = new Chart(document.getElementById("piechart3").getContext("2d")).Doughnut(data4, {
  animateScale: false,
  percentageInnerCutout: 80,
  segmentShowStroke: false,
  tooltipTemplate: "",
});
//order scroll script
var orderItemH = document.getElementById('order-item').clientHeight;
console.log(orderItemH);
var orderContainer = document.getElementById('order-container');
var statsElementH = document.getElementById('stats-element').clientHeight;
var initialAmount = Math.floor((statsElementH - 150) / orderItemH);
var totalAmount = document.getElementsByClassName('order-item').length + 1;
console.log(initialAmount + ' items can be displayed');
orderContainer.style.height = (initialAmount * (orderItemH + 10)) + 'px';

document.getElementById('order-scrolldown').addEventListener('click', function() {
  scrollOrder(orderContainer.scrollTop + orderItemH + 14);
});
document.getElementById('order-scrollup').addEventListener('click', function() {
  scrollOrderUp(orderContainer.scrollTop - orderItemH - 14);
});

window.onresize = function() {
  orderItemH = document.getElementById('order-item').clientHeight;
  statsElementH = document.getElementById('stats-element').clientHeight;
  initialAmount = Math.floor((statsElementH) / orderItemH);
  totalAmount = document.getElementsByClassName('order-item').length + 1;
  orderContainer.style.height = (initialAmount * (orderItemH + 15)) + 'px';
}

function scrollOrder(max) {
  if (orderContainer.scrollTop <= max && max < (totalAmount - initialAmount) * orderItemH) {
    console.log(orderItemH)
    window.setTimeout(function() {
      orderContainer.scrollTop += 5;
      scrollOrder(max);
    }, 2)
  }
}

function scrollOrderUp(goal) {
  if (orderContainer.scrollTop >= goal && orderContainer.scrollTop > 0) {
    orderContainer.scrollTop -= 5;
    window.setTimeout(function() {
      scrollOrderUp(goal);
    }, 2)
  }
}