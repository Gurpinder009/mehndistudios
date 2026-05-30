import { Star } from "lucide-react";

const testimonials = [
 {
    id: 1,

    name: "Cherry",
    event: "Bridal Henna",
    rating: 5,
    text: "I just wanted to say a huge thank you for the beautiful mehndi design  I’m absolutely in love with it! You were so patient and made sure everything turned out perfect. I really appreciate you staying extra and putting in so much effort to make it special. You truly went the extra mile, and it means a lot. Thank you again for your amazing work",
  },
  {
    id: 2,
    name: "Sandy",
    event: "Bridal Henna",
    rating: 5,
    text: "Thank you so much Simran for taking the time to do my mehndi. It turned out so dark and I got so many compliments from everyone! I am absolutely obsessed with my mehndi and haven't taken my eyes off of it since you did it. I really appreciate it",



  },
 
  {
    id: 3,
    name: "Manjot",
    event: "Bridal Henna",
    rating: 5,
    text: "Simran, thanks for doing such an amazing job! You were so creative and perfectly brought my vision to life by combining all the elements I wanted in my henna.  I truly appreciate your effort and talent thank you for making my day so special!",
  },
   
   {
    id: 4,
    name: "Simran",
    event: "Bridal Henna",
    rating: 5,
    text: "Thank you so much for the mehndi! It turned out so beautiful and got really dark. My whole family loved your work and couldn’t stop praising the details. I absolutely loved it!",
  },
  
  {
    id: 5,
    name: "Sunmeet",
    event: "Bridal Henna",
    rating: 5,
    text: "oh my god!!! My mehndi was soo dark. It's still fading on my front hands, Crazy!! I have tried soap and everything. Thankyou so much simran",
  },
  {
    id: 5,
    name: "Sunmeet",
    event: "Bridal Henna",
    rating: 5,
    text: "oh my god!!! My mehndi was soo dark. It's still fading on my front hands, Crazy!! I have tried soap and everything. Thankyou so much simran",
  },

];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl ">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in creating beautiful henna art that makes every occasion memorable.
            Here's what our valued clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card  rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`size-5 ${index < testimonial.rating
                        ? "fill-accent text-primary"
                        : "text-muted"
                      }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-accent">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.event}
                </p>
              
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}