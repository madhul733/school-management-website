import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import LogoBar from "./components/LogoOverlay";
import PublicDisclosure from "./pages/PublicDisclosure"
import NavBar from "./components/NavBar";
import PopUpModal from "./components/PopUpModal";
import Hero from "./pages/Hero";
import Welcome from "./pages/Welcome";
import Features from "./pages/Features";
import Services from "./pages/Services";
import VisionMission from "./pages/VisionMission";
import Footer from "./pages/Footer";

import AboutUs from "./pages/AboutUs";
import ChairMen from "./pages/ChairMen";
import Director from "./pages/Director";
import Principal from "./pages/Principal";
import Faculty from "./pages/Faculty";
import History from "./pages/History";
import SchoolInfo from "./pages/SchoolInfo";
import SchoolManagement from "./pages/SchoolManagement";
import VisitingDigitaries from "./pages/VisitingDigitaries";
import Admission from "./pages/Admission";
import AgeCriteria from "./pages/AgeCriteria";
import AdmissionProcess from "./pages/AdmissionProcess";
import AdmissionFee from "./pages/AdmissionFee";
import AdmissionRequirement from "./pages/AdmissionRequirement";
import PlaywayKindergarden from "./pages/PlaywayKindergarden";
import PrimaryCurriculum from "./pages/PrimaryCurriculum";
import MiddleCurriculum from "./pages/MiddleCurriculum";
import HighCurriculum from "./pages/HighCurriculum";
import Classroom from "./pages/Classroom";
import Library from "./pages/Library";
import Labs from "./pages/Labs";
import Sports from "./pages/Sports";
import Transportation from "./pages/Transportation";
import HealthCare from "./pages/HealthCare";
import Music from "./pages/Music";
import CoCurriculum from "./pages/CoCurriculum";
import EducationTrips from "./pages/EducationTrips";
import MorningAssembly from "./pages/MorningAssembly";
import Value from "./pages/Value";
import Contact from "./pages/Contact";
import NurturingTalents from "./pages/NuturingTalents";


// ================= COMMON LAYOUT =================
function Layout({ children }) {
  return (
    <>
      <PopUpModal />
<Header/>
      <TopBar />
      <LogoBar />
      <NavBar />

      {children}

      {/* ================= CONTACT BUTTON ================= */}
      <div className="fixed left-8 bottom-8 z-[999]">

        <a
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-black shadow-[0_15px_50px_rgba(0,140,255,0.35)] hover:scale-105 transition duration-300 inline-block"
        >

          Contact Us

        </a>

      </div>

      {/* ================= WHATSAPP BUTTON ================= */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 bottom-8 z-[999] group"
      >

        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-300"></div>

          {/* BUTTON */}
          <div className="relative w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-5xl shadow-[0_20px_60px_rgba(37,211,102,0.45)] hover:scale-110 transition duration-300 border-4 border-white">

            <FaWhatsapp />

          </div>

        </div>

      </a>

      <Footer />
    </>
  );
}


// ================= HOME PAGE =================
function HomePage() {
  return (
    <Layout>

      <Hero />
      <Welcome />
      <Features />
      <NurturingTalents/>
      <Services />
      <VisionMission />

    </Layout>
  );
}


// ================= APP =================
function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<Layout><AboutUs /></Layout>} />
      <Route path="/chairmen" element={<Layout><ChairMen /></Layout>} />
      <Route path="/director" element={<Layout><Director /></Layout>} />
      <Route path="/principal-message" element={<Layout><Principal /></Layout>} />
      <Route path="/faculty" element={<Layout><Faculty /></Layout>} />
      <Route path="/history" element={<Layout><History /></Layout>} />
      <Route path="/school-information" element={<Layout><SchoolInfo /></Layout>} />
      <Route path="/school-management" element={<Layout><SchoolManagement /></Layout>} />
      <Route path="/vision-mission" element={<Layout><VisionMission /></Layout>} />
      <Route path="/visiting-dignitaries" element={<Layout><VisitingDigitaries /></Layout>} />
<Route path="/public-disclosure" element={<Layout><PublicDisclosure/></Layout>} />
      <Route path="/admission-form" element={<Layout><Admission /></Layout>} />
      <Route path="/age-criteria" element={<Layout><AgeCriteria /></Layout>} />
      <Route path="/procedure" element={<Layout><AdmissionProcess /></Layout>} />
      <Route path="/fee-structure" element={<Layout><AdmissionFee /></Layout>} />
      <Route path="/requirement" element={<Layout><AdmissionRequirement /></Layout>} />

      <Route path="/play-kindergarden" element={<Layout><PlaywayKindergarden /></Layout>} />
      <Route path="/primary-curriculum" element={<Layout><PrimaryCurriculum /></Layout>} />
      <Route path="/middle-curriculum" element={<Layout><MiddleCurriculum /></Layout>} />
      <Route path="/high-curriculum" element={<Layout><HighCurriculum /></Layout>} />

      <Route path="/classrooms" element={<Layout><Classroom /></Layout>} />
      <Route path="/library" element={<Layout><Library /></Layout>} />
      <Route path="/labs" element={<Layout><Labs /></Layout>} />
      <Route path="/sports" element={<Layout><Sports /></Layout>} />
      <Route path="/transportation" element={<Layout><Transportation /></Layout>} />
      <Route path="/healthcare" element={<Layout><HealthCare /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/co-curricular" element={<Layout><CoCurriculum /></Layout>} />
      <Route path="/education-trips" element={<Layout><EducationTrips /></Layout>} />
      <Route path="/morning-assembly" element={<Layout><MorningAssembly /></Layout>} />
      <Route path="/value" element={<Layout><Value /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />

    </Routes>
  );
}

export default App;