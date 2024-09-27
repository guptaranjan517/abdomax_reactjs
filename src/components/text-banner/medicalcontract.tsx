"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";


const MedicalContract = () => {
    const t = useTranslations("Bannercont");
    return (
        <Fragment>
            
            <div className="w-full md:px-10 px-5 lg:px-20 md:py-10 py-7 mt-10 relative">
                <div className="flex gap-1 justify-center items-start mb-2 absolute top-6 sm:top-8 lg:top-12 ">
                    <img src="/images/startLine.png" alt="line" className="2xl:h-14 mobile:h-8 h-4" />
                    <h2 className="font-bold font-DIN text-white 2xl:text-80p xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl mobile:text-2xl text-lg uppercase">{t("Medical")}
                        <span className="text-lightGreen"> {t("contraindications")}</span>                
                      
                    </h2>
                </div>
                <img src="/images/medical-contract.png" alt="" className="w-full" />
            </div>
        </Fragment>
    );
};

export default MedicalContract;
