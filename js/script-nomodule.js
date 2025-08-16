// Translations object (inline to avoid module issues)
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            services: "Services",
            servicesItems: {
                brand: "Brand Design",
                marketing: "Digital Marketing",
                web: "Web Development",
                consulting: "Consulting",
                automation: "Automation"
            },
            courses: "Courses",
            coursesItems: {
                course1: "Target Vision"
            },
            portfolio: "References",
            contact: "Contact",
            language: "Language"
        },
        breadcrumb: {
            home: "Home",
            courses: "Courses",
            target: "Targeting - Level 1"
        },
        hero: {
            line1: "Target Vision",
            line2: "Digital Excellence",
            subtitle: "Premium digital solutions for ambitious brands",
            cta1: "Get Started",
            cta2: "Explore Services"
        },
        about: {
            title: "About Us",
            subtitle: "Company Director & Creative Expert",
            description1: "I'm Daria Kovalchuk - a recognized expert in targeted advertising with over 6 years of experience. I specialize in Meta Ads and help entrepreneurs transform their business through high-performance advertising campaigns.",
            description2: "Throughout my career, I've launched hundreds of successful campaigns, trained dozens of new targetologists, and achieved exceptional results for clients across various industries. My methodologies guarantee measurable growth and ROI.",
            stats: {
                clients: "Happy Clients",
                students: "Trained Targetologists",
                experience: "Years Experience"
            },
            member2: {
                name: "Name Surname",
                subtitle: "Position",
                description: "Second team member description will be added later."
            }
        },
        services: {
            title: "Services",
            subtitle: "Tailored solutions for premium brands",
            brand: {
                title: "Brand Design",
                description: "Creating distinctive visual identities that embody luxury and sophistication"
            },
            marketing: {
                title: "Digital Marketing",
                description: "Strategic campaigns that elevate your brand presence and foster meaningful engagement"
            },
            web: {
                title: "Web Development",
                description: "Custom websites that combine cutting-edge technology with timeless design"
            },
            consulting: {
                title: "Consulting",
                description: "Expert guidance for optimizing your digital approach and strategy"
            },
            automation: {
                title: "Automation",
                description: "Intelligent process automation for increased efficiency and time savings"
            }
        },
        course: {
            title: "Targeting - Level 1",
            subtitle: "Launch Meta Ads (Facebook and Instagram) advertising from scratch in just one month",
            goal: {
                title: "Course Objective",
                description1: "• Launch your first successful advertising campaign, even if you've never worked with targeting before.",
                description2: "• Stop feeling anxious when opening the Meta advertising cabinet (Facebook and Instagram).",
                description3: "In the course, you'll get a step-by-step guide that makes the advertising launch process clear and accessible. We'll remove the fear of complex settings, and you'll confidently start attracting clients or scaling your business.",
                conclusion: "This course is your first step towards confidence and results in targeted advertising!"
            },
            format: {
                title: "Course Format",
                duration: "Online training lasting 1 month with full support and guidance from me and the team of curators.",
                includes: "What's included:",
                feature1: "3 Zoom video calls where we'll discuss complex moments, answer questions, and provide additional support.",
                feature2: "Support chat where you can quickly get answers to questions and share successes.",
                feature3: "Lessons on the educational platform with feedback on your homework assignments.",
                feature4: "Help with launching advertising: we'll work through your first steps together so you can confidently launch your campaign.",
                support: "The course is built so you feel supported at every stage and guaranteed to achieve results!"
            },
            instructor: {
                title: "About Me",
                intro: "My name is Daria Kovalchuk. I help beginners understand targeted advertising and launch their first successful campaigns on Facebook and Instagram.",
                experience: "I've been working in targeting for more than 4.5 years, during which time I've launched hundreds of advertising campaigns, helping my clients increase revenue and find new customers.",
                methodology: "I created this course together with a professional methodologist to make the training as clear, structured, and results-guaranteed as possible.",
                stat1: "Graduates",
                stat2: "New Targetologists",
                stat3: "Years Experience"
            },
            program: {
                title: "Target Vision Course Program",
                module1: {
                    title: "Module 1: Technical Cabinet Setup",
                    item1: "What is targeted advertising, why it's needed, and what results you can get.",
                    item2: "Meta Ads advertising cabinet basics: what's important to know for achieving results.",
                    item3: "Setting up a business account on Instagram and technical profile check for advertising work.",
                    item4: "Step-by-step advertising cabinet setup for launching the first campaign."
                },
                module2: {
                    title: "Module 2: Advertising Launch Preparation",
                    item1: "Rules for successful advertising launch: what you need to know before starting.",
                    item2: "Creating a meaningful foundation: how to properly formulate your offer.",
                    item3: "Defining target audience: who your clients are and how to find them."
                },
                module3: {
                    title: "Module 3: Creating Advertising Creative",
                    item1: "How to create creatives for advertising campaigns.",
                    item2: "Working with templates in Canva: practical advice and effective techniques.",
                    item3: "Principles of visual and text design for attracting attention."
                },
                module4: {
                    title: "Module 4: Setting Up First Advertising Campaign",
                    item1: "Step-by-step guide to launching the first ad in the advertising cabinet.",
                    item2: "Choosing goals, setting budget and audience.",
                    item3: "Checking advertising campaign before launch: important details."
                },
                module5: {
                    title: "Module 5: Results Analysis and Optimization",
                    item1: "How to properly evaluate advertising campaign effectiveness.",
                    item2: "Basic metrics and indicators: what's important to know and what to focus on.",
                    item3: "Additional materials for advertising campaign analysis."
                }
            },
            pricing: {
                title: "Pricing Plans",
                buy: "BUY COURSE",
                popular: "MOST POPULAR",
                economy: {
                    title: "Economy Plan",
                    feature1: "Access to 5 modules on the platform for self-study.",
                    feature2: "Additional materials for each module.",
                    feature3: "General participants chat for communication and experience exchange (without feedback).",
                    description: "Perfect for those who want to study material at their own pace and independently master basic targeting skills."
                },
                comfort: {
                    title: "Comfort Plan",
                    feature1: "Access to 5 modules on the platform with homework checking.",
                    feature2: "Extended additional materials for each module.",
                    feature3: "Participants chat with feedback from curator: answers to your questions and support at all stages.",
                    feature4: "Bonus surprise lessons on the platform: unique tips and strategies.",
                    feature5: "3 group Zoom video calls for discussing complex questions.",
                    feature6: "100% guarantee of launching your first advertising campaign.",
                    description: "For those who want not only to master the basics but also get support during learning and advertising launch."
                },
                business: {
                    title: "Business Plan",
                    feature1: "Access to 5 modules on the platform with homework checking.",
                    feature2: "Extended additional materials for each module.",
                    feature3: "Participants chat with feedback from curator.",
                    feature4: "Bonus surprise lessons on the platform.",
                    feature5: "3 group Zoom video calls.",
                    feature6: "1 personal video call with me.",
                    feature7: "Personal support chat with me.",
                    feature8: "100% guarantee of launching your first advertising campaign.",
                    description: "For serious entrepreneurs who want maximum support and personal approach."
                }
            },
            audience: {
                title: "Who This Course Is For",
                for: {
                    title: "✅ The course IS for you if:",
                    item1: "You're a beginner who has never worked with targeting and wants to master advertising setup basics.",
                    item2: "You're an entrepreneur who wants to learn to independently launch ads and attract clients for your business.",
                    item3: "You're considering targeting as a profession and want to take the first step in mastering this in-demand skill.",
                    item4: "You want to stop being afraid of Meta Ads advertising cabinet and learn to work with it confidently."
                },
                not: {
                    title: "❌ The course is NOT for you if:",
                    item1: "You already have experience with Meta Ads and confidently set up advertising campaigns.",
                    item2: "You're looking for advanced strategies, analytics, and scaling.",
                    item3: "You're not ready to complete practical assignments.",
                    item4: "You're not ready to dedicate time to learning (at least 2-3 hours per week)."
                },
                important: "Important:",
                level: "This course provides essential knowledge and skills in targeting. After completing it, you'll be able to launch your first ad and successfully work with Meta Ads campaigns."
            }
        },
        courses: {
            title: "Courses",
            subtitle: "Professional education for your success",
            languageIndicator: "Only in Russian",
            course1: {
                title: "Targeting - Level 1",
                subtitle: "Complete targeted advertising course",
                description: "Complete course for beginners who want to enter the world of targeted advertising in Meta Ads."
            }
        },
        portfolio: {
            title: "References",
            subtitle: "What our clients say"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's create something extraordinary together",
            form: {
                title: "Contact Us",
                name: "Your Name",
                email: "Your Email",
                phone: "Phone number",
                service: {
                    select: "Select service...",
                    brand: "Brand Design",
                    marketing: "Digital Marketing",
                    web: "Web Development",
                    consulting: "Consulting",
                    automation: "Automation",
                    courses: "Courses",
                    other: "Other"
                },
                message: "Your Message",
                newsletter: "I'm interested in news and updates",
                privacy: "I agree to the processing of personal data according to",
                privacyLink: "privacy policy",
                submit: "Send Message"
            }
        },
        validation: {
            required: "Please fill in all required fields.",
            privacy: "You must agree to the processing of personal data."
        },
        privacy: {
            title: "Privacy Policy",
            contact: {
                title: "Contact Form",
                text: "Your personal data (name, email, phone, message) is used exclusively to respond to your inquiry and provide our services. Data is not shared with third parties."
            },
            newsletter: {
                title: "Newsletter",
                text: "If you agree to receive newsletters, your email will be used to send information about our services. You can unsubscribe at any time."
            },
            rights: {
                title: "Your Rights",
                text: "You have the right to access your data, correct it, delete it, or limit its processing. Contact us to exercise your rights."
            },
            contact_info: {
                title: "Contact",
                text: "Data Controller: Target Vision<br>Email: info@targetvision.cz"
            }
        },
        modal: {
            title: "Thank you for your message!",
            message: "Your inquiry has been successfully sent. We will get back to you within 24 hours with answers to your questions.",
            close: "Understood"
        },
        footer: {
            rights: "© 2024 Target Vision. All rights reserved.",
            tagline: "Crafted with excellence"
        }
    },
    cs: {
        nav: {
            home: "Domů",
            about: "O nás",
            services: "Služby",
            servicesItems: {
                brand: "Design Značky",
                marketing: "Digitální Marketing",
                web: "Webový Vývoj",
                consulting: "Konzultace",
                automation: "Automatizace"
            },
            courses: "Kurzy",
            coursesItems: {
                course1: "Target Vision"
            },
            portfolio: "Reference",
            contact: "Kontakt",
            language: "Jazyk"
        },
        breadcrumb: {
            home: "Domů",
            courses: "Kurzy",
            target: "Targeting - Level 1"
        },
        hero: {
            line1: "Target Vision",
            line2: "Digitální Excelence",
            subtitle: "Prémiová digitální řešení pro ambiciózní značky",
            cta1: "Začít",
            cta2: "Prozkoumat služby"
        },
        about: {
            title: "O nás",
            subtitle: "Ředitelka společnosti & Kreativní expertka",
            description1: "Jsem Daria Kovalchuk - uznávaná expertka na targetovanou reklamu s více než 6 lety zkušeností. Specializuji se na Meta Ads a pomáhám podnikatelům transformovat jejich byznys prostřednictvím vysoce výkonných reklamních kampaní.",
            description2: "Za svou kariéru jsem spustila stovky úspěšných kampaní, vycvičila desítky nových targetologů a dosáhla výjimečných výsledků pro klienty z různých odvětví. Moje metodiky zaručují měřitelný růst a ROI.",
            stats: {
                clients: "Spokojených klientů",
                students: "Vycvičených targetologů",
                experience: "Let zkušeností"
            },
            member2: {
                name: "Jméno Příjmení",
                subtitle: "Pozice",
                description: "Popis druhého člena týmu bude doplněn později."
            }
        },
        services: {
            title: "Služby",
            subtitle: "Řešení na míru pro prémiové značky",
            brand: {
                title: "Design Značky",
                subtitle: "Vytváříme výrazné vizuální identity",
                description: "Vytváření výrazných vizuálních identit, které ztělesňují luxus a sofistikovanost. Naše práce kombinuje kreativní vizi s strategickým přístupem k vytvoření značky, která rezonuje s vaším cílovým publikem."
            },
            marketing: {
                title: "Digitální Marketing",
                subtitle: "Strategické kampaně pro váš úspěch",
                description: "Strategické kampaně, které pozvedají přítomnost vaší značky a podporují smysluplnou interakci. Naše digitální marketingové strategie jsou navrženy tak, aby maximalizovaly ROI a budovaly dlouhodobé vztahy s vaším publikem."
            },
            web: {
                title: "Webový Vývoj",
                subtitle: "Moderní webové řešení",
                description: "Webové stránky na míru, které kombinují špičkovou technologii s nadčasovým designem. Vytváříme responsivní a rychlé weby, které poskytují vynikající uživatelskou zkušenost."
            },
            consulting: {
                title: "Konzultace",
                subtitle: "Odborné poradenství",
                description: "Odborné poradenství pro optimalizaci vašeho digitálního přístupu a strategie. Pomáháme vám najít nejlepší řešení pro váš business a implementovat efektivní strategie."
            },
            automation: {
                title: "Automatizace",
                subtitle: "Inteligentní řešení pro váš úspěch",
                description: "Inteligentní automatizace procesů pro zvýšení efektivity a úsporu času. Naše řešení kombinují nejmodernější technologie s praktickým přístupem k optimalizaci vašich obchodních procesů."
            }
        },
        course: {
            title: "Targeting - Level 1",
            subtitle: "Spusťte reklamu v Meta Ads (Facebook a Instagram) z nuly už za měsíc",
            goal: {
                title: "Cíl kurzu",
                description1: "• Zapustit svou první úspěšnou reklamu, i když jste nikdy předtím nepracovali s targetem.",
                description2: "• Přestat pociťovat úzkost při otevírání reklamního kabinetu Meta (Facebook a Instagram).",
                description3: "Na kurzu získáte postupný návod, který učiní proces spuštění reklamy srozumitelným a dostupným. Odstraníme strach před složitými nastaveními a s jistotou začnete přitahovat klienty nebo škálovat svůj byznys.",
                conclusion: "Tento kurz je váš první krok k jistotě a výsledkům v targetované reklamě!"
            },
            format: {
                title: "Formát kurzu",
                duration: "Online výuka v délce 1 měsíc s plným doprovodem a podporou ode mě a týmu kurátorů.",
                includes: "Co obsahuje:",
                feature1: "3 video hovory v Zoom, kde probereme složité momenty, odpovíme na otázky a dáme vám dodatečnou podporu.",
                feature2: "Chat podpory, kde budete moci operativně získávat odpovědi na otázky a sdílet úspěchy.",
                feature3: "Lekce na vzdělávací platformě se zpětnou vazbou k vašim domácím úkolům.",
                feature4: "Pomoc se spuštěním reklamy: společně projdeme vaše první kroky, abyste s jistotou spustili svou kampaň.",
                support: "Kurz je postaven tak, abyste cítili podporu v každé fázi a garantovaně dosáhli výsledku!"
            },
            instructor: {
                title: "O mně",
                intro: "Jmenuji se Daria Kovalchuk. Pomáhám začátečníkům pochopit targetovanou reklamu a spouštět své první úspěšné kampaně na Facebooku a Instagramu.",
                experience: "Pracuji v targetu již více než 4,5 roku, za tu dobu jsem spustila stovky reklamních kampaní a pomohla svým klientům zvýšit příjmy a najít nové zákazníky.",
                methodology: "Tento kurz jsem vytvořila společně s profesionálním metodikem, aby byla výuka maximálně srozumitelná, strukturovaná a dávala garantovaný výsledek.",
                stat1: "Absolventů",
                stat2: "Nových targetologů",
                stat3: "Let zkušeností"
            },
            program: {
                title: "Program kurzu Target Vision",
                module1: {
                    title: "Modul 1: Technické nastavení kabinetu",
                    item1: "Co je targetovaná reklama, proč je potřeba a jaký výsledek můžete získat.",
                    item2: "Základy reklamního kabinetu Meta Ads: co je důležité vědět pro dosažení výsledku.",
                    item3: "Nastavení business účtu na Instagramu a technická kontrola profilu pro práci s reklamou.",
                    item4: "Postupné nastavení reklamního kabinetu pro spuštění první kampaně."
                },
                module2: {
                    title: "Modul 2: Příprava na spuštění reklamy",
                    item1: "Pravidla úspěšného spuštění reklamy: co je nutné vědět před startem.",
                    item2: "Vytvoření smyslové báze: jak správně formulovat vaši nabídku.",
                    item3: "Určení cílové skupiny: kdo jsou vaši klienti a jak je najít."
                },
                module3: {
                    title: "Modul 3: Vytvoření reklamního kreativu",
                    item1: "Jak vytvořit kreativy pro reklamní kampaň.",
                    item2: "Práce se šablonami v Canva: praktické rady a efektivní postupy.",
                    item3: "Principy vizuálního a textového oformování pro přitažení pozornosti."
                },
                module4: {
                    title: "Modul 4: Nastavení první reklamní kampaně",
                    item1: "Postupný návod na spuštění první reklamy v reklamním kabinetu.",
                    item2: "Výběr cílů, nastavení rozpočtu a publika.",
                    item3: "Kontrola reklamní kampaně před spuštěním: důležité detaily."
                },
                module5: {
                    title: "Modul 5: Analýza výsledků a optimalizace",
                    item1: "Jak správně ohodnotit efektivnost reklamní kampaně.",
                    item2: "Základní metriky a ukazatele: co je důležité vědět a na co se zaměřit.",
                    item3: "Dodatečné materiály pro analýzu reklamních kampaní."
                }
            },
            pricing: {
                title: "Tarify",
                buy: "ZAKOUPIT KURZ",
                popular: "NEJPOPULÁRNĚJŠÍ",
                economy: {
                    title: "Ekonomický tarif",
                    feature1: "Přístup k 5 modulům na platformě pro samostudium.",
                    feature2: "Dodatečné materiály pro každý modul.",
                    feature3: "Obecný chat účastníků pro komunikaci a výměnu zkušeností (bez zpětné vazby).",
                    description: "Ideálně vhodné pro ty, kdo chtějí studovat materiál vlastním tempem a samostatně si osvojit základní dovednosti targetu."
                },
                comfort: {
                    title: "Komfortní tarif",
                    feature1: "Přístup k 5 modulům na platformě s kontrolou domácích úkolů.",
                    feature2: "Rozšířené dodatečné materiály pro každý modul.",
                    feature3: "Chat účastníků se zpětnou vazbou od kurátora: odpovědi na vaše otázky a podpora ve všech fázích.",
                    feature4: "Bonusové lekce-překvapení na platformě: unikátní fišky a strategie.",
                    feature5: "3 skupinové video hovory v Zoom pro rozbor složitých otázek.",
                    feature6: "100% garance spuštění vaší první reklamní kampaně.",
                    description: "Pro ty, kdo chtějí nejen osvojit si základy, ale také získat podporu v procesu učení a spuštění reklamy."
                },
                business: {
                    title: "Business tarif",
                    feature1: "Přístup k 5 modulům na platformě s kontrolou domácích úkolů.",
                    feature2: "Rozšířené dodatečné materiály pro každý modul.",
                    feature3: "Chat účastníků se zpětnou vazbou od kurátora.",
                    feature4: "Bonusové lekce-překvapení na platformě.",
                    feature5: "3 skupinové video hovory v Zoom.",
                    feature6: "1 osobní video hovor se mnou.",
                    feature7: "Osobní chat podpory se mnou.",
                    feature8: "100% garance spuštění vaší první reklamní kampaně.",
                    description: "Pro vážné podnikatele, kteří chtějí maximální podporu a osobní přístup."
                }
            },
            audience: {
                title: "Pro koho je tento kurz",
                for: {
                    title: "✅ Kurz JE pro vás, pokud:",
                    item1: "Jste začátečník, který nikdy nepracoval s targetem a chce osvojit si základy nastavení reklamy.",
                    item2: "Jste podnikatel, který se chce naučit samostatně spouštět reklamy a přitahovat klienty pro svůj byznys.",
                    item3: "Uvažujete o targetu jako profesi a chcete udělat první krok v osvojení požadované dovednosti.",
                    item4: "Chcete přestat se bát reklamního kabinetu Meta Ads a naučit se s ním pracovat jistě."
                },
                not: {
                    title: "❌ Kurz NENÍ pro vás, pokud:",
                    item1: "Již máte zkušenosti s Meta Ads a jistě nastavujete reklamní kampaně.",
                    item2: "Hledáte pokročilé strategie, analytiku a škálování.",
                    item3: "Nejste připraveni plnit praktické úkoly.",
                    item4: "Nejste připraveni věnovat čas učení (alespoň 2-3 hodiny týdně)."
                },
                important: "Důležité:",
                level: "Tento kurz dává základní znalosti a dovednosti v taргetu. Po jeho absolvování budete moci spustit svou první reklamu a úspěšně pracovat s Meta Ads kampaněmi."
            }
        },
        courses: {
            title: "Kurzy",
            subtitle: "Profesionální vzdělávání pro váš úspěch",
            languageIndicator: "Pouze v ruském jazyce",
            course1: {
                title: "Targeting - Level 1",
                subtitle: "Kompletní kurz targetované reklamy",
                description: "Kompletní kurz targetované reklamy pro začátečníky v Meta Ads."
            }
        },
        portfolio: {
            title: "Reference",
            subtitle: "Co říkají naši klienti"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Vytvořme něco mimořádného společně",
            form: {
                title: "Kontaktujte nás",
                name: "Vaše jméno",
                email: "Váš email",
                phone: "Telefonní číslo",
                service: {
                    select: "Vyberte službu...",
                    brand: "Design Značky",
                    marketing: "Digitální Marketing",
                    web: "Webový Vývoj",
                    consulting: "Konzultace",
                    automation: "Automatizace",
                    courses: "Kurzy",
                    other: "Jiné"
                },
                message: "Vaše zpráva",
                newsletter: "Mám zájem o novinky a aktuální informace",
                privacy: "Souhlasím se zpracováním osobních údajů podle",
                privacyLink: "zásad ochrany osobních údajů",
                submit: "Odeslat zprávu"
            }
        },
        validation: {
            required: "Prosím vyplňte všechna povinná pole.",
            privacy: "Musíte souhlasit se zpracováním osobních údajů."
        },
        privacy: {
            title: "Zásady ochrany osobních údajů",
            contact: {
                title: "Kontaktní formulář",
                text: "Vaše osobní údaje (jméno, email, telefon, zpráva) používáme výhradně pro zodpovězení vaší poptávky a poskytnutí našich služeb. Údaje nejsou předávány třetím stranám."
            },
            newsletter: {
                title: "Newsletter",
                text: "Pokud souhlasíte s odběrem novinek, váš email bude použit pro zasílání informací o našich službách. Odhlásit se můžete kdykoli."
            },
            rights: {
                title: "Vaše práva",
                text: "Máte právo na přístup ke svým údajům, jejich opravu, výmaz nebo omezení zpracování. Kontaktujte nás pro uplatnění svých práv."
            },
            contact_info: {
                title: "Kontakt",
                text: "Správce údajů: Target Vision<br>Email: info@targetvision.cz"
            }
        },
        modal: {
            title: "Děkujeme za vaši zprávu!",
            message: "Vaše poptávka byla úspěšně odeslána. Ozveme se vám do 24 hodin s odpovědí na vaše dotazy.",
            close: "Rozumím"
        },
        footer: {
            rights: "© 2024 Target Vision. Všechna práva vyhrazena.",
            tagline: "Vytvořeno s excelencí"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            servicesItems: {
                brand: "Дизайн бренда",
                marketing: "Цифровой маркетинг",
                web: "Веб-разработка",
                consulting: "Консультации",
                automation: "Автоматизация"
            },
            courses: "Курсы",
            coursesItems: {
                course1: "Target Vision"
            },
            portfolio: "Отзывы",
            contact: "Контакты",
            language: "Язык"
        },
        breadcrumb: {
            home: "Главная",
            courses: "Курсы",
            target: "Targeting - Level 1"
        },
        hero: {
            line1: "Target Vision",
            line2: "Цифровое Совершенство",
            subtitle: "Премиальные цифровые решения для амбициозных брендов",
            cta1: "Начать",
            cta2: "Изучить услуги"
        },
        about: {
            title: "О нас",
            subtitle: "Директор компании & Креативный эксперт",
            description1: "Я Дарья Ковальчук - признанный эксперт по таргетированной рекламе с более чем 6-летним опытом. Специализируюсь на Meta Ads и помогаю предпринимателям трансформировать свой бизнес через высокоэффективные рекламные кампании.",
            description2: "За свою карьеру я запустила сотни успешных кампаний, обучила десятки новых таргетологов и достигла исключительных результатов для клиентов из различных отраслей. Мои методики гарантируют измеримый рост и ROI.",
            stats: {
                clients: "Довольных клиентов",
                students: "Обученных таргетологов",
                experience: "Лет опыта"
            },
            member2: {
                name: "Имя Фамилия",
                subtitle: "Должность",
                description: "Описание второго члена команды будет добавлено позже."
            }
        },
        services: {
            title: "Услуги",
            subtitle: "Индивидуальные решения для премиальных брендов",
            brand: {
                title: "Дизайн бренда",
                description: "Создание выразительных визуальных идентичностей, воплощающих роскошь и изысканность"
            },
            marketing: {
                title: "Цифровой маркетинг",
                description: "Стратегические кампании, которые поднимают присутствие вашего бренда и способствуют осмысленному взаимодействию"
            },
            web: {
                title: "Веб-разработка",
                description: "Индивидуальные веб-сайты, сочетающие передовые технологии с вневременным дизайном"
            },
            consulting: {
                title: "Консультации",
                description: "Экспертное руководство для оптимизации вашего цифрового подхода и стратегии"
            },
            automation: {
                title: "Автоматизация",
                description: "Интеллектуальная автоматизация процессов для повышения эффективности и экономии времени"
            }
        },
        course: {
            title: "Targeting - Level 1",
            subtitle: "Запустите рекламу в Meta Ads (Facebook и Instagram) с нуля уже через месяц",
            goal: {
                title: "Цель курса",
                description1: "• Запустить свою первую успешную рекламу, даже если вы никогда раньше не работали с таргетом.",
                description2: "• Перестать испытывать тревогу, открывая рекламный кабинет Meta (Facebook и Instagram).",
                description3: "На курсе вы получите пошаговое руководство, которое сделает процесс запуска рекламы понятным и доступным. Мы уберем страх перед сложными настройками, и вы с уверенностью начнете привлекать клиентов или масштабировать свой бизнес.",
                conclusion: "Этот курс — ваш первый шаг к уверенности и результатам в таргетированной рекламе!"
            },
            format: {
                title: "Формат курса",
                duration: "Онлайн-обучение длительностью 1 месяц с полным сопровождением и поддержкой от меня и команды кураторов.",
                includes: "Что входит:",
                feature1: "3 созвона в Zoom, где мы разберем сложные моменты, ответим на вопросы и дадим вам дополнительную поддержку.",
                feature2: "Чат поддержки, где вы сможете оперативно получать ответы на вопросы и делиться успехами.",
                feature3: "Уроки на образовательной платформе с обратной связью по вашим домашним заданиям.",
                feature4: "Помощь в запуске рекламы: мы вместе проработаем ваши первые шаги, чтобы вы уверенно запустили свою кампанию.",
                support: "Курс построен так, чтобы вы чувствовали поддержку на каждом этапе и гарантированно достигли результата!"
            },
            instructor: {
                title: "Обо мне",
                intro: "Меня зовут Дарья Ковальчук. Я помогаю новичкам разобраться в таргетированной рекламе и запускать свои первые успешные кампании в Facebook и Instagram.",
                experience: "Я работаю в таргете уже более 4,5 лет, за это время я запустила сотни рекламных кампаний, помогая своим клиентам увеличивать доход и находить новых покупателей.",
                methodology: "Этот курс я создала вместе с профессиональным методологом для того, чтобы обучение было максимально понятным, структурированным и давало гарантированный результат.",
                stat1: "Выпускников",
                stat2: "Новых таргетологов",
                stat3: "Лет опыта"
            },
            program: {
                title: "Программа курса Target Vision",
                module1: {
                    title: "Модуль 1: Техническая настройка кабинета",
                    item1: "Что такое таргетированная реклама, зачем она нужна, и какой результат вы можете получить.",
                    item2: "Основы рекламного кабинета Meta Ads: что важно знать для достижения результата.",
                    item3: "Настройка бизнес-аккаунта в Instagram и техническая проверка профиля для работы с рекламой.",
                    item4: "Пошаговая настройка рекламного кабинета для запуска первой кампании."
                },
                module2: {
                    title: "Модуль 2: Подготовка к запуску рекламы",
                    item1: "Правила успешного запуска рекламы: что необходимо знать перед стартом.",
                    item2: "Создание смысловой базы: как правильно сформулировать ваше предложение.",
                    item3: "Определение целевой аудитории: кто ваши клиенты и как их найти."
                },
                module3: {
                    title: "Модуль 3: Создание рекламного креатива",
                    item1: "Как создать креативы для рекламной кампании.",
                    item2: "Работа с шаблонами в Canva: практические советы и эффективные приемы.",
                    item3: "Принципы визуального и текстового оформления для привлечения внимания."
                },
                module4: {
                    title: "Модуль 4: Настройка первой рекламной кампании",
                    item1: "Пошаговое руководство по запуску первой рекламы в рекламном кабинете.",
                    item2: "Выбор целей, настройки бюджета и аудитории.",
                    item3: "Проверка рекламной кампании перед запуском: важные детали."
                },
                module5: {
                    title: "Модуль 5: Анализ результатов и оптимизация",
                    item1: "Как правильно оценить эффективность рекламной кампании.",
                    item2: "Основные метрики и показатели: что важно знать и на что обращать внимание.",
                    item3: "Дополнительные материалы для анализа рекламных кампаний."
                }
            },
            pricing: {
                title: "Тарифы",
                buy: "ПРИОБРЕСТИ КУРС",
                popular: "САМЫЙ ПОПУЛЯРНЫЙ",
                economy: {
                    title: "Эконом Тариф",
                    feature1: "Доступ к 5 модулям на платформе для самостоятельного изучения.",
                    feature2: "Дополнительные материалы для каждого модуля.",
                    feature3: "Общий чат участников для общения и обмена опытом (без обратной связи).",
                    description: "Идеально подходит для тех, кто хочет изучить материал в удобном темпе и самостоятельно освоить базовые навыки таргета."
                },
                comfort: {
                    title: "Комфорт Тариф",
                    feature1: "Доступ к 5 модулям на платформе с проверкой домашних заданий.",
                    feature2: "Расширенные дополнительные материалы по каждому модулю.",
                    feature3: "Чат участников с обратной связью от куратора: ответы на ваши вопросы и поддержка на всех этапах.",
                    feature4: "Бонусные уроки-сюрпризы на платформе: уникальные фишки и стратегии.",
                    feature5: "3 групповых созвона в Zoom для разбора сложных вопросов.",
                    feature6: "100% гарантия запуска вашей первой рекламной кампании.",
                    description: "Для тех, кто хочет не только освоить базу, но и получить поддержку в процессе обучения и запуске рекламы."
                },
                business: {
                    title: "Бизнес Тариф",
                    feature1: "Доступ к 5 модулям на платформе с проверкой домашних заданий.",
                    feature2: "Расширенные дополнительные материалы по каждому модулю.",
                    feature3: "Чат участников с обратной связью от куратора.",
                    feature4: "Бонусные уроки-сюрпризы на платформе.",
                    feature5: "3 групповых созвона в Zoom.",
                    feature6: "1 личный созвон со мной.",
                    feature7: "Чат поддержки лично со мной.",
                    feature8: "100% гарантия запуска вашей первой рекламной кампании.",
                    description: "Для серьезных предпринимателей, которые хотят максимальную поддержку и персональный подход."
                }
            },
            audience: {
                title: "Для кого этот курс",
                for: {
                    title: "✅ Курс ДЛЯ вас, если:",
                    item1: "Вы новичок, который никогда не работал с таргетом и хочет освоить основы настройки рекламы.",
                    item2: "Вы предприниматель, который хочет научиться самостоятельно запускать рекламу и привлекать клиентов для своего бизнеса.",
                    item3: "Вы рассматриваете таргет как профессию и хотите сделать первый шаг в освоении востребованного навыка.",
                    item4: "Вы хотите перестать бояться рекламного кабинета Meta Ads и научиться работать с ним уверенно."
                },
                not: {
                    title: "❌ Курс НЕ для вас, если:",
                    item1: "Вы уже имеете опыт работы с Meta Ads и уверенно настраиваете рекламные кампании.",
                    item2: "Вы ищете углубленные стратегии, аналитику и масштабирование.",
                    item3: "Вы не готовы выполнять практические задания.",
                    item4: "Вы не готовы выделить время на обучение (хотя бы 2–3 часа в неделю)."
                },
                important: "Важно:",
                level: "Этот курс дает базовые знания и навыки в таргете. После его прохождения вы сможете запустить свою первую рекламу и успешно работать с кампаниями Meta Ads."
            }
        },
        courses: {
            title: "Курсы",
            subtitle: "Профессиональное образование для вашего успеха",
            languageIndicator: "Доступно",
            course1: {
                title: "Targeting - Level 1",
                subtitle: "Полный курс таргетированной рекламы",
                description: "Компетентный курс таргетированной рекламы для начинающих в Meta Ads."
            }
        },
        portfolio: {
            title: "Отзывы",
            subtitle: "Что говорят наши клиенты"
        },
        contact: {
            title: "Связаться",
            subtitle: "Давайте создадим что-то необыкновенное вместе",
            form: {
                title: "Свяжитесь с нами",
                name: "Ваше имя",
                email: "Ваш email",
                phone: "Номер телефона",
                service: {
                    select: "Выберите услугу...",
                    brand: "Дизайн Бренда",
                    marketing: "Цифровой Маркетинг",
                    web: "Веб Разработка",
                    consulting: "Консультации",
                    automation: "Автоматизация",
                    courses: "Курсы",
                    other: "Другое"
                },
                message: "Ваше сообщение",
                newsletter: "Я заинтересован в новостях и обновлениях",
                privacy: "Я согласен на обработку персональных данных согласно",
                privacyLink: "политике конфиденциальности",
                submit: "Отправить сообщение"
            }
        },
        validation: {
            required: "Пожалуйста, заполните все обязательные поля.",
            privacy: "Вы должны согласиться на обработку персональных данных."
        },
        privacy: {
            title: "Политика конфиденциальности",
            contact: {
                title: "Контактная форма",
                text: "Ваши персональные данные (имя, email, телефон, сообщение) используются исключительно для ответа на ваш запрос и предоставления наших услуг. Данные не передаются третьим лицам."
            },
            newsletter: {
                title: "Рассылка",
                text: "Если вы согласились на получение новостей, ваш email будет использоваться для отправки информации о наших услугах. Вы можете отписаться в любое время."
            },
            rights: {
                title: "Ваши права",
                text: "Вы имеете право на доступ к своим данным, их исправление, удаление или ограничение обработки. Свяжитесь с нами для реализации ваших прав."
            },
            contact_info: {
                title: "Контакт",
                text: "Контролер данных: Target Vision<br>Email: info@targetvision.cz"
            }
        },
        modal: {
            title: "Спасибо за ваше сообщение!",
            message: "Ваш запрос был успешно отправлен. Мы свяжемся с вами в течение 24 часов с ответами на ваши вопросы.",
            close: "Понятно"
        },
        footer: {
            rights: "© 2024 Target Vision. Все права защищены.",
            tagline: "Создано с совершенством"
        }
    },
    uk: {
        nav: {
            home: "Головна",
            about: "Про нас",
            services: "Послуги",
            servicesItems: {
                brand: "Дизайн бренду",
                marketing: "Цифровий маркетинг",
                web: "Веб-розробка",
                consulting: "Консультації",
                automation: "Автоматизація"
            },
            courses: "Курси",
            coursesItems: {
                course1: "Target Vision"
            },
            portfolio: "Відгуки",
            contact: "Контакти",
            language: "Мова"
        },
        breadcrumb: {
            home: "Головна",
            courses: "Курси",
            target: "Targeting - Level 1"
        },
        hero: {
            line1: "Target Vision",
            line2: "Цифрова Досконалість",
            subtitle: "Преміальні цифрові рішення для амбітних брендів",
            cta1: "Почати",
            cta2: "Вивчити послуги"
        },
        about: {
            title: "Про нас",
            subtitle: "Директор компанії & Креативний експерт",
            description1: "Я Дарія Ковальчук - визнаний експерт з таргетованої реклами з понад 6-річним досвідом. Спеціалізуюся на Meta Ads і допомагаю підприємцям трансформувати свій бізнес через високоефективні рекламні кампанії.",
            description2: "За свою кар'єру я запустила сотні успішних кампаній, навчила десятки нових таргетологів і досягла винятковихрезультатів для клієнтів з різних галузей. Мої методики гарантують вимірювальний ріст і ROI.",
            stats: {
                clients: "Задоволених клієнтів",
                students: "Навчених таргетологів",
                experience: "Років досвіду"
            },
            member2: {
                name: "Ім'я Прізвище",
                subtitle: "Посада",
                description: "Опис другого члена команди буде додано пізніше."
            }
        },
        services: {
            title: "Послуги",
            subtitle: "Індивідуальні рішення для преміальних брендів",
            brand: {
                title: "Дизайн бренду",
                description: "Створення виразних візуальних ідентичностей, що втілюють розкіш і витонченість"
            },
            marketing: {
                title: "Цифровий маркетинг",
                description: "Стратегічні кампанії, які піднімають присутність вашого бренду та сприяють змістовній взаємодії"
            },
            web: {
                title: "Веб-розробка",
                description: "Індивідуальні веб-сайти, що поєднують передові технології з позачасовим дизайном"
            },
            consulting: {
                title: "Консультації",
                description: "Експертне керівництво для оптимізації вашого цифрового підходу та стратегії"
            },
            automation: {
                title: "Автоматизація",
                description: "Інтелектуальна автоматизація процесів для підвищення ефективності та економії часу"
            }
        },
        course: {
            title: "Targeting - Level 1",
            subtitle: "Запустіть рекламу в Meta Ads (Facebook та Instagram) з нуля вже через місяць",
            goal: {
                title: "Мета курсу",
                description1: "• Запустити вашу першу успішну рекламу, навіть якщо ви ніколи раніше не працювали з таргетингом.",
                description2: "• Перестати відчувати тривогу, відкриваючи рекламний кабінет Meta (Facebook та Instagram).",
                description3: "На курсі ви отримаєте покрокове керівництво, яке зробить процес запуску реклами зрозумілим та доступним.",
                conclusion: "Цей курс — ваш перший крок до впевненості та результатів у таргетованій рекламі!"
            },
            format: {
                title: "Формат курсу",
                duration: "Онлайн-навчання тривалістю 1 місяць з повним супроводом та підтримкою від мене та команди кураторів.",
                includes: "Що входить:",
                feature1: "3 дзвінки в Zoom, де ми розберемо складні моменти та дамо додаткову підтримку.",
                feature2: "Чат підтримки, де ви зможете оперативно отримувати відповіді на запитання.",
                feature3: "Уроки на освітній платформі зі зворотним зв'язком.",
                feature4: "Допомога в запуску реклами разом з нами."
            },
            program: {
                title: "Програма курсу Targeting - Level 1",
                module1: {
                    title: "Модуль 1: Технічне налаштування кабінету",
                    item1: "Що таке таргетована реклама, навіщо вона потрібна, і який результат ви можете отримати.",
                    item2: "Основи рекламного кабінету Meta Ads: що важливо знати для досягнення результату.",
                    item3: "Налаштування бізнес-акаунта в Instagram та технічна перевірка профілю для роботи з рекламою.",
                    item4: "Покрокове налаштування рекламного кабінету для запуску першої кампанії."
                },
                module2: {
                    title: "Модуль 2: Підготовка до запуску реклами",
                    item1: "Правила успішного запуску реклами: що необхідно знати перед стартом.",
                    item2: "Створення смислової бази: як правильно сформулювати вашу пропозицію.",
                    item3: "Визначення цільової аудиторії: хто ваші клієнти і як їх знайти."
                },
                module3: {
                    title: "Модуль 3: Створення рекламного креативу",
                    item1: "Як створити креативи для рекламної кампанії.",
                    item2: "Робота з шаблонами в Canva: практичні поради та ефективні прийоми.",
                    item3: "Принципи візуального та текстового оформлення для привернення уваги."
                },
                module4: {
                    title: "Модуль 4: Налаштування першої рекламної кампанії",
                    item1: "Покрокове керівництво по запуску першої реклами в рекламному кабінеті.",
                    item2: "Вибір цілей, налаштування бюджету та аудиторії.",
                    item3: "Перевірка рекламної кампанії перед запуском: важливі деталі."
                },
                module5: {
                    title: "Модуль 5: Аналіз результатів та оптимізація",
                    item1: "Як правильно оцінити ефективність рекламної кампанії.",
                    item2: "Основні метрики та показники: що важливо знати і на що звертати увагу.",
                    item3: "Додаткові матеріали для аналізу рекламних кампаній."
                }
            },
            pricing: {
                title: "Тарифи",
                buy: "ПРИДБАТИ КУРС",
                popular: "НАЙПОПУЛЯРНІШИЙ",
                economy: {
                    title: "Економ Тариф",
                    feature1: "Доступ до 5 модулів на платформі для самостійного вивчення.",
                    feature2: "Додаткові матеріали для кожного модуля.",
                    feature3: "Загальний чат учасників для спілкування та обміну досвідом (без зворотного зв'язку).",
                    description: "Ідеально підходить для тих, хто хоче вивчити матеріал у зручному темпі та самостійно освоїти базові навички таргету."
                },
                comfort: {
                    title: "Комфорт Тариф",
                    feature1: "Доступ до 5 модулів на платформі з перевіркою домашніх завдань.",
                    feature2: "Розширені додаткові матеріали по кожному модулю.",
                    feature3: "Чат учасників зі зворотним зв'язком від куратора: відповіді на ваші питання та підтримка на всіх етапах.",
                    feature4: "Бонусні уроки-сюрпризи на платформі: унікальні фішки та стратегії.",
                    feature5: "3 групові дзвінки в Zoom для розбору складних питань.",
                    feature6: "100% гарантія запуску вашої першої рекламної кампанії.",
                    description: "Для тих, хто хоче не тільки освоїти базу, але й отримати підтримку в процесі навчання та запуску реклами."
                },
                business: {
                    title: "Бізнес Тариф",
                    feature1: "Доступ до 5 модулів на платформі з перевіркою домашніх завдань.",
                    feature2: "Розширені додаткові матеріали по кожному модулю.",
                    feature3: "Чат учасників зі зворотним зв'язком від куратора.",
                    feature4: "Бонусні уроки-сюрпризи на платформі.",
                    feature5: "3 групові дзвінки в Zoom.",
                    feature6: "1 особистий дзвінок зі мною.",
                    feature7: "Чат підтримки особисто зі мною.",
                    feature8: "100% гарантія запуску вашої першої рекламної кампанії.",
                    description: "Для серйозних підприємців, які хочуть максимальну підтримку та персональний підхід."
                }
            },
            audience: {
                title: "Для кого цей курс",
                for: {
                    title: "✅ Курс ДЛЯ вас, якщо:",
                    item1: "Ви новачок, який ніколи не працював з таргетом і хоче освоїти основи налаштування реклами.",
                    item2: "Ви підприємець, який хоче навчитися самостійно запускати рекламу та залучати клієнтів для свого бізнесу.",
                    item3: "Ви розглядаєте таргет як професію і хочете зробити перший крок в освоєнні затребуваної навички.",
                    item4: "Ви хочете перестати боятися рекламного кабінету Meta Ads і навчитися працювати з ним впевнено."
                },
                not: {
                    title: "❌ Курс НЕ для вас, якщо:",
                    item1: "Ви вже маєте досвід роботи з Meta Ads і впевнено налаштовуєте рекламні кампанії.",
                    item2: "Ви шукаєте поглиблені стратегії, аналітику та масштабування.",
                    item3: "Ви не готові виконувати практичні завдання.",
                    item4: "Ви не готові виділити час на навчання (хоча б 2–3 години на тиждень)."
                },
                important: "Важливо:",
                level: "Цей курс дає базові знання та навички в таргеті. Після його проходження ви зможете запустити свою першу рекламу та успішно працювати з кампаніями Meta Ads."
            }
        },
        courses: {
            title: "Курси",
            subtitle: "Професійна освіта для вашого успіху",
            languageIndicator: "Доступно",
            course1: {
                title: "Targeting - Level 1",
                subtitle: "Повний курс таргетованої реклами",
                description: "Повний курс таргетованої реклами для початківців в Meta Ads."
            }
        },
        portfolio: {
            title: "Відгуки",
            subtitle: "Що кажуть наші клієнти"
        },
        contact: {
            title: "Зв'язатися",
            subtitle: "Давайте створимо щось надзвичайне разом",
            form: {
                title: "Зв'яжіться з нами",
                name: "Ваше ім'я",
                email: "Ваш email",
                phone: "Номер телефону",
                service: {
                    select: "Оберіть послугу...",
                    brand: "Дизайн Бренду",
                    marketing: "Цифровий Маркетинг",
                    web: "Веб Розробка",
                    consulting: "Консультації",
                    automation: "Автоматизація",
                    courses: "Курси",
                    other: "Інше"
                },
                message: "Ваше повідомлення",
                newsletter: "Я зацікавлений у новинах та оновленнях",
                privacy: "Я погоджуюся на обробку персональних даних згідно з",
                privacyLink: "політикою конфіденційності",
                submit: "Надіслати повідомлення"
            }
        },
        validation: {
            required: "Будь ласка, заповніть всі обов'язкові поля.",
            privacy: "Ви повинні погодитися на обробку персональних даних."
        },
        privacy: {
            title: "Політика конфіденційності",
            contact: {
                title: "Контактна форма",
                text: "Ваші персональні дані (ім'я, email, телефон, повідомлення) використовуються виключно для відповіді на ваш запит та надання наших послуг. Дані не передаються третім особам."
            },
            newsletter: {
                title: "Розсилка",
                text: "Якщо ви погодилися на отримання новин, ваш email буде використовуватися для надсилання інформації про наші послуги. Ви можете відписатися в будь-який час."
            },
            rights: {
                title: "Ваші права",
                text: "Ви маєте право на доступ до своїх даних, їх виправлення, видалення або обмеження обробки. Зв'яжіться з нами для реалізації ваших прав."
            },
            contact_info: {
                title: "Контакт",
                text: "Контролер даних: Target Vision<br>Email: info@targetvision.cz"
            }
        },
        modal: {
            title: "Дякуємо за ваше повідомлення!",
            message: "Ваш запит було успішно надіслано. Ми зв'яжемося з вами протягом 24 годин з відповідями на ваші питання.",
            close: "Зрозуміло"
        },
        footer: {
            rights: "© 2024 Daria Kovalchuk. Всі права захищені.",
            tagline: "Створено з досконалістю"
        }
    }
};

