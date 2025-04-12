import { Menu, Heart, CircleHelpIcon, Phone} from "lucide-react"
import { useNavigate } from "react-router-dom"
export default function Navbar(){
    const navigate= useNavigate();
    return (
    <div className="navbar items-center fixed flex z-1 justify-between bg-base-100 shadow-sm">
        <div className="flex items-center">
        <label htmlFor='my-drawer' className="btn btn-ghost">

            <Menu />
        </label>
        <h1 className="font-bold btn btn-ghost" onClick={()=> navigate('/react_website_sofa')}>Matress Heaven</h1>
        </div>
        <div className="flex ">
            <button className="btn btn-ghost">
            <CircleHelpIcon onClick={()=> navigate('/react_website_sofa/about')}/>
            </button>
            <button className="btn btn-ghost">
            <Heart />
            </button>
            <button className="btn btn-ghost">
            <Phone />
            </button>
            
        </div>
    </div>
    )
}