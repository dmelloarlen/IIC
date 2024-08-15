import React from "react";
import "../CSS/Home.css"; // Import the CSS file for styling
import Carosel from "./Carosel";

const Home = () => {
  return (
    <div>
       <Carosel/>
       <div className="mt-3">
        <div className="d-flex justify-content-center fs-3">
            <strong>About Us</strong>
          </div>
          <div className="container">
          In the context of AICTE (All India Council for Technical Education), IIC stands for Institution's Innovation Council. The IIC is an initiative by AICTE to promote innovation and entrepreneurship within academic institutions. The council aims to encourage students and faculty to develop innovative ideas, collaborate on projects, and transform these ideas into viable startups or enterprises.

The IIC is responsible for organizing events, workshops, and hackathons, as well as fostering a culture of innovation and entrepreneurship in educational institutions.
The initiative also aligns with national priorities such as "Startup India" and "Make in India," aiming to create a robust pipeline of startups and innovators who can drive economic growth and address pressing societal challenges. 

Collaboration between the IIC and other communities within the college, supported by AICTE and MoE initiatives, can lead to innovative and impactful events. These partnerships not only enhance the learning experience but also prepare students to tackle real-world challenges through interdisciplinary approaches.

AICTE is a statutory body and a national-level council for technical education under the Department of Higher Education, Ministry of Education (MoE), India. Established in 1945, AICTE is responsible for accrediting postgraduate and graduate programs under specific categories at Indian institutions.AICTE provides guidelines and support for setting up IICs in colleges, helping them create innovation ecosystems that connect students with industry experts, entrepreneurs, and researchers.
The Ministry of Education, formerly known as the Ministry of Human Resource Development (MHRD), is responsible for the implementation of the National Education Policy and ensuring access to education for all. It oversees the development of the education sector in India, from elementary to higher education.Through initiatives like AIM, the MoE supports the creation of innovation labs, startup incubation centers, and entrepreneurship development programs in educational institutions across the country.
Ambika ne text bheja for home pagre
          </div>
       </div>
    </div>
  );
};

export default Home;
