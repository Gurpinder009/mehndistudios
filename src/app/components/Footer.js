
import {  Mail, Instagram, Facebook, Heart } from "lucide-react";



 export default function Footer() {
  return (
    <footer className="bg-muted text-accent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">MEHNDI STUDIOS</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Creating beautiful henna art that celebrates tradition, culture, and personal expression. 
              Every design tells a story.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:hello@mehndiatistry.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Bridal Henna</li>
              <li className="text-muted-foreground">Non-Bridal Henna</li>
              <li className="text-muted-foreground">Classes & Workshops</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 MEHNDI STUDIOS. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}



