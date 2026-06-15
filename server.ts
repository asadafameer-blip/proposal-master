import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Initialize Gemini API Client
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;
const isRealApiKey = apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim().length > 0;

if (isRealApiKey) {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Google GenAI client initialized successfully with API key.");
  } catch (error) {
    console.error("Error initializing Google GenAI client:", error);
  }
} else {
  console.log("No valid GEMINI_API_KEY found. Running in high-fidelity mock/demo mode.");
}

// -----------------------------------------------------------------------------
// High-Fidelity Mock Proposal Generator
// -----------------------------------------------------------------------------
function generateMockProposal(service: string, clientType: string, style: string = "confident") {
  const serviceLower = service.toLowerCase();

  // Low budget and timeline matching pricing rule
  let priceMin = 3000;
  let priceMax = 6000;
  let durationDays = 5;
  let usdMin = 50;
  let usdMax = 100;
  let deliverables: string[] = [];
  let smartQuestion = "Do you have an existing logo or brand guidelines we should work with?";

  if (serviceLower.includes("landing")) {
    priceMin = 2000;
    priceMax = 4000;
    durationDays = 3;
    usdMin = 50;
    usdMax = 80;
    deliverables = [
      "Landing page complete single page design and development",
      "Mobile friendly design (perfectly responsive on all screen sizes)",
      "Fast page loading speed and high-performance optimization",
      "Contact form / lead capture form integration",
      "1 month free technical support and revision period"
    ];
    smartQuestion = "Is the copy/text for the landing page ready, or should we use placeholder/demo content for now?";
  } else if (serviceLower.includes("portfolio")) {
    priceMin = 3000;
    priceMax = 6000;
    durationDays = 5;
    usdMin = 50;
    usdMax = 100;
    deliverables = [
      "Portfolio website complete clean setup (Home, Gallery, About, Contact)",
      "Mobile friendly and fully responsive dynamic layout",
      "Fast image loading with modern media compression techniques",
      "Contact / WhatsApp inquiry form setup",
      "1 month free post-launch support and guidance"
    ];
    smartQuestion = "How many high-resolution projects or image galleries would you like to showcase on your portfolio web pages?";
  } else if (serviceLower.includes("e-commerce")) {
    priceMin = 10000;
    priceMax = 20000;
    durationDays = 12;
    usdMin = 150;
    usdMax = 300;
    deliverables = [
      "E-commerce store setup with an easy-to-use product management dashboard",
      "Mobile optimized layout for a zero-friction checkout experience",
      "High performance parameters to handle secure transaction traffic smoothly",
      "WhatsApp ordering flow and checkout integration",
      "1 month free support and gateway payment testing assistance"
    ];
    smartQuestion = "What payment methods do you plan to accept initially (e.g., credit cards, PayPal, COD, or locally focused methods)?";
  } else if (serviceLower.includes("wordpress")) {
    priceMin = 5000;
    priceMax = 15000;
    durationDays = 7;
    usdMin = 80;
    usdMax = 250;
    deliverables = [
      "WordPress setup complete with vital SEO and security plugins installation",
      "Responsive theme customization with intuitive Elementor visual builders",
      "Fast loading performance backed by WP Rocket optimization configurations",
      "Responsive contact forms and call-to-action lead popups setup",
      "1 month free support and guidance on theme/plugin licensing and updates"
    ];
    smartQuestion = "Do you already have your domain name and hosting plan ready, or would you like me to walk you through purchasing optimal ones?";
  } else if (serviceLower.includes("seo")) {
    priceMin = 3000;
    priceMax = 8000;
    durationDays = 30; // 1 month
    usdMin = 50;
    usdMax = 150;
    deliverables = [
      "SEO target optimization (detailed keywords audit and metadata setups)",
      "Crawlability check (resolving redirect errors, sitemaps, and indexing blockages)",
      "Page speed optimization for optimal search visibility gains",
      "Google Analytics & Google Search Console analytics dashboard integration",
      "1 month free search queries tracking and weekly rankings reports"
    ];
    smartQuestion = "Is your website currently connected to Google Search Console, or will this be a brand new campaign from scratch?";
  } else if (serviceLower.includes("business") || serviceLower.includes("5 pages")) {
    priceMin = 6000;
    priceMax = 12000;
    durationDays = 7;
    usdMin = 100;
    usdMax = 200;
    deliverables = [
      "Business website complete (5 custom pages: Home, About, Services, Gallery, Contact)",
      "Responsive mobile-first modern design matching your brand aesthetics",
      "Highly optimized media assets and compressed graphics for quick page loads",
      "Custom contact/inquiry forms with automated email receipt notifications",
      "1 month free support including automated cloud system backups"
    ];
    smartQuestion = "Is the main objective of your website to book local face-to-face services, or simply to establish general brand authority?";
  } else {
    // Custom fallbacks
    priceMin = 3000;
    priceMax = 6000;
    durationDays = 5;
    usdMin = 50;
    usdMax = 120;
    deliverables = [
      `${service} dynamic custom build and setup tailored for your brand`,
      "Fully responsive and mobile-friendly styling framework",
      "Fast page loads and robust media optimization checks",
      "Interactive enquiry and contact forms directly linked to your email/dashboard",
      "1 month comprehensive post-launch support and handover guidelines"
    ];
  }

  const subjectLine = `${service} for ${clientType}`;
  const greeting = `Hello ${clientType},`;

  let introduction = `My name is Sadaf Ameer, and I am a professional web developer. I will deliver a high-quality, professional digital solution tailored specifically to showcase your brand value and win client trust.`;
  if (style === "creative") {
    introduction = `I am Sadaf Ameer, and I specialize in crafting distinctive, high-conversion online identities. Let's design a custom experience for your ${clientType} business that stands out from competitors and boosts your brand value.`;
  } else if (style === "formal") {
    introduction = `I am Sadaf Ameer, a professional web developer. I have analyzed the standard specifications for ${clientType} businesses, and I am prepared to build a highly optimized ${service} project to maximize your customer lead conversion rates.`;
  }

  const closing = `Please review this draft. I would be happy to discuss your specific goals and negotiate terms to align with your budget.`;

  return {
    subjectLine,
    greeting,
    introduction,
    deliverables,
    priceMin,
    priceMax,
    usdMin,
    usdMax,
    durationDays,
    smartQuestion,
    closing,
    isMock: true
  };
}

