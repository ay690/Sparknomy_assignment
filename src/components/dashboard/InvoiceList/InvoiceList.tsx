import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { InvoiceItem } from './InvoiceItem';
import blackDropDownIcon from "../../../assets/blackdropdown.svg";

export const InvoiceList: React.FC = () => {
  const { invoices } = useAppSelector(state => state.dashboard);

  return (
    <div className="flex flex-col items-start gap-2.5 p-2.5 w-full">
      <div className="flex items-center justify-between gap-28 w-full">
        <div className="text-sparko-dark-grey text-lg font-semibold">
          Your Invoices
        </div>

        <img
          className="w-6 h-6"
          alt="More options"
          src={blackDropDownIcon}
        />
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        {invoices?.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};