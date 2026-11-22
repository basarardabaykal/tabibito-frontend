import { Card } from "pixel-retroui";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
}

function BlogCard({ id, title, content }: BlogCardProps) {
  return (
    <div className="w-4/5 my-8">
      <a href={`/${id}`}>
        <Card>
          <div className="p-8 text-center">
            <div className="mb-8 text-2xl">{title}</div>
            <div className="text-left">{content}</div>
          </div>
        </Card>
      </a>
    </div>
  );
}

export default BlogCard;
