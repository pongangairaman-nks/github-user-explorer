import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import SearchPage from "./pages/SearchPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/user/:username" element={<UserProfilePage />} />
      </Routes>
    </Container>
  );
}

export default App;
