import { PageIntro } from "@/components/Ui";
import { ForumBoard } from "@/components/ForumBoard";

export const metadata = { title: "Community discussion" };

export default function Forum() {
  return <main id="main-content" className="interior-main"><PageIntro eyebrow="Community / Shared experience" title={<>A space to speak.<br /><em>A place to listen.</em></>} intro="Share negotiation experiences, exchange strategies, and lift each other up. Stories can be shared anonymously or with a display name." /><ForumBoard /></main>;
}
