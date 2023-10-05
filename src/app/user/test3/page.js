"use client";

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { Alert, Calendar } from "antd";
// import moment from "moment";

// const Test3 = () => {
//   const [value, setValue] = useState(() =>
//     dayjs(moment().format("YYYY-MM-DD"))
//   );
//   const [selectedValue, setSelectedValue] = useState(() =>
//     dayjs(moment().format("YYYY-MM-DD"))
//   );
//   const onSelect = (newValue) => {
//     setValue(newValue);
//     setSelectedValue(newValue);
//   };
//   const onPanelChange = (newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <Alert
//         message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
//       />
//       <Calendar
//         value={value}
//         onSelect={onSelect}
//         onPanelChange={onPanelChange}
//       />
//     </>
//   );
// };

// export default Test3;
import TaskForm from "@/app/component/forms/taskForm";

export default function Home() {
  return (
    <div>
      <h1>Add a Task</h1>
      <TaskForm />
    </div>
  );
}