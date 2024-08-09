import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const data = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Otra línea',
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(54, 162, 235)',
            pointBackgroundColor: 'rgba(54, 162, 235)',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,
        },
        x: {
            ticks: {
                color: 'rgb(255, 99, 132)',
            },
        },
    },
    plugins: {
        legend: {
            display: true,
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    return `${context.dataset.label}: ${context.raw}`;
                }
            }
        }
    }
};

export default function LinesChart() {
    return (
        <div className="relative w-full h-80">
            <Line data={data} options={options} />
        </div>
    );
}
