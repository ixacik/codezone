import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center h-screen w-full">
      <SignUp />
    </div>
  );
}
