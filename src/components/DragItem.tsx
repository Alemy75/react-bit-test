import React from 'react';
import ChartWidget from './ChartWidget';
import TableWidget from './TableWidget';
import RoundWidget from './RoundWidget';

interface Props {
    id: number;
}

const DragItem: React.FC<Props> = (props) => {
    

    return (
        <div>
            {props.id === 1 && <ChartWidget />}
            {props.id === 2 && <TableWidget />}
            {props.id === 3 && <RoundWidget />}
        </div>
    );
};

export default DragItem;
