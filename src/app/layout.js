import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eazisols - Transform your idea into a startup',
  description: 'Leading global tech services firm, delivering innovative solutions, exceptional results, and fostering lasting client relationships.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
