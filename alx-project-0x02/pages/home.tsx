import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import {Post} from '@/interfaces';
import { v4 as uuidv4 } from "uuid";

const Home =()=>{
      const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: uuidv4(),
      title: "First Card",
      content:
        "This is the content for the first card. It contains some interesting information.",
    },
    {
      id: uuidv4(),
      title: "Second Card: Important Notice",
      content:
        "Here's some crucial content for the second card. Pay close attention to this!",
    },
    {
      id: uuidv4(),
      title: "Third Card: Fun Facts",
      content:
        "Did you know that the average person walks the equivalent of three times around the world in a lifetime?",
    },
    {
      id: uuidv4(),
      title: "Fourth Card: Project Update",
      content:
        "The project is progressing well and is on track for its scheduled release.",
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (newPostData: Omit<Post, "id">) => {
    const newPost: Post = {
      ...newPostData,
      id: uuidv4(), // Generate a unique ID for the new post
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
return(
    <>
    <Header/>
   <main className="mx-auto mt-4 p-4 container">
        <h1 className="mb-4 font-bold text-3xl">Welcome to the Home Page!</h1>

        <button
          onClick={handleOpenModal}
          className="bg-green-500 hover:bg-green-600 mb-6 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white"
        >
          Add New Post
        </button>

        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddPost}
        />
      </main>
    </>
)
}

export default Home;