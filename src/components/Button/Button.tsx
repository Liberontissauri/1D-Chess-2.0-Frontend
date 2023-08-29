
export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} type={props.inputType} className={`
        ${props.className} ${generateButtonColors(props)} ${generateButtonSizes(props)} 
            flex flex-row justify-center items-center text-white border-none rounded font-raleway font-semibold align-top transition duration-100 hover:scale-[103%]
        ` }>
            {props.text}
        </button>
    )
}

interface ButtonProps {
    text: string,
    disabled: boolean,
    type: ButtonTypes,
    size: ButtonSizes,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    className: string,
    inputType: "button" | "submit" | "reset"
}

export enum ButtonTypes {
    normal,
    danger,
}

function generateButtonColors (props: ButtonProps) {
    const DISABLED_STYLE = "";
    const NORMAL_STYLE = "bg-green-1";
    const DANGER_STYLE = "bg-red-2";


    if (props.disabled) return "";
    switch (props.type){
        case ButtonTypes.normal: return NORMAL_STYLE;
        
        case ButtonTypes.danger: return DANGER_STYLE;
    }
}

export enum ButtonSizes {
    xs,
    s,
    m,
    l,
    xl,
    custom
}

function generateButtonSizes(props: ButtonProps) {
    const XS_STYLE = "px-9 py-1";
    const S_STYLE = "px-9 py-2";
    const M_STYLE =  "px-9";
    const L_STYLE = "px-9";
    const XL_STYLE = "px-9";

    switch(props.size) {
        case ButtonSizes.xs: return XS_STYLE;
        case ButtonSizes.s: return S_STYLE;
        case ButtonSizes.m: return M_STYLE;
        case ButtonSizes.l: return L_STYLE;
        case ButtonSizes.xl: return XL_STYLE;
        case ButtonSizes.custom: return "";
    }
} 