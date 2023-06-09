import React, { DragEvent } from 'react';
import ChartWidget from './ChartWidget';
import TableWidget from './TableWidget';
import RoundWidget from './RoundWidget';

interface Props {
    id: number;
    dragStartHandler: (id: number | null) => void;
    dragEndHandler: (event: DragEvent<HTMLDivElement>) => void;
}

const DragItem: React.FC<Props> = (props) => {
    

    return (
        <div
            className="mb-5"
            draggable={true}
            onDragStart={() => props.dragStartHandler(props.id)}
            onDragEnd={(event) => props.dragEndHandler(event)}
        >
            {props.id === 1 && <ChartWidget />}
            {props.id === 2 && <TableWidget />}
            {props.id === 3 && <RoundWidget />}
        </div>
    );
};

export default DragItem;
