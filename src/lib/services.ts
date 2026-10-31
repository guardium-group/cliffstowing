import { siteConfig } from "@/lib/site";

export interface ServiceSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: ServiceSection[];
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "heavy-duty-towing",
    name: "Heavy duty towing",
    title: "Heavy Duty Towing in Edmonton",
    metaDescription:
      "24/7 heavy duty towing in Edmonton for semi-trucks, buses, RVs, and commercial vehicles. Cliff's Towing — 70+ years of heavy recovery experience.",
    heroImage: "/images/hero/HeavyTowing1024x680.jpg",
    heroImageAlt: "Cliff's heavy duty tow truck recovering a semi-truck on an Edmonton highway",
    intro:
      "When a commercial vehicle breaks down or an oversize load needs moving, you need a company with the right equipment and the experience to use it safely. Cliff's Towing has been handling heavy duty towing across Edmonton and the greater Alberta region for over 70 years — from jackknifed semi-trucks on the QEII to broken-down buses in the river valley.",
    sections: [
      {
        heading: "What counts as heavy duty towing?",
        body: [
          "Heavy duty towing covers any vehicle or load too large for a standard wrecker: semi-trucks, tractor-trailers, buses, RVs, large construction equipment, and oversized commercial vehicles. These loads require specialized equipment — rotators, heavy underlift systems, and air cushion recovery gear — that most towing operators simply don't carry.",
          "Cliff's heavy duty fleet is designed for exactly this. Our operators are certified for commercial and highway recovery, trained in multi-point lifts, and equipped to handle axle-down recoveries that require precise rigging to avoid further chassis damage.",
        ],
        list: [
          "Semi-trucks and tractor-trailers",
          "Commercial buses and coaches",
          "RVs and motorhomes over 26 feet",
          "Construction equipment on public roads",
          "Heavy commercial vans and straight trucks",
          "Loaded flatdeck trailers and tankers",
        ],
      },
      {
        heading: "Our heavy duty equipment",
        body: [
          "We run a rotator and heavy underlift trucks capable of uprighting overturned vehicles and extracting loads from tight situations without requiring a full winch-out setup. For highway incidents, our operators carry full traffic management equipment and coordinate with EPS and Alberta Transportation when required.",
          "Coordination with fleet managers is standard practice for us. We understand that when a commercial vehicle goes down, every hour matters — and we treat dispatch, ETAs, and progress updates accordingly.",
        ],
      },
      {
        heading: "Highway and commercial route response",
        body: [
          "Heavy incidents on the QEII, Highway 2, the Henday, or the Whitemud require operators who know how to work around active traffic and coordinate with RCMP or EPS on scene. Cliff's responds to highway heavy duty calls 24 hours a day, seven days a week, including statutory holidays.",
          "We can coordinate delivery to your preferred truck stop, dealership, fleet yard, or repair shop anywhere in the Edmonton region. For loads requiring onward transport after recovery, our deck trucks can stage for pickup once the vehicle is stabilized.",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `A heavy duty call goes faster when dispatch has the full picture. Call ${siteConfig.phone.display} and be ready to describe the following. Don't worry if you don't have every detail — we'd rather start with what you know than wait.`,
        ],
        list: [
          "Your exact location: highway or road name, direction of travel, the nearest exit or landmark, and a GPS pin if your phone can show one",
          "The vehicle type: tractor only, tractor and trailer, bus, RV, or straight truck, plus the approximate length",
          "Whether the unit is loaded, and if so what the cargo is (fuel, liquids and hazardous goods change how we plan the job)",
          "Whether the vehicle is upright, on its side, jackknifed, or off the road surface",
          "Whether anyone is hurt or emergency services are already on scene",
          "Where the unit needs to go afterwards, and who to call at the receiving yard or shop",
        ],
      },
      {
        heading: "How a heavy recovery works, step by step",
        body: [
          "Every incident is different, but most heavy recoveries follow the same basic order. First, we confirm the scene is safe and, on public roads, set up traffic control alongside EPS or RCMP. Second, the operator assesses the vehicle: position, load, damage, ground conditions and any fluid leaks. That assessment decides which equipment goes on the hook.",
          "Third, the vehicle is rigged at appropriate attachment points and stabilized. If it's overturned or off the road surface, it is brought back to a stable position first, which may involve a winch pull or a controlled upright. Finally, the unit is secured for transport and taken to the destination you chose. We keep you updated at each stage so you can brief your dispatcher, insurer or customer.",
          "Loaded units sometimes need cargo transferred or the load reduced before they can be moved safely. If that applies to your situation, we'll explain the options and how they affect timing. For more on how these jobs unfold, read our guide to [heavy truck recovery in Edmonton](/blog/heavy-truck-recovery-edmonton). If the vehicle is stuck rather than disabled, our [winching and recovery service](/services/winching-recovery) may be part of the job.",
        ],
      },
      {
        heading: "Heavy duty versus light duty: choosing the right truck",
        body: [
          "Sending the wrong class of truck is the most common cause of delay on a heavy call. A standard wrecker can't safely handle a loaded tractor-trailer, and a heavy rig isn't needed for a half-ton pickup. If you're not sure which category your vehicle falls into, describe it to dispatch and we'll match the equipment. You can also read our comparison of [heavy duty vs light duty towing](/blog/heavy-duty-vs-light-duty-towing).",
          "Fleet operators in particular benefit from sorting this out ahead of time. Our [fleet towing guide](/blog/fleet-towing-guide-edmonton) covers what information to keep on hand so a breakdown at 3 a.m. doesn't turn into a scramble.",
        ],
      },
      {
        heading: "After the recovery: repairs, storage and paperwork",
        body: [
          "Once the unit is moved, the job isn't over for fleet managers. We can deliver to your preferred repair shop, dealership, truck stop or yard, and tell you where the vehicle is at each step so you can update drivers, customers and insurers. If a unit needs to wait for an inspection or an insurance assessment, talk to dispatch about the options.",
        ],
      },
      {
        heading: "Costs: what affects the price of a heavy tow",
        body: [
          "Heavy duty work isn't priced like a standard tow, and we don't believe in surprises. The main factors are the type and weight of the vehicle, whether it's loaded, how difficult the recovery is, the distance to the destination, the time of day, and how long the equipment and crew are on scene. Additional equipment such as a rotator, extra rigging or traffic control also affects the total.",
          `Because every incident is different, we discuss pricing with you by phone before work begins. Call ${siteConfig.phone.display} and describe the situation. If the unit needs to be moved onward after recovery, our [equipment transport service](/services/equipment-transport) can handle the next leg.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Can you tow a semi-truck that's jackknifed on the highway?",
        a: "Yes. Jackknifed semi-truck recovery is one of our most common heavy duty calls. We assess the load, set up traffic control if EPS isn't already on scene, and use our rotator or underlift to bring the rig back to a towable position. Every situation is different, but we approach each one methodically to minimize additional damage.",
      },
      {
        q: "Do you work directly with fleet managers and dispatch?",
        a: `Absolutely. We can communicate directly with your fleet coordinator, provide accurate ETAs, and send confirmation once the vehicle is secured and en route. For fleets with recurring needs, we can also discuss priority dispatch arrangements. Call ${siteConfig.phone.display} to talk through what you need.`,
      },
      {
        q: "What's the heaviest load you can move?",
        a: "Our heavy duty rotator and underlift combination can handle most commercial vehicles up to 80,000+ pounds in standard recovery scenarios. For oversize or overweight loads that require permits, we can coordinate with Alberta Transportation. Call dispatch to describe your specific load and we'll confirm capability before committing.",
      },
      {
        q: "Do you tow buses and RVs?",
        a: "Yes. Buses — both transit and coach style — and RVs over 26 feet are heavy duty jobs. Standard wheel-lift or flatbed tow trucks aren't built for these lengths and weights. Our heavy duty fleet handles them properly, with the right attachment points to avoid frame stress during transport.",
      },
      {
        q: "Is heavy duty towing available after hours?",
        a: "Yes. Commercial breakdowns don't follow business hours, and neither do we. Heavy duty dispatch is available 24/7 at the same number as our regular service.",
      },
      {
        q: "What should I do while I wait for the tow truck?",
        a: "Get everyone to a safe place away from traffic, turn on your hazard lights, and set out reflective triangles if you can do so safely. Stay clear of leaking fluids and don't attempt to move a damaged or overturned vehicle yourself. If anyone is hurt, call 911 first. Dispatch can give you more guidance based on your situation.",
      },
    ],
    keywords: [
      "heavy duty towing Edmonton",
      "semi truck towing Edmonton",
      "commercial vehicle towing Edmonton",
      "bus towing Edmonton",
      "RV towing Edmonton",
      "heavy recovery Alberta",
      "rotator towing Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "winching-recovery", "equipment-transport"],
  },

  {
    slug: "flatbed-towing",
    name: "Flatbed towing",
    title: "Flatbed Towing in Edmonton",
    metaDescription:
      "Flatbed towing in Edmonton for AWD, EVs, lowered vehicles, and accident recovery. All four wheels off the ground — zero drivetrain risk. 24/7.",
    heroImage: "/images/hero/decktruckequipment31024x695.jpg",
    heroImageAlt: "Cliff's flatbed tow truck with a vehicle loaded and secured on Whitemud Drive Edmonton",
    intro:
      "Flatbed towing is the safest way to move almost any vehicle, and the only correct method for a growing number of them. If your car is all-wheel drive, electric, lowered, or came out of a serious accident, flatbed is not an upgrade — it's a requirement. Cliff's Towing operates flatbed equipment across Edmonton and the surrounding region, available 24 hours a day.",
    sections: [
      {
        heading: "Why flatbed is the right choice",
        body: [
          "When a vehicle is towed on two wheels, the other two wheels are still in contact with the drivetrain. For most modern all-wheel drive and electric vehicles, that means the transmission, transfer case, or motor is being spun without lubrication — which can cause thousands of dollars in damage over a short tow.",
          "On a flatbed, all four wheels leave the ground the moment the vehicle is loaded. The drivetrain is completely at rest for the entire journey. That's what makes flatbed the recommended — and in many cases, manufacturer-required — method for a wide range of vehicles.",
        ],
      },
      {
        heading: "Vehicles that need flatbed",
        body: [
          "Insurance companies, manufacturers, and dealers increasingly specify flatbed for certain vehicle types. If you're unsure, the answer is almost always: flatbed is the safer choice.",
        ],
        list: [
          "All-wheel drive (AWD) vehicles — Subaru, Audi Quattro, Honda CR-V, Ford Explorer, etc.",
          "4WD trucks and SUVs when not in neutral tow mode",
          "Electric vehicles — Tesla, Rivian, BYD, Ford Lightning, and others",
          "Lowered vehicles with less than 4 inches of ground clearance",
          "Vehicles with severe undercarriage, steering, or suspension damage",
          "Classic and collector vehicles where contact damage is unacceptable",
          "Motorcycles (with appropriate wheel chocks)",
        ],
      },
      {
        heading: "What happens when your vehicle is loaded",
        body: [
          "Our operators position the flatbed at the vehicle, lower the deck to the lowest angle the surface allows, and load the vehicle using a winch system for vehicles that can't drive on, or a wheel-engaging system for vehicles that can. Once on the deck, the vehicle is tied down with proper straps at the frame or manufacturer tie-down points — not at wheel spokes or suspension components.",
          "We can transport to any repair shop, dealership, or storage location you choose in the Edmonton region. If you're dealing with insurance, we can provide the required documentation for your claim.",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display} and give the dispatcher a few details so the right deck arrives the first time. The more specific you are, the smoother the job goes.`,
        ],
        list: [
          "The make, model, year and colour of the vehicle, and whether it is AWD, 4WD, electric or hybrid",
          "Whether it starts, rolls, steers and shifts out of Park, since that decides how it gets onto the deck",
          "Any lowered suspension, aftermarket body kit or low front lip, so the operator can set up a gentler loading angle",
          "Your location and anything that limits access, such as a parkade, a narrow alley, a snowbank or a locked gate",
          "Where the vehicle is going, and whether you'll ride along or meet the truck there",
        ],
      },
      {
        heading: "Special cases: EVs, AWD, lowered and classic vehicles",
        body: [
          "Electric and AWD vehicles are the two biggest reasons people need flatbed today. Our guide to [flatbed towing for AWD and EV vehicles](/blog/flatbed-towing-awd-ev-vehicles) explains the drivetrain reasons in more detail, and our [EV towing guide](/blog/ev-towing-guide-edmonton) covers what to expect if your EV is stuck in a charging-related or software-related situation.",
          "Lowered and classic cars bring their own challenges: bumpers, splitters and oil pans that scrape on a steep ramp. We can tilt and angle the deck to reduce the approach angle, and use wheel straps rather than frame hooks when the vehicle's design calls for it. For a deeper look, see [classic and lowered car towing in Edmonton](/blog/classic-lowered-car-towing-edmonton). Always tell dispatch ahead of time so we send the right setup.",
        ],
      },
      {
        heading: "Flatbed versus wheel-lift: how we decide",
        body: [
          "Wheel-lift towing is quick and perfectly suitable for many two-wheel drive cars with no drivetrain or steering damage. Flatbed takes a little longer to load but moves the vehicle without any drivetrain rotation. We pick the method based on your vehicle, its condition and the route. For a plain-language comparison, see [flatbed, wheel-lift and dolly towing explained](/blog/tow-methods-flatbed-wheel-lift-dolly).",
          "If your vehicle is not a straightforward case, our [light duty towing](/services/light-duty-towing) team can talk through the options. If it has been in a collision, see our [accident recovery](/services/accident-recovery) service.",
        ],
      },
      {
        heading: "Preparing your vehicle for a flatbed tow",
        body: [
          "A little preparation helps the loading go smoothly. If it's safe to do so, take your valuables, registration and any child seats out of the vehicle, and let the operator know about anything unusual: a locked steering wheel, a parking brake that won't release, a vehicle stuck in Park, or a loose bumper or body panel that could shift on the deck.",
          "If the vehicle is electric, tell dispatch which model it is so the operator can check the correct tow mode and tie-down points. If your car is lowered or has a body kit, mention that before the truck arrives. If you can't be there, tell dispatch how the operator can get the key and where to deliver the vehicle. Flatbeds are also useful when a car has been in a minor collision, as explained in our article on [whether you need a tow after a minor collision](/blog/minor-collision-do-you-need-a-tow).",
        ],
      },
      {
        heading: "Winter flatbed calls in Edmonton",
        body: [
          "Edmonton winters make flatbed loading more difficult: icy parking lots, snow-packed driveways and drifted side streets all make traction and positioning harder. Our operators adapt the approach, such as using the winch to pull a vehicle onto the deck rather than driving it on, and taking extra care with tie-downs. Heavy snowfall and road conditions can affect how quickly we reach you, so call as soon as you know you need help and give dispatch as much location detail as you can.",
        ],
      },
      {
        heading: "Costs: what affects the price of a flatbed tow",
        body: [
          "The main factors are the distance to the destination, the time of day, the vehicle's size and condition, how difficult the loading is, and whether any extra equipment such as winching is needed. A vehicle on a clean parking lot costs less effort than one wedged in a snowbank. For a plain breakdown of what drives towing costs, read [what towing costs in Edmonton](/blog/towing-cost-edmonton). We discuss pricing on the phone before loading begins.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does my AWD vehicle need flatbed?",
        a: "Yes, in almost all cases. AWD vehicles have a permanently engaged drivetrain — towing on two wheels means the other two are spinning the transfer case and transmission without oil pressure. Most manufacturers explicitly prohibit non-flatbed towing for AWD models. Check your owner's manual, or just ask dispatch and we'll confirm.",
      },
      {
        q: "Can you flatbed an electric vehicle?",
        a: "Yes. EVs should only be transported on a flatbed. The regenerative braking system and electric motor can be damaged by wheel-to-ground contact during towing. We load and secure EVs the same way as any other vehicle — with tie-downs at the proper frame points.",
      },
      {
        q: "How long does flatbed loading take?",
        a: "For a standard vehicle in a parking lot or on a paved surface, loading takes roughly 10 to 15 minutes. Vehicles in awkward positions — partially in a ditch, in a narrow lane, or with significant damage — take longer. We'll give you an honest estimate when we arrive on scene.",
      },
      {
        q: "Is flatbed more expensive than regular towing?",
        a: "It can cost somewhat more than wheel-lift, but for vehicles that require flatbed, choosing wheel-lift to save money on the tow can lead to expensive drivetrain repairs. We discuss pricing with you before loading begins.",
      },
      {
        q: "Can you flatbed on the Anthony Henday or other major Edmonton routes?",
        a: "Yes. Our flatbed equipment is fully highway-rated and we respond to calls on all major Edmonton routes including the Henday, Whitemud Drive, Highway 2, and the QEII corridor.",
      },
      {
        q: "Can I ride in the tow truck?",
        a: "In many cases, yes, space in the cab permitting. Let dispatch know how many people need a ride when you call. Policies can depend on the truck sent and the circumstances, so confirm with the dispatcher.",
      },
    ],
    keywords: [
      "flatbed towing Edmonton",
      "AWD towing Edmonton",
      "EV towing Edmonton",
      "electric vehicle towing Edmonton",
      "lowered car towing Edmonton",
      "flatbed tow truck Edmonton",
    ],
    relatedSlugs: ["light-duty-towing", "accident-recovery", "equipment-transport"],
  },

  {
    slug: "accident-recovery",
    name: "Accident recovery",
    title: "Accident Towing & Recovery in Edmonton",
    metaDescription:
      "Post-accident towing in Edmonton with insurance coordination and delivery to your chosen body shop. Available 24/7 on all Edmonton routes and highways.",
    heroImage: "/images/hero/recoverysnow1024x681.jpg",
    heroImageAlt: "Cliff's Towing recovery truck at an Edmonton accident scene in winter conditions",
    intro:
      "Collisions are disorienting. In the moments after an accident, the last thing you need is to figure out towing logistics on your own. Cliff's Towing handles accident recovery across Edmonton and the surrounding communities, working directly with insurance adjusters, providing required documentation, and delivering your vehicle to the body shop or storage location you choose.",
    sections: [
      {
        heading: "What happens after you call us",
        body: [
          "When you call dispatch, we'll ask for your location, a quick description of your vehicle, and whether anyone has been injured. If emergency services haven't been called and someone is hurt, do that first — we'll be on standby. Once the scene is safe and EPS or RCMP have cleared us, we position the tow equipment and load your vehicle.",
          "If your vehicle is in an undriveable position — wedged against a barrier, partially in a ditch, or inverted — we carry the winching and rigging equipment to extract it before loading. You don't need to source a separate recovery company first.",
        ],
      },
      {
        heading: "Working with your insurance company",
        body: [
          "Most insurers in Alberta require towing documentation for their claim files. We provide written confirmation of pickup location, condition of the vehicle at time of load, and delivery destination.",
          "We work directly with adjusters when needed and can hold your vehicle in our yard while your claim is being processed. If your insurer has a preferred facility, we can deliver there. If you have a preferred body shop, we deliver there instead — your vehicle goes where you want it. For general information, see our guide to [towing and insurance in Alberta](/blog/towing-and-insurance-alberta). Coverage and claim rules vary by policy, so always confirm details with your insurer.",
        ],
      },
      {
        heading: "Accident recovery on Edmonton highways",
        body: [
          "Highway accident recovery follows a different set of rules than city towing. We carry full traffic management equipment, coordinate with RCMP or EPS on scene, and handle the specific rigging needed for vehicles that have struck barriers or ended up in the median.",
          "Our operators are available 24/7 on all major routes: the QEII, Highway 2, the Henday, the Whitemud, Yellowhead Trail, and surrounding provincial highways. Highway response times vary by traffic and distance from dispatch, but we'll give you a realistic ETA when you call.",
        ],
      },
      {
        heading: "What to do at the scene before the tow arrives",
        body: [
          "Your safety comes first. If anyone is hurt, call 911. If the vehicles are drivable and it is safe and permitted to do so, move to a safe spot. Turn on your hazard lights and stay out of live traffic lanes. Our checklist on [what to do after a car accident in Edmonton](/blog/what-to-do-after-a-car-accident-in-edmonton) walks through the steps in order.",
        ],
        list: [
          "Call 911 if there are injuries, fire, or major road blockage",
          "Exchange information with the other driver and note the location, time, and conditions",
          "Take photos of the scene, all vehicles and any visible damage before anything is moved",
          "Report the incident to the police if required, and to your insurer as soon as you can",
          "Take your valuables, registration and insurance papers out of the vehicle before it leaves",
          "Call dispatch with your location so we can plan the right equipment",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display}. A few details help us send the right truck on the first trip: where you are (road, direction, nearest cross street or exit), the make and model of the vehicle, whether it is AWD or electric, and whether it can roll and steer. Tell us if it's in a ditch, against a barrier, or on its side, and whether police are already on scene.`,
          "Also tell us where you want the vehicle delivered. If you haven't decided on a shop yet, that's fine. We can take it to a safe location while you speak with your insurer.",
        ],
      },
      {
        heading: "Minor collisions and drivability",
        body: [
          "Not every fender-bender needs a tow, but some that look minor hide damage to steering, suspension, cooling or the wheels, and driving on them can make things worse. Fluid on the ground, a pulled-out bumper, a warning light or a wheel that looks off are all good reasons to call. Our article on [minor collisions and whether you need a tow](/blog/minor-collision-do-you-need-a-tow) explains what to look for.",
          "If you're unsure, describe the situation to dispatch and we will tell you honestly whether a tow is advisable. For vehicles with any suspected damage, [flatbed towing](/services/flatbed-towing) is usually the safest method.",
        ],
      },
      {
        heading: "Choosing your own tow company and avoiding pressure",
        body: [
          "After a collision, it's common for several tow trucks to arrive at a scene, some of which nobody called. You are generally entitled to choose your provider, and you can say no politely to a truck you didn't request. For more on your rights and typical rules, read our summary of [Alberta towing laws](/blog/alberta-towing-laws), and our tips on [how to choose a towing company in Edmonton](/blog/how-to-choose-towing-company-edmonton).",
          "Ask for the company name, a description of where the vehicle is going, and a written record of the pickup. If you feel uncertain, call dispatch and we'll talk through the situation with you. We will not pressure you into any decision at the scene.",
        ],
      },
      {
        heading: "After the tow: storage and repair coordination",
        body: [
          "Once your vehicle has been delivered, we can help you with the next steps: confirming where it is, providing documentation for your insurer, and arranging a further move if your insurer assigns a different repair shop. If the vehicle needs to stay with us while a claim is assessed, let dispatch know. Depending on the vehicle, damage and your policy, storage and extra moves may be handled differently, so ask your insurer what's covered. If your vehicle ended up off the road, see our [winching and recovery](/services/winching-recovery) service.",
        ],
      },
      {
        heading: "Costs: what affects the price",
        body: [
          "The factors are the vehicle type, the condition and position of the vehicle, whether winching or special rigging is needed, the distance to the destination, the time of day and any storage needed afterwards. Depending on your policy, some or all of these costs may be covered by your insurer; check with them. We'll discuss pricing before work begins.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I choose my own towing company after an accident?",
        a: "Generally yes. In Alberta, you can choose your own towing provider after a collision. The police or other party cannot require you to use a specific company. If a tow truck shows up that you didn't call, you can decline and call Cliff's instead. Rules can vary with circumstances, so ask the officer on scene if unsure.",
      },
      {
        q: "Do you work directly with insurance adjusters?",
        a: "Yes. We can communicate directly with your adjuster, provide towing documentation, and hold your vehicle in our secure yard while your claim is processed. Every insurer has its own requirements, so ask your adjuster what they need and we'll help provide it.",
      },
      {
        q: "Can you deliver my vehicle to any body shop?",
        a: "Yes. We deliver to any repair facility, dealership, or storage location you specify in the Edmonton region. If you're unsure which shop to use, your insurer may have a preferred network — but the choice is yours.",
      },
      {
        q: "What if my car can't be driven or rolled?",
        a: "We carry winching and extraction equipment for exactly this situation. If your vehicle needs to be pulled from a ditch, extracted from a tight spot, or has sustained damage to the wheels or steering, we can recover it before loading onto the flatbed or wheel-lift.",
      },
      {
        q: "How quickly can you respond to an accident scene?",
        a: "Our average response time is about 30 minutes, depending on weather, traffic and road conditions. Outlying communities and highway locations can take longer depending on distance and our nearest available unit. We give you an honest ETA when you call.",
      },
      {
        q: "Should I move my belongings out of the vehicle?",
        a: "If it's safe to do so, take valuables, documents, medications, child seats and anything else you need before the vehicle is towed. If the vehicle is badly damaged or unsafe to enter, tell dispatch and the operator can advise on what can be retrieved.",
      },
    ],
    keywords: [
      "accident towing Edmonton",
      "post-accident towing Edmonton",
      "insurance towing Edmonton",
      "collision towing Edmonton",
      "accident recovery Edmonton",
      "tow truck after accident Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "roadside-assistance", "winching-recovery"],
  },

  {
    slug: "roadside-assistance",
    name: "Roadside assistance",
    title: "Roadside Assistance in Edmonton",
    metaDescription:
      "24/7 roadside assistance in Edmonton: lockout service, battery boost, tire changes, and fuel delivery across the greater Edmonton region.",
    heroImage: "/images/hero/decktruckoldcar1024x693.jpg",
    heroImageAlt: "Cliff's Towing technician providing roadside assistance on an Edmonton street in winter",
    intro:
      "Not every breakdown ends in a tow. When you're locked out, out of fuel, dealing with a flat tire, or stranded with a dead battery, Cliff's Towing dispatches roadside technicians to get you moving again on the spot. We serve Edmonton and surrounding communities around the clock — including the worst days of an Alberta winter.",
    sections: [
      {
        heading: "Roadside services we provide",
        body: [
          "Our roadside operators carry the equipment to handle the four most common breakdown situations without a tow: lockouts, dead batteries, flat tires, and empty tanks. If we can resolve your situation roadside, we will. If a tow turns out to be necessary, the same operator can arrange it.",
        ],
        list: [
          "Lockout service — slim-jim, air wedge, and long-reach tools for most vehicle types. See our guide to [car lockouts in Edmonton](/blog/car-lockout-edmonton)",
          "Battery boost — commercial-grade booster packs for all vehicle classes. Learn more on our [battery boost page](/services/battery-boost)",
          "Tire change — jack and your spare, on any surface and in any weather",
          "Emergency fuel delivery — gasoline and diesel, up to 10 litres to get you to a station",
        ],
      },
      {
        heading: "Edmonton winters and roadside calls",
        body: [
          "Cold weather is the leading cause of roadside calls in the Edmonton area. At -30°C, batteries that were borderline in October fail completely. Tires can go flat just from the temperature drop causing air loss. Fuel lines can gel in older diesel vehicles.",
          "We're fully equipped for cold-weather operation. Our battery boosters are rated for sub-zero starts, and our operators know how to work in conditions that sideline lesser equipment. If you're stranded in winter, don't wait — call dispatch and we'll tell you our ETA honestly. To prepare ahead, see our [winter roadside emergency kit checklist](/blog/edmonton-winter-roadside-emergency-kit).",
        ],
      },
      {
        heading: "When roadside becomes a tow",
        body: [
          "Sometimes what looks like a roadside job turns out to need a tow. If your tire is beyond changing because the wheel is seized, if your battery won't hold a charge, or if there's something else going on with the vehicle that won't let it run safely, we'll let you know before any additional charges are incurred.",
          "In those cases, the same operator can either call in a tow from our fleet or, depending on equipment, handle it themselves. You won't be left waiting for a second vehicle if we can avoid it. Depending on your vehicle, we may recommend [light duty towing](/services/light-duty-towing) or [flatbed towing](/services/flatbed-towing).",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display} and tell us what's happening, in your own words. These details help us send the right operator and tools:`,
        ],
        list: [
          "Your exact location, including the street, cross street, parking lot or highway marker",
          "The make, model and year of the vehicle, and whether it is a hybrid, EV or diesel",
          "What happened and what you can see or hear, for example clicking when you turn the key, a flat tire, or keys visible inside",
          "Whether you are in a safe place, and whether children or pets are in the vehicle",
          "For a lockout, whether a child or pet is locked inside, since that makes it an emergency",
        ],
      },
      {
        heading: "Staying safe while you wait",
        body: [
          "Turn on your hazard lights and, if you're on a roadway, stay in the vehicle with your seatbelt on unless it's unsafe to do so. If you must get out, stay well clear of traffic and stand away from the roadway side. In extreme cold, keep your phone warm and conserve its battery. If you're on a highway shoulder, tell dispatch which direction you're travelling and the nearest kilometre marker or exit.",
          "Never run a vehicle in an enclosed space, and clear the tailpipe if you idle for heat in snow. Our operators will also confirm the work area is safe before beginning.",
        ],
      },
      {
        heading: "Common roadside scenarios in Edmonton",
        body: [
          "A few situations account for most of our roadside calls. A driver comes out of a shopping centre on a -28°C evening and the engine only clicks. A commuter on the Whitemud notices the fuel gauge was lower than expected, and runs out beside an off-ramp. Someone returns from a hockey rink with their keys locked in a running vehicle. A rear tire is flat after a pothole in the spring thaw.",
          "In each case, the best first step is usually to call dispatch right away, tell us your location and describe the problem, and stay somewhere safe while we come to you. If you're not sure which service you need, describe what's happening and we'll help you decide. Seasonal prep helps too: our winter emergency kit checklist lists useful items to keep in the vehicle all year.",
        ],
      },
      {
        heading: "Tire changes, fuel and lockouts: what to know",
        body: [
          "For a tire change, we need a usable spare that's properly inflated, and, if your vehicle has locking wheel nuts, the key for them. If you don't have a spare, or the damage is more than a flat, we'll discuss a tow. For fuel delivery, we bring enough to get you to a station, not to fill the tank, and we deliver gasoline or diesel to match your vehicle, so check which one it takes. Misfuelling is a problem we want to avoid.",
          "For a lockout, have proof that the vehicle is yours, such as ID and registration, ready when the operator arrives. If a child or pet is locked inside, tell dispatch immediately and, if the situation seems urgent, call 911. Our guide to lockouts in Edmonton explains the process.",
          "If you can't tell what's wrong, that's fine. Describe the sounds, lights and smells to dispatch. Many problems that look serious turn out to be simple, and when they aren't, we'll say so early rather than leave you waiting on the roadside.",
        ],
      },
      {
        heading: "Costs: what affects the price",
        body: [
          "The factors include the type of service, your location and distance from dispatch, the time of day, weather and road conditions, and the amount of fuel or equipment needed. If a roadside call turns into a tow, the towing distance and vehicle type apply. We'll go over pricing before work begins. For more on what influences towing and roadside costs, see [what towing costs in Edmonton](/blog/towing-cost-edmonton).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you unlock any make or model of car?",
        a: "We can unlock most standard passenger vehicles using non-destructive methods: air wedge, long-reach tool, or slim-jim for older vehicles. Some newer vehicles with reinforced door seals or specific locking mechanisms may require a locksmith. We'll let you know when we arrive if your vehicle falls into that category.",
      },
      {
        q: "Do you deliver fuel for electric vehicles?",
        a: "We don't deliver charge — that would require a mobile charging unit, which we don't operate. If your EV has run out of charge, we can arrange a flatbed tow to the nearest charging station or a dealership. For hybrid vehicles with a gasoline engine, we deliver fuel as normal.",
      },
      {
        q: "How long does a tire change take?",
        a: "On a paved, reasonably level surface, a tire change takes about 15 to 20 minutes. Icy or uneven surfaces take longer and may require additional safety setup. If your spare is flat, damaged, or missing, we'll need to arrange a tow instead.",
      },
      {
        q: "My battery died in -30°C. Can you boost it?",
        a: "Yes. We carry commercial-grade boosters rated for extreme cold starts. A severely discharged battery in very cold conditions sometimes needs the booster connected for 10 to 15 minutes before attempting a start. If the battery won't hold a charge after boosting, we can recommend towing to a shop for a replacement.",
      },
      {
        q: "Do you provide roadside assistance on highways?",
        a: "Yes, with some limitations. We provide tire changes and fuel delivery on the highway shoulder, but battery boosts and lockouts require us to pull the vehicle to a safer location first when traffic conditions make shoulder work unsafe. Our operators follow AB Highway Traffic Act safety requirements.",
      },
      {
        q: "How fast can a roadside operator reach me?",
        a: "Our average response is about 30 minutes, depending on weather, traffic and road conditions. Winter storms and rush hour can lengthen that, and remote locations take longer. Dispatch gives you an honest ETA when you call.",
      },
    ],
    keywords: [
      "roadside assistance Edmonton",
      "car lockout Edmonton",
      "battery boost Edmonton",
      "emergency fuel delivery Edmonton",
      "flat tire change Edmonton",
      "24 hour roadside assistance Edmonton",
      "jump start Edmonton",
    ],
    relatedSlugs: ["battery-boost", "light-duty-towing", "flatbed-towing", "accident-recovery"],
  },

  {
    slug: "battery-boost",
    name: "Battery boosts",
    title: "Battery Boost & Jump Start Service in Edmonton",
    metaDescription:
      "24/7 battery boost and jump start service in Edmonton and area. Dead battery on a cold morning? Call Cliff's Towing and we'll get you running.",
    heroImage: "/images/hero/recoverysnow1024x681.jpg",
    heroImageAlt: "Cliff's Towing truck working on a snowy Edmonton road",
    intro:
      "A car that won't start on a frozen Edmonton morning is one of the most common reasons people call for help. Cliff's Towing provides battery boosts and jump starts across Edmonton and the surrounding area, 24 hours a day. In many cases, a boost is all it takes to get you moving. If it isn't, we can tow you to a shop.",
    sections: [
      {
        heading: "Why batteries fail in Edmonton's cold",
        body: [
          "A battery is a chemical device, and cold slows the chemistry down. At very low temperatures, a battery delivers noticeably less power, while the engine oil thickens and the engine needs more power to turn over. A battery that works fine in October can struggle badly at -25°C or colder.",
          "Age plays a large part too. Many batteries reach the end of their life after a few years, and winter is when a weak one finally gives up. Short trips, leaving lights or accessories on, and extended idle time can leave the battery undercharged before the cold even arrives. Our article on [dead batteries on cold Edmonton mornings](/blog/dead-battery-cold-morning-edmonton) goes deeper into this.",
        ],
      },
      {
        heading: "Signs of a weak battery",
        body: [
          "Batteries often give warning before they fail. If you notice any of the following, it's worth getting the battery tested before the next cold snap:",
        ],
        list: [
          "The engine cranks slowly or sluggishly, especially on cold starts",
          "Rapid clicking when you turn the key or press the start button",
          "Dim headlights or interior lights, or flickering dashboard lights",
          "A battery or check-engine warning light",
          "Electronics resetting, or power windows moving slowly",
          "A battery that's several years old, or visible corrosion around the terminals",
        ],
      },
      {
        heading: "What a battery boost involves",
        body: [
          "When our operator arrives, they'll confirm the symptoms, check that the vehicle is in Park or neutral with the ignition off, and look over the battery and terminals. A quick visual check matters: a damaged or leaking battery should not be boosted.",
          "We then connect a commercial-grade booster pack in the correct order, give the battery a few minutes to take some charge if conditions call for it, and attempt a start. Once the engine is running, we disconnect the leads and advise you to keep driving or let the vehicle idle for a while so the alternator can recharge the battery. Plan to get the battery tested soon after, because a boost treats the symptom rather than the cause.",
        ],
      },
      {
        heading: "When a boost won't help",
        body: [
          "Some situations aren't fixed by a jump, and a good operator will tell you so before wasting your time. In these cases, we may recommend towing, and we'll let you know before additional charges apply:",
        ],
        list: [
          "A frozen, cracked, swollen or leaking battery, which can be unsafe to boost",
          "A battery that starts the vehicle but dies again right away, which may point to the alternator or charging system",
          "A starter, ignition or fuel problem, where the engine turns over but won't run, or doesn't turn at all",
          "A seized engine or major electrical fault",
          "A vehicle with broken or corroded battery cables or terminals that can't be safely connected",
        ],
      },
      {
        heading: "Block heaters and cold-weather habits",
        body: [
          "Plugging in a block heater for a few hours before you start the vehicle makes a big difference in Edmonton winters, reducing strain on both the engine and the battery. Check the cord for damage and use a suitable outdoor-rated extension cord. A battery blanket or trickle charger, along with a recent battery test in the fall, can help avoid a surprise.",
          "Also keep jumper cables, a flashlight and warm clothing in the vehicle. Our [winter roadside emergency kit checklist](/blog/edmonton-winter-roadside-emergency-kit) covers what else to carry. And if you'd rather leave the work to a professional, our [roadside assistance service](/services/roadside-assistance) is available around the clock.",
        ],
      },
      {
        heading: "Hybrid and electric vehicles",
        body: [
          "Many hybrids and EVs still have a conventional 12-volt battery that runs the computers and locks, and it can fail in the cold just like any other. A dead 12-volt battery can leave a hybrid or EV unable to start up or even unlock. Procedures vary by manufacturer, so check your owner's manual for the correct jump points, and tell dispatch what you drive.",
          "If your vehicle can't be safely boosted, a flatbed is the right way to move it. See our [flatbed towing service](/services/flatbed-towing) for more.",
        ],
      },
      {
        heading: "Preparing before we arrive",
        body: [
          "A bit of preparation speeds things up. Turn off the headlights, heater, radio and any other accessories, and make sure the vehicle is in Park with the parking brake on. Locate the hood release, and if the battery is in the trunk or under a seat, tell dispatch. Keep your owner's manual handy in case the jump points are unusual.",
          "Clear snow and ice away from the front of the vehicle if it's safe and easy to do so, and let us know about anything blocking access, like another parked vehicle. If you're in a parkade or underground lot, mention it when you call so the operator can bring the right equipment.",
        ],
      },
      {
        heading: "After the boost: keeping the battery healthy",
        body: [
          "A boosted vehicle should be driven for a decent stretch, ideally at steady speeds, instead of being shut off immediately. Many shops will test a battery and charging system quickly, and finding a weak battery before it strands you again is far easier than another call. If the battery is several years old, it may simply be time to replace it.",
          "In cold snaps, minimize short trips, switch off accessories before shutting the engine off, and plug in the block heater. If you often leave a vehicle parked for long periods, a maintenance charger can help. If you're ever unsure whether a vehicle is safe to drive after a boost, our dispatchers can talk you through it, or help with a tow.",
        ],
      },
      {
        heading: "Safety and what to tell dispatch",
        body: [
          "Batteries produce flammable gas and carry high current, so leave connections to the operator. Keep clear of the engine bay, don't smoke nearby, and keep the vehicle's lights and accessories off until we say otherwise.",
          `Call ${siteConfig.phone.display}. Tell us your location, the make, model and year, whether it's a hybrid or EV, what the vehicle did when you tried to start it, and how old the battery is if you know. Let us know if the vehicle is in a parkade, a driveway with limited access or a roadway, so we can plan safe positioning. Pricing depends on location, time of day and conditions, and we'll go over it on the phone before we begin.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a battery boost take?",
        a: "Once the operator is on scene, many boosts take only a few minutes. In very cold weather, a badly discharged battery may need extra time connected to the booster before the engine will start.",
      },
      {
        q: "How fast can you get to me?",
        a: "Our average response is about 30 minutes, depending on weather, traffic and road conditions. Dispatch will give you an honest ETA when you call, and winter storms or remote locations can add time.",
      },
      {
        q: "My car clicks but won't start. Is it the battery?",
        a: "Rapid clicking is a common sign of a weak or discharged battery, but it can also point to a poor connection or a starter problem. Our operator will check on arrival. If a boost doesn't work, we can arrange a tow to a shop.",
      },
      {
        q: "Will a jump start damage my vehicle?",
        a: "Done correctly with proper equipment, a boost is a routine procedure. Our operators connect in the correct order and check the battery first. A damaged, frozen or leaking battery should not be boosted, so if we see one, we will explain and recommend alternatives.",
      },
      {
        q: "Can you boost a hybrid or electric vehicle?",
        a: "Often yes, as many have a conventional 12-volt battery, but procedures vary by manufacturer and model. Tell dispatch what you drive. If it cannot be boosted safely, we can tow it by flatbed.",
      },
      {
        q: "What should I do after the engine starts?",
        a: "Don't shut it off right away. Drive or let it run for a while so the alternator can recharge the battery, and have the battery and charging system tested soon. If the vehicle dies again, it likely needs a new battery or repair.",
      },
      {
        q: "Do you do battery boosts at night and on holidays?",
        a: "Yes. Dispatch and roadside service run 24 hours a day, seven days a week, including statutory holidays.",
      },
    ],
    keywords: [
      "battery boost Edmonton",
      "jump start Edmonton",
      "dead battery Edmonton",
      "car won't start cold Edmonton",
      "boost service Edmonton",
    ],
    relatedSlugs: ["roadside-assistance", "light-duty-towing", "flatbed-towing"],
  },

  {
    slug: "light-duty-towing",
    name: "Light duty towing",
    title: "Light & Medium Duty Towing in Edmonton",
    metaDescription:
      "Light and medium duty towing in Edmonton for cars, SUVs, pickups, cube vans and box trucks. 24/7 dispatch for all makes, including AWD and EVs.",
    heroImage: "/images/hero/decktruckoldcar1024x693.jpg",
    heroImageAlt: "Cliff's light duty tow truck securing a passenger vehicle on an Edmonton street",
    intro:
      "Most towing calls are light duty — cars, SUVs, crossovers, and half-ton trucks that have broken down, been in a minor accident, or need to be moved from a no-parking zone. Cliff's Towing dispatches light and medium duty equipment across Edmonton and surrounding communities 24 hours a day, with an average response time of about 30 minutes, depending on weather, traffic and road conditions.",
    sections: [
      {
        heading: "What we tow",
        body: [
          "Our light duty fleet handles passenger vehicles from compact sedans to full-size pickup trucks. We carry both flatbed and wheel-lift equipment, so we can match the right method to your specific vehicle.",
          "For all-wheel drive and electric vehicles, we dispatch flatbed. For two-wheel drive vehicles without drivetrain damage, wheel-lift towing is faster and equally safe. If you're not sure which applies to your vehicle, call dispatch and we'll sort it out.",
        ],
        list: [
          "Sedans, hatchbacks, and coupes — all makes",
          "SUVs and crossovers, including AWD models",
          "Half-ton and light three-quarter-ton pickup trucks",
          "Electric vehicles (Tesla, Rivian, Ford Lightning, GM EV models)",
          "Minivans and passenger vans",
          "Small commercial vehicles under 10,000 lbs GVWR",
        ],
      },
      {
        heading: "Medium duty towing in Edmonton",
        body: [
          "Between a passenger car and a semi-truck sits a large group of vehicles that need more than a standard wrecker but less than a full heavy rig. Medium duty towing covers cube vans, box trucks, larger pickups and duallys, service and delivery vehicles, and small buses. These vehicles are heavier, taller and longer than a car, and they carry cargo, tools or passengers that need care.",
          "Tell dispatch the vehicle type, approximate length, whether it's loaded and the number of axles if you know it, so we can send suitable equipment. Where a unit is too large or heavy for medium duty equipment, our [heavy duty towing](/services/heavy-duty-towing) service covers it. Not sure which category you fall into? Read [heavy duty vs light duty towing](/blog/heavy-duty-vs-light-duty-towing).",
        ],
        list: [
          "Cube vans and box trucks used for deliveries and moving",
          "Larger pickups and dual-rear-wheel trucks (duallys)",
          "Service, utility and contractor trucks",
          "Small buses, shuttle buses and larger passenger vans",
          "Loaded or cargo-carrying vehicles needing careful handling",
        ],
      },
      {
        heading: "What to expect when we arrive",
        body: [
          "Our operator will confirm the make and model, check whether the vehicle is AWD or FWD/RWD, and determine the best loading method. If you need to leave the scene — for example, your car broke down in a dangerous spot — we can handle everything and send you photos of the loaded vehicle and delivery confirmation.",
          "We can tow to any shop, dealership, or location you specify. If you're dealing with insurance, we'll provide the documentation your adjuster needs.",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display}. A quick summary helps us get the right truck on the road immediately: your location with a cross street or landmark, the make, model and year, whether it's AWD, 4WD or electric, whether it starts or rolls, and where it should go. Mention any access limits such as a parkade height, a locked gate, a snowbank, or a narrow alley. If the vehicle is a cube van or box truck, tell us its length and whether it's loaded.`,
        ],
      },
      {
        heading: "Everyday situations we handle around Edmonton",
        body: [
          "Light duty calls come from everywhere in the Edmonton area. A car that won't start in a Whyte Avenue parking stall, a pickup that overheated on the Henday, a minivan that stalled during the school run, a vehicle that needs moving from a private lot, or a car that needs to go to the dealership for warranty work are all routine for us.",
          "Edmonton's winters add their own variety: ice-related fender-benders, stuck vehicles, and batteries that quit at -30°C. For no-start calls, a boost may do the job, and our [battery boost service](/services/battery-boost) can handle it. For slides into ditches, our [winching and recovery](/services/winching-recovery) team helps. We also serve Sherwood Park, St. Albert and the rest of the region; see our [Edmonton service area](/service-areas/edmonton) page for coverage.",
        ],
      },
      {
        heading: "Preparing your vehicle for a tow",
        body: [
          "A few minutes of preparation makes the job smoother. If it's safe, remove valuables, take your keys and registration, and let the operator know about any steering lock, parking brake or gear issues. Tell us if there's a locked wheel, a lowered suspension or an aftermarket part that could be damaged by hooking up.",
          "If you can't be present for pickup, tell dispatch how to get the key to the operator and where to deliver. For more on picking the right provider, see [how to choose a towing company in Edmonton](/blog/how-to-choose-towing-company-edmonton).",
        ],
      },
      {
        heading: "Impound, fleet, and commercial light duty",
        body: [
          "Cliff's also handles property management impound towing, municipal contract towing, and fleet vehicle recovery in the Edmonton area. If you manage multiple vehicles or a facility with parking enforcement needs, call dispatch to discuss arrangement options.",
        ],
      },
      {
        heading: "Hybrid and electric light vehicles",
        body: [
          "Hybrids and EVs are common on Edmonton roads, and many shouldn't be towed with wheels on the ground. If you have one, tell dispatch when you call so we can send a flatbed. Our [EV towing guide](/blog/ev-towing-guide-edmonton) explains what to expect and what to check in your owner's manual, and our [flatbed towing](/services/flatbed-towing) page explains how we load and secure these vehicles.",
          "The same applies to AWD vehicles, lowered cars and anything with drivetrain or steering damage. Before the truck arrives, make a note of the vehicle's condition and take a few photos, which can be useful for repairs or insurance. When the operator arrives, they'll confirm the method before loading.",
        ],
      },
      {
        heading: "Costs: what affects the price",
        body: [
          "The price of a tow depends on the vehicle type and size, the towing method required, the distance, the time of day, and the difficulty of access or loading. Extra services like winching can add to the job. We go over pricing on the phone before we begin. For a general breakdown, read [what towing costs in Edmonton](/blog/towing-cost-edmonton).",
        ],
      },
    ],
    faqs: [
      {
        q: "My car is front-wheel drive. Do I need flatbed?",
        a: "For most FWD vehicles without drivetrain damage, wheel-lift towing — lifting the drive wheels off the ground — is safe and efficient. If your vehicle has sustained front-end damage or has AWD, we'll switch to flatbed. Our operators confirm the right method before loading.",
      },
      {
        q: "Can you tow my Tesla or other EV?",
        a: "Yes, on a flatbed. EVs cannot be safely towed with wheels on the ground — the motor and regenerative braking system can be damaged. We dispatch flatbed for all EV tow requests.",
      },
      {
        q: "How fast do you respond within Edmonton?",
        a: "Our average response time is about 30 minutes, depending on weather, traffic and road conditions. Surrounding areas such as Sherwood Park, St. Albert and Spruce Grove can take longer depending on distance and our nearest available unit. We give you a real ETA when you call, not a best-case estimate.",
      },
      {
        q: "What if my car is in a parkade or tight space?",
        a: "We carry slim-profile equipment for parkades and can maneuver in tighter spaces than a standard wrecker. Let dispatch know when you call so we can confirm equipment compatibility for your specific location.",
      },
      {
        q: "Do you work with insurance for light duty towing?",
        a: "Yes. We provide towing documentation for insurance claims and can coordinate directly with your adjuster if needed. We deliver to your preferred shop or your insurer's preferred facility — your choice.",
      },
      {
        q: "Do you tow cube vans, box trucks and small buses?",
        a: "Yes, these fall under medium duty towing. Call dispatch with the vehicle type, length and whether it's loaded, and we'll confirm the right equipment. Larger units go to our heavy duty service.",
      },
    ],
    keywords: [
      "light duty towing Edmonton",
      "medium duty towing Edmonton",
      "car towing Edmonton",
      "tow truck Edmonton",
      "SUV towing Edmonton",
      "cube van towing Edmonton",
      "towing service Edmonton",
      "24 hour tow truck Edmonton",
    ],
    relatedSlugs: ["flatbed-towing", "roadside-assistance", "accident-recovery"],
  },

  {
    slug: "winching-recovery",
    name: "Winching and recovery",
    title: "Winching & Off-Road Recovery in Edmonton",
    metaDescription:
      "Stuck in a ditch, field, or snowbank? Cliff's Towing provides winching and off-road vehicle recovery across Edmonton and Alberta. 24/7 dispatch.",
    heroImage: "/images/hero/HeavyTowing1024x680.jpg",
    heroImageAlt: "Cliff's Towing winching a vehicle out of a ditch near Edmonton in winter conditions",
    intro:
      "Edmonton winters put vehicles in places they were never meant to be. An icy patch on a rural road, a soft shoulder that gives way, a snowbank that swallowed a half-ton — these are situations where towing alone isn't enough. You need a winch, the right rigging, and an operator who knows how to extract a vehicle without making the damage worse. Cliff's Towing handles off-road and ditch recovery across Edmonton and the surrounding region.",
    sections: [
      {
        heading: "When do you need a winch recovery?",
        body: [
          "A winch recovery is needed when a vehicle can't be accessed by a tow truck in its current position. This includes vehicles that have slid off the road into a ditch, become stuck in mud or snow off the travelled surface, rolled partway down an embankment, or ended up in a field or undeveloped area.",
          "The key difference between winching and towing is that winching moves the vehicle to a towable position first. Once we've extracted it to a stable, accessible surface, we can assess whether it can be driven or needs to go on a hook. Our article on [winching vs towing in Edmonton](/blog/winching-vs-towing-edmonton) explains the difference in more detail.",
        ],
      },
      {
        heading: "Equipment and technique",
        body: [
          "We carry high-capacity winches on both light and heavy duty trucks, along with the rigging hardware needed for safe multi-point pulls. A single straight-line winch-out isn't always possible — sometimes you need snatch blocks to redirect the pull angle, or multiple anchor points to manage a vehicle on a slope.",
          "Our operators are trained in recovery scenarios, not just winching. They assess the ground conditions, vehicle position, and potential damage before hooking up — because a badly executed pull can cause more damage to the frame, suspension, or undercarriage than the original incident.",
        ],
      },
      {
        heading: "Rural and remote recovery",
        body: [
          "Not all recovery calls happen near a paved road. We respond to rural recovery requests across the greater Edmonton area — including Leduc County, Parkland County, Strathcona County, and Sturgeon County. If your vehicle is stuck on a range road, a farmyard access road, or a lease road in the industrial areas south of Edmonton, we can reach you.",
          "For remote locations, give dispatch as accurate a description of your position as possible — the nearest highway junction, a GPS coordinate if your phone shows it, or any landmarks you can identify. We'll get to you.",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display}. The better we understand the situation, the better equipment we can bring. Please tell us the following:`,
        ],
        list: [
          "Your location, with a GPS pin, nearest junction or landmarks for rural calls",
          "The vehicle type and approximate weight, and whether it's AWD or 4WD",
          "How far off the road it is, and whether it's on a slope, in water, or deep in snow or mud",
          "Whether the vehicle is upright or on its side, and whether it has visible damage",
          "Whether the ground can support a heavy truck, or whether there is a locked gate or soft approach",
          "Whether anyone is injured, and whether police are on scene",
        ],
      },
      {
        heading: "How a winch-out works, step by step",
        body: [
          "First, the operator assesses the scene: safety, ground conditions and vehicle position. Traffic control is set up if the vehicle is near a roadway. Next, the operator identifies solid anchor and recovery points on the vehicle, and picks an anchor for the pull, which may be the truck itself, a fixed object, or rigging with a snatch block to change direction.",
          "The pull is then done slowly and steadily rather than with a sudden jerk, with the operator watching the line, the vehicle and the ground at all times. Once the vehicle is back on stable ground, it is inspected for damage and either driven away or loaded onto a flatbed or wheel-lift. If the incident involved a collision, see our [accident recovery](/services/accident-recovery) service. For commercial vehicles, heavy duty rigging is involved. See [heavy duty towing](/services/heavy-duty-towing) and our guide to [heavy truck recovery](/blog/heavy-truck-recovery-edmonton).",
        ],
      },
      {
        heading: "Winter conditions around Edmonton",
        body: [
          "Most of our winching calls come from the same handful of situations: icy highway ramps, drifted-in rural roads, soft shoulders after a thaw and freeze, and vehicles that slid while trying to avoid something. Heavy snowfall and blowing snow can slow response, and rural roads may need to be reached carefully.",
          "If you're stuck, stay with the vehicle if it's safe, keep your hazards on, and avoid spinning the wheels, which can dig you in deeper. Keep the tailpipe clear of snow if you idle for warmth. Our [winter roadside emergency kit](/blog/edmonton-winter-roadside-emergency-kit) guide lists what to carry.",
        ],
      },
      {
        heading: "Preparing for a recovery",
        body: [
          "While you wait, put on your hazards, stay clear of traffic, and keep everyone away from the line of travel of the vehicle. If you can safely do so, take photos of the vehicle's position before it's moved, which can help with insurance. Gather your registration, insurance information and any paperwork you may need, and remove loose items from the vehicle in case it moves during extraction.",
          "If your vehicle is part of a commercial operation or is carrying cargo, tell dispatch. Also let us know if there are fluid leaks, because we need to take precautions, and if the vehicle is on private land, who the landowner is and how we can access the site. A clear picture of where you are and what you're stuck in helps us bring the right equipment on the first trip.",
        ],
      },
      {
        heading: "Different vehicles, different pulls",
        body: [
          "A compact car, a loaded pickup, a trailer and a dump truck all need different recovery methods. Light vehicles can sometimes be pulled out straight with a winch, while heavier units may need extra anchoring, multiple pulls or a heavier truck. Vehicles with low ground clearance or EV battery packs underneath need special attention to where the load is applied, because a bad hook point can cause expensive damage.",
          "Trailers, campers and equipment add their own challenges. Winching a hitched trailer, for example, can need a separate approach from the tow vehicle. Describe what you have to dispatch, and we'll plan accordingly.",
        ],
      },
      {
        heading: "Costs: what affects the price",
        body: [
          "Winching costs depend on how far the vehicle is from the road, the vehicle's weight and position, how many anchor points or additional rigging we need, the ground conditions, the time of day, and how long the job takes. We discuss pricing before we begin. For general information, see [what towing costs in Edmonton](/blog/towing-cost-edmonton).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you recover a vehicle from a ditch on the highway?",
        a: "Yes. Highway ditch recovery is one of our most frequent calls in winter. We set up proper traffic control, coordinate with RCMP or EPS if they're on scene, and execute the winch-out safely from the road shoulder. Highway recovery takes longer than city recovery due to safety setup requirements.",
      },
      {
        q: "Will winching damage my vehicle?",
        a: "Done correctly, winching causes no additional damage. Done incorrectly — wrong attachment points, too much load on a single line, pulling at a bad angle — it can crack frames, tear bumpers, or damage the undercarriage. Our operators assess the situation before connecting the winch to ensure we're rigging it properly.",
      },
      {
        q: "How much does winching cost?",
        a: `Winching rates depend on the complexity of the recovery — how far off the road surface the vehicle is, how many anchor points we need, and how long the extraction takes. We provide upfront pricing before starting. Call ${siteConfig.phone.display} for an estimate based on your specific situation.`,
      },
      {
        q: "Can you recover a commercial truck or semi from a ditch?",
        a: "Yes. Heavy duty winching and recovery for commercial vehicles is a separate operation using our heavy duty equipment and rigging. This includes semi-trucks, dump trucks, and other large commercial vehicles that end up off the road surface.",
      },
      {
        q: "Do you do off-road recovery in rural Alberta?",
        a: "Yes, within the greater Edmonton region including Leduc County, Parkland County, Strathcona County, and Sturgeon County. For locations further afield, call dispatch and we'll confirm coverage based on where you are.",
      },
      {
        q: "Should I try to pull my vehicle out myself?",
        a: "We recommend against it if you're unsure. Pulling with the wrong strap, anchor point or angle can damage the vehicle and is dangerous for bystanders. Spinning tires can also dig you in deeper. If you're stuck, call dispatch and we'll advise.",
      },
    ],
    keywords: [
      "winching recovery Edmonton",
      "vehicle stuck in ditch Edmonton",
      "off-road recovery Edmonton",
      "ditch recovery Edmonton",
      "vehicle extraction Edmonton",
      "stuck in snow Edmonton",
      "winter recovery Edmonton",
    ],
    relatedSlugs: ["heavy-duty-towing", "accident-recovery", "flatbed-towing"],
  },

  {
    slug: "equipment-transport",
    name: "Equipment transport",
    title: "Equipment Transport in Edmonton",
    metaDescription:
      "Specialty equipment transport in Edmonton for forklifts, earthmoving equipment, and heavy commercial assets. Cliff's Towing — experienced, 24/7 available.",
    heroImage: "/images/hero/decktruckequipment31024x695.jpg",
    heroImageAlt: "Cliff's deck truck transporting heavy construction equipment on a job site near Edmonton",
    intro:
      "Moving heavy equipment requires more than just a big truck. It requires the right deck configuration, proper tie-down rigging for the load type, and an operator who understands load weight distribution and transport requirements. Cliff's Towing provides equipment transport across Edmonton and Alberta for forklifts, skid steers, excavators, and other heavy commercial assets.",
    sections: [
      {
        heading: "What we transport",
        body: [
          "Our deck trucks are configured for equipment loads that aren't practical to move on a standard flatbed: forklifts, telehandlers, skid steers, mini-excavators, compactors, air compressors, and other wheeled or tracked equipment common on construction sites and industrial yards.",
          "For loads that require float transport or pilot cars — oversized equipment that exceeds standard width or height — we can coordinate permit acquisition and staging through our dispatch team.",
        ],
        list: [
          "Forklifts and reach stackers",
          "Skid steers and compact track loaders",
          "Mini-excavators and compact excavators",
          "Telehandlers and boom lifts",
          "Industrial air compressors and generators",
          "Utility trailers and small equipment trailers",
        ],
      },
      {
        heading: "Safe loading and securing",
        body: [
          "Equipment transport failures are almost always a securing problem, not a weight problem. Loads shift when tie-downs are attached to the wrong points, when chain tension is inconsistent across the load, or when the deck configuration doesn't account for the load's centre of gravity.",
          "Our operators rig equipment to manufacturer-specified tie-down points wherever possible, use appropriate chain grades for the load weight, and do a final tension check before departure. For loads on tracked equipment, we carry rubber mats to protect the deck and proper chain attachment hardware.",
        ],
      },
      {
        heading: "Job site and fleet coordination",
        body: [
          "Equipment transport often needs to coordinate with project timelines. A forklift that has to be on site at 7am for an 8am concrete pour isn't a flexible situation. We work with site managers, general contractors, and fleet coordinators to meet the schedule, and our dispatch team stays reachable throughout.",
          "For recurring transport needs — equipment moving between job sites on a regular schedule — call dispatch to discuss what a standing arrangement would look like. Our [fleet towing guide](/blog/fleet-towing-guide-edmonton) covers how businesses can plan for this.",
        ],
      },
      {
        heading: "What to tell dispatch when you call",
        body: [
          `Call ${siteConfig.phone.display} with as much of this as you can. We'd rather start a conversation with partial details than have you wait. Accurate information helps us choose the right deck and avoid a second trip.`,
        ],
        list: [
          "The type, make and model of the equipment, and its approximate weight (the data plate or manual usually shows it)",
          "Dimensions: length, width and height, including any raised mast, boom, bucket or attachments",
          "Whether the equipment runs and can be driven onto the deck, or needs to be winched",
          "Pickup and drop-off addresses, with notes on site access, soft ground, gates, overhead lines or tight turns",
          "The time window you need, and who will be on site to meet the truck at each end",
        ],
      },
      {
        heading: "How an equipment move works",
        body: [
          "After you call, dispatch confirms the load details, picks the deck truck and works out the route, and whether any permits might apply. On arrival, the operator checks the ground and the loading area, then positions the deck and loads the equipment either under its own power or by winch. The load is secured with chains or straps at the correct points, and the operator does a tension check before leaving.",
          "At the destination, the operator unloads on stable ground, and you sign off on delivery. If the equipment has broken down or is stuck on a site, our [winching and recovery service](/services/winching-recovery) can help get it into a position where it can be loaded. Heavy or oversized machines may involve our [heavy duty towing](/services/heavy-duty-towing) team too.",
        ],
      },
      {
        heading: "Heavy equipment moves in the Edmonton region",
        body: [
          "Edmonton's industrial parks, rail yards, construction sites and oil and gas support businesses generate a steady flow of equipment moves, especially around Nisku, Acheson and the surrounding industrial corridors. Spring road bans, winter conditions and seasonal construction all affect scheduling, so it helps to book early where you can. Our article on [heavy equipment transport in Edmonton](/blog/heavy-equipment-transport-edmonton) goes through planning in more detail. See our [Nisku](/service-areas/nisku) and [Acheson](/service-areas/acheson) pages for coverage there.",
        ],
      },
      {
        heading: "Preparing your equipment for transport",
        body: [
          "Preparation reduces delays and protects your machine. Clean off heavy mud or snow so tie-down points are visible, and lower or secure booms, buckets, forks and attachments. Check fluid levels and look for leaks, and note any existing damage so it's recorded before loading. If the equipment has a key or a battery disconnect, make sure it's available to the operator.",
          "Make sure the pickup site is accessible for a large deck truck, with firm, level ground for loading and enough room to maneuver. Arrange for someone to be on site who can speak for the equipment's owner, and confirm that any gates or locks will be open.",
        ],
      },
      {
        heading: "Transport safety and legal basics",
        body: [
          "Moving heavy equipment on public roads is regulated, and requirements can depend on the load's weight, width, height and length. As a general rule, the operator and the shipper share responsibility for making sure the load is secured and legal for the route. Our dispatch team can talk you through the general process, but rules change, so always confirm current requirements with the relevant authority.",
          "Securement is the main safety issue. Loads should be tied down with enough working capacity for the weight, through approved points, and re-checked after the first few kilometres of travel. If you have specific manufacturer instructions for transport, share them with dispatch in advance.",
        ],
      },
      {
        heading: "Costs: what affects the price",
        body: [
          "Equipment transport pricing depends on the weight and dimensions of the load, the distance, the time of day, how difficult the loading and unloading sites are, any permits or escorts required, and whether the equipment runs. Waiting time and multiple stops also matter. We'll discuss pricing before we schedule the move.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you transport a forklift?",
        a: "Yes. Forklift transport is one of our most common equipment jobs. We confirm the forklift's weight and mast configuration before dispatch to ensure we're bringing the right deck truck. Most counterbalance forklifts up to 10,000 lbs capacity are handled with our standard equipment.",
      },
      {
        q: "What's the maximum weight you can handle?",
        a: "Our deck trucks handle most equipment transport needs up to approximately 40,000 lbs per load in standard configurations. For loads exceeding this, we can coordinate float transport with the appropriate equipment. Call dispatch with your load specifics and we'll confirm before committing.",
      },
      {
        q: "Do you need permits for equipment transport in Alberta?",
        a: "Permit requirements depend on the width, height, and weight of your load. Many equipment loads fall within standard legal limits and don't require permits. For loads that do — oversized width or over-legal weight — our dispatch team can advise on the process and timeline before we schedule the move.",
      },
      {
        q: "Can you transport equipment after hours or on weekends?",
        a: "Yes. Equipment transport requests are handled by the same 24/7 dispatch as our other services. For jobs that need to happen outside of business hours, book through dispatch and we'll confirm availability and any additional coordination required.",
      },
      {
        q: "Can you move equipment within the Nisku or Acheson industrial areas?",
        a: "Yes. Nisku and Acheson are among our most common equipment transport destinations. We're familiar with both industrial parks, including their access routes and weight restrictions on internal roads.",
      },
      {
        q: "What if my equipment won't start?",
        a: "Tell dispatch when you call. Equipment that can't be driven can often be winched onto the deck, though that may need different rigging and extra time. We'll confirm the approach before arriving.",
      },
    ],
    keywords: [
      "equipment transport Edmonton",
      "forklift transport Edmonton",
      "heavy haul Edmonton",
      "construction equipment transport Alberta",
      "machinery transport Edmonton",
      "Nisku equipment transport",
      "Acheson equipment transport",
    ],
    relatedSlugs: ["heavy-duty-towing", "flatbed-towing", "winching-recovery"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
