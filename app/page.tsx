export default function Home() {
  return (
    <div className="w-full">
      <div className="m-8">
        <div>
          <header className="border-b w-full">
            <div className="w-full px-10 py-5 flex items-center justify-between">
              {/* Left */}
              <div className="text-2xl font-bold">F&M Healthcare</div>
              {/* Right */}
              <nav className="flex gap-3">
                <a
                  className="text-grey-600 text-2xl hover:text-blue-700 "
                  href="#about"
                >
                  {" "}
                  About us{" "}
                </a>
                <span className="text-grey-600">|</span>
                <a
                  className="text-grey-700 text-2xl hover:text-blue-700"
                  href="#doctors"
                >
                  Doctors
                </a>
                <span className="text-grey-600">|</span>
                <a
                  className="text-grey-700 text-2xl hover:text-blue-700"
                  href="#services"
                >
                  Services
                </a>
              </nav>
            </div>
          </header>
          <div className="mx-auto max-w-4xl my-9">
            {/* Hero Section updated */}
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
