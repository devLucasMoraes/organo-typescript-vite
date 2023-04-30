import Colaborador from '../Colaborador'
import './Time.css'

import { IColaborador } from '../../shared/interfaces/IColaborador'

interface TimeProps {
    nome: string
    corPrimaria: string
    corSecundaria: string
    colaboradores: IColaborador[]
}

const Time = ({colaboradores, corPrimaria, corSecundaria, nome} :TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador =>
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                     /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time