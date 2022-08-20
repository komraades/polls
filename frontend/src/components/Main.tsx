import React from "react";
import Question from "./question";

const Main: React.FC = () => {
  return (
    <main className="h-screen relative flex items-center justify-center flex-col pt-3">
      <Question />
    </main>
  );
};


export default Main;
