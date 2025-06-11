// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ASPNET from './assets/tech_logo/ASP.NET.png'
import VBNET from './assets/tech_logo/VB.NET.png'
import VisualBasic from './assets/tech_logo/Visual Basic.png'
import ADONET from './assets/tech_logo/ADO.NET.png'
import WebServices from './assets/tech_logo/Web Services.png'
import RESTAPI from './assets/tech_logo/REST API.png'
import WebAPI from './assets/tech_logo/Web API.png'
import ActiveX from './assets/tech_logo/ActiveX.png'
import AJAX from './assets/tech_logo/AJAX.png'
import jQuery from './assets/tech_logo/jQuery.png'
import plSql from './assets/tech_logo/plsql.png'
import Sql from './assets/tech_logo/sql.png'
import xml from './assets/tech_logo/XML.png'
import MsSql from './assets/tech_logo/Microsoft SQL Server.png'
import Oracle from './assets/tech_logo/Oracle.png'
import MSAccess from './assets/tech_logo/MS Access.png'
import toad from './assets/tech_logo/Toad.jfif'
import Vss from './assets/tech_logo/Vss.webp'
import Crystal from './assets/tech_logo/Crystal.jfif'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import RRFin from './assets/company_logo/RRFin.jfif'
import Royal from './assets/company_logo/Royal.jfif'
import CSAT from './assets/company_logo/CSAT.jfif'

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import uptu from './assets/education_logo/uptu.png'
import tmbu from './assets/education_logo/tmbu.jfif'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import rrfinance from './assets/work_logo/RRfinance.PNG'


export const SkillsInfo = [
  {
    title: 'Technologies',
    skills: [
      { name: 'ASP.NET', logo: ASPNET },
      { name: 'VB.NET', logo: VBNET },
      { name: 'ADO.NET', logo: ADONET },
      { name: 'Web Services', logo: WebServices },
      { name: 'REST API', logo: RESTAPI },
      { name: 'Web API', logo: WebAPI },
      { name: 'ActiveX', logo: ActiveX },
      { name: 'AJAX', logo: AJAX },
      { name: 'jQuery', logo: jQuery },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'PL/SQL', logo: plSql },
      { name: 'Visual Basic 6.0', logo: VisualBasic },
      { name: 'SQL', logo: Sql },
      { name: 'HTML', logo: htmlLogo },
      { name: 'XML', logo: xml },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Microsoft SQL Server', logo: MsSql },
      { name: 'Oracle', logo: Oracle },
      { name: 'MS Access', logo: MSAccess },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'TOAD', logo: toad },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VSS 6.0', logo: Vss },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Crystal Report', logo: Crystal },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: RRFin,
    role: "Sr.Software Engineer & Tech Team Lead",
    company: "RR Financial Consultants Ltd",
    date: "Dec 2011 - Present",
    desc: "Lead and mentored teams in developing and maintaining financial applications, including Mutual Funds, FDs, and Insurance. Built a robust ERP system, integrated third-party APIs, optimized large SQL databases, and delivered dynamic reports using Crystal Reports. Collaborated on requirement analysis, testing, and reusable component development.",
    skills: [
      "VB6.0 / VB.NET",
      "ASP.NET",
      "SQL Server",
      "Crystal Reports 8.5",
      "Web APIs",
      "ActiveX Controls",
      "Visual Studio",
    ],
  },
  {
    id: 1,
    img: Royal,
    role: "Senior Software Engineer",
    company: "Royal Datamatics PVT. LTD",
    date: "Oct 2010 - Dec 2011",
    desc: "Designed and developed ERP modules for apparel industries covering procurement, production, budgeting, accounting, and export documentation. Created optimized PL/SQL procedures in Oracle9i, used TOAD for database management and VSS for version control. Collaborated directly with clients for requirement gathering, testing, and releasing updated ERP features to enhance operational efficiency.",
    skills: [
      "PL/SQL",
      "Oracle9i",
      "TOAD 6.3 (for Oracle)",
      "VSS 6.0",
      "Visual Basic 6.0",
      "Crystal Reports 8.5",
    ],
  },
  {
    id: 2,
    img: CSAT,
    role: "Software Engineer",
    company: "CSAT Systems. PVT. LTD",
    date: "May 2009 - July 2010",
    desc: "Designed and implemented Restaurant Management System (RMS) for POS terminals with both touch and non-touch interfaces. Developed master, tax, steward, and security modules using VB6.0 and MS Access/SQL Server. Integrated DOS and Windows-based reports, and managed complete RMS installations and deployments across various client locations.",
    skills: [
      "Visual Basic 6.0",
      "MS Access",
      "SQL Server",
      "Crystal Reports",
      "Windows XP",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: uptu,
    school: "AKTU, Lucknow",
    date: "Sept 2004 - Sept 2006",
    grade: "67.80%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Dr. A. P. J. Abdul Kalam Technical University, Lucknow. During my time at AKTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AKTU has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: tmbu,
    school: "T.M.Bhagalpur University, Bhagalpur",
    date: "Sept 1998 - Dec 2002",
    grade: "67.75%",
    desc: "I completed my Bachelor of Science (B.Sc.) in Mathematics from Tilka Manjhi Bhagalpur University, where I developed strong analytical and problem-solving skills fundamental to the world of technology. While my core focus was on advanced mathematics, my academic journey also exposed me to key computing subjects such as Data Structures and Algorithms, Web Development, and Database Management Systems.Studying at T.M.Bhagalpur University, I had the opportunity to work on practical projects that bridged the gap between theory and application—laying a solid foundation for my future in software development and technology.",
    degree: "Bachelor of Science - BSC (Maths)",
  },
  // {
  //   id: 2,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2017 - March 2018",
  //   grade: "78%",
  //   desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //   degree: "CBSE(XII) - PCM with Computer Science",
  // },
  // {
  //   id: 3,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2015 - March 2016",
  //   grade: "87.5%",
  //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //   degree: "CBSE(X), Science with Computer Application",
  // },
];

