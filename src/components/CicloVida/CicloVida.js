
import { useEffect, useState } from "react"


const CicloVida = ({validacion}) => {
    const [contador, setContador] = useState(0);
    const url = 'htttp//:dominio';

    const aumentar = () => {
    setContador(contador+1);
    }

    const mouseMove = ({x,y}) => {
        console.log(x,y)
        
    }

    //antes de desmontar mi componente

    useEffect(()=>{
        window.addEventListener('mousemove', mouseMove)
        return () =>{
            window.removeEventListener('mousemove', mouseMove)
            console.log('yo me ejecuto cuando se desmonta el componente')
        }
    })
    
    //componente montado
    useEffect(() => {
        //fetch peticion
        
        console.log('yo me ejecuto una vez que el componente se monto')
    },[])

    //Cuando se actualizan las props
    useEffect(()=>{
        console.log('yo me ejecuto cuando se actualzan las props')
    },[validacion])
    
    //Cuando se actualizan el state
    useEffect(()=>{
        console.log('me ejecuto al actualizar el state')
    },[contador])

    //antes de montar el componente
    console.log('yo me ejecuto antes que el componente se monte')   
    return (
        <div>{
            validacion === true ?
                    (<h2>Verdadero</h2>)
                    :(<h2>Falso</h2>)
                
            }
        </div>
  )}

export default CicloVida