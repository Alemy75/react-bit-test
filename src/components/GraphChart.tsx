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
import { options } from './GraphOptions';

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
        const { data: chartData, isSuccess: success } = useGetGraphValueQuery();

    const values = success ? chartData.map((item) => item.currentValue) : [];

    const labels = success
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
