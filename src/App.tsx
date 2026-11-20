
// index.css: 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BusinessProfile from "./pages/BusinessProfile";
import SalesImport from "./pages/SalesImport";
import Contracts from "./pages/Contracts";
import TaxCalendar from "./pages/TaxCalendar";
import FinancialAnalytics from "./pages/FinancialAnalytics";
import AITrendSignals from "./pages/AITrendSignals";
import StockPricing from "./pages/StockPricing";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/business-profile" element={<BusinessProfile />} />
          <Route path="/sales" element={<SalesImport />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/tax-calendar" element={<TaxCalendar />} />
          <Route path="/analytics" element={<FinancialAnalytics />} />
          <Route path="/trends" element={<AITrendSignals />} />
          <Route path="/stock" element={<StockPricing />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
