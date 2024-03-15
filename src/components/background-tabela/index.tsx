import React from 'react';

export default function BackgroundTabela(props: { children: React.ReactNode; tituloTabela: string }) {
    return (
        <div style={{ backgroundColor: "var(--branco)", width: "90vw", margin: "20px auto", padding: "20px 0", border:" 1px solid #676767" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginBottom: "10px" }}>
                {props.tituloTabela}
            </h2>
            {props.children}
        </div>
    );
}
