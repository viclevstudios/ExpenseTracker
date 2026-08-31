import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from './pages/DashboardPage'
import MonthlyPage from './pages/MonthlyPage'
import ExpensesPage from './pages/ExpensesPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/tracker" element={<DashboardPage />}></Route>
      <Route path="/tracker/expenses" element={<ExpensesPage />}></Route>
      <Route path="/tracker/monthly" element={<MonthlyPage />}></Route>
    </Routes>
  )
}

export default App
