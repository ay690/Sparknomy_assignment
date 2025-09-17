import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Invoice {
  id: string;
  clientName: string;
  amount: string;
  dueDate: string;
  status: 'paid' | 'unpaid' | 'disputed' | 'partially-paid' | 'overdue' | 'awaited' | 'draft' | 'update';
  statusLabel: string;
  statusColor: string;
  hasDropdown?: boolean;
  hasIcon?: boolean;
  hasEditIcon?: boolean;
}

export interface TimePeriod {
  value: string;
  label: string;
}

export interface DashboardState {
  totalEarnings: number;
  paymentAwaited: number;
  paymentOverdue: number;
  selectedTimePeriod: string;
  invoices: Invoice[];
  timePeriodOptions: TimePeriod[];
  incomeData: Array<{ month: string; income: number; }>;
}

const initialState: DashboardState = {
  totalEarnings: 125000,
  paymentAwaited: 25000,
  paymentOverdue: 25000,
  selectedTimePeriod: '3months',
  timePeriodOptions: [
    { value: "1month", label: "1Month" },
    { value: "3months", label: "3Months" },
    { value: "1year", label: "1Year" },
    { value: "custom", label: "Custom" },
  ],
  invoices: [
    {
      id: '1',
      clientName: "Client Name",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "update",
      statusLabel: "Update Status",
      statusColor: "bg-[#8134AF] text-white",
      hasDropdown: true,
    },
    {
      id: '2',
      clientName: "Client Name",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "unpaid",
      statusLabel: "Unpaid",
      statusColor: "bg-gray-300/30 text-sparko-dark-grey",
    },
    {
      id: '3',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "disputed",
      statusLabel: "Disputed",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      id: '4',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: '5',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: '6',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "partially-paid",
      statusLabel: "Partially Paid",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: '7',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: '8',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "overdue",
      statusLabel: "Overdue",
      statusColor: "bg-red-100 text-red-600",
      hasIcon: true,
    },
    {
      id: '9',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "awaited",
      statusLabel: "Awaited",
      statusColor: "bg-yellow-100 text-yellow-600",
      hasIcon: true,
    },
    {
      id: '10',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "draft",
      statusLabel: "Draft",
      statusColor: "bg-light-grey text-sparko-dark-grey",
      hasEditIcon: true,
    },
    {
      id: '11',
      clientName: "Income Trend",
      amount: "₹1,25,000",
      dueDate: "2024-06-15",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
  ],
  incomeData: [
    { month: 'Jan', income: 85000 },
    { month: 'Feb', income: 92000 },
    { month: 'Mar', income: 78000 },
    { month: 'Apr', income: 105000 },
    { month: 'May', income: 125000 },
    { month: 'Jun', income: 110000 },
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setTimePeriod: (state, action: PayloadAction<string>) => {
      state.selectedTimePeriod = action.payload;
    },
    updateInvoiceStatus: (state, action: PayloadAction<{ id: string; status: Invoice['status'] }>) => {
      const invoice = state.invoices.find(inv => inv.id === action.payload.id);
      if (invoice) {
        invoice.status = action.payload.status;
        switch (action.payload.status) {
          case 'paid':
            invoice.statusLabel = 'Paid';
            invoice.statusColor = 'bg-green-100 text-green-600';
            break;
          case 'unpaid':
            invoice.statusLabel = 'Unpaid';
            invoice.statusColor = 'bg-light-grey text-sparko-dark-grey';
            break;
          case 'overdue':
            invoice.statusLabel = 'Overdue';
            invoice.statusColor = 'bg-red-100 text-red-600';
            break;
        }
      }
    },
  },
});

export const { setTimePeriod, updateInvoiceStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;