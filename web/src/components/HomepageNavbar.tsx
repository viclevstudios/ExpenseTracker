import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const { t } = useTranslation();

  const navLinkClass = ({isActive}) => 
    `px-3 py-2.5 hover:text-apple-600 ${
      isActive ? "underline hover:decoration-apple-600" : ""
    }`

  return (
    <nav className="flex items-center justify-between max-w px-20 py-7">
      <NavLink to="/" className="text-2xl font-bold">
        <span className="text-apple-600">$</span><span className="text-bondi-900">Expensify</span>
      </NavLink>
      <div className="flex item-center justify-between gap-5 text-gray-800 text-xl font-medium">
        <NavLink className={navLinkClass} to="/">
          <span className="">Homepage</span>
        </NavLink>
        <NavLink className={navLinkClass} to="/about">
          <span className="">{t("about")}</span>
        </NavLink>
        <NavLink className={navLinkClass} to="/tracker">
          <span className="">ExpenseTracker</span>
        </NavLink>
        <span className="px-3 py-2.5">|</span>
        <NavLink className={navLinkClass} to="/login">
          <span className="">Login</span>
        </NavLink>
        <NavLink className={navLinkClass} to="/register">
          <span className="">Register</span>
        </NavLink>
      </div>
    </nav>
  )
}