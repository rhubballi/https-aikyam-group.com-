import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "road-construction",
    slug: "road-construction",
    title: "Road Construction",
    shortDescription: "Specialized in high-performance highways, PQC concrete pavements, asphalt overlays, and industrial arterial corridors.",
    fullDescription: "JP Constructions delivers high-velocity road construction services adhering to MoRTH and IRC standards. From heavy earthworks and sub-base stabilization to laser-guided sensor paver bituminous paving and high-grade Pavement Quality Concrete (PQC), we build long-lasting expressways, state highways, and industrial logistics roadways.",
    category: "roads",
    heroImage: "/images/services/1.jpg",
    iconName: "Truck",
    scopeOfWork: [
      "Rigid Pavement Quality Concrete (PQC) and Dry Lean Concrete (DLC)",
      "Bituminous Concrete (BC) and Dense Bituminous Macadam (DBM)",
      "Sensor-paver leveled industrial arterial corridors and highway widening",
      "Embankment compaction, subgrade stabilization, and granular sub-base (GSB)",
      "Highway drainage storm culverts, kerbs, and concrete road barriers",
      "Road safety furnishings, thermoplastic markings, and signage"
    ],
    benefits: [
      "Modern in-house fleet of sensor pavers, tandem vibratory rollers, and motor graders",
      "Rigorous core extraction, compaction testing, and surface roughness camber auditing",
      "High project velocity with proven delivery on major corridors",
      "Zero-defect execution conforming to IRC and MoRTH specifications"
    ],
    process: [
      { step: 1, title: "Topographical & Geotechnical Survey", description: "Alignment modeling, CBR soil testing, and pavement layer design." },
      { step: 2, title: "Earthwork & Subgrade Preparation", description: "Heavy excavation, filling, and moisture-controlled vibratory compaction." },
      { step: 3, title: "Sub-Base & Base Course Layering", description: "Granular sub-base (GSB) and wet mix macadam (WMM) laying." },
      { step: 4, title: "Sensor Paving & Surfacing", description: "Electronic sensor-paver laying of dense bituminous / PQC layers." },
      { step: 5, title: "Finishing & Commissioning", description: "Joint sealing, kerbing, thermoplastic line marking, and quality sign-off." }
    ],
    equipmentUsed: [
      "Electronic Sensor Bituminous Pavers (Vögele / Apollo spec)",
      "Heavy Tandem & Pneumatic Vibratory Rollers (10T - 12T)",
      "Motor Graders with Auto-Blade Control",
      "Mechanical Road Sweepers & Bitumen Pressure Distributors",
      "Transit Mixers and Rapid Concrete Dump Trucks"
    ],
    featuredProjectsSlugs: ["nh7-highway-widening", "industrial-corridor-khopoli"]
  },
  {
    id: "pipelines-construction",
    slug: "pipelines-construction",
    title: "Pipelines Construction",
    shortDescription: "Turnkey transmission pipelines, deep intake jackwells, hydraulic pumping stations, and bulk distribution grids.",
    fullDescription: "We specialize in challenging hydraulic engineering and bulk water transmission infrastructure. Our capabilities encompass deep monolithic intake jackwell sinking in riverbed strata, high-pressure Ductile Iron (DI) and MS cross-country pipeline networks, pumping chambers, and surge control reservoirs.",
    category: "pipelines",
    heroImage: "/images/services/2.jpg",
    iconName: "Droplets",
    scopeOfWork: [
      "Deep pneumatic & open caisson intake jackwells in riverbed strata",
      "Ductile Iron (DI Class K9) bulk water transmission mains",
      "High-density polyethylene (HDPE) and mild steel (MS) pipeline laying",
      "Reinforced concrete intake pumphouse chambers and sump wells",
      "Thrust block construction, air valve chambers, and scour valve installations",
      "Hydrostatic pressure testing up to 16 kg/cm² and commissioning"
    ],
    benefits: [
      "Expertise in complex riverbed dewatering and submerged caisson sinking",
      "Certified pipeline jointing, socket spigot alignment, and welding protocols",
      "Specialized trenching, shoring, and pipe-handling machinery",
      "Full compliance with CPHEEO water supply engineering manuals"
    ],
    process: [
      { step: 1, title: "Hydraulic Alignment & Route Profiling", description: "Geological soundings, static head calculations, and pipe route mapping." },
      { step: 2, title: "Intake Jackwell Sinking", description: "Reinforced concrete steining construction and pneumatic caisson sinking." },
      { step: 3, title: "Trenching & Pipe Bedding", description: "Precision excavation, bedding preparation, and safety trench boxes." },
      { step: 4, title: "Pipe Laying & Jointing", description: "Laser-aligned pipe lowering, rubber gasket jointing, and thrust blocks." },
      { step: 5, title: "Hydrostatic Testing & Disinfection", description: "Sustained pressure hold tests, joint inspection, and commissioning." }
    ],
    equipmentUsed: [
      "Hydraulic Trench Excavators (JCB / Tata Hitachi)",
      "Heavy Mobile Cranes for Safe Pipe Lowering",
      "Pneumatic Caisson Sinking Equipment & Air Locks",
      "High-Pressure Hydrostatic Test Pump Units",
      "Dewatering Submersible Slurry Pumps"
    ],
    featuredProjectsSlugs: ["jackwell-jspm-wagholi", "di-pipeline-jspm-wagholi"]
  },
  {
    id: "rcc-works",
    slug: "rcc-works",
    title: "RCC Works",
    shortDescription: "Heavy reinforced concrete foundations, machine rafts, retaining walls, aqueducts, and high-strength industrial structures.",
    fullDescription: "From continuous monolithic pours for vibratory equipment foundations to high-elevation aqueducts, canal siphon structures, and water retaining reservoirs, JP Constructions provides specialized reinforced cement concrete (RCC) engineering using high-grade M40 to M60 design mixes.",
    category: "rcc-works",
    heroImage: "/images/services/3.jpg",
    iconName: "Layers",
    scopeOfWork: [
      "Heavy monolithic RCC raft foundations for vibratory machinery and turbines",
      "Overhead Water Tanks (ESR / OHT) and Ground Level Storage Reservoirs (GLSR)",
      "Canal aqueducts, siphon conduits, and flood relief culverts",
      "Heavy-duty cantilever and counterfort retaining walls",
      "Precast concrete structural elements and post-tensioned diaphragms",
      "Complex shuttering design with modular steel formwork systems"
    ],
    benefits: [
      "100% certified 7-day and 28-day cube crushing test compliance",
      "In-house automated batching plants guaranteeing strict water-cement ratio control",
      "Ultrasonic flaw detection and non-destructive rebound testing",
      "Zero honeycombing finish through precision formwork vibrators"
    ],
    process: [
      { step: 1, title: "Structural Mix Design & Testing", description: "Mix optimization for high early strength and low permeability." },
      { step: 2, title: "Formwork & Rebar Binding", description: "FE 500D TMT reinforcement tying and rigid steel shuttering assembly." },
      { step: 3, title: "Pre-Pour Inspection & Clearance", description: "Cover block verification, bar spacing check, and cleanliness audit." },
      { step: 4, title: "Controlled Continuous Pour", description: "High-frequency needle vibration and thermo-controlled curing." },
      { step: 5, title: "De-shuttering & Curing", description: "Prescribed curing membrane application and 28-day strength certification." }
    ],
    equipmentUsed: [
      "Automated Twin-Shaft Concrete Batching Plants (60-90 m³/hr)",
      "High-Reach Concrete Boom Placers & Stationary Pumps",
      "Modular Heavy-Duty Steel Shuttering Systems",
      "High-Frequency Electric & Petrol Needle Vibrators",
      "Digital Cube Testing Compression Testing Machines (CTM)"
    ],
    featuredProjectsSlugs: ["aqueduct-phaltan", "banda-canal-tillari"]
  },
  {
    id: "building-construction",
    slug: "building-construction",
    title: "Building Construction",
    shortDescription: "Pre-Engineered Buildings (PEB), industrial fabrication sheds, commercial complexes, and turnkey corporate structures.",
    fullDescription: "We deliver turnkey building construction for commercial complexes, industrial factories, high-bay workshops, and educational institutions. Combining structural RCC framing with pre-engineered steel trusses, heavy floor screeds, and modern building façades, our projects are engineered for rapid erection, energy efficiency, and lifetime structural durability.",
    category: "building",
    heroImage: "/images/gallery/pic1.jpg",
    iconName: "Building2",
    scopeOfWork: [
      "Turnkey industrial sheds and pre-engineered steel buildings (PEB)",
      "Heavy EOT crane runway beams and high-bay fabrication workshops",
      "Laser-screed industrial floorings with high abrasion resistance",
      "Multi-storey commercial complexes and institutional university blocks",
      "Structural steel fabrication, sand blasting, and anti-corrosion coatings",
      "Statutory building permissions, NBC compliance, and turnkey commissioning"
    ],
    benefits: [
      "End-to-end EPC execution from architectural planning to civil handover",
      "Heavy floor load design capacity accommodating up to 10T/m²",
      "Integrated overhead crane girder design for industrial plants",
      "Proven on-time delivery track record across Maharashtra and South India"
    ],
    process: [
      { step: 1, title: "Architectural & PEB Design", description: "STAAD.Pro modeling, foundation load calculations, and wind analysis." },
      { step: 2, title: "Substructure & Column Pedestals", description: "Deep footing excavation, stub columns, and anchor bolt setting." },
      { step: 3, title: "Steel Superstructure Erection", description: "Crane-assisted portal frame assembly, purlins, and bracings." },
      { step: 4, title: "Roofing & Wall Sheeting", description: "High-tensile Galvalume roof panels, skylights, and ridge ventilators." },
      { step: 5, title: "Flooring & Handover", description: "Laser-guided industrial floor slab casting, MEP integration, and final delivery." }
    ],
    equipmentUsed: [
      "Heavy Mobile Cranes for PEB Truss Erection (40T - 80T)",
      "Laser Screed Concrete Flooring Units",
      "Plate Compactors and Power Trowels",
      "Torque Wrench Calibration Units for High-Strength Bolts",
      "Scaffolding & Aerial Scissor Lifts"
    ],
    featuredProjectsSlugs: ["industrial-shed-om-sai-khopoli", "rcc-industrial-shed-khopoli"]
  }
];
