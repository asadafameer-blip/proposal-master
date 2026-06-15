/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// ============================================
// PROFESSIONAL SOLID COLOR ICONS (Cyan Theme)
// ============================================
const IconSparkles = () => <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const IconBriefcase = () => <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconBuilding = () => <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const IconCopy = () => <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const IconCheck = () => <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const IconEdit = () => <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>;
const IconEye = () => <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const IconTrash = () => <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const IconCpu = () => <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 0v2h14V3H5z" /></svg>;
const IconChevron = () => <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const IconInfo = () => <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconLayers = () => <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>;
const IconFlame = () => <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>;
const IconHelp = () => <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconPrinter = () => <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
const IconLoader = () => <svg className="w-4 h-4 text-cyan-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
const IconGlobe = () => <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// ============================================
// ALL WEBSITE TYPES (Jo log banwate hain)
// ============================================
const ALL_SERVICES = [
  "Portfolio Website", "Landing Page", "Business Website", "E-commerce Website",
  "WordPress Website", "SEO Optimization", "Personal Blog", "News Website",
  "Educational Website", "Non-Profit Website", "Real Estate Website", "Job Portal",
  "Matrimonial Website", "Travel Website", "Hotel Booking Website", "Restaurant Website",
  "Cafe Website", "Beauty & Salon Website", "Fitness & Gym Website", "Medical Clinic Website",
  "Dental Clinic Website", "Lawyer/Advocate Website", "Consultancy Website", "Agency Website",
  "Startup Website", "Event Management Website", "Wedding Planner Website", "Photography Website",
  "Artist Portfolio", "Architect Website", "Construction Company Website", "Interior Designer Website",
  "Automobile Showroom", "Furniture Store Website", "Clothing Store Website", "Jewelry Store Website",
  "Electronics Store", "Book Store Website", "Gaming Website", "Cryptocurrency Website",
  "NFT Marketplace", "Social Media Platform", "Membership Website", "Course Platform (LMS)",
  "Dropshipping Store", "Affiliate Marketing Website", "Directory Website", "Job Board",
  "Service Booking Website", "Appointment Scheduling", "CRM Dashboard", "Admin Panel",
  "Inventory Management System", "School Management System", "Hospital Management System",
  "Donation Platform", "NGO Website", "Personal Branding Website", "Resume/CV Website",
  "Linktree Alternative", "Coming Soon Page", "Sales Funnel Page", "SaaS Landing Page",
  "Video Streaming Website", "Podcast Website", "Newsletter Website", "Magazine Website"
];

interface GeneratedProposal {
  subjectLine: string;
  greeting: string;
  introduction: string;
  deliverables: string[];
  priceMin: number;
  priceMax: number;
  durationDays: number;
  smartQuestion: string;
  closing: string;
  isMock?: boolean;
}

const PRESET_CLIENTS = [
  "Photographer", "Restaurant", "Doctor", "Clothing brand", "Fitness Gym", "Beauty Salon"
];

const PRESET_COMBOS = [
  { service: "Landing Page", client: "Fitness Gym", tone: "confident" },
  { service: "Portfolio Website", client: "Photographer", tone: "creative" },
  { service: "WordPress Website", client: "Restaurant", tone: "formal" },
  { service: "E-commerce Website", client: "Clothing brand", tone: "confident" }
];

