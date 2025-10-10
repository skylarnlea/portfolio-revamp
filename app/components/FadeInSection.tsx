'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FadeInSectionProps = {
    children: ReactNode;
    delay?: number;
};

export default function FadeInSection({ children, delay }: FadeInSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} //starts slightly lower
            whileInView={{ opacity: 1, y: 0 }} //fades in and slides up when visible
            viewport={{ once: true, margin: "-50px" }} //only animates once (not every time we scroll)
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
}