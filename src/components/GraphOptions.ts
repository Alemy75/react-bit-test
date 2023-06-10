export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            titleFont: {
                family: 'Roboto', // Имя выбранного шрифта
                size: 14, // Размер шрифта
            },
            bodyFont: {
                family: 'Roboto', // Имя выбранного шрифта
                size: 12, // Размер шрифта
            },
        },
    },
    scales: {
        x: {
            ticks: {
                maxTicksLimit: 6, // Ограничение количества лейблов по оси X
            },
        },
    },
};
