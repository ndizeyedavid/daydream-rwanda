import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Trophy, Users, Gamepad2, Code, Zap, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            Join the most epic game jam for high schoolers in Rwanda. Build games, make friends, 
            and turn your wildest ideas into reality. All night. All code. All magic.
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
              <div className="text-3xl font-bold text-neon-purple">100+</div>
              <div className="text-sm text-muted-foreground">Hackers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hack-red">$5K</div>
              <div className="text-sm text-muted-foreground">Prizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">What is Daydream?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Daydream is more than a hackathon—it's where high schoolers in Rwanda come together 
              to build games that matter, learn from each other, and experience the magic of creation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card variant="gaming" className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-purple/30 transition-colors">
                  <Gamepad2 className="w-6 h-6 text-neon-purple" />
                </div>
                <CardTitle className="text-xl">Build Games</CardTitle>
                <CardDescription>
                  From concept to playable game in 48 hours. Mobile, web, desktop—any platform, any engine.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card variant="gaming" className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-cyan/30 transition-colors">
                  <Users className="w-6 h-6 text-neon-cyan" />
                </div>
                <CardTitle className="text-xl">Make Friends</CardTitle>
                <CardDescription>
                  Team up with fellow creators, mentors, and industry professionals. Network that lasts.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card variant="gaming" className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-hack-red/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-hack-red/30 transition-colors">
                  <Zap className="w-6 h-6 text-hack-red" />
                </div>
                <CardTitle className="text-xl">Feel the Magic</CardTitle>
                <CardDescription>
                  That 3am moment when your code finally works and your idea becomes reality.
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
              <span className="gradient-text">48 Hours of Pure Creation</span>
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
                <h3 className="text-xl font-bold mb-2">Friday 6:00 PM - Opening Ceremony</h3>
                <p className="text-muted-foreground">Team formation, theme reveal, and kickoff pizza party!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-neon-cyan/30">
              <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="w-8 h-8 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Saturday - Build Day</h3>
                <p className="text-muted-foreground">24 hours of non-stop creating, workshops, and midnight snacks.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-lg bg-card border border-hack-red/30">
              <div className="w-16 h-16 bg-hack-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Trophy className="w-8 h-8 text-hack-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sunday 6:00 PM - Demo Day</h3>
                <p className="text-muted-foreground">Present your creation, celebrate achievements, and claim your prizes!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-6">
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
                <CardDescription className="text-lg">$2,000 + Hack Club Swag</CardDescription>
              </CardHeader>
            </Card>
            
            <Card variant="neon" className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-2xl">2nd Place</CardTitle>
                <CardDescription className="text-lg">$1,500 + Hack Club Swag</CardDescription>
              </CardHeader>
            </Card>
            
            <Card variant="neon" className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-2xl">3rd Place</CardTitle>
                <CardDescription className="text-lg">$1,000 + Hack Club Swag</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Plus special category awards for Innovation, Design, and Social Impact!
            </p>
            <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 px-6 py-2">
              All participants get exclusive Hack Club merchandise!
            </Badge>
          </div>
        </div>
      </section>

      {/* Location & Registration */}
      <section className="py-20 px-6 bg-card/30">
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
              Open to all high schoolers in Rwanda • No experience required • Just bring your passion!
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
            <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Sponsors</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Code of Conduct</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>Powered by <span className="text-hack-red font-semibold">Hack Club</span> • 
            Part of the global Daydream movement bringing hackathons to high schoolers worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;