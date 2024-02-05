import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Filters = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline">Filters</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTrigger>
                    × Close
                </SheetTrigger>

                <Accordion type="multiple">
                    <AccordionItem value="category-filter">
                        <AccordionTrigger>Category</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-y-2 p-1">
                                <li>
                                    <Checkbox id="category-clothing" />
                                    <label htmlFor="category-clothing"> Clothing</label>
                                </li>
                                <li>
                                    <Checkbox id="category-accessory" />
                                    <label htmlFor="category-accessory"> Accessory</label>
                                </li>
                                <li>
                                    <Checkbox id="category-jewelry" />
                                    <label htmlFor="category-jewelry"> Jewelry</label>
                                </li>
                                <li>
                                    <Checkbox id="category-makeup" />
                                    <label htmlFor="category-makeup"> Makeup</label>
                                </li>
                                <li>
                                    <Checkbox id="category-perfume" />
                                    <label htmlFor="category-perfume"> Perfume</label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="size-filter">
                        <AccordionTrigger>Size</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-y-2 p-1">
                                <li>
                                    <Checkbox id="size-extra-small"/>
                                    <label htmlFor="size-extra-small"> Extra Small</label>
                                </li>
                                <li>
                                    <Checkbox id="size-small" />
                                    <label htmlFor="size-small"> Small</label>
                                </li>
                                <li>
                                    <Checkbox id="size-medium" />
                                    <label htmlFor="size-medium"> Medium</label>
                                </li>
                                <li>
                                    <Checkbox id="size-large" />
                                    <label htmlFor="size-large"> Large</label>
                                </li>
                                <li>
                                    <Checkbox id="size-custom" />
                                    <label htmlFor="size-custom"> Custom</label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="colour-filter">
                        <AccordionTrigger>Colour</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-y-2 p-1">
                                <li>
                                    <Checkbox id="colour-amber" />
                                    <label htmlFor="colour-amber"> Amber</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-burgundy" />
                                    <label htmlFor="colour-burgundy"> Burgundy</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-emerald" />
                                    <label htmlFor="colour-emerald"> Emerald</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-ivory" />
                                    <label htmlFor="colour-ivory"> Ivory</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-lavender" />
                                    <label htmlFor="colour-lavender"> Lavender</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-midnight" />
                                    <label htmlFor="colour-midnight"> Midnight</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-navy" />
                                    <label htmlFor="colour-navy"> Navy</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-rose-gold" />
                                    <label htmlFor="colour-rose-gold"> Rose Gold</label>
                                </li>
                                <li>
                                    <Checkbox id="colour-custom" />
                                    <label htmlFor="colour-custom"> Custom</label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="material-filter">
                        <AccordionTrigger>Material</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-y-2 p-1">
                                <li>
                                    <Checkbox id="material-cashmere" />
                                    <label htmlFor="material-cashmere"> Cashmere</label>
                                </li>
                                <li>
                                    <Checkbox id="material-diamond" />
                                    <label htmlFor="material-diamond"> Diamond</label>
                                </li>
                                <li>
                                    <Checkbox id="material-fabric" />
                                    <label htmlFor="material-fabric"> Fabric</label>
                                </li>
                                <li>
                                    <Checkbox id="material-leather" />
                                    <label htmlFor="material-leather"> Leather</label>
                                </li>
                                <li>
                                    <Checkbox id="material-silk" />
                                    <label htmlFor="material-silk"> Silk</label>
                                </li>
                                <li>
                                    <Checkbox id="material-velvet" />
                                    <label htmlFor="material-velvet"> Velvet</label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gender-filter">
                        <AccordionTrigger>Gender</AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-y-2 p-1">
                                <li>
                                    <Checkbox id="gender-men" />
                                    <label htmlFor="gender-men"> Men</label>
                                </li>
                                <li>
                                    <Checkbox id="gender-women" />
                                    <label htmlFor="gender-women"> Women</label>
                                </li>
                                <li>
                                    <Checkbox id="gender-unisex" />
                                    <label htmlFor="gender-unisex"> Unisex</label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Button variant="ghost">Clear</Button>
                <SheetTrigger>
                    <Button>Apply</Button>
                </SheetTrigger>
            </SheetContent>
        </Sheet>
    );
}
 
export default Filters;