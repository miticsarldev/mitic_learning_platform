import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to MITICEduPlatform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Découvrez un monde de connaissances avec nos cours dirigés par des
              experts. Démarrer votre parcours d&apos;apprentissage
              aujourd&apos;hui.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/courses">Parcourir nos Cours</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">En Savoir Plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
