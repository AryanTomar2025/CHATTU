import { getRandomEmoji } from "../../utils/emojis";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("conversations : ", conversations);
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading && conversations.length === 0 && (
        <span className="loading loading-spinner"></span>
      )}

      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {!loading && conversations.length === 0 && (
        <span>No conversations available</span>
      )}
    </div>
  );
};
export default Conversations;
