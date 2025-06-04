// src/data/sections.js
import image1 from "../assets/learning-interactions.png";
import image2 from "../assets/google.webp";
import image3 from "../assets/VSCODE.png";
import image4 from "../assets/forest-app.jpg";
import image5 from "../assets/lu.png";
import image6 from "../assets/learning.png";

const sections = [
  {
    id: "intro",
    title: "Ievada sadaļa",
    text: `Laipni lūdzam “Studenta digitālās izdzīvošanas ceļvedī” – īsā rokasgrāmatā, kas palīdzēs tev izmantot digitālos rīkus studijās. Šeit apskatīsim piecas galvenās tēmas: mācību rīkus, programmēšanu, produktivitāti, attālinātās mācības un papildu resursus. Katrā sadaļā sniegsim praktiskus padomus, lai tu varētu organizēt piezīmes, plānot laiku, apgūt kodēšanu un sadarboties tiešsaistē. Ceļvedis ir domāts gan iesācējiem, gan tiem, kas jau izmanto dažādus rīkus, bet vēlas tos izmantot efektīvāk. Sāc iepazīt šīs tēmas, lai studijas kļūtu strukturētākas un patīkamākas.`,
    imgSrc: image5,
    imgAlt: "Ievada sadaļas attēls",
  },

  {
    id: "tools",
    title: "Galvenie mācību rīki",
    text: `Lai organizētu piezīmes un materiālus, izmanto Google Workspace – Google Docs ļauj strādāt komandā reāllaikā, Sheets apkopo datus un Slides veido prezentācijas. Ja vēlies brīvāku piezīmju struktūru, izvēlies OneNote, kur vari veidot sadaļas, pievienot rokraksta piezīmes un audio ierakstus. Notion apvieno piezīmes, uzdevumu sarakstus un datubāzes vienā vidē, ļaujot izveidot pielāgotas veidnes. Bibliogrāfijām lieto Zotero vai Mendeley, kas automātiski ģenerē citātus un pārvalda atsauces.`,
    imgSrc: image2,
    imgAlt: "Attēls par mācību rīkiem",
  },
  {
    id: "programming",
    title: "Programmēšana un izstrāde",
    text: `Programmēšana attīsta analītisko domāšanu un problēmu risināšanu. Sāc ar GitHub konta izveidi un apgūsti pamata Git komandas (clone, commit, push, pull), lai varētu sekot koda izmaiņām un sadarboties ar citiem. Izvēlies valodu: frontenda izstrādei iemācies HTML, CSS, JavaScript, bet datu analīzei – Python ar Jupyter Notebook. Strādā VS Code, izmantojot paplašinājumus ESLint un Prettier koda kvalitātei. Lai nodrošinātu vienotu vidi, izmanto Docker konteinerus ar Python vai Node.js. Raksti vienību testus (Jest, pytest) un veic refaktoringu, lai kods būtu uzticams un skaidrs.`,
    imgSrc: image3,
    imgAlt: "Programmēšanas attēls",
  },
  {
    id: "productivity",
    title: "Produktivitāte un laika pārvaldība",
    text: `Efektīvai laika plānošanai izmanto Pomodoro tehniku: 25 minūtes darba un 5 minūtes pauze. Lietotnes kā Forest vai Focus To-Do palīdz ievērot ritmu un saglabāt fokusu. Veido to-do sarakstus ar Trello vai Todoist, kur uzdevumus var sadalīt “To Do”, “Doing” un “Done”, pievienojot termiņus. Google Calendar vai Outlook nodrošina atgādinājumus par lekcijām, ieskaitēm un projektu termiņiem.`,
    imgSrc: image4,
    imgAlt: "Attēls par produktivitāti",
  },
  {
    id: "online-learning",
    title: "Tiešsaistes mācības un sadarbība",
    text: `Attālinātajām studijām izvēlies piemērotu video sapulču platformu: Zoom nodrošina grupu telpas (Breakout Rooms) un ierakstīšanu, Teams integrējas ar Office 365 un ļauj koplietot dokumentus, bet Meet darbojas pārlūkā bez instalācijām. Reāllaika dokumentu sadarbībai izmanto Google Docs/Sheets/Slides – visi redz izmaiņas nekavējoties un var pievienot komentārus. Komunikācijai izmanto Slack vai Discord, kur tērzēt par tēmām, dalīties ar failiem un koplietot ekrānu.`,
    imgSrc: image1,
    imgAlt: "Attēls par tiešsaistes mācībām",
  },
  {
    id: "conclusion",
    title: "Kopsavilkums un ieteicamie resursi",
    text: `Šajā ceļvedī apskatījām piecas svarīgas tēmas: mācību rīki (Google Docs, OneNote, Notion), programmēšana (GitHub, VS Code, Python), produktivitāte (Pomodoro, to-do saraksti, Google Calendar), attālinātas mācības (Zoom, Teams, Slack) un papildu resursi. Lai turpinātu attīstību, iesakām:

YouTube: “Traversy Media” (web izstrāde), “The Net Ninja” (JS, Python). 

Tiešsaistes kursi: Coursera (“CS50”), edX (MIT kursi). 


Forumi: Stack Overflow, Reddit r/learnprogramming, Latvijas IT Discord kanāli.
Izmanto šos resursus, lai paplašinātu zināšanas un efektīvi sadarboties.`,
    imgSrc: image6,
    imgAlt: "Noslēguma attēls",
  },
];

export default sections;
