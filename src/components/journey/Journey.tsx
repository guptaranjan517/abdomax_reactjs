/* eslint-disable @next/next/no-img-element */
"use client";
import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import { contactData } from "@/shared/config";
import InputField from "../InputField";
import Button from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  floating_first_name: Yup.string().required("Full Name is required"),
  floating_email: Yup.string()
    .email("Invalid email address")
    .required("Email ID is required"),
  floating_phone: Yup.string().required("Mobile Number is required"),
  floating_message: Yup.string().required("Message is required"),
});

const Journey = () => {
  const formik = useFormik({
    initialValues: {
      floating_first_name: "",
      floating_email: "",
      floating_phone: "",
      floating_message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Print form data
    },
  });

  return (
    <Fragment>
      <div className="w-full flex justify-center">
        <div className="xl:max-w-screen-2xl md:bg-bgJourney bg-none bg-left-top w-full bg-28% bg-no-repeat h-fit lg:py-20 md:py-10 md:px-20 sm:px-5 px-0 sm:mt-0 mt-10 sm:pb-0 pb-10">
          <div className="w-full flex flex-col md:items-center items-start lg:px-l md:pl-14 pl-4">
            <div className="flex gap-1 text-center">
              <img
                src={ImageExport.STARTLINE}
                alt="line"
                className="2xl:h-14 mobile:h-11 sm:block hidden"
              />
              <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase text-start">
                Let's launch your <br />
                <span className="text-lightGreen">journey</span>
              </h2>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col-reverse desktop:gap-10 sm:gap-5 gap-1 justify-between items-center lg:px-0 px-4">
            <div className="block md:w-1/2 w-full md:pt-8 pt-2">
              <p className="mt-2 mb-8 block text-white text-base font-Public_Sans py-2 lg:text-left text-start">
                We’d love to hear from you! Let’s get <br />
                in touch
              </p>

              <ul className="grid grid-rows-3 gap-3">
                {contactData.map((data) => (
                  <li className="flex items-center" key={data.id}>
                    <div className="flex items-center mb-4 gap-5">
                      <img src={data.icon} alt="icon" />
                      <span className="text-white self-center font-Public_Sans lg:text-lg text-base font-normal dark:text-white">
                        {data.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block md:w-1/2 w-full">
              <img
                src={ImageExport.JOURNEYIMG}
                alt="line"
                className="sm:h-52 mobile:h-6 h-5 -mt-10 md:block hidden"
              />

              <form onSubmit={formik.handleSubmit} className="my-8">
                <InputField
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  label="Full Name"
                  htmlFor="floating_first_name"
                  value={formik.values.floating_first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.floating_first_name
                      ? formik.errors.floating_first_name
                      : ""
                  }
                />
                <InputField
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  label="Email ID"
                  htmlFor="floating_email"
                  value={formik.values.floating_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.floating_email
                      ? formik.errors.floating_email
                      : ""
                  }
                />
                <InputField
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  label="Mobile Number"
                  htmlFor="floating_phone"
                  value={formik.values.floating_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.floating_phone
                      ? formik.errors.floating_phone
                      : ""
                  }
                />
                <InputField
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  label="Message"
                  htmlFor="floating_message"
                  value={formik.values.floating_message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.floating_message
                      ? formik.errors.floating_message
                      : ""
                  }
                />

                <Button
                  textButton="Send Message"
                  type="submit"
                  restStyle="!w-72"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Journey;
