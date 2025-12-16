import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#1a1a1a] font-serif selection:bg-neutral-300 selection:text-black">
      
      {/* --- HEADER SECTION --- */}
      <header className="border-b-4 border-double border-black bg-white pt-4 pb-2 px-4 md:px-8">
        {/* Top Bar: Date and Weather/Vol info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest border-b border-black pb-2 mb-4 font-sans text-gray-600">
          <div className="flex items-center gap-4">
            <span>Vol. 1, Issue 1</span>
            <span>•</span>
            <span>Manhattan, N.Y.</span>
          </div>
          <div className="mt-2 md:mt-0">
            Wednesday, July 5, 2006
          </div>
        </div>

        {/* Masthead */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Olympian Times
          </h1>
          <p className="text-sm md:text-base italic mt-2 font-sans text-gray-500">"All the News That's Fit to Print (and some that isn't)"</p>
        </div>

        {/* Navigation Bar */}
        <nav className="flex justify-center md:justify-between items-center py-2 border-t border-black font-sans text-xs md:text-sm font-bold uppercase tracking-wider">
           <div className="hidden md:flex gap-6">
            {['World', 'U.S.', 'Olympus', 'Camp Life', 'Opinion', 'Arts'].map((item) => (
              <a key={item} href="#" className="hover:underline hover:text-gray-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-2">
                <Menu size={20}/> <span>Sections</span>
             </button>
          </div>
           <div className="flex items-center gap-2">
             <Search size={16} />
             <span className="hidden md:inline">Search</span>
           </div>
        </nav>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Main Article */}
        <article className="lg:col-span-8 bg-white p-6 md:p-10 shadow-sm border border-gray-200">
          
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              GREEK GODS ARE REAL!
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-700 mb-2 font-sans">
              Authorities Investigate Camp Half-Blood After Teen Reports Contact With Olympian Gods
            </h3>
          </div>

          {/* Byline */}
          <div className="flex items-center justify-between border-y border-gray-300 py-3 mb-8 font-sans text-sm text-gray-600 uppercase font-bold tracking-wider">
            <span>By Catherine Dao</span>
            <span>Manhattan Bureau</span>
          </div>

          {/* Article Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-800 text-justify">
            
            {/* Column 1 */}
            <div className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] font-serif">
              <p className="mb-6">
                <span className="font-bold uppercase">Manhattan, N.Y.</span> — A New York teen has sparked global attention after claiming to have direct contact with Olympian Gods. NYC Officials have launched an investigation into Camp Half-Blood, a hidden location where demigods reportedly train.
              </p>
              <p className="mb-6">
                Percy Jackson, aged 12, says he is the son of Poseidon and recently completed a quest to return Zeus's stolen lightning bolt. 
                <span className="block mt-4 pl-4 border-l-4 border-black italic text-gray-600 font-medium">
                  "Look, I didn't want to be a half-blood" (p. 1)
                </span>
              </p>
              <p className="mb-6">
                Jackson's quest began when he was accused of theft by Lord Zeus. The teenager traveled across the U.S. with two friends, Annabeth Chase & Grover Underwood, while continuously facing threats from multiple Olympian Gods & monsters.
              </p>
            </div>

            {/* Column 2 */}
            <div className="font-serif">
               <p className="mb-6">
                The bolt was observed in a backpack given to Percy by Ares, the god of war. Jackson returned the bolt to Zeus after multiple challenging parts on his journey, returning the weapon at Mount Olympus, located at the top of the Empire State Building.
                 <span className="block mt-4 pl-4 border-l-4 border-black italic text-gray-600 font-medium">
                  "If my life is going to mean anything, I have to live it myself" (p. 348)
                </span>
              </p>
              <p className="mb-6">
                Officials confirmed that Camp Half-Blood is under investigation. The camp, located on Long Island, N.Y., is rumored to train children of Greek gods. Sources say Percy Jackson's quest was sanctioned by camp leaders after Zeus's lightning bolt went missing.
              </p>
              <p className="mb-6">
                "We are gathering all info available," said an agent from the Mythological Affairs Bureau. "This is a matter of global importance."
              </p>
              <p>
                 Jackson's companions, Annabeth Chase & Grover Underwood, have not commented publicly; however, camp leaders say both played key roles.
                 <span className="block mt-4 pl-4 border-l-4 border-black italic text-gray-600 font-medium">
                  "The gods are real. They are here. And they are watching." (p. 40)
                </span>
                 said Chiron, the camp director.
              </p>
            </div>

          </div>
        </article>

        {/* RIGHT COLUMN: Sidebar & Extras */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Visual / Image Block */}
          <div className="bg-white p-4 shadow-sm border border-gray-200">
             <div className="aspect-[4/3] bg-gray-200 mb-3 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               {/* Updated Image: Using local file picture.jpg */}
               <img 
                 src="/picture.jpg" 
                 alt="Storm clouds over skyscraper" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/10"></div>
             </div>
             <p className="text-xs text-gray-500 font-sans italic border-b border-gray-200 pb-2">
               FIG 1. An unexplained electrical storm over the Empire State Building, believed to be the location of Mount Olympus.
             </p>
          </div>

          {/* Fact Box: Camp Half-Blood */}
          <div className="bg-neutral-100 p-6 border-t-4 border-black shadow-sm">
            <h4 className="font-bold text-xl uppercase mb-4 font-sans tracking-wide border-b border-gray-300 pb-2">
              What is Camp Half-Blood?
            </h4>
            <ul className="space-y-3 text-sm font-serif list-disc pl-5 text-gray-800">
              <li>
                <span className="font-bold">Definition:</span> A hidden camp for demigods (half-human, half-god).
              </li>
              <li>
                <span className="font-bold">Location:</span> Long Island, New York.
              </li>
              <li>
                <span className="font-bold">Curriculum:</span> Offers training in combat, survival, & ancient Greek history.
              </li>
              <li>
                <span className="font-bold">Security:</span> Protected by magical borders preventing mortal entry.
              </li>
            </ul>
          </div>

          {/* "Works Cited" / Source Block */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
             <h4 className="font-bold text-sm uppercase mb-3 font-sans text-gray-500 tracking-wider">
               Sources
             </h4>
             <p className="text-xs font-serif text-gray-600 italic">
               Riordan, Rick. <em>The Lightning Thief</em>. New York: Miramax Books, 2005. Print.
             </p>
          </div>

        </aside>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white py-12 border-t-4 border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h5 className="font-bold uppercase tracking-widest mb-4 text-gray-400 text-xs">About The Paper</h5>
            <p className="text-sm text-gray-300 font-serif leading-relaxed">
              The Olympian Times is the premier source for news spanning the mortal and immortal worlds. Delivering truth from Mount Olympus to the Underworld since the First Age.
            </p>
          </div>

          <div className="md:text-center">
             <h2 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
              The Olympian Times
            </h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Est. Ancient Greece
            </p>
          </div>

          <div className="md:text-right">
             <h5 className="font-bold uppercase tracking-widest mb-4 text-gray-400 text-xs">Contact</h5>
             <p className="text-sm text-gray-300 font-serif">
               600th Floor, Empire State Building<br/>
               New York, NY 10118<br/>
               <span className="italic opacity-60">hermes@olympiantimes.com</span>
             </p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 font-sans uppercase tracking-wider">
          © 2006 The Olympian Times Media Group. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default App;
