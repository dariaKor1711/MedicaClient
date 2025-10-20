export default function Search() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const symptoms = [
    ['Abdominal pain', 'Chest pain', 'Constipation', 'Cough', 'Breath difficulty'],
    ['Red eye', 'Foot pain', 'Foot swelling', 'Headache', 'Heart palpitation'],
    ['Knee pain', 'Hip pain', 'Low back pain', 'Nasal congestion', 'Neck pain'],
  ]

  return (
    <section className="w-full border-b border-azure-74 bg-white py-0">
      <div className="mx-auto flex max-w-8xl items-start gap-10 h-[767.355px]">
        <div className="flex h-full flex-col items-start gap-6 justify-start">
          <h2 className="max-w-[385px] font-poppins text-[56px] font-semibold leading-[64.4px] text-black w-[314px]">
            Search diseases & conditions
          </h2>
          <p className="max-w-[385px] whitespace-pre-line font-poppins text-lg leading-[27px] text-black">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed
            <br />
            do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="flex flex-col items-start gap-20 flex-1">
          {/* Alphabet Search */}
          <div className="flex flex-col items-start gap-20 border-b border-azure-74 pb-[69.656px]">
            <div className="grid grid-cols-10 gap-[10px]">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  className="flex h-[51.597px] w-[51.597px] items-center justify-center rounded-full bg-gray-92 font-inter text-[17.199px] font-semibold text-black hover:bg-primary hover:text-white transition-colors"
                >
                  {letter}
                </button>
              ))}
            </div>
            <p className="font-poppins text-[13.759px] text-black">
              You don't know it's name? Check out symptom checker below
            </p>
          </div>

          {/* Symptom Checker */}
          <div className="flex flex-col items-start gap-[21.418px]">
            <div className="flex flex-col items-start gap-[14.056px]">
              <h3 className="font-poppins text-[26.773px] font-semibold leading-[30.789px] text-black">
                Symptom checker
              </h3>
              <p className="max-w-[624.701px] whitespace-pre-line font-poppins text-[14.279px] leading-[21.418px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <br />
                incididunt.
              </p>
            </div>
            <div className="flex flex-col gap-[14.279px]">
              {symptoms.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-[14.279px]">
                  {row.map((symptom) => (
                    <button
                      key={symptom}
                      className="rounded-full bg-gray-92 px-[21.418px] py-[14.011px] font-inter text-[14.279px] font-semibold text-black hover:bg-primary hover:text-white transition-colors"
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

