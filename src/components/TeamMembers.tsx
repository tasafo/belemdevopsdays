
import { useState, useEffect, useRef } from 'react';

interface TeamMember {
  name: string;
  employer: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const TeamMembers = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/data/team_members.json');
        const data = await response.json();
        setMembers(data.team_members || []);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setMembers([]);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            Equipe Organizadora
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os voluntários que estão tornando o DevOpsDays Belém possível
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {members.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.employer}</p>
                <div className="flex justify-center space-x-3">
                  {member.twitter && (
                    <a 
                      href={`https://twitter.com/${member.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      Twitter
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
