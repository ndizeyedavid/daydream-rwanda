import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isVisible = useScrollDirection();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };
    return (
        <header
            className={`fixed w-full z-50 bg-background/40 backdrop-blur-lg border-b border-border transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-6xl mx-auto py-4">
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
    );
}
