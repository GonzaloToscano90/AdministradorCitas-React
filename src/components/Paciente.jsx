
import React  from "react"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const  {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas Eliminar este paciente?');

        if (respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className='mx-5 mb-5 bg-white shadow-md px-5 py-10 rounded-xl'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Nombre: {''}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Propietario: {''}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    E-mail: {''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Alta: {''}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Sintomas: {''}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>

                <div>
                    
                    <button 
                        type="button"
                        className="py-2 px-10 mr-5 mt-2 mb-3 bg-indigo-500  hover:bg-indigo-700 text-white font-bold uppercase rounded-xl "
                        onClick={()=> setPaciente(paciente)}
                        >Editar </button>
                            

                     <button 
                        type="button"
                        className="py-2 px-10 bg-red-600 mr-5 hover:bg-red-700 text-white font-bold uppercase rounded-xl "
                        onClick={handleEliminar}
                        >Eliminar </button>
                </div>
                
            </div>
    )
}

export default Paciente
