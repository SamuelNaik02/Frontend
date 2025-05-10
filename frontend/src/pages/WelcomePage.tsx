import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Users, Newspaper, MessageSquare } from 'lucide-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Card = ({ title, icon, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
  >
    <div className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
  </div>
);

const WelcomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (category: string) => {
    console.log(`Selected category: ${category}`);
    // Navigate to respective routes when implemented
    // navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get roadmaps on these domains or roles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get news updates discussion forums
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search domains, roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            title="Domain"
            icon={<BookOpen className="w-full h-full" />}
            onClick={() => handleCardClick('domain')}
          />
          <Card
            title="Roles"
            icon={<Users className="w-full h-full" />}
            onClick={() => handleCardClick('roles')}
          />
          <Card
            title="Blogs"
            icon={<Newspaper className="w-full h-full" />}
            onClick={() => handleCardClick('blogs')}
          />
          <Card
            title="Discussion Forum"
            icon={<MessageSquare className="w-full h-full" />}
            onClick={() => handleCardClick('forum')}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage; 