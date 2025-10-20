export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-20 py-6">
        <div className="flex items-center gap-8">
          <div className="h-[38px] w-[165px]">
            <img
              src="/images/logo.svg"
              alt="Medica Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#features"
              className="font-poppins text-base font-medium text-black hover:text-primary"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="font-poppins text-base font-medium text-black hover:text-primary"
            >
              How it works
            </a>
            <a
              href="#prices"
              className="font-poppins text-base font-medium text-black hover:text-primary"
            >
              Prices
            </a>
            <a
              href="#contact"
              className="font-poppins text-base font-medium text-black hover:text-primary"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-1.5 py-0.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px]"
            >
              <path
                d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.7-6.5-6.5l2.2-2.2c.3-.3.4-.7.2-1C5.7 3.9 5.5 2.7 5.5 1.5c0-.6-.4-1-1-1h-3C.9.5.5.9.5 1.5 .5 10.6 7.4 17.5 16.5 17.5c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1z"
                fill="currentColor"
              />
            </svg>
            <span className="font-inter text-base font-semibold text-black">
              +0 123-456-789
            </span>
          </div>
          <button className="rounded-full bg-primary px-6 pb-4 pt-[15.25px] font-inter text-base font-semibold text-white hover:bg-primary/90 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

