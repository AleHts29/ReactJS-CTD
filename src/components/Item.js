
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React, { useState } from "react"




export default function Item({ product, stock, event }) {

  const [stockItems, setStockItems] = useState(stock)
  // const [countItems, setCountItems] = useState(1)


  // event(countItems)

  const substraction = () => {
    setStockItems(stockItems - 1)
    // setCountItems(countItems + 1)
    event(+1)
  }


  return (
    < div className='producto' >
      <div className='divImg'>
        <img src={product.img} alt={product.nombre}></img>
      </div>
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <h5>En Stock {stockItems > 0 ? stockItems : <span>{"Agotado"}</span>}</h5>
      {stockItems > 0 ?
        <button onClick={substraction}>COMPRAR</button> :
        <button disabled>COMPRAR</button>}
    </div >


  )
}
