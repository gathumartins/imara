import React from 'react'
import Team from './Team';

function AboutTeam({teams}:any) {
  return (
    <article className="bg-[#EEF3FC]">
      <section className="py-12 container">
        <h3 className="font-avenirBlack text-3xl text-iBlue mb-5 text-center">
          Meet Our Alumni Leadership Team
        </h3>
        <div className="grid md:grid-cols-2 gap-5 pt-4">
          {teams.map((team: any, index: number) => (
            <Team key={index} team={team}/>
          ))}
        </div>
      </section>
    </article>
  );
}

export default AboutTeam