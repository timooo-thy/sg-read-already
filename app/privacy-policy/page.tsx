import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SG read already?",
  description: "Privacy Policy for sg Read Already?",
};

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] content-center justify-center py-10">
      <div className="w-10/12 md:w-8/12 md:text-large">
        <h1 className="text-2xl">Privacy Policy for SG read already?</h1>
        <br />
        <p>Last updated February 04, 2024</p>
        <br />
        <p>
          This privacy notice for (&apos;we&apos;, &apos;us&apos;, or
          &apos;our&apos;), describes how and why we might collect, store, use,
          and/or share (&apos;process&apos;) your information when you use our
          services (&apos;Services&apos;), such as when you: <br />
          <br />* Visit our website at{" "}
          <Link href="https://sg-readalready.vercel.app">
            https://sg-readalready.vercel.app
          </Link>
          . or any website of ours that links to this privacy notice
          <br />* Engage with us in other related ways, including any sales,
          marketing, or events.
          <br /> <br />
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          timothylhy@hotmail.com.
        </p>

        <br />
        <h2>SUMMARY OF KEY POINTS</h2>
        <br />
        <p>This summary provides key points from our privacy notice.</p>
        <br />
        <p>
          What personal information do we process? When you visit, use, or
          navigate our Services, we may process personal information depending
          on how you interact with us and the Services, the choices you make,
          and the products and features you use. <br />
          <br />
          Do we process any sensitive personal information? We do not process
          sensitive personal information. <br />
          <br />
          Do we receive any information from third parties? We do not receive
          any information from third parties.
          <br />
          <br />
          How do we process your information? We process your information to
          provide, improve, and administer our Services, communicate with you,
          for security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do
          so.
          <br />
          <br />
          In what situations and with which parties do we share personal
          information? Ve may share information in specific situations and with
          specific third parties.
          <br />
          <br />
          What are your rights? Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information.
          <br />
          <br />
          How do you exercise your rights? The easiest way to exercise your
          rights is by submiting a data subject access request, or by contacting
          us. We will consider and act upon any request in accordance with
          applicable data protecton laws.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
