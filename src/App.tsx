import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UndefinedPage from "./pages/UndefinedPage/UndefinedPage";
import AIAssistant from "./pages/AIAssistant/AIAssistant";

function App() {
  return (
    <Router>
      <main className="bg-[#f5f5f5]">
        <Routes>
          <Route path="/dashboard" element={<UndefinedPage />} />
          <Route path="/work-order" element={<UndefinedPage />} />
          <Route path="/properties" element={<UndefinedPage />} />
          <Route path="/tenants" element={<UndefinedPage />} />
          <Route path="/compliance" element={<UndefinedPage />} />
          <Route path="/messages" element={<UndefinedPage />} />
          <Route path="/" element={<AIAssistant />} />
          <Route path="/maintenance" element={<UndefinedPage />} />
          <Route path="/settings" element={<UndefinedPage />} />
          <Route path="/logout" element={<UndefinedPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
