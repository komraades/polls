const SetQuestion = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`question is: ${question}?`);
    setQuestion("");
  };

  const input =
    "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md";
  return (
    <>
      <h1 className="font-bold text-2xl pb-2 text-slate-500">
        Pages
      </h1>
      <form className="flex space-x-5 flex-wrap" onSubmit={handleSubmit}>
        <input
          value={question}
          className="border-2 px-3 py-2 border-blue-200 rounded-lg"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="bg-blue-500 py-2 px-3 cursor-pointer text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-blue-600 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-75"
          disabled={question.length === 0}
        >
          <MdAddchart />
        </button>
      </form>
    </>
  );
};

export default SetQuestion;
