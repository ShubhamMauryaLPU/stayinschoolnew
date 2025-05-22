import React, { useState, useRef, useEffect } from "react";
import {
  Lightbulb,
  Users,
  GraduationCap,
  HeartHandshake,
  Layers,
  LayoutGrid,
  MessageCircleHeart,
  BarChart2,
  BookOpen,
  ShieldCheck,
  Smartphone,
  Globe,
  Award,
  MapPin,
  Clock,
  School,
  Bookmark,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const team1 = [
  {
    name: "Dr. Kavita Sharma",
    role: "Chief Academic Officer",
    bio: "Leads curriculum design and academic innovation across all educational stages.",
    focus: "Academic Strategy",
  },
  {
    name: "Ramesh Patel",
    role: "Head of Technology",
    bio: "Develops and manages technology infrastructure for education systems.",
    focus: "Tech & Infrastructure",
  },
  {
    name: "Meera Iyer",
    role: "Director of Community Engagement",
    bio: "Fosters collaboration with communities to support inclusive learning.",
    focus: "Community Outreach",
  },
  {
    name: "Ajay Verma",
    role: "Financial Aid Coordinator",
    bio: "Manages financial aid distribution and student support funds.",
    focus: "Financial Support",
  },
  {
    name: "Sunita Rathi",
    role: "Head of Research & Evaluation",
    bio: "Oversees education data analytics and program evaluation.",
    focus: "Monitoring & Impact",
  },
];
const tools = [
  {
    icon: Lightbulb,
    title: "Early Warning System",
    desc: "Our AI-powered analytics detect subtle patterns indicating student disengagement, triggering alerts for teachers and counselors with suggested intervention strategies.",
    color: "bg-orange-100",
    features: [
      "Real-time monitoring",
      "Predictive analytics",
      "Customizable thresholds",
    ],
  },
  {
    icon: Users,
    title: "Community Learning Hub",
    desc: "Virtual mentorship platform connecting rural students with urban professionals across 25+ fields, with scheduled sessions and career guidance modules.",
    color: "bg-blue-100",
    features: [
      "Subject matter experts",
      "Career pathways",
      "Regional language support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Adaptive Learning Platform",
    desc: "Dynamic curriculum that adjusts difficulty based on performance, with multimedia lessons accessible via low-bandwidth connections for offline use.",
    color: "bg-purple-100",
    features: ["Gamified learning", "Progress tracking", "Multi-device sync"],
  },
  {
    icon: HeartHandshake,
    title: "Financial Aid Navigator",
    desc: "Comprehensive database of 1,200+ scholarships with AI-assisted matching, document preparation, and deadline tracking to reduce economic barriers.",
    color: "bg-green-100",
    features: [
      "Automated applications",
      "Eligibility calculator",
      "Verification support",
    ],
  },
  {
    icon: MessageCircleHeart,
    title: "Family Engagement Portal",
    desc: "Two-way communication system with automated progress reports, parenting workshops, and community forums available in 12 regional languages.",
    color: "bg-pink-100",
    features: ["SMS notifications", "Voice messages", "Video resources"],
  },
  {
    icon: LayoutGrid,
    title: "Flexible Education Manager",
    desc: "Digital tools supporting alternative education models with competency-based progression, attendance flexibility, and hybrid learning options.",
    color: "bg-yellow-100",
    features: ["Custom schedules", "Skill mapping", "Government compliance"],
  },
];

const stats = [
  {
    value: "15M+",
    label: "Annual Dropouts Preventable",
    icon: School,
    desc: "Students at risk across India",
  },
  {
    value: "26%",
    label: "National Dropout Rate",
    icon: BarChart2,
    desc: "Secondary school level",
  },
  {
    value: "2.5x",
    label: "Rural Disparity",
    icon: Globe,
    desc: "Higher than urban areas",
  },
  {
    value: "80%",
    label: "Retention Improvement",
    icon: ShieldCheck,
    desc: "With early intervention",
  },
  {
    value: "10+",
    label: "Languages Supported",
    icon: BookOpen,
    desc: "Including tribal dialects",
  },
  {
    value: "200+",
    label: "Schools Implemented",
    icon: MapPin,
    desc: "Across 15 states",
  },
];

const team = [
  {
    name: "Vikas Patel",
    role: "Education Technology",
    bio: "Full Stack Developer",
    focus: "Learning systems architecture",
    image: "/images/about/vikas.png",
  },
  {
    name: "Shubham Maurya",
    role: "Software Developer",
    bio: "LPU alumnus specialied in software develper",
    focus: "Early warning algorithms",
    image: "/images/about/shubham1.png",
  },
  {
    name: "Abhilash kumar",
    role: "Policy Integrator",
    bio: "Education consultant specialized in web developer",
    focus: "Government partnerships",
    image: "/images/about/abhilash.png",
  },
  {
    name: "Aditya Kumar",
    role: "Community Engagement",
    bio: "Grassroots organizer with decade-long work in rural schools",
    focus: "Parent outreach programs",
    image: "/images/about/aditya1.jpg",
  },
  {
    name: "Roubin Raj",
    role: "Student Support Mentor",
    bio: "Education consultant & financinal Manager specialized in web developer",
    focus: "Government partnerships",
    image: "/images/about/roubin.png",
  },
];

const milestones = [
  { year: "2018", event: "Pilot program launched in 5 Rajasthan schools" },
  { year: "2019", event: "Recognized by NITI Aayog as promising innovation" },
  { year: "2020", event: "Integrated with DIKSHA platform during pandemic" },
  { year: "2021", event: "Expanded to 3 states with CSR partnerships" },
  { year: "2022", event: "Awarded UNESCO ICT in Education Prize" },
  { year: "2023", event: "National rollout begins across 10,000 schools" },
];

const AboutUs = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1, spacing: 15 },
  });

  // Clean autoplay setup
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 text-gray-800">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Reimagining Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Combating India's dropout crisis through{" "}
            <span className="font-semibold text-orange-600">
              technology-enabled
            </span>{" "}
            interventions that make learning accessible, engaging, and
            sustainable for every child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center group">
              Explore Our Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center border border-orange-200">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Our Whitepaper
            </button>
          </div>
        </div>
      </div>

      {/* Video Section with Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-all">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-orange-200 to-amber-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-ping"></div>
                    <Smartphone className="w-16 h-16 mx-auto text-orange-600 relative" />
                  </div>
                  <h3 className="text-2xl font-semibold text-orange-800 mb-2">
                    Platform Demonstration
                  </h3>
                  <p className="text-orange-700">
                    See how we're transforming education delivery
                  </p>
                  <button className="mt-6 px-6 py-2 bg-white text-orange-600 rounded-full font-medium shadow-md flex items-center mx-auto group">
                    Play Video
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-700 mb-8">
              The Challenge We Address
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              India accounts for{" "}
              <span className="font-semibold text-orange-600">
                20% of global school dropouts
              </span>
              , with rural girls being the most affected. Our data reveals that
              63% of dropouts occur due to preventable factors like:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
                <span>Academic disengagement (38%)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <Bookmark className="w-4 h-4 text-blue-600" />
                </div>
                <span>Economic pressures (29%)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <span>Lack of local support (22%)</span>
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md border-t-4 border-orange-500"
                >
                  <p className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with Timeline */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              Our Vision & Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to national recognition, our path to
              transforming education
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="sticky top-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Core Philosophy
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We believe education should adapt to children's lives, not the
                  other way around. Our approach combines{" "}
                  <span className="font-semibold text-orange-600">
                    technological innovation
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-blue-600">
                    community partnership
                  </span>{" "}
                  to create sustainable solutions.
                </p>
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <h4 className="font-semibold text-lg mb-2 text-orange-800">
                      Equity Focus
                    </h4>
                    <p className="text-gray-700">
                      Specialized interventions for girls, tribal communities,
                      and children with disabilities
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">
                      NEP 2020 Alignment
                    </h4>
                    <p className="text-gray-700">
                      Directly supporting the policy's goals of 100% secondary
                      education enrollment and retention by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Milestones
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-orange-200"></div>

                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-16 pb-10">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-orange-100 border-4 border-white flex items-center justify-center">
                      <span className="font-bold text-orange-600">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-800">{milestone.event}</p>
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-5 top-10 h-8 w-0.5 bg-orange-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-700 mb-3">
              Our Comprehensive Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic solutions addressing the entire ecosystem around at-risk
              students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map(({ icon: Icon, title, desc, color, features }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all transform hover:-translate-y-2 group"
              >
                <div className={`${color} p-6`}>
                  <div className="w-14 h-14 rounded-xl bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center mb-5 transition-transform group-hover:rotate-6">
                    <Icon className="text-gray-800 w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <div className="bg-orange-100 p-0.5 rounded-full mr-2 mt-1">
                          <ChevronRight className="w-3 h-3 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-orange-600 font-medium flex items-center hover:underline group-hover:text-orange-700">
                    See case study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center">
              Explore All Modules
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-700 mb-3">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining education expertise with technology innovation
            </p>
          </div>

          <div ref={sliderRef} className="keen-slider">
            {team.map((member, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-gray-50 rounded-xl p-6 text-center transition-all hover:bg-orange-50 min-h-[23rem] ">
                  {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden border-4 border-white shadow-md">
                    <div className="w-full h-full flex items-center justify-center text-orange-600">
                      <Users className="w-12 h-12" />
                    </div>
                  </div> */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <div className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full inline-block">
                    {member.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-3 border border-orange-600 text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all shadow-sm hover:shadow-md inline-flex items-center">
              View Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-16">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Voices of Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear from those who've experienced our solutions firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
              <blockquote className="italic text-lg mb-6 text-orange-400">
                "The early warning system helped us reduce dropouts by 72% in
                one academic year. We're now able to intervene before students
                completely disengage."
              </blockquote>
              <div className="font-medium">
                <p className="text-red-500">Rajesh Kumar</p>
                <p className="text-orange-400 text-sm">
                  District Education Officer, Bihar
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
              <blockquote className="italic text-lg mb-6 text-orange-400">
                "My daughter was able to continue studies through the financial
                aid navigator. The platform found scholarships we never knew
                existed."
              </blockquote>
              <div className="font-medium">
                <p className="text-red-500">Sunita Devi</p>
                <p className="text-orange-400 text-sm">Parent, Uttar Pradesh</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white border border-white border-opacity-20">
              <blockquote className="italic text-lg mb-6 text-orange-400">
                "The community learning hub connected me with a mentor who
                changed my career outlook. I'm now the first in my village to
                attend college."
              </blockquote>
              <div className="font-medium">
                <p className="text-red-500">Arjun Meena</p>
                <p className="text-orange-400 text-sm">Student, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700 mb-3">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leaders across sectors for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              "Ministry of Education",
              "UNICEF",
              "TATA Trusts",
              "Microsoft",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 h-32 flex items-center justify-center"
              >
                <span className="font-medium text-gray-700 text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-600 to-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Education Together?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Whether you're an educator, policymaker, CSR partner, or concerned
            citizen, there's a role for you in our mission.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center">
              <School className="w-5 h-5 mr-2" />
              For Schools
            </button>
            <button className="px-8 py-3 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all shadow-lg hover:shadow-xl flex items-center">
              <HeartHandshake className="w-5 h-5 mr-2" />
              For NGOs
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all shadow-lg hover:shadow-xl flex items-center">
              <Users className="w-5 h-5 mr-2" />
              For Volunteers
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Government Schools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Rural Communities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    For Urban Schools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Custom Implementations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Teacher Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press Inquiries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>
                © {new Date().getFullYear()} Dropout Reduction Initiative. All
                rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default AboutUs;