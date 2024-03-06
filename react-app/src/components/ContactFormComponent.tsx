import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { BUTTON_TYPE_ONE } from "../constants";
import React from "react";

export default function ContactFormComponent(): ReactElement {
    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const validateValues = (inputValues: {[key: string]: string}) => {
        let errors_tmp = {
            name: "",
            email: "",
            message: ""
        };
        if (!inputValues.name.match(/^[A-Za-zŽžÀ-ÿ]+$/)) {
            errors_tmp.name = "Invalid character in name.";
        }

        if (!inputValues.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errors_tmp.email = "Invalid E-Mail adress.";
        }

        if (inputValues.message.length > 10) {
            errors_tmp.message = "Message exceeds limit.";
        }
        let key: keyof typeof errors;
        for (key in errors) {
            console.log(key);
            setErrors({ ...errors, [key]: errors_tmp[key]})
        };

    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let validForm = true;
        let key: keyof typeof errors;
        for (key in errors) {
            if (errors[key]) {
                //console.log(errors[key]);
                validForm = false;
            };
        };
        console.log(errors);
        validForm ? console.log(inputFields) : console.log("WRONG!!!")
    };
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) { 
        setInputFields({ ...inputFields, [e.target.name]: e.target.value});
    }

    React.useEffect(() =>{
        let errors_tmp = {
            name: "",
            email: "",
            message: ""
        };
        if (!inputFields.name.match(/^[A-Za-zŽžÀ-ÿ]+$/) && inputFields.name.length > 0) {
            errors_tmp.name = "Invalid character in name.";
        }

        if (!inputFields.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && inputFields.email.length > 0) {
            errors_tmp.email = "Invalid E-Mail adress.";
        }

        if (inputFields.message.length > 10 && inputFields.message.length > 0) {
            errors_tmp.message = "Message exceeds limit.";
        }
        setErrors({ name: errors_tmp.name, email: errors_tmp.email, message: errors_tmp.message });
    }, [inputFields]);

    return(
        <form onSubmit={handleSubmit} className="bg-white">
            <label>First Name</label>
            <input 
                type="text"
                name="name"
                placeholder="Type here" 
                className="input bg-white input-bordered w-full max-w-xs"
                defaultValue={inputFields.name} 
                onChange={handleChange} 
                required 
            />
            {errors.name ? (
                <p className="error">
                    {errors.name}
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