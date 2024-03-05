import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { BUTTON_TYPE_ONE } from "../constants";

export default function ContactFormComponent(): ReactElement {
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const validateValues = (inputValues: {[key: string]: string}) => {
        setErrors({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });

        if (!inputValues.firstName.match(/^[A-Za-zŽžÀ-ÿ]+$/)) {
            setErrors({ ...errors, ["firstName"]: "Invalid character in name."});
        }

        if (!inputValues.lastName.match(/^[A-Za-zŽžÀ-ÿ]+$/)) {
            setErrors({ ...errors, ["lastName"]: "Invalid character in name."});
        }

        if (!inputValues.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors({ ...errors, ["email"]: "Invalid E-Mail adress."});
        }

        if (inputValues.message.length > 10) {
            setErrors({ ...errors, ["message"]: "Message exceeds limit."});
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateValues(inputFields);
    };
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) { 
        setInputFields({ ...inputFields, [e.target.name]: e.target.value});
    }


    return(
        <form onSubmit={handleSubmit} className="bg-white">
            <label>First Name</label>
            <input 
                type="text"
                name="firstName"
                placeholder="Type here" 
                className="input bg-white input-bordered w-full max-w-xs"
                defaultValue={inputFields.firstName} 
                onChange={handleChange} 
                required 
            />
            {errors.firstName ? (
                <p className="error">
                    {errors.firstName}
                </p>
                ) : null}
            <label>Last Name</label>
            <input 
                type="text"
                name="lastName"
                placeholder="Type here" 
                className="input bg-white input-bordered w-full max-w-xs"
                defaultValue={inputFields.lastName} 
                onChange={handleChange} 
                required 
            />
            {errors.lastName ? (
                <p className="error">
                    {errors.lastName}
                </p>
                ) : null}
            <label>E-Mail</label>
            <input 
                type="text"
                name="email"
                placeholder="Type here" 
                className="input bg-white input-bordered w-full max-w-xs"
                defaultValue={inputFields.email} 
                onChange={handleChange} 
                required 
            />
            {errors.email ? (
                <p className="error">
                    {errors.email}
                </p>
                ) : null}
            <label>Message</label>
            <input 
                type="text"
                name="message"
                placeholder="Type here" 
                className="input bg-white input-bordered w-full max-w-xs"
                defaultValue={inputFields.message} 
                onChange={handleChange} 
                required 
            />
            {errors.message ? (
                <p className="error">
                    {errors.message}
                </p>
                ) : null}
            <button className={BUTTON_TYPE_ONE}>Submit</button>
        </form>
    );
}