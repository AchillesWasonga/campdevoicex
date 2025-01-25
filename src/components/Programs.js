import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Tuko Freshy High School Edition",
      image: "path/to/highschool-logo.jpg", // Replace with the actual path
      description: `Tuko Freshy is a debate programme created for young people, by young people, to debate and propose solutions to challenges facing young people within their communities, nationally, and globally.`,
      additionalInfo: [
        "Launch debates in high schools across Kenya.",
        "Establish partnerships to expand Tuko Freshy’s reach.",
        "Host debates focusing on social, economic, and political issues.",
      ],
    },
    {
      title: "Tuko Freshy Community Edition",
      image: "path/to/community-logo.jpg", // Replace with the actual path
      description: `The Community Edition focuses on engaging young people within local communities, encouraging discourse on local issues and finding solutions collaboratively.`,
    },
    {
      title: "Changamkia Climate",
      image: "path/to/climate-logo.jpg", // Replace with the actual path
      description: `A program dedicated to raising awareness and finding actionable solutions for climate change, involving young voices to create a sustainable future.`,
    },
    {
      title: "Leadership Exchange Experience",
      image: "path/to/leadership-logo.jpg", // Replace with the actual path
      description: `This program is designed to inspire and educate young leaders through interactive workshops, networking, and practical leadership experiences.`,
    },
    {
      title: "Training Trainers",
      image: "path/to/trainers-logo.jpg", // Replace with the actual path
      description: `Empowering trainers with the skills and knowledge they need to mentor and guide the next generation of young leaders and innovators.`,
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Programs</h1>
      {programs.map((program, index) => (
        <section
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">{program.title}</h2>
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-auto rounded-md mb-6"
          />
          <p className="mb-4">{program.description}</p>
          {program.additionalInfo && (
            <ul className="list-disc pl-6 mb-4">
              {program.additionalInfo.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default Programs;
