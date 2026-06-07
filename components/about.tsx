'use client'

import { Reveal } from '@/components/reveal'

const visualBlocks: {
  label: string
  description: string
  mark: 'structure' | 'clarity' | 'precision' | 'craft'
}[] = [
  {
    label: '構造',
    description: '情報の階層とグリッドから、読みやすい土台を設計します。',
    mark: 'structure',
  },
  {
    label: '明快さ',
    description: '伝えるべきことを整理し、迷いのない体験にします。',
    mark: 'clarity',
  },
  {
    label: '精密さ',
    description: '余白・タイポグラフィ・動きまで、細部を磨き込みます。',
    mark: 'precision',
  },
  {
    label: '丁寧な仕事',
    description: '目的と背景を理解し、納得できる形で届けます。',
    mark: 'craft',
  },
]

const stats = [
  { value: 'ミニマル', label: 'デザインの言語' },
  { value: '戦略的', label: '取り組み方' },
  { value: 'モダン', label: '技術' },
]

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground" />
            About
          </p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                洗練された構造で、
                <br />
                <span className="text-muted-foreground">最大の効果を。</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                LAYGRIDは、企業やクリエイターのためのモダンなWeb体験、ブランディング、洗練されたデジタルデザインを手がけています。優れたデザインとは、不要なものを削ぎ落とし、本質を明確に伝えることだと考えています。
              </p>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                すべてのプロジェクトは「構造」から始まります。精密なグリッド、考え抜かれた情報の階層、そして目的とデザインを結びつける戦略。その結果として、自然で、時代に左右されない、上質な仕上がりが生まれます。
              </p>
            </Reveal>
          </div>
        </div>

        {/* values grid */}
        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {visualBlocks.map((item, i) => (
              <div
                key={item.label}
                className="group flex flex-col gap-4 bg-card p-5 transition-colors hover:bg-secondary sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-muted-foreground/30" />
                </div>

                <div className="flex h-16 items-center">
                  <ValueMark type={item.mark} />
                </div>

                <div>
                  <h3 className="text-base font-light tracking-tight text-foreground sm:text-lg">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-px grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card p-8">
                <p className="text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ValueMark({
  type,
}: {
  type: 'structure' | 'clarity' | 'precision' | 'craft'
}) {
  if (type === 'structure') {
    return (
      <div className="flex flex-col items-center gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-8 border border-foreground/50" />
        <span className="h-3 w-px bg-foreground/30" />
        <div className="flex gap-2">
          <span className="size-2 border border-foreground/35" />
          <span className="size-2 border border-foreground/35" />
          <span className="size-2 border border-foreground/35" />
        </div>
      </div>
    )
  }

  if (type === 'clarity') {
    return (
      <div className="flex flex-col gap-2" aria-hidden="true">
        <span className="h-px w-10 bg-foreground/70" />
        <span className="h-px w-7 bg-foreground/45" />
        <span className="h-px w-4 bg-foreground/25" />
      </div>
    )
  }

  if (type === 'precision') {
    return (
      <div
        className="grid grid-cols-2 gap-1.5"
        aria-hidden="true"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="size-3 border border-foreground/35"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-8 border border-foreground/50" />
      <span className="h-2.5 w-8 translate-x-2 border border-foreground/35" />
      <span className="h-2.5 w-8 translate-x-4 border border-foreground/20" />
    </div>
  )
}
