import { DragEvent, useState } from 'react';
import LogoSvg from './assets/svg/LogoSvg';
import PanelSvg from './assets/svg/PanelSvg';
import SettingsSvg from './assets/svg/SettingsSvg';
import DragItem from './components/DragItem';

function App() {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const [draggedItem, setDraggedItem] = useState<number>(NaN);

    const [onMenuItems, setOnMenuItems] = useState([1, 2, 3]);

    const [onBoardItems, setOnBoardItems] = useState<number[]>([]);

    const dragStartHandler = (id: number) => {
        setDraggedItem(id);
    };

    const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const dropHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.preventDefault();
        if (onMenuItems.includes(draggedItem)) {
            setOnMenuItems(onMenuItems.filter((item) => item !== draggedItem));
            setOnBoardItems([...onBoardItems, draggedItem]);
        } else if (onBoardItems.includes(draggedItem)) {
            setOnBoardItems(
                onBoardItems.filter((item) => item !== draggedItem)
            );
            setOnMenuItems([...onMenuItems, draggedItem]);
        }
        setDraggedItem(NaN);
    };

    const dragEndHandler = () => {
        setDraggedItem(NaN);
    };

    return (
        <>
            <nav className="h-[90px] border-b border-gray-100 z-20 bg-white">
                <div className="flex h-[100%] items-center ml-[24px]">
                    <LogoSvg />
                    <h1 className="ml-[12px]">Энергия</h1>
                </div>
            </nav>
            <div className="content">
                <div className="content__left shadow-sm bg-white inline-block z-10">
                    <div className="h-[45px] flex bg-blue-100 mt-[34px] items-center border-left-blue cursor-pointer">
                        <div className="ml-[33px]">
                            <PanelSvg />
                        </div>
                        <span className="font-blue ml-[21px]">Панель</span>
                    </div>
                </div>
                <div className="content__right bg-blue-100 relative">
                    <SettingsSvg
                        onClick={() => setIsMenuShown((prev) => !prev)}
                    />
                    {isMenuShown && (
                        <div className="absolute right-7 bottom-7 h-[90vh] w-[400px] bg-white z-50 shadow-lg rounded-xl overflow-y-scroll scroll-body">
                            <div
                                className="p-5 h-[90vh] w-[400px]"
                                onDragOver={dragOverHandler}
                                onDrop={dropHandler}
                            >
                                {onMenuItems.map((id) => (
                                    <div
                                        draggable
                                        onDragStart={() => dragStartHandler(id)}
                                        onDragEnd={dragEndHandler}
                                        className="cursor-grab mb-5 user-select-none"
                                    >
                                        <DragItem id={id} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div
                        className="widget-grid h-[100%] p-[20px]"
                        onDragOver={dragOverHandler}
                        onDrop={dropHandler}
                    >
                        {onBoardItems.map((id) => (
                            <div
                                draggable
                                onDragStart={() => dragStartHandler(id)}
                                onDragEnd={dragEndHandler}
                                className="cursor-grab mb-5 user-select-none"
                            >
                                <DragItem id={id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
