import { Facebook } from '@/assets/icons/facebook';
import { Instagram } from '@/assets/icons/instagram';
import Dental2000 from '@/assets/logos/dental2000/lockup-dark-horizontal.svg';
import CTT from '@/assets/logos/insurers/ctt.svg';
import Medis from '@/assets/logos/insurers/medis.svg';
import Multicare from '@/assets/logos/insurers/multicare.svg';
import { Container } from '@/components/container';
import { fetchDatabaseContent } from '@/notion/functions';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function Footer() {
  const contactos = await fetchDatabaseContent(
    process.env.NOTION_CONTACTOS_DATABASE_ID!,
  );

  return (
    <footer>
      <Container>
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-7">
            <Image src={Dental2000} alt="Dental 2000" className="w-50" />
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
            {contactos.map((contacto) => (
              <div
                key={contacto.id}
                className="text-body-large-default flex flex-col gap-4"
              >
                <h4 className="text-title-medium font-medium">
                  {(contacto.properties.Clínica as any).title[0].plain_text}
                </h4>
                <div className="flex flex-col gap-1">
                  <span>
                    {
                      (contacto.properties.Morada as any).rich_text[0]
                        .plain_text
                    }
                  </span>
                  <span>
                    {(contacto.properties.Telefone as any).phone_number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
            <span className="text-foreground-neutral-default">
              Em parceria com
            </span>
            <div className="flex items-center gap-8">
              <Image
                src={Multicare}
                alt="Multicare"
                className="h-8 w-auto grayscale"
              />
              <Image
                src={Medis}
                alt="Medis"
                className="h-10 w-auto grayscale"
              />
              <Image src={CTT} alt="CTT" className="h-8 w-auto grayscale" />
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
        </div>
      </Container>
    </footer>
  );
}
