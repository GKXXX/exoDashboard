import { Field, Form, Formik } from 'formik'
import { useContext,useCallback } from 'react'
import AppContext from '../src/components/AppContext'
import Header from '../src/components/header'
import * as Yup from 'yup'

const showErrorForm = Yup.object().shape({
  amount: Yup.number().typeError('Le champ doit être un nombre.').required().test((amount) => amount != 0),
  description: Yup.string().required()
})

const Add = () => {
  const {addEntry} = useContext(AppContext)

  const handleFormSubmit = useCallback(
    (values ,{resetForm}) => {
      console.log(values)
      addEntry({
        amount: Number(values.amount),
        description: values.description,
      })
      resetForm()

      return true
    },
    [addEntry]
  )
  return (
    <div className='w-3/4 mx-auto min-h-screen'>
      <Header pageTitle='Ajouter'></Header>
      <div className='w-full mx-auto '>
        <Formik
          initialValues={{amount:0, description:''}}
          validationSchema={showErrorForm}
          onSubmit={handleFormSubmit}
          >
            {({errors,touched}) => (
              <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' >
                <div className='mb-4'>
                  <label htmlFor='amout' className='block text-gray-700 text-sm font-bold mb-2'>
                    Montant
                  </label>
                  <Field  id='amount' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-1' type='number' name='amount' />
                  {touched.amount && errors.amount && ( <div >{errors.amount}</div> )}
                </div>
                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2 p-2' htmlFor='description'>
                  Description
                </label>
                <Field as='textarea' id='description' className='w-full' name='description' rows='3'></Field>
                {touched.description && errors.description && ( <div >{errors.description}</div> )}
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white rounded'>Ajouter</button>
            </Form>
            )}
            
        </Formik>
        
      </div>
    </div>
  )
}

export default Add