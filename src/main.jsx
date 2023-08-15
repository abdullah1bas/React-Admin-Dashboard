import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import MangeTeam from './pages/mangeTeam/MangeTeam.jsx';
import ContactsInformation from './pages/contactsInformation/ContactsInformation.jsx';
import InvoicesBalances from './pages/invoicesBalances/InvoicesBalances.jsx';
import Calendar from './pages/calendar/Calendar.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import BarChart from './pages/barChart/BarChart.jsx';
import PieChart from './pages/pieChart/PieChart.jsx';
import LineChart from './pages/lineChart/LineChart.jsx';
import GeographyChart from './pages/geographyChart/GeographyChart.jsx';
import ProfileForm from './pages/profileForm/ProfileForm.jsx';
import NotFound from './pages/notFound/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<MangeTeam />}/>
      <Route path="contacts" element={<ContactsInformation />}/>
      <Route path="invoices" element={<InvoicesBalances />}/>
      <Route path="form" element={<ProfileForm />}/>
      <Route path="calendar" element={<Calendar />}/>
      <Route path="faq" element={<FAQ />}/>
      <Route path="bar" element={<BarChart />}/>
      <Route path="pie" element={<PieChart />}/>
      <Route path="line" element={<LineChart />}/>
      <Route path="geography" element={<GeographyChart />}/>
      <Route path="*" element={<NotFound />}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
