import contact from "../assets/contact.svg";
import ContactForm from "../components/contact/ContactForm";
const Contact = () => {
    return (
        <div className="mt-32 font-garamond">
            <h2 className="font-bold font-[Poppins] text-[40px] text-center">
                Contact us
            </h2>
            <p className="text-center text-[#717171] text-lg">
                Any question or remarks? Just write us a message!
            </p>
            <div className="flex bg-white lg:justify-start justify-center rounded-xl flex-wrap sm:px-4 py-4 screen my-8 sm:mx-6">
                <img
                    className="xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[400px] max-w-[300px]"
                    src={contact}
                    alt=""
                />
                <ContactForm />
            </div>
        </div>
    );
};
export default Contact;
