
export function dependencyGraph(array){
    document.getElementById('myChart').innerHTML = ''
    const date = array.map((item) => {
        return item.date
    })
    const price = array.map((item) => {
        return item.price
    })

    let ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.parentNode.style.height = '500px';
    ctx.canvas.parentNode.style.width = '500px';
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: 'Показатели',
                data: price,
                borderWidth: 1
            }]
        },
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