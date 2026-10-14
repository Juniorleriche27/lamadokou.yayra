import { Meta } from "@once-ui-system/core";
import { baseURL, home } from "@/resources";
import HomeExperience from "./HomeExperience";
export async function generateMetadata() { return Meta.generate({ title: "Yayra Junior Lamadokou — Ingénieur IA", description: "Ingénierie IA, produits SaaS, FastAPI, Next.js et RAG.", baseURL, path: home.path, image: home.image }); }
export default function Home() { return <HomeExperience />; }
