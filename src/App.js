import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SideBarContext";
import ProductsDetail from "./pages/ProductsDetail";
// import NavBar from "./componentes/NavBar";
// import Header from "./componentes/Header";
import Home from "./pages/Home";
import Footer from "./componentes/Footer";
import NavBar from "./componentes/NavBar";
const App = () => {
  return (
    <SidebarProvider>
      <NavBar/>
      <ProductProvider>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
      <Footer />
    </SidebarProvider>
  );
};

export default App;
