import { useRecoilState } from "recoil";
import { recoilIndexState, Stage } from "./states/recoilIndexState";
import App from "./App";
import Layout from "./pages/Layout";

export default function Page() {
  const [stage, setStage] = useRecoilState(recoilIndexState);
  return <>{stage === Stage.Index ? <App /> : <Layout />}</>;
}
