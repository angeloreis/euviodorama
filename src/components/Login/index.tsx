import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import * as gtag from 'utils/gtag'

export function Login() {
  const { data: session, status } = useSession()
  const contentTextButton = status === 'authenticated' ? session.user?.name : "Fazer login"

  const authOnApp = () => {
    gtag.event({ action: 'click', category: 'Site', label: 'User Auth Method', value: `User does ${status === 'authenticated' ? 'login' : 'logout'}` })
    status === 'authenticated' ? signOut() : signIn('google')
  }

  return (
    <Button
      isLoading={status === 'loading' ? true : false}
      loadingText='Colentando dados do perfil...'
      background="orange.600"
      leftIcon={<FaUserCircle />}
      onClick={authOnApp}
      _hover={{
        background: "orange.800"
      }}>{contentTextButton}</Button>
  )
}
