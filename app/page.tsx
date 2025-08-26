import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Hammer,
  Home,
  Building,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Kyambeke Building Company</h1>
                <p className="text-sm text-muted-foreground">Limited</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Professional Construction Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Building Your Vision, <span className="text-primary">Brick by Brick</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From residential homes to commercial complexes, we deliver quality construction services with unmatched
                expertise and dedication to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/modern-construction-site.png"
                  alt="Construction site"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">15+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a full range of construction services to meet all your building needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Residential Construction",
                description: "Custom homes, renovations, and residential developments",
              },
              {
                icon: Building,
                title: "Commercial Building",
                description: "Office buildings, retail spaces, and industrial facilities",
              },
              {
                icon: Wrench,
                title: "Renovation & Remodeling",
                description: "Transform existing spaces with modern upgrades",
              },
              {
                icon: Hammer,
                title: "Project Management",
                description: "End-to-end project coordination and supervision",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Work</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to quality and excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Residential Complex",
                location: "Kampala, Uganda",
                type: "Residential",
                image: "/modern-apartment-exterior.png",
              },
              {
                title: "Commercial Office Building",
                location: "Entebbe, Uganda",
                type: "Commercial",
                image: "/modern-office-glass.png",
              },
              {
                title: "Luxury Villa Project",
                location: "Jinja, Uganda",
                type: "Residential",
                image: "/luxury-villa-with-swimming-pool.png",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Building Excellence Since 2008</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kyambeke Building Company Limited has been at the forefront of Uganda's construction industry for over
                15 years. We combine traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: CheckCircle, text: "Licensed & Insured" },
                  { icon: Users, text: "Expert Team" },
                  { icon: Award, text: "Quality Guaranteed" },
                  { icon: Building2, text: "100+ Projects" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/construction-team-meeting-at-building-site.png"
                  alt="Our team"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Nakamya",
                role: "Homeowner",
                content:
                  "Kyambeke Building Company transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations.",
                rating: 5,
              },
              {
                name: "David Mukasa",
                role: "Business Owner",
                content:
                  "Outstanding work on our office complex. The project was completed on time and within budget. Highly recommended!",
                rating: 5,
              },
              {
                name: "Grace Namuli",
                role: "Property Developer",
                content:
                  "Professional, reliable, and skilled. They've been our go-to construction partner for multiple projects.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+256 700 123 456",
                description: "Mon-Fri 8AM-6PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@kyambekebuilding.com",
                description: "We'll respond within 24hrs",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "Kampala, Uganda",
                description: "Schedule an appointment",
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-1">{contact.content}</p>
                  <CardDescription>{contact.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">Kyambeke Building</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building excellence across Uganda with quality, integrity, and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Residential Construction</li>
                <li>Commercial Building</li>
                <li>Renovation</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+256 700 123 456</li>
                <li>info@kyambekebuilding.com</li>
                <li>Kampala, Uganda</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Kyambeke Building Company Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
