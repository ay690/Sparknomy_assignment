import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { updateInvoiceStatus, type Invoice } from '../../../store/slices/dashboardSlice';
import { Badge } from '../../common/Badge/Badge';
import { Card, CardContent } from '../../common/Card/Card';
import dropDownIcon from "../../../assets/dropdown.svg";
import editIcon from "../../../assets/pencil.svg";
import bellIcon from "../../../assets/bell.svg";

interface InvoiceItemProps {
  invoice: Invoice;
}

export const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  const dispatch = useAppDispatch();

  const handleStatusUpdate = () => {
    if (invoice.status === 'update') {
      // Example: cycle through statuses for demo
      const newStatus = 'paid';
      dispatch(updateInvoiceStatus({ id: invoice.id, status: newStatus }));
    }
  };

  return (
    <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
      <CardContent className="flex items-center gap-1 px-3 py-4">
        <div className="inline-flex items-center gap-3 w-full">
          <div className="flex flex-col gap-1 items-start flex-1">
            <div className="text-grey-text-colour-for-brand text-sm font-medium">
              {invoice.clientName}
            </div>

            <div className="text-sparko-dark-grey text-xs">
              {invoice.amount}, Due: {invoice.dueDate}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge
              className={`inline-flex items-center justify-center gap-[7.5px] px-[15px] py-[9px] rounded-3xl ${invoice.statusColor} border-0 cursor-pointer`}
              onClick={invoice.hasDropdown ? handleStatusUpdate : undefined}
            >
              <div className="text-xs font-medium text-center whitespace-nowrap">
                {invoice.statusLabel}
              </div>
              {invoice.hasDropdown && (
                <img
                  className="w-[15px] h-[20px] mt-1"
                  alt="Dropdown"
                  src={dropDownIcon}
                />
              )}
            </Badge>

            {invoice.hasIcon && (
              <img
                className="w-6 h-6"
                alt="Action icon"
                src={bellIcon}
              />
            )}

            {invoice.hasEditIcon && (
              <img
                className="w-5 h-5"
                alt="Edit icon"
                src={editIcon}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};