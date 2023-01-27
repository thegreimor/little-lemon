import {useState, useEffect} from 'react';
import {useNavigate, Form, useActionData, redirect, useLoaderData} from 'react-router-dom'
import Error from './Error';
import { addBooking, callBooking } from '../data/book';
import '../style/Form.css'
import UserForm from './UserForm';


export async function loader({params}) {
  const book = await callBooking(params.bookId)
  if(Object.values(book).length === 0) {
      throw new Response('', {
          status:404,
          statusText: 'No hay Resultados'
      })
  }
  return book

  
}

export async function action({request, params}){
  const formData = await request.formData()


  const datos = Object.fromEntries(formData)
  

  // Validacion
  const errores =[]
  if(Object.values(datos).includes('')) {
      errores.push('Todos los campos son obligatorios')
  }

  // Retornar errores
  if(Object.keys(errores).length){
      return errores
  }
   
  await addBooking(params.bookId, datos)

  return redirect('/booking/confirm')
  
}


const FormBook = () => {
  const book = useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()
  
  


    return (
      <div className='formContainer'>
        <h1>Reserve a Table</h1>
        {errores?.length && errores.map(( error, i ) => <Error key={i}>{error}</Error> )}
        <Form
          method='post'
          noValidate
        >
          <UserForm
            book={book}
          />
          <button 
            type="submit"
            onClick={() => navigate(`/clients/${id}/nuevo`)}
          >
            Book
          </button>
        </Form>
      </div>
    );
};

export default FormBook;