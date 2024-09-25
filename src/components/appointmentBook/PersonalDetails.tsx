// / components/Baeikmnnooopptt / PersonalDetails.tsx;
"use client";
import React, { Fragment, useState } from "react";
import Button from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import useAppointmentStore from "@/stores/useAppointmentStore";
import { formatDate, generatePackageId } from "@/app/utils/formatter";
import { isErrorResponse } from "@/shared/lib/axiosInstance";
import { appointmentSubmit } from "@/shared/lib/common";
import AppointmentConfirmed from "../modal/AppointmentConfirmed";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
interface PersonalDetailsProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onClick }) => {
  const t = useTranslations("Index");
  const trans = useTranslations("Inquire");
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState("");
  const { stepsData, packageId, setFinalSubmit } = useAppointmentStore();
  const validationSchema = Yup.object({
    fullName: Yup.string().required(trans("FullNameRequired")),
    email: Yup.string()
      .email(trans("InvalidEmail"))
      .required(trans("EmailRequired")),
    phoneNumber: Yup.string().required(trans("MobileNumberRequired")),
    countryCode: Yup.string().required(trans("MobileNumberRequired")),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      countryCode: "+91",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values: any) => {
    const payload = {
      ...values,
      packageId: generatePackageId(),
      date: formatDate(stepsData?.[1]?.date),
      time: stepsData?.[2]?.time,
    };
    setLoading(true);
    try {
      const { appointmentData } = await appointmentSubmit(payload);
      setLoading(false);
      setFinalSubmit(true);
    } catch (error: unknown) {
      setLoading(false);
      if (isErrorResponse(error)) {
        toast.error(error.message);
        setResponseError(error.message);
      }
    }
  };
  const handlePhoneChange = (value: string, country: any) => {
    formik.setFieldValue("countryCode", `+${country.dialCode}`);
    formik.setFieldValue("phoneNumber", value.slice(country.dialCode.length));
  };
  return (
    <Fragment>
      <div className="max-w-screen-md sm:px-10 px-5 w-full bg-selecttimebg h-auto rounded-3xl shadow-inner py-12 mb-4">
        <div className="flex justify-between items-center border-b border-morningafterborder pb-6">
          <p className="text-white text-opacity-70 text-base font-medium font-Public_Sans">
            {t("selecteddate")}:
          </p>
          <p className="text-white  text-base font-medium font-Public_Sans">
            {formatDate(stepsData?.[1]?.date || null)}
          </p>
        </div>
        <div className="flex justify-between items-center py-6">
          <p className="text-white text-opacity-70 text-base font-medium font-Public_Sans">
            {t("selectedtime")}:
          </p>
          <p className="text-white  text-base font-medium font-Public_Sans">
            {stepsData?.[2]?.time}
          </p>
        </div>
        <p className="text-white  text-2xl font-medium font-Public_Sans pt-5">
          {t("personaldetails")}
        </p>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="sm:flex block w-full gap-8 py-5">
            <div className="w-full mb-5 sm:mb-0">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-inputfieldtxt font-Public_Sans"
              >
                {t("Full Name")}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-12 px-6 font-Public_Sans bg-inputfieldbg  text-inputfieldtxt text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your full name"
              />
              <p className="text-red-500 font-bold font-openSans text-sm mt-2">
                {formik.touched.fullName ? formik.errors.fullName : ""}
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 personal">
              <p className="font-Public_Sans text-sm font-medium text-inputfieldtxt pl-1">
                {t("Enter Mobile Number")}
              </p>
              <PhoneInput
                country={"us"}
                specialLabel=""
                value={formik.values.countryCode + formik.values.phoneNumber}
                countryCodeEditable={false}
                onChange={handlePhoneChange}
                inputProps={{ name: "phoneNumber", required: true }}
                containerClass="w-full !rounded-lg !bg-inputfieldbg !h-12 focus-visible:!outline-none"
                inputClass="h-12 px-6 font-Public_Sans bg-inputfieldbg  text-inputfieldtxt text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:!border-0"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500 font-bold font-openSans text-sm ml-2">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="mb-5 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-inputfieldtxt font-Public_Sans"
              >
                {t("Email ID")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-12 px-6 font-Public_Sans bg-inputfieldbg  text-inputfieldtxt text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email ID"
              />
              <p className="text-red-500 font-bold font-openSans text-sm mt-2">
                {formik.touched.email ? formik.errors.email : ""}
              </p>
            </div>
          </div>
          <div className="mt-9 flex justify-end">
            <Button
              type="submit"
              textButton={t("Book an appointment")}
              onClick={onClick}
              restStyle="w-72"
              loading={loading}
            />
          </div>
        </form>
      </div>
      <AppointmentConfirmed />
    </Fragment>
  );
};
export default PersonalDetails;
