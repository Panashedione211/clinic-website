export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-12">
      <div className="m-8">
        <div>
          <header className="border-b">
            <div className="mx-auto max-w-4xl p-6 flex items-center justify-between gap-6">
              {/* Left */}
              <div className="text-4xl font-bold">F&M Healthcare</div>
              {/* Right */}
              <nav className="flex flex-wrap items-center justify-end gap-3">
                <a className="px-4 py-3 border rounded" href="#about">
                  About us
                </a>
                <a className="px-4 py-3 border rounded" href="#doctors">
                  Doctors
                </a>
                <a className="px-4 py-3 border rounded" href="#services">
                  Services
                </a>
                <a className="px-4 py-3 border rounded" href="#contact">
                  Contact
                </a>
                <a
                  className="px-4 py-3 border rounded font-semibold"
                  href="tel:2068059044"
                >
                  Call Now
                </a>
              </nav>
            </div>
          </header>
          <div className="mx-auto max-w-4xl my-9">
            {/* Hero Section */}
            <section id="top-hero">
              <div className="py-20 px-6 border rounded bg-blue-100 text-blue-900 font-bold text-center box-border flex flex-col">
                <h2 className="text-5xl"> Primary care you can trust </h2>
                <div className="mt-4 text-sm font-normal">
                  <p>
                    Our clinic is dedicated to providing excellent healthcare
                    services.
                  </p>
                </div>
                <div className="flex gap-5 text-center justify-center mt-6">
                  <a
                    className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800"
                    href="tel:2068059044"
                  >
                    Call Now
                  </a>
                  <a
                    className="px-6 py-3 border-2 border-blue-700 rounded-lg font-semibold hover:bg-blue-50"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="m-8">
            <section id="about">
              <div className="p-6 border rounded bg-blue-400 text-white">
                <h2>About Us</h2>
                <p>Welcome to My Clinic, where your health is our priority.</p>
              </div>
            </section>
          </div>
          <div className="m-8">
            <section id="doctors">
              <div className="p-6 border rounded bg-blue-400 text-white">
                <h2> Our Doctors</h2>
                <p> Meet our team of experienced and compassionate doctors.</p>
              </div>
            </section>
          </div>
          <div className="m-8">
            <section id="services">
              <div className="p-6 border rounded bg-blue-400 text-white">
                <h2> Our Services</h2>
                <p>
                  We offer a wide range of medical services to cater to your
                  health needs.
                </p>
              </div>
            </section>
          </div>
          <div className="m-8">
            <section id="contact">
              <div className="p-6 border rounded bg-blue-400 text-white">
                <h2> Contact Us</h2>
                <p>Get in touch with us for appointments and inquiries.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
