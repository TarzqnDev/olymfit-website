'use client'

import Button from "@/app/components/button";
import InputField from "@/app/components/inputField";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function RegisterPage() {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('http://192.168.0.23:5000/api/auth/register', {
            firstName, lastName, email, password
        });

        router.push('/auth/login');
    }

    return(
        <div className="flex h-screen">
            <div className="w-3/5 bg-(--light-gray-shade)">
                
            </div>

            <div className="w-2/5 flex justify-center">
                <div className="w-3/5 mt-20">
                
                    <div className="mb-8">
                        <h1 className="font-bold text-3xl">SIGNUP TO OLYMFIT</h1>
                        <span>Join the Olymfit community today and start your journey to better fitness</span>
                    </div>

                    <form onSubmit={handleRegister}>
                        <InputField 
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        
                        <InputField 
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />

                        <InputField 
                            type="email"
                            placeholder="Emaill Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <InputField 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <Button type='submit'>
                            SIGN UP
                        </Button>
                    </form>

                     <p className="text-center mt-4">
                        Already have an account? <Link href="/auth/login" className="font-bold underline">Login</Link>
                    </p>
                </div>

            </div>

        </div>
    )
}