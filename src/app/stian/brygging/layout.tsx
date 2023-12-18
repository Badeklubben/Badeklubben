import './ui/BeerEmoji.png'
import { AuthContextProvider } from './lib/authentication';

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
    <AuthContextProvider>
    	{children}
    </AuthContextProvider>
  )
}
