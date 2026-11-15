import { Card } from "pixel-retroui";

interface BlogCardProps {
  content: string;
}

function BlogCard({ content }: BlogCardProps) {
  return (
    <div className="w-4/5 my-8">
      <Card>
        <div className="p-8 text-center">
          <div className="mb-8 text-2xl">Title</div>
          <div className="text-left">{content}</div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
