"use client";
import "./globals.css";
import BeholdWidget from "@behold/react"
import React, { useState } from 'react'


import  Header  from "./components/Header";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <About />
        <Gallery />
        <Services />
        <Contact />

      <MyFeedPage/>

      </main>
      <Footer />
    </div>
  );
}





function MyFeedPage() {
  return <section id="contact" className="py-20 bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">My Instagram Feed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Planning a special occasion? I would be honored to bring your vision to life with handcrafted henna art.
          </p>
        </div>
    <BeholdWidget feedId="DLxPxY5w3tFHZrYD2W51" />
  </div>
  </section>
}

