/**
 * Suburb landing pages.
 *
 * Every suburb gets its own copy - headline, service intro, spotlight section,
 * CTA and FAQs - so the pages read as genuinely local rather than as the same
 * page with the name swapped out. Add a new entry here and the route, the
 * footer area picker and the sitemap all pick it up automatically.
 */

/** A two-tone heading: the first half renders in ink, the second in brand blue. */
export type SplitHeading = readonly [string, string];

export type Suburb = {
  slug: string;
  name: string;
  postcode: string;
  /** Short region descriptor, e.g. "Adelaide's inner north-west". */
  region: string;
  /** Travel time/distance from the Wingfield workshop, in plain words. */
  distance: string;
  /** URL-safe Google Maps query for the embedded suburb map. */
  mapQuery: string;
  /** Zoom level for the footer map - tighter for metro, wider for regional. */
  mapZoom: number;

  metaTitle: string;
  metaDescription: string;

  heroKicker: string;
  heroTitle: SplitHeading;
  heroLead: string;

  servicesTitle: SplitHeading;
  servicesLead: string;

  spotlight: {
    kicker: string;
    title: SplitHeading;
    body: readonly string[];
    facts: readonly { label: string; value: string }[];
    serves: readonly { title: string; body: string }[];
  };

  whyTitle: SplitHeading;
  whyLead: string;

  ctaTitle: string;
  ctaLead: string;

  faqs: readonly { q: string; a: string }[];

  /** Slugs of neighbouring areas, used for internal linking. */
  nearby: readonly string[];
};

