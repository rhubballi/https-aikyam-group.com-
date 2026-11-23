import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "infrastructure-projects",
    slug: "infrastructure",
    title: "Infrastructure & Heavy Bridge Construction",
    shortDescription: "Design, foundation engineering, and superstructure erection of major river bridges, PSC box girders, viaducts, and highway structures.",
    fullDescription: "JP Constructions is renowned for engineering high-load infrastructure that withstands extreme environmental forces and dynamic traffic stresses. From deep well sinking and caissons in river beds to the pre-stressing and launching of continuous concrete box girders, our engineering teams deliver end-to-end bridge and corridor solutions adhering strictly to IRC and IRS standards.",
    category: "infrastructure",
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
    iconName: "HardHat",
    scopeOfWork: [
      "Major & minor river bridge construction with deep well / caisson foundations",
      "Prestressed Concrete (PSC) Box Girders and I-Girder launching",
      "Rail Over Rail (ROR) and Rail Over Bridges (ROB / RUB)",
      "Multi-span viaducts and elevated transit corridors",
      "High-embankment earthworks, retaining walls, and reinforced soil (RE) walls",
      "Substructure pier caps, bearings installation, and expansion joints"
    ],
    benefits: [
      "20+ years of verified expertise across South India's critical railway corridors",
      "Rapid turnaround demonstrated by completing 10 major river bridges in 18 months",
      "In-house inventory of launching gantries, shuttering systems, and batching plants",
      "Zero-accident safety track record on high-risk active water and rail spans"
    ],
    process: [
      { step: 1, title: "Hydrological & Soil Investigation", description: "Comprehensive scour depth analysis, bore logs, and seismic zone mapping." },
      { step: 2, title: "Deep Substructure Foundation", description: "Pneumatic/open caisson sinking, large-diameter bored cast-in-situ piling." },
      { step: 3, title: "Pier & Abutment Erection", description: "Precision shuttering with high-grade self-compacting concrete." },
      { step: 4, title: "Superstructure Launching & Stressing", description: "Segmental precast girder casting, hydraulic jacking, and post-tension grouting." },
      { step: 5, title: "Deck Finishing & Load Testing", description: "Proof load testing, elastomeric bearing seating, and waterproofing membrane." }
    ],
    equipmentUsed: [
      "Hydraulic Piling Rigs (Bauer / Casagrande spec)",
      "High-Capacity Precast Launching Gantries (120 MT+)",
      "Automated Concrete Batching Plants (60 m³/hr)",
      "Heavy Duty Crane Fleet (40T - 150T)",
      "Post-Tensioning Multi-Strand Jacks & Grouting Pumps"
    ],
    featuredProjectsSlugs: ["penna-river-bridge-nellore", "doddajala-railway-box-girder-bridge", "villupuram-mayiladuthurai-10-river-bridges"]
  },
  {
    id: "commercial-construction",
    slug: "commercial",
    title: "Commercial & Institutional Construction",
    shortDescription: "Turnkey structural engineering, RCC frameworks, corporate office complexes, retail centers, and institutional facilities.",
    fullDescription: "From corporate towers and commercial retail malls to university and hospital complexes, JP Constructions delivers robust, aesthetically refined commercial buildings. We combine advanced structural engineering with energy-efficient building skins, fire-resistant design, and turnkey MEP integration to build commercial assets that generate lasting value.",
    category: "commercial",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    iconName: "Building2",
    scopeOfWork: [
      "Structural RCC multi-storey framing with post-tensioned slabs",
      "Composite steel-concrete structural frames for open-plan floorplates",
      "Deep multi-level basement excavation, diaphragm walls, and shoring",
      "Façade engineering including structural glazing and ventilated claddings",
      "Statutory NBC compliance, fire-life safety infrastructure, and disabled accessibility",
      "Turnkey MEP coordination (HVAC, electrical substation, high-speed elevators)"
    ],
    benefits: [
      "Optimized column grids that maximize leasable commercial floor area",
      "Stringent adherence to National Building Code (NBC) and local municipal bylaws",
      "Value engineering that minimizes lifecycle HVAC and maintenance overheads",
      "On-schedule delivery ensuring swift capital recovery for commercial owners"
    ],
    process: [
      { step: 1, title: "Design Review & BIM Coordination", description: "3D clash detection between architectural, structural, and MEP disciplines." },
      { step: 2, title: "Deep Basement & Substructure", description: "Secant piles, soil nailing, and raft foundation with integral waterproofing." },
      { step: 3, title: "Fast-Track Superstructure", description: "Aluminum formwork systems for rapid, repetitive multi-floor casting." },
      { step: 4, title: "Enclosure & Facade Erection", description: "High-performance double-glazed curtain walls and composite louvers." },
      { step: 5, title: "Fitout & Testing / Commissioning", description: "Substation energization, fire hydrants testing, and occupancy handover." }
    ],
    equipmentUsed: [
      "Tower Cranes with 50m+ jib radius",
      "Mivan / Aluminum Formwork Panels",
      "Stationary Concrete Boom Placers",
      "High-Pressure Pressure Washers & Shotcrete Pumps"
    ],
    featuredProjectsSlugs: ["coastal-commercial-plaza-kakinada", "modernization-st-workshop-podanur"]
  },
  {
    id: "industrial-construction",
    slug: "industrial",
    title: "Industrial Plants & Heavy Workshops",
    shortDescription: "Heavy fabrication bays, machine basements, overhead RCC reservoirs, workshops, and specialized manufacturing plants.",
    fullDescription: "Industrial facilities demand supreme structural durability, heavy floor load capacity, and precision alignment for heavy machinery. JP Constructions has executed prestigious industrial workshops for Indian Railways and major EPCs like Tata Projects, incorporating high-bay steel framing, vibratory machine foundations, heavy-duty industrial flooring, and large-scale water reservoirs.",
    category: "industrial",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    iconName: "Factory",
    scopeOfWork: [
      "Heavy fabrication bays with overhead EOT crane gantry girder structures",
      "Machine foundation design accommodating extreme dynamic vibratory loads",
      "Heavy-duty laser-screed floor slabs with metallic hardeners (up to 10T/m²)",
      "RCC Overhead Water Reservoirs (OHT) and Ground Level Reservoirs (GLR)",
      "Industrial effluent treatment tanks and chemical containment bunds",
      "Internal heavy-axle bituminous road networks and drainage canals"
    ],
    benefits: [
      "Proven execution on prestigious railway workshops such as S&T Podanur",
      "High floor flatness tolerances accommodating automated guided vehicles (AGV)",
      "Heavy structural steel fabrication with certified ultrasonic weld testing",
      "Robust electrical, compressed air, and stormwater integration"
    ],
    process: [
      { step: 1, title: "Industrial Plant Layout Analysis", description: "Mapping heavy machine loads, overhead crane paths, and process flows." },
      { step: 2, title: "Heavy Rafts & Trench Networks", description: "Underground utility trenches, machine pits, and drainage channels." },
      { step: 3, title: "Structural Steel Frame Erection", description: "High-tensile steel columns, roof trusses, and EOT runway beams." },
      { step: 4, title: "Heavy-Duty Floor Slabs", description: "Laser screeding with non-metallic / metallic dry shake floor hardeners." },
      { step: 5, title: "Reservoirs & Infrastructure Integration", description: "Water storage, road connections, transformer yard, and handover." }
    ],
    equipmentUsed: [
      "Laser Screed Concrete Flooring Machines",
      "Mobile Crane Fleet for High-Bay Steel Erection",
      "Heavy Compaction Rollers & Pavers",
      "Hydraulic Shuttering for Elevated Water Tanks"
    ],
    featuredProjectsSlugs: ["modernization-st-workshop-podanur", "rinl-visakhapatnam-industrial-packages"]
  },
  {
    id: "residential-construction",
    slug: "residential",
    title: "Premium Residential & Housing Complexes",
    shortDescription: "Luxury villas, gated residential enclaves, apartment towers, and custom architectural homes built with structural permanence.",
    fullDescription: "JP Constructions brings the same uncompromising engineering rigor used in multi-span river bridges to residential developments. Whether crafting bespoke private villas, luxury waterfront residences, or mid-to-high rise residential communities, we prioritize structural longevity, thermal comfort, pristine craftsmanship, and seismic safety.",
    category: "residential",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    iconName: "Home",
    scopeOfWork: [
      "Bespoke luxury residences and architectural villas",
      "Gated residential townships and high-rise apartment towers",
      "Seismic-compliant RCC framed structures with thermal mass optimization",
      "Turnkey interior civil finishes, stone cladding, and designer ceilings",
      "Rainwater harvesting, smart solar integration, and wastewater treatment",
      "Landscaping civil works, infinity pools, and clubhouse structures"
    ],
    benefits: [
      "Zero dampness assurance through multi-layer chemical waterproofing",
      "Earthquake-resistant design exceeding IS 1893 seismic standards",
      "Transparent material procurement with certified high-grade TMT steel & cement",
      "Delivered with comprehensive 10-year structural warranty"
    ],
    process: [
      { step: 1, title: "Architectural & Vastu Harmonization", description: "Aligning architectural elegance with practical structural grids." },
      { step: 2, title: "Engineered Foundation & Plinth", description: "Soil treatment, anti-termite barrier, and damp-proof course (DPC)." },
      { step: 3, title: "Monolithic RCC Shell", description: "Reinforced frame with quality-tested concrete and earthquake ties." },
      { step: 4, title: "Masonry & Advanced Waterproofing", description: "AAC blockwork, polymer-modified plastering, and wet area barrier coating." },
      { step: 5, title: "Finishing & Handover Dossier", description: "Premium flooring, fenestrations, electrical commissioning, and keys." }
    ],
    equipmentUsed: [
      "Transit Concrete Mixers",
      "Mini Mobile Batching Units",
      "Scaffolding & Fall Arrest Systems",
      "Precision Rotary Laser Levels"
    ],
    featuredProjectsSlugs: ["emerald-heights-residential-enclave"]
  },
  {
    id: "building-renovation",
    slug: "renovation",
    title: "Structural Renovation & Rehabilitation",
    shortDescription: "Bridge deck renewal, structural retrofitting, heritage strengthening, facility modernization, and life-extension civil works.",
    fullDescription: "Critical infrastructure and aged buildings often face degradation from weathering, chloride penetration, or increased operational loads. JP Constructions specializes in non-destructive health assessments, carbon fiber wrapping (CFRP), jacketing, deck slab renewal, and comprehensive facility modernizations such as railway workshops and institutional buildings.",
    category: "renovation",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    iconName: "Wrench",
    scopeOfWork: [
      "Bridge deck slab rehabilitation and expansion joint replacements",
      "RCC column and beam jacketing with micro-concrete injection",
      "Carbon Fiber Reinforced Polymer (CFRP) wrapping for load enhancement",
      "Hydro-demolition and rebar rust passivation with sacrificial anodes",
      "Facility modernization, additional floor additions, and roof truss renewal",
      "Waterproofing membrane replacement for podiums and basement structures"
    ],
    benefits: [
      "Extends structural lifecycle by 25+ years without cost of total replacement",
      "Minimizes downtime for active public corridors and industrial workshops",
      "Advanced non-destructive testing (ultrasonic pulse velocity & rebound hammer)",
      "Strict compliance with IRC SP:40 and SP:60 rehabilitation codes"
    ],
    process: [
      { step: 1, title: "Non-Destructive Testing (NDT)", description: "Core cutting, carbonation depth check, half-cell potential corrosion tests." },
      { step: 2, title: "Structural Remediation Plan", description: "Design calculation of load transfer and temporary support staging." },
      { step: 3, title: "Precision Concrete Removal", description: "Careful removal of distressed concrete while safeguarding primary reinforcement." },
      { step: 4, title: "Strengthening & Re-profiling", description: "Micro-concrete pouring, shear dowel drilling, or CFRP bonding." },
      { step: 5, title: "Protection & Load Verification", description: "Anti-carbonation protective coating and final proof load testing." }
    ],
    equipmentUsed: [
      "Micro-concrete Pressure Grouting Pumps",
      "Rebar Locators & Ultrasonic Test Devices",
      "Hydro-jetting Equipment (2000+ PSI)",
      "Heavy Hydraulic Jacking Staging Towers"
    ],
    featuredProjectsSlugs: ["modernization-st-workshop-podanur", "highway-viaduct-retrofitting"]
  },
  {
    id: "railways-corridors",
    slug: "railways",
    title: "Railway Corridors & Civil Alignment",
    shortDescription: "Third-line track beds, Rail-Over-Rail (ROR) grade separators, major railway over-bridges, and gauge conversion civil scopes.",
    fullDescription: "A specialized core competency of JP Constructions is execution within active Indian Railway alignments. Working in coordination with RVNL, South Central Railway, and Southern Railway, we manage stringent rail track safety protocols, night megablocks, earthwork formation, ballastless track beds, and composite steel girder installations.",
    category: "railways",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
    iconName: "TrainTrack",
    scopeOfWork: [
      "Rail Over Rail (ROR) grade separators under active train operations",
      "Provision of 3rd Line track formations, blanket layers, and major bridges",
      "Gauge conversion substructure and superstructure replacements",
      "Railway station platform extensions and passenger foot-over-bridges (FOB)",
      "Ballast retaining walls, high embankments, and drainage culverts",
      "Level crossing elimination through ROB and RUB box jacking"
    ],
    benefits: [
      "Deep understanding of Indian Railway safety rules and train speed clearance",
      "Proven ability to execute heavy lifts during constrained railway traffic blocks",
      "Long-standing vendor approval and partnership with RVNL and SCR",
      "Turnkey civil capability from earth formation to bridge bearing seating"
    ],
    process: [
      { step: 1, title: "Rail Alignment & Block Planning", description: "Synchronization with Divisional Railway Managers for megablock schedules." },
      { step: 2, title: "Track Protection & Staging", description: "Erection of safety barricades, speed-restriction signboards, and lookouts." },
      { step: 3, title: "Off-track Superstructure Precast", description: "Casting PSC girders adjacent to tracks to minimize track occupancy time." },
      { step: 4, title: "Megablock Girder Launching", description: "Rapid crane launch during designated rail traffic blocks within minutes." },
      { step: 5, title: "Track Bed Handover", description: "Ballast placement, alignment verification, and track certification." }
    ],
    equipmentUsed: [
      "Rail-mounted Cranes and Heavy Crawler Cranes",
      "Hydraulic Box Jacking Systems for RUBs",
      "High-output Soil Compactors & Graders",
      "Automated Track Level Survey Sensors"
    ],
    featuredProjectsSlugs: ["gudur-bitragunta-3rd-line-ror", "doddajala-railway-box-girder-bridge"]
  },
  {
    id: "road-construction",
    slug: "roads",
    title: "Road & Highway Infrastructure Construction",
    shortDescription: "Rigid RCC concrete roads, heavy-duty asphalt highways, industrial arterial corridors, earthworks, and integrated storm culverts.",
    fullDescription: "JP Constructions delivers durable highway and road networks designed to withstand intense axle loads, adverse weather conditions, and high-density traffic. Our roadway engineering spans flexible bituminous pavements, rigid Pavement Quality Concrete (PQC) roads, multi-lane bypasses, and industrial logistics corridors built in compliance with MoRTH and IRC standards.",
    category: "roads",
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
    iconName: "Truck",
    scopeOfWork: [
      "Rigid RCC road pavements (PQC / Dry Lean Concrete)",
      "Bituminous asphalt concrete paving for national & state highways",
      "Heavy industrial estate internal arterial road networks",
      "Sub-grade soil stabilization, embankment filling, and compaction",
      "Reinforced concrete box culverts, piped cross-drainage, and swales",
      "Thermoplastic road markings, metal beam crash barriers, and signage"
    ],
    benefits: [
      "Heavy load-bearing capacity designed for up to 150 kN single-axle truck loads",
      "Long service life exceeding 25+ years with minimal rutting or maintenance",
      "Advanced sensor-controlled paving for superior international roughness index (IRI)",
      "Complete drainage integration preventing water stagnation and edge erosion"
    ],
    process: [
      { step: 1, title: "Topographic & Traffic Survey", description: "Axle-load spectrum analysis, CBR soil testing, and pavement layer design." },
      { step: 2, title: "Earthwork & Embankment", description: "Cutting, filling, and precision compaction with 12T vibratory soil rollers." },
      { step: 3, title: "Sub-Base & DLC Laying", description: "Granular Sub-Base (GSB) and Dry Lean Concrete (DLC) placement with sensor pavers." },
      { step: 4, title: "PQC / Bituminous Surfacing", description: "High-grade concrete paving with dowel bar inserters and transverse joint cutting." },
      { step: 5, title: "Finishing & Safety Hardware", description: "Joint sealing, kerb casting, thermoplastic striping, and crash barrier installation." }
    ],
    equipmentUsed: [
      "Electronic Sensor Pavers with Dual Grade Controls",
      "12T Vibratory Tandem & Soil Compactors",
      "Motor Graders with Auto-Blade Levelers",
      "Concrete Joint Cutting Machines & Bitumen Sprayers"
    ],
    featuredProjectsSlugs: ["doddajala-railway-box-girder-bridge", "nh-7-six-lane-highway-corridor"]
  },
  {
    id: "pipelines-jackwell",
    slug: "pipelines",
    title: "Pipelines, Jackwells & Water Infrastructure",
    shortDescription: "Bulk water supply transmission mains, Ductile Iron (DI) pipelines, river intake jackwells, hydraulic pumphouses, and drainage networks.",
    fullDescription: "Specializing in municipal and industrial fluid transmission systems, JP Constructions executes end-to-end water infrastructure. From deep riverbed intake jackwells and high-head pumping stations to large-diameter DI and MS pipeline laying across challenging topographies, our civil engineering team ensures leak-free, long-lifespan hydraulic infrastructure.",
    category: "pipelines",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    iconName: "Droplets",
    scopeOfWork: [
      "Ductile Iron (DI), Mild Steel (MS), and HDPE bulk water pipeline laying",
      "Deep river and canal intake jackwells with pneumatic caisson sinking",
      "High-capacity RCC pumphouses, electrical substation bays, and gantry bays",
      "Trenching, bedding, pipe jointing, and hydrostatic pressure testing",
      "Thrust block construction, air valve chambers, and scour valve installations",
      "Industrial effluent transmission lines and underground storm drainage canals"
    ],
    benefits: [
      "Proven execution on specialized intake wells and institutional pipeline networks",
      "Hydrostatic testing conducted at 1.5x working pressure ensuring zero leaks",
      "Expertise in deep well sinking adjacent to live water bodies without collapse",
      "Corrosion-resistant epoxy coatings and sacrificial cathodic protection"
    ],
    process: [
      { step: 1, title: "Hydraulic Profile & Route Survey", description: "Ground elevation mapping, hydraulic gradient line (HGL), and pipe sizing." },
      { step: 2, title: "Caisson Sinking for Intake Well", description: "Steining casting and open/pneumatic well sinking to desired riverbed depth." },
      { step: 3, title: "Trenching & Bedding Preparation", description: "Laser-aligned trenching with granular sand/gravel bedding layers." },
      { step: 4, title: "Pipe Stringing, Lowering & Jointing", description: "Heavy crane lowering, socket-spigot push-on jointing with food-grade EPDM gaskets." },
      { step: 5, title: "Hydro-testing & Commissioning", description: "Sectional hydrostatic pressure hold tests and pump intake commissioning." }
    ],
    equipmentUsed: [
      "Hydraulic Pipelayer Cranes & Trench Excavators",
      "High-Pressure Hydrostatic Test Pumps & Gauges",
      "Well Sinking Clamshell Grabs & Dewatering Pumps",
      "Automated Pipe Beveling & Butt Fusion Machines"
    ],
    featuredProjectsSlugs: ["penna-river-bridge-nellore", "bulk-water-intake-jackwell-system"]
  },
  {
    id: "rcc-works",
    slug: "rcc-works",
    title: "Heavy RCC Works & Structural Concrete",
    shortDescription: "Monolithic reinforced cement concrete structures, heavy raft foundations, retaining walls, overhead water reservoirs (OHT), and retaining structures.",
    fullDescription: "Reinforced Cement Concrete (RCC) constitutes the structural backbone of every modern infrastructure project. JP Constructions specializes in high-tolerance heavy RCC execution—spanning multi-meter thick foundation rafts, retaining walls, overhead reservoirs, heavy bridge piers, and industrial machine foundations designed for extreme seismic and load conditions.",
    category: "rcc-works",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    iconName: "Layers",
    scopeOfWork: [
      "Heavy monolithic foundation rafts and vibratory machine basements",
      "High-capacity RCC Overhead Water Reservoirs (OHT) and Ground Reservoirs (GLR)",
      "Cantilever and counterfort retaining walls for highway and railway embankments",
      "Heavy load-bearing columns, shear walls, transfer girders, and podium slabs",
      "Seismic-resistant structural RCC frameworks adhering to IS 456 & IS 13920",
      "Self-compacting concrete (SCC) pours for congested rebar structural nodes"
    ],
    benefits: [
      "Strict compliance with IS 456, IS 1893 (Earthquake), and IS 3370 (Liquid Storage)",
      "Automated batching control guaranteeing consistent M40 to M60 concrete grades",
      "Laser-controlled formwork ensuring crisp alignment and superior surface finish",
      "100% cube testing at 7 and 28 days with certified laboratory compliance"
    ],
    process: [
      { step: 1, title: "Structural Analysis & Rebar Detailing", description: "BBS preparation and clash mitigation for dense rebar nodes." },
      { step: 2, title: "Precision Shuttering & Scaffolding", description: "Heavy-duty steel ply panels with water-tight joints and tie-rod systems." },
      { step: 3, title: "High-Tensile TMT Steel Binding", description: "Fe 550D rebar placement with certified cover blocks and chair supports." },
      { step: 4, title: "Controlled Automated Concrete Pour", description: "Continuous pumping with high-frequency immersion vibrators to eliminate voids." },
      { step: 5, title: "Regulated Curing & Strength Verification", description: "Membrane curing or ponding for 14+ days, followed by rebound hammer tests." }
    ],
    equipmentUsed: [
      "Stationary & Truck-Mounted Concrete Boom Placers",
      "High-Frequency Electric & Pneumatic Needle Vibrators",
      "Heavy-Duty Steel & Plywood Shuttering Systems",
      "Rebar Bending & Cutting Automated Machines"
    ],
    featuredProjectsSlugs: ["coastal-commercial-plaza-kakinada", "heavy-rcc-retaining-infrastructure"]
  }
];
