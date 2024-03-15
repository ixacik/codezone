import Link from "next/link";
import { Button } from "../ui/button";

const AskQuestionButton = () => {
  return (
    <Link
      href="/ask-question"
      className="primary-gradient rounded-lg px-4 py-2 text-light-900 shadow-light-300 dark:shadow-none"
    >
      <Button>Ask a Question</Button>
    </Link>
  );
};
export default AskQuestionButton;
