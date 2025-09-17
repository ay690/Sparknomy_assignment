import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Header } from "../../components/dashboard/Header/Header";
import type { JSX } from "react/jsx-dev-runtime";

const DashboardContent: React.FC = () => {
  return (
    <div className="bg-[#444444] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#444444] border border-solid border-[#ffffff1a] w-[1354px] h-[2725px]">
        <div className="relative w-[390px] h-[2227px] top-[282px] left-[482px] bg-purple-300">
          <Header />
        </div>
      </div>
    </div>
  );
};

export const AssignmentScreen = (): JSX.Element => {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  );
};
