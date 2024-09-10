// progress/page.tsx

"use client";
import TickCard from "@/components/TickCard";
import CommonBanner from "@/components/commonBanner/CommonBanner";
import Faq from "@/components/faq/Faq";
import FaqSection from "@/components/faq/FaqSection";
import Journey from "@/components/journey/Journey";
import Review from "@/components/review/Review";
import { faqData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React from "react";

const Progress = () => {
  return (
    <div className="w-full bg-black pt-20">
      <CommonBanner
        title="Abdomax "
        colorTitle="Progress"
        desc="Sculpt your core in 30 minutes! Our revolutionary method uses advanced tech for effortless, painless toning. No sweat, no strain, just results."
        mainStyle="bg-progressBanner"
      />
      <div className="w-full md:px-10 px-5 lg:px-20 md:py-10 py-7 mt-10">
        <img
          src={ImageExport.COURSEOFASESSION}
          alt="Course of a session"
          className="w-full"
        />
      </div>
      <div className="grid desktop:grid-cols-2 grid-cols-1 gap-5 md:px-10 px-5 lg:px-20">
        <TickCard
          text={
            <>
              During application, patients do not receive any anesthesia and lie
              in a <span className="text-lightGreen">supine position.</span>
            </>
          }
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
        <TickCard
          text="An applicator is placed on the area to be treated."
          background="desktop:!bg-bgTickCardRight !bg-bgTickCardLeft"
        />
        <TickCard
          text={
            <>
              The applicator is held by a disinfected
              <span className="text-lightGreen"> fixation belt </span> to
              minimize movement during the procedure.
            </>
          }
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
        <TickCard
          text={
            <>
              The practitioner gradually increases stimulation intensity to the
              patient's tolerance within 60 seconds. Each
              <span className="text-lightGreen"> 30 minute </span> session
              includes regular intensity checks and comfort assessments.
            </>
          }
          background="desktop:!bg-bgTickCardRight !bg-bgTickCardLeft"
        />
        <TickCard
          text="No special preparation is needed before treatment, but it is recommended to hydrate well to reduce cramps and dress comfortably on treatment days."
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
        <TickCard
          text={
            <>
              <span className="text-lightGreen">AbdoMax treatment </span> feels
              like an intensive workout but is described as a throbbing
              sensation rather than painful. The intensity is adjustable to
              ensure comfort.
            </>
          }
          background="desktop:!bg-bgTickCardRight !bg-bgTickCardLeft"
        />
      </div>
      <div className="w-full md:px-10 px-5 lg:px-20 md:py-10 py-7">
        <img
          src={ImageExport.NEEDEDSESSION}
          alt="Course of a session"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1  md:px-10 px-5 lg:px-20">
        <TickCard
          text={
            <>
              The minimum number of treatments is{" "}
              <span className="text-lightGreen"> 6</span>, tailored to your
              goals and BMI. Each session lasts{" "}
              <span className="text-lightGreen"> 30 minutes</span>, with at
              least 2 days between sessions. A full course of treatments is
              necessary for maximum effectiveness. Results start to appear after
              two weeks and generally improve over three months.
            </>
          }
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
      </div>
      <div className="grid desktop:grid-cols-2 grid-cols-1 gap-5 md:px-10 px-5 lg:px-20 mt-5">
        <TickCard
          text={
            <>
              An <span className="text-lightGreen"> AbdoMax </span> session
              causes <span className="text-lightGreen"> 20,000 muscle </span>
              contractions. They are equivalent to 20,000 squats or crunches!
            </>
          }
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
        <TickCard
          text={
            <>
              Studies show that after the first set of{" "}
              <span className="text-lightGreen"> 6 sessions</span>, the results
              on muscle can last a year or more, and the results with fat loss
              are permanent.
            </>
          }
          background="desktop:!bg-bgTickCardRight !bg-bgTickCardLeft"
        />
      </div>
      <div className="w-full md:px-10 px-5 lg:px-20 md:py-10 py-7">
        <img
          src={ImageExport.FOLLOWINGSESSION}
          alt="Course of a session"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1  md:px-10 px-5 lg:px-20">
        <TickCard
          text={
            <>
              Following the <span className="text-lightGreen"> AbdoMax </span>{" "}
              session, the patient will be able to resume their activities.
              However, he may feel aches similar to those following an{" "}
              <span className="text-lightGreen"> intensive sports </span>{" "}
              session.
            </>
          }
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
      </div>
      <div className="grid desktop:grid-cols-2 grid-cols-1 gap-5 md:px-10 px-5 lg:px-20 mt-5">
        <TickCard
          text="Are there any side effects?"
          background="odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft"
        />
        <TickCard
          text="No there is not. As we said before, the patient will only feel some aches."
          background="desktop:!bg-bgTickCardRight !bg-bgTickCardLeft"
        />
      </div>
      <div className="pb-10">
        <Review />
      </div>
      <div className="pb-10">
        <Faq />
      </div>
      <Journey />
    </div>
  );
};

export default Progress;
