import React,{useState,useEffect} from "react";
import Switch from "@/Components/UI/Switch/Switch";
import Input from "@/Components/UI/Input/Input";
import Button from "@/Components/UI/Button/Button";


const AddNewOffer = ({onClose,onSubmit}) => {
const [isEnabled,setIsEnabled] = useState()






const toggleActiceCode = () => {
    setIsEnabled(!isEnabled)



}

    return (
        
        <div className="flex flex-col justify-between items-start gap-3 py-3 px-4">
            <div className="w-full flex justify-start items-center ">
                <span className="font-bold text-lg">ساخت کد تخفیف جدید</span>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="code">کد تخفیف</label>
                <Input id="code" type="text" placeholder="freedom1"/>
            </div>
            <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-2 gap-2">
                <div className="">
                    <label htmlFor="percent">درصد تخفیف</label>
                    <Input type="number" placeholder="20" min="0"/>
                </div>
                <div className="">
                    <label htmlFor="limit">تعداد</label>
                    <Input type="number" placeholder="100" min="0"/>
                </div>
            </div>
            <div className="expire date w-full">
              <label htmlFor="expiration-date">تاریخ انقضا</label>
              <Input type="date" placeholder="18/6/1405"/>
            </div>
            <div className="w-full flex justify-between items-center gap-3 border border-dark-border-soft py-3 px-4 rounded-md">
                <div className="flex flex-col">
                 <span>فعال</span>
                <span>کد را فعال یا غیر فعال کنید</span>
                </div>
                <div>
                    <Switch enabled={isEnabled} onToggle={toggleActiceCode}/>
                </div>
            </div>
            <div className="w-full flex justify-start items-center gap-3 py-3 px-4">
                <Button variant="primary">بساز</Button>
                <Button variant="neutral" onClick={() => onClose()}>لغو</Button>
            </div>

        </div>
     
    )



}


export default AddNewOffer;