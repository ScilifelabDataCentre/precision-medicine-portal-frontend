"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

interface Partner {
  abbr: string;
  name: string;
  href: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
}

const partners: Partner[] = [
  {
    abbr: "GMS",
    name: "Genomic Medicine Sweden",
    href: "https://genomicmedicine.se/en/",
    logoSrc: "/digifor1health/gms-logo.png",
    logoWidth: 300,
    logoHeight: 125,
  },
  {
    abbr: "GoE",
    name: "Genome of Europe",
    href: "https://genomeofeurope.eu/",
    logoSrc: "/digifor1health/goe-logo.svg",
    logoWidth: 118,
    logoHeight: 63,
  },
  {
    abbr: "GDI",
    name: "European Genomic Data Infrastructure",
    href: "https://gdi.onemilliongenomes.eu/",
    logoSrc: "/digifor1health/gdi-logo.png",
    logoWidth: 1024,
    logoHeight: 425,
  },
  {
    abbr: "EUCAIM",
    name: "European Federation for Cancer Images",
    href: "https://cancerimage.eu/",
    logoSrc: "/digifor1health/eucaim-logo.png",
    logoWidth: 509,
    logoHeight: 133,
  },
  {
    abbr: "TEF-Health",
    name: "Testing and Experimentation Facility for Health AI and Robotics",
    href: "https://tefhealth.se/",
    logoSrc: "/digifor1health/tef-logo.png",
    logoWidth: 902,
    logoHeight: 281,
  },
  {
    abbr: "HDS",
    name: "Health Data Sweden",
    href: "https://www.healthdatasweden.eu/",
    logoSrc: "/digifor1health/hds-logo-1.jpeg",
    logoWidth: 286,
    logoHeight: 152,
  },
];

const LINE_ENDPOINTS_X = [86, 171, 257, 343, 429, 514];
const SVG_CENTER_X = 300;
const SVG_TOP_Y = 8;
const SVG_BOTTOM_Y = 95;
const SVG_VIEWBOX = "0 0 600 100";

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export default function PartnerCoordinationDiagram() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const logoVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: springTransition },
      };

  const lineTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeInOut" };

  return (
    <figure className="my-8 flex flex-col items-center" role="figure">
      <div
        className="w-full max-w-3xl"
        role="img"
        aria-label="Diagram showing the DIGIfor1healthSE project coordination structure: SciLifeLab at the top coordinates six partner organizations below — GMS, GoE, GDI, EUCAIM, TEF-Health, and HDS — connected by dashed lines indicating collaboration."
      >
        <p className="sr-only">
          SciLifeLab coordinates six partners: Genomic Medicine Sweden (GMS),
          Genome of Europe (GoE), European Genomic Data Infrastructure (GDI),
          European Federation for Cancer Images (EUCAIM), Testing and
          Experimentation Facility for Health AI and Robotics (TEF-Health), and
          Health Data Sweden (HDS).
        </p>

        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* SciLifeLab coordinator logo */}
          <motion.div variants={logoVariants} className="mb-1">
            <Image
              src="/digifor1health/scilifelab-logo.png"
              alt=""
              aria-hidden="true"
              width={3376}
              height={734}
              className="h-8 md:h-10 w-auto"
            />
          </motion.div>

          {/* Desktop: SVG connection lines */}
          <svg
            viewBox={SVG_VIEWBOX}
            className="hidden md:block w-full h-auto"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle
              cx={SVG_CENTER_X}
              cy={SVG_TOP_Y}
              r={6}
              fill="#045c64"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.2, duration: 0.3 }
              }
            />

            {LINE_ENDPOINTS_X.map((endX, i) => (
              <motion.line
                key={i}
                x1={SVG_CENTER_X}
                y1={SVG_TOP_Y}
                x2={endX}
                y2={SVG_BOTTOM_Y}
                stroke="#045c64"
                strokeWidth={1}
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ...lineTransition,
                  delay: shouldReduceMotion ? 0 : 0.3 + i * 0.08,
                }}
              />
            ))}
          </svg>

          {/* Mobile: simple vertical connector */}
          <div
            className="md:hidden flex flex-col items-center my-2"
            aria-hidden="true"
          >
            <div className="w-px h-8 border-l-2 border-dashed border-primary" />
            <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
              coordinates
            </span>
            <div className="w-px h-4 border-l-2 border-dashed border-primary" />
          </div>

          {/* Partner logos grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2 w-full items-center justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {partners.map((partner) => (
              <motion.a
                key={partner.abbr}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} (opens in new tab)`}
                title={partner.name}
                variants={logoVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="flex items-center justify-center h-10 md:h-12 w-full max-w-[120px] md:max-w-none px-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-shadow"
              >
                <Image
                  src={partner.logoSrc}
                  alt=""
                  aria-hidden="true"
                  width={partner.logoWidth}
                  height={partner.logoHeight}
                  className="max-h-full max-w-full w-auto object-contain mix-blend-multiply"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <figcaption className="mt-3 text-sm text-muted-foreground text-center">
        DIGIfor1healthSE project partners coordinated by SciLifeLab
      </figcaption>
    </figure>
  );
}
