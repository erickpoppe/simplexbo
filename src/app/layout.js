import './globals.css';

export const metadata = {
  title: 'BoliviaTax',
  description: 'Streamline your invoice tax management in Bolivia with BoliviaTax software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
