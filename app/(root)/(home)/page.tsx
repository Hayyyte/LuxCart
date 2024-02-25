import SnakeLoop from "@/components/snakeLoop"
// import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col">
      <section>
          <SnakeLoop />
          {/* mobile carousel */}
          <div className="h-[120vw] pt-20 mb-20 md:hidden">
            <Carousel opts={{ align: "start", }} orientation="vertical" className="h-[100vw]" >
              <CarouselContent className="-mt-1 h-[100vw]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-slate-700 hover:bg-slate-400 rounded-xl">
                          <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-slate-600" />
              <CarouselNext className="hover:bg-slate-600" />
            </Carousel>
          </div>
          {/* md + screen size carousel */}
          <div className="w-full pl-14 hidden md:block">
            <Carousel
              opts={{
                align: "start",
              }}
              className="md:w-[95%] min-w-max"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-[250px] lg:basis-[450px]">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-slate-400 hover:bg-slate-700 rounded-xl">
                          <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-slate-600" />
              <CarouselNext className="hover:bg-slate-600" />
            </Carousel>
          </div>
      </section>
    </main>
  )
}