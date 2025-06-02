import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' }
  ],
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/acat.hasninelife', icon: 'fab fa-facebook' },
    { name: 'GitHub', href: 'https://github.com/Zeroptj', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/piyawat-jittrawong-44528b201/', icon: 'fab fa-linkedin' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#fafafa]/20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-semibold text-lg neon-text">Zero.ptj</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/60">
              A passionate Finance and specialize in portfolio optimization, asset allocation, and risk management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-[#fafafa]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Social</h3>
              <ul className="mt-4 space-y-3">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-white/60 transition-colors hover:text-[#f3f5f2]"
                    >
                      <i className={`${item.icon} w-5`} aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#73D25D]/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Piyawat Jittrawong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 