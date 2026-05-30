import {useState} from "react"


import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e ) => {
    e.preventDefault();
   
     emailjs
      .send(
        "service_1u7bdhr",       
        "template_b0uqlyu",      
        formData,
        "H6gT_tJq3WwrxzDs1"        
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => {
          aler("Failed to send. Try again later.");
        }
      );
   
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (236) 332-2770",
      href: "tel:+12363322770"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Mehndistudios@gmail.com",
      href: "mailto:Mehndistudios@gmail.com"
    },
 
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your henna session? I'd love to hear from you and create something beautiful together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8">
            <h3 className="text-2xl mb-6 text-foreground">Book Your Session</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="text-muted-foreground">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-muted-foreground w-full px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-muted-foreground">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-muted-foreground w-full px-3 py-2"
                    
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label htmlFor="phone" className="text-muted-foreground">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-muted-foreground w-full px-3 py-2"
                 
                  />
                </div>
               
              </div>
              

             

              <div>
                <label htmlFor="message" className="text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your event, design preferences, or any special requests..."
                    className="mt-1 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-muted-foreground w-full px-3 py-2"
                
                />
              </div>

              <button type="submit" className="w-full h-12 rounded-md bg-accent hover:bg-accent/70 text-primary-foreground">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 text-foreground">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-foreground hover:text-accent transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

        
           
          </div>
        </div>
      </div>
    </section>
  );
}