import { ImageExport } from "../images";
export const menuData = [
  {
    id: 1,
    path: {
      en: "/en/progress",
      fr: "/fr/progress",
    },
    menu: {
      en: "Progress",
      fr: "Progrès",
    },
  },
  {
    id: 2,
    path: {
      en: "/en/list-of-price",
      fr: "/fr/list-of-price",
    },
    menu: {
      en: "List of Price",
      fr: "Liste des Prix",
    },
  },
  {
    id: 3,
    path: {
      en: "/en/medical-notice",
      fr: "/fr/medical-notice",
    },
    menu: {
      en: "Medical Notice",
      fr: "Avis Médical",
    },
  },
];
export const footerLinksData = [
  {
    id: 1,
    title: {
      en: "Useful Links",
      fr: "Liens Utiles",
    },
    subTitle: [
      {
        id: 1,
        text: {
          en: "Home",
          fr: "Accueil",
        },
        link: {
          en: "/en/home",
          fr: "/fr/home",
        },
      },
      {
        id: 2,
        text: {
          en: "Progress",
          fr: "Progrès",
        },
        link: {
          en: "/en/progress",
          fr: "/fr/progress",
        },
      },
      {
        id: 3,
        text: {
          en: "List of price",
          fr: "Liste des prix",
        },
        link: {
          en: "/en/list-of-price",
          fr: "/fr/list-of-price",
        },
      },
      {
        id: 4,
        text: {
          en: "Medical notice",
          fr: "Avis médical",
        },
        link: {
          en: "/en/medical-notice",
          fr: "/fr/medical-notice",
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Information",
      fr: "Informations",
    },
    subTitle: [
      {
        id: 1,
        text: {
          en: "About Us",
          fr: "À propos de nous",
        },
        link: {
          en: "/en/about-us",
          fr: "/fr/about-us",
        },
      },
      {
        id: 2,
        text: {
          en: "Contact Us",
          fr: "Contactez-nous",
        },
        link: {
          en: "/en/contact-us",
          fr: "/fr/contact-us",
        },
      },
      {
        id: 3,
        text: {
          en: "Privacy Policy",
          fr: "Politique de confidentialité",
        },
        link: {
          en: "/en/privacy-policy",
          fr: "/fr/privacy-policy",
        },
      },
      {
        id: 4,
        text: {
          en: "Terms & Conditions",
          fr: "Termes et Conditions",
        },
        link: {
          en: "/en/terms-condition",
          fr: "/fr/terms-condition",
        },
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "Support",
      fr: "Soutien",
    },
    subTitle: [
      {
        id: 1,
        text: {
          en: "Support Centre",
          fr: "Centre d'assistance",
        },
        link: {
          en: "/en/contact-us",
          fr: "/fr/contact-us",
        },
      },
      {
        id: 2,
        text: {
          en: "Help Centre",
          fr: "Centre d'aide",
        },
        link: {
          en: "/en/contact-us",
          fr: "/fr/contact-us",
        },
      },
    ],
  },
];
export const socialIcons = [
  {
    id: 1,
    icon: ImageExport.FACEBOOK,
    alt: "Facebook",
    link: "https://www.facebook.com/share/pAJm3FpEGxET67C8/?mibextid=LQQJ4d",
  },
  {
    id: 2,
    icon: ImageExport.INSTAGRAME,
    alt: "Intagrame",
    link: "https://instagram.com/abdomax.ch/?igsh=NnYxZnQ2ZG9wNDE%3D",
  },
  // {
  //   id: 3,
  //   icon: ImageExport.LINKEDIN,
  //   alt: "LinkedIn",
  //   link: "",
  // },
];

export const exerciseCardData = [
  {
    id: 1,
    icon: ImageExport.NONSURGICAL,
    text: {
      en: "AbdoMax is renowned for being the only non-surgical body lift.",
      fr: "AbdoMax est réputé pour être le seul lifting corporel non chirurgical.",
    },
  },
  {
    id: 2,
    icon: ImageExport.ABS,
    text: {
      en: "Want a toned and tighter you? Get firmer abs, buttocks, arms, and thighs!",
      fr: "Vous voulez un corps tonique et raffermi ? Obtenez des abdominaux, des fessiers, des bras et des cuisses plus fermes !",
    },
  },
  {
    id: 3,
    icon: ImageExport.TREATING2,
    text: {
      en: "Possibility of treating 2 areas at once!",
      fr: "Possibilité de traiter 2 zones à la fois !",
    },
  },
  {
    id: 4,
    icon: ImageExport.PROMISES,
    text: {
      en: "AbdoMax promises a 28% muscle gain and 30% fat loss in just 6 sessions.",
      fr: "AbdoMax promet un gain musculaire de 28 % et une perte de graisse de 30 % en seulement 6 séances.",
    },
  },
];

export const treatedAreasMenus = [
  {
    id: 1,
    menu: {
      en: "Abs",
      fr: "Abdominaux",
    },
  },
  {
    id: 2,
    menu: {
      en: "Flanks",
      fr: "Flancs",
    },
  },
  {
    id: 3,
    menu: {
      en: "Upper Arms",
      fr: "Bras Supérieurs",
    },
  },
  {
    id: 4,
    menu: {
      en: "Buttocks",
      fr: "Fessiers",
    },
  },
  {
    id: 5,
    menu: {
      en: "Thighs",
      fr: "Cuisses",
    },
  },
  {
    id: 6,
    menu: {
      en: "Calves",
      fr: "Mollets",
    },
  },
];

export const treatmentImage = [
  {
    id: 1,
    title: {
      en: "Abdominal Treatment",
      fr: "Traitement Abdominal",
    },
    beforeImage: ImageExport.ABDOMINALBEFORE,
    afterImage: ImageExport.ABDOMINALAFTER,
  },
  {
    id: 2,
    title: {
      en: "Flanks Treatment",
      fr: "Traitement des Flancs",
    },
    beforeImage: ImageExport.FLANKSBEFORE,
    afterImage: ImageExport.FLANKSAFTER,
  },
  {
    id: 3,
    title: {
      en: "Arms Treatment",
      fr: "Traitement des Bras",
    },
    beforeImage: ImageExport.ARMSBEFORE,
    afterImage: ImageExport.ARMSAFTER,
  },
  {
    id: 4,
    title: {
      en: "Buttocks Treatment",
      fr: "Traitement des Fesses",
    },
    beforeImage: ImageExport.BUTTOCKSBEFORE,
    afterImage: ImageExport.BUTTOCKSAFTER,
  },
  {
    id: 5,
    title: {
      en: "Thighs Treatment",
      fr: "Traitement des Cuisses",
    },
    beforeImage: ImageExport.THIGHSBEFORE,
    afterImage: ImageExport.THIGHSAFTER,
  },
  {
    id: 6,
    title: {
      en: "Calves Treatment", // Adjusted to a more appropriate name
      fr: "Traitement des Mollets",
    },
    beforeImage: ImageExport.THIGHSBBEFORE,
    afterImage: ImageExport.THIGHSBAFTER,
  },
];

export const aboutData = [
  {
    id: 1,
    img: ImageExport.ABOUTTWO,
  },
  {
    id: 2,
    img: ImageExport.ABOUTONE,
  },
  {
    id: 3,
    img: ImageExport.ABOUTTWO,
  },
];

export const aboutDataMobile = [
  {
    id: 1,
    img: ImageExport.ABOUTMOBILE,
  },
  {
    id: 2,
    img: ImageExport.ABOUTONE,
  },
  {
    id: 3,
    img: ImageExport.ABOUTMOBILE,
  },
];

export const faqData = [
  {
    id: 1,
    question: {
      en: "How long do results last with AbdoMax?",
      fr: "Combien de temps les résultats durent-ils avec AbdoMax ?",
    },
    answer: {
      en: "Studies show that after the first set of 6 sessions, the results on muscle can last a year or more, and the results with fat loss are permanent.",
      fr: "Des études montrent qu'après le premier ensemble de 6 séances, les résultats sur les muscles peuvent durer un an ou plus, et les résultats de la perte de graisse sont permanents.",
    },
  },
  {
    id: 2,
    question: {
      en: "What does the AbdoMax procedure look like?",
      fr: "À quoi ressemble la procédure AbdoMax ?",
    },
    answer: {
      en: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      fr: "Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a des racines dans une œuvre classique de la littérature latine datant de 45 av. J.-C., ce qui lui confère plus de 2000 ans.",
    },
  },
  {
    id: 3,
    question: {
      en: "How long does the AbdoMax treatment last?",
      fr: "Combien de temps dure le traitement AbdoMax ?",
    },
    answer: {
      en: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      fr: "Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a des racines dans une œuvre classique de la littérature latine datant de 45 av. J.-C., ce qui lui confère plus de 2000 ans.",
    },
  },
  {
    id: 4,
    question: {
      en: "Are maintenance treatments necessary with AbdoMax?",
      fr: "Des traitements d'entretien sont-ils nécessaires avec AbdoMax ?",
    },
    answer: {
      en: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      fr: "Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a des racines dans une œuvre classique de la littérature latine datant de 45 av. J.-C., ce qui lui confère plus de 2000 ans.",
    },
  },
  {
    id: 5,
    question: {
      en: "How long do results last with AbdoMax?",
      fr: "Combien de temps les résultats durent-ils avec AbdoMax ?",
    },
    answer: {
      en: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      fr: "Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a des racines dans une œuvre classique de la littérature latine datant de 45 av. J.-C., ce qui lui confère plus de 2000 ans.",
    },
  },
];

export const bannerData = [
  {
    id: 1,
    img: ImageExport.BANNER,
  },
  {
    id: 2,
    img: ImageExport.BANNER,
  },
  {
    id: 3,
    img: ImageExport.BANNER,
  },
];

export const mobileBannerData = [
  {
    id: 1,
    img: ImageExport.MOBILEBANNER,
  },
  {
    id: 2,
    img: ImageExport.MOBILEBANNER,
  },
  {
    id: 3,
    img: ImageExport.MOBILEBANNER,
  },
];

export const reviewData = [
  {
    id: 1,
    reviewText: {
      en: "A great team. They are conscientious and attentive to their client and their needs. I highly recommend the abdomax sessions at this institute.",
      fr: "Une excellente équipe. Ils sont consciencieux et attentifs à leurs clients et à leurs besoins. Je recommande vivement les séances d'abdomax dans cet institut.",
    },
    userImg: ImageExport.USER1,
    userName: "Rohit Sharma",
  },
  {
    id: 2,
    reviewText: {
      en: "A great team. They are conscientious and attentive to their client and their needs. I highly recommend the abdomax sessions at this institute.",
      fr: "Une excellente équipe. Ils sont consciencieux et attentifs à leurs clients et à leurs besoins. Je recommande vivement les séances d'abdomax dans cet institut.",
    },
    userImg: ImageExport.USER2,
    userName: "Rohit Sharma",
  },
  {
    id: 3,
    reviewText: {
      en: "A great team. They are conscientious and attentive to their client and their needs. I highly recommend the abdomax sessions at this institute.",
      fr: "Une excellente équipe. Ils sont consciencieux et attentifs à leurs clients et à leurs besoins. Je recommande vivement les séances d'abdomax dans cet institut.",
    },
    userImg: ImageExport.USER1,
    userName: "Ishan Kishan",
  },
];

export const medicalContraindicationsData = [
  {
    id: 1,
    text: {
      en: "People with heart disease, high blood pressure, or a pacemaker configured.",
      fr: "Personnes souffrant de maladies cardiaques, d'hypertension artérielle ou ayant un pacemaker configuré.",
    },
  },
  {
    id: 2,
    text: {
      en: "People suffering from acute inflammation, asthma, thrombosis or cancer.",
      fr: "Personnes souffrant d'inflammation aiguë, d'asthme, de thrombose ou de cancer.",
    },
  },
  {
    id: 3,
    text: {
      en: "People suffering from a hemorrhagic disease, trauma or who are bleeding.",
      fr: "Personnes souffrant d'une maladie hémorragique, de traumatisme ou qui saignent.",
    },
  },
  {
    id: 4,
    text: {
      en: "People wearing plastic medical parts or parts with artificial filling inside the body.",
      fr: "Personnes portant des pièces médicales en plastique ou des pièces avec un remplissage artificiel à l'intérieur du corps.",
    },
  },
  {
    id: 5,
    text: {
      en: "People with metal in their body (including dentures)",
      fr: "Personnes ayant du métal dans leur corps (y compris les prothèses dentaires)",
    },
  },
  {
    id: 6,
    text: {
      en: "People with skin inflammation or edema.",
      fr: "Personnes ayant une inflammation cutanée ou un œdème.",
    },
  },
  {
    id: 7,
    text: {
      en: "People with abnormal immune systems.",
      fr: "Personnes ayant des systèmes immunitaires anormaux.",
    },
  },
  {
    id: 8,
    text: {
      en: "People who are numb or unresponsive to heat.",
      fr: "Personnes engourdies ou non réactives à la chaleur.",
    },
  },
  {
    id: 9,
    text: {
      en: "People suffering from epilepsy.",
      fr: "Personnes souffrant d'épilepsie.",
    },
  },
  {
    id: 10,
    text: {
      en: "People with breast implants.",
      fr: "Personnes ayant des implants mammaires.",
    },
  },
  {
    id: 11,
    text: {
      en: "Pregnant women and children.",
      fr: "Femmes enceintes et enfants.",
    },
  },
  {
    id: 12,
    text: {
      en: "Women with a copper IUD.",
      fr: "Femmes avec un stérilet en cuivre.",
    },
  },
];

export const subscriptionCardData = [
  {
    id: 1,
    bgImage: "/images/subs-1.png",
    amount: {
      en: "80 CHF",
      fr: "80 CHF",
    },
    noOfSessions: {
      en: "Body analysis",
      fr: "Analyse corporelle",
    },
    listData: [
      {
        id: 1,
        listText: {
          en: "Get FREE 1 More Session",
          fr: "Obtenez 1 session supplémentaire GRATUITE",
        },
      },
      {
        id: 2,
        listText: {
          en: "Get an Extra 10% off Your Total Amount",
          fr: "Obtenez 10 % de réduction sur le montant total",
        },
      },
      {
        id: 3,
        listText: {
          en: "Access to the Abdomax Community",
          fr: "Accès à la communauté Abdomax",
        },
      },
      {
        id: 4,
        listText: {
          en: "Health and Fitness Tips",
          fr: "Conseils santé et bien-être",
        },
      },
    ],
  },
  {
    id: 2,
    bgImage: "/images/subs-2.png",
    amount: {
      en: "600 CHF",
      fr: "600 CHF",
    },
    noOfSessions: {
      en: "6 Sessions",
      fr: "6 sessions",
    },
    listData: [
      {
        id: 1,
        listText: {
          en: "Get FREE 1 More Session",
          fr: "Obtenez 1 session supplémentaire GRATUITE",
        },
      },
      {
        id: 2,
        listText: {
          en: "Get an Extra 10% off Your Total Amount",
          fr: "Obtenez 10 % de réduction sur le montant total",
        },
      },
      {
        id: 3,
        listText: {
          en: "Access to the Abdomax Community",
          fr: "Accès à la communauté Abdomax",
        },
      },
      {
        id: 4,
        listText: {
          en: "Health and Fitness Tips",
          fr: "Conseils santé et bien-être",
        },
      },
    ],
  },
  {
    id: 3,
    bgImage: "/images/subs-3.png",
    amount: {
      en: "990 CHF",
      fr: "990 CHF",
    },
    noOfSessions: {
      en: "12 Sessions",
      fr: "12 sessions",
    },
    mainPrice: {
      en: "1,200 CHF",
      fr: "1 200 CHF",
    },
    listData: [
      {
        id: 1,
        listText: {
          en: "Get FREE 1 More Session",
          fr: "Obtenez 1 session supplémentaire GRATUITE",
        },
      },
      {
        id: 2,
        listText: {
          en: "Get an Extra 10% off Your Total Amount",
          fr: "Obtenez 10 % de réduction sur le montant total",
        },
      },
      {
        id: 3,
        listText: {
          en: "Access to the Abdomax Community",
          fr: "Accès à la communauté Abdomax",
        },
      },
      {
        id: 4,
        listText: {
          en: "Health and Fitness Tips",
          fr: "Conseils santé et bien-être",
        },
      },
    ],
  },
  {
    id: 4,
    bgImage: "/images/subs-4.png",
    amount: {
      en: "1,890 CHF",
      fr: "1 890 CHF",
    },
    noOfSessions: {
      en: "24 Sessions",
      fr: "24 sessions",
    },
    mainPrice: {
      en: "2,400 CHF",
      fr: "2 400 CHF",
    },
    listData: [
      {
        id: 1,
        listText: {
          en: "Get FREE 1 More Session",
          fr: "Obtenez 1 session supplémentaire GRATUITE",
        },
      },
      {
        id: 2,
        listText: {
          en: "Get an Extra 10% off Your Total Amount",
          fr: "Obtenez 10 % de réduction sur le montant total",
        },
      },
      {
        id: 3,
        listText: {
          en: "Access to the Abdomax Community",
          fr: "Accès à la communauté Abdomax",
        },
      },
      {
        id: 4,
        listText: {
          en: "Health and Fitness Tips",
          fr: "Conseils santé et bien-être",
        },
      },
    ],
  },
  {
    id: 5,
    bgImage: "/images/subs-5.png",
    amount: {
      en: "3,600 CHF",
      fr: "3 600 CHF",
    },
    noOfSessions: {
      en: "24 “DUO” Sessions",
      fr: '24 SESSIONS "DUO"',
    },
    listData: [
      {
        id: 1,
        listText: {
          en: "Get FREE 1 More Session",
          fr: "Obtenez 1 session supplémentaire GRATUITE",
        },
      },
      {
        id: 2,
        listText: {
          en: "Get an Extra 10% off Your Total Amount",
          fr: "Obtenez 10 % de réduction sur le montant total",
        },
      },
      {
        id: 3,
        listText: {
          en: "Access to the Abdomax Community",
          fr: "Accès à la communauté Abdomax",
        },
      },
      {
        id: 4,
        listText: {
          en: "Health and Fitness Tips",
          fr: "Conseils santé et bien-être",
        },
      },
    ],
  },
];

export const contactData = [
  {
    id: 1,
    icon: ImageExport.CALLICON,
    text: {
      en: "021 213 08 20",
      fr: "021 213 08 20",
    },
  },
  {
    id: 2,
    icon: ImageExport.MAILICON,
    text: {
      en: "info@abdomax.ch",
      fr: "info@abdomax.ch",
    },
  },
  {
    id: 3,
    icon: ImageExport.LOCATIONICON,
    text: {
      en: "Place Chauderon 18, 2nd floor, 1003 Lausanne",
      fr: "Place Chauderon 18, 2ème étage, 1003 Lausanne",
    },
  },
];

export const appointmentData = [
  {
    id: 1,
    title: {
      en: "Morning",
      fr: "Matin",
    },
    timeData: [
      {
        id: 1,
        time: {
          en: "07:45 AM",
          fr: "07:45 SUIS"
        },
        available: true,
      },
      {
        id: 2,
        time: {
          en: "08:45 AM",
          fr: "08:45 SUIS"
        },
        available: true,
      },
      {
        id: 3,
        time: {
          en: "09:45 AM",
          fr: "09:45 SUIS"
        },
        available: true,
      },
      {
        id: 4,
        time: {
          en: "10:45 AM",
          fr: "10:45 SUIS"
        },
        available: true,
      },
      {
        id: 5,
        time: {
          en: "11:45 AM",
          fr: "11:45 SUIS"
        },
        available: true,
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Afternoon",
      fr: "Après-midi",
    },
    timeData: [
      {
        id: 1,
        time: {
          en: "12:45 PM",
          fr: "12:45 MP"
        },
        available: true,
      },
      {
        id: 2,
        time: {
          en: "01:45 PM",
          fr: "01:45 MP"
        },
        available: true,
      },
      {
        id: 3,
        time: {
          en: "02:45 PM",
          fr: "02:45 MP"
        },
        available: true,
      },
    ],
  },
];

export const termsConditionData = [
  {
    id: 1,
    bgImage: "/images/terms-1.png",
    title: {
      en: "Purpose",
      fr: "Objectif",
    },
    desc: {
      en: "These general terms and conditions govern the use of the AbdoMax website and the services provided by AbdoMax, including muscle toning and fat reduction treatments. By accessing the site and using our services, you agree to these terms in their entirety.",
      fr: "Ces conditions générales régissent l'utilisation du site web AbdoMax et des services fournis par AbdoMax, y compris les traitements de tonification musculaire et de réduction des graisses. En accédant au site et en utilisant nos services, vous acceptez ces termes dans leur intégralité.",
    },
  },
  {
    id: 2,
    bgImage: "/images/terms-2.png",
    title: {
      en: "Offered Services",
      fr: "Services Offerts",
    },
    desc: {
      en: "AbdoMax offers non-invasive aesthetic treatments based on electromagnetic technology. These services are provided at our institute in Lausanne. Results may vary from person to person, and no specific guarantee of results is given.",
      fr: "AbdoMax propose des traitements esthétiques non invasifs basés sur la technologie électromagnétique. Ces services sont fournis dans notre institut à Lausanne. Les résultats peuvent varier d'une personne à l'autre et aucune garantie spécifique de résultats n'est donnée.",
    },
  },
  {
    id: 3,
    bgImage: "/images/terms-3.png",
    title: {
      en: "Site Access",
      fr: "Accès au Site",
    },
    desc: {
      en: "Access to the site is restricted to individuals aged 18 and over. AbdoMax reserves the right to modify or suspend access to the site or certain services at any time, without prior notice.",
      fr: "L'accès au site est réservé aux personnes de 18 ans et plus. AbdoMax se réserve le droit de modifier ou de suspendre l'accès au site ou à certains services à tout moment, sans préavis.",
    },
  },
  {
    id: 4,
    bgImage: "/images/terms-4.png",
    title: {
      en: "Use of the Site",
      fr: "Utilisation du Site",
    },
    desc: {
      en: "Users agree not to use the site for fraudulent or illegal purposes. Any use that does not comply with these terms may result in the suspension or termination of access to the services.",
      fr: "Les utilisateurs s'engagent à ne pas utiliser le site à des fins frauduleuses ou illégales. Toute utilisation qui ne respecte pas ces conditions peut entraîner la suspension ou la résiliation de l'accès aux services.",
    },
  },
  {
    id: 5,
    bgImage: "/images/terms-5.png",
    title: {
      en: "Appointment Booking and Cancellation",
      fr: "Prise de Rendez-vous et Annulation",
    },
    desc: {
      en: "Users can book appointments through the website. In case of cancellation, AbdoMax requires at least 24 hours' notice. Any cancellation outside this timeframe may incur fees.",
      fr: "Les utilisateurs peuvent réserver des rendez-vous via le site web. En cas d'annulation, AbdoMax exige un préavis d'au moins 24 heures. Toute annulation en dehors de ce délai peut entraîner des frais.",
    },
  },
  {
    id: 6,
    bgImage: "/images/terms-6.png",
    title: {
      en: "Prices and Payments",
      fr: "Prix et Paiements",
    },
    desc: {
      en: "Service prices are indicated in Swiss Francs (CHF) and are subject to change without prior notice. Payment is due at the time of the treatment unless otherwise stated. Accepted payment methods are detailed at the time of booking.",
      fr: "Les prix des services sont indiqués en francs suisses (CHF) et peuvent changer sans préavis. Le paiement est dû au moment du traitement, sauf indication contraire. Les méthodes de paiement acceptées sont détaillées au moment de la réservation.",
    },
  },
  {
    id: 7,
    bgImage: "/images/terms-7.png",
    title: {
      en: "Personal Data",
      fr: "Données Personnelles",
    },
    desc: {
      en: "Information collected through the site is used solely for processing appointments and managing customer relations. AbdoMax is committed to maintaining the confidentiality of data in accordance with applicable Swiss data protection laws.",
      fr: "Les informations collectées via le site sont utilisées uniquement pour le traitement des rendez-vous et la gestion des relations clients. AbdoMax s'engage à maintenir la confidentialité des données conformément aux lois suisses sur la protection des données.",
    },
  },
  {
    id: 8,
    bgImage: "/images/terms-8.png",
    title: {
      en: "Refund Policy",
      fr: "Politique de Remboursement",
    },
    desc: {
      en: "Due to the nature of the services provided, no refunds will be granted after the service has been delivered, except in cases of major issues related to the treatment itself. Requests must be made within 7 days of the treatment.",
      fr: "En raison de la nature des services fournis, aucun remboursement ne sera accordé après la prestation du service, sauf en cas de problèmes majeurs liés au traitement lui-même. Les demandes doivent être faites dans les 7 jours suivant le traitement.",
    },
  },
  {
    id: 9,
    bgImage: "/images/terms-9.png",
    title: {
      en: "Intellectual Property",
      fr: "Propriété Intellectuelle",
    },
    desc: {
      en: "All content on the site (text, images, logos, etc.) is the property of AbdoMax. Any reproduction, modification, or distribution without authorization is strictly prohibited.",
      fr: "Tout le contenu du site (texte, images, logos, etc.) est la propriété d'AbdoMax. Toute reproduction, modification ou distribution sans autorisation est strictement interdite.",
    },
  },
  {
    id: 10,
    bgImage: "/images/terms-10.png",
    title: {
      en: "Limitation of Liability",
      fr: "Limitation de Responsabilité",
    },
    desc: {
      en: "AbdoMax strives to provide quality service but cannot be held liable for direct or indirect damages resulting from the use of the site or the treatments provided, except in cases of gross or intentional misconduct.",
      fr: "AbdoMax s'efforce de fournir un service de qualité mais ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou des traitements fournis, sauf en cas de faute lourde ou intentionnelle.",
    },
  },
  {
    id: 11,
    bgImage: "/images/terms-11.png",
    title: {
      en: "Warranties",
      fr: "Garanties",
    },
    desc: {
      en: "AbdoMax provides no express or implied warranties regarding treatment results. Each client acknowledges that results may vary based on individual factors, including health condition and lifestyle.",
      fr: "AbdoMax ne fournit aucune garantie expresse ou implicite concernant les résultats des traitements. Chaque client reconnaît que les résultats peuvent varier en fonction de facteurs individuels, y compris l'état de santé et le mode de vie.",
    },
  },
  {
    id: 12,
    bgImage: "/images/terms-12.png",
    title: {
      en: "Changes to Terms",
      fr: "Modifications des Conditions",
    },
    desc: {
      en: "AbdoMax reserves the right to modify these general terms and conditions at any time. Changes will take effect as soon as they are published on the site. It is the user’s responsibility to check for updates regularly.",
      fr: "AbdoMax se réserve le droit de modifier ces conditions générales à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Il est de la responsabilité de l'utilisateur de vérifier régulièrement les mises à jour.",
    },
  },
  {
    id: 13,
    bgImage: "/images/terms-13.png",
    title: {
      en: "Applicable Law and Jurisdiction",
      fr: "Droit Applicable et Juridiction",
    },
    desc: {
      en: "These general terms and conditions are governed by Swiss law. Any disputes related to the use of the site or the services provided will be subject to the exclusive jurisdiction of the competent courts in Lausanne, Switzerland.",
      fr: "Ces conditions générales sont régies par le droit suisse. Tout litige relatif à l'utilisation du site ou aux services fournis sera soumis à la juridiction exclusive des tribunaux compétents de Lausanne, en Suisse.",
    },
  },
];

export const privacyPolicyData = [
  {
    id: 1,
    bgImage: "/images/privacy-1.png",
    title: {
      en: "Collection of Personal Data",
      fr: "Collecte de Données Personnelles",
    },
    desc: {
      en: "AbdoMax collects personal information through the contact form and appointment booking, including your name, email address, and phone number. This data is used solely to process your requests and improve our services.",
      fr: "AbdoMax collecte des informations personnelles via le formulaire de contact et la prise de rendez-vous, y compris votre nom, votre adresse e-mail et votre numéro de téléphone. Ces données sont utilisées uniquement pour traiter vos demandes et améliorer nos services.",
    },
  },
  {
    id: 2,
    bgImage: "/images/privacy-2.png",
    title: {
      en: "Use of Data",
      fr: "Utilisation des Données",
    },
    desc: {
      en: "The collected data is used for appointment management, sending promotional communications, and improving user experience. AbdoMax does not share this information with third parties without explicit consent.",
      fr: "Les données collectées sont utilisées pour la gestion des rendez-vous, l'envoi de communications promotionnelles et l'amélioration de l'expérience utilisateur. AbdoMax ne partage pas ces informations avec des tiers sans consentement explicite.",
    },
  },
  {
    id: 3,
    bgImage: "/images/privacy-3.png",
    title: {
      en: "Data Security",
      fr: "Sécurité des Données",
    },
    desc: {
      en: "AbdoMax implements technical and organizational measures to protect your data from unauthorized access, loss, or disclosure. However, no method of Internet transmission is entirely secure.",
      fr: "AbdoMax met en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Cependant, aucune méthode de transmission sur Internet n'est entièrement sécurisée.",
    },
  },
  {
    id: 4,
    bgImage: "/images/privacy-4.png",
    title: {
      en: "Cookies",
      fr: "Cookies",
    },
    desc: {
      en: "The site uses cookies to enhance navigation and analyze traffic. You can disable cookies by adjusting your browser settings.",
      fr: "Le site utilise des cookies pour améliorer la navigation et analyser le trafic. Vous pouvez désactiver les cookies en ajustant les paramètres de votre navigateur.",
    },
  },
  {
    id: 5,
    bgImage: "/images/privacy-5.png",
    title: {
      en: "User Rights",
      fr: "Droits des Utilisateurs",
    },
    desc: {
      en: "In accordance with Swiss data protection law, you have the right to access, correct, or delete your personal information by contacting us at the address provided on the site.",
      fr: "Conformément à la loi suisse sur la protection des données, vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles en nous contactant à l'adresse fournie sur le site.",
    },
  },
  {
    id: 6,
    bgImage: "/images/privacy-6.png",
    title: {
      en: "Policy Changes",
      fr: "Modifications de la Politique",
    },
    desc: {
      en: "This policy may be modified at any time. Changes will take effect as soon as they are published on the site. It is recommended to review this page regularly to stay informed of any changes.",
      fr: "Cette politique peut être modifiée à tout moment. Les modifications entreront en vigueur dès leur publication sur le site. Il est recommandé de consulter cette page régulièrement pour rester informé des éventuelles modifications.",
    },
  },
  {
    id: 7,
    bgImage: "/images/privacy-7.png",
    title: {
      en: "Contact",
      fr: "Contact",
    },
    desc: {
      en: "For any questions regarding this privacy policy, please contact us via email or phone.",
      fr: "Pour toute question concernant cette politique de confidentialité, veuillez nous contacter par e-mail ou par téléphone.",
    },
  },
];

export const aboutUsData = [
  {
    id: 1,
    bgImage: "/images/about-1.png",
    title: {
      en: "Our Vision",
      fr: "Notre Vision",
    },
    desc: {
      en: "At AbdoMax, our mission is to help our clients achieve their physical well-being goals by offering non-invasive muscle toning and fat reduction treatments. We believe that everyone deserves to feel good about their body and benefit from a modern and effective approach to physical transformation.",
      fr: "Chez AbdoMax, notre mission est d'aider nos clients à atteindre leurs objectifs de bien-être physique en proposant des traitements non invasifs de tonification musculaire et de réduction des graisses. Nous croyons que chacun mérite de se sentir bien dans son corps et de bénéficier d'une approche moderne et efficace de la transformation physique.",
    },
  },
  {
    id: 2,
    bgImage: "/images/about-2.png",
    title: {
      en: "Our Story",
      fr: "Notre Histoire",
    },
    desc: {
      en: "Founded in Lausanne, AbdoMax emerged from a passion for health and innovation. We sought to combine the latest wellness technologies with non-invasive methods to offer our clients a safe and sustainable body transformation solution. Since our inception, we have helped many clients achieve their goals in muscle toning and fat reduction.",
      fr: "Fondé à Lausanne, AbdoMax est né d'une passion pour la santé et l'innovation. Nous avons cherché à combiner les dernières technologies de bien-être avec des méthodes non invasives pour offrir à nos clients une solution de transformation corporelle sûre et durable. Depuis notre création, nous avons aidé de nombreux clients à atteindre leurs objectifs de tonification musculaire et de réduction des graisses.",
    },
  },
];
