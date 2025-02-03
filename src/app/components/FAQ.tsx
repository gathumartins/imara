import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


function FAQ({faqs}:any) {
  return (
    <article className="bg-white">
      <section className="container py-12">
        <header className="mb-5">
          <h3 className="font-avenirBlack text-3xl text-iBlue max-w-[400px] mx-auto text-center">
            Frequently Asked Questions
          </h3>
        </header>
        <Accordion type="single" collapsible>
          {faqs.map((faq: any, index: number) => (
            <div className="" key={index}>
              <AccordionItem
                value={`item-${index}`}
                className="shadow-md px-4 py-1 rounded border-1 border-[#EEF3FC] mb-4 bg-[#EEF3FC]"
              >
                <AccordionTrigger className="myPro font-avenirNextBold text-iBlue">
                  {faq.qandas.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="myPro"
                    dangerouslySetInnerHTML={{ __html: faq.qandas.answer }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </section>
    </article>
  );
}

export default FAQ