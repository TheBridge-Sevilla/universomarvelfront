import { useTranslation } from 'react-i18next'
import { Card } from 'react-bootstrap'
import { fetchDestacados } from '../../services/destacados/fetchDestacados'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { Carrusel } from '../../services/destacados/Carrusel'

function Favorito() {
  const { t } = useTranslation()
  const { usuarioActual } = useContextoUsuario()

  let idUsuario = usuarioActual.auth.currentUser.uid

  const { json } = fetchDestacados(
    'favoritos',
    'post',
    JSON.stringify({ idUsuario: idUsuario })
  )

  console.log(json)
  if (usuarioActual.displayName != null) {
    return (
      <>
        <p>{t('personaje-favorito')}</p>
        <Carrusel json={json} key='favoritos' />
      </>
    )
  } else
    return (
      <Card className='sin-favorito my-5'>
        <Card.Header>{t('personaje-favorito')}</Card.Header>
        <Card.Body>
          <Card.Text>{t('solo-usuarios-registrados')}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Favorito
