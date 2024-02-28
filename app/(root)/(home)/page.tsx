import SnakeLoop from "@/components/snakeLoop"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col">
      <section>
        <SnakeLoop />
        <div id="first_carousel">
          {/* mobile carousel */}
          <div className="h-[120vw] pt-20 mb-20 md:hidden">
            <Carousel opts={{ align: "start", }} orientation="vertical" className="h-[100vw]" >
              <CarouselContent className="-mt-1 h-[100vw]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 transition duration-300 transform hover:-translate-y-2 py-2">
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
          <div className="w-full pl-14 my-2 hidden md:block bg-slate-200 rounded-3xl">
            <Carousel opts={{ align: "start", }} className="md:w-[95%] min-w-max py-5">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-[33%] transition duration-300 transform hover:-translate-y-2 py-2">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full my-2 bg-slate-300 rounded-3xl" id="new_arrivals">
          {/* Grid 1 */}
          <div className="m-5 p-5 bg-slate-500 rounded-2xl">
            <h2 className="text-3xl">New Arrivals</h2>
            <br />
            <p>Explore our latest collection of high-end fashion in our "New Arrivals" section, where luxury meets sophistication. From couture pieces to contemporary essentials, each item is crafted with meticulous attention to detail and impeccable quality. Elevate your wardrobe with statement pieces and everyday essentials designed to showcase the essence of modern luxury. Discover opulent eveningwear and sophisticated streetwear, all curated to elevate your style to new heights of sophistication. Shop now and indulge in sartorial excellence with our exclusive new arrivals.</p>
            <br />
            <Button variant="outline">Shop Now</Button>
          </div>
          {/* Grid 2 */}
          <div className="m-5 p-5 bg-slate-500 rounded-2xl group">
            <div className="flex justify-center group">
              <Image src="/../gift_images/clothing.png" alt="New Arrivals" width={750} height={100} className="block group-hover:hidden" />
              <Image src="/../gift_images/dresses.png" alt="New Arrivals" width={750} height={250} className="hidden group-hover:block" />
            </div>
            <div className="flex justify-between py-2">
              <div>
                <h3>Clothing Name</h3>
                <p>Category</p>
              </div>
              <Button variant="outline">Add to Cart</Button>
            </div>
          </div>
          {/* Grid 3 */}
          <div className="m-5 p-5 bg-slate-500 rounded-2xl">
            <div className="flex justify-center group">
              <Image src="/../gift_images/dresses.png" alt="New Arrivals" width={750} height={250} className="block group-hover:hidden" />
              <Image src="/../gift_images/clothing.png" alt="New Arrivals" width={750} height={100} className="hidden group-hover:block" />
            </div>
            <div className="flex justify-between py-2">
              <div>
                <h3>Dress Name</h3>
                <p>Category</p>
              </div>
              <Button variant="outline">Add to Cart</Button>
            </div>
          </div>
        </div>

        <div className="h-[80vh] w-full my-2 bg-slate-300 rounded-3xl relative">
          <Image src="/../front_page/banner2.png" alt="Gifts" layout="fill" objectFit="cover" />
        </div>

      </section>
    </main>
  )
}