// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera";
import Listado from './components/Listado'
import { useCountItemsComponent } from './hooks/useCountItemsComponent'

function App() {
  const { countItems, componentCount } = useCountItemsComponent()
  console.log(countItems);


  return (
    <div className="App">
      {/* Se debe pasar por medio de props la cantidad de items comprados */}
      <Cabecera coutItem={countItems} />

      <Listado event={componentCount} />
    </div>
  );
}

export default App;
