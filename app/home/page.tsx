"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components with no SSR
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Suspense fallback={<div>Loading navigation...</div>}>
          <FloatingNav navItems={navItems} />
        </Suspense>
        <Suspense fallback={<div>Loading hero section...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading grid section...</div>}>
          <Grid />
        </Suspense>
        <Suspense fallback={<div>Loading projects section...</div>}>
          <RecentProjects />
        </Suspense>
        <Suspense fallback={<div>Loading clients section...</div>}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div>Loading experience section...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading approach section...</div>}>
          <Approach />
        </Suspense>
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}