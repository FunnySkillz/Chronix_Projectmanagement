import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

// Optional: Global Paddle definition if using TypeScript
declare global {
  interface Window {
    Paddle: any;
  }
}

function usePaddleLoader(vendorId: number) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.querySelector(
        'script[src="https://cdn.paddle.com/paddle/paddle.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/paddle.js";
      script.onload = () => {
        window.Paddle?.Setup({ vendor: vendorId });
      };
      document.body.appendChild(script);
    }
  }, [vendorId]);
}

function handleCheckout(productId: number) {
  if (typeof window !== "undefined" && window.Paddle) {
    window.Paddle.Checkout.open({ product: productId });
  }
}

export function PricingSectionOne() {
  usePaddleLoader(102023); // Your Paddle Vendor ID

  return (
    <section id="pricing" className="py-24 px-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Pick the best plan for you
        </Typography>
        <Typography className="mb-8 font-normal !text-gray-500">
          You have Free Unlimited Updates and Premium Support on each package.
        </Typography>
      </div>

      <div className="mt-12">
        <div className="container mx-auto md:flex justify-center gap-10">
          {/* Free/Open Source Card */}
          <Card
            color="transparent"
            className="border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="!m-0 pt-6 text-center"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="capitalize mb-2 text-center"
              >
                Open Source
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="flex gap-1 justify-center"
              >
                Free
              </Typography>
            </CardHeader>
            <CardBody className="text-center">
              <ul className="flex flex-col mb-8 px-5">
                {[
                  "Documentation",
                  "20 Components",
                  "10 Blocks",
                  "3 Example Pages",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-3 border-b py-4 text-gray-700"
                  >
                    <Typography
                      variant="small"
                      className="font-normal text-inherit"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                variant="gradient"
                color="blue-gray"
                className="from-blue-gray-900 to-blue-gray-800"
                as="a"
                href="https://github.com/creativetimofficial/astro-launch-ui?ref=astroLaunch-UI-landing"
                target="_blank"
              >
                Download
              </Button>
            </CardBody>
          </Card>

          {/* Pro Card with Paddle Checkout */}
          <Card color="blue-gray" className="bg-dark w-full md:w-1/2 lg:w-1/4">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="!m-0 pt-6 text-center"
            >
              <Typography
                variant="h5"
                color="white"
                className="capitalize mb-2 text-center"
              >
                Pro Version
              </Typography>
              <Typography
                variant="h3"
                color="white"
                className="flex gap-1 justify-center"
              >
                $99
              </Typography>
            </CardHeader>
            <CardBody className="text-center">
              <ul className="flex flex-col mb-8 px-5">
                {[
                  "Documentation",
                  "140+ Components",
                  "30+ Blocks",
                  "10+ Example Pages",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30"
                  >
                    <Typography
                      variant="small"
                      className="font-normal text-inherit"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                variant="gradient"
                color="white"
                onClick={() => handleCheckout(847482)} // Your Paddle product ID
              >
                Get Access
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default PricingSectionOne;
