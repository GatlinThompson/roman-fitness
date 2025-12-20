import Main from "@/components/layout/Main";
import WebSocketPage from "@/components/workout/WebSocket";
import Workout from "@/components/workout/Workout";

export default function Home() {
  return (
    <Main>
      <Workout />
      <WebSocketPage />
    </Main>
  );
}
