import { Home, ShoppingCart, Users, BarChart, Settings, LogOut } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="z-10 w-full fixed bg-slate-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold">POSmart</span>
            </div>

            {/* Navigation */}
            <ul className="flex items-center gap-6">
                <li >
                    <Link to="/dashboard" className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                        <Home className="w-5 h-5" /> Dashboard
                    </Link>
                </li>
                <li >
                    <Link to="/price" className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                        <ShoppingCart className="w-5 h-5" /> Buy
                    </Link>
                </li>
                <li>
                    <Link to="/support" className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                        <Users className="w-5 h-5" /> Support
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
