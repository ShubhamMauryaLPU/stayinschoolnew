import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import EarlyWarning from "./pages/EarlyWarning/EarlyWarning";
import IndiStudentData from "./pages/EarlyWarning/IndiStudentData";
import LoginPage from "./components/LoginPage";
import Gattendence from "./pages/EarlyWarning/Attendece/Gattendence";
import Iattendence from "./pages/EarlyWarning/Attendece/Iattendence";
import Hattendence from "./pages/EarlyWarning/Attendece/Hattendence";
import Sattendence from "./pages/EarlyWarning/Attendece/Sattendence";
import Pattendence from "./pages/EarlyWarning/Attendece/Pattendence";
import ForgotPass from "./components/ForgotPass";
import Ggrade from "./pages/EarlyWarning/Grade/Ggrade";
import Hgrade from "./pages/EarlyWarning/Grade/Hgrade";
import Igrade from "./pages/EarlyWarning/Grade/Igrade";
import Sgrade from "./pages/EarlyWarning/Grade/Sgrade";
import Pgrade from "./pages/EarlyWarning/Grade/Pgrade";
import TechQuizz from "./pages/WebLearning/Quizzes/TechQuizz/TechQuizz";
import Java from "./pages/WebLearning/Quizzes/TechQuizz/Java";
import CPP from "./pages/WebLearning/Quizzes/TechQuizz/CPP";
import Python from "./pages/WebLearning/Quizzes/TechQuizz/Python";
import Js from "./pages/WebLearning/Quizzes/TechQuizz/Js";
import PHP from "./pages/WebLearning/Quizzes/TechQuizz/PHP";
import React1 from "./pages/WebLearning/Quizzes/TechQuizz/React1";
import C1 from "./pages/WebLearning/Quizzes/TechQuizz/C1";
import Sql from "./pages/WebLearning/Quizzes/TechQuizz/Sql";
import Node1 from "./pages/WebLearning/Quizzes/TechQuizz/Node1";
import NonTechQuizz from "./pages/WebLearning/Quizzes/NonTechQuizz/NonTechQuizz";
import Geography from "./pages/WebLearning/Quizzes/NonTechQuizz/Geography";
import History from "./pages/WebLearning/Quizzes/NonTechQuizz/History";
import GK from "./pages/WebLearning/Quizzes/NonTechQuizz/GK";
import GS from "./pages/WebLearning/Quizzes/NonTechQuizz/GS";
import HighQuizz from "./pages/WebLearning/Quizzes/HighQuizz/HighQuizz";
import Hindi from "./pages/WebLearning/Quizzes/HighQuizz/Hindi";
import English from "./pages/WebLearning/Quizzes/HighQuizz/English";
import Science from "./pages/WebLearning/Quizzes/HighQuizz/Science";
import SoScience from "./pages/WebLearning/Quizzes/HighQuizz/SoScience";
import Computer from "./pages/WebLearning/Quizzes/HighQuizz/Computer";
import PrimaryQuizz from "./pages/WebLearning/Quizzes/PriQuizz/PrimaryQuizz";
import Phindi from "./pages/WebLearning/Quizzes/PriQuizz/Phindi";
import Penglish from "./pages/WebLearning/Quizzes/PriQuizz/Penglish";
import Pscience from "./pages/WebLearning/Quizzes/PriQuizz/Pscience";
import Psoscience from "./pages/WebLearning/Quizzes/PriQuizz/Psoscience";
import Pcomputer from "./pages/WebLearning/Quizzes/PriQuizz/Pcomputer";
import Pgk from "./pages/WebLearning/Quizzes/PriQuizz/Pgk";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import AllColleges from "./pages/Admin/Colleges/AllColleges";
import TeacherStudentPage from "./components/TeacherStudentPage";
import ShowData from "./components/ShowData";
import CollegeStudent from "./pages/Admin/Colleges/CollegeStudent";
import CheckEligibility from "./pages/Financial/Application/CheckEligibility";
import FillForm from "./pages/Financial/Application/FillForm";
import CurrentStatus from "./pages/Financial/Tracking/CurrentStatus/CurrentStatus";
import FormDetail from "./pages/Financial/Tracking/FormDetail/FormDetail";
import CurrentDisbursement from "./pages/Financial/Disbursements/Current/CurrentDisbursement";
import RemaningDebursement from "./pages/Financial/Disbursements/Remaining/RemaningDebursement";
import CollegeSchool from "./pages/Admin/Add/CollegeSchool";
import AddTeacherPage from "./pages/Admin/Add/AddTeacherPage";
import AddStudentPage from "./pages/Admin/Add/AddStudentPage ";
import TechnicalCoun from "./pages/StudentSupport/Counseling/TechnicalCoun";
import Motivational from "./pages/StudentSupport/Motivational/Motivational";
import ProfilePage from "./components/ProfilePage";
import RemoveCollegePage from "./pages/Admin/Remove/RemoveCollegePage";
import RemoveTeacherPage from "./pages/Admin/Remove/RemoveTeacherPage";
import CollegeBehaviorDashboard from "./pages/EarlyWarning/Behavior/CollegeBehaviorDashboard";
import SchoolBehaviorDashboard from "./pages/EarlyWarning/Behavior/SchoolBehaviorDashboard";
import IntermediateBehaviorDashboard from "./pages/EarlyWarning/Behavior/IntermediateBehaviorDashboard";
import StudentRemovalPage from "./pages/Admin/Remove/StudentRemovalPage";
import TechnicalLessonsPage from "./pages/WebLearning/Learning/TechLearning/TechnicalLessonsPage";
import CourseDetailsPage from "./components/CourseDetailsPage";
import EnrollPage from "./components/EnrollPage";
import EnrollmentSuccessPage from "./components/EnrollmentSuccessPage";
import NonTechnicalLessonsPage from "./pages/WebLearning/Learning/Nontechlearning/NonTechLessonsPage";
import HigherSchoolLessonsPage from "./pages/WebLearning/Learning/SchoolLearning/HigherSchoolLessonsPage";
import PrimarySchoolLessonsPage from "./pages/WebLearning/Learning/PrimaryLearning/PrimarySchoolLessonsPage";
import NonTechnicalResources from "./pages/StudentSupport/Counseling/NonTechnicalResources";
import HigherSchoolResources from "./pages/StudentSupport/Counseling/HigherSchoolResources";
import PrimarySchoolResources from "./pages/StudentSupport/Counseling/PrimarySchoolResources";
import KidsMotivation from "./pages/StudentSupport/Motivational/KidsMotivation";
import Technicalgoals from "./pages/StudentSupport/AcademicGoals/Technicalgoals";
import NonTechnicalgoals from "./pages/StudentSupport/AcademicGoals/NonTechnicalgoals";
import HighSchoolgoals from "./pages/StudentSupport/AcademicGoals/HighSchoolgoals";
import Primarygoals from "./pages/StudentSupport/AcademicGoals/Primarygoals";
import NonTechTutorial from "./pages/CommunityHub/NonTechVideo/NonTechTutorial";
import EnglishTut from "./pages/CommunityHub/NonTechVideo/EnglishTut";
import HindiTut from "./pages/CommunityHub/NonTechVideo/HindiTut";
import MathsTut from "./pages/CommunityHub/NonTechVideo/MathsTut";
import SocialScienceTut from "./pages/CommunityHub/NonTechVideo/SocialScienceTut";
import FashionDesignTut from "./pages/CommunityHub/NonTechVideo/FashionDesignTut";
import LawsTut from "./pages/CommunityHub/NonTechVideo/LawsTut";
import BbaTut from "./pages/CommunityHub/NonTechVideo/BbaTut";
import { TechnicalRead } from "./pages/CommunityHub/ReadingMaterial/TechnicalRead";
import NonTechnicalRead from "./pages/CommunityHub/ReadingMaterial/NonTechnicalRead";
import { PrimaryRead } from "./pages/CommunityHub/ReadingMaterial/PrimaryRead";
import { HighSchoolRead } from "./pages/CommunityHub/ReadingMaterial/HighSchoolRead";
import TechTutorialHome from "./pages/CommunityHub/VideoTutorial/TechTutorialHome";
import JavaTut from "./pages/CommunityHub/VideoTutorial/JavaTut";
import JavaScriptTut from "./pages/CommunityHub/VideoTutorial/JavaScriptTut";
import CSharpTut from "./pages/CommunityHub/VideoTutorial/CSharpTut";
import PythonTut from "./pages/CommunityHub/VideoTutorial/PythonTut";
import PhpTut from "./pages/CommunityHub/VideoTutorial/PhpTut";
import ReactTut from "./pages/CommunityHub/VideoTutorial/ReactTut";
import AngularTut from "./pages/CommunityHub/VideoTutorial/AngularTut";
import GoTut from "./pages/CommunityHub/VideoTutorial/GoTut";
import CPlus from "./pages/CommunityHub/VideoTutorial/CPlus";
import { PrimaryVirtual } from "./pages/CommunityHub/Virtual Tutorial/PrimaryVirtual";
import { TechnicalVirtual } from "./pages/CommunityHub/Virtual Tutorial/TechnicalVirtual";
import { HighSchoolVirtual } from "./pages/CommunityHub/Virtual Tutorial/HighSchoolVirtual";
import { NonTechnicalVirtual } from "./pages/CommunityHub/Virtual Tutorial/NonTechnicalVirtual";
import TeacherIndData from "./components/TeacherIndData";
import IntermediateCollege from "./pages/Admin/Colleges/IntermediateCollege";
import HighSchool from "./pages/Admin/Colleges/HighSchool";
import AllSecondarySchool from "./pages/Admin/Colleges/AllSecondarySchool";
import AllPrimarySchool from "./pages/Admin/Colleges/AllPrimarySchool";
import AddAdmin from "./pages/Admin/Add/AddAdmin";
import ApplicationDetails from "./components/ApplicationDetails";
import UpdateApplication from "./components/UpdateApplication";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/" || location.pathname === "/user/forgotpassword"  ;
  return (
    <>
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/warning/:professionLogin" element={<EarlyWarning />} />
          <Route path="/home/:professionLogin" element={<HomePage />} />
          <Route path="/indistudentdata/:id" element={<IndiStudentData />} />
          <Route path="/warning/attendence/gradution" element={<Gattendence/>} />
          <Route path="/warning/attendence/intermediate" element={<Iattendence/>} />
          <Route path="/warning/attendence/hsecondary" element={<Hattendence/>} />
          <Route path="/warning/attendence/secondary" element={<Sattendence/>} />
          <Route path="/warning/attendence/primary" element={<Pattendence/>} />
          <Route path="/warning/grade/gradution" element={<Ggrade/>} />
          <Route path="/warning/grade/intermediate" element={<Igrade/>} />
          <Route path="/warning/grade/hsecondary" element={<Hgrade/>} />
          <Route path="/warning/grade/secondary" element={<Sgrade/>} />
          <Route path="/warning/grade/primary" element={<Pgrade/>} />
          <Route path="/learning/quizzes/technical" element={<TechQuizz/>} />
          <Route path="/learning/quizzes/technical/cpp" element={<CPP/>} />
          <Route path="/learning/quizzes/technical/java" element={<Java/>} />
          <Route path="/learning/quizzes/technical/python" element={<Python/>} />
          <Route path="/learning/quizzes/technical/js" element={<Js/>} />
          <Route path="/learning/quizzes/technical/php" element={<PHP/>} />
          <Route path="/learning/quizzes/technical/c" element={<C1/>} />
          <Route path="/learning/quizzes/technical/react" element={<React1/>} />
          <Route path="/learning/quizzes/technical/sql" element={<Sql/>} />
          <Route path="/learning/quizzes/technical/node" element={<Node1/>} />
          <Route path="/learning/quizzes/hschool" element={<HighQuizz/>} />
          <Route path="/learning/quizzes/highschool/hindi" element={<Hindi/>} />
          <Route path="/learning/quizzes/highschool/english" element={<English/>} />
          <Route path="/learning/quizzes/highschool/science" element={<Science/>} />
          <Route path="/learning/quizzes/highschool/social" element={<SoScience/>} />
          <Route path="/learning/quizzes/highschool/computer" element={<Computer/>} />
          <Route path="/learning/quizzes/primary" element={<PrimaryQuizz/>} />
          <Route path="/learning/quizzes/primschool/hindi" element={<Phindi/>} />
          <Route path="/learning/quizzes/primschool/english" element={<Penglish/>} />
          <Route path="/learning/quizzes/primschool/science" element={<Pscience/>} />
          <Route path="/learning/quizzes/primschool/social" element={<Psoscience/>} />
          <Route path="/learning/quizzes/primschool/computer" element={<Pcomputer/>} />
          <Route path="/learning/quizzes/primschool/gk" element={<Pgk/>} />
          <Route path="/learning/quizzes/nontechnical" element={<NonTechQuizz/>} />
          <Route path="/learning/quizzes/nontechnical/geo" element={<Geography/>} />
          <Route path="/learning/quizzes/nontechnical/his" element={<History/>} />
          <Route path="/learning/quizzes/nontechnical/gk" element={<GK/>}/>
          <Route path="/learning/quizzes/nontechnical/gs" element={<GS/>}/>
          <Route path="/learning/lessons/technical" element={<TechnicalLessonsPage/>} />
          <Route path="/learning/lessons/nontechnical" element={<NonTechnicalLessonsPage/>} />
          <Route path="/learning/lessons/school" element={<HigherSchoolLessonsPage/>} />
          <Route path="/learning/lessons/primary" element={<PrimarySchoolLessonsPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admindashboard/allcolleges/gradutation" element={<AllColleges/>} />
          <Route path="/admindashboard/allcolleges/intermediate" element={<IntermediateCollege/>} />
          <Route path="/admindashboard/allcolleges/hsecondary" element={<HighSchool/>} />
          <Route path="/admindashboard/allcolleges/secondary" element={<AllSecondarySchool/>} />
          <Route path="/admindashboard/allcolleges/secondary" element={<AllPrimarySchool/>} />
          <Route path="/admindashboard/add/addadmin" element={<AddAdmin/>} />
          <Route path="/admin/graduation/:college" element={<TeacherStudentPage/>} />
          <Route path="/admin/:college/teacher" element={<ShowData/>} />
          <Route path="/admin/:college/student" element={<CollegeStudent/>} />
          <Route path="/admin/teacherdata/:id" element={<TeacherIndData/>} />
          <Route path="/user/forgotpassword" element={<ForgotPass/>} />
          <Route path="/financial/application/eligiblity" element={<CheckEligibility/>} />
          <Route path="/financial/application/fillfrm" element={<FillForm/>} />
          <Route path="/financial/application/fillfrm/:id" element={<FillForm/>} />
          <Route path="/financial/tracking/status" element={<CurrentStatus/>} />
          <Route path="/financial/tracking/status/veiw/:id" element={<ApplicationDetails/>} />
          <Route path="/financial/tracking/status/update/:id" element={<UpdateApplication/>} />
          <Route path="/financial/tracking/frmdetail" element={<FormDetail/>} />
          <Route path="/financial/disbursements/current" element={<CurrentDisbursement/>} />
          <Route path="/financial/disbursements/remaining" element={<RemaningDebursement/>} />
          <Route path="/admindashboard/addcolleges/colleges-school" element={<CollegeSchool/>} />
          <Route path="/admindashboard/addcolleges/addteachers" element={<AddTeacherPage/>} />
          <Route path="/admindashboard/addcolleges/addstudents" element={<AddStudentPage/>} />
          <Route path="/user/profile" element={<ProfilePage/>} />
          <Route path="/student/counseling/technical" element={<TechnicalCoun/>} />
          <Route path="/student/motivation/adult" element={<Motivational/>} />
          <Route path="/admindashboard/removecolleges/colleges-school" element={<RemoveCollegePage/>} />
          <Route path="/admindashboard/removecolleges/teachers" element={<RemoveTeacherPage/>} />
          <Route path="/admindashboard/removecolleges/students" element={<StudentRemovalPage/>} />
          <Route path="/warning/behavior/gradution" element={<CollegeBehaviorDashboard/>} />
          <Route path="/warning/behavior/intermediate" element={<IntermediateBehaviorDashboard/>} />
          <Route path="/warning/behavior/school" element={<SchoolBehaviorDashboard/>} />
          {/* <Route path="/community/reading/nontechnical" element={<NonTechLessonsPage/>} /> */}
          <Route path="/courses/:courseId" element={<CourseDetailsPage/>} />
          <Route path="/enroll/:courseId" element={<EnrollPage />} />
          <Route path="/enroll-success" element={<EnrollmentSuccessPage />} />
          <Route path="/student/counseling/nontechnical" element={<NonTechnicalResources/>} />
          <Route path="/student/counseling/school" element={<HigherSchoolResources/>} />
          <Route path="/student/counseling/primary" element={<PrimarySchoolResources/>} />
          <Route path="/student/motivation/children" element={<KidsMotivation/>} />
          <Route path="/student/goals/technical" element={<Technicalgoals/>} />
          <Route path="/student/goals/nontechnical" element={<NonTechnicalgoals/>} />
          <Route path="/student/goals/school" element={<HighSchoolgoals/>} />
          <Route path="/student/goals/primary" element={<Primarygoals/>} />
          {/* tutoring */}
          {/* Non tech */}
          <Route path="/community/onlineclasses/nontechnical" element={<NonTechTutorial/>} />
          <Route path="/community/onlineclasses/nontechnical/english" element={<EnglishTut/>} />
          <Route path="/community/onlineclasses/nontechnical/hindi" element={<HindiTut/>} />
          <Route path="/community/onlineclasses/nontechnical/maths" element={<MathsTut/>} />
          <Route path="/community/onlineclasses/nontechnical/socialscience" element={<SocialScienceTut/>} />
          <Route path="/community/onlineclasses/nontechnical/fashiondesign" element={<FashionDesignTut/>} />
          <Route path="/community/onlineclasses/nontechnical/law" element={<LawsTut/>} />
          <Route path="/community/onlineclasses/nontechnical/bba" element={<BbaTut/>} />
          {/* Reading */}
          <Route path="/community/reading/technical" element={<TechnicalRead/>} />
          <Route path="/community/reading/nontechnical" element={<NonTechnicalRead/>} />
          <Route path="/community/reading//primary" element={<PrimaryRead/>} />
          <Route path="/community/reading/school" element={<HighSchoolRead/>} />
          {/*   Online Classes Tech */}
          <Route path="/community/onlineclasses/technical" element={<TechTutorialHome/>} />
          <Route path="/community/onlineclasses/technical/java" element={<JavaTut/>} />
          <Route path="/community/onlineclasses/technical/javascript" element={<JavaScriptTut/>} />
          <Route path="/community/onlineclasses/technical/cplus" element={<CPlus/>} />
          <Route path="/community/onlineclasses/technical/csharp" element={<CSharpTut/>} />
          <Route path="/community/onlineclasses/technical/python" element={<PythonTut/>} />
          <Route path="/community/onlineclasses/technical/php" element={<PhpTut/>} />
          <Route path="/community/onlineclasses/technical/react" element={<ReactTut/>} />
          <Route path="/community/onlineclasses/technical/angular" element={<AngularTut/>} />
          <Route path="/community/onlineclasses/technical/go" element={<GoTut/>} />
          {/* Video Tutoring*/}
          <Route path="/community/tutoring/nontechnical" element={<NonTechnicalVirtual/>} />
          <Route path="/community/tutoring/technical" element={<TechnicalVirtual/>} />
          <Route path="/community/tutoring/school" element={<HighSchoolVirtual/>} />
          <Route path="/community/tutoring/primary" element={<PrimaryVirtual/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
