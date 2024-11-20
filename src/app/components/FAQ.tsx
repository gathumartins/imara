import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


function FAQ() {
  return (
    <article className="bg-white">
      <section className="container py-12">
        <header className="mb-5">
          <h3 className="font-avenirBlack text-3xl text-iBlue max-w-[400px] mx-auto text-center">
            Frequently Asked Questions
          </h3>
        </header>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="shadow-md px-4 py-1 rounded border-1 border-[#EEF3FC] mb-4 bg-[#EEF3FC]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="shadow-md px-4 py-1 rounded border-1 border-[#EEF3FC] mb-4 bg-[#EEF3FC]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </article>
  );
}

export default FAQ