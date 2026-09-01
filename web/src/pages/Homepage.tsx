import HomepageNavbar from "../components/HomepageNavbar";
import img from '../assets/favicon.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Homepage() {

  const { t } = useTranslation();
  
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
  }

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <>
      <HomepageNavbar />
      <div className="flex items-center justify-between max-w px-60 pt-35">
        <div className="flex flex-col justify-between max-w-1/3">
          <span className="text-2xl font-bold text-gray-900">Expensify</span>
          <span className="text-7xl font-bold text-bondi-900 pt-2 pb-5">Monitor your income and expenses</span>
          <span className="text-xl">Never loose track of your finances again</span>
          <div className="mt-10">
            <button onClick={goToLogin} className="bg-bondi-900 text-white text-2xl font-medium rounded-2xl mr-10 px-7 py-2.5 hover:cursor-pointer hover:bg-bondi-950">
              {t("login")}
            </button>
            <button onClick={goToRegister} className="text-bondi-900 text-2xl font-medium rounded-2xl ring-2 ring-bondi-900 ring-inset px-7 py-2.5 hover:cursor-pointer hover:bg-gray-200">
              {t("register-instead")}
            </button>
          </div>
        </div>
        <img className="w-100 h-100" src={img}></img>
      </div>
    </>
  );
}