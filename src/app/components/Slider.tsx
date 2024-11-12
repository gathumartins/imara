"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Slider() {
  return (
    <div className="max-w-[1280px] mx-auto mt-[20px]">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="-mr-60 md:-mr-40">
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4">
            <Card className="pt-[20px] bg-white">
              <CardContent>
                <p className="text-base font-avenirRoman text-iNeutral">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque accusantium, sapiente tenetur iusto alias deserunt
                  ratione commodi autem voluptas labore!
                </p>
              </CardContent>
              <CardFooter className="flex flex-row gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-avenirBlack text-base text-iBlue">
                    Wilberforce Oyuga
                  </h5>
                  <h6 className="font-avenirRoman text-xs text-iNeutral">
                    Cohort 2, Nairobi
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4">
            <Card className="pt-[20px] bg-white">
              <CardContent>
                <p className="text-base font-avenirRoman text-iNeutral">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque accusantium, sapiente tenetur iusto alias deserunt
                  ratione commodi autem voluptas labore!
                </p>
              </CardContent>
              <CardFooter className="flex flex-row gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-avenirBlack text-base text-iBlue">
                    Wilberforce Oyuga
                  </h5>
                  <h6 className="font-avenirRoman text-xs text-iNeutral">
                    Cohort 2, Nairobi
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4">
            <Card className="pt-[20px] bg-white">
              <CardContent>
                <p className="text-base font-avenirRoman text-iNeutral">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque accusantium, sapiente tenetur iusto alias deserunt
                  ratione commodi autem voluptas labore!
                </p>
              </CardContent>
              <CardFooter className="flex flex-row gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-avenirBlack text-base text-iBlue">
                    Wilberforce Oyuga
                  </h5>
                  <h6 className="font-avenirRoman text-xs text-iNeutral">
                    Cohort 2, Nairobi
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4">
            <Card className="pt-[20px] bg-white">
              <CardContent>
                <p className="text-base font-avenirRoman text-iNeutral">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque accusantium, sapiente tenetur iusto alias deserunt
                  ratione commodi autem voluptas labore!
                </p>
              </CardContent>
              <CardFooter className="flex flex-row gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-avenirBlack text-base text-iBlue">
                    Wilberforce Oyuga
                  </h5>
                  <h6 className="font-avenirRoman text-xs text-iNeutral">
                    Cohort 2, Nairobi
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4">
            <Card className="pt-[20px] bg-white">
              <CardContent>
                <p className="text-base font-avenirRoman text-iNeutral">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque accusantium, sapiente tenetur iusto alias deserunt
                  ratione commodi autem voluptas labore!
                </p>
              </CardContent>
              <CardFooter className="flex flex-row gap-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-avenirBlack text-base text-iBlue">
                    Wilberforce Oyuga
                  </h5>
                  <h6 className="font-avenirRoman text-xs text-iNeutral">
                    Cohort 2, Nairobi
                  </h6>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-8 bg-iBlue text-white" />
        <CarouselNext className="mr-8 bg-iBlue text-white" />
      </Carousel>
    </div>
  );
}

export default Slider;
