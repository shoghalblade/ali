#!/bin/bash
sed -i -e '/{\/\* Contact Section \*\/}/i\
       {/* Gallery Section */}\
       <section id="gallery" className="py-24 px-4 relative max-w-6xl mx-auto z-10">\
          <motion.div\
             initial={{ opacity: 0, y: 40 }}\
             whileInView={{ opacity: 1, y: 0 }}\
             viewport={{ once: true, margin: "-100px" }}\
             transition={{ duration: 0.8 }}\
          >\
             <div className="mb-16 text-center">\
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">گالری تصاویر</h2>\
                <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto"></div>\
             </div>\
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">\
                <motion.div\
                   whileHover={{ scale: 1.02 }}\
                   className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto"\
                >\
                   <img src="/profile.jpg" alt="دکتر علی مقتدایی" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />\
                </motion.div>\
                <motion.div\
                   whileHover={{ scale: 1.05 }}\
                   className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto md:h-64"\
                >\
                   <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="کلینیک" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />\
                </motion.div>\
                <motion.div\
                   whileHover={{ scale: 1.05 }}\
                   className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto md:h-64"\
                >\
                   <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" alt="تجهیزات پزشکی" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />\
                </motion.div>\
             </div>\
          </motion.div>\
       </section>\
' src/App.tsx
