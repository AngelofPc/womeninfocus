import { PageIntro } from "@/components/Ui";
import { ForumBoard } from "@/components/ForumBoard";

export const metadata = { title: "Community discussion", description: "Share experiences of work, learning, technology and advocating for yourself.", openGraph: { title: "Community | Women in Focus", description: "Learning from women’s shared experiences." } };

export default function Forum() {
  return <main id="main-content" className="interior-main"><PageIntro eyebrow="Community / Shared experience" title={<>A space to speak.<br /><em>A place to listen.</em></>} intro="Share what you have learned about work, technology, negotiation and advocating for yourself. Stories can be shared anonymously or with a display name." /><ForumBoard /></main>;
}
