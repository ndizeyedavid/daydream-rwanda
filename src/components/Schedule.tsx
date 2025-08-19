import { Clock, Trophy } from "lucide-react";

export default function Schedule() {
    return (
        <section id="schedule" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Detailed Schedule</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Every moment planned for maximum creativity and fun
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                            Saturday - Build Day
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        6:00 PM - Registration & Check-in
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Welcome snacks and swag pickup
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        7:00 PM - Opening Ceremony
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Theme reveal & team formation
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        8:00 PM - Hacking Begins!
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Brainstorming & preparation
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        9:00 AM - Breakfast & Workshops
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Game design & coding tutorials
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        12:00 PM - Lunch & Mentorship
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        1-on-1 sessions with game pros
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        6:00 PM - Evening hacking
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Game testing & networking
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-hack-red mb-4">
                            Sunday - Demo Day
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-hack-red/20">
                                <Clock className="w-5 h-5 text-hack-red mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        7:30 AM - Final Sprint
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Last chance to polish your game
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-hack-red/20">
                                <Clock className="w-5 h-5 text-hack-red mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        8:00 AM - Submissions Due
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Upload your games & prep demos
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-hack-red/20">
                                <Clock className="w-5 h-5 text-hack-red mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        8:30 AM - Demo Presentations
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Show off your creations!
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-hack-red/20">
                                <Clock className="w-5 h-5 text-hack-red mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        11:00 AM - Awards Ceremony
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Winners announced & prizes awarded
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-card border border-hack-red/20">
                                <Clock className="w-5 h-5 text-hack-red mt-1" />
                                <div>
                                    <div className="font-semibold">
                                        12:30 PM - Closing Celebration
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Group photos & final goodbyes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
