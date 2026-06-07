export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] text-foreground">
              LAYGRID
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              和歌山発。モダンでミニマルなデジタル体験を手がけるクリエイティブWebスタジオ。
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Studio
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-foreground/80 transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#works" className="text-foreground/80 transition-colors hover:text-foreground">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-foreground/80 transition-colors hover:text-foreground">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://instagram.com/laygrid_wakayama"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/80 transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LAYGRID. All rights reserved.</p>
          <p className="font-mono tracking-wide">Wakayama, Japan — 34.2°N</p>
        </div>
      </div>
    </footer>
  )
}
