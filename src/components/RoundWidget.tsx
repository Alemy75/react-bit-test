import { useGetControlValueQuery, useGetGraphValueQuery } from '../store/widget.api';

const RoundWidget = () => {
    const { data, isSuccess } = useGetControlValueQuery();

    const roundFilling = `linear-gradient(0, #005FB8 25%, white 25%);`;	
	
    return (
        <article
            className="aspect-square w-[380px] max-w-[100%] bg-white rounded-[200px] relative circle shadow-lg cursor-pointer"
            style={{ background: roundFilling }}
        >
            <div className="h-[100%] text-center flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-blue mt-[48px]">Цена</h2>
                    <div className="fz-100px mt-[20px]">
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
