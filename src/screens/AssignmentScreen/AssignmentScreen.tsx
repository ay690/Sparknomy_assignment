import React from "react";
import { Provider } from 'react-redux';
import { store } from '../../store';
import type { JSX } from "react/jsx-dev-runtime";

const DashboardContent: React.FC = () => {
  return (
    <h1 className="text-xl">hey there</h1>
    // Header 
    // Content section
    //    -create invoice Card
    //    -Time period selector 
    //    - earning section 
    //    - income section
    //Footer
  );
};

export const AssignmentScreen = (): JSX.Element => {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  );
};