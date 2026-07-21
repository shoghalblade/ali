#!/bin/bash
sed -i -e '/<a href="#about" className="group flex items-center gap-4 px-6 py-3 border border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-black transition-colors text-emerald-500">/,/<\/a>/c\
                <a href="#about" className="group flex items-center gap-4 px-6 py-3 border border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-black transition-colors text-emerald-500">\
                   درباره من\
                </a>\
                <a href="#gallery" className="group flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">\
                   گالری تصاویر\
                </a>\
                <a href="#contact" className="group flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">\
                   تماس با من\
                </a>' src/App.tsx
