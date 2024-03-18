import AskQuestionButton from "@/components/shared/AskQuestionButton";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/QuestionCard";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";

const questions = [
  {
    _id: "1",
    title: "How to integrate TypeScript with Next.js?",
    tags: [
      { _id: "1", name: "TypeScript" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "1",
      profileSrc: "",
      name: "User One",
    },
    upvotes: 10,
    views: 22300,
    answers: [],
    createdAt: new Date("2023-03-15T14:25:00Z"),
  },
  {
    _id: "2",
    title: "What's the best practice for using Server Actions in Next.js 14?",
    tags: [
      { _id: "3", name: "Best Practices" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "2",
      profileSrc: "",
      name: "User Two",
    },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date("2023-03-16T10:30:00Z"),
  },
  {
    _id: "3",
    title: "How to handle state management in React?",
    tags: [
      { _id: "4", name: "React" },
      { _id: "5", name: "State Management" },
    ],
    author: {
      _id: "3",
      profileSrc: "",
      name: "User Three",
    },
    upvotes: 20,
    views: 250,
    answers: [],
    createdAt: new Date("2023-03-17T09:00:00Z"),
  },
  {
    _id: "4",
    title: "Tips for optimizing React performance?",
    tags: [
      { _id: "4", name: "React" },
      { _id: "6", name: "Performance" },
    ],
    author: {
      _id: "4",
      profileSrc: "",
      name: "User Four",
    },
    upvotes: 30,
    views: 300,
    answers: [],
    createdAt: new Date("2023-03-18T11:45:00Z"),
  },
  {
    _id: "5",
    title: "How to create a custom hook in React?",
    tags: [
      { _id: "4", name: "React" },
      { _id: "7", name: "Custom Hooks" },
    ],
    author: {
      _id: "5",
      profileSrc: "",
      name: "User Five",
    },
    upvotes: 25,
    views: 175,
    answers: [],
    createdAt: new Date("2023-03-19T13:20:00Z"),
  },
  {
    _id: "6",
    title: "What are the new features in TypeScript 4.5?",
    tags: [
      { _id: "1", name: "TypeScript" },
      { _id: "8", name: "New Features" },
    ],
    author: {
      _id: "6",
      profileSrc: "",
      name: "User Six",
    },
    upvotes: 40,
    views: 220,
    answers: [],
    createdAt: new Date("2023-03-20T16:15:00Z"),
  },
];

export default function Home() {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <h1 className="h1-bold text-dark200_light900">All Questions</h1>
        <AskQuestionButton title="Ask a Question" href="/ask-question" />
      </div>
      <div className="mt-11 flex w-full flex-col items-center justify-between gap-4">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc={"/assets/icons/search.svg"}
          placeholder="Search questions..."
        />
        <Filter filters={HomePageFilters} />
      </div>
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionCard
            key={question.title}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}
            _id={question._id}
          />
        ))
      ) : (
        <NoResult
          title="There's no questions to show"
          description="Be the first to break the silence 🚀! Ask a question and kickstart the discussion, your query could be the next big thing others learn from. Get involved ⭐."
          buttonTitle="Ask a Question"
          buttonHref="/ask-question"
        />
      )}
    </div>
  );
}
