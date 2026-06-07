'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const works = [
  {
    title: 'モダンカフェのWebサイト',
    category: '飲食 · ブランディング & Web',
    year: '2025',
    desktop: '/works/cafe-desktop.png',
    mobile: '/works/cafe-mobile.png',
  },
  {
    title: '建設会社のWebサイト',
    category: 'コーポレート · Webデザイン',
    year: '2025',
    desktop: '/works/construction-desktop.png',
    mobile: '/works/construction-mobile.png',
  },
  {
    title: '高級バーバーのWebサイト',
    category: 'ライフスタイル · ブランディング & Web',
    year: '2025',
    desktop: '/works/barber-desktop.png',
    mobile: '/works/barber-mobile.png',
  },
]

export function Works() {
  return (
    <section id="works" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground" />
              Concept Works
            </p>
            <h2 className="max-w-2xl text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              デザインの思考を映し出すコンセプト制作。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              レイアウト・モーション・ディテールへの考え方を示す、自主制作のコンセプト作品をご紹介します。
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {works.map((work, i) => (
            <Reveal key={work.title} delay={i * 0.08}>
              <article className="group relative grid items-center gap-8 bg-card p-6 transition-colors duration-500 hover:bg-secondary sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1} / {work.year}
                  </span>
                  <h3 className="mt-4 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {work.category}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                    コンセプトを見る
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>

                <div className="relative lg:col-span-8">
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <Image
                      src={work.desktop || '/placeholder.svg'}
                      alt={`${work.title} desktop mockup`}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* floating mobile mockup */}
                  <div className="absolute -bottom-4 right-4 w-20 overflow-hidden rounded-lg border border-border shadow-2xl shadow-black/60 transition-all duration-700 group-hover:-translate-y-2 sm:w-28 lg:-right-2">
                    <Image
                      src={work.mobile || '/placeholder.svg'}
                      alt={`${work.title} mobile mockup`}
                      width={300}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
