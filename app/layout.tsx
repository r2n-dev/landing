import { Roboto } from 'next/font/google'
import "./layout.scss";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'R2N',
  description: 'R2N Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const BASE_CLASS = 'root-layout';

  return (
    <html lang="en">
      <body  className={`${BASE_CLASS}  ${roboto.className}`}>{children}</body>
    </html>
  )
}
