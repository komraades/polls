import { useNavigate } from 'react-router-dom';
import { MdHowToVote, MdOutlinePageview } from 'react-icons/md';

const MainPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1 className='w-fill font-bold text-2xl text-center text-slate-500 pb-6'>Home Page</h1>

            <button onClick={() => navigate('/vote')} className="bg-blue-500 py-5 px-5 cursor-pointer text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-600 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-75 pr-4 mr-4">
                <MdHowToVote /> {' '} Vote
            </button>

            <button onClick={() => navigate('/set-question')} className="bg-blue-500 py-5 px-5 cursor-pointer text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-600 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-75 pl-4 ml-4">
                <MdOutlinePageview /> {' '} Set Query
            </button>
        </div>
    )
}

export default MainPage