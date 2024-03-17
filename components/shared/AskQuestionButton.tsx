import Link from "next/link";
import { Button } from "../ui/button";

const AskQuestionButton = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="primary-gradient rounded-lg px-4 py-2 text-light-900 shadow-light-300 dark:shadow-none"
    >
      <Button>{title}</Button>
    </Link>
  );
};
export default AskQuestionButton;
