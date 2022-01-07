import React from 'react'

const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimientos de Pacientes</h2>
            <p className='text-lg mt-5 text-center'>
                Añade Pacientes y {''}
                <span className='text-indigo-500 font-bold'>Administralos</span>
            </p>

            <form className='bg-white shadow-md rounded-xl py-10 px-5 mt-5 mb-10'>
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>

                    <input
                        id='mascota' 
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
                    />
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>

                    <input
                        id='propietario' 
                        type="text"
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
                    />
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>

                    <input
                        id='email' 
                        type="email"
                        placeholder='email de contacto'
                        className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>

                    <input
                        id='alta' 
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
                    />
                </div>
                
                <div>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>

                    <textarea
                        id='sintomas' 
                        placeholder='Describe los sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
                    />
                </div>

                <input 
                    type="submit" 
                    className='bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mt-5 rounded-xl'
                />
            </form>
        </div>
    )
}

export default Formulario
