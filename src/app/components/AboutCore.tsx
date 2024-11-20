import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function AboutCore() {
  return (
    <article className="bg-[#EEF3FC]">
      <section className="pt-12 container">
        <h3 className="font-avenirBlack text-3xl text-iBlue mb-8">
          Imara Fellowship Commitment
        </h3>
      </section>
      <section className="pb-12 container">
        <Tabs defaultValue="mission" className="w-full md:w-[90%] md:mx-auto">
          <div className="flex flex-col">
            <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-iBlue rounded-none px-0">
              <TabsTrigger
                value="mission"
                className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral"
              >
                Our Vision
              </TabsTrigger>
              <TabsTrigger
                value="values"
                className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral"
              >
                Core Values
              </TabsTrigger>
            </TabsList>
            <div className="flex-grow">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, dolor?
                  </p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </section>
    </article>
  );
}

export default AboutCore