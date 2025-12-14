'use client';

import { Facebook } from '@/assets/icons/facebook';
import { Instagram } from '@/assets/icons/instagram';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { Textarea } from '@/components/textarea';
import { questions } from '@/data/questions';
import { SectionHeader } from '@/sections/section-header';
import { Ticker } from '@/sections/ticker';
import { fetchDatabaseContent } from '@/utils/notion';

export default async function Contactos() {
  const contactos = await fetchDatabaseContent(
    process.env.NOTION_CONTACTOS_DATABASE_ID!,
  );

  return (
    <>
      <Container className="flex items-center md:pt-30 lg:pt-40">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="bg-background-neutral-subtle -mx-5 aspect-4/3 w-screen object-cover md:mx-0 md:hidden" />
          <SectionHeader
            eyebrow="Contactos"
            title="As nossas clínicas"
            size="large"
            className="text-center"
          />
          <Tabs value={contactos[0].id} className="w-full">
            <TabsList className="mx-auto max-w-(--breakpoint-sm) justify-center">
              {contactos?.map((contact) => (
                <TabsTrigger key={contact.id} value={contact.id}>
                  {(contact.properties.Clínica as any).title[0].plain_text}
                </TabsTrigger>
              ))}
            </TabsList>
            {contactos.map((contact) => (
              <TabsContent key={contact.id} value={contact.id}>
                <div className="flex flex-col justify-center gap-8 text-center md:flex-row md:gap-16">
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground-neutral-subtle text-body-medium">
                      Telefone
                    </p>
                    <p>{(contact.properties.Telefone as any).phone_number}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground-neutral-subtle text-body-medium">
                      Morada
                    </p>
                    <p>
                      {
                        (contact.properties.Morada as any).rich_text[0]
                          .plain_text
                      }
                    </p>
                  </div>
                </div>
                <div className="bg-background-neutral-subtle relative aspect-3/2 w-full object-cover" />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
      <Container className="flex w-full flex-col gap-5">
        <SectionHeader eyebrow="Marcações" title="Agende a sua consulta" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          <Input type="text" placeholder="Nome" />
          <Input type="tel" placeholder="Telefone" />
          <Input type="email" placeholder="Email" />
          <Select defaultValue="">
            <option value="" disabled>
              Especialidade
            </option>
            <option value="alinhadores">Alinhadores</option>
            <option value="ortodontia">Ortodontia</option>
            <option value="implantologia">Implantologia</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>
              Clínica
            </option>
            <option value="coimbra">Coimbra</option>
            <option value="sertã">Sertã</option>
          </Select>
        </div>
        <Textarea placeholder="Motivo da consulta" />
        <div className="flex gap-2">
          <Input type="checkbox" id="conditions" />
          <label
            htmlFor="conditions"
            className="text-body-medium text-foreground-neutral-subtle"
          >
            Li e aceito as condições de tratamento dos meus dados pessoais pela
            Dental 2000.
          </label>
        </div>
        <Button>Pedir contacto</Button>
      </Container>
      <Container>
        <div className="flex flex-col gap-10 md:items-center md:gap-20">
          <SectionHeader
            eyebrow="Perguntas frequentes"
            title="Respostas às suas questões mais comuns"
            className="text-center"
          />
          <div className="flex w-full max-w-3xl flex-col">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-border-neutral-subtle border-b last:border-b-0"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="hover:text-foreground-neutral-default flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-start transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`question-${index}`}
                  >
                    <span
                      className={`text-title-medium grow font-medium transition-colors duration-200 ${
                        isOpen
                          ? 'text-foreground-neutral-default'
                          : 'text-foreground-neutral-subtle'
                      }`}
                    >
                      {item.title}
                    </span>
                    <div
                      className={`bg-background-neutral-faded flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <Plus
                        className={`text-foreground-neutral-default h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'scale-105' : 'scale-100'
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    id={`question-${index}`}
                    className={`grid transition-all duration-400 ${
                      isOpen
                        ? 'grid-rows-[1fr] pb-6 opacity-100'
                        : 'grid-rows-[0fr] pb-0 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-body-large text-foreground-neutral-subtle leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="flex w-full flex-col gap-10">
        <SectionHeader
          eyebrow="Redes Sociais"
          title="Acompanhe-nos nas redes sociais"
          className="text-start md:mx-auto md:text-center"
        />
        <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-8">
          <a
            href="https://facebook.com/profile?id=61574453800539"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hover:bg-background-neutral-faded flex items-center gap-4 rounded-xl bg-transparent px-0 py-4 transition-colors duration-200 md:px-4"
          >
            <div className="bg-background-neutral-inverse/6 text-foreground-neutral-default flex size-12 items-center justify-center rounded-full">
              <Facebook size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-title-medium font-medium">Facebook</span>
              <span className="text-body-medium text-foreground-neutral-subtle">
                @dental2000_clinica
              </span>
            </div>
          </a>
          <a
            href="https://instagram.com/dental2000_clinica/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hover:bg-background-neutral-faded flex items-center gap-4 rounded-xl bg-transparent px-0 py-4 transition-colors duration-200 md:px-4"
          >
            <div className="bg-background-neutral-inverse/6 text-foreground-neutral-default flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Instagram size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-title-medium font-medium">Instagram</span>
              <span className="text-body-medium text-foreground-neutral-subtle">
                @dental2000_clinica
              </span>
            </div>
          </a>
        </div>
        <Ticker
          items={Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-background-neutral-subtle size-full" />
          ))}
          duration={30}
        />
      </Container>
    </>
  );
}
