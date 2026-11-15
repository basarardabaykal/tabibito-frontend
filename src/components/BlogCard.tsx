import { Card } from "pixel-retroui";

function BlogCard() {
  return (
    <div className="w-4/5 my-8">
      <Card>
        <div className="p-8 text-center">
          <div className="mb-8 text-2xl">Title</div>
          <div className="text-left">
            Content Content ContentContent Content ContentContent Content
            Content (Add description to posts)
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
