import MatchList from "../components/MatchList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">TeamUp Hub - AI Matchmaking</h1>
      <MatchList userId={1} skills={["Python", "Machine Learning"]} />
    </div>
  );
}
