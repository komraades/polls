import React from "react";
import {Outlet} from "react-router-dom";


const Main: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-clip relative flex items-center justify-center flex-col pt-3">
      {/* <VotePage /> */}
      <Outlet />
    </main>
  );
};


export default Main;
