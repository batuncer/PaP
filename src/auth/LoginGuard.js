import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext"
import { useEffect } from "react";

export default function LoginGuard({ children }) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext()

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
        }
    }, [isAuthenticated, navigate])

    return children
}