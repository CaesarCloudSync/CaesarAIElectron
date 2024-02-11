import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold underline" >Home</h1>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <a onClick={() =>{navigate("/")}} style={{cursor:"pointer"}}>Home</a>
                <a onClick={() =>{navigate("/firstpage")}} style={{cursor:"pointer"}}>To FirstPage</a>
                <a onClick={() =>{navigate("/secondpage")}} style={{cursor:"pointer"}}>To SecondPage</a>
            </div>
        </div>
    )
}