// -----------------------------------------------------------------------------
// API Endpoints
// -----------------------------------------------------------------------------

// API - Generate Proposal
app.post("/api/generate-proposal", async (req, res) => {
  const { service, clientType, style = "confident" } = req.body;

  if (!service || !clientType) {
    return res.status(400).json({ error: "Missing required fields: service and clientType" });
  }

  // If no Gemini client, run in Mock mode immediately
  if (!ai) {
    const mockResponse = generateMockProposal(service, clientType, style);
    return res.json(mockResponse);
  }

  try {
    const serviceLower = service.toLowerCase();
    let priceConstraints = `Keep the price in INR/PKR: min 3000, max 6000.`;
    let usdConstraints = `Keep the price in USD: $50 - $100.`;
    let expectedDays = 5;

    if (serviceLower.includes("landing")) {
      priceConstraints = `Keep the price in INR/PKR: min 2000, max 4000.`;
      usdConstraints = `Keep the price in USD: $50 - $80.`;
      expectedDays = 3;
    } else if (serviceLower.includes("portfolio")) {
      priceConstraints = `Keep the price in INR/PKR: min 3000, max 6000.`;
      usdConstraints = `Keep the price in USD: $50 - $100.`;
      expectedDays = 5;
    } else if (serviceLower.includes("e-commerce")) {
      priceConstraints = `Keep the price in INR/PKR: min 10000, max 20000.`;
      usdConstraints = `Keep the price in USD: $150 - $300.`;
      expectedDays = 12;
    } else if (serviceLower.includes("wordpress")) {
      priceConstraints = `Keep the price in INR/PKR: min 5000, max 15000.`;
      usdConstraints = `Keep the price in USD: $80 - $250.`;
      expectedDays = 7;
    } else if (serviceLower.includes("seo")) {
      priceConstraints = `Keep the price in INR/PKR: min 3000, max 8000.`;
      usdConstraints = `Keep the price in USD: $50 - $150.`;
      expectedDays = 30;
    } else if (serviceLower.includes("business") || serviceLower.includes("5 pages")) {
      priceConstraints = `Keep the price in INR/PKR: min 6000, max 12000.`;
      usdConstraints = `Keep the price in USD: $100 - $200.`;
      expectedDays = 7;
    }

    // Generate prompt for structured json output in ENGLISH
    const prompt = `You are Sadaf Ameer, an elite startup-focused freelancing software developer.
Generate a professional, client-winning proposal for a freelancer offering "${service}" to a client whose business type is "${clientType}".
The custom style is "${style}".

CRITICAL RULE - LANGUAGE:
The entire text output values of ALL fields must be written PURELY in professional and polished English language.
- DO NOT use any Roman Urdu, Hinglish, or Urdu sentence structures. Use natural, persuasive business English.

CRITICAL RULE - PRICING & TIMELINE:
- ${priceConstraints}
- ${usdConstraints}
- Timeline of completion should be roughly ${expectedDays} business days.

Return a structured JSON match:
{
  "subjectLine": "A clean subject line in format '${service} for ${clientType}'",
  "greeting": "write in format: 'Hello [Client],' or 'Hi [Client] Team,' or 'Dear [Client] Team,'",
  "introduction": "A compelling intro in professional English justifying why they need highly optimized ${service}, stating: 'My name is Sadaf Ameer, and I am a professional web developer. Here is what I will deliver for your project:'",
  "deliverables": [
    "List 5 tangible deliverables starting with '✨ '. Be specific to their niche, e.g., ✨ Complete visual design, ✨ Fully mobile responsive, ✨ Speed and optimization benchmarks, ✨ Custom lead forms, ✨ 1 month free maintenance"
  ],
  "priceMin": The minimum price in INR/PKR (integer value only),
  "priceMax": The maximum price in INR/PKR (integer value only),
  "usdMin": The minimum price in USD (integer value only),
  "usdMax": The maximum price in USD (integer value only),
  "durationDays": The timeline integer in business days (e.g. ${expectedDays}),
  "smartQuestion": "One deep clever question in English starting with 'One question:' (e.g. 'Do you have an existing logo or brand guide?')",
  "closing": "An elegant business call to action asking them to review and negotiation steps if needed."
}

Ensure values are highly customized to the client's sector of "${clientType}" and the service "${service}". Double check that no Hinglish or non-English words slip inside the fields.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subjectLine: { type: Type.STRING },
            greeting: { type: Type.STRING },
            introduction: { type: Type.STRING },
            deliverables: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            priceMin: { type: Type.INTEGER },
            priceMax: { type: Type.INTEGER },
            usdMin: { type: Type.INTEGER },
            usdMax: { type: Type.INTEGER },
            durationDays: { type: Type.INTEGER },
            smartQuestion: { type: Type.STRING },
            closing: { type: Type.STRING }
          },
          required: ["subjectLine", "greeting", "introduction", "deliverables", "priceMin", "priceMax", "usdMin", "usdMax", "durationDays", "smartQuestion", "closing"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response returned from Gemini API");
    }

    const parsedProposal = JSON.parse(text.trim());
    parsedProposal.isMock = false;
    res.json(parsedProposal);

  } catch (error: any) {
    console.error("Gemini Generation failed. Falling back to dynamic mock generator.", error);
    // Graceful fallback of mock proposal generator
    const fallbackMock = generateMockProposal(service, clientType, style);
    fallbackMock.isMock = true; // flag highlighting mock status
    res.json(fallbackMock);
  }
});

// Check Server Config Environment Status
app.get("/api/config-status", (req, res) => {
  res.json({
    hasApiKey: isRealApiKey,
    nodeEnv: process.env.NODE_ENV || "development"
  });
});

// Vite middleware integrator
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Integrated Vite Dev server middleware.");
  } else {
    // Production statics
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Proposal Server listening on http://0.0.0.0:${PORT}`);
  });
}

bootstrap();
