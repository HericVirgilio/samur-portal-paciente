import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { CheckboxDemo } from "./checkbox"
import { useState } from "react"

export function AlertDialogDemo(props: {objeto: string}) {

    const [checkbox, setCheckbox] = useState<boolean>(false)

    const HabilitarCheckbox = () => {
        setCheckbox(true)     
    }

    const DesabilitarCheckBox = () => {
        setCheckbox(false)
    }
    
    return (
        <AlertDialog>
            <div style={{display: "flex"}} >
                <AlertDialogTrigger asChild style={{width: "20px", height: "20px", backgroundColor: "transparent", border: "none"}}>
                    <Button variant="outline"><CheckboxDemo habilitado={checkbox} /></Button>
                </AlertDialogTrigger>
                <p>{props.objeto}</p>
            </div>
            <AlertDialogContent style={{width: "90vw"}}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Leu e aceita a política de privacidade?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Aceito compartilhar dados
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={DesabilitarCheckBox}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={HabilitarCheckbox}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
