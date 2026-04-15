import {Home, Trophy, BookOpen,Laptop, Mic,  UserCircleIcon} from "lucide-react"
import NavLink from "./NavLink";
import logo from "../assets/LOGO FULL.png"

export const Header : React.FC = () => {
    const currentPath = "#";
    
    const menuItems = [
        {label: "Beranda", href : "#Home", icon : <Home size={18}/>},
        {label: "Competition", href : "#About", icon : <Trophy size={18}/>},
        {label: "Seminar", href:"#Seminar", icon : <BookOpen size={18}/>},
        {label: "Workshop", href:"#Workshop", icon : <Laptop size={18}/>},
        {label: "Talkshow", href:"#Talkshow", icon : <Mic size={18}/>},      
        {label: "Login", href:"#Login", icon : <UserCircleIcon size={18}/>}
    ];
    return (
        <header className="sticky top-0 bg-white z-50 px-6 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                <div><img src={logo} alt="" className="h-16"/></div>
                <div className="nav flex gap-2">
                    {menuItems.map((item) => 
                        <NavLink
                        key={item.label}
                        label  = {item.label}
                        href = {item.href}
                        icon = {item.icon}
                        isActive = {item.href == currentPath}
                    />
            
            )}
            </div>
            </div>
        </header>
    )
}
export default Header;