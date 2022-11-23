// LINE CHART
const labels = [
  'Yanvar',
  'Fevral',
  'Mart',
  'Aprel',
  'May',
  'Iyun',
  'Iyul',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    fill: false,
    backgroundColor: 'rgba(94, 96, 206, 1)',
    borderColor: 'rgba(94, 96, 206, 1)',
    data: [800, 400, 1000, 300, 200, 1500, 700],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    elements: {
        point:{
              radius: 1
          }
    },
    interaction: {
      mode: 'x',
      intersect: false,
      displayColors: false,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: 'rgba(155, 180, 188, 1)',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip:{
        callbacks: {
          label: function(context){
            let label = context.label || '';
            let value = context.parsed.y;

            if (label) {
                label += ': ';
            }
            let result = label + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₼";

            return result;
          },
          title: () => null,
          labelTextColor: function(context) {
              return '#000135';
          },
        },
        bodyFont: {
          size: 15
        },
        caretPadding: 10,
        caretSize: 0,
        padding: 10,
      }
    },
    scales: {
      x:{
        grid:{
          display : false
        },
        ticks: {
          font: {
            size: 13
          }
        }
      },
      y:{
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, ticks) {
            return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value);
          },
          font: {
            size: 13
          },
          stepSize: 500,
          count: 4,
        },
        beginAtZero: true,
      }
    }
  }
};


var lineChart = document.getElementById('lineChart');
const myLineChart = new Chart(lineChart, config);


// DOUGHNUT CHART

const data2 = {
  labels: [
    'Müştəri no. 1',
    'Müştəri no. 2',
    'Müştəri no. 3'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100, 150],
    backgroundColor: [
      'rgba(94, 96, 206, .5)',
      'rgba(94, 96, 206, .3)',
      'rgba(94, 96, 206, 1)',
      'rgba(94, 96, 206, .2)',
    ],
    borderWidth: 0,
    hoverOffset: 2,
  }]
}

const config2 = {
  type: 'doughnut',
  data: data2,
  options: {
    responsive: true,
    interaction: {
      backgroundColor: "transparent"
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context){
            const customerList=document.querySelectorAll('.customer-list-chart li');
            for(var i=0; i < customerList.length; i++){
              customerList[i].classList.remove('active-list');
            }

            customerList[context.dataIndex].classList.add('active-list');
          } 
        }
      }
    },
    layout:{
        padding: 10
    },
  }
}

var pieChart = document.getElementById('doughnut');
const myPieChart = new Chart(pieChart, config2);






