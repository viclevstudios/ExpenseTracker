import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const { t } = useTranslation();

  return (
    <nav className="flex items-center justify-between max-w px-20 py-7">
      <Link to="/" className="text-2xl font-bold">
        <span className="text-apple-600">$</span><span className="text-bondi-900">Expensify</span>
      </Link>
      <div className="flex item-center justify-between gap-5 text-gray-800 text-xl font-medium">
        <Link className="px-3 py-2.5" to="/">
          <span className="hover:text-apple-600">Homepage</span>
        </Link>
        <Link className="px-3 py-2.5" to="/about">
          <span className="hover:text-apple-600">{t("about")}</span>
        </Link>
        <Link className="px-3 py-2.5" to="/tracker">
          <span className="hover:text-apple-600">ExpenseTracker</span>
        </Link>
        <span className="px-3 py-2.5">|</span>
        <Link className="px-3 py-2.5" to="/login">
          <span className="hover:text-apple-600">Login</span>
        </Link>
        <Link className="px-3 py-2.5" to="/register">
          <span className="hover:text-apple-600">Register</span>
        </Link>
      </div>
    </nav>
  )
}