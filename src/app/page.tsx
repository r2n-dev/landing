import { Typography } from '@mui/material';
import { Logo } from '../shared/components';

export default function Home() {


  const BASE_CLASS = "landing";

  return (
    <main className={BASE_CLASS}>
      <Logo></Logo>
      <Typography variant="h6" component={'a'} href="https://www.linkedin.com/in/andres-artunduaga/" >About Me</Typography>
    </main>
  )
}
