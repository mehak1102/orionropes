import {
  Anvil,
  Building2,
  Cable,
    Construction, // ✅ replace Crane

  Fish,
  Mountain,
  Pickaxe,
  ShipWheel,
  TowerControl,
} from "lucide-react";

export const industries = [
  {
    slug: "general-engineering-ropes",
    title: "General Engineering Ropes",
    subtitle: "Reliable ropes for versatile engineering use",
    icon: Anvil,
    heroImage:
      // "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
      "/industries/general-engineering-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      "/industries/general-engineering-banner.png",
    shortDescription:
      "Multi-purpose engineering ropes designed for durability, load consistency, and reliable operation across heavy-duty industrial applications.",
    description:
      "Our General Engineering Ropes are designed to support a wide range of industrial and engineering applications where dependable load handling, durability, and operational consistency matter most. These ropes are manufactured with strict quality control and engineered for long-term performance in demanding environments.",
    features: [
      "Consistent tensile performance",
      "High fatigue resistance",
      "Suitable for varied engineering systems",
      "Reliable service life in industrial conditions",
    ],
    applications: [
      "Fabrication units",
      "Heavy engineering",
      "Material movement systems",
      "Industrial machinery",
    ],
  },
  {
    slug: "crane-ropes",
    title: "Crane Ropes",
    subtitle: "Built for heavy lifting, safety, and uptime",
    icon:   Construction, // ✅ replace Crane

    heroImage:
      // "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
      "/industries/crane-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
      "/industries/crane-banner.png",
    shortDescription:
      "Specialized crane ropes engineered for lifting systems requiring strength, wear resistance, and controlled handling under repetitive duty cycles.",
    description:
      "Crane Ropes from Orion are designed for lifting systems that demand reliability, strength, and fatigue resistance. They are suitable for hoisting, trolley, and boom operations across industrial, construction, and logistics environments.",
    features: [
      "Strong lifting performance",
      "Improved abrasion resistance",
      "Stable operation under repetitive loading",
      "Designed for demanding hoisting use",
    ],
    applications: [
      "Tower cranes",
      "EOT cranes",
      "Port lifting systems",
      "Construction lifting equipment",
    ],
  },
  {
    slug: "elevator-ropes",
    title: "Elevator Ropes",
    subtitle: "Smooth travel with dependable traction",
    icon: Building2,
    heroImage:
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
       "/industries/elevator-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
       "/industries/elevator-banner.png",
    shortDescription:
      "Precision elevator ropes built for smooth movement, low vibration, consistent traction, and long operational life in vertical transport systems.",
    description:
      "Our Elevator Ropes are manufactured for stable and efficient vertical movement in passenger and freight lift systems. Designed for traction compatibility and fatigue resistance, they help ensure safe and smooth operation in residential, commercial, and industrial buildings.",
    features: [
      "Low elongation for smooth movement",
      "Excellent traction compatibility",
      "Reduced vibration during operation",
      "Long cycle fatigue resistance",
    ],
    applications: [
      "Passenger lifts",
      "Freight elevators",
      "Governor ropes",
      "Door ropes and hoisting ropes",
    ],
  },
  {
    slug: "fishing-and-shipping-ropes",
    title: "Fishing And Shipping Ropes",
    subtitle: "Marine-ready ropes for rugged environments",
    icon: Fish,
    heroImage:
      // "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
       "/industries/fishing-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
       "/industries/fishing-banner.png",
    shortDescription:
      "Marine-focused ropes suitable for fishing, port handling, and shipping operations where corrosion resistance and dependable performance matter.",
    description:
      "Fishing and Shipping Ropes are developed for marine applications where ropes must withstand moisture, variable handling conditions, and long-term operational exposure. They are designed to support safe handling and dependable service in coastal and shipping environments.",
    features: [
      "Suitable for demanding marine conditions",
      "Dependable performance in port use",
      "Built for repeated operational cycles",
      "Durability-oriented construction",
    ],
    applications: [
      "Fishing operations",
      "Marine handling",
      "Port logistics",
      "Shipping support systems",
    ],
  },
  {
    slug: "haulage-ropes",
    title: "Haulage Ropes",
    subtitle: "Engineered for transport and haul systems",
    icon: Cable,
    heroImage:
      // "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      "/industries/haulage-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      "/industries/haulage-banner.png",
    shortDescription:
      "Heavy-duty haulage ropes designed for transport systems where consistent strength and movement reliability are critical.",
    description:
      "Haulage Ropes are intended for operations where controlled pulling, movement, and endurance under load are essential. They are built to support long service life across industrial transport and motion-driven applications.",
    features: [
      "Reliable load movement",
      "Designed for haulage cycles",
      "Durable under continuous use",
      "Strong engineering profile",
    ],
    applications: [
      "Material transport",
      "Industrial haulage systems",
      "Mechanical movement systems",
      "Infrastructure support",
    ],
  },
  {
    slug: "mining-ropes",
    title: "Mining Ropes",
    subtitle: "Ropes for harsh underground and surface use",
    icon: Pickaxe,
    heroImage:
      // "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop",
      "/industries/mining-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
      "/industries/mining-banner.png",
    shortDescription:
      "Mining ropes designed for demanding environments with strong performance under heavy load, abrasion, and operational stress.",
    description:
      "Orion Mining Ropes are developed for difficult underground and surface operations where safety, durability, and load capability are crucial. These ropes are suitable for applications exposed to harsh mechanical conditions and long operating cycles.",
    features: [
      "Built for demanding conditions",
      "High load handling capability",
      "Abrasion-conscious construction",
      "Reliable field performance",
    ],
    applications: [
      "Mine haulage",
      "Shaft systems",
      "Material lifting",
      "Underground handling operations",
    ],
  },
  {
    slug: "oil-and-offshore-drilling-ropes",
    title: "Oil And Offshore Drilling Ropes",
    subtitle: "Performance ropes for offshore energy use",
    icon: TowerControl,
    heroImage:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Ropes engineered for offshore and drilling environments requiring strong operational stability and dependable endurance.",
    description:
      "Oil and Offshore Drilling Ropes are developed to support applications in energy and offshore sectors, where mechanical reliability and safety are essential. They are intended for operations exposed to continuous duty and challenging conditions.",
    features: [
      "Built for offshore duty environments",
      "Strong operational dependability",
      "Designed for repeated industrial cycles",
      "Suitable for high-demand applications",
    ],
    applications: [
      "Drilling support",
      "Marine energy operations",
      "Offshore platforms",
      "Heavy-duty industrial deployment",
    ],
  },
  {
    slug: "ropes-for-adventure-sports",
    title: "Ropes For Adventure Sports",
    subtitle: "High-confidence ropes for adrenaline applications",
    icon: Mountain,
    heroImage:
      // "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1600&auto=format&fit=crop",
       "/industries/adventure-banner.png",

    cardImage:
      // "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop",
       "/industries/adventure-banner.png",
    shortDescription:
      "Adventure sport ropes built for confidence, durability, and controlled use in recreational and safety-oriented movement systems.",
    description:
      "Ropes for Adventure Sports are built for applications where durability, dependable handling, and safety-conscious performance are required. They are ideal for controlled activity systems that demand confidence and reliability.",
    features: [
      "Built with safety-oriented intent",
      "Reliable performance under dynamic use",
      "Durability for outdoor movement systems",
      "Suitable for recreational infrastructure",
    ],
    applications: [
      "Zipline systems",
      "Rope crossing setups",
      "Adventure parks",
      "Outdoor activity infrastructure",
    ],
  },
  {
    slug: "structural-systems-and-safety-systems",
    title: "Structural Systems And Safety Systems",
    subtitle: "Engineered support for structural safety needs",
    icon: ShipWheel,
    heroImage:
      // "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1600&auto=format&fit=crop",
      "/industries/structural-banner.png",
    cardImage:
      // "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
      "/industries/structural-banner.png",
    shortDescription:
      "Specialized ropes for structural and safety-focused applications where stability, support, and reliability are essential.",
    description:
      "These ropes are developed for structural systems and safety systems requiring support integrity, dependable behavior, and confidence under load. They are suitable for installations where failure margins must be minimized and consistency is important.",
    features: [
      "Strong support-oriented design",
      "Suitable for structural use cases",
      "Reliable performance under critical applications",
      "Safety-focused engineering intent",
    ],
    applications: [
      "Structural support systems",
      "Safety systems",
      "Bridges and guided systems",
      "Infrastructure reinforcement environments",
    ],
  },
];