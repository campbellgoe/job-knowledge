const jobList = [
  {
    "Profession": "Actor",
    "Category": "Arts and Entertainment",
    "Description": `An actor is a professional in the arts and entertainment industry, primarily tasked with bringing characters to life across various media and live performances. Their role encompasses understanding and interpreting characters, rehearsing to perfect their portrayal, and performing to convey the story to an audience. This process involves vocal and physical expression, emotional depth, and collaboration with directors and other actors. Actors continuously learn and adapt to new roles, participate in auditions, and engage in promotional activities, all while maintaining their physical and emotional health to meet the demands of their profession.`
  },
  {
    "Profession": "Musician",
    "Category": "Arts and Entertainment",
    "Description": `A musician, positioned in the arts and entertainment field, engages in performing, composing, and sometimes conducting music. Their work ranges from live performances and studio recordings to songwriting and sound exploration. Musicians dedicate substantial time to practice and rehearsal, strive for technical and artistic proficiency, and often collaborate with others in the industry. The role also includes managing business aspects like marketing and booking gigs, teaching, and staying active within the musical community. Whether as solo artists, part of an ensemble, or in educational roles, musicians balance artistic expression with technical skills and business acumen.`
  },
  {
    "Profession": "Painter",
    "Category": "Arts and Entertainment",
    "Description": "A painter is an artist who specializes in creating visual art through the application of pigments to a surface. Their work involves conceptualizing ideas, selecting themes and subjects, and meticulously applying paint to create images that evoke emotions, tell stories, or capture moments. Painters study various techniques and styles, experiment with colors and textures, and often express personal or cultural narratives through their art. They may exhibit their work in galleries, sell to collectors, or undertake commissions, requiring a blend of creative talent and entrepreneurial skills."
  },
  {
    "Profession": "Writer",
    "Category": "Arts and Entertainment",
    "Description": "A writer is a professional who crafts written content, ranging from fiction and non-fiction to poetry, scripts, and articles. Writers develop plots, characters, and themes, diligently working to engage and communicate with their readers through compelling narratives and insightful observations. This profession demands a deep understanding of language, creativity in storytelling, and the ability to research and incorporate diverse subjects. Writers often undergo revision processes, seek publishing opportunities, and engage with audiences through various platforms, balancing the solitary act of writing with the public aspect of sharing and discussing their work."
  },
  {
    "Profession": "Film Director",
    "Category": "Arts and Entertainment",
    "Description": "A film director is a pivotal figure in the arts and entertainment industry, responsible for overseeing the creative aspects of a film project. Their duties include interpreting the script, guiding actors' performances, and making decisions on visual and narrative storytelling elements. Directors collaborate closely with producers, screenwriters, and cinematographers to realize a shared vision, ensuring that the final product aligns with both artistic and production goals. They are involved in various stages of film production, from pre-production planning and casting to post-production editing. A director's role demands a unique blend of creative vision, leadership skills, and the ability to manage the complexities of film production."
  },
  {
    "Profession": "Photographer",
    "Category": "Arts and Entertainment",
    "Description": "A photographer captures moments, emotions, and scenes using a camera, creating images that tell stories or document reality. This profession spans various genres, including portrait, landscape, fashion, journalism, and more. Photographers possess a keen eye for composition, lighting, and detail, often editing photos to enhance their impact. Their work may be used in media, advertisements, corporate materials, or sold as art. Success in photography not only depends on technical skills and creativity but also on the ability to market oneself, manage client relationships, and adapt to rapidly changing technology and trends."
  },
  {
    "Profession": "Graphic Designer",
    "Category": "Arts and Entertainment",
    "Description": "A graphic designer is a professional who combines art and technology to communicate ideas visually. They create designs for various applications such as websites, branding, print materials, and digital content. Using software and hand-drawn techniques, graphic designers develop layouts, choose fonts and colors, and integrate images and text to achieve aesthetic and functional objectives. This role requires a strong sense of design principles, creativity, and problem-solving skills. Graphic designers often work in advertising, marketing, publishing, or as freelancers, collaborating with clients and other creative team members to bring concepts to life."
  },
  {
    "Profession": "Dancer",
    "Category": "Arts and Entertainment",
    "Description": "A dancer expresses ideas, stories, and emotions through the medium of dance. This art form involves the use of body movements, often synchronized with music, to perform in front of live audiences or for recorded performances. Dancers train extensively to master various styles, from classical ballet to modern dance and ethnic traditions. Their work requires physical strength, flexibility, rhythm, and emotional expression, along with the discipline to rehearse and maintain peak physical condition. Dancers may perform with companies, in theatrical productions, or as part of film and television projects, embodying the creativity and physicality of this performing art."
  },
  {
    "Profession": "Interior Designer",
    "Category": "Arts and Entertainment",
    "Description": "An interior designer enhances the function, safety, and aesthetics of interior spaces while taking into account how different colors, textures, furniture, lighting, and space work together to meet occupants' needs. Professionals in this field create design plans that can transform the interiors of homes, offices, and public spaces, such as restaurants and hotels, making them both beautiful and practical. Interior designers must understand architectural drafting, building codes, and the psychological effects colors and designs have on people. Their work involves client consultations, space planning, and collaboration with architects, contractors, and suppliers to execute their vision effectively."
  },
  {
    "Profession": "Art Director",
    "Category": "Arts and Entertainment",
    "Description": "An art director in the arts and entertainment industry is responsible for the visual style and images in magazines, newspapers, product packaging, and movie and television productions. They direct the overall design and instruct others who develop artwork or layouts, working closely with clients and creative directors to determine the best visual approach for projects. Art directors are involved in the conceptual phase of designs and oversee the work of other designers and artists, making decisions about visual elements used, what artistic style to employ, and when to involve other experts, such as photographers or illustrators, to enhance the project."
  },
  {
    "Profession": "Set Designer",
    "Category": "Arts and Entertainment",
    "Description": "A set designer creates the backdrop against which all the action of a theatrical production, film, or television show takes place, contributing significantly to the storytelling by establishing the environment, era, and mood. They work closely with the director and production team to visualize and construct spaces that are both aesthetically pleasing and functional for performers. This role requires a deep understanding of art, architecture, and design, along with practical skills in drafting and 3D modeling. Set designers must also be mindful of budgets and safety regulations, ensuring their creations are not only effective but also feasible and secure."
  },
  {
    "Profession": "Costume Designer",
    "Category": "Arts and Entertainment",
    "Description": "A costume designer is tasked with designing the clothing and accessories for characters in film, television, and theater productions, helping to define the character's personality and status through their attire. They research fashion history, collaborate with directors to understand the characters, and work within budgetary constraints to design or select the appropriate garments. Costume designers often oversee the creation and fitting of each piece, ensuring it aligns with the production's overall aesthetic and the actor's needs, including considerations for movement and quick changes during performances."
  },
  {
    "Profession": "Makeup Artist",
    "Category": "Arts and Entertainment",
    "Description": "A makeup artist uses cosmetic techniques and processes to create beauty upon the human body, enhancing or altering the appearance of actors, performers, and models for film, television, theater, and photography. This profession ranges from simple makeup applications for enhancing natural features to more complex transformations involving special effects and prosthetics. Makeup artists must understand color theory, lighting, and the impact of different environments on makeup appearance. They work closely with clients and production teams to achieve desired looks, requiring a combination of artistic skill, precision, and an understanding of makeup materials and techniques."
  },
  {
    "Profession": "Accountant",
    "Category": "Business and Finance",
    "Description": "An accountant plays a crucial role in the business and finance sector, focusing on the management of financial records, ensuring accuracy, and compliance with laws. Accountants prepare and examine financial statements, compute taxes owed, and ensure that taxes are properly filed on time. They also perform audits, offer financial planning advice, and suggest ways to reduce costs, enhance revenues, and improve profits. The profession requires a strong understanding of accounting principles, laws and regulations, and analytical skills to interpret financial data and make recommendations."
  },
  {
    "Profession": "Financial Analyst",
    "Category": "Business and Finance",
    "Description": "A financial analyst helps businesses and individuals make investment decisions by analyzing financial information to forecast business, industry, and economic conditions. They examine a company's financial statements, analyze commodity prices, sales, costs, expenses, and tax rates to determine a company's value by projecting its future earnings. Financial analysts work in banks, pension funds, insurance companies, and other businesses, providing insights that help clients decide on their investment strategies. The role demands deep analytical skills, a keen understanding of financial markets, and the ability to assess and manage risk."
  },
  {
    "Profession": "Marketing Manager",
    "Category": "Business and Finance",
    "Description": "A marketing manager is responsible for planning, directing, and coordinating marketing efforts to increase a product's or service's market share. They conduct market research, develop pricing strategies, identify target markets, and oversee product development. Marketing managers work closely with sales, product development, and advertising teams to ensure the marketing strategies align with business goals. They are also involved in creating promotional materials and campaigns, analyzing their effectiveness, and adjusting strategies based on market feedback and results. This role requires creativity, analytical thinking, and strong communication skills."
  },
  {
    "Profession": "Human Resources Specialist",
    "Category": "Business and Finance",
    "Description": "A human resources specialist focuses on recruiting, screening, interviewing, and placing workers. They may also handle employee relations, payroll, benefits, and training. Human resources specialists plan, direct, and coordinate the administrative functions of an organization. They act as a link between an organization's management and its employees, handling questions, administering employee services, and resolving work-related problems. Their work involves staying up-to-date with laws and regulations affecting employment practices and requires excellent interpersonal and decision-making skills."
  },
  {
    "Profession": "Sales Representative",
    "Category": "Business and Finance",
    "Description": "A sales representative seeks to generate and close sales deals with new and existing customers. Their duties include identifying customer needs, presenting products or services, answering questions, and negotiating prices. Sales representatives work across various industries, from tech to healthcare, often specializing in a specific product or service area. This role requires strong communication skills, perseverance, and the ability to persuade and build relationships with clients. Sales representatives must understand their product or service thoroughly and stay informed about the market and competitors."
  },
  {
    "Profession": "Real Estate Agent",
    "Category": "Business and Finance",
    "Description": "A real estate agent is a licensed professional who arranges real estate transactions, putting buyers and sellers together and acting as their representative in negotiations. Real estate agents are knowledgeable about local real estate markets and can advise clients on everything from pricing and market trends to the legal requirements of transactions. They conduct property listings, show properties, and facilitate communications between buyers and sellers. The role requires strong sales, negotiation, and communication skills, as well as the ability to manage multiple clients and properties efficiently."
  },
  {
    "Profession": "Consultant",
    "Category": "Business and Finance",
    "Description": "A consultant provides expert advice in a particular area, including business, education, law, regulatory compliance, human resources, marketing, finance, health care, and many others. Consultants are hired by organizations to solve specific problems, improve operations, or provide expertise in a specific market or industry. They analyze organizational problems, develop solutions, and may help implement improvements. Consultants often have specialized knowledge and bring an external, objective perspective to challenges. The profession demands strong analytical and interpersonal skills, flexibility, and the ability to work in a variety of business environments."
  },
  {
    "Profession": "Investment Banker",
    "Category": "Business and Finance",
    "Description": "An investment banker works with companies, governments, and other entities to raise capital by issuing stocks or bonds, and they advise on mergers, acquisitions, and other financial transactions. Investment bankers provide strategic advice on financial matters, structure deals to optimize financial outcomes, and navigate regulatory requirements. They play a crucial role in financial markets, facilitating the flow of capital and supporting economic growth. This career requires a deep understanding of financial modeling, market trends, and the regulatory environment, alongside strong negotiation and communication skills."
  },
  {
    "Profession": "Insurance Agent",
    "Category": "Business and Finance",
    "Description": "An insurance agent sells and advises on life, property, health, and casualty insurance policies to individuals and businesses. They assess the insurance needs of their clients, explain the options available to them, and help them choose appropriate policies. Insurance agents may work as independent brokers, representing several insurance companies, or as captive agents, representing a single insurer. Their responsibilities include policy renewals and adjustments, claim processing assistance, and staying informed about their clients' changing needs. Success in this field requires excellent interpersonal and sales skills, attention to detail, and a solid understanding of insurance products."
  },
  {
    "Profession": "Economist",
    "Category": "Business and Finance",
    "Description": "An economist studies how societies use resources such as land, labor, raw materials, and machinery to produce goods and services. They conduct research, collect and analyze data, monitor economic trends, and develop forecasts on a wide range of issues, including inflation, employment levels, energy costs, and interest rates. Economists apply both qualitative and quantitative methods to understand economic scenarios and advise businesses, governments, and individuals on economic decisions. The profession can specialize in a variety of areas, including macroeconomics, microeconomics, development economics, and international economics. Economists must possess strong analytical skills, critical thinking abilities, and proficiency in statistical and econometric tools."
  },
  {
    "Profession": "Business Analyst",
    "Category": "Business and Finance",
    "Description": "A business analyst works within the business and finance sector to improve a company's efficiency and profitability by analyzing business practices and identifying needs or solutions. They use data analysis to assess processes, determine requirements, and deliver data-driven recommendations and reports to executives and stakeholders. Business analysts liaise between business and IT to incorporate technology solutions, ensuring that business requirements are effectively translated into system or process improvements. This role requires analytical thinking, problem-solving skills, excellent communication abilities, and a deep understanding of how businesses operate."
  },
  {
    "Profession": "Risk Manager",
    "Category": "Business and Finance",
    "Description": "A risk manager identifies and assesses threats to the financial health, safety, security, and reputation of their organization. They develop strategies to manage risks and mitigate their impacts, including financial risk, compliance risk, operational risk, and strategic risk. Risk managers work to minimize risks through insurance, risk sharing, risk prevention, and contingency planning. Their role is critical in helping organizations make informed decisions and ensuring financial stability and compliance with laws and regulations. This profession demands a strong analytical background, attention to detail, and familiarity with risk assessment tools and methodologies."
  },
  {
    "Profession": "Compliance Officer",
    "Category": "Business and Finance",
    "Description": "A compliance officer ensures that an organization complies with internal policies and regulatory requirements. Their duties include developing, implementing, and monitoring compliance programs; conducting audits to ensure adherence; and advising on regulatory changes and their impact on the organization. Compliance officers work in various sectors, including banking, healthcare, and manufacturing, where they help manage risks and protect the organization from fines and lawsuits. This role requires a thorough understanding of legal and regulatory requirements, strong ethics, and the ability to communicate and enforce standards within an organization."
  },
  {
    "Profession": "Teacher",
    "Category": "Education and Training",
    "Description": "A teacher in the education and training category imparts knowledge and skills to students at various levels, from preschool to high school. Teachers prepare lesson plans, teach subjects according to a curriculum, assess student progress, and adapt teaching methods to meet individual student needs. They play a crucial role in fostering the intellectual and social development of their students, encouraging curiosity, critical thinking, and a lifelong love of learning. Teachers also collaborate with parents, colleagues, and administrators to support student success. This profession requires dedication, patience, and a strong commitment to educational excellence."
  },
  {
    "Profession": "Professor",
    "Category": "Education and Training",
    "Description": "A professor, also in the education and training sector, works in colleges and universities, engaging in teaching, research, and publishing in their field of expertise. Professors develop syllabi, deliver lectures, mentor students, and contribute to their academic department's goals. They are also involved in scholarly work, including conducting research, writing books and articles, and presenting at academic conferences. Professors play a significant role in shaping their discipline and preparing the next generation of professionals and academics. This role demands deep knowledge of their subject, a commitment to teaching and research, and the ability to inspire and guide students in their academic and professional pursuits."
  },
  {
    "Profession": "School Counselor",
    "Category": "Education and Training",
    "Description": "A school counselor provides academic, career, college access, and personal and social competencies to children and adolescents in primary and secondary schools. They play a crucial role in assessing students' abilities, interests, and personality characteristics to develop realistic academic and career goals. School counselors offer support to students facing personal issues, provide crisis intervention, and promote positive behaviors. They work collaboratively with teachers, parents, and administrators to ensure that students have the support they need to succeed in school and life. This profession requires empathy, excellent communication skills, and a deep understanding of developmental psychology."
  },
  {
    "Profession": "Educational Administrator",
    "Category": "Education and Training",
    "Description": "An educational administrator influences the direction and quality of education by overseeing the daily operations and long-term planning of schools, colleges, and other educational institutions. Responsibilities include managing staff, setting educational standards and goals, and coordinating and evaluating curriculum policies. Educational administrators work to improve educational programs, ensure compliance with regulatory requirements, and address the needs of students and staff. The role demands leadership skills, decision-making capabilities, and a thorough understanding of educational policies and regulations."
  },
  {
    "Profession": "Librarian",
    "Category": "Education and Training",
    "Description": "A librarian manages collections of books, periodicals, and sometimes electronic resources, helping individuals find and use information. Their duties extend beyond just organizing collections; they also assist in research, teach information literacy skills, and create programs for community engagement. Librarians work in various settings, including public libraries, schools, and universities, adapting to the needs of their patrons by providing access to information and fostering a love of reading. This role requires a strong commitment to service, organizational skills, and an understanding of information technology."
  },
  {
    "Profession": "Corporate Trainer",
    "Category": "Education and Training",
    "Description": "A corporate trainer designs and delivers training programs to improve employees' skills and knowledge within a company. These programs can range from onboarding new staff to teaching new skills and technologies, leadership training, and more. Corporate trainers assess the needs of an organization, develop customized training materials, and evaluate the effectiveness of training programs. They play a vital role in enhancing productivity, efficiency, and morale within the workplace. This profession requires excellent communication and presentation skills, a good understanding of educational methodologies, and the ability to motivate and engage learners."
  },
  {
    "Profession": "Special Education Teacher",
    "Category": "Education and Training",
    "Description": "A special education teacher works with students who have a wide range of learning, mental, emotional, and physical disabilities. They adapt general education lessons and teach various subjects, such as reading, writing, and math, to students with mild and moderate disabilities. They also teach basic skills, such as literacy and communication techniques, to students with severe disabilities. Special education teachers assess students' skills to determine their needs and to develop teaching plans. They work closely with parents, teachers, and other professionals to develop Individualized Education Programs (IEPs) for students, ensuring they receive a quality education tailored to their needs. This profession requires patience, creativity, and a deep understanding of the unique needs of students with disabilities."
  },
  {
    "Profession": "Tutor",
    "Category": "Education and Training",
    "Description": "A tutor provides personalized instruction to students outside of the traditional classroom environment, offering support in specific subject areas, test preparation, study techniques, and enhancing understanding of material. Tutors work with students of all ages, from elementary school to college and beyond, tailoring their teaching methods to fit the individual learning style and needs of each student. They assess their students' strengths and weaknesses, monitor progress, and adapt lessons to ensure effective learning. This role requires a deep understanding of the subject matter, patience, and the ability to engage students in a one-on-one setting to improve their academic performance."
  },
  {
    "Profession": "Curriculum Developer",
    "Category": "Education and Training",
    "Description": "A curriculum developer, also known as a curriculum coordinator or instructional coordinator, designs, evaluates, and implements educational programs and teaching materials. They work to ensure that the curriculum meets both the educational standards and the students' needs. Curriculum developers research and select textbooks, integrate technology into the curriculum, train teachers on new content, and assess the effectiveness of curriculum programs. Their work is critical in shaping the educational content and experiences offered to students, requiring a strong background in education, subject matter expertise, and an understanding of pedagogical theories and technologies."
  },
  {
    "Profession": "Instructional Designer",
    "Category": "Education and Training",
    "Description": "An instructional designer creates educational programs and materials that incorporate the principles of learning and instructional theory to enhance the learning experience. They develop courses and instructional materials for traditional classrooms, online learning, or blended learning environments. Instructional designers work closely with subject matter experts to identify the learning needs of students, design learning objectives, and create content that is both engaging and effective. They utilize a variety of multimedia and technological tools to create accessible and interactive learning experiences. This profession demands a combination of creative, technical, and pedagogical skills."
  },
  {
    "Profession": "Education Consultant",
    "Category": "Education and Training",
    "Description": "An education consultant advises schools, educational institutions, families, and businesses on educational planning and strategies. They may specialize in areas such as curriculum development, educational technology, school improvement, and college admission processes. Education consultants assess educational practices, recommend improvements, and implement changes to achieve better educational outcomes. They also provide guidance to students and families on educational opportunities and career planning. The role requires a comprehensive understanding of the education system, policy, curriculum design, and the ability to analyze and solve complex educational issues."
  },
  {
    "Profession": "Software Developer",
    "Category": "Engineering and Technology",
    "Description": "A software developer designs, tests, and develops software that runs on various computer systems, ranging from business applications and operating systems to network control systems and games. They work through the software development life cycle, from identifying user needs and designing software solutions to writing code and testing the product for functionality. Software developers must be proficient in programming languages, understand software engineering principles, and stay current with technology trends. They may work in a variety of settings, including technology companies, financial firms, healthcare organizations, or as freelancers. This profession requires strong analytical skills, creativity, and the ability to work collaboratively in fast-paced environments."
  },
  {
    "Profession": "Mechanical Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Civil Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Electrical Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Chemical Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Aerospace Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "IT Specialist",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Data Scientist",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Network Administrator",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Biomedical Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Environmental Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Robotics Engineer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "AI Developer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Blockchain Developer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Big Data Analyst",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "UX/UI Designer",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Cybersecurity Analyst",
    "Category": "Engineering and Technology",
    "Description": ""
  },
  {
    "Profession": "Doctor",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Nurse",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Pharmacist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Dentist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Physical Therapist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Psychologist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Veterinarian",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Surgeon",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Optometrist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Occupational Therapist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Radiologist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Medical Technologist",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Dietitian",
    "Category": "Healthcare",
    "Description": ""
  },
  {
    "Profession": "Chef",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Hotel Manager",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Travel Agent",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Event Planner",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Tour Guide",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Bartender",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Flight Attendant",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Concierge",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Culinary Artist",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Sommelier",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Tourism Manager",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Casino Manager",
    "Category": "Hospitality and Tourism",
    "Description": ""
  },
  {
    "Profession": "Lawyer",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Police Officer",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Judge",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Paralegal",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Politician",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Urban Planner",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Social Worker",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Diplomat",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Legal Advisor",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Forensic Analyst",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Public Affairs Consultant",
    "Category": "Law and Public Policy",
    "Description": ""
  },
  {
    "Profession": "Carpenter",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Electrician",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Machinist",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Welder",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Plumber",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Construction Manager",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Quality Control Inspector",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Factory Worker",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Safety Engineer",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Industrial Designer",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Tool and Die Maker",
    "Category": "Manufacturing and Construction",
    "Description": ""
  },
  {
    "Profession": "Journalist",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Broadcaster",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Editor",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Public Relations Specialist",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Copywriter",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Social Media Manager",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Translator",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Technical Writer",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Animator",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Podcaster",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Media Planner",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Digital Marketer",
    "Category": "Media and Communication",
    "Description": ""
  },
  {
    "Profession": "Biologist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Chemist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Physicist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Environmental Scientist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Geologist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Astronomer",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Laboratory Technician",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Research Scientist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Astrophysicist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Marine Biologist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Neuroscientist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Epidemiologist",
    "Category": "Science and Research",
    "Description": ""
  },
  {
    "Profession": "Customer Service Representative",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Administrative Assistant",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Security Guard",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Janitor",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Maintenance Worker",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Hair Stylist",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Child Care Worker",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Personal Trainer",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Life Coach",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Nutritionist",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Esthetician",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Dog Trainer",
    "Category": "Service and Support",
    "Description": ""
  },
  {
    "Profession": "Truck Driver",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Pilot",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Ship Captain",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Warehouse Manager",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Logistics Coordinator",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Train Conductor",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Delivery Driver",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Forklift Operator",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Air Traffic Controller",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Maritime Pilot",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Customs Broker",
    "Category": "Transportation and Logistics",
    "Description": ""
  },
  {
    "Profession": "Agronomist",
    "Category": "Agriculture and Natural Resources",
    "Description": ""
  },
  {
    "Profession": "Environmental Consultant",
    "Category": "Agriculture and Natural Resources",
    "Description": ""
  },
  {
    "Profession": "Forester",
    "Category": "Agriculture and Natural Resources",
    "Description": ""
  },
  {
    "Profession": "Horticulturist",
    "Category": "Agriculture and Natural Resources",
    "Description": ""
  },
  {
    "Profession": "Wildlife Biologist",
    "Category": "Agriculture and Natural Resources",
    "Description": ""
  },
  {
    "Profession": "Archivist",
    "Category": "Information and Library Services",
    "Description": ""
  },
  {
    "Profession": "Data Curator",
    "Category": "Information and Library Services",
    "Description": ""
  },
  {
    "Profession": "Information Analyst",
    "Category": "Information and Library Services",
    "Description": ""
  },
  {
    "Profession": "Library Technician",
    "Category": "Information and Library Services",
    "Description": ""
  },
  {
    "Profession": "Records Manager",
    "Category": "Information and Library Services",
    "Description": ""
  },
  {
    "Profession": "Jewelry Designer",
    "Category": "Arts, Crafts, and Design",
    "Description": ""
  },
  {
    "Profession": "Fashion Designer",
    "Category": "Arts, Crafts, and Design",
    "Description": ""
  },
  {
    "Profession": "Potter",
    "Category": "Arts, Crafts, and Design",
    "Description": ""
  },
  {
    "Profession": "Glass Blower",
    "Category": "Arts, Crafts, and Design",
    "Description": ""
  },
  {
    "Profession": "Illustrator",
    "Category": "Arts, Crafts, and Design",
    "Description": ""
  },
  {
    "Profession": "Athletic Trainer",
    "Category": "Sports and Fitness",
    "Description": ""
  },
  {
    "Profession": "Sports Coach",
    "Category": "Sports and Fitness",
    "Description": ""
  },
  {
    "Profession": "Fitness Instructor",
    "Category": "Sports and Fitness",
    "Description": ""
  },
  {
    "Profession": "Golf Pro",
    "Category": "Sports and Fitness",
    "Description": ""
  },
  {
    "Profession": "Sports Agent",
    "Category": "Sports and Fitness",
    "Description": ""
  }
]

export default jobList