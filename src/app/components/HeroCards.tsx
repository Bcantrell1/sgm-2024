import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl bg-neu-base border-none shadow-neumorphic">
				<Link href="/services/hardscape">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
					<img
						alt="Brick Photo"
						src="/bricks.png"
            className="rounded-full w-16 h-16 aspect-square object-cover"
					/>

          <div className="flex flex-col">
            <CardTitle className="text-lg text-neu-yellow">Hardscape &<br/> Outdoor Kitchens</CardTitle>
            {/* <CardDescription>@john_doe</CardDescription> */}
          </div>
        </CardHeader>

        <CardContent className="text-gray-200">Custom hardscape and outdoor kitchen designs</CardContent>
				</Link>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center border-none bg-neu-base shadow-neumorphic">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/sammy.png"
            alt="sammy ceo"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center text-red-500">Samuel Arrebollo</CardTitle>
          <CardDescription className="font-normal text-primary">
						<span className="text-neu-yellow">Founder / CEO</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p className="text-gray-200">
					Passionate about transforming outdoor spaces. Were committed to turning your vision into a reality that surpasses your expectations.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/sgm_scapes/"
              target="_blank"
              className={`${buttonVariants({
                variant: "ghost",
                size: "sm",
              })} hover:bg-neu-light hover:shadow-neumorphic-inset`}
            >
              <span className="sr-only">Instagram icon</span>
              <InstagramLogoIcon className="w-5 h-5 text-neu-green" />
            </a>
            {/* <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a> */}

            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=100057789394406"
              target="_blank"
              className={`${buttonVariants({
                variant: "ghost",
                size: "sm",
              })} hover:bg-neu-light hover:shadow-neumorphic-inset`}
            >
              <span className="sr-only">Linkedin icon</span>
							<svg 
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-foreground w-5 h-5 "
								>
									<title>Facebook</title>
									<path fill="#3f9443" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
							</svg>
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[175px] left-[50px] w-72 border-none bg-neu-base shadow-neumorphic">
        <CardHeader>
          <CardTitle className="flex item-center text-neu-green justify-between">
            Free
            <Badge
              variant="default"
              className="text-sm bg-neu-base shadow-neumorphic-inset text-neu-yellow"
            >
             Estimates 
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0.00</span>
          </div>

          <CardDescription>
					Complimentary consultations for Tucson residents and neighboring communities. Lets discuss your dream project!
          </CardDescription>
        </CardHeader>

				<CardContent>
          <a href="tel:+15206682281" className="w-full block text-center neu-button text-neu-yellow">
						Free Estimate
					</a>
        </CardContent>

        <hr className="w-4/5 m-auto bg-neu-light mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Hardscape", "Artificial Turf", "Your Project"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2 text-gray-200">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] border-none bg-neu-base shadow-neumorphic">
				<Link href="/services/turf">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
						<Image src="/grass.png" alt="grass" width={100} height={100} />
          </div>
          <div>
            <CardTitle className="text-neu-green">Custom Putting Greens</CardTitle>
            <CardDescription className="text-md mt-2">
							Experience golf course quality in your own backyard with our custom putting greens.
            </CardDescription>
          </div>
        </CardHeader>
				</Link>
      </Card>
    </div>
  );
};
