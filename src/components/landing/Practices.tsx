export default function Practices() {
  const practices = [
    {
      title: 'Cardiology',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
    {
      title: 'Orthopedics',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
    {
      title: 'Ophtalmology',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
    {
      title: 'Pediatrics',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
    {
      title: 'Nutrition',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
    {
      title: 'General',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
    },
  ]

  return (
    <section className="w-full bg-white py-[120px] px-20">
      <div className="mx-auto flex max-w-8xl items-start gap-10">
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-[385px] whitespace-pre-line font-poppins text-[56px] font-semibold leading-[64.4px] text-black">
            Our
            <br />
            practices
          </h2>
          <p className="max-w-[385px] whitespace-pre-line font-poppins text-lg leading-[27px] text-black">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed
            <br />
            do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="flex flex-col items-start gap-16">
          <div className="grid grid-cols-2 gap-x-[347.59px] gap-y-0">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 border-t border-azure-74 pt-[49px]"
              >
                <div className="flex flex-col items-start gap-4">
                  <h3 className="font-poppins text-[30px] font-semibold leading-9 text-black">
                    {practice.title}
                  </h3>
                  <p className="max-w-[385px] whitespace-pre-line font-poppins text-base leading-6 text-black">
                    {practice.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-poppins text-base font-semibold leading-6 text-black">
                    Read more
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
            ))}
          </div>
          <button className="rounded-full bg-primary px-6 pb-4 pt-[15.25px] font-inter text-base font-semibold text-white hover:bg-primary/90 transition-colors">
            All practices
          </button>
        </div>
      </div>
    </section>
  )
}