// Initialize AOS (Animate On Scroll) with mobile optimization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    // Disable animations on mobile for better performance
    disable: 'mobile'
});

// Navbar scroll effect + sticky shadow toggle
const navbar = document.getElementById('navbar');
const scrollThreshold = 8;

function updateHeaderOnScroll() {
    if (!navbar) return;
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('is-scrolled');
    } else {
        navbar.classList.remove('is-scrolled');
    }
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

// Mobile menu toggle with ARIA + ESC support
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

function openMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
}

function closeMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        // Add touch feedback for mobile
        if ('ontouchstart' in window) {
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        }
    });
});

// Language dropdown functionality (only for language switcher)
const langToggles = document.querySelectorAll('.lang-toggle');
const langOptions = document.querySelectorAll('.lang-option');

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-dropdown')) {
        document.querySelectorAll('.language-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Toggle language dropdown on click and touch
langToggles.forEach(toggle => {
    const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        const dropdown = toggle.closest('.language-dropdown');
        
        // Close other dropdowns
        document.querySelectorAll('.language-dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    };
    
    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('touchstart', handleToggle, { passive: false });
});

// Handle language option clicks and touch
langOptions.forEach(option => {
    const handleOption = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        const lang = option.getAttribute('data-lang');
        if (lang) {
            setLanguage(lang);
        }
        
        // Close all language dropdowns
        document.querySelectorAll('.language-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    };
    
    option.addEventListener('click', handleOption);
    option.addEventListener('touchstart', handleOption, { passive: false });
});

// Smooth scrolling for anchor links with mobile optimization
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - navbar.offsetHeight;
            
            // Use different scroll behavior for mobile
            if ('ontouchstart' in window) {
                // For mobile devices, use instant scroll for better performance
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'auto'
                });
            } else {
                // For desktop, use smooth scroll
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active navigation link highlighting with mobile optimization
const sections = document.querySelectorAll('section[id]');

// Throttle scroll events for better mobile performance
let ticking = false;
function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateActiveNav);
        ticking = true;
    }
});

