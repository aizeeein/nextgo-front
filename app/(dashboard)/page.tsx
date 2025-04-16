import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, Zap } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-xs font-medium">
              <Zap className="w-3 h-3 mr-1 text-purple-400" />
              <span>Launching our new template builder</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Create stunning landing pages{" "}
              <span className="hero-text-gradient">in minutes</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Build and launch your perfect landing page without any coding
              skills. Drag, drop, customize, and publish with your own custom
              domain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="w-full sm:w-auto px-6 py-6">
                  Start building free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-6"
                >
                  See how it works
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">1,200+</span>{" "}
                creators have launched with PageCraft
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 bg-white rounded-xl border shadow-xl overflow-hidden">
              <div className="bg-secondary p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="w-full bg-background rounded-md text-xs py-1 px-3 text-center">
                  mylandingpage.pagecrafter.app
                </div>
              </div>

              <div className="relative aspect-[16/9] bg-gray-100 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full p-4 flex justify-between">
                  <div className="text-sm font-medium">Page Editor</div>
                  <Button size="sm" variant="secondary" className="text-xs">
                    <Globe className="mr-1 h-3 w-3" /> Publish
                  </Button>
                </div>

                <div className="absolute left-0 h-full w-16 bg-white/80 border-r flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm bg-gray-400"></div>
                  </div>
                  <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                </div>

                <div className="h-[80%] w-[80%] border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-400">Drag components here</p>
                </div>

                <div className="absolute right-0 h-full w-16 bg-white/80 border-l"></div>
              </div>
            </div>

            <div className="absolute -z-10 animate-float delay-300 top-1/4 -right-8 bg-white p-3 rounded-lg border shadow-lg">
              <Layers className="h-5 w-5 text-purple-400" />
            </div>

            <div className="absolute -z-10 animate-float delay-150 bottom-1/4 -left-8 bg-white p-3 rounded-lg border shadow-lg">
              <Globe className="h-5 w-5 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
