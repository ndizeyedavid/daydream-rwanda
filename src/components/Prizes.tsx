import { Trophy } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Prizes() {
    return (
        <section id="prizes" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Epic Rewards</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        $1,000 in prizes plus exclusive opportunities from Hack Club
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card variant="neon" className="text-center p-8">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-black" />
                            </div>
                            <CardTitle className="text-2xl">1st Place</CardTitle>
                            <CardDescription className="text-lg">
                                will be announced
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="neon" className="text-center p-8">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-black" />
                            </div>
                            <CardTitle className="text-2xl">2nd Place</CardTitle>
                            <CardDescription className="text-lg">
                                will be announced
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="neon" className="text-center p-8">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-black" />
                            </div>
                            <CardTitle className="text-2xl">3rd Place</CardTitle>
                            <CardDescription className="text-lg">
                                will be announced
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-muted-foreground mb-6">
                        Plus special category awards for Innovation, Design, and Social
                        Impact!
                    </p>
                    <Badge className="bg-neon-purple/20 hover:bg-neon-purple/20 cursor-default text-neon-purple border-neon-purple/30 px-6 py-2">
                        All participants get exclusive Hack Club merchandise!
                    </Badge>
                </div>
            </div>
        </section>
    );
}
