import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Header } from "../../components/dashboard/Header/Header";
import { CreateInvoiceCard } from "../../components/dashboard/CreateInvoiceCard/CreateInvoiceCard";
import type { JSX } from "react/jsx-dev-runtime";
import { EarningsSection } from "../../components/dashboard/EarningsCard/EarningsCard";
import { TimePeriodSelector } from "../../components/dashboard/TimePeriodSelector/TimePeriodSelector";

const DashboardContent: React.FC = () => {
  return (
    <div className="bg-[#444444] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#444444] border border-solid border-[#ffffff1a] w-[1354px] h-[2725px]">
        <div className="relative w-[390px] h-[2227px] top-[282px] left-[482px] bg-purple-300">
          <div className="relative h-[2227px]">
            <Header />
            {/* Background gradient */}
            <div className="absolute w-[390px] h-[905px] top-0 left-0 bg-white/20" />

            {/* Main content area */}
            <div className="absolute w-[390px] h-[2120px] top-[107px] left-0 bg-white rounded-[46px_46px_0px_0px]" />

            {/* Content sections */}
            <div className="flex flex-col w-[377px] items-center gap-6 absolute top-[129px] left-1.5">
              <div className="flex flex-col w-[358px] items-start gap-3 flex-[0_0_auto]">
                <CreateInvoiceCard />

                <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-3 w-full">
                  <div className="inline-flex flex-col items-center gap-6">
                    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent font-semibold text-xs text-center">
                      Or Upload an existing invoice and set payment reminder
                    </div>
                  </div>
                </div>
               <TimePeriodSelector />
               <EarningsSection />
              </div>
            </div>
          </div>
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
