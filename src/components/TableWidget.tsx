import { useEffect } from 'react';
import { useGetTableValueQuery } from '../store/widget.api';
import { TableItem } from '../types/widget.types';

const TableWidget = () => {
    const { data, isSuccess, refetch } = useGetTableValueQuery();
    console.log(data);

    useEffect(() => {
        const pollingInterval = 60000;
        let timerId: number;

        const pollData = () => {
            refetch();

            timerId = setTimeout(pollData, pollingInterval);
        };

        pollData();
    }, []);


    return (
        <div className="aspect-square cursor-pointer card-size bg-white shadow-lg rounded-xl scroll-body relative ">
            <table className="iksweb">
                <thead className=''>
                    <tr>
                        <th>Изменение</th>
                        <th>Наст. значение</th>
                        <th>Пред. значение</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {isSuccess &&
                        data.map((item: TableItem) => (
                            <tr>
                                <td>{item.change}</td>
                                <td>{item.currentValue}</td>
                                <td>{item.prevValue}</td>
                                <td>{item.timestep}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWidget;
