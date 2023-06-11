import { DragEvent, useState } from 'react';
import SettingsSvg from './assets/svg/SettingsSvg';
import DragItem from './components/DragItem';
import Navbar from './components/Navbar';
import Panel from './components/Panel';

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
            <Navbar />
            <div className="content">
                <Panel />
                <div className="content__right bg-blue-100 relative">
                    <SettingsSvg
                        onClick={() => setIsMenuShown((prev) => !prev)}
                    />
                    {isMenuShown && (
                        <div className="absolute popup-widgets bg-white z-50 shadow-lg rounded-xl scroll-body">
                            <div
                                className="p-5 h-[90vh]"
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
