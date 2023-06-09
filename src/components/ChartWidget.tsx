import GraphChart from './GraphChart';

const ChartWidget = () => {
    return (
        <article className="aspect-square cursor-pointer w-[600px] max-h-[400px] max-w-[100%] max-h-[100%] bg-white shadow-lg rounded-xl">
            <div className="h-[60px] w-[100%] bg-blue-600 text-white flex items-center rounded-top">
                <h2 className="ms-[20px]">Потребление</h2>
            </div>
            <div className="p-[20px]">
                <GraphChart />
            </div>
        </article>
    );
};

export default ChartWidget;
