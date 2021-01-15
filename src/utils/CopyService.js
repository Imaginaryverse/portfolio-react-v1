import { useContext } from 'react';
import { Context } from '../store/Store';

const copyKeys = {
  /* NAVBAR */
  NavHome: 'nav.home',
  NavProjects: 'nav.projects',
  NavAbout: 'nav.about',
  NavBlog: 'nav.blog',
  NavContact: 'nav.contact',

  /* HOME > HERO */
  HomeHeroIntro: 'hero.intro',
  HomeHeroHeader: 'hero.header',
  HomeHeroPresentation: 'hero.presentation',

  /* CONTACT > CONTACT FORM */
  ContactFormH1: 'contact.form.h1',
  ContactFormName: 'contact.form.name',
  ContactFormEmail: 'contact.form.email',
  ContactFormMessage: 'contact.form.message',
  ContactFormCalculate: 'contact.form.calculate',
  ContactFormValidationInfo: 'contact.form.validation.info',
  ContactFormSubmit: 'contact.form.submit',
  ContactFormSentMessage: 'contact.form.sent.message',
  ContactFormAnotherMessage: 'contact.form.another.message',
};

export const copy = [
  /* NAVBAR */
  {
    key: copyKeys.NavHome,
    en: 'Home',
    sv: 'Hem',
  },
  {
    key: copyKeys.NavProjects,
    en: 'Projects',
    sv: 'Projekt',
  },
  {
    key: copyKeys.NavAbout,
    en: 'About Me',
    sv: 'Om Anton',
  },
  {
    key: copyKeys.NavBlog,
    en: 'Blog',
    sv: 'Blogg',
  },
  {
    key: copyKeys.NavContact,
    en: 'Contact',
    sv: 'Kontakt',
  },

  /* HOME > HERO */
  {
    key: copyKeys.HomeHeroIntro,
    en: "Hello! I'm Anton.",
    sv: 'Hej! Jag heter Anton.',
  },
  {
    key: copyKeys.HomeHeroHeader,
    en: 'I build and tinker with websites.',
    sv: 'Jag bygger och fixar webbplatser.',
  },
  {
    key: copyKeys.HomeHeroPresentation,
    en:
      "I'm a budding frontend developer from Stockholm, Sweden, with a passion for learning new things and creating cool stuff.",
    sv:
      'Jag är en blivande frontend utvecklare från Stockholm som älskar att lära mig nya saker och skapa spännande prylar.',
  },

  /* CONTACT > FORM */
  {
    key: copyKeys.ContactFormH1,
    en: 'Email me',
    sv: 'Maila mig',
  },
  {
    key: copyKeys.ContactFormName,
    en: 'Name (required)',
    sv: 'Namn (obligatoriskt)',
  },
  {
    key: copyKeys.ContactFormEmail,
    en: 'Email (required)',
    sv: 'E-post (obligatoriskt)',
  },
  {
    key: copyKeys.ContactFormMessage,
    en: 'Message (required)',
    sv: 'Meddelande (obligatoriskt)',
  },
  {
    key: copyKeys.ContactFormCalculate,
    en: 'Calculate',
    sv: 'Beräkna',
  },
  {
    key: copyKeys.ContactFormValidationInfo,
    en:
      'I like robots, but not spam. Confirm that you are human by entering the correct answer in the field above.',
    sv:
      'Jag gillar robotar, men inte spam. Bekräfta att du är mänsklig genom att skriva korrekt svar i fältet ovanför.',
  },
  {
    key: copyKeys.ContactFormSubmit,
    en: 'SUBMIT',
    sv: 'SKICKA',
  },
  {
    key: copyKeys.ContactFormSentMessage,
    en: 'Message sent!',
    sv: 'Meddelande skickat!',
  },
  {
    key: copyKeys.ContactFormAnotherMessage,
    en: 'Send another?',
    sv: 'Skicka nytt?',
  },
];

export const useCopy = () => {
  const [state] = useContext(Context);

  return copy.reduce(
    (o, item) => ({ ...o, [item.key]: item[state.language] }),
    {}
  );
};

export default copyKeys;
