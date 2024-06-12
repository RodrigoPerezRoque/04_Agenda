import ListItem from "./ListItem"

const agenda = [

  {
    nombre: 'Luis perez',
    correo: 'perez@gmail.com',
    número_telefónico: '4587123648',
    cargo: 'Zapatero'
  },

  {
    nombre: 'Giancarlo Escobar',
    correo: 'indi-05@gmail.com',
    número_telefónico: '1456987541',
    cargo: 'Cuernero profesional'
  },

  {
    nombre: 'Kira',
    correo: 'amoAL@gmail.com',
    número_telefónico: '2487517469',
    cargo: 'enemigo de L'
  }

]

function App() {

  return (
    
    <div> 
        <h1>Agenda Personal</h1>
        <hr />
        <ul>
          {
            agenda.map((agen)=>(
              <ListItem 
              key={agen.nombre}
              nombre={agen.nombre}
              correo={agen.correo}
              número_telefónico={agen.número_telefónico}
              cargo={agen.cargo}
              />
            ))
          }
        </ul>
      </div>
       
  )
}

export default App
