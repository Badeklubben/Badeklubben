export const metadata = {
    title: 'Grapher',
    description: 'Grapher',
}

export default function GrapherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}