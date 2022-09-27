import { useRouter } from "next/router"

export function Post() {
  const router = useRouter()
  const slug = router.query
  return <>oie Post {slug}</>
 }
