$(function () {
    var chart1 = $("#chart-1");
    if (chart1.length > 0) {
        var buyerData = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    label: "Example pageviews",
                    data: [203, 156, 99, 251, 247, 305],
                    backgroundColor: "rgba(91, 192, 222,0.4)",
                    borderColor: "rgba(91, 192, 222,1)"
                },
                {
                    label: "Actual pageviews",
                    data: [203, 205, 250, 268, 320, 540],
                    backgroundColor: "rgba(92, 184, 92,0.4)",
                    borderColor: "rgba(92, 184, 92,1)"
                }
            ]
        };

        new Chart(chart1, {
            type: 'line',
            data: buyerData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
});