// Add touch feedback for service and course cards
document.querySelectorAll('.service-card, .course-card').forEach(card => {
    if ('ontouchstart' in window) {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    }
});

// Lightbox functionality for portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-caption">
            <h4></h4>
            <p></p>
        </div>
        <button class="lightbox-close">&times;</button>
    </div>
`;
document.body.appendChild(lightbox);

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4');
        const description = item.querySelector('p');
        
        lightbox.querySelector('.lightbox-image').src = img.src;
        lightbox.querySelector('.lightbox-image').alt = img.alt;
        lightbox.querySelector('.lightbox-caption h4').textContent = title.textContent;
        lightbox.querySelector('.lightbox-caption p').textContent = description.textContent;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        // Also close mobile menu on ESC
        if (navMenu && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// Counter animation for stats
const stats = document.querySelectorAll('.stat-number');
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.dataset.suffix ? target + element.dataset.suffix : target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '+');
        }
    }, 30);
};

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

stats.forEach(stat => {
    counterObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Language switching functionality
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    // Update active button (legacy)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update active language option (new dropdown)
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    // Update language toggle display
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        const flagIcon = langToggle.querySelector('.flag-icon');
        const langText = langToggle.querySelector('.lang-text');
        
        const flags = {
            'en': '🇺🇸',
            'cs': '🇨🇿',
            'ru': '🇷🇺',
            'uk': '🇺🇦'
        };
        
        const texts = {
            'en': 'EN',
            'cs': 'CS',
            'ru': 'RU',
            'uk': 'UK'
        };
        
        if (flagIcon) flagIcon.textContent = flags[lang] || '🇨🇿';
        if (langText) langText.textContent = texts[lang] || 'CS';
        
        // Update active state of toggle button
        langToggle.classList.remove('active');
        langToggle.classList.add('active');
    }

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn('Translation not found for key:', key, 'in language:', lang);
                value = key; // Fallback to key if translation not found
                break;
            }
        }
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    // Update all label translations
    document.querySelectorAll('[data-i18n-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-label');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn('Label translation not found for key:', key, 'in language:', lang);
                value = key;
                break;
            }
        }
        element.setAttribute('data-label', value);
    });

    // Update all placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn('Placeholder translation not found for key:', key, 'in language:', lang);
                value = key; // Fallback to key if translation not found
                break;
            }
        }
        element.placeholder = value;
    });

    // Update course card states based on selected language
    updateCourseCardStates(lang);

    // Save language preference
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        console.warn('Could not save language preference to localStorage');
    }
}

// Update course card visual/interactive states per language
function updateCourseCardStates(lang) {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.classList.remove('disabled', 'available');
        card.removeEventListener('click', handleDisabledCourseClick);

        if (lang === 'cs' || lang === 'en') {
            card.classList.add('disabled');
            card.addEventListener('click', handleDisabledCourseClick);
        } else {
            card.classList.add('available');
        }
    });
}

// Prevent navigation and show notice for unavailable courses (CS/EN)
function handleDisabledCourseClick(e) {
    e.preventDefault();
    let currentLang = 'cs';
    try {
        currentLang = localStorage.getItem('preferredLanguage') || 'cs';
    } catch (e2) { /* noop */ }
    showCourseUnavailableMessage(currentLang);
}

function showCourseUnavailableMessage(lang) {
    const existing = document.querySelector('.course-notice-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'course-notice-toast';
    toast.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 10000; color: #fff;
        padding: 12px 18px; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,.15);
        background: linear-gradient(135deg, #c9a961 0%, #d4af37 100%);
        transform: translateX(120%); transition: transform .3s ease; font-weight: 600; font-size: 14px;`;

    const text = (lang === 'cs')
        ? 'Kurzy jsou dostupné pouze v ruštině a ukrajinštině'
        : 'Courses are available only in Russian and Ukrainian';
    toast.textContent = text;
    document.body.appendChild(toast);

    requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
    setTimeout(() => {
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

// Initialize language and event handlers
function initializeLanguageSystem() {
    console.log('Initializing language system...');
    
    // Get saved language
    let savedLang;
    try {
        savedLang = localStorage.getItem('preferredLanguage') || 'cs';
    } catch (e) {
        savedLang = 'cs'; // Fallback if localStorage is not available
    }

    console.log('Saved language:', savedLang);

    // Set initial language
    setLanguage(savedLang);
    updateCourseCardStates(savedLang);

    // Add click handlers for language buttons (legacy)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Add click handlers for language options (new dropdown)
    const langOptions = document.querySelectorAll('.lang-option');
    console.log('Found language options:', langOptions.length);
    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            console.log('Language option clicked:', lang);
            setLanguage(lang);
            
            // Close language dropdown
            const dropdown = option.closest('.language-dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        });
    });

    // Add click handler for language toggle
    const langToggle = document.querySelector('.lang-toggle');
    console.log('Found language toggle:', !!langToggle);
    
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Language toggle clicked');
            const dropdown = langToggle.closest('.language-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
                console.log('Dropdown active:', dropdown.classList.contains('active'));
            }
        });
    }
}

