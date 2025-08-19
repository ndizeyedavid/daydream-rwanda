import { Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export default function Team() {
    return (
        <section id="team" className="py-20 px-6 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Meet the Team</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        The amazing teenagers organizing Daydream Rwanda
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            name: "Muganwa Rogers",
                            role: "Manager",
                            color: "neon-purple",
                            image: "/team/rogers.png",
                        },
                        {
                            name: "Mugisha Valentin",
                            role: "Manager",
                            color: "neon-purple",
                            image: "/team/valentin.jpg",
                        },
                        {
                            name: "Ndizeye David",
                            role: "Member",
                            color: "hack-red",
                            image: "/team/david.png",
                        },
                        {
                            name: "Max Boss",
                            role: "Member",
                            color: "neon-pink",
                            image: "/team/max.jpg",
                        },
                    ].map((member, index) => (
                        <Card
                            key={index}
                            variant="gaming"
                            className="text-center p-6 group hover:scale-105 transition-transform duration-300"
                        >
                            <div
                                className={`w-24 h-24 bg-${member.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${member.color}/30 transition-colors`}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="size-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-muted-foreground mb-4">{member.role}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Special Thanks</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card variant="gaming" className="p-6">
                            <h4 className="text-lg font-bold mb-2 text-neon-cyan">
                                Mentors & Judges
                            </h4>
                            <p className="text-muted-foreground">
                                Industry professionals from local tech companies and
                                international organizations volunteering their time.
                            </p>
                        </Card>
                        <Card variant="gaming" className="p-6">
                            <h4 className="text-lg font-bold mb-2 text-neon-purple">
                                Venue Partners
                            </h4>
                            <p className="text-muted-foreground">
                                FabLab for providing the perfect space for our hackathon
                                adventure.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
