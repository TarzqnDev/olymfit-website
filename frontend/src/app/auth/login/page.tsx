'use client'

import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('http://192.168.0.23:5000/api/auth/login', {
            email, password
        });

        router.push('/dashboard');
    }

    return(
        <div className="flex h-screen">
            <div className="w-3/5 bg-(--light-gray-shade)">

            </div>

            <div className="w-2/5 flex justify-center">
                <div className="w-3/5 mt-20">
                    <div className="mb-8">
                         <h1 className="font-bold text-3xl">LOGIN TO OLYMFIT</h1>
                         <span>Welcome back! Lets crush your fitness goals together</span>
                    </div>

                    <form onSubmit={handleLogin}>
                        <InputField 
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <InputField 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <p className="text-center mb-4">
                             <Link href="/" className="font-bold underline">Forgot Password?</Link>
                        </p>

                        <Button type="submit">
                            LOGIN
                        </Button>
                    </form>

                    <p className="text-center mt-4">Dont have an account? <Link href="/auth/register" className="font-bold underline">Register</Link></p>
                </div>
            </div>
        </div>
    )
}