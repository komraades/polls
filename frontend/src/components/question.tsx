
const QuestionContainer: React.FC = () => {
  return (
    <div className="max-w-[75vw] px-8 py-8 rounded-sm bg-slate-200 text-slate-800">
      <h1 className="font-bold text-2xl">
        Who comes first the egg or the chiken{" "}
      </h1>
      <h3 className="text-md pt-1">Egg or Chicken</h3>
    </div>
  );
};

const AnswerContainer = () => {
  return (
    <div className="font-bold text-3xl grid grid-cols-2 gap-10 place-content-evenly w-[50vw] h-[30vw] ">
      <button className="bg-red-500 py-5 px-5 cursor-pointer text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-600 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-75">
        No
      </button>
      <button className="bg-green-500 py-5 px-5 cursor-pointer text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-green-600 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-75">
        Yes
      </button>
    </div>
  );
};

const Question = () => {
  return <>
    <QuestionContainer/>
    <AnswerContainer/>
  </>
}
export default Question
