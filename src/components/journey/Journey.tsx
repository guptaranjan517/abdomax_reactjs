"use client";
import { ImageExport } from "@/shared/images";
import React, { Fragment, useState } from "react";
import { contactData } from "@/shared/config";
import InputField from "../InputField";
import Button from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { enquirySubmit } from "@/shared/lib/common";
import { toast } from "react-toastify";
import { isErrorResponse } from "@/shared/lib/axiosInstance";
import useAppointmentStore from "@/stores/useAppointmentStore";
import EnquirySubmitted from "../modal/EnquirySubmitted";

const Journey = () => {
  const { language } = useGlobalStore();
  const { setFinalSubmit } = useAppointmentStore();
  const t = useTranslations("Index");
  const trans = useTranslations("Inquire");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required(trans("FullNameRequired")),
    email: Yup.string().email(trans("InvalidEmail")).required(trans("EmailRequired")),
    phoneNumber: Yup.string().required(trans("MobileNumberRequired")),
    message: Yup.string().required(trans("MessageRequired")),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      countryCode: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        ...values,
      };
      setLoading(true);
      try {
        const { enquiryData } = await enquirySubmit(payload);
        setLoading(false);
        setFinalSubmit(true);
        formik.resetForm();
      } catch (error: unknown) {
        setLoading(false);
        if (isErrorResponse(error)) {
          setIsSuccess(false);
          setFinalSubmit(false);
          toast.error(error.message);
        }
      }
    },
  });
  const handlePhoneChange = (value: string, country: any) => {
    formik.setFieldValue("countryCode", `+${country.dialCode}`);
    formik.setFieldValue("phoneNumber", value.slice(country.dialCode.length));
  };

  type Language = "en" | "fr";
  return (
    <Fragment>
      <div className="w-full flex justify-center">
        <div className="xl:max-w-screen-2xl md:bg-bgJourney bg-none bg-left-top w-full bg-28% bg-no-repeat h-fit lg:py-20 pt-0 md:px-20 sm:px-5 px-0 sm:mt-0 mt-10 sm:pb-0 pb-10">
          <div className="w-full flex flex-col md:items-center items-start lg:px-l md:pl-0 pl-4">
            <div className="flex gap-1 text-center pr-12">
              <img
                src={ImageExport.STARTLINE}
                alt="line"
                className="2xl:h-14 mobile:h-11 sm:block hidden"
              />
              <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase text-start">
                {t("launch")}
                <br />
                <span className="text-lightGreen">{t("journey")}</span>
              </h2>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col-reverse desktop:gap-10 sm:gap-5 gap-1 justify-between items-center lg:px-0 px-4">
            <div className="block md:w-1/2 w-full md:pt-8 pt-2">
              <p className="mt-2 mb-8 block text-white text-base font-Public_Sans py-2 lg:text-left text-start">
                {t("love")}
                <br />
                {t("touchs")}
              </p>
              <ul className="grid grid-rows-3 gap-3">
                {contactData.map((data) => (
                  <li className="flex items-center" key={data.id}>
                    <div className="flex items-center mb-4 gap-5">
                      <img src={data.icon} alt="icon" />
                      <span className="text-white self-center font-Public_Sans lg:text-lg text-base font-normal dark:text-white">
                        {data.text[language as Language]}
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
                  name="fullName"
                  id="fullName"
                  label={t("FullName")}
                  htmlFor="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullName ? formik.errors.fullName : ""}
                />
                <InputField
                  type="text"
                  name="email"
                  id="email"
                  label={t("EmaiId")}
                  htmlFor="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email ? formik.errors.email : ""}
                />
                <div className="flex flex-col gap-2 mb-10">
                  <p className="font-Public_Sans  text-md text-placeholdertxt pl-1">
                    {t("Mobile")}
                  </p>
                  <PhoneInput
                    country={"us"}
                    specialLabel=""
                    value={
                      formik.values.countryCode + formik.values.phoneNumber
                    }
                    countryCodeEditable={false}
                    onChange={handlePhoneChange}
                    inputProps={{ name: "phoneNumber", required: true }}
                    containerClass="w-full !rounded-lg !h-14 focus-visible:!outline-none border-b gradient-border-bottom"
                    inputClass="!w-full placeholder:!font-light text-placeholdertxt !font-medium !bg-transparent !font-Crimson_Text !font-base italic !font-bold placeholder:!text-extraLightGray !text-txtDarkGray !h-14 !rounded-lg !border-0 focus-visible:!border-0"
                  />

                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="text-red-500 font-bold font-openSans text-sm ml-2">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className="w-full relative">
                  <InputField
                    type="text"
                    name="message"
                    id="message"
                    label={t("Message")}
                    htmlFor="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message ? formik.errors.message : ""}
                  />
                </div>
                <Button
                  textButton={t("SendMessage")}
                  type="submit"
                  restStyle="!w-72"
                  loading={loading}
                />
              </form>
            </div>
          </div>
        </div>
        <EnquirySubmitted />
      </div>
    </Fragment>
  );
};
export default Journey;
