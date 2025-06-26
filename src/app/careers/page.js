"use client";
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers at Mothership</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <div className="position-relative text-white">
        <div className="w-100" style={{ height: '400px', overflow: 'hidden' }}>
          <Image
            // src="/truck-banner.jpg"
            alt="Truck Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-center px-3">
            <div className="container">
              <p className="text-uppercase small mb-2">Careers at Eazisols</p>
              <h1 className="fw-bold display-5 mb-3">Build what the world needs.</h1>
              <p className="lead mb-3">
                We're shaping the future of freight and logistics. If you're excited by the
                prospect of unlocking the world's potential by speeding up the way goods move, join us.
              </p>
              <a href="#" className="btn btn-success fw-semibold">See open roles →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container py-5">
        <h2 className="text-center fw-semibold mb-3">Supported by exceptional benefits.</h2>
        <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: '700px' }}>
          We appreciate the great work that our team does every day. That's why we offer an excellent benefits package that ensures each person has what they need to succeed inside and outside of the office.
        </p>

        <div className="row g-4">
          {[
            {
              icon: '🧑‍💻',
              title: 'Your work matters',
              desc: 'We offer very competitive salaries and equity, with a culture built around ownership of your work. Every team member is integral to the success of the company.'
            },
            {
              icon: '🌴',
              title: 'Flexible vacation policy',
              desc: 'Enjoy unlimited paid time off that you can use for whatever you need. We even require you take at least 2 weeks annually.'
            },
            {
              icon: '🖤',
              title: 'Health and wellness',
              desc: 'Medical, dental and vision insurance are covered by us so you have access to the right care for you. We also offer office wellness activities to stay balanced.'
            },
            {
              icon: '🏢',
              title: 'Beautiful workspace',
              desc: 'We work out of bright, modern office spaces that are equipped with the latest technology and anything else you need to be productive. Oh, and we\'re dog-friendly.'
            },
            {
              icon: '🍱',
              title: 'Catered meals',
              desc: 'We offer catered lunch weekly from a wide variety of neighborhood restaurants. Plus, our kitchens are always stocked with healthy snacks, coffee, and tea.'
            },
            {
              icon: '🫂',
              title: 'Strong community',
              desc: 'From our "lunch and learn" series to volunteer activities to monthly team rock climbs, there\'s no shortage of fun to get involved in here.'
            },
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="h-100 p-3 border rounded shadow-sm bg-light">
                <div className="fs-2 mb-2">{item.icon}</div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
