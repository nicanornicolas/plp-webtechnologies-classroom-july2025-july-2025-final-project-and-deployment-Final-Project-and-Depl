import Link from "next/link";

const services = [
  {
    name: "App Development",
    href: "/services/app-development",
  },
  {
    name: "Computer Repair & Servicing",
    href: "/services/computer-repair-servicing",
  },
  {
    name: "Electronics Design",
    href: "/services/electronics-design",
  },
  {
    name: "IoT Solutions",
    href: "/services/iot-solutions",
  },
  {
    name: "Software Installation",
    href: "/services/software-installation",
  },
  {
    name: "Web Development",
    href: "/services/web-development",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.href} key={service.name}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                <p className="text-gray-600">
                  Learn more about our {service.name.toLowerCase()} services.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}