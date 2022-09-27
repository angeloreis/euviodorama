import { useRouter } from "next/router"

export default function PreviewPost() {
  const router = useRouter()
  const slug = router.query
  return <>oie Preview Post {slug}</>
 }
