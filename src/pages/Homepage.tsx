import BlogCard from "../components/BlogCard";

function Homepage() {
  return (
    <div className="p-12 flex flex-col items-center">
      {<BlogCard></BlogCard>}
      {<BlogCard></BlogCard>}
    </div>
  );
}

export default Homepage;
