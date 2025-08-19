import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Clock,
    Trophy,
    Users,
    Gamepad2,
    Code,
    Zap,
    MapPin,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Gamepad2 className="w-8 h-8 text-hack-red" />
                            <span className="text-xl font-bold gradient-text">
                                Daydream Rwanda
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-muted-foreground hover:text-neon-cyan transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("schedule")}
                                className="text-muted-foreground hover:text-neon-purple transition-colors"
                            >
                                Schedule
                            </button>
                            <button
                                onClick={() => scrollToSection("prizes")}
                                className="text-muted-foreground hover:text-hack-red transition-colors"
                            >
                                Prizes
                            </button>
                            <button
                                onClick={() => scrollToSection("sponsors")}
                                className="text-muted-foreground hover:text-neon-pink transition-colors"
                            >
                                Sponsors
                            </button>
                            <button
                                onClick={() => scrollToSection("faq")}
                                className="text-muted-foreground hover:text-neon-cyan transition-colors"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection("team")}
                                className="text-muted-foreground hover:text-neon-purple transition-colors"
                            >
                                Team
                            </button>
                            <Button variant="hero" size="sm">
                                <Gamepad2 className="mr-2 w-4 h-4" />
                                Register
                            </Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="text-left text-muted-foreground hover:text-neon-cyan transition-colors"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection("schedule")}
                                    className="text-left text-muted-foreground hover:text-neon-purple transition-colors"
                                >
                                    Schedule
                                </button>
                                <button
                                    onClick={() => scrollToSection("prizes")}
                                    className="text-left text-muted-foreground hover:text-hack-red transition-colors"
                                >
                                    Prizes
                                </button>
                                <button
                                    onClick={() => scrollToSection("sponsors")}
                                    className="text-left text-muted-foreground hover:text-neon-pink transition-colors"
                                >
                                    Sponsors
                                </button>
                                <button
                                    onClick={() => scrollToSection("faq")}
                                    className="text-left text-muted-foreground hover:text-neon-cyan transition-colors"
                                >
                                    FAQ
                                </button>
                                <button
                                    onClick={() => scrollToSection("team")}
                                    className="text-left text-muted-foreground hover:text-neon-purple transition-colors"
                                >
                                    Team
                                </button>
                                <Button variant="hero" size="sm" className="w-fit">
                                    <Gamepad2 className="mr-2 w-4 h-4" />
                                    Register
                                </Button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background/80 to-neon-cyan/20" />

                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <Badge className="mb-6 bg-hack-red/20 text-hack-red border-hack-red/30 px-6 py-2 text-sm font-medium animate-pulse-slow">
                        🎮 Game Jam • High Schoolers • Rwanda
                    </Badge>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-float">
                        <span className="gradient-text">Daydream</span>
                        <br />
                        <span className="text-hack-red">Rwanda</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join the most epic game jam for high schoolers in Rwanda. Build
                        games, make friends, and turn your wildest ideas into reality. All
                        night. All code. All magic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button variant="hero" size="xl" className="animate-glow">
                            <Gamepad2 className="mr-2" />
                            Register Now
                        </Button>
                        <Button variant="neon" size="xl">
                            <Code className="mr-2" />
                            Learn More
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-neon-cyan">48</div>
                            <div className="text-sm text-muted-foreground">Hours</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-neon-purple">
                                100+
                            </div>
                            <div className="text-sm text-muted-foreground">Hackers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-hack-red">$5K</div>
                            <div className="text-sm text-muted-foreground">Prizes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-neon-pink">∞</div>
                            <div className="text-sm text-muted-foreground">
                                Possibilities
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">What is Daydream?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Daydream is more than a hackathon—it's where high schoolers in
                            Rwanda come together to build games that matter, learn from
                            each other, and experience the magic of creation.
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
                                    From concept to playable game in 48 hours. Mobile,
                                    web, desktop—any platform, any engine.
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
                                    That 3am moment when your code finally works and your
                                    idea becomes reality.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-6 bg-card/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">
                                48 Hours of Pure Creation
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            From opening ceremony to final demos—here's your journey
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-neon-purple/30">
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
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-neon-cyan/30">
                            <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Code className="w-8 h-8 text-neon-cyan" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    Saturday - Build Day
                                </h3>
                                <p className="text-muted-foreground">
                                    24 hours of non-stop creating, workshops, and midnight
                                    snacks.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-hack-red/30">
                            <div className="w-16 h-16 bg-hack-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Trophy className="w-8 h-8 text-hack-red" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    Sunday 6:00 PM - Demo Day
                                </h3>
                                <p className="text-muted-foreground">
                                    Present your creation, celebrate achievements, and
                                    claim your prizes!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prizes Section */}
            <section id="prizes" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Epic Rewards</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            $5,000 in prizes plus exclusive opportunities from Hack Club
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
                                    $2,000 + Hack Club Swag
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
                                    $1,500 + Hack Club Swag
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
                                    $1,000 + Hack Club Swag
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-muted-foreground mb-6">
                            Plus special category awards for Innovation, Design, and
                            Social Impact!
                        </p>
                        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 px-6 py-2">
                            All participants get exclusive Hack Club merchandise!
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
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
                            <h3 className="text-2xl font-bold text-neon-purple mb-4">
                                Friday - Kickoff
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-purple/20">
                                    <Clock className="w-5 h-5 text-neon-purple mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            6:00 PM - Registration & Check-in
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Welcome snacks and swag pickup
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-purple/20">
                                    <Clock className="w-5 h-5 text-neon-purple mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            7:00 PM - Opening Ceremony
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Theme reveal & team formation
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-purple/20">
                                    <Clock className="w-5 h-5 text-neon-purple mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            8:00 PM - Hacking Begins!
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Pizza party & brainstorming
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                                Saturday - Build Day
                            </h3>
                            <div className="space-y-4">
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
                                            1-on-1 sessions with industry pros
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-cyan/20">
                                    <Clock className="w-5 h-5 text-neon-cyan mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            6:00 PM - Dinner & Activities
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Game tournaments & networking
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
                                            9:00 AM - Final Sprint
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
                                            2:00 PM - Submissions Due
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
                                            4:00 PM - Demo Presentations
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Show off your creations!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-neon-pink mb-4">
                                Awards & Closing
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-pink/20">
                                    <Trophy className="w-5 h-5 text-neon-pink mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            6:00 PM - Awards Ceremony
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Winners announced & prizes awarded
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-card border border-neon-pink/20">
                                    <Trophy className="w-5 h-5 text-neon-pink mt-1" />
                                    <div>
                                        <div className="font-semibold">
                                            7:00 PM - Closing Celebration
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

            {/* Sponsors Section */}
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
                                <div className="w-32 h-32 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">
                                        Hack Club
                                    </span>
                                </div>
                                <p className="text-muted-foreground">
                                    Empowering teenagers worldwide to code and create
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-neon-cyan mb-8">
                                Gold Sponsors
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="bg-card border border-neon-cyan/30 rounded-lg p-6"
                                    >
                                        <div className="w-20 h-20 bg-neon-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <span className="text-neon-cyan font-bold">
                                                LOGO
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Sponsor {i}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-hack-red mb-8">
                                Community Partners
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
                                <span className="mr-2">🤝</span>
                                Become a Sponsor
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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
                                participate! No previous coding or game development
                                experience is required.
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
                                experiences - as long as it's playable and follows the
                                theme.
                            </p>
                        </Card>

                        <Card variant="gaming" className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-neon-purple">
                                Is food provided?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes! All meals, snacks, and drinks are completely free.
                                We'll have options for different dietary requirements too.
                            </p>
                        </Card>

                        <Card variant="gaming" className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-neon-cyan">
                                How are projects judged?
                            </h3>
                            <p className="text-muted-foreground">
                                Projects are judged on creativity, technical
                                implementation, design, and how well they fit the theme.
                                Our panel includes industry professionals and educators.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
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

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                name: "Alex Murenzi",
                                role: "Lead Organizer",
                                color: "neon-purple",
                            },
                            {
                                name: "Grace Uwimana",
                                role: "Logistics Director",
                                color: "neon-cyan",
                            },
                            {
                                name: "David Nkurunziza",
                                role: "Tech Lead",
                                color: "hack-red",
                            },
                            {
                                name: "Sarah Mukamana",
                                role: "Marketing Director",
                                color: "neon-pink",
                            },
                            {
                                name: "Jean Hakizimana",
                                role: "Sponsorship Lead",
                                color: "neon-purple",
                            },
                            {
                                name: "Marie Ingabire",
                                role: "Community Manager",
                                color: "neon-cyan",
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
                                    <Users className={`w-12 h-12 text-${member.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-muted-foreground mb-4">
                                    {member.role}
                                </p>
                                <div className="flex justify-center gap-2">
                                    <Badge
                                        className={`bg-${member.color}/20 text-${member.color} border-${member.color}/30`}
                                    >
                                        Hack Club Member
                                    </Badge>
                                </div>
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
                                    Kigali Innovation Hub for providing the perfect space
                                    for our hackathon adventure.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Registration */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="gradient-text">Ready to Build?</span>
                    </h2>

                    <div className="bg-card border border-neon-cyan/30 rounded-lg p-8 mb-8 glass-effect">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <MapPin className="w-6 h-6 text-neon-cyan" />
                            <h3 className="text-xl font-bold">Kigali Innovation Hub</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            December 15-17, 2024 • Kigali, Rwanda
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Free food, drinks, swag, and mentorship included!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Button variant="hero" size="xl" className="w-full sm:w-auto">
                            <Gamepad2 className="mr-2" />
                            Register for Daydream Rwanda
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Open to all high schoolers in Rwanda • No experience required
                            • Just bring your passion!
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-border">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">Daydream Rwanda</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Organized with ❤️ by Rwanda Hack Club teenagers
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-neon-cyan transition-colors">
                            Contact
                        </a>
                        <a href="#" className="hover:text-neon-cyan transition-colors">
                            Sponsors
                        </a>
                        <a href="#" className="hover:text-neon-cyan transition-colors">
                            FAQ
                        </a>
                        <a href="#" className="hover:text-neon-cyan transition-colors">
                            Code of Conduct
                        </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
                        <p>
                            Powered by{" "}
                            <span className="text-hack-red font-semibold">Hack Club</span>{" "}
                            • Part of the global Daydream movement bringing hackathons to
                            high schoolers worldwide
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
