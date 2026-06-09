export default function Home() {
  return (
    // Full-width page wrapper
    <div className="w-full">
      <div className="m-8">
        <div>
          {/* ── Navbar ── */}
          <header className="border-b w-full">
            <div className="w-full px-10 py-5 flex items-center justify-between">
              {/* Brand logo / name on the left */}
              <div className="text-2xl font-bold">F&M Healthcare</div>

              {/* Navigation links on the right */}
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

          {/* ── Hero Section ── */}
          <div className="w-full ">
            <section id="top-hero">
              {/* Blue banner with headline and CTA buttons */}
              <div className="py-28 px-6 w-full bg-blue-100 text-blue-900 font-bold text-center  ">
                <h2 className="text-5xl"> Primary care you can trust </h2>
                <div className="mt-4 text-sm font-normal">
                  <p>
                    Our clinic is dedicated to providing excellent healthcare
                    services.
                  </p>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex gap-12 text-center justify-center mt-6 mb-4">
                  {/* Calls the clinic phone number */}
                  <a
                    className="px-6 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800"
                    href="tel:2068059044"
                  >
                    Call Now
                  </a>
                  {/* Scrolls down to the contact section */}
                  <a
                    className="px-6 py-4 border-2 border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-50"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* ── About Section ── */}
          <div className="w-full">
            <section id="about">
              <div className="w-full py-20 px-16 bg-white text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Meet F&M Healthcare
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Welcome to My Clinic, where your health is our priority.
                </p>
              </div>
            </section>
          </div>

          {/* ── Doctors Section ── */}
          <div className="w-full">
            <section id="doctors">
              <div className="w-full py-20 px-16 bg-blue-100 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Our Doctors
                </h2>
                <p className=" text-lg text-gray-600 max-w-2xl left- mx-auto">
                  Meet our team of experienced and compassionate doctors.
                </p>

                {/* Doctor card — avatar placeholder + name */}
                <div className="flex gap-12 justify-center mt-12">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-32 h-32 rounded-full
                  bg-gray-300 mt-6 mb-4"
                    ></div>

                    <p className="">Dr Floyd Sekeramayi</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-32 h-32 rounded-full
                  bg-gray-300 mt-6 mb-4"
                    ></div>
                    <p className="">Dr Maggie Sekeramayi</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ── Services Section ── */}
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

          {/* ── Contact Section ── */}
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
