import HomepageNavbar from "../components/HomepageNavbar";
import img from '../assets/favicon.svg'

export default function Homepage() {
  return (
    <>
      <HomepageNavbar />
      <div className="flex items-center justify-between max-w px-50 pt-35">
        <div className="flex flex-col justify-between max-w-1/3">
          <span className="text-2xl font-bold text-gray-950">Expensify</span>
          <span className="text-6xl font-bold text-bondi-900 pt-2 pb-5">Monitor your income and expenses</span>
          <span className="text-xl">Never loose track of your finances again</span>
        </div>
        <img className="w-100 h-100" src={img}></img>
      </div>
    </>
  );
}