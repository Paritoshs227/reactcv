import Typical from "react-typical";
import { contactLinks } from "../src/constants";
import { techStack } from "../src/constants";
import { serviceData } from "../src/constants";
import { projectData } from "../src/constants";
import heroImg from "../public/images/webdev.svg"
import { motion } from "framer-motion";
import cv from "../public/documents/PARITOSH SHARMA.pdf"
function page() {
    return (
        <>
            <nav id="navbar-example2" className="navbar bg-light px-3  sticky-top d-none d-lg-flex">
                <a className="navbar-brand " href="#">PARITOSH SHARMA</a>
                <ul className="nav nav-pills ">
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading2">About</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading3">Services</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading4">Projects</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading5">Experience</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading6">Education</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#scrollspyHeading7">Contact</a>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg bg-light sticky-top  d-lg-none">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">PARITOSH SHARMA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading1">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading2">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading3">Services</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading4">Projects</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading5">Experience</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading6">Education</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#scrollspyHeading7">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container-fluid px-0">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example " tabIndex="0">

                    <section id="scrollspyHeading1" className="section-1 px-3 px-md-5 py-5 ">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-8 col-lg-7">
                                <h1 className="mb-0">
                                    <motion.span className="  label-1">
                                        Hi, I am Paritosh
                                    </motion.span>
                                    <span className="text-blue-1 label-2">
                                        <Typical
                                            steps={[
                                                "Front End Developer",
                                                1000,
                                                "Ui Developer",
                                                1000,

                                            ]}
                                            loop={Infinity}
                                        />
                                    </span>
                                </h1>
                                <p className=" label-3" >
                                    I am a UI Developer. I am currently working at
                                    Binary Semantics Pvt Ltd as a Consultant HTML Developer.
                                </p>
                                <div className=" d-flex mb-4">
                                    {contactLinks.map((el, i) => (
                                        <a key={i} target="_blank"
                                            href={el.link}
                                            className=" me-3 "
                                        >
                                            <img alt="" src={el.url} />

                                        </a>
                                    ))}
                                </div>
                                <div>
                                    <a href={cv} className="btn btn-primary bg-blue-1 resume-link" target="_blank">
                                    Resume
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-5">
                                <div className=""> <motion.img initial="hidden"
                                    whileInView={"visible"}
                                    variants={{
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                type: "spring",
                                            },
                                        },
                                        hidden: { opacity: 1, y: 80 },
                                    }} src={heroImg} alt="" className="img-fluid" /></div>
                            </div>
                        </div>
                    </section>
                    <section id="scrollspyHeading2" className="section-2 px-3 px-md-5 py-5 ">
                        <h2 className="text-black heading text-center">
                            About Me
                        </h2>
                        <motion.div>
                            <h4 className="text-blue-1 fs-3 fw-semibold">
                                A bit about me
                            </h4>
                            <p className="text-muted fs-5">
                                I'm a self-taught Ui developer and Front-end Developer with
                                experience in designing new features from ideation to production,
                                implementation of wireframes and design flows into high
                                performance software applications. I take into consideration the
                                user experience while writing reusable and efficient code. I
                                passionately combine good design, technology, and innovation in
                                all my projects, which I like to accompany from the first idea to
                                release.Currently, I'm focused on the backend development.
                            </p>
                        </motion.div>
                        <motion.div
                        >
                            <h4 className="text-blue-1 fs-3 fw-semibold">
                                Technologies and Tools
                            </h4>
                            <p className="text-muted fs-5">
                                Using a combination of cutting-edge technologies and reliable
                                open-source software I build user-focused, performant apps and
                                websites for smartphones, tablets, and desktops.
                            </p>
                        </motion.div>
                        <motion.div className="row">
                            {techStack.map((el, index) => (
                                <div className="col-6 col-md-3 col-lg-3 mb-3" key={index}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView={"visible"}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    type: "spring",
                                                },
                                            },
                                            hidden: { opacity: 1, y: 80 },
                                        }}
                                    >
                                        <span className="text-bg-light  d-flex align-items-center px-3 py-1">
                                            <img alt="" src={el.link} className="img-fluid tech-img" />
                                            <h4 className="mb-0 tech-label ms-2">{el.name}</h4>
                                        </span>
                                    </motion.div>

                                </div>
                            ))}
                        </motion.div>
                    </section>
                    <section id="scrollspyHeading3" className="section-3 px-3 px-md-5 py-5 text-bg-light">
                        <h2 className="text-black heading text-center">
                            Services
                        </h2>
                        <h4 className="text-blue-1 fs-3 fw-semibold">
                            What I Provide
                        </h4>
                        <div className=" row mt-5">
                            {serviceData.map((el, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView={"visible"}
                                    variants={{
                                        visible: { opacity: 1, scale: 1 },
                                        hidden: { opacity: 0, scale: 0 },
                                    }}
                                    className="col-12  "
                                >
                                    <div className="rounded-4 bg-white p-3 d-flex flex-column align-items-center h-100">
                                        <img src={el.img} alt="" />
                                        <h4 className="fs-5 fw-bold mt-3">{el.name}</h4>
                                        <p className="mt-2">{el.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <section id="scrollspyHeading4" className="section-4 px-3 px-md-5 py-5 ">
                        <h2 className="text-black heading text-center mb-4">
                            Projects
                        </h2>
                        <div className="scroll-container">
                            <div className="row">
                                {projectData.map((el, i) => (
                                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{el.name}
                                                </h5>
                                                {el.summary && (
                                                    <p>  {el.summary} </p>
                                                )}

                                                <p> <small><strong>Skills used: -</strong>{el.skill}</small></p>
                                                {el.responsibilities && (
                                                    <p> <small> <strong>Responsibilities:-</strong> {el.responsibilities}</small></p>
                                                )}
                                            </div>
                                            <div className="card-footer text-end bg-white border-0">
                                            {el.url && (
                                                     <a href={el.url} className="btn btn-primary btn-sm bg-blue-1" target="_blank">See more</a>
                                                )}
                                                  {el.src && (
                                                     <a href={el.src} className="btn btn-primary btn-sm bg-blue-1" target="_blank">See more</a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="scrollspyHeading5" className="section-5 px-3 px-md-5 py-5 text-bg-light">
                        <h2 className="text-black heading text-center mb-4">
                            Experience
                        </h2>
                        <div>
                            <div className="card mb-3">
                                <div className="card-header text-blue-1">
                                    <strong> Consultant HTML Developer | Binary Semantics Limited (June 2024 – PRESENT)</strong>
                                </div>
                                <div className="card-body">
                                    <h6>&#10070; Maintained 20+ Motor Insurance brokers web portals :</h6>
                                    <p className="ms-4"><small>Utilized HTML, CSS, Bootstrap, React, Tailwind and MUI for the creation and
                                        Maintenance of responsive web portal (e.g. Dealer portal, CRM portal, Admin Portal).</small></p>
                                    <h6>&#10070; Converted UI Designs from Figma:</h6>
                                    <p className="ms-4"><small>Utilized Bootstrap, MUI and Tailwind to convert User Interface Designs from Figma to web
                                        portal UI.</small></p>
                                    <h6>&#10070; Collaborated with the backend team:</h6>
                                    <p className="ms-4"><small>Worked with backend colleagues to integrate user-facing features.</small></p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header text-blue-1">
                                    <strong> Consultant Developer | ComputeSoft Technologies (MAY 2022 – June 2024)</strong>
                                </div>
                                <div className="card-body">
                                    <h6>&#10070; Managed website development projects:</h6>
                                    <p className="ms-4"><small>Oversaw projects from initial design to completion, optimizing for cross-browser
                                        compatibility.</small></p>
                                    <h6>&#10070; Developed 4+ websites:</h6>
                                    <p className="ms-4"><small>Utilized HTML, Bootstrap, JavaScript and JQuery for the creation of responsive websites.</small></p>
                                    <h6>&#10070; Collaborated with the backend team:</h6>
                                    <p className="ms-4"><small>Worked with backend colleagues to integrate user-facing features.</small></p>
                                    <h6>&#10070; Implemented enhancements:
                                    </h6>
                                    <p className="ms-4"><small>Improved web functionality and responsiveness through effective enhancements.</small></p>
                                    <h6>&#10070; Converted UI Designs from PSD:</h6>
                                    <p className="ms-4"><small>Utilized Bootstrap to convert User Interface Designs from PSD to website UI.</small></p>
                                    <h6>&#10070; Conducted client training:</h6>
                                    <p className="ms-4"><small>Provided client training on website content management systems.</small></p>
                                    <h6>&#10070; Client collaboration:</h6>
                                    <p className="ms-4"><small>Collaborated with clients to meet project requirements, goals, and desired functionality.</small></p>
                                    <h6>&#10070; Successful Project Delivery:</h6>
                                    <p className="ms-4"><small>Delivered 2 major projects within tight deadlines, meeting all client specifications and
                                        receiving positive feedback resulting in a 95% client satisfaction rate.</small></p>
                                    <h6>&#10070; Reduced Page Load Time:
                                    </h6>
                                    <p className="ms-4"><small>Improved website performance by optimizing code and reducing page load time by 20%,
                                        resulting in enhanced user experience.</small></p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header text-blue-1">
                                    <strong> Software Developer | Triazine Software Pvt Ltd., Noida, U.P (JAN 2019 – NOV 2020)</strong>
                                </div>
                                <div className="card-body">
                                    <h6>&#10070; Built and maintained 4+ Apps:</h6>
                                    <p className="ms-4"><small>Developed and maintained applications on both Android and iOS platforms</small></p>
                                    <h6>&#10070; Collaborated with team members:
                                    </h6>
                                    <p className="ms-4"><small>Worked closely with a team of 5+ members to meet project requirements.</small></p>
                                    <h6>&#10070; Converted UI Designs from PSD:</h6>
                                    <p className="ms-4"><small>Translated UI Designs from PSD to the respective app interfaces</small></p>
                                    <h6>&#10070; Ensured app responsiveness:
                                    </h6>
                                    <p className="ms-4"><small>Made the apps responsive for various screen sizes, including mobiles and tablets with
                                        pixel perfect accuracy.</small></p>
                                    <h6>&#10070; Error checking and debugging:</h6>
                                    <p className="ms-4"><small>Checked for errors, debugged apps, and implemented enhancements for improved
                                        functionality and speed.
                                    </small></p>

                                </div>
                            </div>
                        </div>

                    </section>
                    <section id="scrollspyHeading6" className="section-6 px-3 px-md-5 py-5 ">
                        <h2 className="text-black heading text-center mb-4">
                            Education
                        </h2>
                        <div className="mb-4">
                            <h4 className="text-blue-1 fs-3 fw-semibold">
                                Academics
                            </h4>
                            <div>
                                <p className="mb-0 fw-bold">MCA | 2017</p>
                                <small className="mb-0">A P J Abdul Kalam
                                    Technical University
                                    (Formerly UPTU)
                                </small>
                                <p className="mb-0 fw-bold">BCA | 2015</p>
                                <small className="mb-0">Sikkim Manipal UniversityDE
                                </small>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-blue-1 fs-3 fw-semibold">
                                Certifications
                            </h4>
                            <div>
                                <p className="mb-0 fw-bold">‘O’ Level</p>
                                <small className="mb-0"> from NIELIT
                                    (Formerly DOEACC).
                                </small>
                            </div>
                        </div>
                    </section>

                    <section id="scrollspyHeading7" className="section-7 px-3 px-md-5 py-5 text-bg-light">
                        <h2 className="text-black heading text-center">
                            Contact
                        </h2>
                        <h4 className="text-blue-1 fs-3 fw-semibold">
                            Connect with me
                        </h4>
                        <p className="text-muted fs-5">
                            If you want to know more about me or my work, or if you would just
                            <br />
                            like to say hello, send me a message. I'd love to hear from you.
                        </p>
                        <div className="row flex-column flex-md-row">
                            {/* <div className="col-12 col-md-6 mb-5 mb-md-0">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label" >
                                            Name
                                        </label>
                                        <input
                                            type="email"
                                            id="name"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="message"
                                            className="form-label"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            placeholder="Enter your message"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex  align-items-center  justify-content-between">
                                        <div className="">
                                            <a href="mailto:paritosh2557@gmail.com" className="text-blue-1 text-capitalize text-decoration-none">
                                                Send me email directly
                                            </a>
                                        </div>
                                        <button className="btn btn-primary btn-sm">
                                            <a href="mailto:paritosh2557@gmail.com" className="text-white text-decoration-none">Submit</a>
                                        </button>
                                    </div>
                                </form>
                            </div> */}
                            {/* <div className="col-12 col-md-6 text-start text-lg-end"> */}
                            <div className="col-12 ">

                                <h3 className="fw-bolder ">Email</h3>
                                <a
                                    href="mailto:paritosh2557@gmail.com"
                                    className="mb-3 mb-md-5 fw-semibold d-block text-lowercase text-blue-1 text-decoration-none"
                                >
                                    paritosh2557@gmail.com
                                </a>
                                <h3 className="fw-bolder">Address</h3>
                                <a
                                    
                                    className="mb-3 mb-md-5 fw-semibold d-block text-uppercase text-blue-1 text-decoration-none"
                                >
                                   Gurugram, Haryana, India
                                </a> 
                                <h3 className="fw-bolder">Social</h3>
                                {/* <div className="d-flex align-items-center justify-content-md-end"> */}
                                <div className="d-flex align-items-center ">
                                    {contactLinks.map((el, i) => (
                                        <a key={i}
                                            href={el.link}
                                            className="me-3"
                                            target="_blank"
                                        >
                                            <img alt="" src={el.url} />                                            
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default page