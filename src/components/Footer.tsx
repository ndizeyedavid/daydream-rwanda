export default function Footer() {
    return (
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
                    <a
                        href="mailto:muganwarogers@gmail.com"
                        className="hover:text-neon-cyan transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="#sponsors"
                        className="hover:text-neon-cyan transition-colors"
                    >
                        Sponsors
                    </a>
                    <a href="#faq" className="hover:text-neon-cyan transition-colors">
                        FAQ
                    </a>
                    <a
                        href="https://github.com/ndizeyedavid/daydream-rwanda"
                        className="hover:text-neon-cyan transition-colors"
                    >
                        Github Repo
                    </a>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
                    <p>
                        Powered by{" "}
                        <a
                            href="https://hackclub.com/"
                            target="_blank"
                            className="text-hack-red font-semibold"
                        >
                            Hack Club
                        </a>{" "}
                        • Part of the global Daydream movement bringing hackathons to high
                        schoolers worldwide
                    </p>
                </div>
            </div>
        </footer>
    );
}
