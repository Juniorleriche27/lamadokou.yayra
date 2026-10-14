import { Meta } from "@once-ui-system/core";
import { baseURL, work } from "@/resources";
import WorkExperience from "./WorkExperience";
import { Projects } from "@/components/work/Projects";
export async function generateMetadata() { return Meta.generate({ title: "Écosystème de projets — Yayra Junior Lamadokou", description: "Applications IA, SaaS, plateformes et APIs de l’écosystème KORYXA.", baseURL, path: work.path, image: `/api/og/generate?title=${encodeURIComponent(work.title)}` }); }
export default function Work() { return <WorkExperience><Projects /></WorkExperience>; }
