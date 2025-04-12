import { Menu, Heart, User, Phone} from "lucide-react"
export default function Navbar(){
    return (
    <div className="navbar items-center fixed flex z-10 justify-between bg-base-100 shadow-sm">
        <div className="flex items-center">
        <label for='my-drawer' className="btn btn-ghost">

            <Menu />
        </label>
        <h1 className="font-bold">ComPany</h1>
        </div>
        <div className="flex mr-5">
            <button className="btn btn-ghost">
            <User />
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