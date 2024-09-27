import axiosInstance from "../axiosInstance";

export interface AppointmentPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  date: Date | null;
  time: string | null;
  packageId: string;
}

export interface EnquiryPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
}

// Service for appointment submit
export async function appointmentSubmit(
  payload: AppointmentPayload
): Promise<any> {
  try {
    const response = await axiosInstance.post(`/user/booking/add`, {
      ...payload,
    });

    return {
      appointmentData: response.data.data.result.acknowledged,
    };
  } catch (error) {
    // Error is handled globally by Axios instance
    throw error;
  }
}
// Service for enquiry submit
export async function enquirySubmit(payload: EnquiryPayload): Promise<any> {
  try {
    const response = await axiosInstance.post(`/user/booking/enquiry`, {
      ...payload,
    });
    return { enquiryData: response.data.data };
  } catch (error) {
    // Error is handled globally by Axios instance
    throw error;
  }
}

// Service for appointment submit
export async function getTimeSlots(date: any): Promise<any> {
  try {
    const response = await axiosInstance.get(
      `/user/booking/timeSlotList?date=${date}`
    );

    return {
      availableSlots: response.data.data,
    };
  } catch (error) {
    // Error is handled globally by Axios instance
    throw error;
  }
}
