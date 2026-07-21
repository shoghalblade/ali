#!/bin/bash
sed -i -e '/<div className="flex flex-col md:flex-row justify-center gap-6">/,/<\/div>/c\
               <div className="flex flex-col md:flex-row justify-center gap-6">\
                  <motion.a\
                     whileHover={{ scale: 1.05 }}\
                     whileTap={{ scale: 0.95 }}\
                     href="tel:09158721773"\
                     className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors"\
                  >\
                     <Phone className="text-emerald-400" size={24} />\
                     <span className="font-mono text-sm tracking-wider text-neutral-200" dir="ltr">0915 872 1773</span>\
                  </motion.a>\
               </div>' src/App.tsx
