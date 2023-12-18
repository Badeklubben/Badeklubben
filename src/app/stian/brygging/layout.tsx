import './ui/BeerEmoji.png'

export const metadata = {
    title: 'Brygging',
    description: 'Brygging',
    icons: {
        icon: '/BeerEmoji.png',
    }
}

export default function BryggingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
