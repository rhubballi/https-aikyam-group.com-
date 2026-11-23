export type ProjectCategory = 
  | 'infrastructure'
  | 'railways'
  | 'industrial'
  | 'commercial'
  | 'residential'
  | 'renovation'
  | 'roads'
  | 'pipelines'
  | 'rcc-works'
  | 'building';

export type ProjectStatus = 'completed' | 'ongoing' | 'tender';

export interface MachineryItem {
  id: string;
  name: string;
  category: 'concreting' | 'earthmoving' | 'road' | 'lifting';
  categoryLabel: string;
  capacity: string;
  unitsCount: number;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  principalContractor?: string;
  location: string;
  state: string;
  year: string;
  completionDate?: string;
  status: ProjectStatus;
  isVerified: boolean; // true for actual verified works of JP Constructions (Kakinada / AP)
  isFeatured: boolean;
  heroImage: string;
  galleryImages: string[];
  scopeOfWork: string[];
  engineeringHighlights: string[];
  specs: ProjectSpec[];
  testimonialSnippet?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  heroImage: string;
  iconName: string;
  scopeOfWork: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  equipmentUsed: string[];
  featuredProjectsSlugs: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experienceYears: number;
  bio: string;
  specialization: string;
  image: string;
  isLeadership: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  projectTitle: string;
  comment: string;
  rating: number;
  year: string;
  verifiedPartner: boolean;
}

export interface QuoteRequest {
  id: string;
  referenceNo: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  projectLocation: string;
  approximateBudget: string;
  timeline?: string;
  projectDescription: string;
  status: 'new' | 'reviewing' | 'contacted' | 'quoted' | 'closed';
  createdAt: string;
  adminNotes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'resolved';
}

export interface CompanyStats {
  yearsInOperation: number;
  majorBridgesSpans: number;
  majorProjectsCompleted: number;
  safetyCompliancePercentage: number;
  workforceStrength: number;
}
