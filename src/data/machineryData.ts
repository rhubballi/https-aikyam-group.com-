import { MachineryItem } from '../types';

export const machineryFleet: MachineryItem[] = [
  {
    id: "batching-plant",
    name: "Automated Concrete Batching Plants",
    category: "concreting",
    categoryLabel: "Concreting & Production",
    capacity: "60 – 90 m³/Hour",
    unitsCount: 4,
    description: "Fully automated microprocessor-controlled batching systems delivering precise M35 to M60 high-performance concrete for bridge piers and prestressed box girders.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Output Capacity", value: "60 – 90 m³/hr" },
      { label: "Control System", value: "SCADA PLC Automated" },
      { label: "Aggregate Storage", value: "4-Bin Compartment" }
    ]
  },
  {
    id: "transit-mixers",
    name: "Heavy Transit Concrete Mixers",
    category: "concreting",
    categoryLabel: "Concreting & Production",
    capacity: "7 – 8 m³ Drum Capacity",
    unitsCount: 12,
    description: "High-mobility truck-mounted concrete transit mixers with GPS tracking to guarantee continuous pour cycles for massive riverbed caissons and deep rafts.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Drum Volume", value: "7 – 8 m³" },
      { label: "Chassis", value: "BharatBenz / Tata Heavy Axle" },
      { label: "Slump Retention", value: "Controlled Hydro Drive" }
    ]
  },
  {
    id: "hydraulic-excavators",
    name: "Heavy Hydraulic Excavators",
    category: "earthmoving",
    categoryLabel: "Earthmoving & Excavation",
    capacity: "20T – 35T Operating Weight",
    unitsCount: 8,
    description: "High-tonnage heavy excavators equipped with rock breakers and deep digging arms for rocky strata riverbeds, highway formations, and pipeline trenching.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Operating Weight", value: "21 – 35 Metric Tons" },
      { label: "Bucket Capacity", value: "1.2 – 1.8 m³" },
      { label: "Attachments", value: "Hydraulic Breaker & Trench Bucket" }
    ]
  },
  {
    id: "sensor-paver",
    name: "Sensor Bitumen & Concrete Road Pavers",
    category: "road",
    categoryLabel: "Road & Pavement",
    capacity: "9m Paving Width",
    unitsCount: 3,
    description: "Electronic sensor-equipped asphalt and concrete highway pavers providing flawless surface leveling and camber accuracy conforming to IRC / MoRTH standards.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Paving Width", value: "2.5m to 9.0m" },
      { label: "Leveling Sensors", value: "Dual Sonic Grade Controls" },
      { label: "Throughput", value: "Up to 600 Tons/Hr" }
    ]
  },
  {
    id: "vibro-rollers",
    name: "Heavy Vibratory Soil & Tandem Rollers",
    category: "road",
    categoryLabel: "Road & Pavement",
    capacity: "12T – 14T Static Weight",
    unitsCount: 6,
    description: "Variable frequency vibratory soil compactors ensuring 98%+ Proctor density compaction for highway sub-bases, railway blanket layers, and embankment formation.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Operating Weight", value: "12 – 14 Metric Tons" },
      { label: "Centrifugal Force", value: "270 kN" },
      { label: "Drum Type", value: "Smooth Drum with Padfoot Shell Option" }
    ]
  },
  {
    id: "launching-gantries",
    name: "Precast Girder Launching Gantries",
    category: "lifting",
    categoryLabel: "Lifting & Launching",
    capacity: "120 – 160 MT Lifting Capacity",
    unitsCount: 2,
    description: "Specialized railway and highway bridge launching truss gantries engineered to erect heavy PSC precast box girders and I-beams over live traffic and river spans.",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Span Clearance", value: "Up to 50 Meters" },
      { label: "Payload Capacity", value: "160 Metric Tons" },
      { label: "Erection Velocity", value: "1 Span / 48 Hours" }
    ]
  },
  {
    id: "mobile-cranes",
    name: "Telescopic & Crawler Mobile Cranes",
    category: "lifting",
    categoryLabel: "Lifting & Launching",
    capacity: "40T – 150T Heavy Lift",
    unitsCount: 5,
    description: "Versatile hydraulic telescopic mobile cranes and rough-terrain crawlers for heavy steel placement, bridge pier shuttering, and railway corridor block work.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Boom Reach", value: "Up to 60 Meters" },
      { label: "Lifting Capacity", value: "40T to 150T" },
      { label: "Safety Systems", value: "Safe Load Indicator (SLI) Integrated" }
    ]
  },
  {
    id: "piling-rigs",
    name: "Hydraulic Rotary Piling Rigs",
    category: "lifting",
    categoryLabel: "Lifting & Launching",
    capacity: "Up to 2.0m Bore Diameter",
    unitsCount: 3,
    description: "Heavy-duty rotary piling machines capable of drilling deep bored cast-in-situ piles through hard granitic and basalt rock strata for bridge abutments.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Max Drilling Depth", value: "45 Meters" },
      { label: "Max Pile Diameter", value: "2,000 mm" },
      { label: "Torque Output", value: "160 kNm" }
    ]
  }
];
