'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <Suspense fallback={<ContactLayout showForm />}>
      <ContactContent />
    </Suspense>
  )
}

function ContactContent() {
  const searchParams = useSearchParams()
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams.get('submitted') === 'contact') {
      setShowSuccess(true)
      setError(null)
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `${window.location.pathname}#contact`)
      return
    }

    if (searchParams.get('contact_error') === '1') {
      setShowSuccess(false)
      setError('送信に失敗しました。時間をおいて再度お試しください。')
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `${window.location.pathname}#contact`)
    }
  }, [searchParams])

  return (
    <ContactLayout
      showForm={!showSuccess}
      error={error}
      onNewInquiry={() => {
        setShowSuccess(false)
        setError(null)
      }}
    />
  )
}

function ContactLayout({
  showForm,
  error,
  onNewInquiry,
}: {
  showForm: boolean
  error?: string | null
  onNewInquiry?: () => void
}) {
  return (
    <section
      id="contact"
      className="relative border-t border-border py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                <span className="h-px w-8 bg-muted-foreground" />
                Contact
              </p>
              <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                精度の高いものを、
                <br />
                <span className="text-muted-foreground">一緒につくりましょう。</span>
              </h2>
              <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
                プロジェクトについてお聞かせください。通常、1営業日以内にご返信します。
              </p>

              <div className="mt-10">
                <a
                  href="https://instagram.com/laygrid_wakayama"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  @laygrid_wakayama
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {showForm ? (
                <form
                  action="/api/contact"
                  method="POST"
                  className="rounded-2xl border border-border bg-card p-8 sm:p-10"
                >
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="space-y-8">
                    <Field label="お名前" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="山田 太郎"
                        className="w-full border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                      />
                    </Field>
                    <Field label="会社名" htmlFor="company" optional>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="株式会社〇〇"
                        className="w-full border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                      />
                    </Field>
                    <Field label="メールアドレス" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                      />
                    </Field>
                    <Field label="メッセージ" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="プロジェクトについてお聞かせください"
                        className="w-full resize-none border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                      />
                    </Field>
                  </div>
                  {error && (
                    <p className="mt-6 text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    送信する
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              ) : (
                <div className="flex h-full min-h-[20rem] flex-col items-start justify-center rounded-2xl border border-border bg-card p-10">
                  <span className="font-mono text-xs text-muted-foreground">
                    送信完了
                  </span>
                  <h3 className="mt-4 text-2xl font-light tracking-tight text-foreground">
                    ありがとうございます。
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    メッセージを受け付けました。担当より追ってご連絡いたします。
                  </p>
                  {onNewInquiry && (
                    <button
                      type="button"
                      onClick={onNewInquiry}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                    >
                      もう一度お問い合わせする
                      <span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
        {optional && (
          <span className="ml-2 normal-case tracking-normal text-muted-foreground/70">
            任意
          </span>
        )}
      </label>
      {children}
    </div>
  )
}
