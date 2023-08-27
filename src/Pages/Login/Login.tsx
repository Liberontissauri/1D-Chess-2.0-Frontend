import Button, { ButtonSizes, ButtonTypes } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
    <div className="min-w-max min-h-screen bg-dark-grey-3 flex flex-col justify-center items-center">
        <div className=" bg-dark-grey-2 flex flex-col justify-center items-center px-14 py-11 drop-shadow-left-m">
            <h1 className="mb-7 font-raleway font-semibold text-xl text-green-1">Login</h1>
            <Input className="mb-5" text={username} placeholder="Username" onChange={(e) => {}}></Input>
            <Input className="mb-7" text={password} placeholder="Password" onChange={(e) => {}}></Input>
            <Button text="Login" type={ButtonTypes.normal} disabled={false} className="" size={ButtonSizes.s} onClick={(e) => {}}/>
        </div>
    </div>
    )
}