import { Card } from "./ui/card";

export default function Faqs() {
    return (
        <section id="faq" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">FAQ</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about Daydream Rwanda
                    </p>
                </div>

                <div className="space-y-6">
                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-neon-purple">
                            Who can participate?
                        </h3>
                        <p className="text-muted-foreground">
                            Any high school student (ages 13-18) in Rwanda can
                            participate! No previous coding or game development experience
                            is required.
                        </p>
                    </Card>

                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-neon-cyan">
                            Do I need a team?
                        </h3>
                        <p className="text-muted-foreground">
                            Teams can have 1-4 members. Don't have a team? No problem!
                            We'll help you find teammates during the opening ceremony.
                        </p>
                    </Card>

                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-hack-red">
                            What should I bring?
                        </h3>
                        <p className="text-muted-foreground">
                            Bring your laptop, charger, and enthusiasm! We'll provide
                            food, drinks, swag, wifi, and everything else you need.
                        </p>
                    </Card>

                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-neon-pink">
                            What kind of games can we build?
                        </h3>
                        <p className="text-muted-foreground">
                            Any type! Mobile games, web games, desktop games, VR
                            experiences - as long as it's playable and follows the theme.
                        </p>
                    </Card>

                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-neon-purple">
                            Is food provided?
                        </h3>
                        <p className="text-muted-foreground">
                            Yes! All meals, snacks, and drinks are completely free. We'll
                            have options for different dietary requirements too.
                        </p>
                    </Card>

                    <Card variant="gaming" className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-neon-cyan">
                            How are projects judged?
                        </h3>
                        <p className="text-muted-foreground">
                            Projects are judged on creativity, technical implementation,
                            design, and how well they fit the theme. Our panel includes
                            industry professionals and educators.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
