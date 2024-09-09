import { Backpack } from "@mui/icons-material";
import { useState } from "react";
import Calendar from "react-calendar";
import { IoIosArrowRoundBack } from "react-icons/io";

function AppointmentForm({setShowAppointment}) {
  const [showDoctorCatagory, setShowDoctorCatagory] = useState("ftf");
  const [showDoctorAppointment, setShowDoctorAppointment] =
    useState("NewPatient");

  const [valueCalender, setValueCalender] = useState(Date());

  const handleChangeConsultation = (e) => {
    setShowDoctorCatagory(e.target.value);
  };

  const handleChangeAppointment = (e) => {
    setShowDoctorAppointment(e.target.value);
  };

  const handleCalculator = (e) => {
    setValueCalender(e.values);
  };
  
  return (
    <form className="px-5 flex  flex-col gap-2 md:shadow-none shadow-md">

        <div className="h-10 md:hidden items-center flex">
            <button type="button" className="h-[100%] px-5" onClick={()=>setShowAppointment(false)}>
                <IoIosArrowRoundBack />
            </button>
            <h1 className="text-lg">Appintment</h1>
        </div>

      <div className=" border flex w-[100%] rounded-md m-auto flex-col gap-4 py-5 px-4">
        <div className="text-lg font-light">Select Consultation Type</div>
        <div className="flex gap-2 px-2">
          <label htmlFor="FaceToFace">
            <div
              className={`w-fit ${
                showDoctorCatagory == "ftf"
                  ? "bg-[#078FF7] text-white"
                  : "bg-[#DBEFFE] text-blue-700"
              } px-2 py-1 rounded-lg hover:border-[1px]  hover:bg-[#078FF7] transition-colors duration-500 hover:text-white border-[#DBEFFE]`}
            >
              Face To Face
            </div>
          </label>
          <label htmlFor="ids">
            <div
              className={`w-fit px-2 py-1 ${
                showDoctorCatagory == "ids"
                  ? "bg-[#078FF7] text-white"
                  : "text-blue-700 bg-[#DBEFFE]"
              } rounded-lg hover:border-[1px] hover:bg-[#078FF7] transition-colors duration-500 hover:text-white border-[#DBEFFE]`}
            >
              Hello
            </div>
          </label>
          <div>
            <input
              name="Consultation"
              onChange={handleChangeConsultation}
              value={"ftf"}
              className="hidden"
              id="FaceToFace"
              type="radio"
            />
            <input
              name="Consultation"
              onChange={handleChangeConsultation}
              value={"ids"}
              className="hidden"
              id="ids"
              type="radio"
            />
          </div>
        </div>
      </div>
      <div className=" border flex w-[100%] rounded-md m-auto flex-col gap-4 py-5 px-4">
        <div className="text-lg font-light">Appointment Type</div>
        <div className="flex gap-2 px-2">
          <label htmlFor="NewPatient">
            <div
              className={`w-fit ${
                showDoctorAppointment == "NewPatient"
                  ? "bg-[#078FF7] text-white"
                  : "bg-[#DBEFFE] text-blue-700"
              } px-2 py-1 rounded-lg hover:border-[1px]  hover:bg-[#078FF7] transition-colors duration-500 hover:text-white border-[#DBEFFE]`}
            >
              New Patient
            </div>
          </label>
          <label htmlFor="ReportShow">
            <div
              className={`w-fit px-2 py-1 ${
                showDoctorAppointment == "ReportShow"
                  ? "bg-[#078FF7] text-white"
                  : "text-blue-700 bg-[#DBEFFE]"
              } rounded-lg hover:border-[1px] hover:bg-[#078FF7] transition-colors duration-500 hover:text-white border-[#DBEFFE]`}
            >
              Report Show
            </div>
          </label>
          <div>
            <input
              name="Types"
              onChange={handleChangeAppointment}
              value={"NewPatient"}
              className="hidden"
              id="NewPatient"
              type="radio"
            />
            <input
              name="Types"
              onChange={handleChangeAppointment}
              value={"ReportShow"}
              className="hidden"
              id="ReportShow"
              type="radio"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center h-10">
        Select an Available Time
      </div>
      <div className="w-[100%] flex justify-center">
        <Calendar
          onChange={handleCalculator}
          value={valueCalender}

          className={
            "border-t rounded-md border-none shadow-2xl shadow-blue-600"
          }
        />
      </div>

      <div className="mt-5 mb-5">
        <button
          type="submit"
          className="py-2 bg-[#078FF7] rounded-md text-white w-[100%]"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default AppointmentForm;
