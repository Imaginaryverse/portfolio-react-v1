import { useContext } from 'react';
import { Context } from '../store/Store';

const copyKeys = {
  /* GENERAL */
  GeneralComingSoon: 'general.coming.soon',

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

  /* ABOUT */
  AboutHeaderAbout: 'about.header.about',
  AboutHeaderStrengths: 'about.header.strengths',
  AboutHeaderInterests: 'about.header.interests',

  AboutParaOne: 'about.para.one',
  AboutParaTwo: 'about.para.two',
  AboutParaThree: 'about.para.three',
  AboutParaFour: 'about.para.four',
  AboutParaFive: 'about.para.five',
  AboutParaSix: 'about.para.six',

  /* CONTACT > CONTACT FORM */
  ContactFormH1: 'contact.form.h1',
  ContactFormName: 'contact.form.name',
  ContactFormEmail: 'contact.form.email',
  ContactFormSubject: 'contact.form.subject',
  ContactFormMessage: 'contact.form.message',
  ContactFormCalculate: 'contact.form.calculate',
  ContactFormValidationInfo: 'contact.form.validation.info',
  ContactFormSubmit: 'contact.form.submit',
  ContactFormPending: 'contact.form.pending',
  ContactFormSentMessage: 'contact.form.sent.message',
  ContactFormOK: 'contact.form.ok',
  ContactFormError: 'contact.form.error',

  /* FOOTER */
  FooterTheme: 'footer.theme',
  FooterLanguage: 'footer.language',
};

export const copy = [
  /* GENERAL */
  {
    key: copyKeys.GeneralComingSoon,
    en: 'Coming soon...',
    sv: 'Kommer snart...',
  },

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
    sv: 'Om mig',
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

  /* ABOUT > Headers */
  {
    key: copyKeys.AboutHeaderAbout,
    en: 'About Me',
    sv: 'Om mig',
  },
  {
    key: copyKeys.AboutHeaderStrengths,
    en: 'Strengths',
    sv: 'Styrkor',
  },
  {
    key: copyKeys.AboutHeaderInterests,
    en: 'Interests',
    sv: 'Intressen',
  },

  /* ABOUT > Paragraphs */
  {
    key: copyKeys.AboutParaOne,
    en:
      "I'm a budding frontend developer with a great interest in UI/UX design, who loves to code and build interactive, responsive websites with HTML, Sass and JavaScript in React.",
    sv:
      'Jag är en blivande frontend utvecklare med ett stort intresse för UI/UX-design som älskar att koda och bygga interaktiva, responsiva webbplatser med HTML, Sass och JavaScript i React.',
  },
  {
    key: copyKeys.AboutParaTwo,
    en:
      "In the summer of 2020 I started to teach myself about programming and web development. Since then I have learnt how to code in JavaScript, HTML, CSS, Sass and React, as well as version control using Git. I have mainly learnt through resources such as Harvard's CS50, freeCodeCamp and TheOdinProject, as well as a myriad of personal and collaborative projects.",
    sv:
      'Under sommaren år 2020 började jag lära mig om programmering och webbutveckling. Sedan dess har jag lärt mig koda i JavaScript, HTML, CSS, Sass och React, samt versionskontrollera med Git. Jag har främst lärt mig genom resurser så som Harvards CS50, freeCodeCamp och TheOdinProject, samt en myriad av egna och kollaborativa projekt.',
  },
  {
    key: copyKeys.AboutParaThree,
    en:
      'Creative, goal oriented and detail focused are the three words that best describe me. I find great joy in developing creative solutions to problems as well as in expressing myself creatively.',
    sv:
      'Kreativ, målmedveten och detaljorienterad är de tre ord som beskriver mig allra bäst. Jag finner stor glädje i att utveckla kreativa lösningar på problem liksom i att uttrycka mig kreativt.',
  },
  {
    key: copyKeys.AboutParaFour,
    en:
      "To be able to commit myself to a project is both motivating and stimulating for me and I always strive to finish my projects on time. I'm also mindful of details and the role they play with regards to the presentation of a project.",
    sv:
      'Att kunna engagera mig i ett projekt finner jag både motiverande och stimulerande och jag gör alltid mitt yttersta för att göra klart ett projekt i tid. Jag är även mån om detaljer och den viktiga roll de spelar vad gäller ett projekts presentation.',
  },
  {
    key: copyKeys.AboutParaFive,
    en:
      'Besides UI/UX design and web development I find a lot of joy in learning about psychology, history and natural science. My ambition is to contribute to making the Internet as user friendly and accessible as possible for all people across the world as I feel that education and personal growth should be global human rights.',
    sv:
      'Utöver UI/UX-design och webbutveckling finner jag även glädje i att lära mig om psykologi, historia och naturvetenskap. Min ambition är att bidra till att göra Internet så användarvänligt och tilllgängligt som möjligt för alla människor världen över då jag anser att utbildning och personlig utveckling borde vara globala mänskliga rättigheter.',
  },
  {
    key: copyKeys.AboutParaSix,
    en:
      "When I'm not coding I like to spend time with my friends and family, with my guitar or out in nature.",
    sv:
      'När jag inte kodar ägnar jag gärna tid med mina vänner och familj, med min gitarr eller ute naturen.',
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
    key: copyKeys.ContactFormSubject,
    en: 'Subject (required)',
    sv: 'Ämne (obligatoriskt)',
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
    key: copyKeys.ContactFormPending,
    en: 'Sending...',
    sv: 'Skickar...',
  },
  {
    key: copyKeys.ContactFormSentMessage,
    en: 'Message sent!',
    sv: 'Meddelande skickat!',
  },
  {
    key: copyKeys.ContactFormOK,
    en: 'OK',
    sv: 'OK',
  },
  {
    key: copyKeys.ContactFormError,
    en: 'Oops.. Something went wrong!',
    sv: 'Hoppsan.. Något gick snett!',
  },

  /* FOOTER */
  {
    key: copyKeys.FooterTheme,
    en: 'Switch theme:',
    sv: 'Byt tema:',
  },

  {
    key: copyKeys.FooterLanguage,
    en: 'Language:',
    sv: 'Språk:',
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
