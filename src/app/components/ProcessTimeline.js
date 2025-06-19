'use client';
import Image from 'next/image';

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "During the Discovery Stage, we collaborate to outline your software and collectively determine the features to be incorporated into your Version 1 Launch.",
    image: "/process/discovery.svg"
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "This marks the beginning of bringing your app to life! Initially, we generate flowcharts for each user type, followed by the design phase for all app or website pages.",
    image: "/process/design.svg"
  },
  {
    number: "03",
    title: "Front-end Coding",
    description: "In front-end coding, the main objective is to translate your design into code. Once the front-end coding is complete, we'll provide previews for you to review and test this section of your app or website.",
    image: "/process/frontend.svg"
  },
  {
    number: "04",
    title: "Back-End Coding",
    description: "Now, we embark on bringing each feature to life! As we code each feature, we'll regularly send you updated versions of the app or website for your review and feedback.",
    image: "/process/backend.svg"
  },
  {
    number: "05",
    title: "Testing and Debugging",
    description: "At this stage, the primary coding is completed, and the database is integrated. It's now time for thorough testing of the app. While encountering bugs is common, we've planned for this.",
    image: "/process/testing.svg"
  },
  {
    number: "06",
    title: "Version 1 Launch",
    description: "Here we are! It's time to release Version 1 of your app to the public. For mobile apps, we'll submit it to Apple and Google for review. For websites, we'll deploy it right away.",
    image: "/process/launch.svg"
  },
  {
    number: "07",
    title: "Maintenance and Upgrades",
    description: "Now that your app or website is live, we'll take care of hosting and maintenance, ensuring everything runs smoothly. You can rely on us to address any bugs that arise.",
    image: "/process/maintenance.svg"
  }
];

export default function ProcessTimeline() {
  return (
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
                        src={step.image} 
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
                        src={step.image} 
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
  );
} 