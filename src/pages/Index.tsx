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
import { motion } from "framer-motion";
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
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <SmoothCursor />

            <Header />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <Hero />
            </motion.div>

            <MotionWrapper>
                <About />
            </MotionWrapper>

            <MotionWrapper>
                <Timeline />
            </MotionWrapper>

            <MotionWrapper>
                <Prizes />
            </MotionWrapper>

            <MotionWrapper>
                <Schedule />
            </MotionWrapper>

            <MotionWrapper>
                <Sponsors />
            </MotionWrapper>

            <MotionWrapper>
                <Faqs />
            </MotionWrapper>

            <MotionWrapper>
                <Team />
            </MotionWrapper>

            <MotionWrapper>
                <Location />
            </MotionWrapper>

            {/* <MotionWrapper> */}
            <Footer />
            {/* </MotionWrapper> */}
        </div>
    );
};

export default Index;