export const projects = [
  {
    id: 0,
    title: "RR Finance",
    description:
      "RRFinance.com is the official website of RR Group, a company dealing in a wide range of financial products like Mutual Funds, Fixed Deposits, Insurance, Equity, Commodities, and Depository Services, along with interests in art. The site serves both associates and investors, categorized by levels such as Branch, Relationship Manager, Sub-broker, and Client. Each level can view their business status and perform related operations. With around 300 reports and tools, the platform provides a complete overview of business activities and supports key financial processes online.",
    image: rrfinance,
    tags: ["Asp.net", "C#", "Web Services", "JavaScript", "XML", "Ado.Net", "Sql 2005/2012"],
    github: "#",
    webapp: "https://www.rrfinance.com/default.aspx",
  },
  {
    id: 1,
    title: "RR One Source(ERP)",
    description:
      "This ERP, developed by RRFCL, is a robust financial back-office system designed for the finance industry. It efficiently manages operations related to Mutual Funds, Fixed Deposits, IPOs, NCDs, and Insurance (Life and General). Widely used and fully operational, the ERP features multiple integrated modules such as the MF Module, FD Module, IPO/NCD Module, Mapping Module, Insurance Module, and NAV Module. Together, these modules provide seamless control over the entire financial workflow, making it a powerful solution for managing diverse financial services.",
    image: csprepLogo,
    tags: ["VB 6.0", "VB.net", "Crystal Report", "Sql Server 2012"],
    github: "#",
    webapp: "#",
  },
  {
    id: 2,
    title: "Asset Under Management (AUM)",
    description:
      "Developed AUM Reports for branches and Administrator. Branches can see their AUM for their Relationship Manager’s, Clients/Associate, Nature wise, Fund wise. This report shows the value of the investments on the basic of the date NAV on the selected date. Similar report is available for Admin for all branches, RM’s, Clients/Associates",
    image: movierecLogo,
    tags: ["Asp.net", "C#", "JavaScript", "XML", "Ado.Net", "Sql 2012", "Ajax", "Crystal Report 11.0"],
    github: "#",
    webapp: "#",
  },
  {
    id: 3,
    title: "RR Finance(Online Mutual Fund Portal)",
    description:
      "Developed the online Mutual Fund for the investors who invested online through our Company to scheme of All Mutual Funds Company like HDFC, AXIS, IDBI...etc.the main motive of this website is to attract those investors who had invested through buy/ sell MF online.A new investor can create a account, once he create a account a gets a mail toactivate his account.and after account registration, your account is active for buy / sell Mutual fund online.the user is provided with a customize report which shows the current value of his investments on basic of current market scenarios",
    image: npmLogo,
    tags: ["Asp.net", "C#", "JavaScript", "XML", "Ado.Net", "Sql 2012"],
    github: "#",
    webapp: "https://www.rrfinance.com/OurProducts/MutualFund/default.aspx",
  },
  {
    id: 4,
    title: "Apparel Process Production System",
    description:
      "This ERP, developed by Royal Datamatics Pvt Ltd, is a comprehensive solution for the apparel industry, integrating order management, procurement, production, export documentation, budgeting, and financial accounting. It streamlines workflow by handling order entry, fabric tracking, inventory management, production progress, export paperwork, and financial records, ensuring seamless operations across the entire apparel supply chain.",
    image: taskremLogo,
    tags: ["Visual Basic 6.0", "Oracle9i", "Crystal Reports 8.5", "winXP", "VSS 6.0", "TOAD 6.3"],
    github: "#",
    webapp: "#",
  },
  {
    id: 5,
    title: "Restaurant Management System(RMS) Touch & NonTouch",
    description:
      "This POS software by Csat Systems Pvt Ltd supports restaurants, home delivery, and bars. It includes Transaction, Master, and Import & Export modules, handling orders, billing, POS setup, item categories, tax structures, and reports in DOS and Windows formats",
    image: webverLogo,
    tags: ["Visual Basic 8.5", "MS Access", "MS Sql Server 2000", "winXP"],
    github: "#",
    webapp: "#",
  },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];  