const storageKey = "asadbek-2-0-habits-v2";
    const selectedKey = "asadbek-2-0-selected-habit";
    const legacyKey = "asadbek-2-0-namoz-habit";
    const challengeStorageKey = "asadbek-2-0-challenges-v1";
    const challengeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const colors = [
      { "id": "teal", "color": "#4d8a7d", "soft": "rgba(77, 138, 125, 0.18)" },
      { "id": "emerald", "color": "#4d8a5e", "soft": "rgba(77, 138, 94, 0.18)" },
      { "id": "cyan", "color": "#4d8393", "soft": "rgba(77, 131, 147, 0.18)" },
      { "id": "sky", "color": "#4d76a3", "soft": "rgba(77, 118, 163, 0.18)" },
      { "id": "blue", "color": "#5468b0", "soft": "rgba(84, 104, 176, 0.18)" },
      { "id": "indigo", "color": "#665fb0", "soft": "rgba(102, 95, 176, 0.18)" },
      { "id": "violet", "color": "#7a5fae", "soft": "rgba(122, 95, 174, 0.18)" },
      { "id": "purple", "color": "#8a5ca6", "soft": "rgba(138, 92, 166, 0.18)" },
      { "id": "fuchsia", "color": "#a1549a", "soft": "rgba(161, 84, 154, 0.18)" },
      { "id": "pink", "color": "#b3527e", "soft": "rgba(179, 82, 126, 0.18)" },
      { "id": "rose", "color": "#b95566", "soft": "rgba(185, 85, 102, 0.18)" },
      { "id": "red", "color": "#b3564a", "soft": "rgba(179, 86, 74, 0.18)" },
      { "id": "orange", "color": "#d6544a", "soft": "rgba(214, 84, 74, 0.18)" },
      { "id": "amber", "color": "#b3823a", "soft": "rgba(179, 130, 58, 0.18)" },
      { "id": "yellow", "color": "#c9a227", "soft": "rgba(201, 162, 39, 0.18)" },
      { "id": "lime", "color": "#8a9a3f", "soft": "rgba(138, 154, 63, 0.18)" },
      { "id": "green", "color": "#5c9a6b", "soft": "rgba(92, 154, 107, 0.18)" },
      { "id": "mint", "color": "#4a9a86", "soft": "rgba(74, 154, 134, 0.18)" },
      { "id": "stone", "color": "#8a8378", "soft": "rgba(138, 131, 120, 0.18)" },
      { "id": "slate", "color": "#6b7688", "soft": "rgba(107, 118, 136, 0.18)" },
      { "id": "zinc", "color": "#77808f", "soft": "rgba(119, 128, 143, 0.18)" },
      { "id": "brown", "color": "#9a7040", "soft": "rgba(154, 112, 64, 0.18)" },
      { "id": "navy", "color": "#4a5a94", "soft": "rgba(74, 90, 148, 0.18)" },
      { "id": "black", "color": "#c3c9d1", "soft": "rgba(195, 201, 209, 0.16)" },
      { "id": "coral", "color": "#c1614f", "soft": "rgba(193, 97, 79, 0.18)" },
      { "id": "aqua", "color": "#4d8ba0", "soft": "rgba(77, 139, 160, 0.18)" },
      { "id": "olive", "color": "#7f8a3d", "soft": "rgba(127, 138, 61, 0.18)" },
      { "id": "gold", "color": "#a98a2e", "soft": "rgba(169, 138, 46, 0.18)" }
];

    const iconTemplates = {
      "check": "<path d=\"M20 6 9 17l-5-5\"/>",
      "star": "<path d=\"m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z\"/>",
      "book": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z\"/>",
      "dumbbell": "<path d=\"M6.5 6.5v11\"/><path d=\"M17.5 6.5v11\"/><path d=\"M3.5 9v6\"/><path d=\"M20.5 9v6\"/><path d=\"M6.5 12h11\"/>",
      "heart": "<path d=\"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z\"/>",
      "moon": "<path d=\"M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z\"/>",
      "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>",
      "clock": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>",
      "calendar": "<path d=\"M7 2v4M17 2v4M3 9h18\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/>",
      "target": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/>",
      "flame": "<path d=\"M8 14a4 4 0 1 0 8 0c0-4-4-5-4-10-2 2-4 4-4 10Z\"/><path d=\"M12 18a2 2 0 0 0 2-2c0-1.5-1.2-2-2-3-.8 1-2 1.5-2 3a2 2 0 0 0 2 2Z\"/>",
      "droplet": "<path d=\"M12 2s7 7.2 7 12a7 7 0 0 1-14 0c0-4.8 7-12 7-12Z\"/>",
      "apple": "<path d=\"M12 7c2-2 5-1 6.5 1.2 1.7 2.5.5 8.9-2.4 11-1.7 1.2-2.8-.2-4.1-.2s-2.4 1.4-4.1.2c-2.9-2.1-4.1-8.5-2.4-11C7 6 10 5 12 7Z\"/><path d=\"M12 7c0-2 1-3.5 3-4\"/>",
      "phone": "<rect x=\"7\" y=\"2\" width=\"10\" height=\"20\" rx=\"2\"/><path d=\"M11 18h2\"/>",
      "laptop": "<rect x=\"5\" y=\"4\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M2 20h20l-3-6H5l-3 6Z\"/>",
      "brain": "<path d=\"M8 6a3 3 0 0 1 5-2 3 3 0 0 1 5 3 3 3 0 0 1 1 5 3.5 3.5 0 0 1-3 6 3 3 0 0 1-5 1 3 3 0 0 1-5-2 3.5 3.5 0 0 1-1-6 3 3 0 0 1 3-5Z\"/><path d=\"M12 4v16M8 11h4M12 9h4M12 15h4\"/>",
      "pen": "<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z\"/>",
      "home": "<path d=\"M3 11 12 3l9 8\"/><path d=\"M5 10v11h14V10\"/><path d=\"M9 21v-6h6v6\"/>",
      "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M18 12h3v5h-3a2.5 2.5 0 0 1 0-5Z\"/><path d=\"M3 8l13-4 2 2\"/>",
      "language": "<path d=\"M4 5h9M9 3v2M6 9c1 3 3 5 6 7\"/><path d=\"M12 9c-1 3-3 5-7 8\"/><path d=\"m14 21 4-9 4 9M15.5 18h5\"/>",
      "headphones": "<path d=\"M4 14v-2a8 8 0 0 1 16 0v2\"/><rect x=\"3\" y=\"14\" width=\"4\" height=\"6\" rx=\"2\"/><rect x=\"17\" y=\"14\" width=\"4\" height=\"6\" rx=\"2\"/>",
      "bike": "<circle cx=\"6\" cy=\"17\" r=\"4\"/><circle cx=\"18\" cy=\"17\" r=\"4\"/><path d=\"M6 17l5-8 3 8H6Zm5-8h4l3 8M9 5h4\"/>",
      "run": "<circle cx=\"13\" cy=\"4\" r=\"2\"/><path d=\"M10 21l2-6-4-3 3-5 4 2 2 3\"/><path d=\"M17 21l-4-6M8 12l-3 3\"/>",
      "mountain": "<path d=\"m3 20 7-12 4 7 3-4 4 9H3Z\"/><path d=\"m10 8 2 4 2-1\"/>",
      "leaf": "<path d=\"M5 21c9-2 14-7 15-18C10 4 4 9 5 21Z\"/><path d=\"M5 21c4-7 8-10 15-18\"/>",
      "coffee": "<path d=\"M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z\"/><path d=\"M16 10h2a3 3 0 0 1 0 6h-2\"/><path d=\"M6 2v2M10 2v2M14 2v2\"/>",
      "shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z\"/>",
      "bed": "<path d=\"M3 11V5a2 2 0 0 1 2-2h5v8\"/><path d=\"M10 11h11v8\"/><path d=\"M3 19v-8h18\"/><path d=\"M7 19v2M19 19v2\"/>",
      "graduation": "<path d=\"m22 10-10-5-10 5 10 5 10-5Z\"/><path d=\"M6 12v5c3 2 9 2 12 0v-5\"/><path d=\"M22 10v6\"/>",
      "code": "<path d=\"m8 9-4 3 4 3\"/><path d=\"m16 9 4 3-4 3\"/><path d=\"m14 4-4 16\"/>",
      "camera": "<path d=\"M4 7h4l2-3h4l2 3h4v13H4V7Z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/>",
      "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/>",
      "map": "<path d=\"M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z\"/><path d=\"M9 3v15M15 6v15\"/>",
      "compass": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"m15 9-2 5-5 2 2-5 5-2Z\"/>",
      "lock": "<rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
      "trophy": "<path d=\"M8 21h8M12 17v4\"/><path d=\"M7 4h10v5a5 5 0 0 1-10 0V4Z\"/><path d=\"M7 7H4a3 3 0 0 0 3 3M17 7h3a3 3 0 0 1-3 3\"/>",
      "chart": "<path d=\"M4 19V5\"/><path d=\"M4 19h17\"/><rect x=\"7\" y=\"11\" width=\"3\" height=\"5\"/><rect x=\"12\" y=\"7\" width=\"3\" height=\"9\"/><rect x=\"17\" y=\"3\" width=\"3\" height=\"13\"/>",
      "mosque": "<path d=\"M4 21V10l8-6 8 6v11\"/><path d=\"M8 21v-6a4 4 0 0 1 8 0v6\"/><path d=\"M12 4V2\"/>",
      "users": "<path d=\"M16 21v-2a4 4 0 0 0-8 0v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.8M16 3.2a4 4 0 0 1 0 7.6\"/>",
      "sparkles": "<path d=\"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z\"/><path d=\"M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z\"/>",
      "eye": "<path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
      "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M8.5 8.5 21 21M8.5 15.5 21 3\"/>",
      "key": "<circle cx=\"7\" cy=\"14\" r=\"4\"/><path d=\"M10 14h11l-2 2 2 2\"/>",
      "flag": "<path d=\"M5 22V4\"/><path d=\"M5 4h13l-2 5 2 5H5\"/>",
      "music": "<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
      "clean": "<path d=\"M3 21c3-6 8-9 15-12\"/><path d=\"M14 3l7 7\"/><path d=\"M12 5l7 7\"/><path d=\"M5 19l-2 2\"/>",
      "plane": "<path d=\"M22 2 11 13\"/><path d=\"M22 2 15 22l-4-9-9-4 20-7Z\"/>",
      "cart": "<circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 6H6\"/>"
};

    const icons = [
      {
            "id": "prayer",
            "label": "Namoz",
            "kind": "mosque"
      },
      {
            "id": "quran",
            "label": "Qur'on",
            "kind": "book"
      },
      {
            "id": "dhikr",
            "label": "Zikr",
            "kind": "sparkles"
      },
      {
            "id": "gratitude",
            "label": "Shukur",
            "kind": "heart"
      },
      {
            "id": "dua",
            "label": "Duo",
            "kind": "moon"
      },
      {
            "id": "halal",
            "label": "Halollik",
            "kind": "shield"
      },
      {
            "id": "reading",
            "label": "Kitob",
            "kind": "book"
      },
      {
            "id": "language",
            "label": "Til",
            "kind": "language"
      },
      {
            "id": "english",
            "label": "Ingliz tili",
            "kind": "language"
      },
      {
            "id": "writing",
            "label": "Yozish",
            "kind": "pen"
      },
      {
            "id": "coding",
            "label": "Kod",
            "kind": "code"
      },
      {
            "id": "study",
            "label": "O'qish",
            "kind": "graduation"
      },
      {
            "id": "focus",
            "label": "Fokus",
            "kind": "target"
      },
      {
            "id": "planning",
            "label": "Reja",
            "kind": "calendar"
      },
      {
            "id": "time",
            "label": "Vaqt",
            "kind": "clock"
      },
      {
            "id": "morning",
            "label": "Tong",
            "kind": "sun"
      },
      {
            "id": "night",
            "label": "Kechki tartib",
            "kind": "moon"
      },
      {
            "id": "discipline",
            "label": "Intizom",
            "kind": "check"
      },
      {
            "id": "sport",
            "label": "Sport",
            "kind": "dumbbell"
      },
      {
            "id": "running",
            "label": "Yugurish",
            "kind": "run"
      },
      {
            "id": "cycling",
            "label": "Velosiped",
            "kind": "bike"
      },
      {
            "id": "mountain",
            "label": "Sayr",
            "kind": "mountain"
      },
      {
            "id": "health",
            "label": "Sog'liq",
            "kind": "heart"
      },
      {
            "id": "water",
            "label": "Suv",
            "kind": "droplet"
      },
      {
            "id": "nutrition",
            "label": "Ovqatlanish",
            "kind": "apple"
      },
      {
            "id": "coffee",
            "label": "Kofe",
            "kind": "coffee"
      },
      {
            "id": "sleep",
            "label": "Uyqu",
            "kind": "bed"
      },
      {
            "id": "cleaning",
            "label": "Tozalik",
            "kind": "clean"
      },
      {
            "id": "home",
            "label": "Uy",
            "kind": "home"
      },
      {
            "id": "family",
            "label": "Oila",
            "kind": "users"
      },
      {
            "id": "phone",
            "label": "Telefon",
            "kind": "phone"
      },
      {
            "id": "laptop",
            "label": "Kompyuter",
            "kind": "laptop"
      },
      {
            "id": "camera",
            "label": "Rasm",
            "kind": "camera"
      },
      {
            "id": "music",
            "label": "Musiqa",
            "kind": "music"
      },
      {
            "id": "headphones",
            "label": "Audio",
            "kind": "headphones"
      },
      {
            "id": "mail",
            "label": "Xabar",
            "kind": "mail"
      },
      {
            "id": "money",
            "label": "Pul",
            "kind": "wallet"
      },
      {
            "id": "shopping",
            "label": "Xarid",
            "kind": "cart"
      },
      {
            "id": "work",
            "label": "Ish",
            "kind": "laptop"
      },
      {
            "id": "business",
            "label": "Biznes",
            "kind": "chart"
      },
      {
            "id": "goal",
            "label": "Maqsad",
            "kind": "target"
      },
      {
            "id": "trophy",
            "label": "G'alaba",
            "kind": "trophy"
      },
      {
            "id": "mind",
            "label": "Aql",
            "kind": "brain"
      },
      {
            "id": "calm",
            "label": "Sokinlik",
            "kind": "leaf"
      },
      {
            "id": "lock",
            "label": "Nazorat",
            "kind": "lock"
      },
      {
            "id": "avoid",
            "label": "Tashlash",
            "kind": "scissors"
      },
      {
            "id": "bad-habit",
            "label": "Yomon odat",
            "kind": "flame"
      },
      {
            "id": "protect",
            "label": "Himoya",
            "kind": "shield"
      },
      {
            "id": "travel",
            "label": "Safar",
            "kind": "plane"
      },
      {
            "id": "map",
            "label": "Yo'l",
            "kind": "map"
      },
      {
            "id": "compass",
            "label": "Yo'nalish",
            "kind": "compass"
      },
      {
            "id": "flag",
            "label": "Bosqich",
            "kind": "flag"
      },
      {
            "id": "key",
            "label": "Kalit",
            "kind": "key"
      },
      {
            "id": "eye",
            "label": "Kuzatish",
            "kind": "eye"
      },
      {
            "id": "star",
            "label": "Yulduz",
            "kind": "star"
      },
      {
            "id": "spark",
            "label": "Ilhom",
            "kind": "sparkles"
      },
      {
            "id": "strong",
            "label": "Kuch",
            "kind": "dumbbell"
      },
      {
            "id": "balance",
            "label": "Muvozanat",
            "kind": "target"
      },
      {
            "id": "journal",
            "label": "Kundalik",
            "kind": "book"
      },
      {
            "id": "notes",
            "label": "Qayd",
            "kind": "pen"
      },
      {
            "id": "habit-01",
            "label": "Odat 01",
            "kind": "check"
      },
      {
            "id": "habit-02",
            "label": "Odat 02",
            "kind": "star"
      },
      {
            "id": "habit-03",
            "label": "Odat 03",
            "kind": "clock"
      },
      {
            "id": "habit-04",
            "label": "Odat 04",
            "kind": "calendar"
      },
      {
            "id": "habit-05",
            "label": "Odat 05",
            "kind": "target"
      },
      {
            "id": "habit-06",
            "label": "Odat 06",
            "kind": "heart"
      },
      {
            "id": "habit-07",
            "label": "Odat 07",
            "kind": "book"
      },
      {
            "id": "habit-08",
            "label": "Odat 08",
            "kind": "pen"
      },
      {
            "id": "habit-09",
            "label": "Odat 09",
            "kind": "leaf"
      },
      {
            "id": "habit-10",
            "label": "Odat 10",
            "kind": "sun"
      },
      {
            "id": "habit-11",
            "label": "Odat 11",
            "kind": "moon"
      },
      {
            "id": "habit-12",
            "label": "Odat 12",
            "kind": "shield"
      },
      {
            "id": "habit-13",
            "label": "Odat 13",
            "kind": "droplet"
      },
      {
            "id": "habit-14",
            "label": "Odat 14",
            "kind": "apple"
      },
      {
            "id": "habit-15",
            "label": "Odat 15",
            "kind": "phone"
      },
      {
            "id": "habit-16",
            "label": "Odat 16",
            "kind": "brain"
      },
      {
            "id": "habit-17",
            "label": "Odat 17",
            "kind": "wallet"
      },
      {
            "id": "habit-18",
            "label": "Odat 18",
            "kind": "language"
      },
      {
            "id": "habit-19",
            "label": "Odat 19",
            "kind": "headphones"
      },
      {
            "id": "habit-20",
            "label": "Odat 20",
            "kind": "bike"
      },
      {
            "id": "habit-21",
            "label": "Odat 21",
            "kind": "run"
      },
      {
            "id": "habit-22",
            "label": "Odat 22",
            "kind": "coffee"
      },
      {
            "id": "habit-23",
            "label": "Odat 23",
            "kind": "graduation"
      },
      {
            "id": "habit-24",
            "label": "Odat 24",
            "kind": "code"
      },
      {
            "id": "habit-25",
            "label": "Odat 25",
            "kind": "camera"
      },
      {
            "id": "habit-26",
            "label": "Odat 26",
            "kind": "mail"
      },
      {
            "id": "habit-27",
            "label": "Odat 27",
            "kind": "home"
      },
      {
            "id": "habit-28",
            "label": "Odat 28",
            "kind": "users"
      },
      {
            "id": "habit-29",
            "label": "Odat 29",
            "kind": "music"
      },
      {
            "id": "habit-30",
            "label": "Odat 30",
            "kind": "clean"
      },
      {
            "id": "habit-31",
            "label": "Odat 31",
            "kind": "plane"
      },
      {
            "id": "habit-32",
            "label": "Odat 32",
            "kind": "cart"
      },
      {
            "id": "habit-33",
            "label": "Odat 33",
            "kind": "map"
      },
      {
            "id": "habit-34",
            "label": "Odat 34",
            "kind": "compass"
      },
      {
            "id": "habit-35",
            "label": "Odat 35",
            "kind": "key"
      },
      {
            "id": "habit-36",
            "label": "Odat 36",
            "kind": "flag"
      }
];

    const namozReason = "Men namozga bog'lanib qolgan edim, deyarli har kuni namoz o'qiydigan bola bo'ldim. Ishlarim shu namozga o'xshab tartibli bo'lishni boshlagan edi. Uning tarjimalarini yod olib maza qilib o'qib yurgan paytlarim edi, lekin nafsimga bo'y sunib bularni vaqtinchalik to'xtatdim. To'xtatgandan so'ng davom ettirish qiyin bo'ldi va ishlarim ham namozim bilan orqaga surilib boraverdi.\n\nNamoz bu Allohning amri hisoblanadi. Namoz vaqti kirishi bilan namoz o'qiymiz.";

    const seedHabit = {
      id: "namoz-boshlash",
      name: "Namozni boshlash",
      type: "start",
      startedAt: "2026-06-28T10:24:00+05:00",
      reason: namozReason,
      color: "teal",
      icon: "prayer",
      bestSeconds: 0,
      history: [{ at: "2026-06-28T10:24:00+05:00", note: "Odat boshlandi." }]
    };

    const els = {
      miniCount: document.getElementById("miniCount"),
      habitList: document.getElementById("habitList"),
      emptyState: document.getElementById("emptyState"),
      addHabitBtn: document.getElementById("addHabitBtn"),
      plansMenuBtn: document.getElementById("plansMenuBtn"),
      challengesMenuBtn: document.getElementById("challengesMenuBtn"),
      plansPanel: document.getElementById("plansPanel"),
      challengesPanel: document.getElementById("challengesPanel"),
      challengeHome: document.getElementById("challengeHome"),
      challengeBuilder: document.getElementById("challengeBuilder"),
      openChallengeFormBtn: document.getElementById("openChallengeFormBtn"),
      challengeForm: document.getElementById("challengeForm"),
      challengeFormTitle: document.getElementById("challengeFormTitle"),
      challengeError: document.getElementById("challengeError"),
      challengeLetterInput: document.getElementById("challengeLetterInput"),
      challengeNameInput: document.getElementById("challengeNameInput"),
      challengeGuideInput: document.getElementById("challengeGuideInput"),
      challengeDaysInput: document.getElementById("challengeDaysInput"),
      challengeHoursInput: document.getElementById("challengeHoursInput"),
      challengeMinutesInput: document.getElementById("challengeMinutesInput"),
      challengeMetricOptions: document.getElementById("challengeMetricOptions"),
      metricTimeField: document.getElementById("metricTimeField"),
      metricCountField: document.getElementById("metricCountField"),
      metricValueField: document.getElementById("metricValueField"),
      metricHoursInput: document.getElementById("metricHoursInput"),
      metricMinutesInput: document.getElementById("metricMinutesInput"),
      metricCountInput: document.getElementById("metricCountInput"),
      metricValueInput: document.getElementById("metricValueInput"),
      challengeAlphabet: document.getElementById("challengeAlphabet"),
      challengeList: document.getElementById("challengeList"),
      challengeSummaryCount: document.getElementById("challengeSummaryCount"),
      saveChallengeBtn: document.getElementById("saveChallengeBtn"),
      cancelChallengeBtn: document.getElementById("cancelChallengeBtn"),
      challengeInfoDialog: document.getElementById("challengeInfoDialog"),
      closeChallengeInfoDialog: document.getElementById("closeChallengeInfoDialog"),
      challengeInfoTitle: document.getElementById("challengeInfoTitle"),
      challengeInfoMeta: document.getElementById("challengeInfoMeta"),
      challengeInfoLetter: document.getElementById("challengeInfoLetter"),
      challengeInfoDuration: document.getElementById("challengeInfoDuration"),
      challengeInfoMetric: document.getElementById("challengeInfoMetric"),
      challengeInfoGuide: document.getElementById("challengeInfoGuide"),
      selectedName: document.getElementById("selectedName"),
      dateLabel: document.getElementById("dateLabel"),
      startedLabel: document.getElementById("startedLabel"),
      selectedReason: document.getElementById("selectedReason"),
      reasonPreview: document.getElementById("reasonPreview"),
      reasonMenu: document.getElementById("reasonMenu"),
      rulesMenu: document.getElementById("rulesMenu"),
      rulesPreview: document.getElementById("rulesPreview"),
      rulesList: document.getElementById("rulesList"),
      addRuleFromDetailBtn: document.getElementById("addRuleFromDetailBtn"),
      penaltyJournalMenu: document.getElementById("penaltyJournalMenu"),
      penaltyJournalPreview: document.getElementById("penaltyJournalPreview"),
      penaltyJournalList: document.getElementById("penaltyJournalList"),
      currentMetricLabel: document.getElementById("currentMetricLabel"),
      currentSummary: document.getElementById("currentSummary"),
      bestMetricLabel: document.getElementById("bestMetricLabel"),
      bestRecord: document.getElementById("bestRecord"),
      detailMenuBtn: document.getElementById("detailMenuBtn"),
      detailMenu: document.getElementById("detailMenu"),
      restartMenuBtn: document.getElementById("restartMenuBtn"),
      breakMenuBtn: document.getElementById("breakMenuBtn"),
      historyMenuBtn: document.getElementById("historyMenuBtn"),
      calendarMenu: document.getElementById("calendarMenu"),
      calendarSummaryTitle: document.getElementById("calendarSummaryTitle"),
      calendarTitle: document.getElementById("calendarTitle"),
      calendarMonthLabel: document.getElementById("calendarMonthLabel"),
      calendarGrid: document.getElementById("calendarGrid"),
      prevMonthBtn: document.getElementById("prevMonthBtn"),
      nextMonthBtn: document.getElementById("nextMonthBtn"),
      reportDate: document.getElementById("reportDate"),
      reportStatus: document.getElementById("reportStatus"),
      reportNote: document.getElementById("reportNote"),
      doneStat: document.getElementById("doneStat"),
      missedStat: document.getElementById("missedStat"),
      successStat: document.getElementById("successStat"),
      goalRoad: document.getElementById("goalRoad"),
      goalPath: document.getElementById("goalPath"),
      goalRoadLabel: document.getElementById("goalRoadLabel"),
      goalProgressBar: document.getElementById("goalProgressBar"),
      dayDialog: document.getElementById("dayDialog"),
      dayDialogTitle: document.getElementById("dayDialogTitle"),
      dayDialogHint: document.getElementById("dayDialogHint"),
      closeDayDialog: document.getElementById("closeDayDialog"),
      dayDoneBtn: document.getElementById("dayDoneBtn"),
      dayMissedBtn: document.getElementById("dayMissedBtn"),
      dayNoteInput: document.getElementById("dayNoteInput"),
      saveDayBtn: document.getElementById("saveDayBtn"),
      historyDialog: document.getElementById("historyDialog"),
      historyList: document.getElementById("historyList"),
      closeHistoryDialog: document.getElementById("closeHistoryDialog"),
      clearHistoryBtn: document.getElementById("clearHistoryBtn"),
      timerGrid: document.getElementById("timerGrid"),
      years: document.getElementById("years"),
      months: document.getElementById("months"),
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds"),
      habitDialog: document.getElementById("habitDialog"),
      rulesDialog: document.getElementById("rulesDialog"),
      form: document.getElementById("habitForm"),
      formTitle: document.getElementById("formTitle"),
      formHint: document.getElementById("formHint"),
      formError: document.getElementById("formError"),
      entryModeSwitch: document.getElementById("entryModeSwitch"),
      habitModeBtn: document.getElementById("habitModeBtn"),
      goalModeBtn: document.getElementById("goalModeBtn"),
      nameFieldLabel: document.getElementById("nameFieldLabel"),
      startDateLabel: document.getElementById("startDateLabel"),
      goalEndField: document.getElementById("goalEndField"),
      goalEndInput: document.getElementById("goalEndInput"),
      nameInput: document.getElementById("habitNameInput"),
      dateInput: document.getElementById("habitDateInput"),
      reasonInput: document.getElementById("habitReasonInput"),
      ruleEditorList: document.getElementById("ruleEditorList"),
      addRuleBtn: document.getElementById("addRuleBtn"),
      saveRulesBtn: document.getElementById("saveRulesBtn"),
      cancelRulesBtn: document.getElementById("cancelRulesBtn"),
      closeRulesDialog: document.getElementById("closeRulesDialog"),
      colorChooser: document.getElementById("colorChooser"),
      iconChooser: document.getElementById("iconChooser"),
      saveBtn: document.getElementById("saveHabitBtn"),
      cancelBtn: document.getElementById("cancelHabitBtn"),
      closeHabitDialog: document.getElementById("closeHabitDialog"),
      breakDialog: document.getElementById("breakDialog"),
      breakReason: document.getElementById("breakReason"),
      confirmBreak: document.getElementById("confirmBreak")
    };

    let habits = loadHabits();
    let challenges = loadChallenges();
    let selectedId = localStorage.getItem(selectedKey) || (habits[0] ? habits[0].id : "");
    let selectedChallengeLetter = challengeLetters[0];
    let selectedChallengeMetric = "time";
    let editingChallengeId = null;
    let editingId = null;
    let openMenuId = null;
    let detailMenuOpen = false;
    let selectedColor = "teal";
    let selectedIconValue = "check";
    let selectedEntryKind = "habit";
    let colorsExpanded = false;
    let iconsExpanded = false;
    let calendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    let selectedCalendarDate = dateKey(new Date());
    let editingDayKey = null;
    let editingDayStatus = "done";
    let editingRules = [];

    function normalizeHabit(habit, index) {
      const fallback = colors[index % colors.length].id;
      return {
        id: habit.id || createId(),
        name: habit.name || "Yangi odat",
        type: habit.type || "start",
        kind: habit.kind || (habit.endsAt ? "goal" : "habit"),
        startedAt: habit.startedAt || new Date().toISOString(),
        endsAt: habit.endsAt || null,
        reason: habit.reason || "",
        rules: normalizeRules(habit.rules),
        penaltyRules: normalizePenaltyRules(habit.penaltyRules || habit.penalties),
        penaltyJournal: normalizePenaltyJournal(habit.penaltyJournal || habit.penaltyLog),
        color: habit.color || fallback,
        icon: normalizeIcon(habit.icon, habit.name),
        bestSeconds: habit.bestSeconds || 0,
        calendar: habit.calendar && typeof habit.calendar === "object" ? habit.calendar : {},
        history: Array.isArray(habit.history) ? habit.history : [{ at: new Date().toISOString(), note: "Odat qo'shildi." }]
      };
    }

    function loadHabits() {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) return parsed.map(normalizeHabit);
        } catch {}
      }

      const legacy = localStorage.getItem(legacyKey);
      if (legacy) {
        try {
          const old = JSON.parse(legacy);
          return [normalizeHabit({
            ...seedHabit,
            startedAt: old.startedAt || seedHabit.startedAt,
            bestSeconds: old.bestSeconds || 0,
            history: Array.isArray(old.history) ? old.history : seedHabit.history
          }, 0)];
        } catch {}
      }

      return [normalizeHabit(seedHabit, 0)];
    }

    function saveHabits() {
      localStorage.setItem(storageKey, JSON.stringify(habits));
      localStorage.setItem(selectedKey, selectedId);
    }

    function loadChallenges() {
      const saved = localStorage.getItem(challengeStorageKey);
      if (!saved) return [];
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const usedLetters = new Set();
        return parsed.map(function(item) {
          let letter = challengeLetters.includes(item.letter) && !usedLetters.has(item.letter)
            ? item.letter
            : challengeLetters.find(function(candidate) { return !usedLetters.has(candidate); }) || challengeLetters[0];
          usedLetters.add(letter);
          return {
            id: item.id || createId(),
            letter: letter,
            name: item.name || "Yangi chelenj",
            guide: item.guide || "",
            duration: {
              days: Math.max(0, Number(item.duration && item.duration.days) || 0),
              hours: Math.max(0, Number(item.duration && item.duration.hours) || 0),
              minutes: Math.max(0, Number(item.duration && item.duration.minutes) || 0)
            },
            metric: ["time", "count", "value"].includes(item.metric) ? item.metric : "time",
            metricValue: item.metricValue && typeof item.metricValue === "object" ? item.metricValue : {},
            createdAt: item.createdAt || new Date().toISOString()
          };
        });
      } catch {
        return [];
      }
    }

    function saveChallenges() {
      localStorage.setItem(challengeStorageKey, JSON.stringify(challenges));
    }

    function activeHabit() {
      if (!habits.length) return null;
      let habit = habits.find(function(item) { return item.id === selectedId; });
      if (!habit) {
        selectedId = habits[0].id;
        habit = habits[0];
      }
      return habit;
    }

    function createId() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      return "habit-" + Date.now() + "-" + Math.round(Math.random() * 10000);
    }

    function themeFor(habit) {
      return colors.find(function(item) { return item.id === habit.color; }) || colors[0];
    }

    function iconFor(id) {
      return icons.find(function(item) { return item.id === id; }) || icons[0];
    }

    function iconMarkup(id) {
      const icon = iconFor(id);
      const path = iconTemplates[icon.kind] || iconTemplates.check;
      return '<svg viewBox="0 0 24 24" aria-hidden="true">' + path + '</svg>';
    }

    function renderIcon(el, id) {
      el.innerHTML = iconMarkup(id);
    }

    function normalizeIcon(value, name) {
      if (icons.some(function(item) { return item.id === value; })) return value;
      if ((name || '').toLowerCase().includes('namoz')) return 'prayer';
      const oldMap = { '✓': 'check', '★': 'star', '●': 'focus', '◆': 'goal', '▲': 'mountain', '+': 'spark' };
      return oldMap[value] || 'check';
    }

    function setTheme(el, habit) {
      const theme = themeFor(habit);
      el.style.setProperty("--habit-accent", theme.color);
      el.style.setProperty("--habit-soft", theme.soft);
    }

    function setSelectedTheme(habit) {
      const theme = themeFor(habit);
      document.documentElement.style.setProperty("--selected-accent", theme.color);
      document.documentElement.style.setProperty("--selected-soft", theme.soft);
    }

    function pad(value) { return String(value).padStart(2, "0"); }

    function formatDate(date) {
      return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear() + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
    }

    function formatDay(date) {
      return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear();
    }

    function dateKey(date) {
      return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
    }

    function dateFromKey(key) {
      const parts = key.split("-").map(Number);
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function sameDay(a, b) {
      return dateKey(a) === dateKey(b);
    }

    function toInputValue(date) {
      return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes());
    }

    function parseInputDate(value) {
      if (!value) return new Date().toISOString();
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return new Date().toISOString();
      return date.toISOString();
    }

    function clampNumber(value, min, max) {
      const number = Number(value);
      const safe = Number.isFinite(number) ? number : min;
      return Math.max(min, Math.min(max, Math.floor(safe)));
    }

    function formatParts(parts) {
      return parts.length ? parts.join(", ") : "Belgilanmagan";
    }

    function formatChallengeDuration(duration) {
      return formatParts([
        duration.days ? duration.days + " kun" : "",
        duration.hours ? duration.hours + " soat" : "",
        duration.minutes ? duration.minutes + " minut" : ""
      ].filter(Boolean));
    }

    function formatMoney(value) {
      return new Intl.NumberFormat("uz-UZ").format(Number(value) || 0) + " so'm";
    }

    function metricLabel(challenge) {
      if (challenge.metric === "count") {
        return "Soni: " + (Number(challenge.metricValue.count) || 1) + " ta";
      }
      if (challenge.metric === "value") {
        return "Qiymati: " + formatMoney(challenge.metricValue.value);
      }
      return "Vaqti: " + formatParts([
        challenge.metricValue.hours ? challenge.metricValue.hours + " soat" : "",
        challenge.metricValue.minutes ? challenge.metricValue.minutes + " minut" : ""
      ].filter(Boolean));
    }

    function totalDurationMinutes(duration) {
      if (!duration) return 0;
      return (Number(duration.days) || 0) * 1440 + (Number(duration.hours) || 0) * 60 + (Number(duration.minutes) || 0);
    }

    function formatMinutesAsDuration(totalMinutes) {
      const safeMinutes = Math.max(0, Math.floor(Number(totalMinutes) || 0));
      const days = Math.floor(safeMinutes / 1440);
      const hours = Math.floor((safeMinutes % 1440) / 60);
      const minutes = safeMinutes % 60;
      return formatParts([
        days ? days + " kun" : "",
        hours ? hours + " soat" : "",
        minutes ? minutes + " minut" : ""
      ].filter(Boolean));
    }

    function challengeForRule(rule) {
      if (!rule) return null;
      const id = rule.challengeId || "";
      const letter = rule.challengeLetter || rule.category || "";
      return challenges.find(function(challenge) {
        return (id && challenge.id === id) || (letter && challenge.letter === letter);
      }) || null;
    }

    function ruleMultiplier(rule) {
      return Math.max(1, Math.min(999, Math.floor(Number(rule && rule.multiplier) || 1)));
    }

    function ruleChallengeLetter(rule) {
      const challenge = challengeForRule(rule);
      return challenge ? challenge.letter : (rule.challengeLetter || rule.category || "");
    }

    function challengeRuleResult(rule) {
      const challenge = challengeForRule(rule);
      const multiplier = ruleMultiplier(rule);
      const letter = ruleChallengeLetter(rule);
      if (!challenge) {
        return letter ? multiplier + letter + " - chelenj topilmadi" : "Chelenj tanlanmagan";
      }

      let result = "Belgilanmagan";
      const durationMinutes = totalDurationMinutes(challenge.duration);
      if (challenge.metric === "value") {
        result = formatMoney((Number(challenge.metricValue.value) || 0) * multiplier);
      } else if (durationMinutes > 0) {
        result = formatMinutesAsDuration(durationMinutes * multiplier);
      } else if (challenge.metric === "count") {
        result = ((Number(challenge.metricValue.count) || 1) * multiplier) + " ta";
      } else {
        const metricMinutes = ((Number(challenge.metricValue.hours) || 0) * 60) + (Number(challenge.metricValue.minutes) || 0);
        result = formatMinutesAsDuration(metricMinutes * multiplier);
      }
      return multiplier + challenge.letter + " = " + result;
    }

    function challengePenaltyLimitMinutes(rule) {
      const challenge = challengeForRule(rule);
      const multiplier = ruleMultiplier(rule);
      if (!challenge) return 1440;
      const durationMinutes = totalDurationMinutes(challenge.duration);
      if (durationMinutes > 0) return durationMinutes * multiplier;
      if (challenge.metric === "time") {
        const metricMinutes = ((Number(challenge.metricValue.hours) || 0) * 60) + (Number(challenge.metricValue.minutes) || 0);
        if (metricMinutes > 0) return metricMinutes * multiplier;
      }
      return 1440 * multiplier;
    }

    function formatPenaltyLimit(rule) {
      return formatMinutesAsDuration(challengePenaltyLimitMinutes(rule));
    }

    function challengePalette(letter) {
      const palettes = [
        { accent: "#d6544a", soft: "rgba(214, 84, 74, 0.16)", pale: "rgba(214, 84, 74, 0.08)", text: "#e37167" },
        { accent: "#4d76a3", soft: "rgba(77, 118, 163, 0.16)", pale: "rgba(77, 118, 163, 0.08)", text: "#7ea0c9" },
        { accent: "#b3564a", soft: "rgba(179, 86, 74, 0.16)", pale: "rgba(179, 86, 74, 0.08)", text: "#d1453a" },
        { accent: "#8a5ca6", soft: "rgba(138, 92, 166, 0.16)", pale: "rgba(138, 92, 166, 0.08)", text: "#ab86c9" },
        { accent: "#9a7040", soft: "rgba(154, 112, 64, 0.16)", pale: "rgba(154, 112, 64, 0.08)", text: "#c9a227" },
        { accent: "#4d8393", soft: "rgba(77, 131, 147, 0.16)", pale: "rgba(77, 131, 147, 0.08)", text: "#7eb0c0" },
        { accent: "#5c9a6b", soft: "rgba(92, 154, 107, 0.16)", pale: "rgba(92, 154, 107, 0.08)", text: "#82c191" },
        { accent: "#b3823a", soft: "rgba(179, 130, 58, 0.16)", pale: "rgba(179, 130, 58, 0.08)", text: "#c9a227" },
        { accent: "#b3527e", soft: "rgba(179, 82, 126, 0.16)", pale: "rgba(179, 82, 126, 0.08)", text: "#d381a8" },
        { accent: "#6b7688", soft: "rgba(107, 118, 136, 0.16)", pale: "rgba(107, 118, 136, 0.08)", text: "#a3aebd" }
      ];
      const index = Math.max(0, challengeLetters.indexOf(letter || "A"));
      return palettes[index % palettes.length];
    }

    function applyChallengePalette(element, letter) {
      const palette = challengePalette(letter);
      element.style.setProperty("--challenge-accent", palette.accent);
      element.style.setProperty("--challenge-soft", palette.soft);
      element.style.setProperty("--challenge-pale", palette.pale);
      element.style.setProperty("--challenge-text", palette.text);
    }

    function setChallengeError(message) {
      els.challengeError.textContent = message;
      els.challengeError.classList.toggle("visible", Boolean(message));
    }

    function setChallengeMetric(metric) {
      selectedChallengeMetric = metric;
      els.challengeMetricOptions.querySelectorAll("button").forEach(function(button) {
        button.classList.toggle("active", button.dataset.metric === metric);
      });
      els.metricTimeField.classList.toggle("hidden", metric !== "time");
      els.metricCountField.classList.toggle("hidden", metric !== "count");
      els.metricValueField.classList.toggle("hidden", metric !== "value");
    }

    function firstAvailableChallengeLetter(exceptId) {
      const usedLetters = new Set(challenges
        .filter(function(challenge) { return challenge.id !== exceptId; })
        .map(function(challenge) { return challenge.letter; }));
      return challengeLetters.find(function(letter) { return !usedLetters.has(letter); }) || "";
    }

    function resetChallengeForm() {
      editingChallengeId = null;
      selectedChallengeLetter = firstAvailableChallengeLetter();
      selectedChallengeMetric = "time";
      els.challengeForm.reset();
      els.challengeLetterInput.value = selectedChallengeLetter;
      els.challengeDaysInput.value = 0;
      els.challengeHoursInput.value = 0;
      els.challengeMinutesInput.value = 0;
      els.metricHoursInput.value = 0;
      els.metricMinutesInput.value = 0;
      els.metricCountInput.value = 1;
      els.metricValueInput.value = 0;
      setChallengeMetric("time");
      setChallengeError("");
    }

    function setChallengeEditor(open) {
      els.challengeHome.classList.toggle("hidden", open);
      els.challengeBuilder.classList.toggle("hidden", !open);
      if (open) renderChallengeAlphabet();
    }

    function openNewChallengeForm() {
      resetChallengeForm();
      els.challengeFormTitle.textContent = "Chelenj yaratish";
      els.saveChallengeBtn.textContent = "Chelenjni saqlash";
      setChallengeEditor(true);
    }

    function openEditChallengeForm(id) {
      const challenge = challenges.find(function(item) { return item.id === id; });
      if (!challenge) return;
      editingChallengeId = id;
      selectedChallengeLetter = challenge.letter;
      els.challengeLetterInput.value = challenge.letter;
      els.challengeNameInput.value = challenge.name;
      els.challengeGuideInput.value = challenge.guide || "";
      els.challengeDaysInput.value = challenge.duration.days || 0;
      els.challengeHoursInput.value = challenge.duration.hours || 0;
      els.challengeMinutesInput.value = challenge.duration.minutes || 0;
      els.metricHoursInput.value = challenge.metricValue.hours || 0;
      els.metricMinutesInput.value = challenge.metricValue.minutes || 0;
      els.metricCountInput.value = challenge.metricValue.count || 1;
      els.metricValueInput.value = challenge.metricValue.value || 0;
      setChallengeMetric(challenge.metric);
      setChallengeError("");
      els.challengeFormTitle.textContent = "Chelenjni tahrirlash";
      els.saveChallengeBtn.textContent = "Saqlash";
      setChallengeEditor(true);
    }

    function closeChallengeForm() {
      resetChallengeForm();
      setChallengeEditor(false);
      renderChallenges();
      renderChallengeAlphabet();
    }

    function deleteChallenge(challenge) {
      if (!window.confirm("\"" + challenge.name + "\" chelenjini o'chirasizmi?")) return;
      challenges = challenges.filter(function(item) { return item.id !== challenge.id; });
      if (editingChallengeId === challenge.id) closeChallengeForm();
      saveChallenges();
      renderChallenges();
      renderChallengeAlphabet();
    }

    function openChallengeInfoDialog(challenge) {
      els.challengeInfoTitle.textContent = challenge.name;
      els.challengeInfoMeta.textContent = "Chelenj haqida qisqa ma'lumot.";
      els.challengeInfoLetter.textContent = challenge.letter;
      applyChallengePalette(els.challengeInfoLetter, challenge.letter);
      els.challengeInfoDuration.textContent = formatChallengeDuration(challenge.duration);
      els.challengeInfoMetric.textContent = metricLabel(challenge);
      els.challengeInfoGuide.textContent = challenge.guide || "Yo'riqnoma yozilmagan.";
      els.challengeInfoDialog.showModal();
    }

    function renderChallengeAlphabet() {
      const usedLetters = new Set(challenges
        .filter(function(challenge) { return challenge.id !== editingChallengeId; })
        .map(function(challenge) { return challenge.letter; }));
      if (!selectedChallengeLetter || usedLetters.has(selectedChallengeLetter)) {
        selectedChallengeLetter = firstAvailableChallengeLetter(editingChallengeId);
        els.challengeLetterInput.value = selectedChallengeLetter;
      }
      els.challengeAlphabet.innerHTML = "";
      challengeLetters.forEach(function(letter) {
        const isUsed = usedLetters.has(letter);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "letter-choice";
        button.textContent = letter;
        applyChallengePalette(button, letter);
        button.classList.toggle("active", letter === selectedChallengeLetter);
        button.classList.toggle("used", isUsed);
        button.disabled = isUsed;
        if (isUsed) button.title = "Bu harfga chelenj yaratilgan";
        button.addEventListener("click", function() {
          if (isUsed) return;
          selectedChallengeLetter = letter;
          els.challengeLetterInput.value = letter;
          renderChallengeAlphabet();
        });
        els.challengeAlphabet.appendChild(button);
      });
    }

    function renderChallenges() {
      els.challengeSummaryCount.textContent = challenges.length + " ta";
      els.challengeList.innerHTML = "";
      if (!challenges.length) {
        const empty = document.createElement("div");
        empty.className = "challenge-empty";
        empty.textContent = "Hali chelenj yaratilmagan.";
        els.challengeList.appendChild(empty);
        return;
      }
      challenges.forEach(function(challenge) {
        const card = document.createElement("article");
        card.className = "challenge-card";
        card.tabIndex = 0;
        card.title = "Tahrirlash uchun bosing";
        applyChallengePalette(card, challenge.letter);

        const badge = document.createElement("div");
        badge.className = "challenge-card-badge";
        badge.textContent = challenge.letter;
        applyChallengePalette(badge, challenge.letter);

        const body = document.createElement("div");
        body.className = "challenge-card-body";
        const title = document.createElement("strong");
        title.textContent = challenge.name;
        const meta = document.createElement("span");
        meta.textContent = formatChallengeDuration(challenge.duration) + " | " + metricLabel(challenge);
        const guide = document.createElement("p");
        guide.className = "challenge-guide-preview";
        guide.textContent = challenge.guide || "Yo'riqnoma yozilmagan.";
        body.append(title, meta, guide);

        const menuWrap = document.createElement("div");
        menuWrap.className = "challenge-menu-wrap";
        const menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "challenge-menu-button";
        menuButton.title = "Chelenj menyusi";
        menuButton.setAttribute("aria-label", "Chelenj menyusi");
        menuButton.innerHTML = "<span></span><span></span><span></span>";
        const menu = document.createElement("div");
        menu.className = "challenge-card-menu";
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Tahrirlash";
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "danger-text";
        deleteButton.textContent = "O'chirish";
        menu.append(editButton, deleteButton);
        menuWrap.append(menuButton, menu);

        menuButton.addEventListener("click", function(event) {
          event.stopPropagation();
          document.querySelectorAll(".challenge-card-menu.open").forEach(function(item) {
            if (item !== menu) item.classList.remove("open");
          });
          menu.classList.toggle("open");
        });
        editButton.addEventListener("click", function(event) {
          event.stopPropagation();
          menu.classList.remove("open");
          openEditChallengeForm(challenge.id);
        });
        deleteButton.addEventListener("click", function(event) {
          event.stopPropagation();
          menu.classList.remove("open");
          deleteChallenge(challenge);
        });

        card.addEventListener("click", function() { openChallengeInfoDialog(challenge); });
        card.addEventListener("keydown", function(event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openChallengeInfoDialog(challenge);
          }
        });
        card.append(body, badge, menuWrap);
        els.challengeList.appendChild(card);
      });
    }

    function handleChallengeSubmit(event) {
      event.preventDefault();
      setChallengeError("");
      const name = els.challengeNameInput.value.trim();
      const guide = els.challengeGuideInput.value.trim();
      if (!selectedChallengeLetter) {
        setChallengeError("Bo'sh harf qolmadi. Avval kerakmas chelenjni o'chiring.");
        return;
      }
      if (challenges.some(function(challenge) { return challenge.id !== editingChallengeId && challenge.letter === selectedChallengeLetter; })) {
        setChallengeError("Bu harfga chelenj allaqachon yaratilgan.");
        renderChallengeAlphabet();
        return;
      }
      if (!name) {
        setChallengeError("Chelenj nomini yozing.");
        return;
      }

      const duration = {
        days: clampNumber(els.challengeDaysInput.value, 0, 3650),
        hours: clampNumber(els.challengeHoursInput.value, 0, 23),
        minutes: clampNumber(els.challengeMinutesInput.value, 0, 59)
      };
      let metricValue = {};
      if (selectedChallengeMetric === "count") {
        metricValue = { count: Math.max(1, clampNumber(els.metricCountInput.value, 1, 100000)) };
      } else if (selectedChallengeMetric === "value") {
        metricValue = { value: Math.max(0, clampNumber(els.metricValueInput.value, 0, 1000000000)) };
      } else {
        metricValue = {
          hours: clampNumber(els.metricHoursInput.value, 0, 10000),
          minutes: clampNumber(els.metricMinutesInput.value, 0, 59)
        };
      }

      if (editingChallengeId) {
        const existing = challenges.find(function(challenge) { return challenge.id === editingChallengeId; });
        if (existing) {
          existing.letter = selectedChallengeLetter;
          existing.name = name;
          existing.guide = guide;
          existing.duration = duration;
          existing.metric = selectedChallengeMetric;
          existing.metricValue = metricValue;
          existing.updatedAt = new Date().toISOString();
          saveChallenges();
          closeChallengeForm();
          return;
        }
      }

      challenges.unshift({
        id: createId(),
        letter: selectedChallengeLetter,
        name: name,
        guide: guide,
        duration: duration,
        metric: selectedChallengeMetric,
        metricValue: metricValue,
        createdAt: new Date().toISOString()
      });
      saveChallenges();
      closeChallengeForm();
    }

    function typeText(type) { return type === "quit" ? "Tashlash odati" : "Boshlash odati"; }
    function typeShort(type) { return type === "quit" ? "Tashlash" : "Boshlash"; }
    function dateText(type) { return type === "quit" ? "Tashlangan sana" : "Boshlangan sana"; }
    function entryText(habit) { return habit && habit.kind === "goal" ? "Maqsad" : "Odat"; }
    function addDays(date, days) {
      const next = new Date(date);
      next.setDate(next.getDate() + days);
      return next;
    }
    function goalTotalDays(habit) {
      if (!habit || !habit.endsAt) return 1;
      const start = new Date(habit.startedAt);
      const end = new Date(habit.endsAt);
      return Math.max(1, Math.ceil((end - start) / 86400000));
    }

    function calendarCounts(habit) {
      const entries = Object.keys((habit && habit.calendar) || {}).map(function(dayKey) { return habit.calendar[dayKey]; }).filter(Boolean);
      const done = entries.filter(function(item) { return item.status === "done"; }).length;
      const missed = entries.filter(function(item) { return item.status === "missed"; }).length;
      return { done: done, missed: missed, marked: done + missed };
    }

    function trimPercent(value) {
      const fixed = Number(value).toFixed(2);
      return fixed.replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
    }

    function goalProgressValue(habit) {
      if (!habit || habit.kind !== "goal") return 0;
      const counts = calendarCounts(habit);
      return Math.max(0, Math.min(100, (counts.done / goalTotalDays(habit)) * 100));
    }

    function goalProgress(habit) {
      return trimPercent(goalProgressValue(habit));
    }

    function reasonPreviewText(reason) {
      const clean = (reason || "Sabab hali yozilmagan.").replace(/\s+/g, " ").trim();
      return clean.length > 72 ? clean.slice(0, 72) + "..." : clean;
    }

    function normalizeRules(rules) {
      if (!Array.isArray(rules)) return [];
      return rules.map(function(rule) {
        const legacyCategory = challengeLetters.includes(rule.category) ? rule.category : "";
        const challengeLetter = challengeLetters.includes(rule.challengeLetter || rule.letter)
          ? (rule.challengeLetter || rule.letter)
          : legacyCategory;
        const multiplier = Math.max(1, Math.min(999, Math.floor(Number(rule.multiplier) || 1)));
        return {
          id: rule.id || createId(),
          text: (rule.text || rule.title || "").trim(),
          category: challengeLetter,
          challengeId: rule.challengeId || "",
          challengeLetter: challengeLetter,
          multiplier: multiplier
        };
      }).filter(function(rule) { return rule.text; });
    }

    function normalizePenaltyRules(value) {
      const defaults = {
        A: "",
        B: "",
        C: ""
      };
      if (Array.isArray(value)) {
        value.forEach(function(item) {
          const category = ["A", "B", "C"].includes(item.category) ? item.category : "";
          if (category && item.action) defaults[category] = String(item.action).trim();
        });
        return defaults;
      }
      if (value && typeof value === "object") {
        ["A", "B", "C"].forEach(function(category) {
          if (value[category]) {
            const text = String(value[category]).trim();
            defaults[category] = text === defaultPenaltyAction(category) ? "" : text;
          }
        });
      }
      return defaults;
    }

    function normalizePenaltyJournal(value) {
      if (!Array.isArray(value)) return [];
      return value.map(function(item) {
        const status = item.status === "done" ? "done" : "open";
        return {
          id: item.id || createId(),
          ruleId: item.ruleId || "",
          ruleText: String(item.ruleText || item.text || "").trim(),
          challengeId: item.challengeId || "",
          challengeLetter: challengeLetters.includes(item.challengeLetter || item.letter) ? (item.challengeLetter || item.letter) : "",
          challengeName: String(item.challengeName || "").trim(),
          multiplier: ruleMultiplier(item),
          resultText: String(item.resultText || "").trim(),
          createdAt: item.createdAt || new Date().toISOString(),
          dueAt: item.dueAt || new Date(Date.now() + 86400000).toISOString(),
          completedAt: item.completedAt || null,
          status: status
        };
      }).filter(function(item) { return item.ruleText || item.challengeName || item.resultText; });
    }

    function ruleCategoryText(category) {
      if (category === "A") return "Yengil";
      if (category === "B") return "Jiddiy";
      return "Qat'iy";
    }

    function ruleCategoryHint(category) {
      if (category === "A") return "oddiy eslatma yoki kichik shart";
      if (category === "B") return "buzilsa ogohlantirish beradigan qoida";
      return "buzilsa jazo yoki qayta boshlashga sabab bo'ladigan qoida";
    }

    function rulesPreviewText(rules) {
      const count = normalizeRules(rules).length;
      return count ? count + " ta qoida" : "Hali qoida yo'q";
    }

    function defaultPenaltyAction(category) {
      if (category === "A") return "5 daqiqa tahlil yozish";
      if (category === "B") return "30 daqiqa foydali ish qilish";
      return "1 kun qat'iy tiklanish rejasi";
    }

    function penaltyPreviewText(rules) {
      const value = normalizePenaltyRules(rules);
      const filled = ["A", "B", "C"].filter(function(category) { return value[category]; }).length;
      return filled + " ta kategoriya";
    }

    function secondsBetween(from, to) {
      return Math.max(0, Math.floor((to.getTime() - from.getTime()) / 1000));
    }

    function compactDuration(totalSeconds) {
      const years = Math.floor(totalSeconds / 31536000);
      const days = Math.floor((totalSeconds % 31536000) / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      if (years > 0) return years + " yil, " + days + " kun";
      if (days > 0) return days + " kun, " + hours + " soat";
      if (hours > 0) return hours + " soat, " + minutes + " minut";
      return minutes + " minut";
    }

    function diffParts(from, to) {
      if (from > to) from = to;
      let years = to.getFullYear() - from.getFullYear();
      let months = to.getMonth() - from.getMonth();
      let days = to.getDate() - from.getDate();
      let hours = to.getHours() - from.getHours();
      let minutes = to.getMinutes() - from.getMinutes();
      let seconds = to.getSeconds() - from.getSeconds();
      if (seconds < 0) { seconds += 60; minutes -= 1; }
      if (minutes < 0) { minutes += 60; hours -= 1; }
      if (hours < 0) { hours += 24; days -= 1; }
      if (days < 0) { days += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); months -= 1; }
      if (months < 0) { months += 12; years -= 1; }
      return { years, months, days, hours, minutes, seconds };
    }

    function clearError() {
      els.formError.textContent = "";
      els.formError.classList.remove("visible");
    }

    function showError(message) {
      els.formError.textContent = message;
      els.formError.classList.add("visible");
    }

    function renderList() {
      els.habitList.innerHTML = "";
      els.emptyState.style.display = habits.length ? "none" : "block";
      habits.forEach(function(habit) {
        const card = document.createElement("div");
        card.className = "habit-card" + (habit.id === selectedId ? " active" : "") + (habit.id === openMenuId ? " menu-open" : "");
        card.dataset.id = habit.id;
        setTheme(card, habit);

        const icon = document.createElement("span");
        icon.className = "habit-icon";
        renderIcon(icon, habit.icon);

        const mainButton = document.createElement("button");
        mainButton.type = "button";
        mainButton.className = "habit-main";

        const name = document.createElement("strong");
        name.textContent = habit.name;

        const since = document.createElement("span");
        since.textContent = habit.kind === "goal" && habit.endsAt ? "Maqsad muddati: " + formatDay(new Date(habit.endsAt)) : dateText(habit.type) + ": " + formatDate(new Date(habit.startedAt));

        const tagRow = document.createElement("div");
        tagRow.className = "tag-row";
        const kindTag = document.createElement("span");
        kindTag.className = "tag kind";
        kindTag.textContent = entryText(habit);
        const timeTag = document.createElement("span");
        timeTag.className = "tag info";
        timeTag.textContent = habit.kind === "goal" && habit.endsAt ? goalProgress(habit) + "%" : compactDuration(secondsBetween(new Date(habit.startedAt), new Date()));
        tagRow.append(kindTag, timeTag);

        mainButton.append(name, since, tagRow);
        mainButton.addEventListener("click", function() {
          selectedId = habit.id;
          openMenuId = null;
          saveHabits();
          renderAll();
        });

        const menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "habit-menu-trigger";
        menuButton.setAttribute("aria-label", habit.name + " menyusi");
        menuButton.textContent = "⋮";
        menuButton.addEventListener("click", function(event) {
          event.stopPropagation();
          openMenuId = openMenuId === habit.id ? null : habit.id;
          renderList();
        });

        const menu = document.createElement("div");
        menu.className = "habit-menu";
        const editItem = document.createElement("button");
        editItem.type = "button";
        editItem.textContent = "Tahrirlash";
        editItem.addEventListener("click", function(event) {
          event.stopPropagation();
          selectedId = habit.id;
          openMenuId = null;
          saveHabits();
          renderAll();
          openHabitForm(habit);
        });

        const deleteItem = document.createElement("button");
        deleteItem.type = "button";
        deleteItem.className = "danger-text";
        deleteItem.textContent = "O'chirish";
        deleteItem.addEventListener("click", function(event) {
          event.stopPropagation();
          deleteHabitById(habit.id);
        });
        menu.append(editItem, deleteItem);

        card.append(icon, mainButton, menuButton, menu);
        els.habitList.appendChild(card);
      });
      els.miniCount.textContent = habits.length + " ta";
    }

    function renderEmptyDetail() {
      els.selectedName.textContent = "Ro'yxat yo'q";
      els.dateLabel.textContent = "Boshlangan sana";
      els.startedLabel.textContent = "--.--.---- --:--";
      els.selectedReason.textContent = "Yangi odat yoki maqsad qo'shilganda bu yerda sabab ko'rinadi.";
      els.reasonPreview.textContent = "Hali sabab yo'q";
      renderRules([]);
      renderPenaltyJournal([]);
      els.years.textContent = "0";
      els.months.textContent = "0";
      els.days.textContent = "0";
      els.hours.textContent = "0";
      els.minutes.textContent = "0";
      els.seconds.textContent = "0";
      els.currentMetricLabel.textContent = "Hozirgi davomiylik";
      els.currentSummary.textContent = "0 minut";
      els.bestMetricLabel.textContent = "Eng uzun rekord";
      els.bestRecord.textContent = "Hali rekord yo'q";
      els.calendarGrid.innerHTML = "";
      els.calendarTitle.textContent = "Kalendar";
      els.calendarMonthLabel.textContent = monthName(calendarMonth);
      els.reportDate.textContent = "Hisobot yo'q";
      els.reportStatus.className = "status-pill";
      els.reportStatus.textContent = "Belgilanmagan";
      els.reportNote.textContent = "Yangi ro'yxat qo'shilgandan keyin kalendar ishlaydi.";
      els.doneStat.textContent = "0";
      els.missedStat.textContent = "0";
      els.successStat.textContent = "0%";
      els.goalRoad.classList.remove("visible");
      els.goalPath.innerHTML = "";
      els.goalProgressBar.style.width = "0%";
    }

    function renderSelected() {
      const habit = activeHabit();
      if (!habit) {
        renderEmptyDetail();
        return;
      }
      setSelectedTheme(habit);
      els.selectedName.textContent = habit.name;
      els.dateLabel.textContent = habit.kind === "goal" ? "Maqsad muddati" : dateText(habit.type);
      els.startedLabel.textContent = habit.kind === "goal" && habit.endsAt ? formatDay(new Date(habit.endsAt)) : formatDate(new Date(habit.startedAt));
      els.selectedReason.textContent = habit.reason || "Sabab hali yozilmagan.";
      els.reasonPreview.textContent = reasonPreviewText(habit.reason);
      renderRules(habit.rules);
      renderPenaltyJournal(habit.penaltyJournal);
      const reasonTitle = els.reasonMenu.querySelector("summary span:first-child");
      if (reasonTitle) reasonTitle.textContent = habit.kind === "goal" ? "Maqsad sababi" : "Odat boshlash sababi";
      const calendarTitleText = habit.kind === "goal" ? "Maqsad kalendari" : "Odat kalendari";
      els.calendarTitle.textContent = calendarTitleText;
      els.calendarSummaryTitle.textContent = calendarTitleText;
      els.currentMetricLabel.textContent = habit.kind === "goal" ? "Maqsadgacha qolgan vaqt" : "Hozirgi davomiylik";
      els.bestMetricLabel.textContent = habit.kind === "goal" ? "Maqsad holati" : "Eng uzun rekord";
      els.reasonMenu.open = false;
      els.rulesMenu.open = true;
      els.penaltyJournalMenu.open = false;
      els.calendarMenu.open = true;

      renderHistoryList();
      renderCalendar();
    }

    function renderRules(rules) {
      const normalized = normalizeRules(rules);
      els.rulesPreview.textContent = rulesPreviewText(normalized);
      els.rulesList.innerHTML = "";
      if (!normalized.length) {
        const empty = document.createElement("div");
        empty.className = "empty-rules";
        empty.textContent = "Hali qonun-qoida yozilmagan.";
        els.rulesList.appendChild(empty);
        return;
      }
      normalized.forEach(function(rule, index) {
        const challenge = challengeForRule(rule);
        const letter = ruleChallengeLetter(rule) || "?";
        const row = document.createElement("div");
        row.className = "rule-card challenge-rule";
        applyChallengePalette(row, letter);

        const text = document.createElement("div");
        text.className = "rule-text";
        const order = document.createElement("strong");
        order.textContent = (index + 1) + " - qoida";
        const content = document.createElement("span");
        content.textContent = rule.text;
        const result = document.createElement("small");
        result.className = "rule-result";
        result.textContent = (challenge ? challenge.name + " | " : "") + challengeRuleResult(rule);
        text.append(order, content, result);

        const badge = document.createElement("span");
        badge.className = "rule-badge";
        badge.textContent = letter;
        badge.title = challenge ? challenge.name : "Chelenj tanlanmagan";
        applyChallengePalette(badge, letter);

        const breakBtn = document.createElement("button");
        breakBtn.type = "button";
        breakBtn.className = "rule-break-button";
        breakBtn.textContent = "Qoida buzildi";
        breakBtn.addEventListener("click", function() {
          addPenaltyFromRule(rule);
        });

        const aside = document.createElement("div");
        aside.className = "rule-side";
        aside.append(badge, breakBtn);

        row.append(text, aside);
        els.rulesList.appendChild(row);
      });
    }

    function penaltyJournalPreviewText(items) {
      const normalized = normalizePenaltyJournal(items);
      const open = normalized.filter(function(item) { return item.status !== "done"; }).length;
      return open ? open + " ta ochiq" : "Ochiq jazo yo'q";
    }

    function penaltyDeadlineText(item) {
      if (item.status === "done") {
        return item.completedAt ? "Bajarildi: " + formatDate(new Date(item.completedAt)) : "Bajarildi";
      }
      const now = new Date();
      const due = new Date(item.dueAt);
      if (due < now) return "Muddat o'tdi: " + formatDate(due);
      return "Qoldi: " + compactDuration(secondsBetween(now, due)) + " | " + formatDate(due);
    }

    function renderPenaltyJournal(items) {
      const normalized = normalizePenaltyJournal(items);
      els.penaltyJournalPreview.textContent = penaltyJournalPreviewText(normalized);
      els.penaltyJournalList.innerHTML = "";
      if (!normalized.length) {
        const empty = document.createElement("div");
        empty.className = "empty-rules";
        empty.textContent = "Hali jazo yozuvi yo'q.";
        els.penaltyJournalList.appendChild(empty);
        return;
      }
      normalized.slice().reverse().forEach(function(item) {
        const row = document.createElement("div");
        row.className = "penalty-journal-card" + (item.status === "done" ? " done" : "");
        applyChallengePalette(row, item.challengeLetter || "A");

        const badge = document.createElement("span");
        badge.className = "penalty-journal-badge";
        badge.textContent = item.challengeLetter || "?";
        applyChallengePalette(badge, item.challengeLetter || "A");

        const main = document.createElement("div");
        main.className = "penalty-journal-main";
        const title = document.createElement("strong");
        title.textContent = item.challengeName || "Chelenj";
        const rule = document.createElement("span");
        rule.textContent = item.ruleText || "Qoida matni yozilmagan.";
        const meta = document.createElement("small");
        meta.textContent = item.resultText + " | " + penaltyDeadlineText(item);
        main.append(title, rule, meta);

        const doneBtn = document.createElement("button");
        doneBtn.type = "button";
        doneBtn.className = "penalty-done-button";
        doneBtn.textContent = item.status === "done" ? "Bajarilgan" : "Bajarildi";
        doneBtn.disabled = item.status === "done";
        doneBtn.addEventListener("click", function() {
          completePenaltyJournalItem(item.id);
        });

        row.append(badge, main, doneBtn);
        els.penaltyJournalList.appendChild(row);
      });
    }

    function renderHistoryList() {
      const habit = activeHabit();
      els.historyList.innerHTML = "";
      if (!habit) {
        const empty = document.createElement("span");
        empty.textContent = "Hali odat yo'q.";
        els.historyList.appendChild(empty);
        return;
      }
      const items = (habit.history || []).slice().reverse();
      if (!items.length) {
        const empty = document.createElement("span");
        empty.textContent = "Hali tarix yo'q.";
        els.historyList.appendChild(empty);
        return;
      }
      items.forEach(function(item) {
        const row = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = formatDate(new Date(item.at));
        row.append(strong, document.createTextNode(" - " + item.note));
        els.historyList.appendChild(row);
      });
    }

    function monthName(date) {
      const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
      return monthNames[date.getMonth()] + " " + date.getFullYear();
    }

    function calendarEntry(habit, key) {
      if (!habit.calendar || typeof habit.calendar !== "object") habit.calendar = {};
      return habit.calendar[key] || null;
    }

    function statusText(status) {
      if (status === "done") return "Bajarildi";
      if (status === "missed") return "Bajarilmadi";
      return "Belgilanmagan";
    }

    function renderGoalRoad(habit) {
      if (!habit || habit.kind !== "goal") {
        els.goalRoad.classList.remove("visible");
        els.goalPath.innerHTML = "";
        els.goalProgressBar.style.width = "0%";
        return;
      }
      const percent = goalProgressValue(habit);
      const counts = calendarCounts(habit);
      const totalDays = goalTotalDays(habit);
      els.goalRoad.classList.add("visible");
      els.goalRoadLabel.textContent = counts.done + " / " + totalDays + " kun";
      els.goalProgressBar.style.width = percent + "%";
      els.goalPath.innerHTML = "";
      const dotCount = Math.min(14, Math.max(7, totalDays));
      const activeIndex = Math.min(dotCount - 2, Math.floor((percent / 100) * (dotCount - 1)));
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("span");
        dot.className = "goal-dot";
        if (i < activeIndex) dot.classList.add("done");
        if (i === activeIndex && percent < 100) dot.classList.add("current");
        if (i === dotCount - 1) dot.classList.add("finish");
        els.goalPath.appendChild(dot);
      }
    }

    function renderCalendarReport(key) {
      const habit = activeHabit();
      if (!habit) return;
      const counts = calendarCounts(habit);
      els.doneStat.textContent = counts.done;
      els.missedStat.textContent = counts.missed;
      els.successStat.textContent = habit.kind === "goal" ? goalProgress(habit) + "%" : (counts.marked ? Math.round((counts.done / counts.marked) * 100) + "%" : "0%");
      renderGoalRoad(habit);
      const entry = calendarEntry(habit, key);
      els.reportDate.textContent = formatDay(dateFromKey(key)) + " hisoboti";
      els.reportStatus.className = "status-pill" + (entry ? " " + entry.status : "");
      els.reportStatus.textContent = entry ? statusText(entry.status) : "Belgilanmagan";
      els.reportNote.textContent = entry && entry.note ? entry.note : "Bu kun uchun hali izoh yozilmagan.";
    }

    function renderCalendar() {
      const habit = activeHabit();
      if (!habit) return;
      if (!habit.calendar || typeof habit.calendar !== "object") habit.calendar = {};
      els.calendarGrid.innerHTML = "";
      els.calendarMonthLabel.textContent = monthName(calendarMonth);

      const first = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
      const startOffset = (first.getDay() + 6) % 7;
      const gridStart = new Date(first);
      gridStart.setDate(first.getDate() - startOffset);
      const today = new Date();

      for (let i = 0; i < 42; i++) {
        const date = new Date(gridStart);
        date.setDate(gridStart.getDate() + i);
        const key = dateKey(date);
        const entry = calendarEntry(habit, key);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "calendar-day";
        if (date.getMonth() !== calendarMonth.getMonth()) button.classList.add("muted");
        const isFuture = date > new Date(today.getFullYear(), today.getMonth(), today.getDate());
        if (sameDay(date, today)) button.classList.add("today");
        if (isFuture) button.classList.add("future");
        if (entry && entry.status) button.classList.add(entry.status);
        button.setAttribute("aria-label", formatDay(date) + " " + statusText(entry && entry.status));

        const number = document.createElement("span");
        number.className = "day-number";
        number.textContent = date.getDate();
        const mark = document.createElement("span");
        mark.className = "day-mark";
        mark.textContent = entry ? (entry.status === "done" ? "✓" : "×") : "";
        button.append(number, mark);
        if (!isFuture) button.addEventListener("click", function() { openDayDialog(key); });
        els.calendarGrid.appendChild(button);
      }

      renderCalendarReport(selectedCalendarDate);
    }

    function setDayStatus(status) {
      editingDayStatus = status;
      els.dayDoneBtn.classList.toggle("active", status === "done");
      els.dayMissedBtn.classList.toggle("active", status === "missed");
    }

    function openDayDialog(key) {
      selectedCalendarDate = key;
      editingDayKey = key;
      const habit = activeHabit();
      if (!habit) return;
      const entry = calendarEntry(habit, key);
      const date = dateFromKey(key);
      els.dayDialogTitle.textContent = formatDay(date) + " hisoboti";
      els.dayDialogHint.textContent = habit.name + " uchun kunlik belgi va izoh.";
      els.dayNoteInput.value = entry && entry.note ? entry.note : "";
      setDayStatus(entry && entry.status ? entry.status : "done");
      renderCalendarReport(key);
      els.dayDialog.showModal();
    }

    function closeDayDialog() {
      editingDayKey = null;
      els.dayDialog.close();
    }

    function saveDayEntry() {
      const habit = activeHabit();
      if (!habit || !editingDayKey) return;
      if (!habit.calendar || typeof habit.calendar !== "object") habit.calendar = {};
      const note = els.dayNoteInput.value.trim();
      habit.calendar[editingDayKey] = {
        status: editingDayStatus,
        note: note,
        updatedAt: new Date().toISOString()
      };
      addHistory(habit, formatDay(dateFromKey(editingDayKey)) + " - " + statusText(editingDayStatus) + (note ? ": " + note : "."));
      selectedCalendarDate = editingDayKey;
      saveHabits();
      closeDayDialog();
      renderAll();
    }

    function renderDynamic() {
      const habit = activeHabit();
      if (!habit) { renderEmptyDetail(); return; }
      const started = new Date(habit.startedAt);
      const now = new Date();
      const target = habit.kind === "goal" && habit.endsAt ? new Date(habit.endsAt) : now;
      const timerFrom = habit.kind === "goal" && habit.endsAt ? now : started;
      const timerTo = habit.kind === "goal" && habit.endsAt ? target : now;
      const parts = diffParts(timerFrom, timerTo);
      const totalSeconds = habit.kind === "goal" && habit.endsAt ? secondsBetween(now, target) : secondsBetween(started, now);
      els.years.textContent = parts.years;
      els.months.textContent = parts.months;
      els.days.textContent = parts.days;
      els.hours.textContent = parts.hours;
      els.minutes.textContent = parts.minutes;
      els.seconds.textContent = parts.seconds;
      els.currentSummary.textContent = habit.kind === "goal" ? compactDuration(totalSeconds) : compactDuration(totalSeconds);
      els.bestRecord.textContent = habit.kind === "goal" && habit.endsAt ? goalProgress(habit) + "% bajarildi" : (habit.bestSeconds > 0 ? compactDuration(habit.bestSeconds) : compactDuration(totalSeconds));
      renderCalendarReport(selectedCalendarDate);
      els.habitList.querySelectorAll(".habit-card").forEach(function(card) {
        const item = habits.find(function(h) { return h.id === card.dataset.id; });
        const timeTag = card.querySelector(".tag.info");
        if (item && timeTag) timeTag.textContent = item.kind === "goal" && item.endsAt ? goalProgress(item) + "%" : compactDuration(secondsBetween(new Date(item.startedAt), now));
      });
      if (habit && els.penaltyJournalMenu && els.penaltyJournalMenu.open) {
        renderPenaltyJournal(habit.penaltyJournal);
      }
    }

    function renderAll() {
      renderList();
      renderSelected();
      renderDynamic();
    }

    function renderChoices() {
      els.colorChooser.innerHTML = "";
      els.colorChooser.className = "choice-grid" + (colorsExpanded ? " expanded" : "");
      const shownColors = colorsExpanded ? colors : colors.slice(0, 7);
      shownColors.forEach(function(item) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "color-choice" + (selectedColor === item.id ? " active" : "");
        button.style.setProperty("--choice-color", item.color);
        button.setAttribute("aria-label", item.id + " rang");
        const dot = document.createElement("span");
        dot.className = "color-dot";
        button.appendChild(dot);
        button.addEventListener("click", function() {
          selectedColor = item.id;
          renderChoices();
        });
        els.colorChooser.appendChild(button);
      });
      if (colors.length > 7) {
        const more = document.createElement("button");
        more.type = "button";
        more.className = "more-choice" + (colorsExpanded ? " open" : "");
        more.setAttribute("aria-label", colorsExpanded ? "Ranglarni yopish" : "Ko'proq ranglarni ochish");
        more.title = colorsExpanded ? "Kamroq" : "Ko'proq rang";
        more.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
        more.addEventListener("click", function() {
          colorsExpanded = !colorsExpanded;
          renderChoices();
        });
        els.colorChooser.appendChild(more);
      }

      els.iconChooser.innerHTML = "";
      els.iconChooser.className = "choice-grid icons" + (iconsExpanded ? " expanded" : "");
      const shownIcons = iconsExpanded ? icons : icons.slice(0, 9);
      shownIcons.forEach(function(item) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "icon-choice" + (selectedIconValue === item.id ? " active" : "");
        button.title = item.label;
        button.setAttribute("aria-label", item.label);
        button.innerHTML = iconMarkup(item.id);
        button.addEventListener("click", function() {
          selectedIconValue = item.id;
          renderChoices();
        });
        els.iconChooser.appendChild(button);
      });
      if (icons.length > 9) {
        const more = document.createElement("button");
        more.type = "button";
        more.className = "more-choice" + (iconsExpanded ? " open" : "");
        more.setAttribute("aria-label", iconsExpanded ? "Belgilarni yopish" : "Ko'proq belgilarni ochish");
        more.title = iconsExpanded ? "Kamroq" : "Ko'proq belgi";
        more.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
        more.addEventListener("click", function() {
          iconsExpanded = !iconsExpanded;
          renderChoices();
        });
        els.iconChooser.appendChild(more);
      }
    }

    function renderRuleEditor() {
      els.ruleEditorList.innerHTML = "";
      if (!editingRules.length) {
        const empty = document.createElement("div");
        empty.className = "rule-editor-empty";
        empty.textContent = "Qoida qo'shish uchun + tugmasini bosing.";
        els.ruleEditorList.appendChild(empty);
        return;
      }

      editingRules.forEach(function(rule, index) {
        const selectedChallenge = challengeForRule(rule) || challenges[0] || null;
        if (selectedChallenge && !rule.challengeId) {
          editingRules[index].challengeId = selectedChallenge.id;
          editingRules[index].challengeLetter = selectedChallenge.letter;
          editingRules[index].category = selectedChallenge.letter;
        }

        const row = document.createElement("div");
        row.className = "rule-editor-row";

        const input = document.createElement("textarea");
        input.className = "rule-text-input";
        input.value = rule.text || "";
        input.placeholder = (index + 1) + " - qoida matni";
        input.addEventListener("input", function() {
          editingRules[index].text = input.value;
        });

        const challengeSelect = document.createElement("select");
        challengeSelect.className = "rule-challenge-select";
        challengeSelect.disabled = !challenges.length;
        if (!challenges.length) {
          const option = document.createElement("option");
          option.textContent = "Avval chelenj yarating";
          option.value = "";
          challengeSelect.appendChild(option);
        } else {
          challenges.forEach(function(challenge) {
            const option = document.createElement("option");
            option.value = challenge.id;
            option.textContent = challenge.letter + " - " + challenge.name;
            challengeSelect.appendChild(option);
          });
          challengeSelect.value = selectedChallenge ? selectedChallenge.id : challenges[0].id;
        }
        challengeSelect.addEventListener("change", function() {
          const challenge = challenges.find(function(item) { return item.id === challengeSelect.value; });
          editingRules[index].challengeId = challenge ? challenge.id : "";
          editingRules[index].challengeLetter = challenge ? challenge.letter : "";
          editingRules[index].category = challenge ? challenge.letter : "";
          renderRuleEditor();
        });

        const multiplier = document.createElement("input");
        multiplier.className = "rule-multiplier";
        multiplier.type = "number";
        multiplier.min = "1";
        multiplier.max = "999";
        multiplier.value = ruleMultiplier(rule);
        multiplier.title = "Chelenj necha marta bajariladi";
        multiplier.addEventListener("input", function() {
          editingRules[index].multiplier = ruleMultiplier({ multiplier: multiplier.value });
          renderRuleEditor();
        });

        const result = document.createElement("div");
        result.className = "rule-result-preview";
        result.textContent = challengeRuleResult(editingRules[index]);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "rule-remove";
        remove.textContent = "x";
        remove.title = "Qoidani olib tashlash";
        remove.addEventListener("click", function() {
          editingRules.splice(index, 1);
          renderRuleEditor();
        });

        row.append(input, challengeSelect, multiplier, result, remove);
        els.ruleEditorList.appendChild(row);
      });
    }

    function addEditingRule() {
      const challenge = challenges[0] || null;
      editingRules.push({
        id: createId(),
        text: "",
        category: challenge ? challenge.letter : "",
        challengeId: challenge ? challenge.id : "",
        challengeLetter: challenge ? challenge.letter : "",
        multiplier: 1
      });
      renderRuleEditor();
    }

    function openRulesDialog(addBlankRule) {
      const habit = activeHabit();
      if (!habit) return;
      editingRules = normalizeRules(habit.rules);
      if (addBlankRule) {
        const challenge = challenges[0] || null;
        editingRules.push({
          id: createId(),
          text: "",
          category: challenge ? challenge.letter : "",
          challengeId: challenge ? challenge.id : "",
          challengeLetter: challenge ? challenge.letter : "",
          multiplier: 1
        });
      }
      renderRuleEditor();
      els.rulesDialog.showModal();
    }

    function closeRulesDialog() {
      editingRules = [];
      els.rulesDialog.close();
    }

    function saveRules() {
      const habit = activeHabit();
      if (!habit) return;
      habit.rules = formRules();
      addHistory(habit, "Qonun qoidalar yangilandi.");
      saveHabits();
      closeRulesDialog();
      renderAll();
    }

    function addRuleFromDetail() {
      openRulesDialog(true);
    }

    function formRules() {
      return normalizeRules(editingRules);
    }

    function setEntryMode(kind) {
      selectedEntryKind = kind;
      const isGoal = kind === "goal";
      els.habitModeBtn.classList.toggle("active", !isGoal);
      els.goalModeBtn.classList.toggle("active", isGoal);
      els.goalEndField.classList.toggle("hidden", !isGoal);
      els.formTitle.textContent = isGoal ? (editingId ? "Maqsadni tahrirlash" : "Yangi maqsad qo'shish") : (editingId ? "Odatni tahrirlash" : "Yangi odat qo'shish");
      els.formHint.textContent = isGoal ? "Maqsad nomi, boshlanish sanasi, tugash sanasi va sababini kiriting." : "Odat nomi, boshlangan sanasi, rangi, belgisi va sababini kiriting.";
      els.nameFieldLabel.textContent = isGoal ? "Maqsad nomi" : "Odat nomi";
      els.startDateLabel.textContent = isGoal ? "Maqsad boshlangan sana" : "Boshlangan sana";
      els.reasonInput.placeholder = isGoal ? "Nega bu maqsad sen uchun muhim?" : "Nega bu odatni boshlayapsiz yoki davom ettiryapsiz?";
      if (!editingId) els.saveBtn.textContent = isGoal ? "Maqsad qo'shish" : "Qo'shish";
    }

    function openHabitForm(habit) {
      clearError();
      if (habit) {
        editingId = habit.id;
        els.saveBtn.textContent = "Saqlash";
        selectedEntryKind = habit.kind || "habit";
        els.nameInput.value = habit.name;
        els.dateInput.value = toInputValue(new Date(habit.startedAt));
        els.goalEndInput.value = toInputValue(habit.endsAt ? new Date(habit.endsAt) : addDays(new Date(habit.startedAt), 30));
        els.reasonInput.value = habit.reason || "";
        selectedColor = habit.color || "teal";
        selectedIconValue = normalizeIcon(habit.icon, habit.name);
        colorsExpanded = !colors.slice(0, 7).some(function(item) { return item.id === selectedColor; });
        iconsExpanded = !icons.slice(0, 9).some(function(item) { return item.id === selectedIconValue; });
        setEntryMode(selectedEntryKind);
      } else {
        editingId = null;
        els.form.reset();
        selectedEntryKind = "habit";
        els.dateInput.value = toInputValue(new Date());
        els.goalEndInput.value = toInputValue(addDays(new Date(), 30));
        selectedColor = "teal";
        selectedIconValue = "check";
        colorsExpanded = false;
        iconsExpanded = false;
        setEntryMode(selectedEntryKind);
      }
      renderChoices();
      els.habitDialog.showModal();
    }

    function closeHabitForm() {
      editingId = null;
      clearError();
      els.habitDialog.close();
    }

    function addHistory(habit, note) {
      if (!Array.isArray(habit.history)) habit.history = [];
      habit.history.push({ at: new Date().toISOString(), note: note });
    }

    function addPenaltyFromRule(rule) {
      const habit = activeHabit();
      if (!habit || !rule) return;
      const challenge = challengeForRule(rule);
      const now = new Date();
      const dueAt = new Date(now.getTime() + challengePenaltyLimitMinutes(rule) * 60000);
      if (!Array.isArray(habit.penaltyJournal)) habit.penaltyJournal = [];
      habit.penaltyJournal.push({
        id: createId(),
        ruleId: rule.id || "",
        ruleText: rule.text || "",
        challengeId: challenge ? challenge.id : (rule.challengeId || ""),
        challengeLetter: challenge ? challenge.letter : ruleChallengeLetter(rule),
        challengeName: challenge ? challenge.name : "Chelenj topilmadi",
        multiplier: ruleMultiplier(rule),
        resultText: challengeRuleResult(rule),
        createdAt: now.toISOString(),
        dueAt: dueAt.toISOString(),
        completedAt: null,
        status: "open"
      });
      addHistory(habit, "Qoida buzildi: " + (rule.text || "Qoida") + ". Jazo jurnaliga qo'shildi.");
      saveHabits();
      renderAll();
      if (els.penaltyJournalMenu) els.penaltyJournalMenu.open = true;
    }

    function completePenaltyJournalItem(id) {
      const habit = activeHabit();
      if (!habit || !Array.isArray(habit.penaltyJournal)) return;
      const item = habit.penaltyJournal.find(function(entry) { return entry.id === id; });
      if (!item) return;
      item.status = "done";
      item.completedAt = new Date().toISOString();
      addHistory(habit, "Jazo bajarildi: " + (item.resultText || item.challengeName || "Chelenj") + ".");
      saveHabits();
      renderAll();
      if (els.penaltyJournalMenu) els.penaltyJournalMenu.open = true;
    }

    function handleSubmit(event) {
      event.preventDefault();
      clearError();
      const name = els.nameInput.value.trim();
      if (!name) {
        showError(selectedEntryKind === "goal" ? "Maqsad nomini kiriting." : "Odat nomini kiriting.");
        return;
      }
      if (selectedEntryKind === "goal") {
        const startDate = new Date(parseInputDate(els.dateInput.value));
        const endDate = new Date(parseInputDate(els.goalEndInput.value));
        if (endDate <= startDate) {
          showError("Maqsad tugash sanasi boshlanish sanasidan keyin bo'lishi kerak.");
          return;
        }
      }

      if (editingId) {
        const habit = habits.find(function(item) { return item.id === editingId; });
        if (!habit) return;
        habit.name = name;
        habit.kind = selectedEntryKind;
        habit.startedAt = parseInputDate(els.dateInput.value);
        habit.endsAt = selectedEntryKind === "goal" ? parseInputDate(els.goalEndInput.value) : null;
        habit.reason = els.reasonInput.value.trim();
        habit.color = selectedColor;
        habit.icon = selectedIconValue;
        addHistory(habit, entryText(habit) + " ma'lumotlari tahrirlandi.");
        selectedId = habit.id;
      } else {
        const habit = normalizeHabit({
          id: createId(),
          name: name,
          type: "start",
          kind: selectedEntryKind,
          startedAt: parseInputDate(els.dateInput.value),
          endsAt: selectedEntryKind === "goal" ? parseInputDate(els.goalEndInput.value) : null,
          reason: els.reasonInput.value.trim(),
          rules: [],
          penaltyJournal: [],
          color: selectedColor,
          icon: normalizeIcon(selectedIconValue, name),
          bestSeconds: 0,
          calendar: {},
          history: [{ at: new Date().toISOString(), note: (selectedEntryKind === "goal" ? "Maqsad qo'shildi." : "Odat qo'shildi.") }]
        }, habits.length);
        habits.push(habit);
        selectedId = habit.id;
      }

      saveHabits();
      closeHabitForm();
      renderAll();
    }

    function setDetailMenu(open) {
      detailMenuOpen = open;
      els.detailMenu.classList.toggle("open", open);
      els.detailMenuBtn.classList.toggle("open", open);
    }

    function toggleDetailMenu(event) {
      event.stopPropagation();
      setDetailMenu(!detailMenuOpen);
    }

    function openHistoryDialog() {
      setDetailMenu(false);
      renderHistoryList();
      els.historyDialog.showModal();
    }

    function clearHistory() {
      const habit = activeHabit();
      if (!habit) return;
      if (!window.confirm("Tanlangan odat tarixini tozalaysizmi?")) return;
      habit.history = [{ at: new Date().toISOString(), note: "Tarix tozalandi." }];
      saveHabits();
      renderHistoryList();
    }

    function restartHabit() {
      setDetailMenu(false);
      const habit = activeHabit();
      if (!habit) return;
      const now = new Date();
      const previousSeconds = secondsBetween(new Date(habit.startedAt), now);
      habit.bestSeconds = Math.max(habit.bestSeconds || 0, previousSeconds);
      habit.startedAt = now.toISOString();
      addHistory(habit, "Odat qayta boshlandi.");
      saveHabits();
      renderAll();
    }

    function breakHabit() {
      setDetailMenu(false);
      if (!activeHabit()) return;
      els.breakReason.value = "";
      els.breakDialog.showModal();
    }

    function confirmBreak() {
      const habit = activeHabit();
      if (!habit) return;
      const now = new Date();
      const previousSeconds = secondsBetween(new Date(habit.startedAt), now);
      const reason = els.breakReason.value.trim() || "Sabab yozilmadi.";
      habit.bestSeconds = Math.max(habit.bestSeconds || 0, previousSeconds);
      habit.startedAt = now.toISOString();
      addHistory(habit, "Buzildi: " + reason);
      saveHabits();
      renderAll();
    }

    function deleteHabitById(id) {
      if (!id) return;
      const habit = habits.find(function(item) { return item.id === id; });
      if (!habit) return;
      if (!window.confirm("\"" + habit.name + "\" odatini o'chirasizmi?")) return;
      habits = habits.filter(function(item) { return item.id !== id; });
      if (selectedId === id) selectedId = habits.length ? habits[0].id : "";
      if (editingId === id) editingId = null;
      openMenuId = null;
      saveHabits();
      renderAll();
    }

    function setWorkspaceView(view) {
      const isChallenges = view === "challenges";
      els.plansMenuBtn.classList.toggle("active", !isChallenges);
      els.challengesMenuBtn.classList.toggle("active", isChallenges);
      els.plansPanel.classList.toggle("hidden", isChallenges);
      els.challengesPanel.classList.toggle("hidden", !isChallenges);
      if (isChallenges) {
        renderChallengeAlphabet();
        renderChallenges();
      }
    }

    els.addHabitBtn.addEventListener("click", function() { openHabitForm(null); });
    els.plansMenuBtn.addEventListener("click", function() { setWorkspaceView("plans"); });
    els.challengesMenuBtn.addEventListener("click", function() { setWorkspaceView("challenges"); });
    els.openChallengeFormBtn.addEventListener("click", openNewChallengeForm);
    els.cancelChallengeBtn.addEventListener("click", closeChallengeForm);
    els.closeChallengeInfoDialog.addEventListener("click", function() { els.challengeInfoDialog.close(); });
    els.challengeForm.addEventListener("submit", handleChallengeSubmit);
    els.challengeMetricOptions.addEventListener("click", function(event) {
      const button = event.target.closest("button[data-metric]");
      if (!button) return;
      setChallengeMetric(button.dataset.metric);
    });
    els.addRuleBtn.addEventListener("click", addEditingRule);
    els.addRuleFromDetailBtn.addEventListener("click", addRuleFromDetail);
    els.saveRulesBtn.addEventListener("click", saveRules);
    els.cancelRulesBtn.addEventListener("click", closeRulesDialog);
    els.closeRulesDialog.addEventListener("click", closeRulesDialog);
    els.habitModeBtn.addEventListener("click", function() { setEntryMode("habit"); });
    els.goalModeBtn.addEventListener("click", function() { setEntryMode("goal"); });
    els.form.addEventListener("submit", handleSubmit);
    els.cancelBtn.addEventListener("click", closeHabitForm);
    els.closeHabitDialog.addEventListener("click", closeHabitForm);
    els.detailMenuBtn.addEventListener("click", toggleDetailMenu);
    els.restartMenuBtn.addEventListener("click", restartHabit);
    els.breakMenuBtn.addEventListener("click", breakHabit);
    els.historyMenuBtn.addEventListener("click", openHistoryDialog);
    els.closeHistoryDialog.addEventListener("click", function() { els.historyDialog.close(); });
    els.clearHistoryBtn.addEventListener("click", clearHistory);
    els.confirmBreak.addEventListener("click", confirmBreak);
    els.prevMonthBtn.addEventListener("click", function() {
      calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
      renderCalendar();
    });
    els.nextMonthBtn.addEventListener("click", function() {
      calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
      renderCalendar();
    });
    els.dayDoneBtn.addEventListener("click", function() { setDayStatus("done"); });
    els.dayMissedBtn.addEventListener("click", function() { setDayStatus("missed"); });
    els.closeDayDialog.addEventListener("click", closeDayDialog);
    els.saveDayBtn.addEventListener("click", saveDayEntry);

    document.addEventListener("click", function(event) {
      if (detailMenuOpen && !(event.target.closest && event.target.closest(".detail-tools"))) {
        setDetailMenu(false);
      }
      if (!(event.target.closest && event.target.closest(".challenge-menu-wrap"))) {
        document.querySelectorAll(".challenge-card-menu.open").forEach(function(item) {
          item.classList.remove("open");
        });
      }
      if (!openMenuId) return;
      if (event.target.closest && event.target.closest(".habit-card")) return;
      openMenuId = null;
      renderList();
    });

    habits = habits.map(normalizeHabit);
    saveHabits();
    saveChallenges();
    els.challengeLetterInput.value = selectedChallengeLetter;
    setChallengeMetric(selectedChallengeMetric);
    setChallengeEditor(false);
    renderChallengeAlphabet();
    renderChallenges();
    renderAll();
    setInterval(renderDynamic, 1000);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async function() {
    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js?v=48');
      await registration.update();
    } catch (error) {}
  });
}

(function themeToggleSetup() {
  const THEME_KEY = "asadbek-2-0-theme";
  const root = document.documentElement;
  const button = document.getElementById("themeToggleBtn");

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
    }
  }

  let saved = "dark";
  try {
    saved = localStorage.getItem(THEME_KEY) || "dark";
  } catch (error) {}
  applyTheme(saved);

  if (button) {
    button.addEventListener("click", function() {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (error) {}
    });
  }
})();
