'use client';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Tabs } from '@/components/tabs';
import { Textarea } from '@/components/textarea';
import { contacts } from '@/data/contacts';
import { SectionHeader } from '@/sections/section-header';

export default function Contactos() {
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
          <Tabs value={contacts[0].name} className="w-full">
            <Tabs.List className="mx-auto max-w-(--breakpoint-sm) justify-center">
              {contacts.map((contact) => (
                <Tabs.Trigger key={contact.name} value={contact.name}>
                  {contact.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {contacts.map((contact) => (
              <Tabs.Content key={contact.name} value={contact.name}>
                <div className="flex flex-col justify-center gap-8 text-center md:flex-row md:gap-16">
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground-neutral-subtle text-body-medium">
                      Telemóvel
                    </p>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground-neutral-subtle text-body-medium">
                      Morada
                    </p>
                    <p>{contact.address}</p>
                  </div>
                </div>
                <div className="bg-background-neutral-subtle relative aspect-3/2 w-full object-cover" />
              </Tabs.Content>
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
    </>
  );
}
