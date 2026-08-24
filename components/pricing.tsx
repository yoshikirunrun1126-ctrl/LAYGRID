'use client'

import { Reveal } from '@/components/reveal'

const plans = [
  {
    name: 'Starter',
    price: '¥100,000',
    suffix: '〜',
    desc: '個人や小規模なプロジェクトに。シンプルで要点を押さえたWebに。',
    features: [
      '1ページのデザイン',
      'レスポンシブ対応',
      'シンプルなアニメーション',
      'お問い合わせフォーム',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '¥150,000',
    suffix: '〜',
    desc: '複数セクションで構成された、本格的なWebサイトが必要な企業に。',
    features: [
      '最大6セクション',
      'オリジナルのデザインシステム',
      '高度なモーション',
      'CMS連携',
      'SEO対策',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '応相談',
    suffix: 'お見積り',
    desc: '完全オリジナルのデジタル体験を求める、こだわりのブランドに。',
    features: [
      '規模の制限なし',
      'ブランディング一式',
      'AIを活用した制作',
      '継続的なサポート',
      '優先対応',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-border py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground" />
            Pricing
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            どんな段階にも、わかりやすい料金で。
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 transition-colors sm:p-10 ${
                  plan.featured
                    ? 'border-foreground/40 bg-card'
                    : 'border-border bg-card hover:border-foreground/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                      人気
                    </span>
                  )}
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-light tracking-tight text-foreground sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.suffix}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {plan.desc}
                </p>

                <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="h-px w-4 bg-muted-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-foreground text-background'
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  この内容で相談する
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
