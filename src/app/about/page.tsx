export default function AboutMe() {
  const timeline = [
    {
      year: "2020 – 2021",
      title: "Software Development Internships",
      details: [
        "Smart Twigs - Full-Stack Engineer (React Native, Laravel, MySQL)",
        "Researched and implemented product analytics",
        "Led development of key components and mentored new team members",
        "Gesture - Software Engineer (React Native, Expo, Node, Firebase)",
        "Launched a mobile app, implemented state management, and automated deployment",
        "Migrated native apps to React Native and mentored new developers",
      ],
    },
    {
      year: "2018 – 2020",
      title: "Studied Computer Science at University at Albany",
      details: ["Earned a B.S. in Computer Science"],
    },
    {
      year: "2015 – 2018",
      title: "Electrical Work & College",
      details: [
        "Worked as an electrician for three years",
        "Attended community college, earning an Associate’s Degree in Liberal Arts – Math & Science",
        "Took my first programming courses, sparking my interest in software development",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-2xl font-bold mb-8 underline text-[#ebeaea]">About Me</h1>

      <div className="mb-10">
        <p className="text-gray-400">I am Technical Consultant & Developer who leads all Salsify PIM implementations at Huge | Hero Digital. From discovery to deployment, I work closely with clients to design and build scalable product data systems that power eCommerce experiences.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6 underline text-[#ebeaea]">My Journey</h2>
      <div className="relative border-l-4 pl-6 border-l-[#ebeaea]">
        {timeline.map((event, index) => (
          <div key={index} className="relative mb-10 pl-6">
            <div className="absolute left-[-16px] top-4 w-8 h-[2px] bg-[#ebeaea]"></div>
            <h2 className="text-2xl font-semibold text-[#ebeaea]">{event.year}</h2>
            <h3 className="text-xl font-medium text-blue-300">{event.title}</h3>
            <ul className="list-disc pl-5">
              {event.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
