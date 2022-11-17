export const formattedPrice = (price: number) => {
  return new  Intl.NumberFormat('pt-BR' ,{
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const formattedBlogUrl = (slug: string) => {
  const domain = process.env.NEXT_PUBLIC_URL_DOMAIN
  return `${domain}/blog/${slug}`
}
