import MessageContainer from "../../components/messages/MessagesContainer";

import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <Sidebar />
                <MessageContainer/>
               
            </div>
        </div>
    );
};
export default Home;
