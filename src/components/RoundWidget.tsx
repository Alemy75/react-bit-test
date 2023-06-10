import { useGetControlValueQuery, useGetGraphValueQuery } from '../store/widget.api';

const RoundWidget = () => {
    const { data, isSuccess } = useGetControlValueQuery();

    console.log(data)

    const roundColor =
        isSuccess && data.currentValue > 0 && data.currentValue < 4.5
            ? 'circle_red'
            : 'circle_blue';
    
    return (
        <article
            className={`aspect-square bg-white rounded-[200px] relative circle ${roundColor} shadow-lg cursor-pointer`}
        >
            <div className="h-[100%] text-center flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-blue mt-[48px]">Цена</h2>
                    <div className="fz-max mt-[20px]">
                        {isSuccess && data.currentValue}
                    </div>
                    <span className="text-3xl">руб./кВт*ч</span>
                </div>
                <div className="mb-[10px] flex justify-center">
                    <div className="text-[25px] w-[171px] text-white">
                        5 руб./кВт*ч План
                    </div>
                </div>
            </div>
        </article>
    );
};

export default RoundWidget;
