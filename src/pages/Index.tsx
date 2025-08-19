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
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Faqs from "@/components/Faqs";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/Smooth-cursor";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <SmoothCursor />

            <Header />

            <Hero />

            <About />

            <Timeline />

            <Prizes />

            <Schedule />

            <Sponsors />

            <Faqs />

            <Team />

            <Location />

            <Footer />
        </div>
    );
};

export default Index;
