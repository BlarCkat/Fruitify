"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import AnimatedShield from './components/AnimatedShield';
import { PiFacebookLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill, PiTiktokLogoFill, PiXLogo } from 'react-icons/pi';
import Link from 'next/link';

const HomeView = () => {
  return ( 
    <main className="min-h-screen h-fit flex flex-col relative bg-[#000000] text-white overflow-hidden">
      {/* Header Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <nav className="w-full flex justify-between items-center py-8" role="navigation" aria-label="Main navigation">
          <a href="/" className="text-2xl font-medium tracking-tight" aria-label="Frutify home">
            <Image src={'/img/logo_white.svg'} alt="Frutify Logo" width={120} height={40} />
          </a>
          <button 
            className="px-6 py-2 rounded-full text-sm text-black bg-[#FFD700] border border-[#ffffff1a] hover:bg-[#ffffff1a] transition-colors"
            aria-label="Join the waitlist"
          >
            Join the Waitlist
          </button>
        </nav>

        {/* Hero Section */}
        <section 
          className="flex flex-col items-center text-center mt-20 md:mt-28"
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading"
            className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-medium tracking-[-0.02em] max-w-[960px]"
          >
            Next-Gen Operating System for Africa&apos;s Fresh Produce Exports.
          </h1>
          <p className="mt-8 text-[#999999] text-lg md:text-xl max-w-[800px] leading-relaxed">
            We connect climate-smart farms, verified traceability, and global trade, empowering farmers, exporters, and buyers to achieve more, waste less, and trade sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 z-9">
            <button 
              className="px-8 py-3 rounded-full bg-[#FFD700] text-black font-medium hover:bg-[#FFE44D] transition-colors"
              aria-label="Join OnTrade platform"
            >
              Join OnTrade
            </button>
            <button 
              className="px-8 py-3 rounded-full bg-transparent border border-[#ffffff1a] font-medium hover:bg-[#ffffff1a] transition-colors"
              aria-label="Learn more about our platform"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section 
          className="relative w-full h-fit pb-[150px] scale-[1.4]"
          aria-label="Platform dashboard preview"
        >
          <Image src={'/img/hero_dashboard.png'} alt="OnTrade platform dashboard" layout="responsive" width={1900} height={800} />
          
        </section>

        {/* About Section */}
        <section 
          className="mt-32 md:mt-40"
          aria-labelledby="about-heading"
        >
          <div className="max-w-[800px]">
            <a href="/" className="text-2xl font-medium tracking-tight mb-6 block" aria-label="Frutify home">
              <Image src={'/img/logo_white.svg'} alt="Frutify Logo" width={120} height={40} />
            </a>
            <h2 
              id="about-heading"
              className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] text-[#999999] mb-8"
            >
              Reimagining How Africa Grows,Trades, and Exports Fresh Produce.
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              Fruitify is a green tech company building the next-generation operating system 
              for sustainable agriculture and export trade. Starting in Ghana and scaling 
              across Africa and other emerging markets, we integrate smart farming, 
              traceability, and digital trade to make it easier for producers and buyers to 
              connect, transparently and profitably.
            </p>
          </div>
        </section>

        {/* Features Section with Pie Chart */}
        <section className="mt-32 md:mt-40 flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] mb-6">
              Reduce post-harvest waste<br />
              <span className="text-[#999999]">with data-driven farming.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              Using real-time insights from the field to optimize harvesting, storage, and logistics for maximum yield and quality.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <InteractivePieChart />
            {/* <Image src={'/img/img_data-driven-farming.png'} alt="Data-driven farming" layout="responsive" width={800} height={600} /> */}
          </div>
        </section>

        {/* Verified Exports Section */}
        <section className="mt-32 md:mt-40 flex flex-col items-center text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em]">
            Enable verified, traceable exports.
          </h2>
          <div className="mt-16 relative w-full max-w-[800px] aspect-video bg-[#111111] rounded-2xl overflow-hidden">
            <AnimatedShield />
          </div>
        </section>

        {/* Market Access Section */}
        <section className="mt-32 md:mt-40 flex flex-col items-center text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] max-w-[800px]">
            Unlock fair market access and buyer confidence.
          </h2>
          <div className="mt-16 relative w-full max-w-[800px] aspect-video bg-[#111111] rounded-2xl overflow-hidden p-8">
            <AnimatedGraph />
          </div>
        </section>

        {/* Products Section */}
        <section className="mt-32 md:mt-40 flex flex-col items-center">
          <div className="text-center max-w-[800px] mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] mb-6">
              From farm to export.
            </h2>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
              OnFarm powers data-driven cultivation and traceability from the field, while OnTrade links verified suppliers to 
              international buyers through a digital marketplace that streamlines orders, compliance, and logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* OnFarm Card */}
            <div className="relative bg-[#0A0A0A] lg:h-[800px] h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute lg:mt-[50px] mt-[70px] px-8 text-sm lg:px-20 w-full z-2">
                <Image src={'/img/logo_onfarm.svg'} alt='onfarm logo' width={150} height={50} />
                <p className='text-gray-500 pt-10'>
                  Digitize field activities, integrate drone and AI insights, and maintain verified  production records. OnFarm helps farms improve harvest quality, meet export  standards, and build traceable supply data. <br />
                • Real-time field monitoring. <br />  
                • Drone and AI-powered crop insights. <br /> 
                • GlobalG.A.P.-aligned traceability.
                </p>
                <button className='mt-6 bg-[#FF5D2A] text-black font-bold py-2 px-4 rounded hover:opacity-70 cursor-pointer transition-opacity'>Download onFarm</button>
              </div>
              <div className="relative w-full h-full z-1">
                <Image src={'/img/img_onfarm.png'} alt='onfarm' width={600} height={200} className='absolute bottom-0'/>
              </div>
            </div>
            

            {/* OnTrade Card */}
            <div className="relative bg-[#0A0A0A] lg:h-[800px] h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute lg:mt-[50px] mt-[70px] px-8 text-sm lg:px-20 w-full z-2">
                <Image src={'/img/logo_ontrade.svg'} alt='ontrade logo' width={150} height={50} />
                <p className='text-gray-500 pt-10'>
                  OnTrade connects verified African producers directly to international buyers. It  consolidates sourcing, documentation, and compliance into one trusted digital  platform. <br />
                • Access verified export catalogs. <br />  
                • Track orders from farm to shipment. <br /> 
                • Ensure compliance and audit readiness.
                </p>
                <button className='mt-6 bg-[#FFC32A] text-black font-bold py-2 px-4 rounded hover:opacity-70 cursor-pointer transition-opacity'>Join onTrade</button>
              </div>
              <div className="relative w-full h-full z-1">
                <Image src={'/img/img_ontrade.png'} alt='ontrade' width={600} height={200} className='absolute -bottom-8'/>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholders Section */}
        <section className="mt-32 md:mt-40">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em]">
              Empowering <span className="text-white">Every Stakeholder in</span><br />
              the Export Chain.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {/* Top Row - Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Farmers Card */}
              <div className="group relative h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/img/for-farmers.webp"
                    alt="Farmer using digital tools in the field"
                    className="w-full h-full object-cover"
                    width={600} height={400}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-medium mb-4">For farmers</h3>
                  <p className="text-[#999999] group-hover:text-white transition-colors">
                    Digitize operations, meet international standards, and earn more from every harvest.
                  </p>
                </div>
              </div>

              {/* Exporters Card */}
              <div className="group relative h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                 <Image
                    src="/img/for-exporters.avif"
                    alt="Exporters collaborating with farmers"
                    className="w-full h-full object-cover"
                    width={600} height={800}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-medium mb-4">For Exporters & Aggregators</h3>
                  <p className="text-[#999999] group-hover:text-white transition-colors">
                    Consolidate traceable supply and streamline trade documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - Full Width Card */}
            <div className="group relative h-[480px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                 <Image
                    src="/img/for-buyers.avif"
                    alt="Buyer looking at containers"
                    className="w-full h-full object-cover"
                    width={600} height={800}
                  />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium mb-4">For Buyers</h3>
                <p className="text-[#999999] group-hover:text-white transition-colors">
                  Source verified, compliant, and high-quality produce from trusted African partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="mt-32 md:mt-40">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em]">
              Growing Sustainably.<br />
              <span className="text-[#999999]">Trading Transparently.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#666666] max-w-[800px] mx-auto leading-relaxed">
              At Fruitify, sustainability is at the heart of everything we do. Through
              smart farming and traceable trade, we&apos;re reducing waste, improving
              livelihoods, and creating a transparent export ecosystem that
              rewards quality and responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Climate-smart Card */}
            <div className="group relative h-[360px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                 <Image
                    src="/img/climate-smart-farming.jpg"
                    alt="Farmer using sustainable farming practices"
                    className="w-full h-full object-cover"
                    width={600} height={800}
                  />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium mb-2">
                  <span className="text-[#999999]">Climate-</span>smart<br />
                  production<br />
                  practices
                </h3>
              </div>
            </div>

            {/* Verified Supply Chain Card */}
            <div className="group relative h-[360px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                    src="/img/verified-supply.jpg"
                    alt="Team analyzing supply chain data"
                    className="w-full h-full object-cover"
                    width={600} height={800}
                  />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium mb-2">
                  Verified supply<br />
                  chain data for ESG<br />
                  reporting.
                </h3>
              </div>
            </div>

            {/* Fairer Income Card */}
            <div className="group relative h-[360px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                    src="/img/fairer-income.jpg"
                    alt="Farmers harvesting crops"
                    className="w-full h-full object-cover"
                    width={600} height={800}
                  />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium mb-2">
                  Fairer income for<br />
                  smallholder<br />
                  farmers
                </h3>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Future Vision Section */}
      <section className="w-full mt-32 md:mt-40 h-[600px] relative">
        <div className="absolute inset-0">
          <Image
            src="/img/banner-images.png"
            alt="Farmer using sustainable farming practices"
            className="w-full h-full object-cover"
            width={1000} height={2000}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-10">
            <h2 className="lg:pt-20 text-[32px] md:text-[40px] lg:text-[56px] leading-[1.2] font-medium tracking-[-0.02em] max-w-[800px]" style={{ width: '80%' }}>
              We&apos;re building <span className="text-white">the future of </span>
              agriculture because we are 
              <span className="text-[#999999]"> #BigOnSustainability.</span>
            </h2>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* CTA Section */}
        <section className="mt-32 md:mt-40">
          <div className="bg-[#FF4500] rounded-2xl p-12 md:p-16">
            <div className="max-w-[600px]">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] text-black mb-6">
                Let&apos;s Build the Future of Agricultural Trade.
              </h2>
              <p className="text-lg md:text-xl text-black/80 mb-8">
                Whether you&apos;re a farmer, cooperative, exporter, or global buyer, 
                Fruitify is your partner for growth, traceability, and sustainable trade.
              </p>
              <button 
                className="px-8 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition-colors"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 md:mt-40 mb-20">
          <div className="flex flex-col gap-20">
            {/* Footer Content */}
            <div>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-[-0.02em] max-w-[800px] mb-8">
                Building <span className="text-white">the Operating</span><br />
                <span className="text-white">System for Africa&apos;s Fresh</span><br />
                <span className="text-[#999999]">Produce Exports.</span>
              </h2>
              
              <button 
                className="px-8 py-3 rounded-xl bg-[#111111] text-white font-medium hover:bg-[#222222] transition-colors mb-6"
              >
                Let's Connect
              </button>
              
              <a 
                href="mailto:hello@fruitify.africa" 
                className="block text-[#666666] hover:text-white transition-colors"
              >
                hello@fruitify.africa
              </a>
            </div>

            <div className="flex gap-8">
              <Link href="https://linkedin.com/in/fruitifyhq"><PiLinkedinLogoFill size={32}/></Link>
              <Link href="https://instagram.com/fruitifyhq"><PiInstagramLogoFill size={32}/></Link>
              <Link href="https://x.com/fruitifyhq"><PiXLogo size={32}/></Link>
              <Link href="https://facebook.com/fruitifyhq"><PiFacebookLogoFill size={32}/></Link>
              <Link href="https://tiktok.com/@fruitifyhq"><PiTiktokLogoFill size={32}/></Link>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
              <div className="text-[#666666]">
                © 2025 Fruitify Technology Limited. All Rights Reserved.
              </div>
              <div className="flex gap-6">
                <a 
                  href="/privacy-policy" 
                  className="text-[#666666] hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-[#666666] hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

