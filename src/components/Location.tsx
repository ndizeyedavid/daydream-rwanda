import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function Location() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    <span className="gradient-text">Ready to Build?</span>
                </h2>

                <div className="bg-card border border-neon-cyan/30 rounded-lg p-8 mb-8 glass-effect">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <MapPin className="w-6 h-6 text-neon-cyan" />
                        <h3 className="text-xl font-bold">FabLab Kacyiru</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        August 26-27, 2025 • Kigali, Rwanda
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Free food, drinks, swag, and mentorship included!
                    </p>
                </div>

                <div className="space-y-4">
                    <Button variant="hero" size="xl" className="w-full sm:w-auto">
                        Register for Daydream Rwanda
                    </Button>
                    <p className="text-sm text-muted-foreground">
                        Open to all high schoolers in Rwanda • No experience required •
                        Just bring your passion!
                    </p>
                </div>
            </div>
        </section>
    );
}
