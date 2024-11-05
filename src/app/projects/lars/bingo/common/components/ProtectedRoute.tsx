// components/ProtectedRoute.tsx
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/projects/lars/bingo/signin");
      }
    });
    
    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;