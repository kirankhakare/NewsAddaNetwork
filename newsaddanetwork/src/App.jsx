import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      {/* 🔥 Global Scroll Handler */}
      <ScrollToTop />

      {/* 🔥 All Routes */}
      <AppRoutes />
    </>
  );
}

export default App;