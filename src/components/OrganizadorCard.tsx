'use client';

import Image from 'next/image';
import { Twitter, Linkedin, } from 'lucide-react';
import { TeamMember } from '@/data/teamMembers';

interface OrganizadorCardProps {
    member: TeamMember;
}

export default function OrganizadorCard({ member }: OrganizadorCardProps) {
    return (
        <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-110"
        
        >
            <div className="relative aspect-square w-full">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                <p className="text-muted-foreground mb-3">{member.employer}</p>

                <div className="flex space-x-3">
                    {member.twitter && (
                        <a
                            href={`https://twitter.com/${member.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Twitter size={20} />
                        </a>
                    )}
                    {member.linkedin && (
                        <a
                            href={`https://www.linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}  
