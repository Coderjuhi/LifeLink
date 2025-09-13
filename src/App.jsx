import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 pt-[60px]"> {/* padding to avoid navbar overlap */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
