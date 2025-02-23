import Footer from "./Footer";
import NewsHeader from "./NewsHeader";
import RecentNews from "./RecentNews";
import TrendingNews from "./TrendingNews";

const NewsHome = () => {
  return (
    <div className="px-6 md:px-16 bg-[#121212] text-white ">
      <NewsHeader />
      <TrendingNews />
      <RecentNews />
      <Footer />
    </div>
  );
};

export default NewsHome;