export const SUBURBS: readonly Suburb[] = [
  {
    slug: "wingfield",
    name: "Wingfield",
    postcode: "5013",
    region: "Adelaide's inner north-west industrial belt",
    distance: "Our front gate - we're on Hanson Rd",
    mapQuery: "438-440+Hanson+Rd+Wingfield+SA+5013",
    mapZoom: 14,
    metaTitle:
      "Engineering & Fabrication Wingfield SA | Kingpin Engineering",
    metaDescription:
      "Kingpin Engineering's workshop is at 438-440 Hanson Rd, Wingfield. Concrete agitator drums, skip bins, CNC plasma cutting and heavy repairs, right on your doorstep.",
    heroKicker: "Based in Wingfield SA 5013",
    heroTitle: [
      "Wingfield's Own OEM Concrete Mixer",
      "Manufacturer & Heavy Fabricator",
    ],
    heroLead:
      "Our roller doors open onto Hanson Rd. If you run trucks, bins or plant anywhere in the Wingfield industrial precinct, your fabricator is a two-minute drive away - no freight, no waiting on a shipment, no middleman.",
    servicesTitle: ["What We Build For ", "Wingfield"],
    servicesLead:
      "Four workshops in one, all under a single Wingfield roof. Drive in, describe the job, and walk the floor with the person who will build it.",
    spotlight: {
      kicker: "Local Knowledge",
      title: ["Made In ", "Wingfield"],
      body: [
        "Wingfield is where Adelaide's heavy industry actually happens. Between the waste and recycling centre, the transport yards off Cormack Road and the batching plants feeding the northern suburbs, there is more steel moving through this postcode on any given morning than most of the state sees in a week.",
        "That is exactly why we set up here. Being inside the precinct means a cracked skip bin can be dropped off before smoko and assessed the same morning. It means we can put eyes on a mixer at your yard rather than asking you to trailer it across town. And it means our own supply chain - steel merchants, blasters, transport - all sits within a few kilometres of the bench.",
        "We are not a national chain with a Wingfield postcode on the invoice. We are the workshop on Hanson Rd, and most of our customers could walk here.",
      ],
      facts: [
        { label: "Postcode", value: "SA 5013" },
        { label: "Our address", value: "438-440 Hanson Rd" },
        { label: "Drop-ins", value: "Welcome during workshop hours" },
        { label: "Assessment", value: "Same-day on most walk-ins" },
      ],
      serves: [
        {
          title: "Waste & Recycling Operators",
          body: "Split floors, cracked walls and bent rails on skip and hook-lift bins repaired without waiting on an import container.",
        },
        {
          title: "Transport & Truck Fleets",
          body: "Body modifications, chassis plating, tray builds and ladder racks for the depots that line the precinct.",
        },
        {
          title: "Concrete & Batching",
          body: "Agitator drums built, re-barrelled, balanced and tested a short run from the plants they feed.",
        },
      ],
    },
    whyTitle: ["Your Neighbours On ", "Hanson Road"],
    whyLead:
      "When the workshop is around the corner, quoting stops being a phone game. Wingfield operators can walk the job with us, see the steel, and get a straight answer on scope and timeframe before anything is cut.",
    ctaTitle: "Need It Sorted In Wingfield Today?",
    ctaLead:
      "Drive it in, or we will come to your yard. Either way you get a straight answer on what it takes to fix or build it.",
    faqs: [
      {
        q: "Where exactly is your Wingfield workshop?",
        a: "438-440 Hanson Rd, Wingfield SA 5013. Plenty of hardstand for trucks and trailers, and you can drive a loaded rigid straight in. Come between 8am and 5pm on a weekday or 8am to 12:30pm Saturday.",
      },
      {
        q: "Can I bring a bin or a drum in without booking?",
        a: "Yes. Wingfield locals can drop in during workshop hours and we will look at it there and then. If it is a bigger rebuild we will book it into the schedule while you are standing there.",
      },
      {
        q: "Do you charge freight for Wingfield jobs?",
        a: "No. You are inside the precinct, so there is nothing to add. That is one of the reasons operators up and down Hanson Rd and Cormack Rd use us instead of shipping work interstate.",
      },
    ],
    nearby: ["dry-creek", "port-adelaide", "brompton"],
  },

  {
    slug: "adelaide",
    name: "Adelaide",
    postcode: "5000",
    region: "the Adelaide CBD and inner ring",
    distance: "About 15 minutes from the city on Port Road",
    mapQuery: "Adelaide+SA+5000",
    mapZoom: 13,
    metaTitle:
      "Heavy Fabrication & Engineering Adelaide | Kingpin Engineering",
    metaDescription:
      "Adelaide's OEM concrete mixer manufacturer and custom heavy fabricator. Agitator drums, skip bins, CNC plasma cutting and welding, 15 minutes from the CBD.",
    heroKicker: "Serving Adelaide & the inner ring",
    heroTitle: [
      "Adelaide's Premier OEM Concrete Mixer",
      "Manufacturer & Custom Heavy Fabricator",
    ],
    heroLead:
      "From complete 7m3 to 9m3 AS-compliant concrete agitators and export CKD kits to custom skip bins and heavy CNC plasma processing - engineered in Adelaide, for Adelaide operators.",
    servicesTitle: ["Engineering Services Across ", "Adelaide"],
    servicesLead:
      "One workshop covering the four disciplines most Adelaide businesses have to chase across four different suppliers.",
    spotlight: {
      kicker: "City & Inner Suburbs",
      title: ["Built For ", "Adelaide"],
      body: [
        "Adelaide runs on a tight ring of industry wrapped around a small city. Concrete plants in the north, waste operators to the west, civil contractors working every corridor at once - and almost all of it within half an hour of the CBD. That compactness is an advantage, and we build our turnarounds around it.",
        "Our Wingfield workshop sits fifteen minutes from the GPO on Port Road, which puts us inside the ring rather than out past it. Adelaide contractors get metro pricing without the metro runaround: no interstate freight on a drum, no container minimum on a bin, no three-week wait for a folder big enough to take your plate.",
        "We work for concrete operators, waste and recycling companies, transport fleets, civil and mining contractors and trade businesses right across the Adelaide basin - and we will happily quote a single bracket as readily as a fleet of drums.",
      ],
      facts: [
        { label: "From the CBD", value: "~15 minutes via Port Road" },
        { label: "Workshop", value: "Wingfield SA 5013" },
        { label: "Coverage", value: "Metro Adelaide & regional SA" },
        { label: "Callouts", value: "24/7 for emergency breakdowns" },
      ],
      serves: [
        {
          title: "Concrete & Civil",
          body: "Agitator drums, chutes, subframes and hydraulic repairs for operators supplying Adelaide's build sites.",
        },
        {
          title: "Waste & Recycling",
          body: "Custom skip bins to suit your truck, plus fast repairs that keep bins in the field instead of in a yard.",
        },
        {
          title: "Trades & Manufacturing",
          body: "CNC plasma cutting, folding, steel and aluminium welding for Adelaide workshops and trade businesses.",
        },
      ],
    },
    whyTitle: ["The One Adelaide Workshop ", "That Does The Lot"],
    whyLead:
      "The big concrete OEMs will not touch your skip bin. The bin importers will not roll a spiral blade. Adelaide operators end up managing three suppliers for one truck. We do all of it, under one roof, on one invoice.",
    ctaTitle: "Get Your Free Adelaide Engineering Quote",
    ctaLead:
      "Send drawings, photos or just a description of the problem. We will tell you straight whether we can fix it, build it or improve it.",
    faqs: [
      {
        q: "Do you cover the whole Adelaide metro area?",
        a: "Yes - north, south, east and west, from Gawler down to Sellicks and out to the Hills. Our workshop is at Wingfield, roughly fifteen minutes from the CBD, so most metro jobs are a short run either way.",
      },
      {
        q: "Can you collect from a site in the Adelaide CBD?",
        a: "We can arrange pick-up and delivery for larger items across metro Adelaide. City sites usually need a little planning around access and traffic windows, so give us a call and we will sort the logistics with you.",
      },
      {
        q: "Do you take on small one-off jobs for Adelaide trades?",
        a: "Always. A snapped bracket, a bent frame, a part that needs cutting and folding into something new - no job is too small to ask about. Plenty of our Adelaide customers started with a single repair.",
      },
    ],
    nearby: ["mile-end", "brompton", "port-adelaide"],
  },

  {
    slug: "port-adelaide",
    name: "Port Adelaide",
    postcode: "5015",
    region: "Adelaide's port and marine precinct",
    distance: "About 10 minutes west along Grand Junction Road",
    mapQuery: "Port+Adelaide+SA+5015",
    mapZoom: 13,
    metaTitle:
      "Marine & Heavy Fabrication Port Adelaide | Kingpin Engineering",
    metaDescription:
      "Heavy steel fabrication, welding and CNC plasma cutting for Port Adelaide's wharf, marine and transport operators. Ten minutes from the Port, based at Wingfield.",
    heroKicker: "Serving Port Adelaide & Outer Harbor",
    heroTitle: [
      "Heavy Fabrication & Repairs For",
      "Port Adelaide Operators",
    ],
    heroLead:
      "Wharf plant, container handling gear, tipper bodies and mixer fleets take a beating in a salt-air environment. We build and repair the heavy steel that keeps Port Adelaide moving - ten minutes from the wharf.",
    servicesTitle: ["Fabrication For The ", "Port"],
    servicesLead:
      "Heavy plate work, structural repairs and custom builds for the businesses working the Port Adelaide waterfront and its freight corridors.",
    spotlight: {
      kicker: "Wharf & Waterfront",
      title: ["Steel That Stands Up To ", "The Port"],
      body: [
        "Port Adelaide is South Australia's freight front door. Between Outer Harbor's container terminal, the bulk berths, the Gillman industrial land and the transport yards feeding them, it is a precinct that runs hard on heavy steel - and punishes anything built light.",
        "Salt air, constant loading cycles and 24-hour operations mean equipment down here wears differently to equipment working inland. Coatings matter. Weld preparation matters. Getting a repair done properly the first time matters most of all, because a second failure on a wharf costs more than the original job ever did.",
        "We are ten minutes east along Grand Junction Road, which puts us close enough to assess quickly and turn work around fast. Structural repairs, handling frames, walkways, guarding, tipper and bin bodies, and mixer drums for the concrete work feeding the Port's developments - we cover the lot.",
      ],
      facts: [
        { label: "From the wharf", value: "~10 minutes via Grand Junction Rd" },
        { label: "Postcode", value: "SA 5015" },
        { label: "Environment", value: "Coastal - coatings specified to suit" },
        { label: "Breakdowns", value: "24/7 emergency callout" },
      ],
      serves: [
        {
          title: "Marine & Wharf Operators",
          body: "Structural steel repairs, handling frames, access platforms, walkways and guarding built for a salt-air environment.",
        },
        {
          title: "Freight & Container Transport",
          body: "Trailer and body repairs, chassis plating, hook-lift and tipper bodies for the fleets running Outer Harbor.",
        },
        {
          title: "Industrial & Bulk Handling",
          body: "Hoppers, chutes, liners and wear plate work for the bulk operations along the river and at Gillman.",
        },
      ],
    },
    whyTitle: ["Built For ", "Salt Air & Shift Work"],
    whyLead:
      "Port work does not stop for a repair. We plan Port Adelaide jobs around your operating windows, spec coatings for coastal exposure, and back the work with material certificates and welding procedure documentation where the job calls for it.",
    ctaTitle: "Port Adelaide Breakdown Or Rebuild?",
    ctaLead:
      "Send us a photo of the damage and we will tell you what it takes to get the asset back into service.",
    faqs: [
      {
        q: "Do you work on site at Port Adelaide?",
        a: "For assessments and smaller repairs, yes - we can get to the Port in about ten minutes. Larger rebuilds are better done at the Wingfield workshop where we have the plant, the jigs and the blasting and painting set up.",
      },
      {
        q: "Can you spec coatings for coastal exposure?",
        a: "We do it as standard for Port Adelaide work. Blast back to bare metal, epoxy primer and a topcoat system chosen for the exposure. Salt air will find any shortcut in surface prep, so we do not take any.",
      },
      {
        q: "Do you handle heavy plate for wharf and bulk handling gear?",
        a: "Yes. Our CNC plasma table and press brake handle the thick plate a lot of smaller shops turn away, which is most of what wharf and bulk handling repairs need.",
      },
    ],
    nearby: ["wingfield", "dry-creek", "adelaide"],
  },

  {
    slug: "dry-creek",
    name: "Dry Creek",
    postcode: "5094",
    region: "Adelaide's northern freight corridor",
    distance: "About 5 minutes up Hanson Road",
    mapQuery: "Dry+Creek+SA+5094",
    mapZoom: 14,
    metaTitle:
      "Truck & Trailer Fabrication Dry Creek SA | Kingpin Engineering",
    metaDescription:
      "Five minutes from Dry Creek. Skip bins, tipper bodies, chassis repairs, CNC plasma cutting and mixer drum work for the Port Wakefield Road freight corridor.",
    heroKicker: "Five minutes from Dry Creek SA 5094",
    heroTitle: ["Fabrication & Truck Body Work In", "Dry Creek"],
    heroLead:
      "Dry Creek is a distribution suburb - trucks in, trucks out, all day. When a body, a bin or a drum goes down, the fix needs to happen in hours, not weeks. We are five minutes up the road.",
    servicesTitle: ["What We Do For ", "Dry Creek"],
    servicesLead:
      "Built around freight: fast turnarounds on the bodies, bins and drums that carry Dry Creek's loads.",
    spotlight: {
      kicker: "Freight Corridor",
      title: ["Minutes From ", "Dry Creek"],
      body: [
        "Dry Creek sits on the hinge between Port Wakefield Road, Salisbury Highway and the northern rail corridor - which is why so much of the state's distribution capacity has ended up here. Warehouses, transport depots, the salt fields and a steady stream of B-doubles heading north.",
        "For a freight operation, downtime is the whole cost. A trailer sitting in a yard waiting on a repair is not just a repair bill, it is a missed run and a customer wondering where their load is. That is the reason we set our workshop up five minutes south of you rather than across the city.",
        "Drop a bin, a body or a drum in on the way past. Most Dry Creek jobs get looked at the day they arrive, and we will tell you honestly whether it is a quick plate-and-weld or something that needs a proper rebuild.",
      ],
      facts: [
        { label: "From our workshop", value: "~5 minutes via Hanson Rd" },
        { label: "Postcode", value: "SA 5094" },
        { label: "Best for", value: "Fast-turnaround freight repairs" },
        { label: "Access", value: "Hardstand for B-doubles and trailers" },
      ],
      serves: [
        {
          title: "Distribution & Logistics",
          body: "Trailer repairs, chassis plating, gates, ramps and loading gear for the warehouses along the corridor.",
        },
        {
          title: "Tipper & Bin Fleets",
          body: "Skip bins built to suit your truck, plus split-floor and cracked-wall repairs turned around fast.",
        },
        {
          title: "Plant & Equipment",
          body: "Wear plate, hoppers, chutes and structural repairs for the yards and materials operations nearby.",
        },
      ],
    },
    whyTitle: ["Downtime Is ", "The Real Cost"],
    whyLead:
      "Every Dry Creek job gets scoped before we cut - so you know what it costs and, more importantly, exactly when the asset is back in your yard earning.",
    ctaTitle: "Dry Creek Repair? Bring It Down The Road.",
    ctaLead:
      "Five minutes from your depot to our roller door. Same-day assessment on most drop-ins.",
    faqs: [
      {
        q: "How quickly can you turn around a Dry Creek job?",
        a: "Straightforward repairs - a split floor, a cracked wall, a bent rail - are usually a day or two. We will give you a firm date up front rather than a vague promise, because we know a truck sitting idle is the expensive part.",
      },
      {
        q: "Can you take a B-double or a loaded trailer on site?",
        a: "Yes. We have the hardstand and access for heavy combinations at Hanson Rd, five minutes from Dry Creek.",
      },
      {
        q: "Do you build bins to match an existing Dry Creek fleet?",
        a: "We do it constantly. Send a photo or a drawing of what you already run and we will match dimensions, pin centres and rail profile so the new bin drops onto the same truck.",
      },
    ],
    nearby: ["wingfield", "salisbury", "port-adelaide"],
  },

  {
    slug: "brompton",
    name: "Brompton",
    postcode: "5007",
    region: "Adelaide's inner north-west",
    distance: "About 10 minutes down Port Road",
    mapQuery: "Brompton+SA+5007",
    mapZoom: 15,
    metaTitle:
      "Steel Fabrication & Welding Brompton SA | Kingpin Engineering",
    metaDescription:
      "Custom steel and aluminium fabrication, welding and CNC plasma cutting for Brompton trades and businesses. Ten minutes up Port Road from our Wingfield workshop.",
    heroKicker: "Serving Brompton & the inner north-west",
    heroTitle: ["Custom Steel & Aluminium Fabrication In", "Brompton"],
    heroLead:
      "Brompton has always been a working suburb - and even as the streets change, the trades are still here. Cutting, folding, welding and one-off builds, ten minutes up Port Road.",
    servicesTitle: ["Fabrication For ", "Brompton"],
    servicesLead:
      "The cutting, bending, welding and mending that Brompton's trades, workshops and businesses actually need - without a minimum order.",
    spotlight: {
      kicker: "Inner North-West",
      title: ["A Workshop For ", "Brompton"],
      body: [
        "Brompton wears its industrial history in its brickwork. The old yards and factories along Chief Street and Torrens Road have been giving way to townhouses for years now, but the trades never left - they just got tighter for space and started outsourcing the heavy end of the work.",
        "That is where we fit. If you are running a business out of a Brompton workshop and you need plate cut, steel folded, a frame welded up or an aluminium job done properly, you do not need to own a plasma table and a press brake. You need someone ten minutes away who does.",
        "Small runs, single pieces, prototypes, repairs - we quote them all. No container minimums, no 'we only do fleet work'. Bring a sketch on the back of a docket if that is what you have.",
      ],
      facts: [
        { label: "From our workshop", value: "~10 minutes via Port Road" },
        { label: "Postcode", value: "SA 5007" },
        { label: "Minimum order", value: "None - single pieces welcome" },
        { label: "Bring us", value: "CAD, a drawing or a sketch" },
      ],
      serves: [
        {
          title: "Trades & Small Workshops",
          body: "Brackets, frames, stands, guards and one-off parts cut, folded and welded to your drawing.",
        },
        {
          title: "Builders & Renovators",
          body: "Structural steel, lintels, balustrade frames and custom brackets for Brompton's constant rebuild.",
        },
        {
          title: "Aluminium Work",
          body: "Toolboxes, tanks, steps and trade parts - including the aluminium jobs a lot of shops knock back.",
        },
      ],
    },
    whyTitle: ["No Job Too Small For ", "Brompton"],
    whyLead:
      "Plenty of workshops will not quote a single bracket. We will. It is how most of our long-term Brompton customers started - one small job done properly, then everything after that.",
    ctaTitle: "Got A Brompton Job? Let's Price It.",
    ctaLead:
      "Send a photo, a sketch or a CAD file. You will get a straight quote, not a runaround.",
    faqs: [
      {
        q: "Will you quote a single item for a Brompton trade business?",
        a: "Yes. One bracket, one frame, one repair - we quote it the same as we would a fleet job. No minimum order and no container-load nonsense.",
      },
      {
        q: "I do not have a CAD file. Can you still make it?",
        a: "Absolutely. Bring a drawing, a photo, or the broken original. We have 3D CAD capability in-house, so we can design it, prove it on screen and then cut it.",
      },
      {
        q: "Do you do aluminium as well as steel?",
        a: "Both. Aluminium toolboxes, tanks, steps, brackets and frames are regular work for us - including the jobs other Brompton-area shops turn away.",
      },
    ],
    nearby: ["mile-end", "adelaide", "wingfield"],
  },

  {
    slug: "mile-end",
    name: "Mile End",
    postcode: "5031",
    region: "Adelaide's inner west",
    distance: "About 15 minutes via Port Road",
    mapQuery: "Mile+End+SA+5031",
    mapZoom: 15,
    metaTitle:
      "CNC Plasma Cutting & Fabrication Mile End SA | Kingpin Engineering",
    metaDescription:
      "CNC plasma cutting, folding, welding and custom fabrication for Mile End trades and transport businesses. Fifteen minutes from our Wingfield workshop.",
    heroKicker: "Serving Mile End & the inner west",
    heroTitle: ["CNC Cutting, Folding & Welding For", "Mile End"],
    heroLead:
      "Mile End has been Adelaide's trade and transport quarter for a century. Bring us your CAD file, your drawing or your broken part - we cut, bend and weld the big stuff the small shops send away.",
    servicesTitle: ["Engineering Services In ", "Mile End"],
    servicesLead:
      "Precision plate processing and heavy fabrication for the workshops, depots and trade businesses packed into Adelaide's inner west.",
    spotlight: {
      kicker: "Inner West",
      title: ["Cut & Folded For ", "Mile End"],
      body: [
        "Between Richmond Road, South Road and the rail yards, Mile End packs an extraordinary amount of trade into a small footprint. Transport depots, automotive workshops, steel merchants, engineering shops and the businesses that supply all of them - it is one of the densest working precincts in the state.",
        "Dense also means tight. Mile End premises rarely have room for a plasma table, a press brake and the material handling that goes with them. So the plate work gets outsourced, and the question becomes who can turn it around without holding your job up for a fortnight.",
        "We run CNC plasma cutting and folding for heavy plate in-house at Wingfield, fifteen minutes up Port Road. Send the file, we cut it. No file? Send the part or the sketch and we will model it first.",
      ],
      facts: [
        { label: "From our workshop", value: "~15 minutes via Port Road" },
        { label: "Postcode", value: "SA 5031" },
        { label: "We accept", value: "CAD files, drawings or a sketch" },
        { label: "Capability", value: "Heavy plate cutting and folding" },
      ],
      serves: [
        {
          title: "Engineering & Trade Shops",
          body: "Overflow plate cutting and folding when your own capacity is booked or the plate is too thick.",
        },
        {
          title: "Transport & Automotive",
          body: "Truck body modifications, chassis repairs, tray builds and ladder racks for the inner-west depots.",
        },
        {
          title: "Fabricators & Builders",
          body: "Profile cutting, brackets, gussets and plate packs delivered ready to weld.",
        },
      ],
    },
    whyTitle: ["Overflow Capacity For ", "Mile End Workshops"],
    whyLead:
      "A lot of Mile End businesses use us as the back half of their own shop - we cut and fold, they assemble. Clean cuts, accurate bends, and a turnaround you can actually promise your own customer.",
    ctaTitle: "Send Us Your Mile End Cut List",
    ctaLead:
      "CAD file, DXF, drawing or photo. We will come back with a price and a date.",
    faqs: [
      {
        q: "What file formats do you accept for CNC plasma cutting?",
        a: "Send us a DXF or a CAD file and we can go straight to the table. Engineering drawings and even hand sketches are fine too - we will model it up first and confirm the geometry with you before cutting.",
      },
      {
        q: "How thick a plate can you cut and fold?",
        a: "We are set up for the heavy end of plate work - the thicknesses smaller Mile End shops generally send away. Tell us the material and thickness and we will confirm on the spot.",
      },
      {
        q: "Can you do overflow work for my Mile End workshop?",
        a: "That is a good chunk of what we do. Plenty of inner-west engineering shops send us their profile cutting and folding when their own gear is booked out or the job is outside their range.",
      },
    ],
    nearby: ["brompton", "adelaide", "lonsdale"],
  },

  {
    slug: "elizabeth",
    name: "Elizabeth",
    postcode: "5112",
    region: "Adelaide's northern manufacturing belt",
    distance: "About 25 minutes up Main North Road",
    mapQuery: "Elizabeth+SA+5112",
    mapZoom: 13,
    metaTitle:
      "Heavy Fabrication & Engineering Elizabeth SA | Kingpin Engineering",
    metaDescription:
      "Concrete mixer drums, skip bins, CNC plasma cutting and custom fabrication for Elizabeth and northern Adelaide. Twenty-five minutes from our Wingfield workshop.",
    heroKicker: "Serving Elizabeth & northern Adelaide",
    heroTitle: ["Heavy Engineering & Fabrication For", "Elizabeth"],
    heroLead:
      "Elizabeth knows manufacturing better than most places in Australia. We build to that standard - drums, bins, plate work and repairs, backed by certification and documented welding procedures.",
    servicesTitle: ["Our Services In ", "Elizabeth"],
    servicesLead:
      "Four capabilities under one roof for the workshops, contractors and fleets working northern Adelaide.",
    spotlight: {
      kicker: "Northern Adelaide",
      title: ["Manufacturing Standards For ", "Elizabeth"],
      body: [
        "Elizabeth was built around a factory, and the skills never went anywhere. Even after the assembly lines closed, northern Adelaide kept its toolmakers, fabricators and process people - and the defence and advanced manufacturing work at nearby Edinburgh has been quietly picking them up ever since.",
        "It makes for a demanding customer base, which suits us. When an Elizabeth engineer asks for material certificates, a welding procedure and a dimensional check, that is a normal conversation rather than an awkward one. Every build that calls for it gets AS-compliant engineering and the paperwork to prove it.",
        "We cover the region's contractors, civil operators, transport fleets and trade businesses from Wingfield, about twenty-five minutes down Main North Road - close enough for a site visit, big enough to take on the work the local shops cannot fit.",
      ],
      facts: [
        { label: "From our workshop", value: "~25 minutes via Main North Rd" },
        { label: "Postcode", value: "SA 5112" },
        { label: "Documentation", value: "Material certs & WPS available" },
        { label: "Standards", value: "AS-compliant engineering" },
      ],
      serves: [
        {
          title: "Contractors & Civil",
          body: "Access platforms, stairs, guarding, frames and structural repairs for northern Adelaide projects.",
        },
        {
          title: "Manufacturing & Industry",
          body: "Precision profile cutting, folding and weldments to drawing, with certification where it is required.",
        },
        {
          title: "Fleets & Plant",
          body: "Mixer drums, bins, truck body modifications and hydraulic repairs for the fleets working the north.",
        },
      ],
    },
    whyTitle: ["Backed By ", "Certification"],
    whyLead:
      "Elizabeth customers tend to ask the hard questions about material grade, procedure and testing. Good - we would rather work for people who do. Material certificates, welding documentation and AS-compliant engineering come standard on any build that needs them.",
    ctaTitle: "Elizabeth Project? Let's Scope It Properly.",
    ctaLead:
      "Send the drawings and the spec. You will get a quote that covers scope, standard and timeframe.",
    faqs: [
      {
        q: "Do you supply material certificates for Elizabeth jobs?",
        a: "Yes. Material certificates, welding procedure documentation and engineering drawings are all available, and we provide them as standard on any build where the specification calls for it.",
      },
      {
        q: "Will you come out to a site in Elizabeth?",
        a: "We do. It is about twenty-five minutes up Main North Road from the workshop, so site measures, assessments and installs across northern Adelaide are all routine for us.",
      },
      {
        q: "Can you handle a production run, not just one-offs?",
        a: "We can. Repeat profile cutting, folded components and weldments to drawing are well within our range, and the CNC table means part twenty is identical to part one.",
      },
    ],
    nearby: ["salisbury", "gawler", "dry-creek"],
  },

  {
    slug: "salisbury",
    name: "Salisbury",
    postcode: "5108",
    region: "Adelaide's northern industrial estates",
    distance: "About 15 minutes up Main North Road",
    mapQuery: "Salisbury+SA+5108",
    mapZoom: 13,
    metaTitle:
      "Skip Bins, Mixer Drums & Fabrication Salisbury SA | Kingpin Engineering",
    metaDescription:
      "Custom skip bins, agitator drum builds and repairs, CNC plasma cutting and welding for Salisbury and the northern industrial estates. Fifteen minutes from Wingfield.",
    heroKicker: "Serving Salisbury & the northern estates",
    heroTitle: ["Bins, Drums & Custom Fabrication For", "Salisbury"],
    heroLead:
      "Salisbury South, Green Fields, Parafield - the northern estates run some of the busiest yards in the state. We keep their bins, bodies and drums working.",
    servicesTitle: ["What We Build For ", "Salisbury"],
    servicesLead:
      "Practical, heavy-duty work for the yards, fleets and trade businesses across Salisbury's industrial estates.",
    spotlight: {
      kicker: "Northern Estates",
      title: ["Keeping ", "Salisbury Working"],
      body: [
        "The stretch of industrial land running from Salisbury South through Green Fields and out to Parafield is one of the hardest-working corners of Adelaide. Waste operators, transport yards, steel merchants, plant hire and manufacturing all crammed into the same few square kilometres.",
        "It is also fleet country. Most of our Salisbury customers are not buying one bin or one drum - they are managing twenty of them across a rolling maintenance schedule, and what they need is a supplier who can stage work so the fleet never drops below what the run sheet demands.",
        "We plan Salisbury fleet work that way: bins and drums cycled through in batches, with firm dates, so you always know how many units are out and when they come back. Fifteen minutes up Main North Road, which makes the shuttle easy.",
      ],
      facts: [
        { label: "From our workshop", value: "~15 minutes via Main North Rd" },
        { label: "Postcode", value: "SA 5108" },
        { label: "Fleet work", value: "Batched to keep units in service" },
        { label: "Single units", value: "No minimum order" },
      ],
      serves: [
        {
          title: "Waste & Bin Fleets",
          body: "Marrel, hook-lift and craneable bins built to suit your truck, plus staged repairs across the fleet.",
        },
        {
          title: "Transport Yards",
          body: "Tipper bodies, tray builds, chassis plating and body modifications for the northern depots.",
        },
        {
          title: "Plant Hire & Industry",
          body: "Wear plate, guarding, frames, stairs and structural repairs to keep hired plant certified and working.",
        },
      ],
    },
    whyTitle: ["Fleet Work, ", "Staged Properly"],
    whyLead:
      "Salisbury operators cannot afford to have half the fleet in a workshop at once. We batch and schedule so units come back in a rhythm you can plan around - and we hold the dates we quote.",
    ctaTitle: "Salisbury Fleet Or One-Off - Same Answer.",
    ctaLead:
      "Tell us how many units and how fast you need them back. We will build a schedule around it.",
    faqs: [
      {
        q: "Can you service a bin fleet without taking it all off the road?",
        a: "That is exactly how we run Salisbury fleet work. We cycle units through in batches on an agreed schedule, so you always have enough bins in the field to keep the run sheet covered.",
      },
      {
        q: "Do you build bins to suit a specific truck?",
        a: "Yes - Marrel, hook-lift, craneable and special-purpose, sized to your truck and your job. Send a photo of an existing bin and we will match it so it drops straight on.",
      },
      {
        q: "How far is your workshop from Salisbury?",
        a: "About fifteen minutes down Main North Road to Hanson Rd, Wingfield. Easy enough that most Salisbury customers just run units down themselves.",
      },
    ],
    nearby: ["elizabeth", "dry-creek", "gawler"],
  },

  {
    slug: "gawler",
    name: "Gawler",
    postcode: "5118",
    region: "the northern gateway to the Barossa",
    distance: "About 35 minutes up the Northern Expressway",
    mapQuery: "Gawler+SA+5118",
    mapZoom: 13,
    metaTitle:
      "Engineering, Welding & Repairs Gawler SA | Kingpin Engineering",
    metaDescription:
      "Custom fabrication, welding, mixer drum work and machinery repairs for Gawler, the Barossa and northern SA. Thirty-five minutes from our Wingfield workshop.",
    heroKicker: "Serving Gawler & the Barossa gateway",
    heroTitle: ["Fabrication, Welding & Repairs For", "Gawler"],
    heroLead:
      "Where the metro ends and the country starts. Gawler's builders, farmers, civil contractors and transport operators need a workshop that will take on the odd jobs as readily as the big ones.",
    servicesTitle: ["Our Services Around ", "Gawler"],
    servicesLead:
      "From concrete agitators to a repair on a piece of gear that has to work again by Monday.",
    spotlight: {
      kicker: "Gawler & Surrounds",
      title: ["Town, Country & ", "Everything Between"],
      body: [
        "Gawler sits on the seam. South of it, Adelaide's northern suburbs; north and east, the Barossa, the Light region and open farming country. That mix shows up in the work - a civil contractor's tipper body one week, a vineyard machinery bracket the next, then a subdivision handrail run after that.",
        "Country jobs come with a particular constraint: things have to work again quickly, because there is rarely a spare. A cracked implement frame in the middle of a season is not a scheduling problem, it is a stopped operation. We take that seriously and we do not string people along on dates.",
        "Gawler is about thirty-five minutes down the Northern Expressway from us, which is close enough that dropping a job in on a run to town is entirely practical - and close enough that we will come to you when the gear cannot travel.",
      ],
      facts: [
        { label: "From our workshop", value: "~35 minutes via Northern Expy" },
        { label: "Postcode", value: "SA 5118" },
        { label: "Also covering", value: "Barossa, Light & Two Wells" },
        { label: "Urgent work", value: "Tell us the deadline up front" },
      ],
      serves: [
        {
          title: "Civil & Building Contractors",
          body: "Access stairs, platforms, handrail, frames and site steelwork for Gawler's growth corridor.",
        },
        {
          title: "Farming & Rural",
          body: "Implement repairs, custom brackets, trailer and bin work, and hard-wearing replacement components.",
        },
        {
          title: "Transport & Concrete",
          body: "Agitator drum builds and refurbishments, tipper bodies and truck body modifications.",
        },
      ],
    },
    whyTitle: ["Straight Answers For ", "Gawler"],
    whyLead:
      "You will get told what a job actually needs, not what fills the workshop. If a repair will do it, we will say so. If it is past saving, we will say that too - before you spend money on it.",
    ctaTitle: "Gawler Job? Tell Us The Deadline.",
    ctaLead:
      "Photos and a due date are usually all we need to come back with a plan and a price.",
    faqs: [
      {
        q: "Do you travel out to Gawler?",
        a: "Yes. It is about thirty-five minutes up the Northern Expressway, and we cover Gawler, the Barossa, Two Wells and the Light region for site assessments and installs.",
      },
      {
        q: "Can you repair farm machinery and implements?",
        a: "We do a lot of it. Cracked frames, worn components, custom brackets and one-off replacement parts - if it is steel or aluminium and it has to survive real work, we can build or repair it.",
      },
      {
        q: "I need it back before the weekend. Is that realistic?",
        a: "Tell us up front and we will give you a straight yes or no. We would rather turn a job away than take it on and miss the date you actually needed.",
      },
    ],
    nearby: ["elizabeth", "salisbury", "adelaide"],
  },

  {
    slug: "lonsdale",
    name: "Lonsdale",
    postcode: "5160",
    region: "Adelaide's southern industrial precinct",
    distance: "About 40 minutes south via the Southern Expressway",
    mapQuery: "Lonsdale+SA+5160",
    mapZoom: 14,
    metaTitle:
      "Industrial Fabrication & Repairs Lonsdale SA | Kingpin Engineering",
    metaDescription:
      "Heavy fabrication, plate processing, welding and plant repairs for Lonsdale's southern industrial precinct. Forty minutes from our Wingfield workshop.",
    heroKicker: "Serving Lonsdale & the southern precinct",
    heroTitle: ["Industrial Fabrication & Plant Repairs In", "Lonsdale"],
    heroLead:
      "Lonsdale is the south's industrial engine room. Heavy plate, wear components, structural repairs and custom builds for the plants and yards along O'Sullivan Beach Road.",
    servicesTitle: ["Engineering Services For ", "Lonsdale"],
    servicesLead:
      "The heavy end of fabrication for Lonsdale's manufacturers, processors and plant operators.",
    spotlight: {
      kicker: "Southern Precinct",
      title: ["Heavy Work For ", "Lonsdale"],
      body: [
        "The Lonsdale industrial estate has been the south's manufacturing base since the 1960s, and unlike a lot of Adelaide's older precincts it has kept its heavy character. Processing plants, fabricators, chemical and materials operations, transport and the yards that service them.",
        "Heavy operations produce a particular kind of maintenance work: wear plate, liners, hoppers, chutes, guarding, structural repairs and access steelwork, all of which have to be right because plant failures in this precinct tend to be expensive and occasionally dangerous.",
        "We are around forty minutes north via the Southern Expressway. For Lonsdale customers that usually means we handle the fabrication and rebuild work at Wingfield, where the plant and the paint facilities are, and come down for the measure and the fit.",
      ],
      facts: [
        { label: "From our workshop", value: "~40 minutes via Southern Expy" },
        { label: "Postcode", value: "SA 5160" },
        { label: "Specialty", value: "Wear plate, liners & structural steel" },
        { label: "Shutdowns", value: "We work to your window" },
      ],
      serves: [
        {
          title: "Processing & Manufacturing",
          body: "Hoppers, chutes, liners, wear plate and weldments built to survive abrasive, high-cycle duty.",
        },
        {
          title: "Plant Maintenance",
          body: "Access platforms, stairs, walkways and guarding fabricated and installed around your shutdown window.",
        },
        {
          title: "Southern Transport & Waste",
          body: "Skip bins, tipper bodies and truck modifications for the fleets running the south.",
        },
      ],
    },
    whyTitle: ["Engineered For ", "Abrasive Duty"],
    whyLead:
      "Lonsdale plant does not fail politely. We spec material and weld procedure for the actual duty cycle, not the cheapest option that will pass a glance - because the second failure always costs more than the first repair.",
    ctaTitle: "Planning A Lonsdale Shutdown?",
    ctaLead:
      "Get us the scope early and we will pre-fabricate, so your window is spent installing rather than waiting.",
    faqs: [
      {
        q: "Can you work around a scheduled shutdown at Lonsdale?",
        a: "Yes, and the earlier you get us the scope the better. We pre-fabricate at Wingfield so that your shutdown window is spent fitting rather than waiting on steel.",
      },
      {
        q: "Do you supply wear plate and liner work?",
        a: "We do. Hoppers, chutes, liners and wear components in materials matched to the duty - that is core work for the southern processing plants.",
      },
      {
        q: "How far is Lonsdale from your workshop?",
        a: "About forty minutes north via the Southern Expressway to Hanson Rd, Wingfield. Site measures and installs in the southern precinct are routine for us.",
      },
    ],
    nearby: ["mclaren-vale", "mile-end", "adelaide"],
  },

  {
    slug: "mclaren-vale",
    name: "McLaren Vale",
    postcode: "5171",
    region: "the Fleurieu wine region",
    distance: "About 45 minutes south",
    mapQuery: "McLaren+Vale+SA+5171",
    mapZoom: 13,
    metaTitle:
      "Custom Fabrication & Machinery Repairs McLaren Vale | Kingpin Engineering",
    metaDescription:
      "Stainless and steel fabrication, machinery repairs and custom builds for McLaren Vale wineries, vineyards and growers. Forty-five minutes from Wingfield.",
    heroKicker: "Serving McLaren Vale & the Fleurieu",
    heroTitle: ["Custom Fabrication & Repairs For", "McLaren Vale"],
    heroLead:
      "Vineyard machinery, winery walkways, tank platforms and custom equipment. When something breaks mid-vintage, it has to be fixed properly and fixed now.",
    servicesTitle: ["What We Do For ", "McLaren Vale"],
    servicesLead:
      "Fabrication and repair work built around the vintage calendar - not against it.",
    spotlight: {
      kicker: "Wine Country",
      title: ["Built Around ", "Vintage"],
      body: [
        "McLaren Vale runs on a calendar that does not negotiate. Pruning, spraying, harvest, crush - each has a window, and equipment that fails inside one of those windows costs a grower or a winery far more than the repair bill suggests.",
        "The work reflects it. Vineyard implement repairs and custom brackets through the growing season; walkways, access platforms, catwalks, tank stands, crush pad steelwork and guarding in the quieter months. And every so often, an urgent weld on a harvester at the worst possible moment.",
        "We are about forty-five minutes north of the Vale. For planned work we will come down, measure, fabricate at Wingfield and install. For a breakdown mid-vintage, tell us it is urgent and we will treat it that way.",
      ],
      facts: [
        { label: "From our workshop", value: "~45 minutes north" },
        { label: "Postcode", value: "SA 5171" },
        { label: "Also covering", value: "Willunga, Aldinga & the Fleurieu" },
        { label: "Vintage", value: "Priority turnaround on breakdowns" },
      ],
      serves: [
        {
          title: "Wineries & Cellars",
          body: "Access platforms, catwalks, tank stands, crush pad steelwork, guarding and custom equipment frames.",
        },
        {
          title: "Vineyards & Growers",
          body: "Implement repairs, custom brackets, trailer and bin work, and replacement components built to last a season.",
        },
        {
          title: "Rural Transport",
          body: "Tipper bodies, tray builds and truck modifications for the operators moving fruit and equipment.",
        },
      ],
    },
    whyTitle: ["We Know What ", "Harvest Means"],
    whyLead:
      "Nobody in McLaren Vale wants to hear 'sometime next fortnight' in March. Tell us where you are in the season and we will schedule accordingly - or tell you honestly if we cannot make your window.",
    ctaTitle: "McLaren Vale Breakdown Or Build?",
    ctaLead:
      "Send a photo and tell us how urgent it is. We will come back with a realistic date, not an optimistic one.",
    faqs: [
      {
        q: "Can you get to McLaren Vale for a site measure?",
        a: "Yes. We are about forty-five minutes away and cover McLaren Vale, Willunga, Aldinga and the wider Fleurieu for measures, assessments and installs.",
      },
      {
        q: "Do you do urgent repairs during vintage?",
        a: "We prioritise them. Tell us it is a vintage breakdown when you call and it goes to the front of the queue - we understand what a stopped crush pad costs.",
      },
      {
        q: "Can you build custom winery equipment to our design?",
        a: "We can, and we can help design it if you only have a rough idea. Tank stands, platforms, catwalks, frames and one-off equipment are all regular work, engineered before anything is cut.",
      },
    ],
    nearby: ["lonsdale", "victor-harbor", "adelaide"],
  },

  {
    slug: "mount-barker",
    name: "Mount Barker",
    postcode: "5251",
    region: "the Adelaide Hills",
    distance: "About 45 minutes up the South Eastern Freeway",
    mapQuery: "Mount+Barker+SA+5251",
    mapZoom: 13,
    metaTitle:
      "Steel Fabrication & Engineering Mount Barker SA | Kingpin Engineering",
    metaDescription:
      "Structural steel, custom fabrication, concrete mixer work and machinery repairs for Mount Barker and the Adelaide Hills. Forty-five minutes from Wingfield.",
    heroKicker: "Serving Mount Barker & the Adelaide Hills",
    heroTitle: ["Structural Steel & Custom Fabrication In", "Mount Barker"],
    heroLead:
      "Mount Barker is building faster than almost anywhere in South Australia. Concrete, civil and construction all need steel that turns up on time and fits first go.",
    servicesTitle: ["Our Services In ", "Mount Barker"],
    servicesLead:
      "Built for a growth corridor: concrete equipment, site steelwork and the repairs that keep contractors moving.",
    spotlight: {
      kicker: "Adelaide Hills",
      title: ["Keeping Up With ", "Mount Barker"],
      body: [
        "Mount Barker has spent the last decade turning from a Hills town into one of the state's fastest-growing centres. New estates, new schools, new commercial developments - and behind all of it, a constant stream of concrete trucks, tippers, excavators and civil crews.",
        "Growth corridors are hard on equipment. Mixer fleets run longer days, tippers do more cycles, and civil plant works in tighter windows. The gear that supplies a boom wears out faster than the gear that supplies a steady market, and the maintenance schedule has to keep up.",
        "That is a large part of what we do for Hills operators: agitator drums built, re-barrelled and balanced; tipper and bin bodies repaired; access stairs, platforms, handrail and site steelwork fabricated to drawing. Forty-five minutes down the freeway, which makes deliveries and site measures straightforward.",
      ],
      facts: [
        { label: "From our workshop", value: "~45 minutes via SE Freeway" },
        { label: "Postcode", value: "SA 5251" },
        { label: "Also covering", value: "Littlehampton, Nairne & Hahndorf" },
        { label: "Site work", value: "Measures and installs available" },
      ],
      serves: [
        {
          title: "Concrete & Civil Operators",
          body: "Agitator drums, re-barrelling, hydraulic repairs and chutes for the fleets pouring the growth corridor.",
        },
        {
          title: "Builders & Developers",
          body: "Access stairs, platforms, handrail, lintels, frames and structural steel fabricated to drawing.",
        },
        {
          title: "Hills Trades & Rural",
          body: "Machinery repairs, custom brackets, trailer work and one-off builds for Hills businesses and properties.",
        },
      ],
    },
    whyTitle: ["Steel That Fits ", "First Go"],
    whyLead:
      "A remake costs a Mount Barker builder a week they do not have. Everything gets modelled and checked before it is cut, so what arrives on site is what the drawing said - dimensionally right, first time.",
    ctaTitle: "Mount Barker Project? Send The Drawings.",
    ctaLead:
      "We will price it, build it and get it to site on the date we quoted.",
    faqs: [
      {
        q: "Do you deliver to Mount Barker sites?",
        a: "Yes. It is about forty-five minutes up the South Eastern Freeway, and we deliver fabricated steel to Mount Barker, Littlehampton, Nairne and Hahndorf regularly.",
      },
      {
        q: "Can you do a site measure in the Hills before fabricating?",
        a: "We prefer to for anything that has to fit existing structure. A measure up front is far cheaper than a remake, and it is a short run for us.",
      },
      {
        q: "Do you service concrete mixer fleets working the Hills?",
        a: "We do - new drums, re-barrelling, refurbishment, balancing and hydraulic and drive motor repairs. Growth-corridor fleets work hard, so we schedule around your pour commitments.",
      },
    ],
    nearby: ["murray-bridge", "adelaide", "victor-harbor"],
  },

  {
    slug: "murray-bridge",
    name: "Murray Bridge",
    postcode: "5253",
    region: "the Murraylands",
    distance: "About an hour east on the South Eastern Freeway",
    mapQuery: "Murray+Bridge+SA+5253",
    mapZoom: 13,
    metaTitle:
      "Heavy Fabrication & Machinery Repairs Murray Bridge | Kingpin Engineering",
    metaDescription:
      "Heavy fabrication, food-industry stainless work, truck bodies and machinery repairs for Murray Bridge and the Murraylands. An hour east of our Wingfield workshop.",
    heroKicker: "Serving Murray Bridge & the Murraylands",
    heroTitle: ["Heavy Fabrication & Machinery Repairs For", "Murray Bridge"],
    heroLead:
      "Food processing, agriculture and freight all converge at Murray Bridge. When plant goes down an hour from the city, you need a workshop that will actually make the trip.",
    servicesTitle: ["What We Build For ", "Murray Bridge"],
    servicesLead:
      "Plant fabrication, machinery repair and transport equipment for the Murraylands' processors, growers and fleets.",
    spotlight: {
      kicker: "Murraylands",
      title: ["An Hour East, ", "Worth The Trip"],
      body: [
        "Murray Bridge is where the Dukes and the Princes Highways meet the river, and it has grown into the Murraylands' industrial centre because of it. Food and meat processing, irrigation-fed horticulture, dairy, and a constant flow of freight heading east to Melbourne.",
        "Regional operators get used to being told a job is too far away, or waiting a fortnight for someone to make the trip. It is a genuine problem when a processing line or a harvester is down, and it is why a lot of Murraylands businesses end up making do with a repair that was never going to hold.",
        "We make the trip. Murray Bridge is about an hour up the freeway, and we plan regional work in blocks so that a single visit covers the measure, the fit and anything else on your list - rather than three separate trips billed three times.",
      ],
      facts: [
        { label: "From our workshop", value: "~1 hour via SE Freeway" },
        { label: "Postcode", value: "SA 5253" },
        { label: "Also covering", value: "Mannum, Tailem Bend & Karoonda" },
        { label: "Regional visits", value: "Grouped to keep travel costs down" },
      ],
      serves: [
        {
          title: "Food & Processing Plants",
          body: "Platforms, walkways, guarding, frames, hoppers and equipment weldments built to plant standards.",
        },
        {
          title: "Agriculture & Irrigation",
          body: "Implement and machinery repairs, custom brackets, pump and pipework frames, and replacement components.",
        },
        {
          title: "Freight & Transport",
          body: "Tipper bodies, tray builds, chassis plating and body modifications for the Dukes Highway fleets.",
        },
      ],
    },
    whyTitle: ["Regional Jobs, ", "Metro Standards"],
    whyLead:
      "Being an hour out should not mean lower standards or vaguer dates. Murray Bridge work gets the same engineering, the same documentation and the same firm timeframes as anything we build for a metro customer.",
    ctaTitle: "Murray Bridge Plant Down?",
    ctaLead:
      "Call us with photos and we will tell you whether it is a site fix, a workshop rebuild, or past saving.",
    faqs: [
      {
        q: "Will you really travel to Murray Bridge?",
        a: "Yes - it is about an hour up the South Eastern Freeway and we cover the Murraylands regularly, including Mannum, Tailem Bend and Karoonda.",
      },
      {
        q: "Does regional travel cost extra?",
        a: "We are upfront about travel in the quote rather than burying it. We also group regional visits so one trip covers as much of your list as possible, which keeps the cost down.",
      },
      {
        q: "Can you fabricate for a food processing environment?",
        a: "We build platforms, walkways, guarding, frames and equipment weldments to suit plant requirements. Tell us the standard the site works to and we will build and document to it.",
      },
    ],
    nearby: ["mount-barker", "renmark", "mount-gambier"],
  },

  {
    slug: "victor-harbor",
    name: "Victor Harbor",
    postcode: "5211",
    region: "the Fleurieu Peninsula",
    distance: "About an hour and a quarter south",
    mapQuery: "Victor+Harbor+SA+5211",
    mapZoom: 13,
    metaTitle:
      "Fabrication, Welding & Repairs Victor Harbor SA | Kingpin Engineering",
    metaDescription:
      "Custom steel and aluminium fabrication, welding and machinery repairs for Victor Harbor and the Fleurieu Peninsula. Coastal-grade finishes, built at Wingfield.",
    heroKicker: "Serving Victor Harbor & the Fleurieu",
    heroTitle: ["Custom Fabrication & Welding For", "Victor Harbor"],
    heroLead:
      "Coastal conditions, a building boom and a long drive to the nearest heavy workshop. We cover the Fleurieu with builds finished to survive the salt air.",
    servicesTitle: ["Our Services In ", "Victor Harbor"],
    servicesLead:
      "Structural steel, marine-adjacent work, machinery repairs and one-off builds for the south coast.",
    spotlight: {
      kicker: "South Coast",
      title: ["Coastal-Grade Work For ", "Victor Harbor"],
      body: [
        "Victor Harbor has quietly become one of the state's fastest-growing regional centres - a retirement and tourism town that now supports serious construction, hospitality and marine activity year round.",
        "Coastal towns are unforgiving on steel. Salt-laden air will find any gap in surface preparation and any dissimilar metal contact, and a job that would last fifteen years inland can start weeping rust in two down here. The answer is not a heavier coat of paint; it is the right material choice and a properly prepared, correctly specified coating system.",
        "We build for that. Blast back to bare metal, epoxy primer, topcoat matched to exposure - or aluminium where it is the smarter call. It is around an hour and a quarter from Wingfield, so we plan Fleurieu work in grouped visits: measure, deliver and install in as few trips as possible.",
      ],
      facts: [
        { label: "From our workshop", value: "~1 hr 15 south" },
        { label: "Postcode", value: "SA 5211" },
        { label: "Also covering", value: "Goolwa, Port Elliot & Middleton" },
        { label: "Finish", value: "Coastal-grade coating systems" },
      ],
      serves: [
        {
          title: "Builders & Developers",
          body: "Structural steel, balustrade frames, lintels, stairs and platforms finished for coastal exposure.",
        },
        {
          title: "Marine & Boating",
          body: "Trailer repairs, frames, brackets and aluminium work built to live near salt water.",
        },
        {
          title: "Rural & Local Business",
          body: "Machinery repairs, custom brackets, equipment frames and one-off builds for Fleurieu operators.",
        },
      ],
    },
    whyTitle: ["Finished To Survive ", "The Salt"],
    whyLead:
      "Anyone can weld a frame. On the Fleurieu, what determines whether it lasts is material choice and surface preparation - and that is where we do not cut corners, because the coast will find it.",
    ctaTitle: "Victor Harbor Job? Let's Talk Finish.",
    ctaLead:
      "Tell us where it is going and how exposed it is. We will spec material and coating to suit.",
    faqs: [
      {
        q: "Do you service Victor Harbor and the surrounding towns?",
        a: "Yes - Victor Harbor, Goolwa, Port Elliot and Middleton. It is around an hour and a quarter from the workshop and we group Fleurieu visits so travel stays efficient.",
      },
      {
        q: "How do you protect steel against coastal corrosion?",
        a: "Blast back to bare metal, epoxy primer, then a topcoat system chosen for the exposure. Where it makes more sense we will recommend aluminium instead - we would rather build it right than sell you the wrong material.",
      },
      {
        q: "Can you do aluminium work for boats and trailers?",
        a: "We do. Aluminium frames, brackets, toolboxes and trailer repairs are regular work, including the jobs shops without proper aluminium capability turn away.",
      },
    ],
    nearby: ["mclaren-vale", "lonsdale", "mount-barker"],
  },

  {
    slug: "renmark",
    name: "Renmark",
    postcode: "5341",
    region: "the Riverland",
    distance: "About two and a half hours up the Sturt Highway",
    mapQuery: "Renmark+SA+5341",
    mapZoom: 12,
    metaTitle:
      "Fabrication & Machinery Repairs Renmark SA | Kingpin Engineering",
    metaDescription:
      "Custom fabrication, irrigation and machinery repairs, bins and truck bodies for Renmark and the Riverland. Regional work planned in blocks to keep travel efficient.",
    heroKicker: "Serving Renmark & the Riverland",
    heroTitle: ["Fabrication & Machinery Repairs For", "Renmark"],
    heroLead:
      "Citrus, almonds, vines and the irrigation infrastructure that feeds them. Riverland gear works hard in hard conditions - and it has to be running again before the season moves on.",
    servicesTitle: ["What We Do For ", "Renmark"],
    servicesLead:
      "Horticulture, irrigation and transport equipment built and repaired for Riverland conditions.",
    spotlight: {
      kicker: "Riverland",
      title: ["Season-Critical Work For ", "Renmark"],
      body: [
        "The Riverland runs on water and timing. Citrus, almonds, wine grapes and stone fruit all move through their windows on a schedule set by the weather, and the pumps, pipework, harvesters and bins that service them have to hold up right through it.",
        "Being two and a half hours from Adelaide is the standing problem. Metro workshops quote regional jobs reluctantly, charge the travel three times over, and disappear once the invoice is paid. Growers end up either driving gear to town themselves or living with a bush repair that will fail again next season.",
        "We handle Renmark work in planned blocks: get the list together, we come up once, measure and collect what needs the workshop, fabricate at Wingfield, and return finished work on the next run. Fewer trips, less travel on your invoice, and repairs done properly rather than patched.",
      ],
      facts: [
        { label: "From our workshop", value: "~2.5 hrs via Sturt Highway" },
        { label: "Postcode", value: "SA 5341" },
        { label: "Also covering", value: "Berri, Loxton, Barmera & Waikerie" },
        { label: "Approach", value: "Planned block visits, not per-job trips" },
      ],
      serves: [
        {
          title: "Horticulture & Growers",
          body: "Implement and harvester repairs, bin and trailer work, custom brackets and replacement components.",
        },
        {
          title: "Irrigation & Pumping",
          body: "Pump stands, pipework frames, platforms, guarding and structural supports built for river-side duty.",
        },
        {
          title: "Riverland Transport",
          body: "Tipper bodies, tray builds, chassis repairs and body modifications for the fleets running the Sturt.",
        },
      ],
    },
    whyTitle: ["Regional Work Done ", "Properly"],
    whyLead:
      "Distance is not an excuse for a rough job. Renmark work gets the same engineering and the same documented procedures as anything built for a metro fleet - and a clear, honest position on travel before we start.",
    ctaTitle: "Riverland Job List? Send It Through.",
    ctaLead:
      "Group your jobs and we will plan one trip that covers the lot - cheaper for you, more efficient for us.",
    faqs: [
      {
        q: "Do you actually travel to the Riverland?",
        a: "We do - Renmark, Berri, Loxton, Barmera and Waikerie. We plan Riverland work in blocks rather than one trip per job, so travel gets shared across the work instead of loaded onto a single invoice.",
      },
      {
        q: "Can I send equipment down to Wingfield instead?",
        a: "Plenty of Riverland customers do. Freight down the Sturt is straightforward, and workshop rebuilds are usually better done here where the plant, jigs and paint facilities are.",
      },
      {
        q: "Can you repair irrigation and pump infrastructure?",
        a: "Yes - pump stands, pipework frames, platforms, guarding and structural supports. We build them to handle river-side conditions and constant duty cycling.",
      },
    ],
    nearby: ["murray-bridge", "gawler", "adelaide"],
  },

  {
    slug: "whyalla",
    name: "Whyalla",
    postcode: "5600",
    region: "the Upper Spencer Gulf",
    distance: "About four hours up the Augusta Highway",
    mapQuery: "Whyalla+SA+5600",
    mapZoom: 12,
    metaTitle:
      "Heavy Industrial Fabrication Whyalla SA | Kingpin Engineering",
    metaDescription:
      "Heavy plate fabrication, wear components, structural steel and mixer drum work for Whyalla and the Upper Spencer Gulf. Built at Wingfield, delivered north.",
    heroKicker: "Serving Whyalla & the Upper Spencer Gulf",
    heroTitle: ["Heavy Industrial Fabrication For", "Whyalla"],
    heroLead:
      "Steel, mining and port operations in one town. Whyalla runs the heaviest duty cycles in the state - and the fabrication that supports it has to be built to match.",
    servicesTitle: ["Our Capability For ", "Whyalla"],
    servicesLead:
      "Heavy plate processing, wear components and structural fabrication for Upper Spencer Gulf industry.",
    spotlight: {
      kicker: "Upper Spencer Gulf",
      title: ["Built For ", "Whyalla Duty"],
      body: [
        "Whyalla is a heavy industry town in the truest sense - a steelworks, a deep-water port, mining and processing operations, and the contractor base that services all of them. There is very little light-duty work north of Port Augusta.",
        "That environment sets the standard. Wear rates are brutal, duty cycles are constant, and a component that would last years on a metro site can be consumed in months. Getting the material grade and the weld procedure right is not a refinement here, it is the entire job.",
        "We fabricate at Wingfield and freight north. For Whyalla customers that generally means we take on the work that needs the CNC plasma table, the press brake, the jigs and controlled welding procedures - heavy plate weldments, wear components, structural assemblies and equipment frames - built with certification and delivered ready to install.",
      ],
      facts: [
        { label: "From our workshop", value: "~4 hrs via Augusta Highway" },
        { label: "Postcode", value: "SA 5600" },
        { label: "Also covering", value: "Port Augusta & Port Pirie" },
        { label: "Documentation", value: "Material certs & WPS supplied" },
      ],
      serves: [
        {
          title: "Mining & Processing",
          body: "Wear plate, liners, chutes, hoppers and heavy weldments engineered for abrasive, high-cycle service.",
        },
        {
          title: "Industrial Contractors",
          body: "Structural assemblies, access platforms, stairs, walkways and guarding built to drawing and certified.",
        },
        {
          title: "Concrete & Civil Fleets",
          body: "Agitator drums, re-barrelling, refurbishment and hydraulic repairs for operators working the Gulf.",
        },
      ],
    },
    whyTitle: ["Certified, ", "Then Freighted"],
    whyLead:
      "When the workshop is four hours away, the build has to be right before it leaves. Whyalla work is checked, documented and dimensionally verified at Wingfield so it installs cleanly on arrival.",
    ctaTitle: "Whyalla Project? Send The Spec.",
    ctaLead:
      "Drawings, material grade and duty. We will quote the build, the documentation and the freight together.",
    faqs: [
      {
        q: "Do you supply to Whyalla and the Upper Spencer Gulf?",
        a: "Yes. We fabricate at Wingfield and freight north to Whyalla, Port Augusta and Port Pirie. Freight is quoted openly as part of the job rather than hidden in the rate.",
      },
      {
        q: "Can you provide certification for Whyalla industrial work?",
        a: "We can - material certificates, welding procedure documentation and AS-compliant engineering. Heavy industry sites ask for it as a matter of course and we supply it as standard.",
      },
      {
        q: "Can you match wear plate specifications for mining duty?",
        a: "Yes. Tell us the duty and the abrasion you are dealing with and we will spec material and weld procedure to suit, rather than defaulting to whatever is cheapest on the rack.",
      },
    ],
    nearby: ["adelaide", "gawler", "mount-gambier"],
  },

  {
    slug: "mount-gambier",
    name: "Mount Gambier",
    postcode: "5290",
    region: "the Limestone Coast",
    distance: "About five hours south-east",
    mapQuery: "Mount+Gambier+SA+5290",
    mapZoom: 12,
    metaTitle:
      "Custom Fabrication & Heavy Engineering Mount Gambier | Kingpin Engineering",
    metaDescription:
      "Heavy fabrication, forestry and dairy plant repairs, bins and truck bodies for Mount Gambier and the Limestone Coast. Engineered and built at our Wingfield workshop.",
    heroKicker: "Serving Mount Gambier & the Limestone Coast",
    heroTitle: ["Custom Heavy Fabrication For", "Mount Gambier"],
    heroLead:
      "Forestry, timber processing, dairy and freight. The Limestone Coast runs plant hard and a long way from a metro workshop - so what we build for it has to arrive right.",
    servicesTitle: ["What We Build For ", "Mount Gambier"],
    servicesLead:
      "Plant fabrication, wear components and transport equipment for the south-east's forestry, dairy and freight operators.",
    spotlight: {
      kicker: "Limestone Coast",
      title: ["Engineered For The ", "South East"],
      body: [
        "Mount Gambier anchors an economy built on plantation forestry, timber processing, dairy and the freight that moves both. It is one of the largest regional centres in the state and, at roughly five hours from Adelaide, one of the most self-reliant.",
        "Forestry and processing work is punishing on equipment. Log handling gear, chip and sawdust conveying, hoppers, chutes and wear surfaces all cop constant abrasive loading, and dairy and food plants add their own requirements around cleanability and finish.",
        "We take on the Limestone Coast work that benefits from proper plant: heavy plate weldments, wear components, structural assemblies, equipment frames and truck bodies - engineered, built and tested at Wingfield, then freighted down. Because it is a long way back if something does not fit, everything gets verified before it leaves.",
      ],
      facts: [
        { label: "From our workshop", value: "~5 hrs south-east" },
        { label: "Postcode", value: "SA 5290" },
        { label: "Also covering", value: "Millicent, Naracoorte & Penola" },
        { label: "Before dispatch", value: "Dimensional check and sign-off" },
      ],
      serves: [
        {
          title: "Forestry & Timber",
          body: "Log handling frames, hoppers, chutes, wear plate and structural repairs for mills and harvest contractors.",
        },
        {
          title: "Dairy & Food Processing",
          body: "Platforms, walkways, guarding, frames and equipment weldments built to plant requirements.",
        },
        {
          title: "Transport & Waste",
          body: "Tipper bodies, skip bins, tray builds and chassis work for the fleets running the Dukes and the Princes.",
        },
      ],
    },
    whyTitle: ["Verified Before ", "It Leaves"],
    whyLead:
      "Five hours is a long way to send something back. Every Mount Gambier build is dimensionally checked and signed off against the drawing before it goes on the truck.",
    ctaTitle: "Limestone Coast Build? Send The Drawings.",
    ctaLead:
      "We will quote the fabrication, the documentation and the freight in one go - no surprises on delivery.",
    faqs: [
      {
        q: "Do you supply Mount Gambier and the Limestone Coast?",
        a: "Yes - Mount Gambier, Millicent, Naracoorte and Penola. We fabricate at Wingfield and freight down, with the freight quoted openly as part of the job.",
      },
      {
        q: "What if something does not fit when it arrives?",
        a: "That is exactly why we dimensionally check and sign off every regional build against the drawing before dispatch. For anything fitting to existing structure we will ask for a measure or drawings up front.",
      },
      {
        q: "Can you build wear components for timber processing?",
        a: "We can. Hoppers, chutes, liners and wear plate matched to the abrasion you are dealing with - the same approach we take for mining and bulk handling duty.",
      },
    ],
    nearby: ["murray-bridge", "victor-harbor", "adelaide"],
  },
] as const;

/** All suburb slugs, in menu order. */
export const SUBURB_SLUGS = SUBURBS.map((s) => s.slug);

export function getSuburb(slug: string): Suburb | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export function suburbPath(slug: string) {
  return `/service-areas/${slug}`;
}
