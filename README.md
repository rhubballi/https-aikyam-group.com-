# JP CONSTRUCTIONS INDIA — Official Website

> **"Building Strong Foundations. Creating Lasting Value."**  
> Established in 2001 • Headquartered in Kakinada, East Godavari District, Andhra Pradesh, India.

A premium, modern, responsive and fully functional web application engineered for **JP Constructions India** — a premier civil engineering and infrastructure main contractor with over two decades of experience executing major river bridges, prestressed concrete box girders, active railway corridors (RVNL, Southern Railway, South Central Railway, South Western Railway), heavy industrial workshops, and commercial complexes.

---

## 🏗️ 1. Company Profile & Verified Credentials

* **Company Name:** JP Constructions (JP Constructions India)
* **Founded:** 2001 (Over 23 years of continuous operation)
* **Headquarters:** 3-16B-92, Santhi Nagar, Kakinada - 533003, East Godavari District, Andhra Pradesh, India
* **Leadership / Key Contact:** Prakash Rao (+91 90030 38833)
* **Official Email:** `jpc@jpconstructions.in`
* **WhatsApp Direct:** [+91 90030 38833](https://wa.me/919003038833)
* **Key Clients & Principal Partners:**
  * **Rail Vikas Nigam Limited (RVNL)**
  * **Tata Projects Limited**
  * **Larsen & Toubro (L&T)**
  * **KEC International Ltd.**
  * **Dedicated Freight Corridor Corporation (DFCCIL)**
  * **South Central Railway (SCR)**, **Southern Railway (SR)**, **South Western Railway (SWR)**
  * **Gayatri Projects Limited (GPL)**, **GVPR Engineers Limited**

### Verified Flagship Projects:
1. **Penna River Major Bridge (Nellore, AP):** 33 continuous spans, 740.61 meters total length, completed in a record 18 months under strict safety standards (2019).
2. **NH-7 Doddajala PSC Box Girder Railway Over Bridge (Bangalore North, KA):** 2 x 47.96 m (96 m total span) continuous Prestressed Concrete Box Girder bridge across active rail lines for South Western Railways.
3. **Villupuram to Mayiladuthurai 10 Major River Bridges (TN):** Ten major river bridges completed within an 18-month window for Southern Railway / RVNL / Tata Projects.
4. **Gudur to Bitragunta 3rd Line Rail-Over-Rail (ROR) & Major Bridges (AP):** Dedicated grade-separated railway flyover under live train traffic for South Central Railway / RVNL / KEC International.
5. **Modernization of S&T Workshop (Podanur, TN):** Heavy fabrication shop modernization, PC shop vertical additions, RCC elevated overhead tank (OHT), ground level reservoir (GLR), and heavy bituminous roads for RVNL.
6. **Visakhapatnam Steel Plant (RINL) Heavy Civil Packages (AP):** Heavy machine foundations and water retention structures for Tata Projects.

---

## ⚡ 2. Technology Stack

* **Framework:** React 18 + Vite 6
* **Language:** TypeScript 5.9
* **Styling:** Tailwind CSS 3.4 (Custom luxury construction palette: Slate `#0B1120`, Charcoal `#0F172A`, Amber `#D97706`, Gold `#F59E0B`)
* **Motion & Animations:** Framer Motion 12
* **Icons:** Lucide React
* **Routing:** React Router 7
* **Database & Backend:** Supabase / PostgreSQL with a zero-downtime Local Storage Persistence Adapter
* **SEO & Metadata:** Automated Schema.org JSON-LD (Organization, LocalBusiness, Breadcrumbs), OpenGraph tags, sitemap.xml, robots.txt

---

## 📱 3. Complete Page Directory

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, verified stats, credentials, capabilities, featured projects, 7-step process, testimonials |
| **About Us** | `/about` | Company story from 2001, mission, vision, leadership, equipment fleet, operating locations |
| **Services Overview** | `/services` | Comprehensive overview of all 6 key civil disciplines |
| **Infrastructure & Bridges** | `/services/infrastructure` | Major river bridges, PSC box girders, viaducts, well sinking |
| **Railway Corridors & ROR** | `/services/railways` | Third-line track formations, Rail Over Rail (ROR) flyovers, ROB/RUB |
| **Industrial Workshops** | `/services/industrial` | Heavy fabrication bays, laser-screed floors, RCC overhead reservoirs |
| **Commercial Construction** | `/services/commercial` | High-rise corporate offices, institutional complexes, MEP integration |
| **Residential Construction** | `/services/residential` | Luxury gated enclaves, villas, monolithic shear walls, waterproofing |
| **Renovation & Retrofitting** | `/services/renovation` | CFRP wrapping, bridge deck rehabilitation, synchronized hydraulic jacking |
| **Projects Portfolio** | `/projects` | Live searchable and filterable gallery with category, status, and verified filters |
| **Project Details** | `/projects/:slug` | Engineering case study with hero photo, technical specs, scope, and lightbox gallery |
| **Our Team** | `/team` | Leadership bios, qualifications, engineering divisions, and safety culture |
| **Contact Us** | `/contact` | Verified Kakinada office address, phone, email, Google Maps, working contact form |
| **Request a Quote** | `/quote` | Working tender enquiry builder with validation, budget bands, and reference tracking |
| **Admin Dashboard** | `/admin` | Authenticated management console: enquiries tracker, CSV lead export, project CRUD |

---

## 🚀 4. Getting Started Locally

### Prerequisites
* Node.js v18 or higher (v24 recommended)
* npm, pnpm, or yarn

### Installation
```bash
# 1. Clone or navigate to the project directory
cd C:\Users\ASUS\.gemini\antigravity\scratch\jp-constructions-india

# 2. Install dependencies
pnpm install
# or
npm install

# 3. Start development server
pnpm dev
# or
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🗄️ 5. Supabase & Database Setup

The website works out-of-the-box using an intelligent client adapter. All submitted quotes and projects persist in browser storage. To connect to your real PostgreSQL/Supabase database:

1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor in your Supabase project.
3. Paste and run the entire script found in:
   `supabase/schema.sql`
4. Copy your project credentials into `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```
5. Restart your dev server (`npm run dev`). The admin dashboard will automatically detect **Supabase Live**!

---

## 🔐 6. Admin Portal Access

* **URL:** `/admin`
* **Demo Password:** `admin123` (or click the one-click demo login button on the screen)
* **Features:**
  * View and filter quote requests (`New`, `Reviewing`, `Contacted`, `Quoted`, `Closed`)
  * Add internal review notes to customer inquiries
  * Export leads to CSV for CRM or Excel
  * Manage projects (view, add, delete, toggle verified vs demo badges)
  * View database health & Supabase settings

---

## 🚢 7. Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set Build Command: `npm run build`
4. Set Output Directory: `dist`
5. Add environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if using remote Supabase.

### Deploy to Netlify
1. Create a `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🔒 8. Verification & Accuracy Note

* **Verified Company Works:** Projects marked with the **"Verified Client Work"** badge (Penna River Bridge, Doddajala Box Girder, 10 River Bridges Villupuram, Gudur 3rd line ROR, S&T Workshop Podanur, RINL Vizag packages) reflect verified public and private records of JP Constructions (Kakinada, AP).
* **Configurable Showcase Models:** Conceptual commercial and residential projects in the portfolio are clearly marked with the **"Configurable Showcase"** badge to respect client confidentiality and maintain 100% truth in engineering claims.

---

© 2001–2026 JP Constructions India. All rights reserved.
