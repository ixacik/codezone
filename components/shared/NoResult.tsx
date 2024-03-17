import Image from "next/image";
import AskQuestionButton from "./AskQuestionButton";

type Props = {
  title: string;
  description: string;
  buttonTitle: string;
  buttonHref: string;
};

const NoResult = ({ title, description, buttonTitle, buttonHref }: Props) => {
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
      <h3 className="h3-bold text-dark100_light900 mt-12">{title}</h3>
      <p className="text-dark500_light700 mb-10 mt-6 max-w-[450px] text-center">
        {description}
      </p>
      <AskQuestionButton title={buttonTitle} href={buttonHref} />
    </div>
  );
};
export default NoResult;
