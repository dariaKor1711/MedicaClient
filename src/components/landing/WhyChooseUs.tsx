export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-90 py-[120px] px-20">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="max-w-[600px] font-poppins text-[56px] font-semibold leading-[64.4px] text-center text-black">
            Why choose us
          </h2>
          <p className="max-w-[700px] whitespace-pre-line font-poppins text-lg leading-[27px] text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-12">
          <div className="relative z-10 flex max-w-[900px] items-center justify-center">
            <div className="relative h-[497.45px] w-full">
              <img
                src="/images/video-placeholder.png"
                alt="Video"
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8L24 16L12 24V8Z"
                      fill="#2461FF"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="font-poppins text-2xl font-semibold leading-9 text-center text-black">
              Consectetur adipiscing elit, sed do eiusmod tempor
            </h3>
            <p className="max-w-[600px] whitespace-pre-line font-poppins text-base leading-6 text-center text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />
              tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

