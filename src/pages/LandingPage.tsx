import {
  Header,
  Hero,
  Features,
  Practices,
  WhyChooseUs,
  Reasons,
  CallToAction,
  Search,
  Doctors,
  News,
  Footer,
} from '@/components/landing'

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full font-poppins px-20">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <Practices />
        <WhyChooseUs />
        <Reasons />
        <CallToAction />
        <Search />
        <Doctors />
        <News />
      </main>
      <Footer />
    </div>
  )
}

