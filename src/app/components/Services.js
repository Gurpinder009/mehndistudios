

import { MapPin, Users, Sparkles } from "lucide-react";


export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Bridal Henna",
      description: "Intricate and elaborate designs for your special day. Perfect for brides who want traditional elegance.",
      duration: "3-5 hours",
      features: ["Custom design consultation", "Traditional patterns", "Detailed hand & foot designs"]
    },
    {
      icon: Sparkles,
      title: "Non-Bridal Henna",
      description: "Fun and beautiful designs for celebrations, festivals, and special occasions.",
      duration: "2 - 6 hours",
      features: ["Quick application", "Various design options", "Group bookings available"]
    },
    {
      icon: MapPin,
      title: "Classes & Workshops",
      description: "Coming soon!",
      duration: "undetermined",
      features: ["One one one hand practice", "Lifelong guidlines"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate studio sessions to grand celebrations, I offer a range of henna services to make your occasion special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-border"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2 text-card-accent">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">{service.duration}</span>
                </div>
               
                
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All henna is made with natural, safe ingredients. Designs typically last 1-3 weeks.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-muted  rounded-lg hover:bg-accent/70 hover:text-muted transition-colors duration-200"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}
