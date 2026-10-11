import React from 'react';
import { Flame, HeartHandshake, Wheat, ShieldCheck } from 'lucide-react';

export default function OurCraft() {
  const craftPillars = [
    {
      number: '01',
      title: 'Gir Cow A2 Bilona Ghee',
      subtitle: 'Cultured & Hand-Churned',
      description:
        'We never use commercial butteroil or processed shortening. Our ghee is churned in earthen vats using whole cultured A2 curd from grass-fed Gir cows, imparting deep golden nutty notes.',
      icon: Flame,
    },
    {
      number: '02',
      title: '90-Minute Low-Flame Roast',
      subtitle: 'The Lost Art of Patience',
      description:
        'Our besan and ancient grains are roasted in heavy hand-hammered brass vessels over slow embers, continuously stirred by master mithai artisans until the flour blooms without burning.',
      icon: Wheat,
    },
    {
      number: '03',
      title: 'Zero Refined White Sugar',
      subtitle: 'Only Whole Organic Sweetness',
      description:
        'We harness sweetness as nature intended: soft Afghani anjeer (figs), Arabian Medjool dates, organic palm jaggery from Tamil Nadu, and unrefined raw golden khandsari.',
      icon: HeartHandshake,
    },
    {
      number: '04',
      title: 'Uncompromised Purity',
      subtitle: 'Zero Preservatives or Fillers',
      description:
        'No artificial essences, no liquid glucose, no cheap flour fillers, and no synthetic colorings. Only whole California Mamra almonds, Iranian green pistachios, and saffron.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="craft" className="relative py-20 lg:py-28 bg-[#F5EFEB] border-t border-[#E6DDCC]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Introduction */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9A7D50] font-sans-brand font-medium">
            The Philosophy
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29221B]">
            Sacred Ingredients, Honored by Human Hands.
          </h2>
          <p className="font-sans-brand text-base sm:text-lg text-[#6C5E4E] font-light leading-relaxed">
            In an era of mass-manufactured confections laden with hydrogenated fats and artificial syrups, Purnima’s Nutty Kitchen was founded to resurrect the sublime reverence of authentic Indian culinary heritage.
          </p>
        </div>

        {/* 4 Craft Pillars with Natural Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#FAF8F5] p-8 rounded-xl border border-[#E8DFC9] flex flex-col justify-between hover:border-[#C5A059] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-brand text-2xl font-light text-[#C5A059] group-hover:text-[#9A7736] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-full bg-[#F3ECE0] text-[#9A7736] group-hover:bg-[#EBE0CD] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-serif-brand text-xl sm:text-2xl font-medium text-[#29221B] mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-sans-brand text-[#9A7D50] mb-3 font-medium">
                    {pillar.subtitle}
                  </div>

                  <p className="font-sans-brand text-xs sm:text-sm text-[#6C5E4E] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFE8DA] flex items-center gap-2 text-[11px] text-[#8C7A65] font-sans-brand">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <span>Artisanal Kitchen Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sensory Manifesto Quote Block */}
        <div className="mt-16 bg-[#FAF7F0] rounded-2xl p-8 sm:p-12 border border-[#E6DDCC] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h4 className="font-serif-brand text-2xl sm:text-3xl font-normal text-[#29221B]">
              "A true ladoo should crumble gently on your tongue, release the warm aroma of browned bilona butter, and leave a sweet whisper of cardamom."
            </h4>
            <p className="font-sans-brand text-xs sm:text-sm text-[#8C7B68]">
              — Purnima Trivedi, Founder & Master Halwai
            </p>
          </div>

          <div className="shrink-0 text-center md:text-right">
            <div className="font-mono text-2xl font-semibold text-[#29221B] tabular-nums">100%</div>
            <div className="text-xs font-sans-brand text-[#7C6C58]">Natural Nutrient Density</div>
            <div className="mt-3 text-[11px] text-[#A69784] font-sans-brand">Lab Certified Purity Tested</div>
          </div>
        </div>

      </div>
    </section>
  );
}
