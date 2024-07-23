import OrdersList from '@/components/OrderList';

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-2xl text-center mt-3">Orders</h1>
            <OrdersList />
        </>
    );
}
