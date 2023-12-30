import { bungee_hairline, monoton, orbitron } from "./ui/fonts"

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
    <div className={orbitron.className}>{children}</div>
  )
}