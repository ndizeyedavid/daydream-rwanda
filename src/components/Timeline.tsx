import { Code, Trophy } from "lucide-react";

export default function Timeline() {
    return (
        <section className="py-20 px-6 bg-card/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">48 Hours of Pure Creation</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From opening ceremony to final demos—here's your journey
                    </p>
                </div>

                <div className="space-y-8">
                    {/* <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-neon-purple/30">
                            <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-8 h-8 text-neon-purple" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    Friday 6:00 PM - Opening Ceremony
                                </h3>
                                <p className="text-muted-foreground">
                                    Team formation, theme reveal, and kickoff pizza party!
                                </p>
                            </div>
                        </div> */}

                    <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-neon-cyan/30">
                        <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Code className="w-8 h-8 text-neon-cyan" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Saturday - Build Day
                            </h3>
                            <p className="text-muted-foreground">
                                Team Formation, Creating, workshops, and snacks.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-hack-red/30">
                        <div className="w-16 h-16 bg-hack-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-8 h-8 text-hack-red" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Sunday 9:30 AM - Demo Day
                            </h3>
                            <p className="text-muted-foreground">
                                Present your creation, celebrate achievements, and claim
                                your prizes!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
