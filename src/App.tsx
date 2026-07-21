/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap, Mail, Phone, ChevronDown, Award, HeartPulse, Stethoscope, BookOpen } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden relative selection:bg-emerald-500/30">
       {/* Background glow */}
       <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-950/20 to-transparent pointer-events-none"></div>
       </div>

       {/* Hero Section */}
       <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="text-center z-10"
          >
             <motion.div
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-12 rounded-full overflow-hidden border border-emerald-500/30 shadow-2xl relative bg-neutral-900 flex items-center justify-center z-20"
             >
                <img src="/profile.jpg" alt="دکتر علی مقتدایی" referrerPolicy="no-referrer" className="w-full h-full object-cover  transition-all duration-500" />
             </motion.div>

             <div className="relative">
                <span className="absolute -top-16 -right-12 md:-right-24 text-[140px] md:text-[280px] font-black text-white/[0.03] leading-none pointer-events-none select-none italic">
                  1385
                </span>
                <motion.h1
                   className="text-6xl md:text-[90px] lg:text-[110px] font-black mb-6 leading-[0.85] tracking-tighter relative z-10"
                >
                   دکتر علی<br className="hidden md:block"/>
                   <span className="text-emerald-500">مقتدایی</span>
                </motion.h1>
             </div>
             
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-xl border-r-4 border-emerald-500 pr-6 md:pr-8 mb-12 mx-auto"
             >
                <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed text-right">
                   پزشک متخصص و پژوهشگر
                </p>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center justify-center gap-6 font-mono text-sm tracking-tighter"
             >
                <a href="#about" className="group flex items-center gap-4 px-6 py-3 border border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-black transition-colors text-emerald-500">
                   درباره من
                </a>
                <a href="#gallery" className="group flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">
                   گالری تصاویر
                </a>
                <a href="#contact" className="group flex items-center gap-4 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">
                   تماس با من
                </a>
             </motion.div>
          </motion.div>

          <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500"
          >
             <ChevronDown size={32} />
          </motion.div>
       </section>

       {/* About Section */}
       <section id="about" className="py-24 px-4 relative max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
             <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">مسیر حرفه‌ای من</h2>
                  <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                </div>
                <p className="text-neutral-400 leading-relaxed text-lg font-light">
                   باور من این است که پزشکی تنها یک علم نیست، بلکه هنری است آمیخته با تعهد و دلسوزی. در تمام سال‌های فعالیتم، همواره در تلاش بوده‌ام تا بهترین و به‌روزترین خدمات درمانی را ارائه دهم.
                </p>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-md shadow-xl"
                >
                   <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                      <GraduationCap size={32} />
                   </div>
                   <div>
                      <h3 className="text-3xl font-semibold mb-3">دانشگاه شهید بهشتی</h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-neutral-800 font-mono text-sm text-neutral-300 mb-4">
                        ورودی ۱۳۸۵
                      </span>
                      <p className="text-neutral-400 text-base leading-relaxed">
                         آغاز مسیر پزشکی در یکی از معتبرترین دانشگاه‌های علوم پزشکی ایران، جایی که پایه‌های دانش و تعهد حرفه‌ای من شکل گرفت.
                      </p>
                   </div>
                </motion.div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                {[
                   { icon: Stethoscope, title: 'طبابت بالینی', desc: 'بیش از یک دهه تجربه' },
                   { icon: Award, title: 'تخصص', desc: 'دارای بورد تخصصی' },
                   { icon: HeartPulse, title: 'مراقبت', desc: 'بیمار‌محور و دلسوزانه' },
                   { icon: BookOpen, title: 'پژوهش', desc: 'مقالات معتبر علمی' },
                ].map((item, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(38, 38, 38, 0.5)" }}
                      className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 flex flex-col items-center text-center gap-4 transition-colors"
                   >
                      <div className="p-3 rounded-2xl bg-neutral-800/50 text-emerald-400">
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-neutral-200">{item.title}</h4>
                        <p className="text-sm font-medium text-neutral-400">{item.desc}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </motion.div>
       </section>

       {/* Gallery Section */}
       <section id="gallery" className="py-24 px-4 relative max-w-6xl mx-auto z-10">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
          >
             <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">گالری تصاویر</h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto"></div>
             </div>
             <div className="flex flex-col gap-6">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                       whileHover={{ scale: 1.02 }}
                       className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto"
                    >
                       <img src="/profile.jpg" alt="دکتر علی مقتدایی" className="w-full h-full object-cover  transition-all duration-700" />
                    </motion.div>
                    <motion.div
                       whileHover={{ scale: 1.05 }}
                       className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto md:h-64"
                    >
                       <img src="/clinic.png" alt="کلینیک" className="w-full h-full object-cover  transition-all duration-500" />
                    </motion.div>
                    <motion.div
                       whileHover={{ scale: 1.05 }}
                       className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative aspect-square md:aspect-auto md:h-64"
                    >
                       <img src="/equipment.png" alt="تجهیزات پزشکی" className="w-full h-full object-cover  transition-all duration-500" />
                    </motion.div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative"
                     >
                        <img src="/africa.jpg" alt="خدمات داوطلبانه در آفریقا" className="w-full h-auto object-contain transition-all duration-700" />
                     </motion.div>
                     <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 relative"
                     >
                        <img src="/uni.jpg" alt="فارغ التحصیلی" className="w-full h-auto object-contain transition-all duration-700" />
                     </motion.div>
                 </div>
             </div>
          </motion.div>
       </section>

       {/* Contact Section */}
       <section id="contact" className="py-32 px-4 relative max-w-4xl mx-auto text-center z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-neutral-900/30 border border-neutral-800/50 p-12 md:p-20 rounded-[3rem] backdrop-blur-sm relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>

             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">در ارتباط باشیم</h2>
               <p className="text-neutral-400 mb-12 max-w-xl mx-auto text-lg font-light">
                  برای مشاوره، رزرو نوبت یا همکاری‌های علمی می‌توانید از طریق راه‌های زیر با من در تماس باشید.
               </p>

               <div className="flex flex-col md:flex-row justify-center gap-6">
                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="tel:09158727119"
                     className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors"
                  >
                     <Phone className="text-emerald-400" size={24} />
                     <span className="font-mono text-sm tracking-wider text-neutral-200" dir="ltr">0915 872 7119</span>
                  </motion.a>
               </div>
             </div>
          </motion.div>
       </section>

       <footer className="mt-auto pt-8 pb-12 px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end z-10 relative bg-neutral-950 gap-4 text-center md:text-left">
           <div className="flex flex-col space-y-2">
             <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-neutral-400">STATIONED IN TEHRAN, IRAN</p>
             <p className="text-xs font-mono opacity-40 uppercase tracking-widest text-neutral-400">DEPLOYED ON CLOUDFLARE EDGE</p>
           </div>
           <div className="flex items-center gap-6">
             <div className="hidden md:block h-px w-32 bg-white/20"></div>
           </div>
        </footer>
    </div>
  );
}
