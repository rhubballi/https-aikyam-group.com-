import { CompanyStats, TeamMember, Testimonial } from '../types';

export const companyProfile = {
  name: "JP Constructions",
  legalName: "JP Constructions India",
  establishedYear: 2001,
  tagline: "Building Strong Foundations. Creating Lasting Value.",
  shortDescription: "Specialized civil engineering and infrastructure main contractor with over two decades of excellence in major river bridges, railway corridors, heavy industrial facilities, and turnkey construction across India.",
  longDescription: "Established in 2001, JP Constructions has grown into one of South India's trusted civil engineering and infrastructure contracting firms. Headquartered in Kakinada, Andhra Pradesh, the firm is known for executing mission-critical bridge structures, national highway widenings, railway over rail (ROR) flyovers, and industrial complexes in record timeframes under rigorous safety standards.",
  headquarters: {
    addressLine1: "3-16B-92, Santhi Nagar",
    city: "Kakinada",
    district: "East Godavari District",
    state: "Andhra Pradesh",
    postalCode: "533003",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.485303498967!2d82.23412587515647!3d16.999719383825838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3828383c276b9f%3A0xb35a396263ecae53!2sSanthi%20Nagar%2C%20Kakinada%2C%20Andhra%20Pradesh%20533003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    coordinates: { lat: 16.9997, lng: 82.2341 }
  },
  contact: {
    phone: "+91 90030 38833",
    displayPhone: "+91 90030 38833",
    contactPerson: "Prakash Rao",
    email: "jpc@jpconstructions.in",
    supportEmail: "info@jpconstructions.in",
    whatsappNumber: "919003038833",
    whatsappLink: "https://wa.me/919003038833?text=Hello%20JP%20Constructions,%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project.",
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
    emergencySupport: "24/7 Rapid Response for Rail & Bridge Site Operations"
  },
  operatingLocations: [
    { state: "Andhra Pradesh", hubs: ["Kakinada (HQ)", "Nellore", "Gudur", "Vijayawada", "Visakhapatnam"] },
    { state: "Tamil Nadu", hubs: ["Villupuram", "Mayiladuthurai", "Podanur", "Coimbatore", "Chennai"] },
    { state: "Karnataka", hubs: ["Bangalore North (Doddajala)", "South Western Railway Division"] },
    { state: "Telangana & Pan-India", hubs: ["Infrastructure corridors under RVNL & DFCC"] }
  ],
  verifiedClients: [
    { name: "Rail Vikas Nigam Limited", shortName: "RVNL", category: "Govt of India Enterprise", logoUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80" },
    { name: "Tata Projects Limited", shortName: "TATA PROJECTS", category: "EPC Conglomerate", logoUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80" },
    { name: "Larsen & Toubro", shortName: "L&T", category: "Infrastructure Giant", logoUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80" },
    { name: "KEC International Ltd.", shortName: "KEC", category: "Global Infrastructure EPC", logoUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80" },
    { name: "South Central Railway", shortName: "SCR", category: "Indian Railways", logoUrl: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=300&q=80" },
    { name: "Southern Railway", shortName: "SR", category: "Indian Railways", logoUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80" },
    { name: "South Western Railway", shortName: "SWR", category: "Indian Railways", logoUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=300&q=80" },
    { name: "Gayatri Projects Limited", shortName: "GPL", category: "Civil Engineering JV", logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80" },
    { name: "Dedicated Freight Corridor", shortName: "DFCCIL", category: "Special Freight Corridors", logoUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80" },
    { name: "GVPR Engineers Limited", shortName: "GVPR", category: "Heavy Infrastructure", logoUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80" }
  ]
};

export const verifiedStats: CompanyStats = {
  yearsInOperation: 23,
  majorBridgesSpans: 54,
  majorProjectsCompleted: 38,
  safetyCompliancePercentage: 100,
  workforceStrength: 450
};

export const constructionWorkflow = [
  {
    step: 1,
    title: "Initial Consultation & Scope Analysis",
    subtitle: "Understanding Requirements",
    description: "In-depth review of client engineering tenders, site parameters, geotechnical surveys, and operational deliverables to formulate a robust execution framework.",
    timeline: "Week 1 - 2",
    deliverables: ["Scope Definition Report", "Risk Identification Matrix", "Preliminary Feasibility"]
  },
  {
    step: 2,
    title: "Geotechnical & Site Assessment",
    subtitle: "Precision Ground Validation",
    description: "Detailed topometric surveying, soil strata bore tests, river hydrology modeling, and railway/traffic corridor clearance mapping.",
    timeline: "Week 2 - 4",
    deliverables: ["Soil Strata Profiling", "Hydrological Discharge Data", "Statutory Clearance Checklist"]
  },
  {
    step: 3,
    title: "Structural Engineering & Estimation",
    subtitle: "Value Engineering & Costing",
    description: "Rigorous estimation based on Indian Standard (IS/IRC/IRS) codes, BOQ detailing, material procurement scheduling, and optimized life-cycle budgeting.",
    timeline: "Week 4 - 6",
    deliverables: ["Comprehensive BOQ", "Milestone Cost Breakdown", "Procurement & Quality Plan"]
  },
  {
    step: 4,
    title: "Design Validation & Statutory Approvals",
    subtitle: "Authority Concurrence",
    description: "Detailed general arrangement drawings (GAD) submission, proof checking by premier institutes (IIT/NIT), and railway/highway commissioner approvals.",
    timeline: "Prior to Groundbreak",
    deliverables: ["Approved GAD Drawings", "Railway Safety Commissioner Clearance", "Structural Proof Certificates"]
  },
  {
    step: 5,
    title: "Heavy Project Execution & Logistics",
    subtitle: "Precision Engineering on Site",
    description: "Deployment of specialized hydraulic piling rigs, batching plants, girder launching cranes, and dedicated quality engineers working under strict safety regimes.",
    timeline: "Scheduled Milestone Phases",
    deliverables: ["Daily Progress Logs (DPR)", "Cube Test Results", "Weld & Ultrasonic Inspection Reports"]
  },
  {
    step: 6,
    title: "Multi-Tier Quality Inspection & Load Testing",
    subtitle: "Zero-Defect Standards",
    description: "Non-destructive testing (NDT), load deflection analysis on bridge spans, core testing, and third-party inspection sign-offs.",
    timeline: "Pre-Commissioning",
    deliverables: ["Load Test Deflection Charts", "Third-Party Quality Audit", "Safety Sign-off Certificate"]
  },
  {
    step: 7,
    title: "Commissioning, Handover & Lifecycle Support",
    subtitle: "Permanent Value Delivery",
    description: "Formal project handover with comprehensive as-built drawings, maintenance manuals, structural warranty dossiers, and ongoing defect-liability monitoring.",
    timeline: "Commissioning Milestone",
    deliverables: ["As-Built CAD Dossier", "Operation & Maintenance Manual", "Completion Certificate"]
  }
];

export const leadershipTeam: TeamMember[] = [
  {
    id: "prakash-rao",
    name: "Prakash Rao",
    role: "Managing Director & Chief Project Director",
    qualification: "B.Tech (Civil Engineering), M.E. (Structural)",
    experienceYears: 26,
    bio: "Prakash Rao has steered JP Constructions since its formative years, building a stellar reputation in major river bridge construction, pre-stressed concrete technology, and public-sector railway contracting. His technical leadership delivered the 10 River Bridges on the Villupuram–Mayiladuthurai line in record 18 months.",
    specialization: "Bridge Engineering, Heavy PSC Girders & Railway Corridors",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    isLeadership: true
  },
  {
    id: "k-venkat-satyanarayana",
    name: "K. Venkat Satyanarayana",
    role: "Chief Structural Engineer & Technical Head",
    qualification: "M.Tech (Structural Engineering), F.I.E.",
    experienceYears: 22,
    bio: "Specializing in deep caisson foundations, PSC box girder casting, and dynamic seismic design. He oversees technical compliance across all major RVNL and South Central Railway contracts.",
    specialization: "Structural Analysis, Foundation Geotechnics & Box Girder Launching",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    isLeadership: true
  },
  {
    id: "m-suresh-kumar",
    name: "M. Suresh Kumar",
    role: "General Manager — Heavy Plant & Execution",
    qualification: "B.E. (Mechanical & Construction Machinery)",
    experienceYears: 19,
    bio: "Manages JP Constructions' extensive plant machinery fleet, batching systems, launching gantries, and automated shuttering logistics, ensuring round-the-clock site availability.",
    specialization: "Heavy Machinery Logistics, Launching Gantries & Batching Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    isLeadership: true
  },
  {
    id: "r-anand-murthy",
    name: "R. Anand Murthy",
    role: "Head of Safety (HSE) & Quality Assurance",
    qualification: "B.Tech (Civil), NEBOSH Certified, Lead Auditor ISO 9001",
    experienceYears: 17,
    bio: "Enforces zero-compromise safety protocols across active railway lines and high-altitude bridge decks. Maintained a 100% safety record across all multi-span bridge contracts.",
    specialization: "HSE Compliance, Railway Trackside Safety & Quality Control",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    isLeadership: false
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: "rvnl-testimonial-1",
    clientName: "Executive Engineer (Civil)",
    role: "Senior Engineering Directorate",
    organization: "Rail Vikas Nigam Limited (RVNL)",
    projectTitle: "Penna River Bridge (740.61m / 33 Spans)",
    comment: "JP Constructions exhibited exceptional engineering agility and resource discipline during the execution of the Penna River Bridge in Nellore. Completing 33 spans within a stringent 18-month window with spotless safety on a challenging riverbed is an exemplary benchmark.",
    rating: 5,
    year: "2019",
    verifiedPartner: true
  },
  {
    id: "tata-projects-testimonial-2",
    clientName: "Project Directorate",
    role: "Infrastructure Business Unit",
    organization: "Tata Projects Limited",
    projectTitle: "Villupuram – Mayiladuthurai 10 Major River Bridges",
    comment: "Working with JP Constructions as nominated sub-contractors on the Southern Railway gauge conversion was a seamless experience. Delivering ten major river bridge structures within 18 months required relentless scheduling and flawless technical precision.",
    rating: 5,
    year: "2010",
    verifiedPartner: true
  },
  {
    id: "swr-testimonial-3",
    clientName: "Chief Engineer (Construction)",
    role: "Bridges & Works Division",
    organization: "South Western Railways",
    projectTitle: "NH-7 Six Lane Widening Doddajala Box Girder Bridge",
    comment: "The 2 x 47.96m prestressed concrete box girder bridge at Doddajala Railway Crossing stands as one of the longest spans in our network. JP Constructions' meticulous execution without disrupting traffic flow earned high praise from both highway and rail authorities.",
    rating: 5,
    year: "2006",
    verifiedPartner: true
  }
];
