import dynamic from "next/dynamic";

const EmailList = dynamic(
  () => import("./email-list").then((mod) => mod.default),
  { ssr: false }
);
export default async function EmailsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Emails</h1>
      </div>
      <EmailList />
    </div>
  );
}
