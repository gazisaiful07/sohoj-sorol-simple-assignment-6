import React from "react";
import { toast } from "react-toastify";
const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successful")
    };

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.success("Item Deleted!")
    }
    return (
        <div className="max-w-7xl mx-auto mb-10">

            <h1 className="text-2xl font-bold">Your Cart</h1>
            {
                carts.length === 0 ? <p className=" text-center font-bold text-2xl p-10">Cart is empty</p> :
                    <>
                        <div className="space-y-5 mt-5 mb-5">
                            {
                                carts.map(item => <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3" key={item.id}>
                                    <div className="flex items-center">
                                        <div>
                                            <img className="h-20 w-20 object-contain" src="{item.image}" alt="" />
                                        </div>
                                        <div className="pl-10 items-center">
                                            <div>
                                                <h2 className="text-2xl "> {item.title}</h2>
                                            </div>
                                            ${item.price}
                                        </div>
                                    </div>

                                    <button onClick={() => handleDelete(item)} className=" cursor-pointer rounded-full bg-transparent border-0 text-red-500 pl-10">Remove</button>

                                </div>)
                            }
                        </div>
                        <div className="flex justify-between text-2xl  font-bold">
                            <div className="font-light">Total</div>
                            <div>$ {totalPrice}</div>
                        </div>
                        <button onClick={handlePayment} className=" w-full bg-linear-to-r from-violet-500 to-purple-500 text-2xl font-bold text-white mt-5 rounded-full py-3">Proceed to Checkout</button></>
            }


        </div>
    );
};

export default Cart;