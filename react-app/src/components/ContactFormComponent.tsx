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

    const messageCharLimit = 800;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let validForm = true;
        let key: keyof typeof errors;
        for (key in errors) {
            if (errors[key]) {
                validForm = false;
            }
        }
        if (validForm) {
            console.log("Valid form:");
            console.log(inputFields);
         }
         else { 
            console.log("Non valid form.");
            console.log(errors);
         }
    };
    
    function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) { 
        setInputFields({ ...inputFields, [e.target.name]: e.target.value});
    }

    React.useEffect(() =>{
        let errors_tmp = {
            name: "",
            email: "",
            message: ""
        };
        if (!inputFields.name.match(/^[A-Za-zŽžÀ-ÿ\s\-]+$/) && inputFields.name.length > 0) {
            errors_tmp.name = "Invalid character in name.";
        }

        if (!inputFields.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && inputFields.email.length > 0) {
            errors_tmp.email = "Invalid E-Mail adress.";
        }

        if (inputFields.message.length > messageCharLimit && inputFields.message.length > 0) {
            errors_tmp.message = "Message exceeds limit.";
        }
        setErrors({ name: errors_tmp.name, email: errors_tmp.email, message: errors_tmp.message });
    }, [inputFields]);

    return(
        <div className="bg-white bg-opacity-95 rounded-[10px] shadow border-2 border-zinc-300">
            <form onSubmit={handleSubmit} className="bg-white">
                <div className="flex flex-col space-y-8 py-10 px-12 pb-10">
                    <div className="flex flex-row space-x-36">
                        <div className="flex flex-col space-y-2">
                            <label>Name</label>
                            <input 
                                type="text"
                                name="name"
                                placeholder="Type here" 
                                className="input bg-white input-bordered border-zinc-300 w-full max-w-xs"
                                defaultValue={inputFields.name} 
                                onChange={handleChange} 
                                required 
                            />
                            {errors.name ? (
                                <p className="error text-red-400">
                                    {errors.name}
                                </p>
                                ) : null}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>E-Mail</label>
                            <input 
                                type="text"
                                name="email"
                                placeholder="Type here" 
                                className="input bg-white input-bordered border-zinc-300 w-full max-w-xs"
                                defaultValue={inputFields.email} 
                                onChange={handleChange} 
                                required 
                            />
                            {errors.email ? (
                                <p className="error text-red-400">
                                    {errors.email}
                                </p>
                                ) : null}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Message</label>
                        <textarea
                            name="message"
                            className="textarea bg-white textarea-bordered border-zinc-300 w-full h-48" 
                            placeholder={"Max length " + messageCharLimit + " characters"}
                            defaultValue={inputFields.message} 
                            onChange={handleChange} 
                            required 
                        />
                        {(inputFields.message.length <= messageCharLimit) ? 
                            (<p>
                                {(messageCharLimit - inputFields.message.length) + " characters left"}
                            </p>) : 
                            <p className="error text-red-400">
                                {errors.message}
                            </p> }
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="btn btn-wide bg-fuchsia-950 text-white hover:bg-fuchsia-800 active:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}