export default function App() {
  const [service, setService] = useState<string>('');
  const [clientType, setClientType] = useState<string>('');
  const [tone, setTone] = useState<string>('confident');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [proposal, setProposal] = useState<GeneratedProposal | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ service?: string; clientType?: string }>({});
  const [showAllServices, setShowAllServices] = useState<boolean>(false);

  const [editedSubject, setEditedSubject] = useState('');
  const [editedGreeting, setEditedGreeting] = useState('');
  const [editedIntro, setEditedIntro] = useState('');
  const [editedDeliverables, setEditedDeliverables] = useState<string[]>([]);
  const [newDeliverableText, setNewDeliverableText] = useState('');
  const [editedPriceMin, setEditedPriceMin] = useState<number>(100);
  const [editedPriceMax, setEditedPriceMax] = useState<number>(200);
  const [editedDuration, setEditedDuration] = useState<number>(5);
  const [editedQuestion, setEditedQuestion] = useState('');
  const [editedClosing, setEditedClosing] = useState('');

  // Tone-based pricing function
  const getPriceByTone = (basePrice: number, toneType: string) => {
    if (toneType === 'confident') return { min: basePrice, max: basePrice + 150 };
    if (toneType === 'creative') return { min: basePrice - 50, max: basePrice + 100 };
    if (toneType === 'formal') return { min: basePrice + 50, max: basePrice + 200 };
    return { min: basePrice, max: basePrice + 150 };
  };

  const loadPreset = (presetService: string, presetClient: string, presetTone?: string) => {
    setService(presetService);
    setClientType(presetClient);
    if (presetTone) setTone(presetTone);
    setErrors({});
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const newErrors: { service?: string; clientType?: string } = {};
    if (!service.trim()) newErrors.service = "Service type is required.";
    if (!clientType.trim()) newErrors.clientType = "Client business type is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setIsEditing(false);

    const steps = [
      "Sadaf is preparing your proposal... ⏳",
      "Analyzing business goals... 📊",
      "Designing conversion layout... 📈",
      "Configuring budget parameters... 💰",
      "Generating final proposal format... ✨"
    ];

    let currentStep = 0;
    setLoadingStep(steps[currentStep]);
    const intervalId = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) setLoadingStep(steps[currentStep]);
    }, 500);

    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: service.trim(), clientType: clientType.trim(), style: tone })
      });

      if (!response.ok) throw new Error("API Connection error.");
      const data = await response.json();
      setProposal(data);
    } catch (err) {
      setTimeout(() => {
        const lowerService = service.toLowerCase();
        let basePrice = 200;
        let durationDays = 7;
        let deliverables = [
          `✨ Complete design & development of ${service}`,
          `✨ Fully mobile-responsive layout (phone, tablet, laptop, desktop)`,
          `✨ Page speed optimization for better Google ranking`,
          `✨ Contact form with email integration`,
          `✨ 1 month free technical support & bug fixes`
        ];
        let smartQuestion = "Do you have existing brand colors, logo, or content ready?";
        let intro = `I am Sadaf Ameer, a professional web developer with 5+ years of experience. I will deliver:`;
        let greeting = `Dear ${clientType} Team,`;
        let closing = `Please review the proposal. The budget is negotiable based on your specific requirements. I look forward to working with you.`;

        // Service-based base pricing in USD
        if (lowerService.includes("landing")) {
          basePrice = 150;
          durationDays = 3;
        } else if (lowerService.includes("portfolio")) {
          basePrice = 200;
          durationDays = 5;
        } else if (lowerService.includes("e-commerce") || lowerService.includes("store") || lowerService.includes("shop")) {
          basePrice = 600;
          durationDays = 14;
        } else if (lowerService.includes("wordpress")) {
          basePrice = 350;
          durationDays = 7;
        } else if (lowerService.includes("seo")) {
          basePrice = 250;
          durationDays = 30;
        } else if (lowerService.includes("business")) {
          basePrice = 400;
          durationDays = 7;
        } else if (lowerService.includes("blog")) {
          basePrice = 180;
          durationDays = 4;
        } else if (lowerService.includes("real estate")) {
          basePrice = 500;
          durationDays = 10;
        } else if (lowerService.includes("restaurant") || lowerService.includes("cafe")) {
          basePrice = 350;
          durationDays = 7;
        } else if (lowerService.includes("clinic") || lowerService.includes("medical") || lowerService.includes("doctor")) {
          basePrice = 400;
          durationDays = 7;
        } else if (lowerService.includes("wordpress")) {
          basePrice = 300;
          durationDays = 6;
        }

        // Apply tone-based pricing
        const tonePrice = getPriceByTone(basePrice, tone);
        
        // Different greeting/intro based on tone
        if (tone === 'creative') {
          greeting = `Hey ${clientType}! 👋`;
          intro = `I'm Sadaf Ameer, and I love creating stunning websites that tell your brand's story. Here's what I can build for you:`;
          closing = `Can't wait to bring your vision to life! Let's hop on a quick call to discuss the magic we'll create together. ✨`;
          deliverables = [
            `🎨 Eye-catching, modern design for ${service}`,
            `📱 Perfect on all devices (phones, tablets, laptops)`,
            `⚡ Lightning fast loading speed`,
            `📧 Contact forms that actually work`,
            `🆓 1 month of free tweaks & support`
          ];
        } else if (tone === 'formal') {
          greeting = `To The Management, ${clientType}`;
          intro = `This proposal outlines the professional web development services to be rendered by Sadaf Ameer for your esteemed organization. The following deliverables are included:`;
          closing = `Kindly review the proposed terms. I am available to discuss any modifications or clarifications at your earliest convenience.`;
          deliverables = [
            `✓ Comprehensive development of ${service}`,
            `✓ Fully responsive cross-platform compatibility`,
            `✓ Performance optimization and SEO readiness`,
            `✓ Integrated lead capture mechanism`,
            `✓ 30 days post-launch technical support`
          ];
        } else {
          // confident (default)
          greeting = `Dear ${clientType} Team,`;
          intro = `I am Sadaf Ameer, a professional web developer with 5+ years of experience. I will deliver:`;
          closing = `Please review the proposal. The budget is negotiable based on your specific requirements. I look forward to working with you.`;
          deliverables = [
            `✨ Complete design & development of ${service}`,
            `✨ Fully mobile-responsive layout`,
            `✨ Page speed optimization for better Google ranking`,
            `✨ Contact form with email integration`,
            `✨ 1 month free technical support & bug fixes`
          ];
        }

        setProposal({
          subjectLine: `${service} for ${clientType}`,
          greeting,
          introduction: intro,
          deliverables,
          priceMin: tonePrice.min,
          priceMax: tonePrice.max,
          durationDays,
          smartQuestion,
          closing,
          isMock: true
        });
      }, 500);
    } finally {
      clearInterval(intervalId);
      setIsLoading(false);
    }
  };

  const getCompiledProposalText = () => {
    const subject = isEditing ? editedSubject : (proposal?.subjectLine || '');
    const greeting = isEditing ? editedGreeting : (proposal?.greeting || '');
    const intro = isEditing ? editedIntro : (proposal?.introduction || '');
    const delivs = isEditing ? editedDeliverables : (proposal?.deliverables || []);
    const minP = isEditing ? editedPriceMin : (proposal?.priceMin || 100);
    const maxP = isEditing ? editedPriceMax : (proposal?.priceMax || 200);
    const days = isEditing ? editedDuration : (proposal?.durationDays || 5);
    const question = isEditing ? editedQuestion : (proposal?.smartQuestion || '');
    const closing = isEditing ? editedClosing : (proposal?.closing || '');

    const formattedDeliverables = delivs.map(d => `${d}`).join('\n');

    return `📌 Subject: ${subject}\n\n${greeting}\n\n${intro}\n\n${formattedDeliverables}\n\n⏱️ Timeline: ${days} days\n\n💰 Price: $${minP} - $${maxP} USD (negotiable)\n\n❓ One Question: ${question}\n\n${closing}\n\nBest regards,\nSadaf Ameer\nWeb Developer`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCompiledProposalText());
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const handlePrint = () => window.print();

  const addDeliverable = () => {
    if (newDeliverableText.trim()) {
      setEditedDeliverables([...editedDeliverables, newDeliverableText.trim()]);
      setNewDeliverableText('');
    }
  };

  const removeDeliverable = (index: number) => setEditedDeliverables(editedDeliverables.filter((_, i) => i !== index));
  const updateDeliverableValue = (index: number, val: string) => {
    const updated = [...editedDeliverables];
    updated[index] = val;
    setEditedDeliverables(updated);
  };

  const displayedServices = showAllServices ? ALL_SERVICES : ALL_SERVICES.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <IconSparkles />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Proposal Master</h1>
              <p className="text-xs text-slate-400">Created by <span className="text-cyan-300 font-semibold">Sadaf Ameer</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <IconCpu />
            <span className="text-xs text-cyan-300 font-mono">USD Pricing • Tone-Based Rates</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Panel - Form */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
              <div className="border-b border-white/10 pb-3 mb-4">
                <h2 className="text-base font-semibold flex items-center gap-2">
                  <IconBriefcase /> Customize Your Pitch
                </h2>
                <p className="text-xs text-slate-400 mt-1">Fill details to generate a winning proposal</p>
              </div>

              <form onSubmit={handleGenerate} className="space-y-5">
                {/* Service Input - WITH ALL WEBSITE TYPES */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                    <IconGlobe /> Website Type / Service <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="Type or select from below: Portfolio, E-commerce, Business, etc."
                    className={`w-full bg-slate-900 border ${errors.service ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none`}
                  />
                  {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                  
                  {/* ALL WEBSITE TYPES BUTTONS GRID */}
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] text-slate-400">⬇️ Click to select from {ALL_SERVICES.length}+ website types:</span>
                      <button type="button" onClick={() => setShowAllServices(!showAllServices)} className="text-[10px] text-cyan-400 hover:text-cyan-300">
                        {showAllServices ? "Show Less ▲" : "Show All ▼"}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
                      {displayedServices.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setService(val)}
                          className={`text-[10px] px-2 py-1 bg-slate-900 border rounded-md transition-all whitespace-nowrap ${
                            service === val 
                              ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10' 
                              : 'border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                    <p className="text-[9px] text-slate-500 mt-2 text-center">
                      {ALL_SERVICES.length}+ website types available — scroll to see more
                    </p>
                  </div>
                </div>

                {/* Client Input */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                    <IconBuilding /> Client Business Type <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    placeholder="e.g., Photographer, Restaurant, Doctor, Clothing brand"
                    className={`w-full bg-slate-900 border ${errors.clientType ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none`}
                  />
                  {errors.clientType && <p className="text-xs text-red-400 mt-1">{errors.clientType}</p>}
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {PRESET_CLIENTS.map((val) => (
                      <button key={val} type="button" onClick={() => setClientType(val)} className="text-[10px] px-2 py-1 bg-slate-900 border border-white/10 rounded-md text-slate-300 hover:border-indigo-400/50 transition-all">
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tone Selection - NOW WITH PRICE DIFFERENCE */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                    <IconFlame /> Proposal Tone <span className="text-cyan-400 text-[9px] ml-2">(Changes price & language)</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'confident', title: 'Confident', desc: 'Action-driven', priceHint: 'Standard pricing' },
                      { id: 'creative', title: 'Creative', desc: 'Emotional hook', priceHint: '~$50 less' },
                      { id: 'formal', title: 'Formal', desc: 'Detailed structure', priceHint: '~$100 more' }
                    ].map((x) => (
                      <button key={x.id} type="button" onClick={() => setTone(x.id)} className={`p-2 rounded-xl border transition-all text-left ${tone === x.id ? 'bg-cyan-500/10 border-cyan-400/50 text-white shadow-lg shadow-cyan-500/10' : 'bg-slate-900/50 border-white/10 text-slate-400 hover:bg-slate-900'}`}>
                        <div className="text-xs font-semibold">{x.title}</div>
                        <div className="text-[9px] text-slate-500">{x.desc}</div>
                        <div className="text-[8px] text-cyan-500/70 mt-1">{x.priceHint}</div>
                      </button>
                    ))}
                  </div>
                  <p className="text-[9px] text-slate-500 mt-2 text-center">
                    💡 Different tones = different pricing & proposal language
                  </p>
                </div>

                {/* Generate Button */}
                <button type="submit" disabled={isLoading} className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2">
                  {isLoading ? <><IconLoader /> <span>{loadingStep}</span></> : <><IconSparkles /> Generate My Proposal</>}
                </button>
              </form>
            </div>

            {/* Quick Combos */}
            <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5">
              <h3 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5"><IconInfo /> Quick Recipe Combos</h3>
              <div className="space-y-2">
                {PRESET_COMBOS.map((combo, idx) => (
                  <button key={idx} onClick={() => loadPreset(combo.service, combo.client, combo.tone)} className="w-full text-left py-2 px-3 bg-slate-900/30 border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all flex justify-between items-center">
                    <div>
                      <div className="text-xs font-semibold text-cyan-300">{combo.service}</div>
                      <div className="text-[10px] text-slate-400">For {combo.client} • Tone: {combo.tone}</div>
                    </div>
                    <IconChevron />
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-4 text-center">
              <p className="text-[10px] text-slate-400">📊 Total Website Types Available</p>
              <p className="text-2xl font-bold text-cyan-400">{ALL_SERVICES.length}+</p>
              <p className="text-[9px] text-slate-500">Pricing in USD • Tone-based rates</p>
            </div>
          </div>

          {/* Right Panel - Proposal Output */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/60 border border-white/10 rounded-2xl overflow-hidden">
              
              {/* Toolbar */}
              {proposal && (
                <div className="border-b border-white/10 bg-slate-950/80 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-900 rounded-lg p-0.5">
                      <button onClick={() => setIsEditing(false)} className={`px-3 py-1.5 text-xs rounded-md transition-all flex items-center gap-1.5 ${!isEditing ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white' : 'text-slate-400'}`}>
                        <IconEye /> Preview
                      </button>
                      <button onClick={() => setIsEditing(true)} className={`px-3 py-1.5 text-xs rounded-md transition-all flex items-center gap-1.5 ${isEditing ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white' : 'text-slate-400'}`}>
                        <IconEdit /> Edit
                      </button>
                    </div>
                    <button onClick={handlePrint} className="p-2 text-slate-400 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all"><IconPrinter /></button>
                    <button onClick={handleCopy} className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-2 ${copyStatus ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-200 hover:bg-slate-800'}`}>
                      {copyStatus ? <IconCheck /> : <IconCopy />} {copyStatus ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}

              {/* Content Area */}
              <div className="p-5 sm:p-8 min-h-[500px] max-h-[600px] overflow-y-auto">
                
                {!proposal && !isLoading && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center mb-4"><IconSparkles /></div>
                    <h3 className="text-lg font-semibold mb-2">Ready to Win Clients</h3>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto">Select from {ALL_SERVICES.length}+ website types, fill client details, choose a tone, and generate a professional proposal.</p>
                    <p className="text-xs text-cyan-400 mt-4">💡 Try different tones — each has different pricing and language!</p>
                  </div>
                )}

                {isLoading && (
                  <div className="text-center py-12">
                    <div className="animate-spin text-4xl mb-4">⚙️</div>
                    <p className="text-sm text-cyan-300">{loadingStep}</p>
                  </div>
                )}

                {proposal && !isLoading && (
                  <div className="space-y-5">
                    
                    {proposal.isMock && (
                      <div className="p-3 bg-cyan-950/40 border border-cyan-500/20 rounded-xl text-xs text-slate-300">
                        <IconInfo /> Proposal generated with <span className="text-cyan-300 font-semibold">{tone}</span> tone • Price: ${proposal.priceMin} - ${proposal.priceMax} USD
                      </div>
                    )}

                    {!isEditing ? (
                      // Preview Mode
                      <div className="space-y-4">
                        <div className="border-b border-white/10 pb-3">
                          <div className="text-xs text-slate-400">Subject:</div>
                          <div className="font-semibold text-white text-lg">{editedSubject}</div>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="font-semibold text-white text-base">{editedGreeting}</p>
                          <p className="text-slate-300 text-sm">{editedIntro}</p>
                          
                          <div className="mt-4">
                            <h4 className="text-xs font-bold text-cyan-400 uppercase mb-2">📋 Key Deliverables:</h4>
                            <ul className="space-y-1.5">
                              {editedDeliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300"><span className="text-cyan-400">✦</span> {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border border-cyan-500/10">
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase tracking-wider">💰 Investment (USD)</div>
                              <div className="text-xl font-bold text-cyan-300">${editedPriceMin} - ${editedPriceMax}</div>
                              <div className="text-[10px] text-slate-500 mt-1">(Negotiable based on budget)</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase tracking-wider">⏱️ Timeline</div>
                              <div className="text-xl font-semibold text-cyan-300">{editedDuration} days</div>
                              <div className="text-xs text-slate-400">Including testing & revisions</div>
                            </div>
                          </div>

                          <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                            <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1"><IconHelp /> Strategic Question:</div>
                            <p className="text-sm text-slate-200 mt-1 italic">{editedQuestion}</p>
                          </div>

                          <p className="text-slate-300 text-sm">{editedClosing}</p>

                          <div className="border-t border-white/10 pt-4 mt-4">
                            <p className="font-semibold text-white">Best regards,</p>
                            <p className="text-cyan-300 text-base font-medium">Sadaf Ameer</p>
                            <p className="text-xs text-slate-400">Professional Web Developer</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Edit Mode
                      <div className="space-y-4">
                        <input type="text" value={editedSubject} onChange={(e) => setEditedSubject(e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Subject" />
                        <input type="text" value={editedGreeting} onChange={(e) => setEditedGreeting(e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Greeting" />
                        <textarea value={editedIntro} onChange={(e) => setEditedIntro(e.target.value)} rows={2} className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Introduction"></textarea>
                        
                        <div>
                          <label className="text-xs text-slate-400 mb-1 block">Deliverables</label>
                          {editedDeliverables.map((item, idx) => (
                            <div key={idx} className="flex gap-2 mb-2">
                              <input value={item} onChange={(e) => updateDeliverableValue(idx, e.target.value)} className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white" />
                              <button onClick={() => removeDeliverable(idx)} className="px-2 py-1 text-red-400"><IconTrash /></button>
                            </div>
                          ))}
                          <div className="flex gap-2 mt-2">
                            <input value={newDeliverableText} onChange={(e) => setNewDeliverableText(e.target.value)} placeholder="Add deliverable..." className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white" onKeyDown={(e) => e.key === 'Enter' && addDeliverable()} />
                            <button onClick={addDeliverable} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm">Add</button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <input type="number" value={editedPriceMin} onChange={(e) => setEditedPriceMin(parseInt(e.target.value) || 0)} className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Min Price $" />
                          <input type="number" value={editedPriceMax} onChange={(e) => setEditedPriceMax(parseInt(e.target.value) || 0)} className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Max Price $" />
                          <input type="number" value={editedDuration} onChange={(e) => setEditedDuration(parseInt(e.target.value) || 0)} className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Days" />
                          <input type="text" value={editedQuestion} onChange={(e) => setEditedQuestion(e.target.value)} className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Question" />
                        </div>

                        <textarea value={editedClosing} onChange={(e) => setEditedClosing(e.target.value)} rows={2} className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Closing"></textarea>
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* Bottom Bar */}
              {proposal && !isLoading && (
                <div className="border-t border-white/10 p-4 bg-slate-950/80 flex justify-end">
                  <button onClick={handleCopy} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${copyStatus ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white'}`}>
                    {copyStatus ? '✓ Copied!' : '📋 Copy Full Proposal'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/90 text-slate-400 py-6 text-center text-xs mt-8">
        <p>Built with ❤️ by <span className="text-cyan-300 font-semibold">Sadaf Ameer</span> | Professional Freelance Web Developer</p>
        <p className="text-[10px] mt-1">💰 All prices in USD • Tone-based dynamic pricing • {ALL_SERVICES.length}+ website types supported</p>
      </footer>
    </div>
  );
}