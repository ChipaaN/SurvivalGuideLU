// src/App.js
import React from "react";
import Header from "./components/Header";
import ZigzagSection from "./components/ZigzagSection";
import Footer from "./components/Footer";
import sections from "./data/sections";
import "./components/globals.css";

function App() {
  return (
    <>
      <Header />
      <main>
        {sections.map((sec, idx) => {
          const shouldReverse = idx % 2 === 1;
          const bgClass = idx % 2 === 0 ? "section-bg-odd" : "section-bg-even";

          return (
            <section id={sec.id} key={sec.id} className={bgClass}>
              <div className="container">
                <ZigzagSection
                  title={sec.title}
                  text={sec.text}
                  imgSrc={sec.imgSrc}
                  imgAlt={sec.imgAlt}
                  reverse={shouldReverse}
                />
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
