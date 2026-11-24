// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Selected work in robot learning, autonomous navigation, and intelligent transportation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae — updated August 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-tongji-university-with-a-b-eng-in-automation",
          title: 'Graduated from Tongji University with a B.Eng. in Automation.',
          description: "",
          section: "News",},{id: "news-joined-the-pairs-lab-at-hkust-guangzhou-as-a-research-assistant-advised-by-prof-fangqiang-ding",
          title: 'Joined the PAIRS Lab at HKUST (Guangzhou) as a Research Assistant, advised by...',
          description: "",
          section: "News",},{id: "projects-context-aware-drl-for-mapless-navigation",
          title: 'Context-Aware DRL for Mapless Navigation',
          description: "Graph-based temporal memory and intrinsic curiosity for navigation under partial observability and sparse rewards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/context-aware-mapless-navigation/";
            },},{id: "projects-electric-bus-fleet-dispatch-with-wireless-charging",
          title: 'Electric Bus Fleet Dispatch with Wireless Charging',
          description: "Transformer-enhanced reinforcement learning for joint vehicle routing and charging-schedule optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electric-bus-dispatch/";
            },},{id: "projects-autonomous-navigation-for-hexapod-robots",
          title: 'Autonomous Navigation for Hexapod Robots',
          description: "A real-world perception-to-action stack integrating visual SLAM, path planning, and legged locomotion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hexapod-navigation/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Yichen_Wang_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%32%32%35%32%36%39%37@%74%6F%6E%67%6A%69.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/BieChenovo", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
