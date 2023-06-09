import { useGetTableValueQuery } from '../store/widget.api';
import { TableItem } from '../types/widget.types';

const TableWidget = () => {
    const { data, isSuccess } = useGetTableValueQuery();
    console.log(data);

    return (
        <div className="aspect-square cursor-pointer w-[600px] max-h-[400px] max-w-[100%] max-h-[100%] bg-white shadow-lg rounded-xl scroll-body relative ">
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