// Animated Graph Component
const AnimatedGraph = () => {
  const graphRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main yellow line drawing
      gsap.fromTo(".graph-line-yellow path", {
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
      }, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out"
      });

      // Animate the gray line with delay
      gsap.fromTo(".graph-line-gray path", {
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
      }, {
        strokeDashoffset: 0,
        duration: 2,
        delay: 0.5,
        ease: "power2.out"
      });

      // Animate the tooltip
      gsap.fromTo(".graph-tooltip", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 1.5,
        ease: "back.out(1.7)"
      });

      // Animate the value text
      gsap.fromTo(".graph-value", {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full" ref={graphRef}>
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-full border-l border-white/10 first:border-l-0" />
        ))}
      </div>

      {/* Graph lines */}
      <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
        {/* Yellow line */}
        <g className="graph-line-yellow">
          <path
            d="M0,300 C100,280 200,150 300,140 S500,160 600,100 S750,90 800,80"
            fill="none"
            stroke="#FFD700"
            strokeWidth="3"
          />
          <path
            d="M0,300 C100,280 200,150 300,140 S500,160 600,100 S750,90 800,80"
            fill="none"
            stroke="#FFD700"
            strokeWidth="12"
            strokeLinecap="round"
            strokeOpacity="0.1"
          />
        </g>

        {/* Gray line */}
        <g className="graph-line-gray">
          <path
            d="M0,250 C150,240 300,260 450,240 S700,200 800,220"
            fill="none"
            stroke="#666666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </g>
      </svg>

      {/* Tooltip */}
      <div 
        className="graph-tooltip absolute bg-[#FFD700] text-black px-3 py-1.5 rounded-lg font-medium"
        style={{ top: '35%', left: '35%' }}
      >
        2
      </div>

      {/* Value text */}
      <div className="graph-value absolute bottom-4 right-4 text-xl font-medium">
        $20,000
      </div>

      {/* Date label */}
      <div className="absolute bottom-4 text-sm text-[#666666]" style={{ left: '35%' }}>
        25th Oct
      </div>
    </div>
  );
};



