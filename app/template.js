import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";

export default function Template({ children }) {
  return (
    <div>
      <DrawerAppBar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
