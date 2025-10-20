export default function News() {
  const news = [
    {
      date: 'November 23, 2022',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/news-1.png',
      bgColor: 'bg-primary',
      textColor: 'text-white',
    },
    {
      date: 'November 23, 2022',
      title:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/images/news-2.png',
      bgColor: 'bg-gray-96',
      textColor: 'text-black',
    },
    {
      date: 'November 23, 2022',
      title:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
      image: '/images/news-3.png',
      bgColor: 'bg-gray-96',
      textColor: 'text-black',
    },
  ]

  return (
    <section className="w-full bg-white py-[120px] pb-[200px]">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-[600px] font-poppins text-[56px] font-semibold leading-[64.4px] text-center text-black">
            Read our latest news
          </h2>
          <p className="max-w-[700px] whitespace-pre-line font-poppins text-lg leading-[27px] text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt.
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-12">
          {news.map((item, index) => (
            <div
              key={index}
              className={`flex h-[798px] flex-col items-center justify-between ${item.bgColor} ${
                index === 0 ? 'flex-1' : index === 1 ? 'flex-1' : 'w-[314.667px]'
              }`}
            >
              {index === 0 && (
                <div className="flex h-[231.66px] w-full items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[50px] w-[75.48px] object-contain"
                  />
                </div>
              )}
              {index !== 0 && (
                <div className="relative h-[259.25px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex h-[538px] w-full flex-col items-start justify-between p-12">
                <div className="flex flex-col items-start gap-4">
                  <p className={`font-poppins text-base leading-6 ${item.textColor}`}>
                    {item.date}
                  </p>
                  <p
                    className={`font-poppins text-2xl font-medium leading-[27.6px] ${item.textColor}`}
                  >
                    {item.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-poppins text-base font-semibold leading-6 ${item.textColor}`}
                  >
                    Read more
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={item.textColor}
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
          ))}
        </div>
      </div>
    </section>
  )
}

