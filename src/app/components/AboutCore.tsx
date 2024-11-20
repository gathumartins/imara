import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function AboutCore() {
  return (
    <article className="bg-[#EEF3FC]">
      <section className="py-12 container">
        <h3 className="font-avenirBlack text-3xl text-iBlue mb-8">
          Imara Fellowship Commitment
        </h3>
        <Tabs
          defaultValue="mission"
          className="md:w-[90%] mx-auto active:text-iBlue"
        >
          <TabsList className="flex justify-evenly gap-5 border-b-1 border-b-iBlue rounded-none px-0">
            <TabsTrigger
              value="mission"
              className="text-xl mb-1 font-avenirNextBold text-iNeutral data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue border-b-transparent flex-grow border-b-4 rounded-none data-[state=active]:text-iBlue"
            >
              Our Mission
            </TabsTrigger>
            <TabsTrigger
              value="vision"
              className="text-xl mb-1 font-avenirNextBold text-iNeutral data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue border-b-transparent flex-grow border-b-4 rounded-none data-[state=active]:text-iBlue"
            >
              Our Vision
            </TabsTrigger>
            <TabsTrigger
              value="values"
              className="text-xl mb-1 font-avenirNextBold text-iNeutral data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue border-b-transparent flex-grow border-b-4 rounded-none data-[state=active]:text-iBlue"
            >
              Core Values
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center text-base text-iNeutral font-avenirRoman">
              <Image
                src="/images/mission.png"
                width={82}
                height={82}
                alt="Imara Mission statements icons"
              />
              <p>Imara Africa Mission</p>
            </div>
          </TabsContent>
          <TabsContent value="vision">
            <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center text-base text-iNeutral font-avenirRoman">
              <Image
                src="/images/mission.png"
                width={82}
                height={82}
                alt="Imara Vision statements icons"
              />
              <p>Imara Africa Vision</p>
            </div>
          </TabsContent>
          <TabsContent value="values">
            <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center text-base text-iNeutral font-avenirRoman">
              <Image
                src="/images/mission.png"
                width={82}
                height={82}
                alt="Imara Core statements icons"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                dolor?
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </article>
  );
}

export default AboutCore