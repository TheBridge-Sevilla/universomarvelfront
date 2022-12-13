import './IniciarSesion.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'

function IniciarSesion() {
  return (
    <Form className='h-100 d-flex flex-column justify-content-center'>
      <h2 className='mb-5'>Iniciar sesion</h2>
      <Form.Group>
        <FloatingLabel label='Usuario' className='mb-3'>
          <Form.Control type='text' size='lg' placeholder='Usuario' />
        </FloatingLabel>
        <FloatingLabel label='Contraseña' className='mb-3'>
          <Form.Control type='password' size='lg' placeholder='Password' />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className='d-flex justify-content-between mt-3'>
        <Form.Check type='checkbox' id='remember-me' label='recuerdame' />
        <a id='forgot-password'>Contraseña olvidada?</a>
      </Form.Group>
      <Button size='lg' className='w-100 mt-5' variant='danger'>
        Continuar
      </Button>
      <Form.Group className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <Google
          size={40}
          className='d-flex justify-content-center align-items-center mb-5'
          id='google-icon'
        />
        <a>
          <h4>
            <u>Crear cuenta</u>
          </h4>
        </a>
      </Form.Group>
    </Form>
  )
}

export default IniciarSesion