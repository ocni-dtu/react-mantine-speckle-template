import { Container, Title, Text } from '@mantine/core'
import { useAuth } from '@contexts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const LoginPage = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/projects')
    }
  }, [token])


  return (
    <Container>
      <Title>Speckle React App</Title>
      <br />
      <Text>
        Click Login in the top right corner
      </Text>
    </Container>
  )
}