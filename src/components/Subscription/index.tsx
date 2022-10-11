import { Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "services/api";
import { Stripe } from '@stripe/stripe-js'
import { useState } from "react";

interface SubscriptionButtonProps {
  stripe?: Stripe
}

export function SubscriptionButton({ stripe }: SubscriptionButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('google')
      return;
    }

    if (session.activeSubscription) {
      router.push('/blog')
      return;
    }

    try {
      setIsLoading(true)
      const response = await api.post('/checkout_sessions')
      const { sessionId } = response.data
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
      setIsLoading(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <Button
      isLoading={isLoading}
      loadingText="Realizando assinatura..."
      height="4rem"
      width="260px"
      border="1px"
      borderColor='orange.200'
      borderRadius="2rem"
      background="orange.500"
      color="white"
      fontSize="1.25rem"
      transition="filter 0.2s"
      marginBottom={["0.5rem", "1.5rem"]}
      type="submit"
      role="link"
      onClick={handleSubscribe}
      _hover={{
        fontSize: "1.45rem",
        color: "white",
        background: "orange.600",
        borderColor: 'orange.900',
        filter: 'brightness(0.8)'
      }}>Assinar Membro</Button>

  )

}