// Interactive Pie Chart Component
const InteractivePieChart = () => {
  const chartRef = useRef(null);
  const textRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const segments = [
    { id: 'export', color: '#FFD700', percentage: 75, label: 'Exports' },
    { id: 'local', color: '#FF4500', percentage: 25, label: 'Local Market' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(chartRef.current, {
        rotate: -90,
        scale: 0.9,
      }, {
        rotate: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)"
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHover = (id: string, isHover: boolean): void => {
    setActiveSegment(isHover ? id : null);
    if (isHover) {
      gsap.to(textRefs.current[id], {
        scale: 1.1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(textRefs.current[id], {
        scale: 1,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  };

  const calculateOffset = (index: number): number => {
    return -segments
      .slice(0, index)
      .reduce((acc, segment) => acc + segment.percentage, 0) * 2.83;
  };
  return (
    <div className="relative" ref={chartRef} style={{ width: 1000, height: 1000 }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform -rotate-90"
      >
      
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="20"
        />
        {/* Segments */}
        {segments.map((segment, index) => (
          <circle
            key={segment.id}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={segment.color}
            strokeWidth="20"
            strokeDasharray={`${(segment.percentage * 2.83) - 8} ${100 * 2.83}`}
            strokeDashoffset={calculateOffset(index) - (index * 8)}
            className="transition-all duration-300 hover:filter hover:brightness-110"
            style={{ cursor: 'pointer' }}
            strokeLinecap="round"
            onMouseEnter={() => handleHover(segment.id, true)}
            onMouseLeave={() => handleHover(segment.id, false)}
          />
        ))}
      </svg>
      {/* Percentage texts */}
      {segments.map((segment) => (
        <div 
          key={segment.id}
          ref={el => { textRefs.current[segment.id] = el; }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold opacity-0 flex flex-col items-center"
          style={{ color: segment.color }}
        >
          <span className="text-5xl">{segment.percentage}%</span>
          <span className="text-2xl mt-2">{segment.label}</span>
        </div>
      ))}
    </div>
  );
};

 
export default HomeView; 