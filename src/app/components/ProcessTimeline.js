'use client';
import Image from 'next/image';
import img1 from '@/app/assets/img1.png';
import img2 from '@/app/assets/img2.png';
import img3 from '@/app/assets/img3.png';
import img4 from '@/app/assets/img4.png';
import img5 from '@/app/assets/img5.png';
import img6 from '@/app/assets/img6.png';
import img7 from '@/app/assets/img7.png';

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "During the Discovery Stage, we collaborate to outline your software and collectively determine the features to be incorporated into your Version 1 Launch.",
    img : img1
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "This marks the beginning of bringing your app to life! Initially, we generate flowcharts for each user type, followed by the design phase for all app or website pages.",
    img : img2
  },
  {
    number: "03",
    title: "Front-end Coding",
    description: "In front-end coding, the main objective is to translate your design into code. Once the front-end coding is complete, we'll provide previews for you to review and test this section of your app or website.",
    img: img3
  },
  {
    number: "04",
    title: "Back-End Coding",
    description: "Now, we embark on bringing each feature to life! As we code each feature, we'll regularly send you updated versions of the app or website for your review and feedback.",
    img: img4
  },
  {
    number: "05",
    title: "Testing and Debugging",
    description: "At this stage, the primary coding is completed, and the database is integrated. It's now time for thorough testing of the app. While encountering bugs is common, we've planned for this.",
    img: img5
  },
  {
    number: "06",
    title: "Version 1 Launch",
    description: "Here we are! It's time to release Version 1 of your app to the public. For mobile apps, we'll submit it to Apple and Google for review. For websites, we'll deploy it right away.",
    img: img6
  },
  {
    number: "07",
    title: "Maintenance and Upgrades",
    description: "Now that your app or website is live, we'll take care of hosting and maintenance, ensuring everything runs smoothly. You can rely on us to address any bugs that arise.",
    img: img7
  }
];

export default function ProcessTimeline() {
  return (
    <>
    <div className="text-center mb-5">
            <p className="text-uppercase text-muted mb-1">OUR PROCESS</p>
            <h2 className="display-4 fw-bold mb-4">100-Day Launch</h2>
          </div>
    <div className="process-timeline">
      {processSteps.map((step, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-number">{step.number}</div>
            <div className="row align-items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 order-md-2">
                    <div className="timeline-image text-center">
                      <Image 
                        src={step.img} 
                        alt={step.title}
                        width={300}
                        height={200}
                        className="process-illustration"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 order-md-1">
                    <div className="timeline-text text-end">
                      <h3 className="timeline-title">{step.title}</h3>
                      <p className="timeline-description">{step.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <div className="timeline-image text-center">
                      <Image 
                        src={step.img} 
                        alt={step.title}
                        width={300}
                        height={200}
                        className="process-illustration"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-text">
                      <h3 className="timeline-title">{step.title}</h3>
                      <p className="timeline-description">{step.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
} 