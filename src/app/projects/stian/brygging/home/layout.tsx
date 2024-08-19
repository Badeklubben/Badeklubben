import ProtectedRoute from "./lib/protectedRoute";
import Navbar from "./lib/navbar";
import "./styles/home.css";

export default function BryggingLayoutinn({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <Navbar />
            {children}
        </ProtectedRoute>
    );
}
