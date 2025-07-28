exports.handler = async function (event, context) {
  const products = [
    {
      id: 1,
      title: "Men Blue & White Slim Fit Striped Casual Shirt",
      brand: "Mast & Harbour",
      price: 669,
      discount: 15, // 15% discount
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      subcategory: "Casual Shirts",
      fit: "Slim Fit",
      tags: ["shirt", "casual", "slim fit", "striped", "blue", "white"],
      images: [
        "https://assets.myntassets.com/w_1440,q_60,dpr_1,fl_progressive/assets/images/2024/AUGUST/12/iSJz5Njt_c1194cf91f2345f0aa27b4c49e12e0e3.jpg",
        "https://assets.myntassets.com/w_1496,q_60,dpr_1,fl_progressive/assets/images/2024/1/12/c2601e05-457e-46be-b9e1-0e02b836dc101705041567527-compressed_142539_0.jpg",
      ],
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Floral Printed Notch Collar Thread Work Cotton A-Line Kurta",
      brand: "FIORRA",
      price: 999,
      discount: 35, // example discount (you can adjust)
      description:
        "Elegantly designed floral printed cotton kurta with thread work. Perfect for casual and festive occasions.",
      category: "Topwear",
      subcategory: "Kurtas & Kurtis",
      gender: "Women",
      tags: [
        "kurta",
        "floral",
        "thread work",
        "notch collar",
        "cotton",
        "A-line",
        "women",
        "ethnic",
      ],
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/118a30f5-de7d-4f05-8964-f5e479ec1eea1713614141316FIORRAWomenEthnicMotifsPrintedThreadWorkKurta1.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5e2dd41b-3aeb-4a27-87d6-005887f5ea381713614141339FIORRAWomenEthnicMotifsPrintedThreadWorkKurta2.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5cdcd1df-3d4b-4ebb-a093-a5bf6b955a0d1713614141372FIORRAWomenEthnicMotifsPrintedThreadWorkKurta3.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/76015909-0837-4018-a8c1-5226ddb89aa51713614141361FIORRAWomenEthnicMotifsPrintedThreadWorkKurta5.jpg",
      ],
      rating: {
        rate: 4.3,
        count: 86,
      },
    },
    {
      id: 3,
      title: "Men Regular Fit Shirt",
      brand: "H&M",
      price: 1299,
      discount: 20, // 20% OFF
      description:
        "This men's regular fit shirt is ideal for casual outings or semi-formal occasions. Designed for comfort and a clean look.",
      category: "Top Wear",
      subcategory: "Shirts",
      gender: "Men",
      fit: "Regular Fit",
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/AXjfbN2w_dd42db875de04d8fafad2744c4e2be91.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/jp2Sqnui_5da4496ca73348aebe1a82e6e388a41a.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/Q7LOtVZB_6116ea9f86aa4f35a778479a2651e316.jpg",
      ],
      rating: {
        rate: 4.3,
        count: 85,
      },
    },
    {
      id: 4,
      title: "Women Solid Strappy Bodycon Midi Dress",
      brand: "Tokyo Talkies",
      price: 441,
      discount: 25, // 25% OFF
      description:
        "This solid strappy bodycon midi dress from Tokyo Talkies is a perfect pick for parties or evening wear. Elegant fit and lightweight fabric ensure style with comfort.",
      category: "Top Wear",
      subcategory: "Dresses",
      gender: "Women",
      fit: "Bodycon",
      length: "Midi",
      sleeve: "Sleeveless",
      neckline: "Strappy",
      images: [
        "https://assets.myntassets.com/w_1496,q_60,dpr_1,fl_progressive/assets/images/2025/JANUARY/10/8V5q9WGT_5d732321e31346409de347a3a089df64.jpg",
        "https://assets.myntassets.com/w_1496,q_60,dpr_1,fl_progressive/assets/images/2025/JANUARY/10/DgvYRgY1_bd091aa9eaaf47fd9649a1a47c313006.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_603,c_limit,fl_progressive/v1/assets/images/29838822/2024/5/30/bf7e15e3-5e45-48af-9335-7816141c36701717052136340Dresses1.jpg",
      ],
      rating: {
        rate: 4.2,
        count: 87,
      },
    },
    {
      id: 5,
      title: "Men Straight Fit Mid-Rise Light Fade Stretchable Jeans",
      brand: "The Roadster Life Co",
      price: 1199,
      discount: 30, // example discount
      description:
        "These straight-fit mid-rise jeans from The Roadster Life Co are designed with a lightly faded look and stretchable fabric for everyday comfort and mobility. Perfect for casual and semi-casual outfits.",
      category: "Bottom Wear",
      subcategory: "Jeans",
      gender: "Men",
      fit: "Straight Fit",
      rise: "Mid-Rise",
      fabric: "Stretchable Denim",
      fade: "Light Fade",
      closure: "Button and Zip",
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/d3f8474a-6900-4ea3-b3bf-5adad41216f11748935609643-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-1.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/4610abcb-fc96-47f9-b992-e80beeebf7351748935609602-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-3.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/d16692de-2170-45fb-a417-84fd7cd58d981748935609581-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-4.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/3ac75dc0-5d05-445b-b13d-70ecbdfdf9181748935609541-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-6.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/9976d7ab-8c2e-4256-a3f5-765f621b45881748935609520-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-7.jpg",
      ],
      rating: {
        rate: 4.3,
        count: 102,
      },
    },
    {
      id: 6,
      title: "Men Textured Trousers",
      brand: "encore by INVICTUS",
      price: 1499,
      discount: 18, // example discount
      description:
        "Stylish men's textured trousers from encore by INVICTUS, designed for comfort and a smart casual look. Perfect for office wear or semi-formal occasions.",
      category: "Bottom Wear",
      subcategory: "Trousers",
      gender: "Men",
      fabric: "Textured",
      fit: "Regular Fit",
      closure: "Button and Zip",
      tags: [
        "trousers",
        "textured",
        "men",
        "formal",
        "smart casual",
        "encore by INVICTUS",
      ],
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/6e383063-6362-48f4-ae05-e86b60755c5c1737629257378-encore-by-INVICTUS-Men-Trousers-7221737629256790-2.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30750805/2025/1/23/f1be0c05-10ff-4536-93b9-ebd2e9849f621737629257406-encore-by-INVICTUS-Men-Trousers-7221737629256790-1.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/45cd50fb-488c-44ee-a86f-30644a97f8431737629257323-encore-by-INVICTUS-Men-Trousers-7221737629256790-4.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/3034c030-a207-4eee-b066-854acdf9ce1d1737629257350-encore-by-INVICTUS-Men-Trousers-7221737629256790-3.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/63a478e1-2a07-4e6f-a5de-8decafb25f541737629257296-encore-by-INVICTUS-Men-Trousers-7221737629256790-5.jpg",
      ],
      rating: {
        rate: 4.1,
        count: 95,
      },
    },
  ];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow CORS for frontend use
    },
    body: JSON.stringify(products),
  };
};
