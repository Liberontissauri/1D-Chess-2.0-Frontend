import Button, { ButtonSizes, ButtonTypes } from "@/components/Button/Button";
import Dialog, { DialogType } from "@/components/Dialog/Dialog";
import Input from "@/components/Input/Input";
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    return (
    <div className="min-w-max min-h-screen bg-dark-grey-3 flex flex-col justify-center items-center">
        <Dialog type={DialogType.confirmDialog} visible={visible}
        prompt="This is a Test"
        buttonFirstText="Ok"
        buttonFirstOnClick={e => {setVisible(false)}}
        />
        <form className=" bg-dark-grey-2 flex flex-col justify-center items-center px-5 py-10 md:px-14 md:py-11 drop-shadow-left-m">
            <h1 className="mb-7 font-raleway font-semibold text-xl text-green-1">Login</h1>
            <Input name="username" inputType="text" className="mb-5" text={username} placeholder="Username" onChange={e => {}}></Input>
            <Input name="password" inputType="password" className="mb-7" text={password} placeholder="Password" onChange={(e) => {}}></Input>
            <Button inputType="button" text="Login" type={ButtonTypes.normal} disabled={false} className="" size={ButtonSizes.s} onClick={(e) => {setVisible(true)}}/>
        </form>
    </div>
    )
}