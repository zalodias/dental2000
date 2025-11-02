import { Facebook } from '@/assets/icons/facebook';
import { Instagram } from '@/assets/icons/instagram';
import Logo from '@/assets/logos/lockup-dark-horizontal.svg';
import { Container } from '@/components/container';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-7">
            <Image src={Logo} alt="Dental 2000" className="w-50" />
            <p className="text-title-large font-medium text-balance">
              O seu sorriso, a nossa prioridade
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dental2000_clinica/"
                className="bg-background-neutral-default/40 border-foreground-neutral-inverse/40 hover:bg-background-neutral-default/80 inline-flex items-center rounded-lg border p-2 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/profile?id=61574453800539"
                className="bg-background-neutral-default/40 border-foreground-neutral-inverse/40 hover:bg-background-neutral-default/80 inline-flex items-center rounded-lg border p-2 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:dentallda@gmail.com"
                className="bg-background-neutral-default/40 border-foreground-neutral-inverse/40 hover:bg-background-neutral-default/80 inline-flex items-center rounded-lg border p-2 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
            <div className="text-body-large-default flex flex-col gap-4">
              <h4 className="text-title-medium font-medium">Coimbra</h4>
              <div className="flex flex-col gap-1">
                <span>R. João de Ruão 5, 3000-153 Coimbra</span>
                <span>(+351) 922 124 622</span>
              </div>
            </div>
            <div className="text-body-large-default flex flex-col gap-4">
              <h4 className="text-title-medium font-medium">Sertã</h4>
              <div className="flex flex-col gap-1">
                <span>Rua Vila de Rei, Nº66 R/Ch, 6100-707 Sertã</span>
                <span>(+351) 922 133 517</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-border-neutral-default flex flex-wrap gap-3 border-t pt-5">
          <div className="flex grow gap-4">
            <Link href="#">Livro de Reclamações</Link>
          </div>
          <span>
            © {new Date().getFullYear()} Dental 2000 ・ Made with 🦷 by{' '}
            <a href="https://www.zalodias.com" target="_blank">
              Gonçalo Dias
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
