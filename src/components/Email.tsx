"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import emailjs from '@emailjs/browser';

interface formType {
    name: string,
    email: string,
    message: string
}
const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1)
}).required()

export default function Email() {
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm<formType>({ resolver: zodResolver(formSchema) });

    const submitForm: SubmitHandler<formType> = async (data) => {
        setLoading(true)
        await emailjs.send("service_bu50pze", "template_hchxibk", {
            from_name: data.name,
            from_email: data.email,
            message: data.message
        }, "jRopw-oAINAr_I1Ei").then(() => {
            setLoading(false);
            reset();
        }
        )
    }
    return (
        <section>
            <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16 ">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center ">Contact Me</h2>
                <form onSubmit={handleSubmit(submitForm)} className="space-y-8">
                    <div>
                        <label htmlFor="name" className={`block  mb-2 text-sm font-medium relative ${errors.name && "after:content-['*'] after:ml-1 after:absolute after:text-xl after:text-red-500"}`}>Name</label>
                        <input type="text" id="name" className={` block w-full p-3 text-sm text-black rounded-lg shadow-sm bg-gray-50 ${errors.name === undefined ? "border-2 border-transparent" : "border-2 border-red-500"}`} placeholder="What is your name" {...register("name")} />
                    </div>
                    <div>
                        <label htmlFor="email" className={`block mb-2 text-sm font-medium relative ${errors.email && "after:content-['*'] after:ml-1 after:absolute after:text-xl after:text-red-500"}`}>Your email</label>
                        <input type="email" id="email" className={`block w-full p-3 text-sm text-black rounded-lg shadow-sm bg-gray-50 ${errors.email === undefined ? "border-2 border-transparent " : "border-2 border-red-500"}`} placeholder="example@example.com"{...register("email")} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className={`block mb-2 text-sm font-medium relative ${errors.message && "after:content-['*'] after:ml-1 after:absolute after:text-xl after:text-red-500"}`}>Your message</label>
                        <textarea id="message" rows={6} className={` block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm  ${errors.message === undefined ? "border-2 border-transparent" : "border-2 border-red-500"}`} placeholder="Leave a message..." {...register("message")}></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" className="px-5 py-3 text-sm font-medium text-center rounded-lg sm:w-fit bg-slate-600 bg-opacity-30 hover:bg-opacity-50 ">{loading ? "Sending..." : "Send message"}</button>
                        <p className="flex items-center justify-center text-red-500">{Object.values(errors).at(0) && "* field is required"}</p>
                    </div>
                </form>
            </div>
        </section>

    );
}
