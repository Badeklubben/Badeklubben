export const metadata = {
    title: 'Lars Bysheim',
    description: 'Lars Bysheim',
}

export default function LarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}