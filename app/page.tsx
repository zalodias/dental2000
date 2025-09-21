import Logo from '@/assets/logos/lockup-primary-vertical.svg';
import { Container } from '@/components/container';
import Image from 'next/image';

export default function Home() {
  return (
    <Container className="grid place-content-center">
      <Image src={Logo} alt="Dental 2000" width={240} />
    </Container>
  );
}
