import { Routes, Route, Navigate } from "react-router-dom";
import StopWatchPage from "./page/StopWatchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/stop-watch" replace />} />
        <Route path="/stop-watch" element={<StopWatchPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
