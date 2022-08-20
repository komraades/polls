import React from "react";
import Vote from "./question";
import SetQuestion from "./setquestion";


const Main: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-clip relative flex items-center justify-center flex-col pt-3">
      {/* <VotePage /> */}
      <SetQuestion />
    </main>
  );
};


export default Main;
