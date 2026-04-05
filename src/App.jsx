import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
// import Footer from "./component/Footer"
import Models from "./component/Models"
import Cart from "./component/Cart"
import BannerSlide from "./component/BannerSlide"

import { useState } from "react"
import AccountSection from "./component/AccountSection"
import PriceSection from "./component/PriceSection"



const getModels = async () => {
  const res = await fetch("/modelsdata.json")
  return res.json()
}

const modelPromise = getModels()
function App() {

  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);



  return (
    <>
      <NavBar />
      <Banner />
      <BannerSlide />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center m-10 bg-transparent">

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "model" ? "tab-active bg-linear-to-r from-violet-500 to-purple-500 text-white" : "bg-white text-black"
            }`}
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "cart" ? "tab-active bg-linear-to-r from-violet-500 to-purple-500 text-white" : "bg-white text-black border-black"
            }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "model" && <Models modelPromise={modelPromise}
        carts={carts} setCarts={setCarts} className="" />}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      <AccountSection />
      <PriceSection />

    </>
  )
}

export default App
