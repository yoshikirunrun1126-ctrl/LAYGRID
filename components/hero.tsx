'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* subtle grid background */}
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background"
        aria-hidden="true"
      />
      {/* cinematic radial glow */}
      <div
        className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground"
        >
          <span className="h-px w-8 bg-muted-foreground" />
          Creative Web Studio — 和歌山
        </motion.p>

        <h1 className="max-w-5xl text-balance text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
          {['精緻なデザインで', '伝わるWeb体験を', 'かたちに。'].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          LAYGRID（レイグリッド）は和歌山を拠点とするクリエイティブWebスタジオ。ミニマルなデザインと戦略的な設計で、モダンなWebサイトを制作します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#works"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            制作実績（コンセプト）を見る
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            お問い合わせ
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  )
}
