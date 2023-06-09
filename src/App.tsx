import { DragEvent, useState } from 'react';
import LogoSvg from './assets/svg/LogoSvg';
import PanelSvg from './assets/svg/PanelSvg';
import SettingsSvg from './assets/svg/SettingsSvg';
import DragItem from './components/DragItem';

function App() {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const [draggedItem, setDraggedItem] = useState<null | number>(null);

    const [onMenuItems, setOnMenuItems] = useState([1, 2, 3]);

    const [onBoardItems, setOnBoardItems] = useState([]);

	const dragStartHandler = (id: null | number) => {
        setDraggedItem(id);
    };

    const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
    };

    const dropHandler = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
        draggedItem !== null && onMenuItems.includes(draggedItem)
            ? () => {
                  onMenuItems.filter((item) => item !== draggedItem);
              }
            : setOnMenuItems(
                  onBoardItems.filter((item) => item !== draggedItem)
              );
    };

	const dragEndHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDraggedItem(null);
    };

    return (
        <>
            <nav className="h-[90px] border-b border-gray-100 z-20">
                <div className="flex h-[100%] items-center ml-[24px]">
                    <LogoSvg />
                    <h1 className="ml-[12px]">Энергия</h1>
                </div>
            </nav>
            <div className="flex">
                <div className="h-[100vh] w-[20%] shadow-sm bg-white inline-block z-10">
                    <div className="h-[45px] flex bg-blue-100 mt-[34px] items-center border-left-blue cursor-pointer">
                        <div className="ml-[33px]">
                            <PanelSvg />
                        </div>
                        <span className="font-blue ml-[21px]">Панель</span>
                    </div>
                </div>
                <div className="bg-blue-100 min-h-[100vh] w-[80%] relative">
                    <SettingsSvg
                        onClick={() => setIsMenuShown((prev) => !prev)}
                    />
                    {isMenuShown && (
                        <div className="absolute right-5 top-16 min-h-[80vh] w-[400px] bg-white z-50 shadow-lg rounded-xl">
                            <div
                                className="p-5"
                                onDragOver={(event) => dragOverHandler(event)}
                                onDrop={(event) => dropHandler(event)}
                            >
                                {onMenuItems.map((id) => (
                                    <DragItem
                                        id={id}
                                        dragStartHandler={dragStartHandler}
                                        dragEndHandler={dragEndHandler}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="widget-grid h-[100%] p-[20px]">
                        {onBoardItems.map((id) => (
                            <DragItem
                                id={id}
                                dragStartHandler={dragStartHandler}
                                dragEndHandler={dragEndHandler}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
