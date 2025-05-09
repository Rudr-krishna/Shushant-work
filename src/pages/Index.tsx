
import { writer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col justify-center items-center py-20 px-4 md:px-6 container">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            {writer.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
            {writer.tagline}
          </p>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {writer.shortBio}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg">
              <Link to="/portfolio" className="gap-2">
                View Portfolio
                <ArrowRight size={16} />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
