export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Audrey Smith',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
      image: '/images/doctor-1.png',
    },
    {
      name: 'Dr. Audrey Smith',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
      image: '/images/doctor-2.png',
    },
    {
      name: 'Dr. Audrey Smith',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
      image: '/images/doctor-3.png',
    },
    {
      name: 'Dr. Audrey Smith',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt.',
      image: '/images/doctor-4.png',
    },
  ]

  return (
    <section className="relative h-[1002px] w-full bg-gray-90">
      <div className="absolute left-1/2 top-[120px] flex -translate-x-1/2 flex-col items-center gap-6">
        <h2 className="max-w-[600px] font-poppins text-[56px] font-semibold leading-[64.4px] text-center text-black">
          Meet our doctors
        </h2>
        <p className="max-w-[700px] whitespace-pre-line font-poppins text-lg leading-[27px] text-center text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt.
        </p>
      </div>

      <div className="absolute left-20 right-0 top-[343px] flex max-w-8xl items-center gap-16">
        {/* Navigation buttons */}
        <div className="flex flex-col items-center gap-[67.01px]">
          <button className="flex h-[60px] w-[60px] items-center justify-center hover:opacity-70 transition-opacity">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="29" stroke="currentColor" strokeWidth="2" />
              <path d="M35 20L25 30L35 40" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button className="flex h-[60px] w-[60px] items-center justify-center rotate-180 hover:opacity-70 transition-opacity">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="29" stroke="currentColor" strokeWidth="2" />
              <path d="M35 20L25 30L35 40" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Doctors grid */}
        <div className="flex flex-1 items-center gap-12">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex max-w-[270px] flex-col items-center gap-6"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-[400px] w-[270px] object-cover rounded-lg"
              />
              <div className="flex flex-col items-center gap-6">
                <h3 className="max-w-[270px] font-poppins text-2xl font-semibold leading-[27.6px] text-center text-black">
                  {doctor.name}
                </h3>
                <p className="max-w-[240px] whitespace-pre-line font-poppins text-sm leading-[21px] text-center text-black">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

