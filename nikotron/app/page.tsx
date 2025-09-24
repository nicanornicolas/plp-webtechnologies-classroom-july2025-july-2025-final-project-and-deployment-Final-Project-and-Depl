// app/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold leading-tight mb-6"
          >
            Welcome to <span className="text-lime-300">NIKOTRON</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-200 mb-6"
          >
            At NIKOTRON, we transform technology challenges into innovative
            solutions. From comprehensive computer services to cutting-edge web
            and mobile applications, electronics design, and IoT solutions, we
            deliver excellence that drives your digital transformation.
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white font-semibold"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/2"
        >
          <Image
            src="/images/nikotron-hero.png"
            alt="NIKOTRON technology solutions"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Software Installation",
              description:
                "Precision software solutions tailored to your business needs.",
              icon: "💻",
              slug: "software-installation",
            },
            {
              title: "Computer Repair & Servicing",
              description: "Expert computer diagnostics and repair services.",
              icon: "🔧",
              slug: "computer-repair-servicing",
            },
            {
              title: "Electronics Design",
              description: "Innovative electronics design and prototyping.",
              icon: "🔌",
              slug: "electronics-design",
            },
            {
              title: "IoT Solutions",
              description: "Smart IoT solutions for modern businesses.",
              icon: "📱",
              slug: "iot-solutions",
            },
            {
              title: "Web Development",
              description:
                "Custom web development with cutting-edge technologies.",
              icon: "🌐",
              slug: "web-development",
            },
            {
              title: "App Development",
              description: "Mobile and desktop application development.",
              icon: "📱",
              slug: "app-development",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-200 mb-4 flex-grow">
                {service.description}
              </p>
              <Link href={`/services/${service.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lime-600 hover:bg-green-700 text-white py-2 px-4 rounded w-full"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
