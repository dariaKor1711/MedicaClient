export default function CallToAction() {
  return (
    <section className="w-full bg-white py-0 pb-[120px]">
      <div className="mx-auto max-w-8xl">
        <div className="flex w-full flex-col items-center gap-16 bg-primary px-20 py-20 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <h2 className="max-w-[800px] whitespace-pre-line font-poppins text-[56px] font-semibold leading-[64.4px] text-center text-white">
              Schedule an in person or
              <br />
              virtual appointment today
            </h2>
            <p className="max-w-[900px] whitespace-pre-line font-poppins text-lg leading-[27px] text-center text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
              <br />
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-white px-6 pb-4 pt-[15.25px] font-inter text-base font-semibold text-black hover:bg-gray-100 transition-colors">
              Book in person appointment
            </button>
            <button className="rounded-full bg-white px-6 pb-4 pt-[15.25px] font-inter text-base font-semibold text-black hover:bg-gray-100 transition-colors">
              Book virtual appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

