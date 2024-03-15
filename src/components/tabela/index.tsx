import "./style.css"
import { GenericoInterfaceTabelaAgendamento } from "@/interface/Agendamento.interface"
import HeaderTable from "../cabecalho-tabela"
import TabelaLinha from "../tabela-linha"
export default function Tabela(props: { titulo: string, objeto: GenericoInterfaceTabelaAgendamento[] }) {
    return(
        <div>
          <div className="BackGroundTabela">
            <div className="TituloDaTabela">
                <h3>Meus agendamentos</h3>
            </div>
              <div className="ContainerConteudoTabela">
                  <HeaderTable/>
                  {props.objeto.map((item) =>
                    <TabelaLinha key={item.key} objeto={item}/>
                  )}
              </div>
          </div>
        </div>
    )
}