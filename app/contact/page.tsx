import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | SG read already?",
  description:
    "Contact me for any queries or feedback, and potential collaborations.",
};

const Contact = () => {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col items-center">
      <h1 className="py-6 text-3xl font-bold">Contact Me</h1>
      <Card className="mb-5 h-[350px] w-10/12 ">
        <CardHeader>
          <div className="flex gap-5">
            <div>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/106719865?s=400&u=a7162ba8c73a9a5861c542a6319fed5ea6821a10&v=4" />
                <AvatarFallback>Tim</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <CardTitle>Timothy Lee</CardTitle>
              <CardDescription>
                Empowering Positive Change Through Technology.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Link href="mailto:timothylhy@hotmail.com">
                timothylhy@hotmail.com
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Link href="https://www.linkedin.com/in/timooothy/">
                @timooothy
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="github">Github</Label>
              <Link href="https://github.com/timooo-thy">@timooo-thy</Link>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/">Back</Link>
          </Button>
          <Button>
            <Link href="https://timooo-thy.github.io/resume/">Surprise</Link>
          </Button>
        </CardFooter>
      </Card>
      <div className="w-10/12 gap-4 md:flex md:justify-between">
        <Card className="h-min-[150px] mb-5 md:w-6/12">
          <CardHeader>
            <div className="flex gap-5">
              <div>
                <Avatar>
                  <AvatarImage src="/uni.png" />
                  <AvatarFallback>SG</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <CardTitle>SG University Guide</CardTitle>
                <CardDescription>
                  Welcome to Singapore&apos;s leading course discovery platform.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <Button className="m-auto w-[100px]">
              <Link href="https://www.sguniguide.tech/">Enter</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-min-[150px] mb-5 md:w-6/12">
          <CardHeader>
            <div className=" flex gap-5">
              <div>
                <Avatar>
                  <AvatarImage src="/robot.svg" className="bg-white" />
                  <AvatarFallback>Robo</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <CardTitle>Product Chatbot</CardTitle>
                <CardDescription>
                  Leverages the capabilities of LLMs and the LangChain library.
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardFooter className="flex items-center justify-between">
            <Button className="m-auto w-[100px]">
              <Link href="https://pychatbot.streamlit.app">Enter</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
