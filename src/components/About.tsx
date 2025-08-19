import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Users, Gamepad2, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">What is Daydream?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Daydream is more than a hackathon—it's where high schoolers in
                        Rwanda come together to build games that matter, learn from each
                        other, and experience the magic of creation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card
                        variant="gaming"
                        className="group hover:scale-105 transition-transform duration-300"
                    >
                        <CardHeader>
                            <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-purple/30 transition-colors">
                                <Gamepad2 className="w-6 h-6 text-neon-purple" />
                            </div>
                            <CardTitle className="text-xl">Build Games</CardTitle>
                            <CardDescription>
                                From concept to playable game in 48 hours. Mobile, web,
                                desktop—any platform, any engine.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card
                        variant="gaming"
                        className="group hover:scale-105 transition-transform duration-300"
                    >
                        <CardHeader>
                            <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-cyan/30 transition-colors">
                                <Users className="w-6 h-6 text-neon-cyan" />
                            </div>
                            <CardTitle className="text-xl">Make Friends</CardTitle>
                            <CardDescription>
                                Team up with fellow creators, mentors, and industry
                                professionals. Network that lasts.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card
                        variant="gaming"
                        className="group hover:scale-105 transition-transform duration-300"
                    >
                        <CardHeader>
                            <div className="w-12 h-12 bg-hack-red/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-hack-red/30 transition-colors">
                                <Zap className="w-6 h-6 text-hack-red" />
                            </div>
                            <CardTitle className="text-xl">Feel the Magic</CardTitle>
                            <CardDescription>
                                That 3am moment when your code finally works and your idea
                                becomes reality.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
