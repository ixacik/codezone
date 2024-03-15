import Image from "next/image";
import { Button } from "../ui/button";
import AskQuestionButton from "./AskQuestionButton";

const NoResult = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-12">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={300}
        height={300}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={300}
        height={300}
        className="hidden object-contain dark:block"
      />
      <h3 className="h3-bold text-dark100_light900 mt-12">
        There's no question to show
      </h3>
      <p className="mb-10 mt-6 max-w-[450px] text-center">
        Be the first to break the silence! Ask a question and kickstart the
        discussion, our query could be the next big thing other learn from. Get
        involved.
      </p>
      <AskQuestionButton />
    </div>
  );
};
export default NoResult;
