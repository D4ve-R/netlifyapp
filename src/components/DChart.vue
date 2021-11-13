<template>
  <div class="dchart">
  <canvas id="myChart" width="300" height="150"></canvas>
</div>
</template>

<script>
import Chart from 'chart.js';

export default {
    data () {
        return{
            chartData: {
                type: 'doughnut',
                data: {
                    labels: [
                        'C++',
                        'Java',
                        'Python',
                        'JavaScript',
                        'Php'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [80, 55, 70, 70, 35],
                        borderColor: 'rgba(0,0,0,0.01)',
                        hoverBackgroundColor: [
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 135, 0, 1)',
                            'rgba(55, 100, 255, 1)',
                            'rgba(255,255,0, 1)',
                            'rgba(136, 0, 255, 1)'
                        ],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.8)',
                            'rgba(255, 135, 0, 0.8)',
                            'rgba(55, 100, 255, 0.8)',
                            'rgba(255,255,0, 0.8)',
                            'rgba(136, 0, 255, 0.8)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white',
                            display: true,
                            fontSize: 12,
                        },
                    }
                }
            }
        }
    },
    mounted(){
        const ctx = document.getElementById('myChart');
        // eslint-disable-next-line no-unused-vars
        const myChart = new Chart(ctx, this.chartData);
    }

}
</script>

<style>

.dchart{
    width:50%;
    margin: auto;
    margin-top: 2rem;
    padding: 0.1rem 0 1rem 0;
    background: rgb(85, 85, 85);
    border-radius: 1rem;
    color:white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

</style>