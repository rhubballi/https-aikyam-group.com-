import { Project } from '../types';

export const initialProjects: Project[] = [
  {
    id: "penna-river-bridge-nellore",
    slug: "penna-river-bridge-nellore",
    title: "Penna River Major Bridge (33 Spans)",
    shortDescription: "A monumental 740.61-meter multi-span river bridge across the turbulent Penna River in Nellore, executed in a record 18-month timeline.",
    fullDescription: "Constructed across the Penna River near Nellore, this major bridge structure is a flagship civil engineering milestone for JP Constructions. Comprising 33 continuous spans totaling 740.61 meters in length, the project demanded deep well sinking into riverbed strata, high-strength prestressed concrete girder fabrication, and rapid casting cycles to withstand monsoon water discharges. The entire project was completed in a record 18 months under strict safety standards.",
    category: "infrastructure",
    categoryLabel: "Major River Bridge",
    client: "South Central Railway / RVNL",
    principalContractor: "JP Constructions (Main Civil Contractor)",
    location: "Nellore",
    state: "Andhra Pradesh",
    year: "2019",
    completionDate: "October 2019",
    status: "completed",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Deep well sinking and pneumatic caisson foundations in heavy sand and gravel riverbed",
      "Substructure construction for 32 monolithic piers and 2 robust abutments",
      "Casting and post-tensioning of 33 spans of high-grade prestressed concrete (PSC) girders",
      "Fabrication and installation of specialized elastomeric and POT-PTFE bridge bearings",
      "Concrete deck slab wearing coat, drainage spouts, and heavy crash barriers"
    ],
    engineeringHighlights: [
      "Delivered ahead of schedule within 18 months, beating monsoon cutoff targets",
      "Total linear bridge length of 740.61 meters across 33 balanced spans",
      "High-grade M45 and M50 self-compacting concrete formulations to resist water salinity",
      "Zero lost-time injury (LTI) across over 600,000 man-hours of heavy construction"
    ],
    specs: [
      { label: "Total Length", value: "740.61 Meters" },
      { label: "Number of Spans", value: "33 Spans" },
      { label: "Execution Time", value: "Record 18 Months" },
      { label: "Foundation Type", value: "Deep Well / Caisson Sinking" },
      { label: "Superstructure", value: "Prestressed Concrete (PSC) Girders" },
      { label: "Concrete Grade", value: "M45 / M50 High Performance" }
    ],
    testimonialSnippet: "Completing 33 spans within a stringent 18-month window with spotless safety on a challenging riverbed is an exemplary benchmark."
  },
  {
    id: "doddajala-railway-box-girder-bridge",
    slug: "doddajala-railway-box-girder-bridge",
    title: "NH-7 Doddajala PSC Box Girder Railway Over Bridge",
    shortDescription: "A milestone 96-meter (2 x 47.96m) Prestressed Concrete Box Girder bridge across active rail tracks for the NH-7 6-Lane highway corridor in Bangalore North.",
    fullDescription: "Constructed at the Doddajala Railway Crossing as part of the prestigious NH-7 Six-Lane Widening Corridor in Bangalore North, this project represents one of the longest continuous span prestressed box girder bridges in the South Western Railway network. Engineered with an open foundation system and continuous cast-in-place cantilever box girder construction, JP Constructions executed this high-clearance structure without interrupting daily passenger and freight train operations.",
    category: "infrastructure",
    categoryLabel: "Highway & Railway Bridge",
    client: "South Western Railways / NHAI",
    principalContractor: "JP Constructions (Specialized Bridge Contractor)",
    location: "Doddajala, Bangalore North",
    state: "Karnataka",
    year: "2005 - 2006",
    completionDate: "December 2005",
    status: "completed",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Heavy open foundation excavations in rocky strata adjacent to live railway tracks",
      "High-clearance RCC piers and pier tables with specialized cantilever shuttering",
      "Post-tensioned Prestressed Concrete (PSC) continuous hollow box girder superstructure",
      "Multi-strand tendon threading, precision stress calibration, and vacuum grouting",
      "Approach embankments, RE wall integration, and heavy crash barriers for 6-lane traffic"
    ],
    engineeringHighlights: [
      "2 x 47.96 meters (95.92m total span) marking the longest span bridge in SWR division at completion",
      "Seamless railway clearance coordination with zero train delays during launching",
      "Precision deflection control conforming to strict international highway vibration codes"
    ],
    specs: [
      { label: "Span Configuration", value: "2 x 47.96 Meters (96m Total)" },
      { label: "Structure Type", value: "Continuous PSC Box Girder" },
      { label: "Corridor", value: "NH-7 Six-Lane Highway Expansion" },
      { label: "Foundation", value: "Heavy Rock Open Foundation" },
      { label: "Prestressing System", value: "High-Tensile Low-Relaxation Multi-Strand" },
      { label: "Railway Authority", value: "South Western Railway (Bangalore Div)" }
    ],
    testimonialSnippet: "The 2 x 47.96m prestressed concrete box girder bridge at Doddajala stands as one of the longest and finest spans in our network."
  },
  {
    id: "gudur-bitragunta-3rd-line-ror",
    slug: "gudur-bitragunta-3rd-line-ror",
    title: "Gudur – Bitragunta 3rd Line Rail Over Rail (ROR) & Major Bridges",
    shortDescription: "Crucial grade-separated Rail Over Rail (ROR) structure and major bridges for the provision of a dedicated 3rd railway line in Vijayawada Division.",
    fullDescription: "A critical national infrastructure project under Rail Vikas Nigam Limited (RVNL) and principal contractor KEC International Ltd. Located in the Vijayawada Division of South Central Railway, the project involves constructing a complex Rail-Over-Rail (ROR) grade separator along with multiple major bridge structures to accommodate the high-density 3rd freight and passenger railway line. Execution requires micro-phased engineering within live track corridors.",
    category: "railways",
    categoryLabel: "Railway Corridors & ROR",
    client: "South Central Railway / RVNL",
    principalContractor: "KEC International Ltd. / JP Constructions",
    location: "Gudur to Bitragunta",
    state: "Andhra Pradesh",
    year: "2020 - Active",
    completionDate: "Target 2026",
    status: "ongoing",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Design and execution of Rail Over Rail (ROR) grade-separated crossing at Gudur junction",
      "Construction of multiple major bridge sub-structures and composite steel/PSC superstructures",
      "Deep cast-in-situ bored piling and pile cap construction amidst active rail traffic",
      "Earthwork in formation, heavy blanketing layer, and slope protection works",
      "Subway box pushing (RUB) and minor culvert extensions along the 3rd line alignment"
    ],
    engineeringHighlights: [
      "Complex geometric curvature and vertical grade design to enable flyover track separation",
      "Zero disruption to the high-density Howrah-Chennai main trunk line operations",
      "Robust environmental protection for water crossings and local canals"
    ],
    specs: [
      { label: "Corridor Segment", value: "Gudur to Bitragunta (3rd Line)" },
      { label: "Key Structure", value: "Rail Over Rail (ROR) Flyover" },
      { label: "Employer", value: "Rail Vikas Nigam Limited (RVNL)" },
      { label: "Executing Division", value: "Vijayawada Division (SCR)" },
      { label: "Foundation", value: "Large Diameter Bored Piles (1200mm)" },
      { label: "Status", value: "Active Construction" }
    ],
    testimonialSnippet: "Crucial grade-separated crossing that untangles major freight bottlenecks on the East Coast railway trunk."
  },
  {
    id: "villupuram-mayiladuthurai-10-river-bridges",
    slug: "villupuram-mayiladuthurai-10-river-bridges",
    title: "Villupuram – Mayiladuthurai 10 Major River Bridges",
    shortDescription: "A tour-de-force engineering delivery: 10 major river bridges constructed across tidal and river crossings in Tamil Nadu within a record 18-month window.",
    fullDescription: "As part of the Southern Railway gauge conversion initiative from Villupuram to Mayiladuthurai in Tamil Nadu, JP Constructions was nominated as the specialized sub-contractor under Tata Projects Limited for RVNL. The mandate was formidable: reconstruct and deliver 10 major river bridges (including bridges 590, 606, 612, 614, 622, 672, 687, 691, 711, 724, and 756) within 18 months. Overcoming intense monsoon deluges and river surges, the entire package was commissioned on schedule.",
    category: "infrastructure",
    categoryLabel: "Major River Bridges",
    client: "Southern Railway / RVNL",
    principalContractor: "Tata Projects Limited / JP Constructions",
    location: "Villupuram – Mayiladuthurai Section",
    state: "Tamil Nadu",
    year: "2009",
    completionDate: "November 2009",
    status: "completed",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Reconstruction and expansion of 10 major river crossing bridges under gauge conversion",
      "Deep well caissons and steining works in sandy alluvium river beds",
      "Mass concrete pier and abutment casting with custom steel formwork",
      "Precast PSC girder manufacturing in centralized casting yards and transport to site",
      "Heavy gantry launching and bearing seatings across 10 distinct river locations concurrently"
    ],
    engineeringHighlights: [
      "10 independent river bridge sites managed simultaneously under a unified logistics hub",
      "Total execution timeline restricted to just 18 months without a single day of schedule overrun",
      "Commended by Tata Projects and Southern Railway for outstanding velocity and structural rigor"
    ],
    specs: [
      { label: "Bridges Completed", value: "10 Major River Bridges" },
      { label: "Bridge Numbers", value: "Br. 590, 606, 612, 614, 622, 672, 687, 691, 711, 724, 756" },
      { label: "Timeline", value: "Strict 18 Months Window" },
      { label: "Project Employer", value: "RVNL / Southern Railway" },
      { label: "Lead Contractor", value: "Tata Projects Limited" },
      { label: "Structural Code", value: "IRS Concrete Bridge Code" }
    ],
    testimonialSnippet: "Delivering ten major river bridge structures within 18 months required relentless scheduling and flawless technical precision."
  },
  {
    id: "modernization-st-workshop-podanur",
    slug: "modernization-st-workshop-podanur",
    title: "Modernization of Signal & Telecom (S&T) Workshop — Podanur",
    shortDescription: "Complete modernization of Southern Railway's historic S&T engineering workshop, including fabrication bays, RCC overhead tanks, and internal arterial roads.",
    fullDescription: "Undertaken for Rail Vikas Nigam Limited (RVNL) at the historic Podanur railway hub near Coimbatore, this modernization initiative upgrades critical railway signal engineering infrastructure. JP Constructions' scope encompasses modernizing the primary fabrication shop, constructing an additional floor in the printed circuit (PC) shop, building a heavy-capacity RCC Overhead Tank (OHT), a Ground Level Reservoir (GLR), and laying heavy-duty bituminous internal transport roads.",
    category: "industrial",
    categoryLabel: "Industrial Facility & Workshops",
    client: "Southern Railway / RVNL",
    principalContractor: "JP Constructions",
    location: "Podanur, Coimbatore",
    state: "Tamil Nadu",
    year: "2021 - Active",
    completionDate: "Target 2026",
    status: "ongoing",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Modernization and structural re-engineering of the heavy fabrication shop bays",
      "Construction of an additional floor and structural reinforcement in the PC electronics workshop",
      "Engineering and casting of a heavy elevated RCC Overhead Water Tank (OHT)",
      "Construction of a high-volume underground Ground Level Reservoir (GLR) for water security",
      "Comprehensive renewal of industrial asphaltic and bituminous road surfaces for heavy tractor trailers"
    ],
    engineeringHighlights: [
      "Executing retrofitting and expansion works inside a fully operational railway manufacturing workshop",
      "Heavy load bearing floors designed to support CNC machinery and signal gear assembly lines",
      "Integration of industrial storm water harvesting systems"
    ],
    specs: [
      { label: "Location", value: "Podanur (Coimbatore), Tamil Nadu" },
      { label: "Employer", value: "RVNL / Southern Railway" },
      { label: "Core Scope", value: "Fabrication Bays, PC Shop Expansion, OHT & GLR" },
      { label: "Water Storage", value: "RCC Overhead Tank & Ground Reservoir" },
      { label: "Road Network", value: "Heavy-Duty Bituminous Industrial Roads" },
      { label: "Status", value: "In Progress" }
    ],
    testimonialSnippet: "Modernizing our century-old signal manufacturing complex while keeping live lines operational requires top-tier civil agility."
  },
  {
    id: "rinl-visakhapatnam-industrial-packages",
    slug: "rinl-visakhapatnam-industrial-packages",
    title: "RINL Visakhapatnam Heavy Civil & Water Infrastructure",
    shortDescription: "Heavy machine foundations, industrial water retention structures, and civil works within the Visakhapatnam Steel Plant complex.",
    fullDescription: "Executed for Rashtriya Ispat Nigam Limited (RINL) in partnership with Tata Projects Limited at the Visakhapatnam Steel Plant, this project involved demanding heavy civil packages. JP Constructions built massive RCC machine foundations designed to absorb continuous heavy dynamic vibrations, cooling water transfer culverts, and heavy-duty industrial pavements.",
    category: "industrial",
    categoryLabel: "Industrial Heavy Engineering",
    client: "RINL (Vizag Steel) / Tata Projects",
    principalContractor: "Tata Projects / JP Constructions",
    location: "Visakhapatnam",
    state: "Andhra Pradesh",
    year: "Completed",
    completionDate: "Completed",
    status: "completed",
    isVerified: true,
    isFeatured: false,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "High-density mass concrete pours for heavy mill equipment foundations",
      "Vibration isolation trenches and elastomer damping pads installation",
      "Underground industrial process water recirculation channels and culverts",
      "Structural steel column encasements and industrial floor slab hardeners"
    ],
    engineeringHighlights: [
      "Resistant to high chemical corrosion and heavy thermal cycling",
      "Zero cold-joint continuous mass concrete casting technology"
    ],
    specs: [
      { label: "Location", value: "Visakhapatnam Steel Plant, AP" },
      { label: "Client", value: "RINL / Tata Projects" },
      { label: "Concrete Grade", value: "M40 High Density Controlled Permeability" },
      { label: "Execution Standard", value: "Heavy Industrial Plant Spec" }
    ]
  },
  {
    id: "coastal-commercial-plaza-kakinada",
    slug: "coastal-commercial-plaza-kakinada",
    title: "Coastal Commercial & Corporate Plaza",
    shortDescription: "A modern 8-storey corporate and commercial retail development featuring high-performance glass facades and open-span floorplates.",
    fullDescription: "Representing JP Constructions' commercial capabilities in Andhra Pradesh's coastal corridor, this corporate plaza features an 8-storey reinforced concrete frame with double-basement automated parking. Designed with post-tensioned slabs to eliminate interior columns, the building delivers maximum leasable space, solar glazed curtain walls, and state-of-the-art building management systems.",
    category: "commercial",
    categoryLabel: "Commercial Development",
    client: "Private Corporate Group (Configurable Demo Model)",
    principalContractor: "JP Constructions",
    location: "Kakinada",
    state: "Andhra Pradesh",
    year: "2023",
    completionDate: "December 2023",
    status: "completed",
    isVerified: false, // Configurable Demo Data to showcase Commercial capabilities
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Twin basement diaphragm wall shoring and high-capacity raft foundation",
      "Post-tensioned flat slab structural framing allowing 12-meter clear spans",
      "Unitized structural glazing façade with thermal acoustic double glazing",
      "Turnkey MEP including VRV air-conditioning and 100% generator power backup"
    ],
    engineeringHighlights: [
      "Seismic Zone III compliant frame with ductility detailing",
      "LEED Gold certified energy efficiency envelope"
    ],
    specs: [
      { label: "Total Built-Up Area", value: "145,000 Sq.Ft." },
      { label: "Floors", value: "2 Basements + G + 7 Upper Floors" },
      { label: "Structural Grid", value: "12m x 10m Column-Free Spans" },
      { label: "Classification", value: "Commercial Grade-A" }
    ]
  },
  {
    id: "emerald-heights-residential-enclave",
    slug: "emerald-heights-residential-enclave",
    title: "Emerald Heights Luxury Residential Enclave",
    shortDescription: "Gated luxury residential villa and apartment enclave featuring monolithic shear wall construction, infinity clubhouses, and green landscaping.",
    fullDescription: "Demonstrating our residential construction engineering, Emerald Heights is a premier residential enclave comprising bespoke multi-level villas and premium residential blocks. Featuring monolithic aluminum formwork casting, superior acoustic insulation, and multi-layer structural waterproofing, each residence is built for lasting comfort and generational durability.",
    category: "residential",
    categoryLabel: "Residential Enclave",
    client: "Private Real Estate Syndicate (Configurable Demo Model)",
    principalContractor: "JP Constructions",
    location: "East Coast Corridor",
    state: "Andhra Pradesh",
    year: "2024",
    completionDate: "Target 2026",
    status: "ongoing",
    isVerified: false, // Configurable Demo Data
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Earthquake resistant shear-wall monolithic concrete superstructure",
      "Bespoke Italian marble flooring and premium stone facade cladding",
      "Centralized rainwater harvesting and decentralized solar power grids",
      "Clubhouse civil works including cantilevered infinity pool"
    ],
    engineeringHighlights: [
      "Mivan shuttering cycles achieving a 7-day floor turnaround",
      "Advanced sound-attenuating blockwork partitions"
    ],
    specs: [
      { label: "Configuration", value: "48 Luxury Villas + Central Clubhouse" },
      { label: "Construction Technology", value: "Monolithic Aluminum Formwork" },
      { label: "Energy Rating", value: "IGBC Green Homes Gold" },
      { label: "Warranty", value: "10-Year Structural Guarantee" }
    ]
  },
  {
    id: "highway-viaduct-retrofitting",
    slug: "highway-viaduct-retrofitting",
    title: "Regional Highway Viaduct Deck Rehabilitation & Retrofitting",
    shortDescription: "Structural health remediation, carbon-fiber composite strengthening, bearing replacements, and deck resurfacing under live traffic conditions.",
    fullDescription: "Showcasing JP Constructions' renovation and rehabilitation engineering, this project involved structural strengthening of aged highway viaduct spans. Utilizing non-destructive ultrasonic testing, our engineering crews hydro-demolished carbonated concrete, installed sacrificial galvanic zinc anodes, wrapped critical girders in Carbon Fiber Reinforced Polymer (CFRP), and replaced seized bearings using heavy hydraulic synchronization jacks.",
    category: "renovation",
    categoryLabel: "Rehabilitation & Retrofitting",
    client: "State Road Development Authority (Configurable Demo Model)",
    principalContractor: "JP Constructions",
    location: "Highway Corridor",
    state: "Andhra Pradesh",
    year: "2024",
    completionDate: "August 2024",
    status: "completed",
    isVerified: false, // Configurable Demo Data
    isFeatured: false,
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Synchronized multi-point hydraulic jacking of 400-ton bridge spans",
      "Extraction and replacement of worn rocker-roller bearings with modern POT-PTFE bearings",
      "High-modulus carbon fiber (CFRP) composite bonding on tensile zones",
      "Polymer modified micro-concrete recasting and expansion joint renewal"
    ],
    engineeringHighlights: [
      "Spans jacked up precisely by 8mm under controlled load monitoring without traffic closure",
      "Extended operational design life by an estimated 30 additional years"
    ],
    specs: [
      { label: "Structure Type", value: "Continuous RCC Highway Viaduct" },
      { label: "Strengthening Tech", value: "CFRP Wrapping + Micro-Concrete Jacketing" },
      { label: "Jacking System", value: "Synchronous Multi-Port Hydraulic Jacks" },
      { label: "Life Extension", value: "30+ Years Projected" }
    ]
  },
  {
    id: "nh-7-six-lane-highway-corridor",
    slug: "nh-7-six-lane-highway-corridor",
    title: "NH-7 Six-Lane Highway Expansion & Rigid Pavement Works",
    shortDescription: "Heavy PQC rigid concrete road construction, earthwork formations, grade-separated intersections, and stormwater cross-drainage culverts.",
    fullDescription: "Demonstrating high-output highway engineering, this roadway package required high-strength Pavement Quality Concrete (PQC) and heavy bituminous asphalt laying for heavy commercial transport corridors. Executed with electronic sensor pavers and 12-ton vibratory compaction fleets, the corridor adheres to rigorous MoRTH and IRC express-corridor standards.",
    category: "roads",
    categoryLabel: "Roads & Highways",
    client: "National Highway Authority / EPC JV",
    principalContractor: "JP Constructions",
    location: "Bangalore North Corridor",
    state: "Karnataka",
    year: "2023",
    completionDate: "December 2023",
    status: "completed",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Subgrade cutting, filling, and heavy mechanical stabilization with 12T vibro rollers",
      "Pavement Quality Concrete (PQC) paving with automatic dowel bar insertion",
      "High-clearance RCC box culverts and roadside stormwater drainage flumes",
      "Bituminous concrete wearing course with anti-skid friction layers",
      "Crash barriers, retro-reflective cautionary signage, and lane demarcations"
    ],
    engineeringHighlights: [
      "High pavement smoothness index with IRI below 1.8 m/km",
      "Executed alongside live traffic flows with zero accidents or vehicle holdups"
    ],
    specs: [
      { label: "Pavement Type", value: "PQC Rigid & Heavy Bituminous" },
      { label: "Corridor Width", value: "6-Lane Dual Carriageway" },
      { label: "Compaction", value: "98%+ Modified Proctor Density" },
      { label: "Design Life", value: "30 Years Heavy Axle Rating" }
    ]
  },
  {
    id: "bulk-water-intake-jackwell-system",
    slug: "bulk-water-intake-jackwell-system",
    title: "Bulk Water Transmission Pipeline & River Intake Jackwell",
    shortDescription: "Deep pneumatic caisson intake jackwell, high-head pumphouse, and 24km large-diameter Ductile Iron (DI) water pipeline network.",
    fullDescription: "Engineering critical water security, this project entailed deep well caisson sinking into riverbed alluvial strata to construct a heavy intake jackwell, an adjoining high-capacity RCC pumphouse, and trenching/laying of 24 kilometers of high-pressure Ductile Iron (DI) transmission mains tested under stringent hydrostatic parameters.",
    category: "pipelines",
    categoryLabel: "Pipelines & Water Infrastructure",
    client: "Municipal Water Board & Industrial Development Corp",
    principalContractor: "JP Constructions",
    location: "Godavari River Basin",
    state: "Andhra Pradesh",
    year: "2024",
    completionDate: "May 2024",
    status: "completed",
    isVerified: true,
    isFeatured: true,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
    ],
    scopeOfWork: [
      "Pneumatic caisson sinking for 12-meter diameter river intake jackwell",
      "Heavy RCC pump floor casting and electrical substation integration",
      "Trenching, bedding, and laying of Class K9 Ductile Iron (DI) pipelines",
      "RCC thrust blocks, sluice valve chambers, and air relief installations",
      "Sectional hydrostatic testing up to 16 kg/cm² pressure"
    ],
    engineeringHighlights: [
      "Jackwell sunken 16 meters below water level with zero tilting or water ingress",
      "100% leak-free clearance across the entire 24 km transmission corridor"
    ],
    specs: [
      { label: "Jackwell Diameter", value: "12.0 Meters RCC Monolithic" },
      { label: "Pipeline Spec", value: "Class K9 Ductile Iron (DI)" },
      { label: "Corridor Length", value: "24 Kilometers" },
      { label: "Test Pressure", value: "16 kg/cm² Hydrostatic" }
    ]
  }
];
