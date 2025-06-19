'use client';
import NavigationBar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavigationBar />
      <main className="flex-grow-1 mt-5 pt-4">
        {children}
      </main>
      <Footer />
    </div>
  );
} 