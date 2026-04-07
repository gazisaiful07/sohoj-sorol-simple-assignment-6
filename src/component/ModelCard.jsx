import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubscription = () => {
        setIsSubscribed(true)

        const isFound = carts.find(item => item.id === model.id)
        if(isFound) {
            toast.error("Item already Exist")
            return
        }



        setCarts([...carts, model])
        toast.success("Item Added Successful!")

    }
    return (
        <div className="shadow rounded-lg  border border-zinc-100">
            <div>
                
            </div>
            
            <div className="flex justify-between items-center h-30 py-2 px-4">
                <img className=" h-35 w-30 object-center py-5 rounded-full" src={model.image} />
                {/* <p className="bg-purple-200 rounded-full px-3 py-1" >{model.status}</p> */}
                <div class="relative -top-10 -translate-x-2">
                        <span class="bg-purple-600 text-white text-sm px-4 py-1 rounded-full shadow">
                            {model.status}
                        </span>
                    </div>
            </div>
            <div className="p-4 space-y-3">
                
                <h2 className="text-2xl font-bold">{model.title}</h2>
                <p> {model.description} </p>
                <div className="text-2xl font-bold"> ${model.price}/month </div>
                <p> {model.features1} <br />{model.features2} <br />{model.features3} </p>
                <button onClick={handleSubscription} className="btn w-full  bg-linear-to-r from-violet-500 to-purple-500 rounded-full text-white p-6 "> {isSubscribed ? "Added to Cart" : "Buy Now"} </button>
            </div>


        </div>
    )
}

export default ModelCard;