#!/bin/bash
sed -i -e '/<footer className="py-10 text-center text-zinc-600 text-sm border-t border-zinc-900\/50 relative z-10">/,/<\/footer>/c\
       <footer className="mt-auto pt-8 pb-12 px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end z-10 relative bg-neutral-950 gap-4 text-center md:text-left">\
           <div className="flex flex-col space-y-2">\
             <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-neutral-400">STATIONED IN TEHRAN, IRAN</p>\
             <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-neutral-400">DEPLOYED ON CLOUDFLARE EDGE</p>\
           </div>\
           <div className="flex items-center gap-6">\
             <div className="hidden md:block h-px w-32 bg-white/20"></div>\
             <div className="group cursor-pointer flex items-center gap-4">\
               <span className="text-sm uppercase tracking-tighter text-neutral-300">مشاهده رزومه کامل</span>\
               <div className="w-10 h-10 border border-emerald-500 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">\
                 <span className="text-emerald-500 group-hover:text-black">←</span>\
               </div>\
             </div>\
           </div>\
        </footer>' src/App.tsx
