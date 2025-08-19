import { Button } from "./ui/button";

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-20 px-6 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Our Sponsors</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Amazing companies making Daydream Rwanda possible
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-neon-purple mb-8">
                            Title Sponsor
                        </h3>
                        <div className="bg-card border border-neon-purple/30 rounded-lg p-8 max-w-md mx-auto">
                            <div className="w-32 h-32 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center mx-auto mb-4 overflow-hidden">
                                <img
                                    src="/sponsors/hackclub.png"
                                    width={200}
                                    height={200}
                                    alt="Hackclub logo"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white">
                                Hack Club
                            </span>
                            <p className="text-muted-foreground">
                                Empowering teenagers worldwide to code and create
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-hack-red mb-8">
                            Gold Sponsors
                        </h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="bg-card border border-hack-red/30 rounded-lg p-4"
                                >
                                    <div className="w-16 h-16 bg-hack-red/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <span className="text-hack-red text-sm font-bold">
                                            LOGO
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Partner {i}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <Button variant="neon" size="lg">
                            Become a Sponsor
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
