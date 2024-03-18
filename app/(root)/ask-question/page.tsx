import QuestionForm from "@/components/shared/Forms/QuestionForm";

export default function AskQuestion() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
}
