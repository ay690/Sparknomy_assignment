import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { Card, CardContent } from "../../common/Card/Card";

interface EarningsCardProps {
  title: string;
  amount: number;
  type: "total" | "awaited" | "overdue";
}

export const EarningsCard: React.FC<EarningsCardProps> = ({
  title,
  amount,
  type,
}) => {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getCardWidth = () => {
    return type === "total" ? "w-full" : " ";
  };

  return (
    <Card className={`${getCardWidth()} bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]`}>
      <CardContent className="flex items-center gap-1 px-3 py-4">
        <div className={`flex flex-col items-start gap-${type === "total" ? "2" : "3"} ${type === "total" ? "w-52" : "w-[148px]"}`}>
          <div className="text-sparko-dark-grey text-sm font-medium">
            {title}
          </div>

          <div className={`text-[#8134AF] font-semibold ${type === "total" ? "text-xl" : "text-lg"}`}>
            {formatAmount(amount)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const EarningsSection: React.FC = () => {
  const { totalEarnings, paymentAwaited, paymentOverdue } = useAppSelector((state) => state.dashboard);

  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <EarningsCard
        title="Total Earnings"
        amount={totalEarnings}
        type="total"
      />

      <div className="inline-flex gap-3 w-full">
        <EarningsCard
          title="Payment Awaited"
          amount={paymentAwaited}
          type="awaited"
        />
        <EarningsCard
          title="Payment Overdue"
          amount={paymentOverdue}
          type="overdue"
        />
      </div>
    </div>
  );
};
