import { Logo } from '@components';
import './page.scss';

export default function Home() {


  const BASE_CLASS = "landing";

  return (
    <main className={BASE_CLASS}>
      <Logo></Logo>
    </main>
  )
}
