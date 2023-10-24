// ==UserScript==
// @name         Youtube filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  no more loss time
// @author       SaidosHits
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @exclude      https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the URL includes "watch" and return early if it does
    if (window.location.href.includes("watch")) {
        return;
    }

    setInterval(filterVideos, 100);

    function filterVideos() {
        const filterWords =[

            "Java", "Python","كورس" , "البرمجة" ,"Course","JavaScript","JavaScript " , "C++", "C++ ", "نوستيك" , "XSS" ,"DDos" ,"Dork" ,"OSINT" ,"Hack" , "SQL" , "C#", "Ruby", "PHP", "Swift", "Kotlin", "Rust", "Perl", "Haskell",
            "TypeScript", "SQL", "HTML", "CSS",

            // Web Development
            "Web development", "Frontend", "Backend", "Full stack", "HTML5", "CSS3", "Angular", "Vue", "Node.js",
            "Express.js", "Django", "Flask", "Laravel", "WordPress", "REST API", "GraphQL",

            // Mobile App Development
            "Mobile app development", "iOS", "Android", "SwiftUI", "Android Studio", "Xcode", "Mobile app design",

            // Data Science and Machine Learning
            "Data science", "Machine learning", "Deep learning", "Data analysis", "Big data", "AI", "Neural networks",
            "TensorFlow", "PyTorch", "Data visualization", "Natural language processing",

            // Databases
            "Database design", "SQL databases", "NoSQL databases", "MySQL", "PostgreSQL", "MongoDB", "Redis",

            // Version Control
            "Version control", "Git", "GitHub", "GitLab", "Bitbucket", "Version control systems",

            // Software Development
            "Software development", "Agile", "Scrum", "Kanban", "DevOps", "Continuous integration", "Software architecture",
            "Code quality", "Testing", "Debugging", "Code review",

            // Cloud Computing
            "Cloud computing", "AWS", "Amazon Web Services", "Azure", "Google Cloud", "Docker", "Kubernetes",

            // Cybersecurity
            "Cybersecurity", "Penetration testing", "Ethical hacking", "Information security", "Cyber threats",
            "Firewalls", "Intrusion detection", "Cryptography", "Network security", "Security policies",

            // IDEs and Tools
            "Visual Studio", "VS Code", "Eclipse", "IntelliJ IDEA", "PyCharm", "Sublime Text", "Vim", "Docker Compose",

            // Programming Concepts
            "Algorithms", "Data structures", "Object oriented programming", "Functional programming", "Design patterns",
            "Software development methodologies",

            // Physics (English)
            "Physics", "Newton's laws", "Quantum mechanics", "General relativity", "Thermodynamics", "Electromagnetism",
            "Particle physics", "Astrophysics", "Waves and optics", "Quantum field theory",

            // Physics (Arabic)
            "فيزياء", "قوانين نيوتن", "الميكانيكا الكمية", "النسبية العامة", "الديناميكا الحرارية", "الكهرومغناطيسية",
            "الفيزياء الجزيئية", "الفيزياء الفلكية", "الموجات والبصريات", "نظرية الحقل الكمي",

            // Cybersecurity (Arabic)
            "أمان الشبكات", "اختبار الاختراق", "القرصنة الأخلاقية", "أمان المعلومات", "تهديدات الأمان",
            "جدران الحماية", "اكتشاف الاختراق", "علم التشفير", "أمان الشبكات", "سياسات الأمان",

            // Other Keywords
            "Coding", "Developers", "Open source", "Programming communities", "Code repositories", "Coding tutorials",
            "Programming blogs", "Tech events", "Programming careers", "Tech interviews",
            "Router",
            "Switch",
            "Firewall",
            "Gateway",
            "TCP/IP",
            "IP Address",
            "Subnet",
            "LAN (Local Area Network)",
            "WAN (Wide Area Network)",
            "LAN Cable",
            "ISP (Internet Service Provider)",
            "Modem",
            "Packet",
            "Protocol",
            "DNS (Domain Name System)",
            "DHCP (Dynamic Host Configuration Protocol)",
            "Proxy Server",
            "Port",
            "Ethernet",
            "Wireless",
            "VPN (Virtual Private Network)",
            "SSL (Secure Sockets Layer)",
            "HTTP",
            "HTTPS",
            "FTP (File Transfer Protocol)",
            "VoIP (Voice over Internet Protocol)",
            "Firewall Rules",
            "Subnet Mask",
            "MAC Address",
            "Router Configuration",
            "Load Balancing",
            "DNS Server",
            "Network Topology",
            "Bandwidth",
            "Latency",
            "Router Firmware",
            "Network Security",
            "Data Transmission",
            "Network Administrator",
            "Network Monitoring",
            "Switching",
            "Cabling",
            "Network Troubleshooting",
            "Wireless Security",
            "Network Segmentation",
            "Proxy Configuration",
            "Port Forwarding",
            "Intranet",
            "Extranet",
            "Network Architecture",
            "Network Infrastructure",
            "Network Devices",
            "Network Diagram",
        ];


        const videoElements = document.querySelectorAll('ytd-rich-item-renderer');

        videoElements.forEach((element) => {
            const titleElement = element.querySelector('yt-formatted-string#video-title');

            if (titleElement) {
                var title = titleElement.textContent;

                if (!filterWords.some(word => title.includes(word))) {
                    // Remove the entire video element
                    titleElement.textContent = "MAAAL RBAYB RABAK"
                    element.style.opacity = "44%"

                    // Change the source of the video cover image
                    const videoCover = element.querySelector('img.yt-core-image');
                    if (videoCover) {
                        videoCover.src = 'https://tressacademic.com/wp-content/uploads/2021/03/dont-waste-time.jpg'; // Replace 'new_image_url.jpg' with the URL of the alternative image.
                    }
                }
            }
        });
    }
})();