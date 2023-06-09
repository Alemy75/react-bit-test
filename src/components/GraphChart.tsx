import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetGraphValueQuery } from '../store/widget.api';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GraphChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                titleFont: {
                    family: 'Roboto', // Имя выбранного шрифта
                    size: 20, // Размер шрифта
                },
                bodyFont: {
                    family: 'Roboto', // Имя выбранного шрифта
                    size: 12, // Размер шрифта
                },
            },
        },
    };

    const { data: chartData, isSuccess: succes } = useGetGraphValueQuery();

    const values = succes ? chartData.map((item) => item.currentValue) : [];

    const labels = succes
        ? chartData.map((item) => item.timestep.split(' ')[1])
        : [];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Показание потребления',
                data: values,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointRadius: 4,
            },
        ],
    };
    return <Line options={options} data={data} />;
};

export default GraphChart;
