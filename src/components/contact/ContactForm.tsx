import { Radio } from "antd";
import { useState } from "react";

const ContactForm = () => {

    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="px-8 py-10 flex-1 relative">
            <div className="flex md:flex-nowrap gap-y-4 flex-wrap items-center justify-between w-full">
                <div className="flex flex-col sm:w-auto w-full">
                    <label htmlFor="" className="text-sm text-[#8D8D8D]">First Name</label>
                    <input type="text" className="mt-1 border-b border-b-[#8D8D8D] outline-none px-4 py-2" />
                </div>
                <div className="flex flex-col  sm:w-auto w-full">
                    <label htmlFor="" className="text-sm text-primaryColor">Last Name</label>
                    <input type="text" className="mt-1 border-b border-b-[#8D8D8D] outline-none px-4 py-2" />
                </div>
            </div>
            <div className="flex md:flex-nowrap gap-y-4 flex-wrap items-center justify-between mt-8">
                <div className="flex flex-col sm:w-auto w-full">
                    <label htmlFor="" className="text-sm text-[#8D8D8D]">Email</label>
                    <input type="email" className="mt-1 border-b border-b-[#8D8D8D] outline-none px-4 py-2" />
                </div>
                <div className="flex flex-col sm:w-auto w-full">
                    <label htmlFor="" className="text-sm text-primaryColor">Phone Number</label>
                    <input type="text" className="mt-1 border-b border-b-[#8D8D8D] outline-none px-4 py-2" />
                </div>
            </div>
            <div className="flex flex-col mt-8">
                <label htmlFor="" className="font-semibold mb-4 text-black">Select Subject?</label>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio className="text-black" value={1}>General Inquiry</Radio>
                    <Radio className="text-black" value={2}>General Inquiry</Radio>
                    <Radio className="text-black" value={3}>General Inquiry</Radio>
                    <Radio className="text-black" value={4}>General Inquiry</Radio>
                </Radio.Group>
            </div>
            <div className="flex flex-col mt-8">
                <label htmlFor="" className="text-sm text-[#8D8D8D]">Message</label>
                <input placeholder="write your message" type="text" className="mt-1 border-b border-b-[#8D8D8D] outline-none py-2" />
            </div>
            <div className="flex justify-end w-full">
                <button className="bg-primaryColor text-white rounded-md px-8 py-3 mt-6 ">
                    Send Message
                </button>
            </div>
        </div>
    )
}
export default ContactForm