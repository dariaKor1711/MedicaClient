export default function Features() {
  const features = [
    {
      title: 'Personal services',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
    },
    {
      title: 'Virtual Clinic',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
    },
    {
      title: 'Clinical results',
      description:
        'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.',
    },
  ]

  return (
    <section className="w-full bg-primary py-20">
      <div className="mx-auto flex max-w-8xl items-center gap-12 px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 border-r border-white pr-[14.66px] last:border-r-0"
          >
            <div className="flex items-center gap-4">
              <h3 className="font-poppins text-2xl font-semibold leading-[27.6px] text-white">
                {feature.title}
              </h3>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1 15l-5-5 1.4-1.4L9 12.2l7.6-7.6L18 6l-9 9z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="max-w-[300px] whitespace-pre-line font-poppins text-base leading-6 text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

