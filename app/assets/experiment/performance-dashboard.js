var el = document.getElementById('comparison');
var ctx = el.getContext('2d');

var chart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: window.datasets,
  },

  options: {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'hour',
          },
        },
      ],
    },
  },
});