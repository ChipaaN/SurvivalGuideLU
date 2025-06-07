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
    text: `Atceros savu pirmo semestra lekciju – sēdēju ar piezīmju burtnīcu rokās un pilnīgā haosā ķēros pie Google Docs. Dažkārt aizmirsu, kur saglabāju svarīgāko informāciju, līdz sapratu, ka man nepieciešama skaidra darba plūsma.  
    
Šajā ceļvedī dalīšos ar personīgi pārbaudītiem paņēmieniem un rīkiem, kas palīdzēs tev organizēt piezīmes, plānot laiku, apgūt programmēšanu un sadarboties tiešsaistē. Apskatīsim piecas svarīgas tēmas un īstus piemērus, kā studijas padarīt efektīvākas un patīkamākas.`,
    imgSrc: image5,
    imgAlt: "Ievada sadaļas attēls",
  },

  {
    id: "tools",
    title: "Galvenie mācību rīki",
    text: `Kad man vajadzēja sakārtot piezīmes, sāku ar Google Docs – vienmēr ir ērti koplietot dokumentus ar kursa biedriem un rediģēt tiešsaistē. OneNote izmantoju, lai zīmētu diagrammas un ierakstītu audio piezīmes; sadaļas ļauj ātri atrast iepriekšējās idejas. Notion kalpo kā visa veida datubāze: rokraksta piezīmes, to-do saraksti un atsauces vienuviet. Atsauču pārvaldībai iesaku Zotero vai Mendeley – automātiski ģenerēts citāts un vienkārša bibliogrāfija ietaupa daudz laika.`,
    imgSrc: image2,
    imgAlt: "Attēls par mācību rīkiem",
  },

  {
    id: "programming",
    title: "Programmēšana un izstrāde",
    text: `Programmēšana palīdz attīstīt analītisko domāšanu un problēmu risināšanu. Sāc ar GitHub konta izveidi un pamata komandām (clone, commit, push, pull), lai vari sekot koda izmaiņām. Front-end izstrādei apgūsti HTML, CSS un JavaScript, bet datu analīzei – Python ar Jupyter Notebook. Strādāju VS Code, izmantojot ESLint un Prettier, lai kods būtu tīrs. Vienotu vidi nodrošinu ar Docker konteineriem (Python vai Node.js). Vienību testi (Jest, pytest) ļauj uzturēt koda kvalitāti un vieglāk veikt refaktoringu.`,
    imgSrc: image3,
    imgAlt: "Programmēšanas attēls",
  },

  {
    id: "productivity",
    title: "Produktivitāte un laika pārvaldība",
    text: `Efektīvai laika plānošanai izmantoju Pomodoro tehniku – 25 minūšu darba cikls un 5 minūšu pauze. Aplikācijas Forest un Focus To-Do palīdz ievērot ritmu un saglabāt fokusu. Trello vai Todoist izmantoju, lai sadalītu uzdevumus kolonnās “To Do”, “Doing” un “Done”; termiņi un atgādinājumi Google Calendar vai Outlook nodrošina, ka nekas netiek palaists garām.`,
    imgSrc: image4,
    imgAlt: "Attēls par produktivitāti",
  },

  {
    id: "online-learning",
    title: "Tiešsaistes mācības un sadarbība",
    text: `Tiešsaistes lekcijās visbiežāk iznāk izmantot Microsoft Teams – grupu sarakstes un ieraksti man ļauj atkārtot svarīgāko. Microsoft Teams arī noder Office 365 integrācijas dēļ, savukārt Google Meet darbojas tieši pārlūkā. Reāllaika dokumentu sadarbībai izmantoju Google Docs/Sheets/Slides ar komentāriem. Saziņai izvēlos Slack vai Discord – tērzēšana, failu koplietošana un ekrānšāviņu dalīšanās padara komandas darbu vieglāku.`,
    imgSrc: image1,
    imgAlt: "Attēls par tiešsaistes mācībām",
  },

  {
    id: "conclusion",
    title: "Kopsavilkums un ieteicamie resursi",
    text: `Šajā ceļvedī apskatījām piezīmju rīkus (Google Docs, OneNote, Notion), programmēšanu (GitHub, VS Code, Python), produktivitāti (Pomodoro, to-do sarakstus, Google Calendar), tiešsaistes mācības (Zoom, Teams, Slack/Discord) un papildu resursus.  
      
Lai turpinātu attīstīties, iesaku:
- YouTube: “Traversy Media” (web izstrāde), “The Net Ninja” (JS, Python)  
- Coursera: CS50  
- edX: MIT kursi  
- Forumi: Stack Overflow, Reddit r/learnprogramming, Latvijas IT Discord kopienas  
  
Izmanto šos avotus, lai paplašinātu zināšanas, uzdotu jautājumus un efektīvi sadarboties.`,
    imgSrc: image6,
    imgAlt: "Noslēguma attēls",
  },
];

export default sections;
