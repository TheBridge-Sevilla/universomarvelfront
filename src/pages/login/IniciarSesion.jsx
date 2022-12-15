import { DoorOpen, Google } from 'react-bootstrap-icons'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import { useSignWithG } from './../../hooks/useSignWithG'
import { sesionInvitado } from '../../services/firebase/sesionInvitada'

function IniciarSesion() {
  const { t } = useTranslation()
  const { iniciarSesionConG } = useSignWithG()
  const { inicioAnonimo } = sesionInvitado()

  return (
    <Container className='h-100 d-flex flex-column justify-content-center' fluid>
      <h1 className='my-5'>{t('iniciar-sesion')}</h1>
      <FormGroup className='mt-5 mx-5 d-flex flex-column justify-content-center'>
        <TextField
          name='nombre'
          label={t('nombre')}
          type='text'
          className='mb-4'
        />
        <TextField
          name='contraseña'
          label={t('contraseña')}
          type='password'
          className='mb-2'
        />
        <Container className='d-flex justify-content-between align-items-center mb-5'>
          <FormControlLabel control={<Checkbox />} label={t('recordar')} />
          <a>{t('contraseña-olvidada')}</a>
        </Container>
        <Button className='mb-3' size='large'>
          {t('continuar')}
        </Button>
      </FormGroup>
      <Container className='d-flex justify-content-center mt-5'>
        <Google
          size={40}
          className='zoom-animation mx-4'
          onClick={() => iniciarSesionConG()}
        />
        <DoorOpen
          size={40}
          className='zoom-animation mx-4'
          onClick={() => inicioAnonimo()}
        />
      </Container>
      <h5 className='mt-5'>
        <u>{t('crear-cuenta')}</u>
      </h5>
    </Container>
  )
}

export default IniciarSesion
