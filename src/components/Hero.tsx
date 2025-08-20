import heroImage from "@/assets/hero-image.jpg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, Gamepad2 } from "lucide-react";
import { Highlighter } from "./ui/highliter";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background/80 to-neon-cyan/20" />

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <Badge className="mb-6 bg-hack-red/20 text-hack-red border-hack-red/30 px-6 py-2 text-sm font-medium cursor-default">
                    🎮 Game Jam • High Schoolers • Rwanda
                </Badge>

                <h1 className="text-6xl md:text-8xl font-bold mb-8">
                    <span className="gradient-text">Daydream</span>
                    <br />
                    <span className="text-hack-red">Rwanda</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join the most epic{" "}
                    <Highlighter action="box" color="#FF9800">
                        game jam
                    </Highlighter>{" "}
                    for high schoolers in Rwanda. Build games, make friends, and turn your
                    wildest ideas into reality . All night. All code. All magic.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a href="http://daydream.hackclub.com/" target="_blank">
                        <Button variant="hero" size="xl">
                            <Gamepad2 className="mr-2" />
                            Register Now
                        </Button>
                    </a>
                    <a
                        href="https://hcb.hackclub.com/donations/start/daydream-matimba"
                        target="_blank"
                    >
                        <Button variant="neon" size="xl">
                            Donate
                        </Button>
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-neon-cyan">48</div>
                        <div className="text-sm text-muted-foreground">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-neon-purple">70+</div>
                        <div className="text-sm text-muted-foreground">Hackers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-hack-red">$1K</div>
                        <div className="text-sm text-muted-foreground">Prizes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-neon-pink">∞</div>
                        <div className="text-sm text-muted-foreground">Possibilities</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
