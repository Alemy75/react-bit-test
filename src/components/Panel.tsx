import PanelSvg from '../assets/svg/PanelSvg';

const Panel = () => {
    return (
        <div className="content__left shadow-sm bg-white inline-block z-10">
            <div className="h-[45px] flex bg-blue-100 mt-[34px] items-center border-left-blue cursor-pointer">
                <div className="ml-[33px]">
                    <PanelSvg />
                </div>
                <span className="font-blue ml-[21px]">Панель</span>
            </div>
        </div>
    );
};

export default Panel;
