export default function Reasons() {
  return (
    <section className="w-full bg-white py-[120px]">
      <div className="mx-auto flex max-w-8xl flex-col gap-[120px]">
        {/* Reason 1 - Dedicated doctors */}
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="max-w-[600px] whitespace-pre-line font-poppins text-[56px] font-semibold leading-[64.4px] text-black">
                Dedicated doctors
                <br />
                with the core
                <br />
                mission to help.
              </h2>
              <p className="max-w-[600px] whitespace-pre-line font-poppins text-lg leading-[27px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-poppins text-base font-semibold leading-6 text-black">
                See our doctors
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 1.5L8.5 6L3 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <img
            src="/images/doctor-1.png"
            alt="Врач"
            className="h-[498.75px] w-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Reason 2 - Specialty tests */}
        <div className="flex items-center gap-10">
          <img
            src="/images/lab.png"
            alt="Лаборатория"
            className="h-[499.04px] w-[520px] object-cover rounded-lg"
          />
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="max-w-[600px] font-poppins text-[56px] font-semibold leading-[64.4px] text-black">
                Get access to specialty tests and breakthrough information.
              </h2>
              <p className="max-w-[600px] whitespace-pre-line font-poppins text-lg leading-[27px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-poppins text-base font-semibold leading-6 text-black">
                Find test
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 1.5L8.5 6L3 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Reason 3 - Virtual appointment */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="max-w-[600px] whitespace-pre-line font-poppins text-[56px] font-semibold leading-[64.4px] text-black">
                Find out how we
                <br />
                can help you
                <br />
                help you.
              </h2>
              <p className="max-w-[600px] whitespace-pre-line font-poppins text-lg leading-[27px] text-black">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <button className="rounded-full bg-primary px-6 pb-4 pt-[15.25px] font-inter text-base font-semibold text-white hover:bg-primary/90 transition-colors">
              Book a virtual appointment
            </button>
          </div>
          <img
            src="/images/consultation.png"
            alt="Консультация"
            className="h-[499.13px] w-[580px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

