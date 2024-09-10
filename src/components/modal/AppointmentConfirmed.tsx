"use client";

import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import ReactModal from "react-modal";

interface AppointmentConfirmedProps {
  isOpen: boolean;
  setIsOpen: any;
}

const AppointmentConfirmed: React.FC<AppointmentConfirmedProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <ReactModal
        className="fixed inset-0 flex items-center justify-center p-4 z-30 outline-none"
        isOpen={isOpen}
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
            Your Appointment has been Confirmed{" "}
          </h2>
          <p className="text-popuptext mb-6 px-6 font-Public_Sans text-base">
            Your appointment has been confirmed, please visit on the correct
            date and time so that we can give you complete information.
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

export default AppointmentConfirmed;
