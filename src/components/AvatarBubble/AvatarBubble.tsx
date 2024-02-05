import { useAuth } from '@contexts'
import { Avatar, UnstyledButton } from '@mantine/core'
import { Loading } from '@components'
import { useGetUserQuery } from '@queries'
import { useMemo } from 'react'


export const AvatarBubble = () => {
  const { token, login } = useAuth()
  const { loading, data } = useGetUserQuery()

  const user = useMemo(() => data?.activeUser, [data])

  if (!token) {
    return <UnstyledButton onClick={login} style={{ marginRight: 8 }}>Login</UnstyledButton>
  }

  if (!user || loading) {
    return <Loading />
  }

  return (
    <Avatar radius="xl" color='black'
            style={{ marginRight: 8 }}>{`${user.name?.split(' ')[0][0]}${user.name?.split(' ')[1][0]}`}</Avatar>
  )
}