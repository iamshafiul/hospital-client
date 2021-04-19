import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <OrderForm></OrderForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;