import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingSidebar from "./FloatingSidebar";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06111f] text-white">
      <Navbar />
      <FloatingSidebar />
      <main className="min-h-screen pt-24 lg:pl-24 xl:pl-28">{children}</main>
      <Footer />
    </div>
  );
}