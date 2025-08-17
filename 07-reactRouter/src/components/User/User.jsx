import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams();

    return(
        <>
        <h1 className="bg-gray-300 text-white text-3xl">User: {id}</h1>
        </>
    )
}