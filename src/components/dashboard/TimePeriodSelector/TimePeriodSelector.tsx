import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setTimePeriod } from "../../../store/slices/dashboardSlice";
import { Button } from "../../common/Button/Button";
import { Card, CardContent } from "../../common/Card/Card";
import crownIcon from "../../../assets/crown.svg";
import calenderIcon from "../../../assets/calender.svg";

export const TimePeriodSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedTimePeriod, timePeriodOptions } = useAppSelector((state) => state.dashboard);

  const handleTimePeriodChange = (value: string) => {
    dispatch(setTimePeriod(value));
  };

  return (
    <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
      <CardContent className="flex flex-col items-start justify-center gap-1 px-3 py-4">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="inline-flex items-start gap-1">
            <div className="flex flex-col w-[188px] items-start gap-2">
              <div className="text-sparko-dark-grey text-sm font-medium">
                Time Period
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-2">
              <div className="text-sparko-dark-grey text-xs text-right">
                dd:mm:yyyy - dd:mm:yyyy
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-2 w-full">
            {timePeriodOptions.map((option) => (
              <Button
                key={option.value}
                size="sm"
                variant={selectedTimePeriod === option.value ? "primary" : "outline"}
                onClick={() => handleTimePeriodChange(option.value)}
                className={`h-auto px-3 py-1 rounded-2xl border ${
                  selectedTimePeriod === option.value ? "border-purple-100 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50" : "border-[#f2f2f2] bg-transparent"}`}
              >
                <div className="inline-flex items-center justify-center gap-1">
                  {option.value === "custom" && (
                    <img
                      className="w-5 h-5"
                      alt="calendar"
                      src={calenderIcon}
                    />
                  )}
                  <div
                    className={`text-sm font-normal ${
                      selectedTimePeriod === option.value ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent" : "text-sparko-dark-grey"}`}
                  >
                    {option.label}
                  </div>
                  {option.value === "1year" && (
                    <img
                      className="w-5 h-[18px]"
                      alt="crown"
                      src={crownIcon}
                    />
                  )}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
