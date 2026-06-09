export default function Home() {
  return (
    // Full-width page wrapper
    <div className="w-full">
      <div className="w-full">
        <div>
          {/* ── Navbar ── */}
          <header className="border-b w-full">
            <div className="w-full px-10 py-5 flex items-center justify-between">
              {/* Brand logo / name on the left */}
              <div className="text-2xl font-bold">F&M Healthcare</div>

              {/* Navigation links on the right */}
              <nav className="flex gap-3">
                <a
                  className="text-grey-600 text-base hover:text-blue-700 "
                  href="#about"
                >
                  {" "}
                  About us{" "}
                </a>
                <span className="text-grey-600">|</span>
                <a
                  className="text-grey-700 text-base hover:text-blue-700"
                  href="#doctors"
                >
                  Doctors
                </a>
                <span className="text-grey-600">|</span>
                <a
                  className="text-grey-700 text-base hover:text-blue-700"
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
              <div className="py-50 px-6 w-full bg-blue-100 text-blue-900 font-bold text-center  ">
                <h2 className="text-5xl"> Primary care you can trust </h2>
                <div className="mt-4 text-lg font-normal">
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
                  F&M is founded on the belief that it is important to have
                  balance. That caring for your health shouldn{"'"}t be
                  burdensome. <br /> <br /> Our founders, Dr. Floyd and Dr.
                  Maggie Sekeramayi, have built a team of highly-qualified and
                  experienced physicians and nurse practitioners who bring their
                  expertise and caring into skilled nursing and assisted Living
                  communities.
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
                      className="w-42 h-42 rounded-full
                  bg-gray-300 mt-6 mb-4"
                    ></div>

                    <p className="font-semibold text-blue-900 text-2xl">
                      Dr Floyd Sekeramayi
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-42 h-42 rounded-full
                  bg-gray-300 mt-6 mb-4"
                    ></div>
                    <p className="font-semibold text-blue-900 text-2xl">
                      Dr Maggie Sekeramayi
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ── Services Section ── */}
          <div className="w-full">
            <section id="services">
              <div className="w-full py-20 px-16 bg-white text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  What Do We Offer?
                </h2>

                <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-4">
                  Personalized Care
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  First you will be evaluated by F&M Nurse Preactioners and
                  Physicians. who will get to know you- not just what your
                  healthcare needs are, but who you are as person. <br /> <br />{" "}
                  After that, you will receive routine followup visits. You may
                  request a visit at any time.
                </p>
                <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-4">
                  Convenience
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Remember When doctors used to make house calls? Our
                  practitioners come to you!
                </p>
                <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-4">
                  Peace of Mind
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Your F&M healthcare team is present in your building, keeping
                  a close eye on your health and wellbeing. <br /> <br /> If you
                  are dealing with two or more chronic conditions. <br />
                  <br /> we can also discuss remote monitoring programs to help
                  your healthcare team more closely monitor your chronic
                  conditions. <br /> <br />
                  If challenges become greater, we also offer the services of
                  our Behavioral Health{"/"}Psychiatric Nurse Practitioner
                </p>
              </div>
            </section>
          </div>

          {/* ── Contact Section ── */}
          <div className="w-full">
            <section id="contact">
              <div className="w-full py-20 px-16 bg-blue-100 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Get in Touch
                </h2>
                <p className="mb-6">Call us to book an appointment.</p>
                <a
                  className="text-lg px-6 py-3  bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                  href="tel:2068059044"
                >
                  Click to Call: (206) 805-9044
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
