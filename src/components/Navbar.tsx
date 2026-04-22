import { Home, Trophy, BookOpen, Laptop, Mic, UserCircleIcon } from "lucide-react";
import NavLink from "./NavLink";
import logo from "../assets/logo-full.png"; 
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
    
    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Competition", href: "/", icon: <Trophy size={18} /> },
        { label: "Seminar", href: "/", icon: <BookOpen size={18} /> },
        { label: "Workshop", href: "/", icon: <Laptop size={18} /> },
        { label: "Talkshow", href: "/", icon: <Mic size={18} /> },
        { label: "Login", href: "/register", icon: <UserCircleIcon size={18} /> }
  ];

  return (
    <header className="sticky top-0 bg-white z-50 px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <img src={logo} alt="logo" className="h-16" />

        <div className="flex gap-2">
          {menuItems.map((item) => (
              <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </header>
  );
};

export default Navbar;