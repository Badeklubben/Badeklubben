import { AuthContextProvider } from './lib/authentication';

export const metadata = {
    title: 'Brygging',
    description: 'Brygging',
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
