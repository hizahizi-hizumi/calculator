import { Calculator } from "@/components/Calculator/Calculator";
import { Hoge } from "@/components/Hoge/Hoge";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Calculator />
      </div>
    </>
  );
}