// Render references from JSON into the carousel
async function renderReferences() {
    const track = document.querySelector('.references-track');
    if (!track) return;

    try {
        const res = await fetch('js/references.json', { cache: 'no-store' });
        const data = await res.json();
        const refs = data.references || [];

        const createCard = (ref) => {
            const stars = Array.from({ length: ref.stars || 5 }).map(() => '<i class="fa-solid fa-star"></i>').join('');
            return `
                <div class="reference-card">
                    <div class="reference-brand">
                        <span class="brand-badge">${ref.avatar ? `<img src="${ref.avatar}" alt="${ref.brandName}">` : (ref.brandCode || '')}</span>
                        <span class="brand-name">${ref.brandName || ''}</span>
                    </div>
                    <div class="reference-rating" aria-label="${ref.stars || 5} out of 5 stars">${stars}</div>
                    <p class="reference-text">${ref.text || ''}</p>
                    <div class="reference-author">— ${ref.author || ''}</div>
                </div>`;
        };

        // Build two sets for seamless loop
        const htmlA = refs.map(createCard).join('');
        const htmlB = refs.map(createCard).join('');
        track.innerHTML = htmlA + htmlB;
    } catch (e) {
        console.warn('Failed to load references.json', e);
    }
}

// Initialize immediately if DOM is ready
console.log('Document ready state:', document.readyState);

if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', () => { initializeLanguageSystem(); renderReferences(); });
} else {
    console.log('DOM already ready, initializing immediately...');
    initializeLanguageSystem();
    renderReferences();
} 