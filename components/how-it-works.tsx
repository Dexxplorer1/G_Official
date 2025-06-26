import { CalendarCheck, Camera, Truck, CreditCard } from "lucide-react"

const steps = [
  {
    icon: <Camera className="h-10 w-10" />,
    title: "1. Send Photos",
    description: "Take photos of your junk and send them through our estimate system.",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "2. Get a Quote",
    description: "Receive a transparent, no-obligation quote based on your photos.",
  },
  {
    icon: <CalendarCheck className="h-10 w-10" />,
    title: "3. Schedule Pickup",
    description: "Choose a convenient date and time for your junk removal.",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "4. We Haul It Away",
    description: "Our professional team arrives on time and removes your junk quickly.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-garbagio-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garbagio-gold mb-4">How It Works</h2>
          <p className="text-lg text-garbagio-light/80 max-w-2xl mx-auto">
            Our simple 4-step process makes junk removal hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-garbagio-background/50 border border-garbagio-brown/30 p-6 rounded-lg text-center"
            >
              <div className="text-garbagio-accent mx-auto mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-garbagio-gold mb-2">{step.title}</h3>
              <p className="text-garbagio-light/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
