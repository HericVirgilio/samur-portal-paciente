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
            <div style={{display: "flex"}}>
                <AlertDialogTrigger asChild style={{width: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <Button variant="outline"><CheckboxDemo habilitado={checkbox} /></Button>
                </AlertDialogTrigger>
                <p>{props.objeto}</p>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={DesabilitarCheckBox}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={HabilitarCheckbox}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
