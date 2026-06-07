'use client'

import { Reveal } from '@/components/reveal'

const steps = [
  { n: '01', title: 'ご相談', desc: '目標・ターゲット・思い描く理想をお伺いします。' },
  { n: '02', title: '戦略設計', desc: '構成・コンテンツ・方向性を明確にします。' },
  { n: '03', title: 'デザイン', desc: 'ビジュアルの世界観とUIをつくり込みます。' },
  { n: '04', title: '開発', desc: '高速で快適、モダンなコードで実装します。' },
  { n: '05', title: '公開', desc: '本番環境へ公開し、実運用に向けて調整します。' },
  { n: '06', title: '運用サポート', desc: '公開後の保守・更新・改善を継続的に支援します。' },
]

export function Workflow() {
  return (
    <section
      id="process"
      className="relative border-t border-border py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground" />
            Workflow
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            ご相談から公開まで、明確で丁寧なプロセス。
          </h2>
        </Reveal>

        {/* horizontal timeline */}
        <div className="mt-16 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-px border-t border-border lg:min-w-0 lg:grid lg:grid-cols-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="group relative w-52 pt-8 lg:w-auto">
                  <span className="absolute -top-px left-0 h-px w-0 bg-foreground transition-all duration-700 group-hover:w-full" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {step.n}
                  </span>
                  <h3 className="mt-6 text-lg font-light tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[12rem] text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
