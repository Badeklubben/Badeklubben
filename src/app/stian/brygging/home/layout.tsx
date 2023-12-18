import ProtectedRoute from "./protectedRoute"
export default function BryggingLayoutinn({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
        {children}
    </ProtectedRoute>
  )
}
