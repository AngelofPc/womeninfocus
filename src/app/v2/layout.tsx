import { V2Nav } from "@/components/V2Nav";
import { V2Footer } from "@/components/V2Footer";
import "./v2.css";
import "./v2-interiors.css";

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="v2-page"><V2Nav />{children}<V2Footer /></div>;
}
