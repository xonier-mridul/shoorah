import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { RiBankLine } from "react-icons/ri";
import Apple from "../assets/ApplePay.png"
import GooglePay from "../assets/GooglePay.png"
import Greet from "../assets/last-icon.png"

const Plans = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(0);
  const [showFirst, setShowFirst] = useState(true)
  const [cardData, setCardData] = useState({
    cardholder:"",
    cardNumber:"",
    expiryMonth:"",
    expiryYear:"",
    cvv:""

  })

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const anyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    setSelected(anyChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (selected) {
      setShowFirst(false)
    }
  };

  const handlePopup = ()=>{
    setShowPaymentMethod(1)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setShowPaymentMethod(1)
  }



  const [selecting, setSelecting] = useState({});

  const handleCheckboxChanging = (method) => {
    setSelecting({
      apple: false,
      google: false,
      bank: false,
      [method]: true, 
    });
  };
  

  return (
    <>

      {/* Overlay */}
     {showPaymentMethod !== 0 && <div className="fixed top-0 left-0 w-full h-full z-30 bg-[#00000027]" onClick={()=>setShowPaymentMethod(0)}></div>}
      {/* Overlay end */}

      {/* Method Popup */}

     {showPaymentMethod === 1 && <div className="w-[692px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-2xl px-5 py-6 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold "> Payment methods</h2>
      <div className="flex flex-col gap-4">
        {/* Apple Pay */}
        <div className={`${selecting["apple"] ? "border-1 rounded-lg border-[#E7E8EA] p-4" : ""} flex justify-between items-center px-4`}>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={selecting["apple"]}
              onChange={() => handleCheckboxChanging("apple")}
            />
            <img
              className="object-contain border border-gray-300 p-1 py-1.5 rounded-sm"
              src={Apple}
              alt="apple"
            />
            <span className="text-sm text-slate-900 font-medium">
              Reuben Hale Applepay... 8473
            </span>
          </div>
          {selecting["apple"] && (
            <button
              className="border border-gray-300 rounded-full py-1 text-sm px-8"
              type="button"
            >
              Edit
            </button>
          )}
        </div>

        {/* Google Pay */}
        <div className={` ${selecting["google"] ? "border-1 rounded-lg border-[#E7E8EA] p-4" : ""} flex justify-between items-center px-4`}>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={selecting["google"]}
              onChange={() => handleCheckboxChanging("google")}
            />
            <img
              className="object-contain border border-gray-300 p-1 py-1.5 rounded-sm"
              src={GooglePay}
              alt="googlepay"
            />
            <span className="text-sm text-slate-900 font-medium">
              Google Pay
            </span>
          </div>
          {selecting["google"] && (
            <button
              className="border border-gray-300 rounded-full py-1 text-sm px-8"
              type="button"
            >
              Edit
            </button>
          )}
        </div>

        {/* Bank Transfer */}
        <div className={` ${selecting["bank"] ? "border-1 rounded-lg border-[#E7E8EA] p-4" : ""} flex justify-between items-center px-4`}>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={selecting["bank"]}
              onChange={() => handleCheckboxChanging("bank")}
            />
            <span className="border border-gray-300 px-2 py-0.5 rounded-sm">
              <RiBankLine />
            </span>
            <span className="text-sm text-slate-900 font-medium">
              Bank Transfer
            </span>
          </div>
          {selecting["bank"] && (
            <button
              className="border border-gray-300 rounded-full py-1 text-sm px-8"
              type="button"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <button className="border-1 rounded-full py-1.5 px-6 border-slate-900 cursor-pointer text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-all duration-300" onClick={()=>setShowPaymentMethod(2)}>Add a new card</button>
        <button disabled={!selecting["apple"] && !selecting["google"] && !selecting["bank"]} className="bg-indigo-600 disabled:bg-indigo-300 disabled:border-indigo-300 rounded-full py-1.5 border-1 cursor-pointer border-indigo-600 px-6  text-white" onClick={()=>setShowPaymentMethod(3)}> My Surveys</button>
      </div>
      </div> }
     

      {/* Card Detail Form */}

      {showPaymentMethod === 2 && <div className="w-[692px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-2xl px-6 py-6 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold "> Add a new card</h2>

         <button className="absolute top-4 right-4 cursor-pointer" onClick={()=>setShowPaymentMethod(1)}><FaXmark className="text-2xl"/></button>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="cardholder" className="font-semibold"> Cardholders Name </label>
            <input type="text" id="cardholder" name="cardholder" value={cardData.cardholder} onChange={handleChange} className="w-full p-2 border-[#e7e8ea] border-1 outline-none rounded-lg px-4 bg-zinc-100" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cardNumber" className="font-semibold"> Card Number </label>
            <input type="number" id="cardNumber" name="cardNumber" value={cardData.cardNumber} onChange={handleChange} className="w-full p-2 border-[#e7e8ea] border-1  outline-none rounded-lg px-4 bg-zinc-100" placeholder="0000-0000-0000-0000" />
          </div>
          <div className="flex gap-6 items-center justify-center">
            <div className="w-1/2 flex flex-col gap-2">
              <label className="font-semibold" htmlFor="expiryMonth"> Exp Month</label>
              <input type="number" id="expiryMonth" name="expiryMonth" value={cardData.expiryMonth} onChange={handleChange} className="w-full p-2 border-[#e7e8ea] border-1 outline-none rounded-lg px-4 bg-zinc-100" placeholder="00/00"/>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label className="font-semibold" htmlFor="expiryYear"> Exp Year</label>
              <input type="number" id="expiryYear" name="expiryYear" value={cardData.expiryYear} onChange={handleChange} className="w-full p-2 border-[#e7e8ea] border-1 outline-none rounded-lg px-4 bg-zinc-100" placeholder="0000"/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cvc" className="font-semibold"> CVC Number </label>
            <input type="text" id="cvc" name="cvc" cardData={cardData.cvc} onChange={handleChange} className="w-full p-2 border-[#e7e8ea] border-1 outline-none rounded-lg px-4 bg-zinc-100" placeholder="000" />
          </div>
          <button disabled={!cardData.cardholder || !cardData.cardNumber || !cardData.expiryMonth || !cardData.expiryYear || !cardData.cvc} className="bg-indigo-600 disabled:bg-indigo-300 disabled:border-indigo-300 rounded-full py-2 border-1 border-indigo-600 px-8  text-white w-fit mt-2 cursor-pointer">Add your card</button>
        </form>
      </div>}


      {/*Card Submit Popup */}

      {showPaymentMethod === 3 && <div className="w-[692px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-2xl px-6 py-16 flex items-center flex-col gap-6">
      <img className="w-20 h-20" src={Greet} alt="greet" />
      <p className="text-slate-900 text-center w-3/4">Your payment is currently under review. This process typically takes 24-48 hours. We’ll notify you as soon as it’s completed</p>
      <button className="text-center bg-indigo-600 rounded-full py-2 border-1 border-indigo-600 px-16  text-white w-fit mt-2 cursor-pointer" onClick={()=>navigate('/')}>Got it!</button>
      </div>}

      {/* Method Popup End */}
       
     {showFirst ? <div className="w-3/4 p-5 bg-white rounded-xl border-1 border-[#e7e8ea]">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-semibold">Select an add-on plan</h2>
          <Link className="text-[12px]"> Speak to sales? </Link>
        </div>
        <table className="w-full border-1 border-zinc-300 rounded-2xl main-radius ">
          <thead className="bg-neutral-100 rounded-tr-2xl">
            <tr className="">
              <th className="font-medium text-start p-2">
                How many employees do you wish to add to this plan?
              </th>
              <th className="flex justify-end p-2">
                <select
                  className="bg-white border-1 border-[#e8e9ea] rounded-sm outline-none p-2 w-28"
                >
                  <option value="" hidden>
                    00-000
                  </option>
                  <option value="001">001</option>
                  <option value="011">011</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {["Voice calls only", "Email support", "Live chat support"].map((plan, index) => (
              <tr key={index} className="border-zinc-300 border-1">
                <td className="px-3 py-4">
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="rounded-full"  value={plan} onChange={handleCheckboxChange} />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium">{plan}</h4>
                      <span className="text-zinc-600 text-sm">
                        24/7 advice line for immediate support.
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-end px-3 py-4">
                  <span className="font-semibold text-xl">---/yr</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-medium mt-5 mb-3">Extra add-on</h2>
        <div className="grid grid-cols-1 gap-2 rounded-2xl w-[367px]">
          {["Voice calls only", "Doctor’s advice"].map((addon, index) => (
            <div key={index} className="w-full flex gap-4 items-center bg-white p-4 pb-5 rounded-2xl border-[#E7E8EA] border-1">
              <div className="flex gap-3 items-center w-3/4">
                <input type="checkbox" className="rounded-full" onChange={handleCheckboxChange} />
                <div className="flex flex-col gap-1 ">
                  <h4 className="font-medium">{addon}</h4>
                  <span className="text-zinc-600 text-[12px]">
                    {addon === "Doctor’s advice"
                      ? "This add-on is available for all plans."
                      : "24/7 advice line for immediate support."}
                  </span>
                </div>
              </div>
              <div className="font-semibold text-2xl">£--</div>
            </div>
          ))}
        </div>

        <button
          disabled={!selected}
          className={`border-1 py-2 px-8 rounded-full mt-6 transition-all cursor-pointer ${
            selected
              ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
              : "bg-[#f6f6f6] text-[#cacaca] border-[#dddddd] cursor-not-allowed"
          }`}
          onClick={handleNext}
        >
          Upgrade plan
        </button>
      </div> :

 <div className="w-3/4 p-5 bg-white rounded-xl border-1 border-[#e7e8ea]">
      <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-semibold">Select an add-on plan</h2>
         
        </div>
        <div className=" border-1 flex gap-2 mb-7 border-indigo-50 bg-slate-50 p-2 rounded-lg w-[80%]">
        <AiOutlineExclamationCircle className="text-3xl"/> <p className="text-sm">This payment is an add-on and does not affect your existing Shoorah subscription. Regular subscription payments, such as monthly charges, will continue as usual.</p>
        </div>

        <table className="w-full border-1 border-zinc-300 rounded-2xl main-radius ">
          <thead className="bg-neutral-100 rounded-tr-2xl">
          <tr className="">
              <th className="font-medium text-start p-2">
                How many employees do you wish to add to this plan?
              </th>
              <th className="flex justify-end p-2">
                <select
                  className="bg-white border-1 border-[#e8e9ea] rounded-md outline-none p-2 w-28"
                >
                  <option value="" hidden>
                    20-30
                  </option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr  className="border-zinc-300 border-1">
          <td className="px-3 py-4">
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium">Voice call add-on</h4>
                      <span className="text-zinc-600 text-sm">
                        24/7 advice line for immediate support.
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-end px-3 py-4">
                  <span className="font-semibold text-xl">£60/yr</span>
                </td>
          </tr>
          </tbody>
        </table>
        <span className="w-full my-8 border-1 border-[#e7e8ea] flex"></span>
        <div className="grid grid-cols-1 gap-2 rounded-2xl w-[367px] mb-8">
        <div  className="w-full flex flex-col items-center bg-white  rounded-2xl border-[#E7E8EA] border-1">
          <div className="p-4 py-2 flex justify-between items-center w-full border-b-1 border-[#e7e8ea]">
              <h3 className=" font-semibold">Total Payment</h3>
              <span className="font-semibold">£14</span>
          </div>
          <div className="p-4 py-2 flex gap-3  items-center w-full">
             <input type="checkbox" /> <span className="text-sm font-medium">Auto Renew your plan</span>
          </div>
        </div>
        </div>
        <button className="bg-indigo-600 text-white rounded-full py-2 px-14 cursor-pointer" onClick={handlePopup}> Pay £250</button>
      </div>}
    </>
  );
};

export default Plans;
