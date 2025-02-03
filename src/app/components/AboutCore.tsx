import React from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function AboutCore({core}:any) {
  return (
    <article className="bg-[#EEF3FC]">
      <section className="pt-12 container">
        <h3 className="font-avenirBlack text-3xl text-iBlue mb-8">
          Imara Fellowship Commitment
        </h3>
      </section>
      <section className="pb-12 container">
        <Tabs
          defaultValue={core.defaultvalue}
          className="w-full md:w-[90%] md:mx-auto"
        >
          <div className="flex flex-col">
            <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-iBlue rounded-none px-0">
              {core.statements.map((statement: any, index: number) => (
                <TabsTrigger
                  value={statement.shortname}
                  className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral"
                  key={index}
                >
                  {statement.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-grow">
              {core.statements.map((statementcont: any, index: number) => (
                <TabsContent value={statementcont.shortname} key={index}>
                  <div className="flex flex-col justify-center gap-5 place-items-center max-w-[800px] mx-auto py-10 text-center text-base text-iNeutral font-avenirRoman">
                    {statementcont.icon !== null && (
                      <Image
                        src={statementcont.icon.node.sourceUrl}
                        width={100}
                        height={100}
                        alt={`Imara Africa Fellowship ${statementcont.title} Icon`}
                      />
                    )}

                    <div
                      className="myPro text-black [&_b]:text-iBlue [&_strong]:text-iBlue [&_strong]:font-avenirBlack [&_li]:list-disc [&_li]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_li]:mb-4"
                      dangerouslySetInnerHTML={{
                        __html: statementcont.content,
                      }}
                    ></div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </section>
    </article>
  );
}

export default AboutCore