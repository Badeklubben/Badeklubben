

export const metadata = {
    title: 'Latexplot',
    description: 'Latexplot',
}

export default function LatexplotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}