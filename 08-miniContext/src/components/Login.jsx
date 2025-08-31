import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Login() {

    const{setUser} = useContext(UserContext)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return(
        <div>
            <input 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="userName"/>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login