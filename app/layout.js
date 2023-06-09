import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from './components/Navbar';
import TotalNumber from './totalnumber';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
