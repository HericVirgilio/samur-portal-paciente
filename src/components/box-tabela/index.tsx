import { ReactNode } from "react";

export default function BoxTabela(props: {titulo:string; children?: ReactNode;}) {
    return(
        <div style={{ backgroundColor: "var(--branco)", width: "95vw", margin: "20px auto", padding: "20px 0" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "20px" }}>{props.titulo}</h2>

        </div>
    )
}