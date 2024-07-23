import { socket } from '@/utils/socket';
import { useEffect, useState } from 'react';
import _ from 'lodash';

interface Order {
    _id: string;
    customer: string;
    address: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

const GET_ORDERS_URL = 'http://localhost:3001/order';
const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(GET_ORDERS_URL);
            const data: Order[] = await response.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    useEffect(() => {
        socket.on('order-added', (newData: Order) => {
            setOrders((prevData) =>
                _(prevData)
                    .keyBy('_id')
                    .merge(_.keyBy([newData], '_id'))
                    .values()
                    .value(),
            );
        });
    }, []);

    return {
        orders,
    };
};

export default useOrder;
