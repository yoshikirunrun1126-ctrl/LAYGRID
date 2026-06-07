'use client'

import { Reveal } from '@/components/reveal'

const services = [
  {
    title: 'コーポレートサイト制作',
    desc: '事業の魅力を明確に、そして信頼感を持って伝える、洗練されたWebサイトを制作します。',
  },
  {
    title: 'ランディングページ制作',
    desc: '明確なメッセージと行動を促す導線を軸に、成果につながる1ページを設計します。',
  },
  {
    title: 'ブランディング',
    desc: 'ロゴやタイポグラフィ、ビジュアルの世界観まで、一貫性のある上質なブランドを構築します。',
  },
  {
    title: 'AIを活用したWeb制作',
    desc: '最新のAIツールを取り入れ、スピーディーかつ賢いワークフローで制作を進めます。',
  },
  {
    title: 'Webサイトのリニューアル',
    desc: '既存サイトを、モダンな構造・モーション・パフォーマンスで再構築します。',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-border py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground" />
            Services
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            長く愛されるWebの存在感を、まるごとサポート。
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col justify-between gap-10 bg-card p-8 transition-colors duration-500 hover:bg-secondary sm:p-10">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-light tracking-tight text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <span className="mt-6 inline-block h-px w-0 bg-foreground transition-all duration-500 group-hover:w-12" />
                </div>
              </article>
            </Reveal>
          ))}
          <div className="hidden bg-card lg:block" />
        </div>
      </div>
    </section>
  )
}
