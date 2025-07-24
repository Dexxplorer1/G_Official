import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah J.",
    location: "Naples, FL",
    quote:
      "Wow! These guys were prompt, professional, and efficient. They removed all my old furniture and cleared the debris in an hour. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Fort Myers, FL",
    quote:
      "I was renovating my kitchen and needed construction debris removed quickly. Garbaggio came out the same day and cleared everything out. Great service!",
    rating: 5,
  },
  {
    name: "Jennifer W.",
    location: "Port Charlotte, FL",
    quote:
      "After my parents downsized, we had a lot of stuff to get rid of. These men were respectful, careful, and hard working. We'll definitely use again.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garbagio-background mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-garbagio-accent to-garbagio-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-garbagio-accent/30 hover:shadow-md transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-garbagio-accent text-garbagio-accent" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-garbagio-background">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
