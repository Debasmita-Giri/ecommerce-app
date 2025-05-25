import React from 'react';

const About = () => {
  // Define an array of objects for the team members.
  const teamMembers = [
    {
      name: 'Aman Kumar',
      role: 'Frontend Developer',
      about: "Aman Kumar is a newcomer to frontend development with a budding interest in React. He is eager to learn and contribute to web development, leveraging React for dynamic and engaging websites.",
      imageUrl: '/images/avatars/1.png', // Replace with the actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'UI Designer',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget augue id mauris facilisis suscipit.',
      imageUrl: '/images/avatars/1.png', // Replace with the actual image URL
    },
    {
      name: 'Debasmita Giri',
      role: 'Backend Developer',
      about: 'Debasmita Giri, a motivated fresher, is passionate about Spring Boot and backend development. Eager to contribute to software engineering, she leverages her strong Java foundation and problem-solving skills',
      imageUrl: '/images/avatars/11.jpg', // Replace with the actual image URL
    },
    
  ];

  return (
    <div className="container mx-auto py-10">
      <style>
        {`
          /* Styles for the About page */
          .container {
            max-width: 1200px;
            margin: 5px auto;
            padding: 30px 20px;
          }

          .team-container {
            display: flex;
            justify-content: center; /* Center the cards horizontally */
          }

          .team-member {
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 30%;
            margin: 0 10px; /* Add horizontal gap between cards */
            text-align: center; /* Center card content */
          }

          .team-image {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto; /* Center the image horizontally */
          }

          .circle-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        `}
      </style>
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
  <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-image">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="circle-image"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
            <p className="text-gray-600 text-sm">{member.role}</p>
            <p className="mt-4"  style={{ textAlign: 'justify', margin: '10px 10px'  }}>{member.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default About;
