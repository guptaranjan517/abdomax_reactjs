"use client";

import { ImageExport } from "@/shared/images";
import useAppointmentStore from "@/stores/useAppointmentStore";
import React, { Fragment } from "react";
import ReactModal from "react-modal";

const EnquirySubmitted = () => {
  const { finalSubmit, setFinalSubmit } = useAppointmentStore();
  const handleClose = () => {
    setFinalSubmit(false);
  };
  return (
    <Fragment>
      <ReactModal
        className="fixed inset-0 flex items-center justify-center p-4 z-30 outline-none"
        isOpen={finalSubmit}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
        ariaHideApp={false}
      >
        <div className="bg-white rounded-[40px] shadow-lg max-w-lg w-full py-5 px-8 text-center z-50">
          <div className="py-4">
            <img
              src={ImageExport.POPUPOK}
              alt="Confirmation"
              className="w-44 h-44 mx-auto"
            />
          </div>
          <h2 className="text-xl font-semibold font-Public_Sans text-black my-4">
            Your enquiry submitted successfully
          </h2>
          <p className="text-popuptext mb-6 px-6 font-Public_Sans text-base">
            We have received your request and will get back to you shortly.
          </p>
          <button
            className="px-10 py-4 font-bold font-Public_Sans text-base bg-lightGreen text-black rounded-xl"
            onClick={handleClose}
          >
            DONE
          </button>
        </div>
      </ReactModal>
    </Fragment>
  );
};

export default EnquirySubmitted;
