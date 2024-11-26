import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import Load from "../components/Load";

export default function UseGuard({ children }) {
    const { isInitialized, isAuthenticated } = useAuthContext()

    if (!isInitialized) {
        return <Load></Load>
    }
    if (!isAuthenticated) {
        return <Load></Load>
    }
    return children

}