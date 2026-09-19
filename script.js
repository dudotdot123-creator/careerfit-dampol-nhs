const bgImages = {
      welcome: "assets/images/welcome.jpg",
      stem: "assets/images/stem.jpg",
      abm: "assets/images/abm.jpg",
      humss: "assets/images/humss.jpg",
      ict: "assets/images/ict.jpg",
      he: "assets/images/he.jpg"
    };
    const bgTints = {
      default: "linear-gradient(135deg, rgba(255,255,255,.55), rgba(245,245,250,.55))",
      stem: "linear-gradient(135deg, rgba(212,241,224,.6), rgba(152,216,176,.6))",
      abm: "linear-gradient(135deg, rgba(248,215,215,.6), rgba(232,168,168,.6))",
      humss: "linear-gradient(135deg, rgba(232,224,247,.6), rgba(196,176,232,.6))",
      ict: "linear-gradient(135deg, rgba(212,232,247,.6), rgba(148,199,232,.6))",
      he: "linear-gradient(135deg, rgba(255,242,204,.6), rgba(255,224,153,.6))"
    };
    let activeBgLayer = 1;
    function setBackground(imageKey, tintKey) {
      const showing = document.getElementById("bg-photo-" + activeBgLayer);
      const nextLayer = activeBgLayer === 1 ? 2 : 1;
      const hidden = document.getElementById("bg-photo-" + nextLayer);
      hidden.style.backgroundImage = "url(\"" + bgImages[imageKey] + "\")";
      requestAnimationFrame(() => {
        hidden.classList.add("active");
        showing.classList.remove("active");
      });
      activeBgLayer = nextLayer;
      document.getElementById("bg-tint").style.background = bgTints[tintKey] || bgTints.default;
    }

    const strandInfo = {
      STEM: {
        icon: "🔬", theme: "stem", bg: "stem",
        passions: ["Science & Research", "Math & Engineering", "Health & Medicine", "Technology & Innovation"],
        skills: ["General Chemistry", "General Physics", "Capstone Research"]
      },
      ABM: {
        icon: "💰", theme: "abm", bg: "abm",
        passions: ["Business & Entrepreneurship", "Finance & Accounting", "Marketing & Sales", "Economics & Management"],
        skills: ["Fundamentals of Accountancy, Business & Management", "Applied Economics", "Business Finance", "Business Ethics", "Business Simulation"]
      },
      HUMSS: {
        icon: "📚", theme: "humss", bg: "humss",
        passions: ["Writing & Creative Works", "Social Sciences & Culture", "Politics & Public Service", "Community & Social Development"],
        skills: ["Creative Nonfiction", "Introduction to World Religions & Belief Systems", "Philippine Politics & Governance", "Community Engagement, Solidarity & Citizenship", "Culminating Activity"]
      },
      ICT: {
        icon: "💻", theme: "ict", bg: "ict",
        passions: ["Programming & Software", "Graphic Design & Animation", "Computer Systems & Servicing", "Digital Media & Technology"],
        skills: ["Java Programming", "Visual Graphic Design", "Animation", "Computer Systems Servicing", "Work Immersion"]
      },
      "Home Economics": {
        icon: "🏠", theme: "he", bg: "he",
        passions: ["Bread & Pastry Production", "Housekeeping & Hospitality", "Culinary & Food Services", "Home Management & Caregiving"],
        skills: ["Housekeeping", "Bread and Pastry Production", "Work Immersion"]
      }
    };

    const courses = [
      ["BS Architecture", ["STEM"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","Capstone Research"], "Design buildings and spaces for people and communities."],
      ["B Fine Arts Major in Visual Communication", ["ICT","HUMSS"], 2, ["Graphic Design & Animation","Writing & Creative Works"], ["Visual Graphic Design","Creative Nonfiction"], "Create visual concepts, artwork, and communication designs."],
      ["B Landscape Architecture", ["STEM"], 2, ["Math & Engineering","Science & Research"], ["General Physics","Capstone Research"], "Plan and design outdoor environments and landscapes."],
      ["BS Environmental Planning", ["STEM"], 2, ["Science & Research","Math & Engineering"], ["General Chemistry","Capstone Research"], "Help plan sustainable and resilient communities."],
      ["BA Broadcasting", ["HUMSS"], 1, ["Writing & Creative Works","Digital Media & Technology"], ["Creative Nonfiction","Culminating Activity"], "Create broadcasts and media stories for different audiences."],
      ["BA Journalism", ["HUMSS"], 1, ["Writing & Creative Works","Social Sciences & Culture"], ["Creative Nonfiction","Culminating Activity"], "Research, write, and communicate news and public-interest stories."],
      ["BA Performing Arts (Theater Track)", ["HUMSS"], 1, ["Writing & Creative Works","Community & Social Development"], ["Creative Nonfiction","Culminating Activity"], "Develop performance, storytelling, and theater production skills."],
      ["BA English Language Studies", ["HUMSS"], 1, ["Writing & Creative Works","Social Sciences & Culture"], ["Creative Nonfiction","Culminating Activity"], "Study language, communication, and English literature."],
      ["BA Malikhaing Pagsulat", ["HUMSS"], 1, ["Writing & Creative Works"], ["Creative Nonfiction","Culminating Activity"], "Turn ideas and experiences into creative Filipino writing."],
      ["BS Accountancy", ["ABM"], 2, ["Finance & Accounting","Economics & Management"], ["Fundamentals of Accountancy, Business & Management","Business Finance"], "Work with financial records, reports, and decisions."],
      ["BS Business Administration", ["ABM"], 1, ["Business & Entrepreneurship","Economics & Management"], ["Business Ethics","Business Simulation","Applied Economics"], "Learn how organizations and businesses operate."],
      ["BS Entrepreneurship", ["ABM"], 1, ["Business & Entrepreneurship","Marketing & Sales"], ["Business Simulation","Business Ethics"], "Build ideas, ventures, and solutions for real-world needs."],
      ["BS Legal Management", ["ABM","HUMSS"], 2, ["Politics & Public Service","Economics & Management"], ["Philippine Politics & Governance","Business Ethics"], "Combine business, law, governance, and organizational skills."],
      ["BS Civil Engineering", ["STEM"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","Capstone Research"], "Design and build structures and infrastructure."],
      ["BS Computer Engineering", ["STEM","ICT"], 2, ["Math & Engineering","Programming & Software"], ["General Physics","Java Programming"], "Combine hardware, software, and engineering problem-solving."],
      ["BS Electrical Engineering", ["STEM"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","General Chemistry"], "Work with electrical systems, power, and technology."],
      ["BS Electronics Engineering", ["STEM","ICT"], 2, ["Technology & Innovation","Math & Engineering"], ["General Physics","Computer Systems Servicing"], "Design and improve electronic and communication systems."],
      ["BS Industrial Engineering", ["STEM"], 2, ["Math & Engineering","Economics & Management"], ["General Physics","Capstone Research"], "Improve systems, processes, productivity, and quality."],
      ["BS Manufacturing Engineering", ["STEM"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","Capstone Research"], "Develop efficient manufacturing processes and products."],
      ["BS Mechanical Engineering", ["STEM"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","General Chemistry"], "Design machines, systems, and mechanical solutions."],
      ["BS Mechatronics Engineering", ["STEM","ICT"], 2, ["Math & Engineering","Technology & Innovation"], ["General Physics","Computer Systems Servicing"], "Combine mechanics, electronics, and intelligent systems."],
      ["BS Hospitality Management", ["Home Economics"], 1, ["Housekeeping & Hospitality","Home Management & Caregiving"], ["Housekeeping","Work Immersion"], "Build a career in hotels, events, and guest service."],
      ["BS in Tourism Management (Major in Travel Operations)", ["Home Economics"], 1, ["Housekeeping & Hospitality","Culinary & Food Services"], ["Housekeeping","Work Immersion"], "Plan travel experiences and manage tourism operations."],
      ["BS in Tourism Management (Major in Airport Operations)", ["Home Economics"], 1, ["Housekeeping & Hospitality","Digital Media & Technology"], ["Housekeeping","Work Immersion"], "Learn service, travel, and airport operations."],
      ["BIT Architectural Drafting and Digital Graphics Technology", ["ICT","STEM"], 1, ["Graphic Design & Animation","Math & Engineering"], ["Visual Graphic Design","Computer Systems Servicing"], "Create technical drawings and digital graphics for design work."],
      ["BIT Automotive Technology", ["STEM"], 1, ["Technology & Innovation","Math & Engineering"], ["General Physics","Work Immersion"], "Develop practical skills in vehicle systems and service."],
      ["BIT Climate Control Technology (HVAC)", ["STEM"], 1, ["Technology & Innovation","Math & Engineering"], ["General Physics","Work Immersion"], "Work with heating, ventilation, air-conditioning, and cooling systems."],
      ["BIT Computer Technology", ["ICT"], 1, ["Computer Systems & Servicing","Programming & Software"], ["Computer Systems Servicing","Java Programming"], "Install, maintain, and troubleshoot computer systems."],
      ["BIT Culinary and Food Processing Technology", ["Home Economics"], 1, ["Bread & Pastry Production","Culinary & Food Services"], ["Bread and Pastry Production","Work Immersion"], "Learn food preparation, processing, safety, and service."],
      ["BIT Electrical Technology", ["STEM"], 1, ["Technology & Innovation","Math & Engineering"], ["General Physics","Work Immersion"], "Build practical skills in electrical installation and systems."],
      ["BIT Electronics & Communication Technology", ["ICT","STEM"], 1, ["Technology & Innovation","Computer Systems & Servicing"], ["Computer Systems Servicing","General Physics"], "Work with electronics, communication, and digital systems."],
      ["BIT Electronic Technology", ["ICT","STEM"], 1, ["Technology & Innovation","Computer Systems & Servicing"], ["Computer Systems Servicing","General Physics"], "Build and troubleshoot electronic devices and systems."],
      ["BIT Mechanical Technology", ["STEM"], 1, ["Technology & Innovation","Math & Engineering"], ["General Physics","Work Immersion"], "Develop hands-on skills in mechanical tools and systems."],
      ["BIT Mechatronics Technology", ["ICT","STEM"], 1, ["Technology & Innovation","Computer Systems & Servicing"], ["Computer Systems Servicing","General Physics"], "Combine mechanical, electrical, and automated technologies."],
      ["BIT Advanced Fabrication and Welding Technology", ["STEM"], 1, ["Technology & Innovation","Math & Engineering"], ["General Physics","Work Immersion"], "Learn fabrication, welding, and production techniques."],
      ["BS Information Technology", ["STEM","ICT"], 1, ["Technology & Innovation","Programming & Software"], ["Java Programming","Computer Systems Servicing"], "Build software, websites, and digital systems."],
      ["BS Information Systems", ["STEM","ICT"], 2, ["Computer Systems & Servicing","Digital Media & Technology"], ["Computer Systems Servicing","Work Immersion"], "Connect technology, systems, and real-world organizations."],
      ["BS Cybersecurity", ["STEM","ICT"], 2, ["Programming & Software","Computer Systems & Servicing"], ["Java Programming","Computer Systems Servicing"], "Protect information, networks, and digital systems."],
      ["Bachelor of Early Childhood Education", ["HUMSS"], 1, ["Community & Social Development","Health & Medicine"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Support young children's learning, growth, and development."],
      ["Bachelor of Elementary Education", ["HUMSS"], 1, ["Community & Social Development","Writing & Creative Works"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Prepare to teach and guide elementary learners."],
      ["Bachelor of Secondary Education Major in English (Minor in Mandarin)", ["HUMSS"], 1, ["Community & Social Development","Writing & Creative Works"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Prepare to teach English and support secondary learners."],
      ["Bachelor of Secondary Education Major in Filipino", ["HUMSS"], 1, ["Community & Social Development","Writing & Creative Works"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Prepare to teach Filipino and support secondary learners."],
      ["Bachelor of Secondary Education Major in Mathematics", ["HUMSS","STEM"], 1, ["Community & Social Development","Math & Engineering"], ["Community Engagement, Solidarity & Citizenship","General Physics"], "Prepare to teach mathematics in secondary school."],
      ["Bachelor of Secondary Education Major in Sciences", ["HUMSS","STEM"], 1, ["Community & Social Development","Science & Research"], ["Community Engagement, Solidarity & Citizenship","General Chemistry"], "Prepare to teach science in secondary school."],
      ["Bachelor of Secondary Education Major in Social Studies", ["HUMSS"], 1, ["Community & Social Development","Social Sciences & Culture"], ["Community Engagement, Solidarity & Citizenship","Philippine Politics & Governance"], "Prepare to teach social studies in secondary school."],
      ["Bachelor of Secondary Education Major in Values Education", ["HUMSS"], 1, ["Community & Social Development","Social Sciences & Culture"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Prepare to teach values and character formation."],
      ["Bachelor of Physical Education", ["HUMSS","Home Economics"], 1, ["Community & Social Development","Health & Medicine"], ["Work Immersion","Community Engagement, Solidarity & Citizenship"], "Teach movement, fitness, sports, and healthy living."],
      ["Bachelor of Technical Vocational Teacher Education, Major in Food Service Management", ["Home Economics","HUMSS"], 1, ["Culinary & Food Services","Community & Social Development"], ["Bread and Pastry Production","Work Immersion"], "Teach technical and vocational food-service skills."],
      ["BS Biology", ["STEM"], 2, ["Science & Research","Health & Medicine"], ["General Chemistry","Capstone Research"], "Study living systems, organisms, and scientific research."],
      ["BS Environmental Science (Specialization in Climate Change and Disaster Management)", ["STEM"], 2, ["Science & Research","Community & Social Development"], ["General Chemistry","Capstone Research"], "Study climate change, disaster management, and sustainability."],
      ["BS Environmental Science (Specialization in Pollution Control Management)", ["STEM"], 2, ["Science & Research","Community & Social Development"], ["General Chemistry","Capstone Research"], "Study pollution control, environmental protection, and sustainability."],
      ["BS Food Technology", ["STEM","Home Economics"], 2, ["Science & Research","Culinary & Food Services"], ["General Chemistry","Work Immersion"], "Apply science and technology to food products and safety."],
      ["BS Medical Technology", ["STEM"], 2, ["Health & Medicine","Science & Research"], ["General Chemistry","Capstone Research"], "Support health care through laboratory science and testing."],
      ["BS Math with Specialization in Applied Statistics", ["STEM","ABM"], 2, ["Math & Engineering","Economics & Management"], ["General Physics","Capstone Research"], "Use mathematics and statistics to understand data and decisions."],
      ["BS Math with Specialization in Business Application", ["STEM","ABM"], 2, ["Math & Engineering","Economics & Management"], ["General Physics","Capstone Research"], "Apply mathematical thinking to business and organizations."],
      ["BS Math with Specialization in Computer Science", ["STEM","ICT"], 2, ["Math & Engineering","Programming & Software"], ["General Physics","Java Programming"], "Combine mathematical reasoning with computing and algorithms."],
      ["BS Psychology", ["HUMSS"], 2, ["Social Sciences & Culture","Community & Social Development"], ["Introduction to World Religions & Belief Systems","Community Engagement, Solidarity & Citizenship"], "Understand people, behavior, and communities."],
      ["BS Social Work", ["HUMSS"], 1, ["Community & Social Development","Social Sciences & Culture"], ["Community Engagement, Solidarity & Citizenship","Culminating Activity"], "Support individuals, families, and communities through service."],
      ["Bachelor in Public Administration", ["HUMSS","ABM"], 1, ["Politics & Public Service","Community & Social Development"], ["Philippine Politics & Governance","Community Engagement, Solidarity & Citizenship"], "Prepare for public service, governance, and administration."],
      ["BA in Development Studies", ["HUMSS"], 1, ["Community & Social Development","Politics & Public Service"], ["Community Engagement, Solidarity & Citizenship","Philippine Politics & Governance"], "Study social, economic, and community development."],
      ["Bachelor of Science in Exercise and Sports Sciences Major in Fitness and Sports Coaching", ["HUMSS","Home Economics"], 2, ["Health & Medicine","Community & Social Development"], ["Work Immersion","Community Engagement, Solidarity & Citizenship"], "Study fitness, sports coaching, and human performance."],
      ["Bachelor of Science in Exercise and Sports Sciences Major in Fitness and Sports Management", ["HUMSS","Home Economics"], 2, ["Health & Medicine","Economics & Management"], ["Work Immersion","Community Engagement, Solidarity & Citizenship"], "Study fitness, sports management, and human performance."]
    ];

    let page = 1;
    let profile = {};
    let topCourses = [];
    const $ = (id) => document.getElementById(id);

    function show(id) {
      document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
      $(id).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function setPage(number, label) {
      if (page && number > page) playNextSound();
      page = number;
      $("progress-wrap").style.display = number === 1 ? "none" : "block";
      $("progress-fill").style.width = Math.min(100, ((number - 1) / 7) * 100) + "%";
      $("progress-label").textContent = "Step " + number + " of 8" + (label ? " · " + label : "");
    }
    function selected(name) {
      return document.querySelector("input[name='" + name + "']:checked");
    }
    function renderOptions(containerId, name, values) {
      const box = $(containerId);
      box.innerHTML = values.map((value) =>
        "<label class='option'><input type='radio' name='" + name + "' value='" + value + "'><span>" + value + "</span></label>"
      ).join("");
      box.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", function() {
          box.querySelectorAll(".option").forEach((item) => item.classList.remove("selected"));
          input.closest(".option").classList.add("selected");
        });
      });
    }
    function updateTheme(strand) {
      const info = strandInfo[strand];
      document.body.className = "theme-" + info.theme;
      document.body.dataset.icon = info.icon;
      setBackground(info.bg, info.theme);
      renderOptions("passion-options", "passion", info.passions);
      renderOptions("skills-options", "skill", info.skills);
    }
    function incomeLevel(value) {
      return { below: 1, "10-20": 2, "20-40": 3, above: 4 }[value];
    }
    function financialScore(courseCost) {
      let score = Math.max(25, 100 - (courseCost - incomeLevel(profile.income)) * 22);
      if (profile.effect === "no-limit") score = 100;
      if (profile.effect === "affordable" && courseCost === 2) score -= 10;
      if (profile.effect === "budget" && courseCost > 1) score -= 20;
      if (profile.effect === "tuition" && courseCost > 1) score -= 30;
      return Math.max(20, Math.min(100, score));
    }
    function recommend() {
      return courses.filter((course) => course[1].includes(profile.strand)).map((course) => {
        const financial = financialScore(course[2]);
        const passion = course[3].includes(profile.passion) ? 100 : 35;
        const skill = course[4].includes(profile.skill) ? 100 : 35;
        const total = Math.round(financial * .30 + passion * .35 + skill * .35);
        return {
          name: course[0], total, description: course[5],
          reasons: [
            course[3].includes(profile.passion) ? "matches your passion" : "offers a related interest area",
            course[4].includes(profile.skill) ? "matches your strongest skill" : "can develop your selected skill",
            financial >= 70 ? "fits your budget preference" : "needs careful tuition planning"
          ]
        };
      }).sort((a, b) => b.total - a.total).slice(0, 3);
    }
    function showResults() {
      topCourses = recommend();
      $("results-list").innerHTML = topCourses.map((course, index) =>
        "<article class='result'><div class='result-top'><h3>" + (index + 1) + ". " + course.name +
        "</h3><span class='score'>" + course.total + "% match</span></div><p>" +
        course.description + "</p><ul><li>" + course.reasons.join("</li><li>") + "</li></ul></article>"
      ).join("");
      playResultsSound();
    }
    function csv(value) {
      const text = String(value ?? "");
      return /[",\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
    }
    async function saveResponse(evaluation) {
      const headers = ["timestamp","name","age","sex","strand","income","budget_effect","passion","skill","course_1","course_1_score","course_2","course_2_score","course_3","course_3_score","accuracy","satisfaction","clarity"];
      const row = [
        new Date().toISOString(), profile.name, profile.age, profile.sex, profile.strand,
        profile.income, profile.effect, profile.passion, profile.skill,
        topCourses[0].name, topCourses[0].total, topCourses[1].name, topCourses[1].total,
        topCourses[2].name, topCourses[2].total, evaluation.accuracy,
        evaluation.satisfaction, evaluation.clarity
      ];
      const csvText = headers.join(",") + "\n" + row.map(csv).join(",");
      const downloads = (window.claude && typeof window.claude.use === "function")
        ? await window.claude.use("downloads")
        : null;
      if (!downloads) return; // saving isn't available in this view
      try {
        await downloads.save({ filename: "careerfit-response-" + Date.now() + ".csv", data: csvText });
      } catch (err) {
        // viewer declined the save, or it's unavailable here — nothing more to do
      }
    }

    // ---------- click sound for answer options ----------
    const clickSound = new Audio("assets/sounds/click.mp3");
    clickSound.volume = 0.25;
    const nextSound = new Audio(clickSound.src);
    nextSound.volume = 0.25;
    const resultsSound = new Audio(clickSound.src);
    resultsSound.volume = 0.25;
    let soundOn = false;
    document.getElementById("sound-toggle").addEventListener("click", () => {
      soundOn = !soundOn;
      document.getElementById("sound-toggle").textContent = soundOn ? "🔊" : "🔇";
    });
    function playClickSound() {
      if (!soundOn) return;
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {}); // ignore autoplay-block errors
    }
    function playNextSound() {
      if (!soundOn) return;
      nextSound.currentTime = 0;
      nextSound.play().catch(() => {});
    }
    function playResultsSound() {
      if (!soundOn) return;
      resultsSound.currentTime = 0;
      resultsSound.play().catch(() => {});
    }
    document.addEventListener("change", (event) => {
      if (event.target.matches('.option input[type="radio"]')) {
        playClickSound();
      }
    });

    renderOptions("strand-options", "strand", Object.keys(strandInfo).map((strand) => strand));
    document.querySelectorAll("input[type='radio']").forEach((input) => {
      input.addEventListener("change", () => input.closest(".option").classList.add("selected"));
    });
    $("start").onclick = function() { setPage(2, "Basic Information"); show("basic"); };
    document.addEventListener("change", function(event) {
      if (event.target.name === "strand") updateTheme(event.target.value);
    });
    $("basic-form").onsubmit = function(event) {
      event.preventDefault();
      const sex = selected("sex"), strand = selected("strand");
      if (!$("age").value || !sex || !strand) {
        $("basic-message").textContent = "Please complete your age, sex, and strand.";
        return;
      }
      profile.name = $("name").value.trim();
      profile.age = $("age").value;
      profile.sex = sex.value;
      profile.strand = strand.value;
      setPage(3, "Financial Capacity"); show("financial");
    };
    $("financial-form").onsubmit = function(event) {
      event.preventDefault();
      const income = selected("income"), effect = selected("effect");
      if (!income || !effect) {
        $("financial-message").textContent = "Please answer both financial questions.";
        return;
      }
      profile.income = income.value;
      profile.effect = effect.value;
      setPage(4, "Personal Passion & Interest"); show("passion");
    };
    $("passion-form").onsubmit = function(event) {
      event.preventDefault();
      const answer = selected("passion");
      if (!answer) {
        $("passion-message").textContent = "Please choose one passion or interest.";
        return;
      }
      profile.passion = answer.value;
      setPage(5, "Skills & Abilities"); show("skills");
    };
    $("skills-form").onsubmit = function(event) {
      event.preventDefault();
      const answer = selected("skill");
      if (!answer) {
        $("skills-message").textContent = "Please choose one subject or skill.";
        return;
      }
      profile.skill = answer.value;
      setPage(6, "Your Recommendations"); show("loading");
      setTimeout(function() { showResults(); show("results"); }, 900);
    };
    $("to-evaluation").onclick = function() { setPage(7, "System Evaluation"); show("evaluation"); };
    $("evaluation-form").onsubmit = function(event) {
      event.preventDefault();
      const accuracy = selected("accuracy"), satisfaction = selected("satisfaction"), clarity = selected("clarity");
      if (!accuracy || !satisfaction || !clarity) {
        $("evaluation-message").textContent = "Please answer all three evaluation questions.";
        return;
      }
      saveResponse({ accuracy: accuracy.value, satisfaction: satisfaction.value, clarity: clarity.value });
      setPage(8, "Thank You"); show("thank-you");
    };
    $("restart").onclick = function() {
      profile = {}; topCourses = [];
      document.querySelectorAll("form").forEach((form) => form.reset());
      document.querySelectorAll(".option").forEach((option) => option.classList.remove("selected"));
      document.body.className = "theme-default";
      document.body.dataset.icon = "✨";
      setBackground("welcome", "default");
      setPage(1); show("welcome");
    };
    setBackground("welcome", "default");
    setPage(1);
