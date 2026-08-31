import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/dashboard" className="">
        <span className="text-slate-200">$</span>Expensify
      </Link>
    </nav>
  )
}