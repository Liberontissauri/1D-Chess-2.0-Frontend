
export default function Input(props: InputProps) {
    return (
        <input value={props.text} type={props.inputType} placeholder={props.placeholder} onChange={props.onChange} name={props.name} className={`${props.className}
            font-raleway font-semibold box-border px-5 py-2 rounded bg-light-grey-1 focus:outline-none focus:outline-green-1 focus:outline-1
        `}></input>
    )
}

interface InputProps {
    text: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    className: string,
    inputType: React.HTMLInputTypeAttribute,
    name: string,
}