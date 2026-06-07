'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'ゼロからでも相談できますか？',
    a: 'もちろんです。最初のアイデア段階から、構成・戦略・ビジュアルの方向性を一緒に整理し、公開後まで一貫してサポートします。',
  },
  {
    q: 'スマートフォンには対応していますか？',
    a: '制作するすべてのWebサイトはモバイルファーストで設計し、スマホ・タブレット・PCのいずれでも快適にご覧いただけるよう仕上げます。',
  },
  {
    q: '修正のお願いはできますか？',
    a: 'はい。修正は制作プロセスの一部です。密にやり取りしながら、納得いただけるまでデザインを調整します。',
  },
  {
    q: '制作期間はどのくらいですか？',
    a: '規模によって異なります。ランディングページで1〜2週間、コーポレートサイト全体では3〜6週間ほどが目安です。',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                <span className="h-px w-8 bg-muted-foreground" />
                FAQ
              </p>
              <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl">
                よくあるご質問。
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={faq.q} delay={i * 0.05}>
                    <div className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-7 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-lg font-light tracking-tight text-foreground sm:text-xl">
                          {faq.q}
                        </span>
                        <span
                          className={`relative h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                        >
                          <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-foreground" />
                          <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-foreground" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
