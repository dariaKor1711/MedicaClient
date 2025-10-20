export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-8xl items-start justify-between py-16 px-8">
        <div className="flex h-full flex-col items-start justify-center gap-8 py-6">
          <div className="flex flex-col items-start gap-6">
            <h1 className="max-w-[750px] font-poppins text-[62px] font-semibold leading-[74px] text-black">
              Experienced
              <br />
              general
              <br />
              practitioners who
              <br />
              have an eye for
              <br />
              your care
            </h1>
            <p className="max-w-[600px] font-poppins text-lg leading-[27px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-[56px] bg-primary px-6 py-4 font-inter text-base font-semibold text-white hover:bg-primary/90 transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px]"
            >
              <path
                d="M13.5 8.25h-3v-3c0-.4-.3-.75-.75-.75s-.75.35-.75.75v3h-3c-.4 0-.75.3-.75.75s.35.75.75.75h3v3c0 .4.3.75.75.75s.75-.35.75-.75v-3h3c.4 0 .75-.3.75-.75s-.35-.75-.75-.75z"
                fill="currentColor"
              />
            </svg>
            Book an appointment
          </button>
        </div>
        <div className="flex h-full items-end justify-center pr-8">
          <img
            src="/images/doctor.png"
            alt="Врач"
            className="h-[617.5px] w-[464.94px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

