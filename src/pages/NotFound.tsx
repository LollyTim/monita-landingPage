
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="text-center">
                <h1 className="text-[4rem] font-bold mb-4" style={{ color: '#CFEF0C' }}>404</h1>
                <p className="text-[1.5rem] mb-2" style={{ color: '#CFEF0C' }}>Page Not Found</p>

                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 text-sm font-medium bg-[#CFEF0C] text-black rounded-lg hover:bg-[#b8d70a] transition-colors"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;