import React from 'react';
import { Card, CardContent } from '../../common/Card/Card';
import plusIcon from "../../../assets/plus.svg"

export const CreateInvoiceCard: React.FC = () => {
  return (
    <Card className="w-full bg-gray-200 rounded-[32px] border-0">
      <CardContent className="flex gap-3.5 px-3 py-4 flex-col items-center">
        <img
          className="w-16 h-16"
          alt="Create invoice icon"
          src={plusIcon}
        />

        <div className="flex flex-col items-center gap-2 w-full">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent font-semibold text-2xl text-center">
            Create New Invoice
          </div>

          <div className="text-sparko-dark-grey text-xs text-center max-w-72">
            Start by creating and sending new invoice
          </div>
        </div>
      </CardContent>
    </Card>
  );
};