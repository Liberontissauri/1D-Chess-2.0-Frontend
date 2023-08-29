import Button from "../Button/Button"
import { ButtonTypes, ButtonSizes } from "../Button/Button"

export default function Dialog(props: DialogProps) {
    return (
    <div className={`absolute ${selectVisibleStyle(props.visible)} top-0 left-0 w-screen min-h-screen flex justify-center items-center z-10`}>
        <div className="py-4 px-8 bg-dark-grey-2 drop-shadow-left-m flex flex-col">
            <div className="w-max h-1/2 mb-5"><h1 className="font-raleway font-semibold text-s text-white">{props.prompt}</h1></div>
            <div className="w-max h-1/2">{renderButtons(props)}</div>
        </div>
    </div>
    )
}


export enum DialogType {
    confirmDialog, // Single Green Button Dialog
    oppositeDialog // Green and Red Buttons Dialog
}

interface DialogProps {
    type: DialogType,
    visible: boolean,
    prompt: string,
    buttonFirstText: string,
    buttonFirstOnClick: React.MouseEventHandler<HTMLButtonElement>,
    buttonSecondText?: string,
    buttonSecondOnClick?: React.MouseEventHandler<HTMLButtonElement>,

}

function selectVisibleStyle(isVisible: boolean) {
    if (isVisible) return "visible"
    return "invisible"
}

function renderButtons(props: DialogProps) {
    switch (props.type) {
        case DialogType.confirmDialog: return <Button
                text={props.buttonFirstText} disabled={false} type={ButtonTypes.normal}
                size={ButtonSizes.xs} onClick={props.buttonFirstOnClick} className="" 
                inputType="button"
                
             />
    }
}