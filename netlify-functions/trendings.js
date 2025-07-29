exports.handler = async function (event, context) {
  const products = [
    {
      id: 1,
      title: "Men Blue & White Slim Fit Striped Casual Shirt",
      brand: "Mast & Harbour",
      price: 669,
      originalPrice: 787, // price / (1 - discountPercentage/100)
      discountPercentage: 15,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      gender: "men",
      category: "clothing",
      subcategory: "casual-shirts",
      type: "shirt",
      fit: "slim-fit",
      materials: ["cotton"],
      colors: ["blue", "white"],
      sizes: ["S", "M", "L", "XL"],
      offers: ["trending", "flash-sale"],
      tags: ["shirt", "casual", "slim-fit", "striped"],
      images: [
        {
          url: "https://i.imgur.com/Y54Bt8J.jpeg",
          altText: "Men's striped shirt front view",
        },
        {
          url: "https://i.imgur.com/SZPDSgy.jpeg",
          altText: "Men's striped shirt side view",
        },
        {
          url: "https://i.imgur.com/sJv4Xx0.jpeg",
          altText: "Men's striped shirt detail view",
        },
      ],
      rating: {
        average: 3.9,
        count: 120,
      },
      inventory: 45,
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-01-20T00:00:00Z",
    },
    {
      id: 2,
      title: "Floral Printed Notch Collar Thread Work Cotton A-Line Kurta",
      brand: "FIORRA",
      price: 999,
      originalPrice: 1537,
      discountPercentage: 35,
      description:
        "Elegantly designed floral printed cotton kurta with thread work. Perfect for casual and festive occasions.",
      gender: "women",
      category: "clothing",
      subcategory: "kurtas-kurtis",
      type: "kurta",
      fit: "a-line",
      materials: ["cotton"],
      colors: ["multi"],
      sizes: ["S", "M", "L"],
      offers: ["trending", "flash-sale"],
      tags: ["ethnic", "floral", "thread-work"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/118a30f5-de7d-4f05-8964-f5e479ec1eea1713614141316FIORRAWomenEthnicMotifsPrintedThreadWorkKurta1.jpg",
          altText: "Floral kurta front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5e2dd41b-3aeb-4a27-87d6-005887f5ea381713614141339FIORRAWomenEthnicMotifsPrintedThreadWorkKurta2.jpg",
          altText: "Floral kurta detail view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5cdcd1df-3d4b-4ebb-a093-a5bf6b955a0d1713614141372FIORRAWomenEthnicMotifsPrintedThreadWorkKurta3.jpg",
        },
      ],
      rating: {
        average: 4.3,
        count: 86,
      },
      inventory: 28,
      careInstructions: ["hand-wash", "dry-in-shade"],
    },
    {
      id: 3,
      title: "Men Regular Fit Shirt",
      brand: "H&M",
      price: 1299,
      originalPrice: 1624,
      discountPercentage: 20,
      description:
        "This men's regular fit shirt is ideal for casual outings or semi-formal occasions. Designed for comfort and a clean look.",
      gender: "men",
      category: "clothing",
      subcategory: "shirts",
      type: "shirt",
      fit: "regular-fit",
      materials: ["cotton"],
      colors: ["blue"],
      sizes: ["S", "M", "L", "XL"],
      offers: ["trending", "flash-sale"],
      tags: ["shirt", "casual", "regular-fit"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/AXjfbN2w_dd42db875de04d8fafad2744c4e2be91.jpg",
          altText: "Men's shirt front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/jp2Sqnui_5da4496ca73348aebe1a82e6e388a41a.jpg",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/Q7LOtVZB_6116ea9f86aa4f35a778479a2651e316.jpg",
        },
      ],
      rating: {
        average: 4.3,
        count: 85,
      },
      inventory: 32,
    },
    {
      id: 4,
      title: "Women Solid Strappy Bodycon Midi Dress",
      brand: "Tokyo Talkies",
      price: 441,
      originalPrice: 588,
      discountPercentage: 25,
      description:
        "This solid strappy bodycon midi dress from Tokyo Talkies is a perfect pick for parties or evening wear. Elegant fit and lightweight fabric ensure style with comfort.",
      gender: "women",
      category: "clothing",
      subcategory: "dresses",
      type: "dress",
      fit: "bodycon",
      length: "midi",
      sleeve: "sleeveless",
      neckline: "strappy",
      materials: ["polyester"],
      colors: ["black"],
      sizes: ["S", "M", "L"],
      offers: ["trending"],
      tags: ["dress", "party-wear", "bodycon"],
      images: [
        {
          url: "https://assets.myntassets.com/w_1496,q_60,dpr_1,fl_progressive/assets/images/2025/JANUARY/10/8V5q9WGT_5d732321e31346409de347a3a089df64.jpg",
          altText: "Women's dress front view",
        },
        {
          url: "https://assets.myntassets.com/w_1496,q_60,dpr_1,fl_progressive/assets/images/2025/JANUARY/10/DgvYRgY1_bd091aa9eaaf47fd9649a1a47c313006.jpg",
        },
        {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_603,c_limit,fl_progressive/v1/assets/images/29838822/2024/5/30/bf7e15e3-5e45-48af-9335-7816141c36701717052136340Dresses1.jpg",
        },
      ],
      rating: {
        average: 4.2,
        count: 87,
      },
      inventory: 18,
    },

    {
      id: 5,
      title: "Men Straight Fit Mid-Rise Light Fade Stretchable Jeans",
      brand: "The Roadster Life Co",
      price: 1199,
      originalPrice: 1713, // Calculated: 1199 / (1 - 0.30)
      discountPercentage: 30,
      description:
        "These straight-fit mid-rise jeans from The Roadster Life Co are designed with a lightly faded look and stretchable fabric for everyday comfort and mobility. Perfect for casual and semi-casual outfits.",
      gender: "men",
      category: "bottom-wear",
      subcategory: "jeans",
      type: "jeans",
      fit: "straight-fit",
      rise: "mid-rise",
      fabric: "stretchable-denim",
      fade: "light-fade",
      closure: "button-and-zip",
      materials: ["cotton", "elastane"],
      colors: ["blue", "black"],
      sizes: ["28", "30", "32", "34", "36"],
      offers: ["trending"],
      tags: ["jeans", "stretchable", "casual", "men"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/d3f8474a-6900-4ea3-b3bf-5adad41216f11748935609643-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-1.jpg",
          altText: "Men's jeans front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/4610abcb-fc96-47f9-b992-e80beeebf7351748935609602-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-3.jpg",
          altText: "Men's jeans side view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/32026597/2025/6/3/d16692de-2170-45fb-a417-84fd7cd58d981748935609581-The-Roadster-Life-Co-Men-Straight-Fit-Mid-Rise-Light-Fade-St-4.jpg",
          altText: "Men's jeans detail view",
        },
      ],
      rating: {
        average: 4.3,
        count: 102,
      },
      inventory: 56,
      careInstructions: ["machine-wash", "tumble-dry-low"],
      weight: {
        value: 400,
        unit: "grams",
      },
      features: ["stretchable fabric", "light fade wash", "5-pocket styling"],
      createdAt: "2024-06-03T00:00:00Z",
      updatedAt: "2024-06-10T00:00:00Z",
    },
    {
      id: 6,
      title: "Men Textured Trousers",
      brand: "encore by INVICTUS",
      price: 1499,
      originalPrice: 1828, // Calculated: 1499 / (1 - 0.18)
      discountPercentage: 18,
      description:
        "Stylish men's textured trousers from encore by INVICTUS, designed for comfort and a smart casual look. Perfect for office wear or semi-formal occasions.",
      gender: "men",
      category: "bottom-wear",
      subcategory: "trousers",
      type: "trousers",
      fit: "regular-fit",
      closure: "button-and-zip",
      materials: ["polyester", "cotton-blend"],
      texture: "textured",
      colors: ["black", "charcoal", "navy"],
      sizes: ["28", "30", "32", "34", "36", "38"],
      offers: ["trending"],
      tags: ["formal", "smart-casual", "office-wear", "textured"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/6e383063-6362-48f4-ae05-e86b60755c5c1737629257378-encore-by-INVICTUS-Men-Trousers-7221737629256790-2.jpg",
          altText: "Men's trousers front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30750805/2025/1/23/f1be0c05-10ff-4536-93b9-ebd2e9849f621737629257406-encore-by-INVICTUS-Men-Trousers-7221737629256790-1.jpg",
          altText: "Men's trousers side view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/30750805/2025/1/23/45cd50fb-488c-44ee-a86f-30644a97f8431737629257323-encore-by-INVICTUS-Men-Trousers-7221737629256790-4.jpg",
          altText: "Men's trousers detail view",
        },
      ],
      rating: {
        average: 4.1,
        count: 95,
      },
      inventory: 42,
      careInstructions: ["dry-clean", "iron-on-low"],
      features: ["wrinkle-resistant", "stretch-comfort", "multi-pocket-design"],
      occasion: ["office", "semi-formal", "business-casual"],
      weight: {
        value: 350,
        unit: "grams",
      },
      dimensions: {
        inseam: "32 inches",
        legOpening: "16 inches",
      },
      createdAt: "2025-01-15T00:00:00Z",
      updatedAt: "2025-01-20T00:00:00Z",
    },
    {
      id: 7,
      title: "Men Pure Cotton Chinos Trousers",
      brand: "Roadster",
      price: 1399,
      originalPrice: 1794, // Calculated: 1399 / (1 - 0.22)
      discountPercentage: 22,
      description:
        "Classic men's pure cotton chinos trousers by Roadster, offering comfort and a clean, versatile look. Ideal for casual and semi-formal wear.",
      gender: "men",
      category: "bottom-wear",
      subcategory: "trousers",
      type: "chinos",
      fit: "regular-fit",
      style: "chinos",
      closure: "button-and-zip",
      materials: ["100% cotton"],
      colors: ["khaki", "beige", "navy", "olive"],
      sizes: ["28", "30", "32", "34", "36", "38"],
      offers: ["trending", "flash-sale"],
      tags: ["casual", "versatile", "cotton", "smart-casual"],
      images: [
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/31319102/2025/2/24/dbe83483-7518-4650-a53d-0c601730e5dd1740386832739-Roadster-Men-Trousers-4501740386832181-1.jpg",
          altText: "Men's chinos front view",
        },
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/31319102/2025/2/24/bde759e9-0d89-4fbf-a2ac-e68a70cbb2ee1740386832693-Roadster-Men-Trousers-4501740386832181-3.jpg",
          altText: "Men's chinos side view",
        },
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/31319102/2025/2/24/d1460a62-f416-4a55-bd52-1bb9952526061740386832619-Roadster-Men-Trousers-4501740386832181-6.jpg",
          altText: "Men's chinos detail view",
        },
      ],
      rating: {
        average: 4.0,
        count: 110,
      },
      inventory: 58,
      careInstructions: ["machine-wash", "iron-medium"],
      features: [
        "100% pure cotton",
        "reinforced stitching",
        "multi-pocket design",
        "wrinkle-resistant",
      ],
      occasion: ["casual", "semi-formal", "office-casual"],
      weight: {
        value: 380,
        unit: "grams",
      },
      dimensions: {
        inseam: "32 inches",
        legOpening: "16.5 inches",
      },
      fabricWeight: "8 oz",
      createdAt: "2025-02-20T00:00:00Z",
      updatedAt: "2025-02-25T00:00:00Z",
    },
    {
      id: 8,
      title: "Men Solid Polo Collar T-shirt",
      brand: "HIGHLANDER",
      price: 799,
      originalPrice: 999, // Calculated: 799 / (1 - 0.20)
      discountPercentage: 20,
      description:
        "Classic men's solid polo collar T-shirt from HIGHLANDER, made for comfort and style. Perfect for casual outings and everyday wear.",
      gender: "men",
      category: "top-wear",
      subcategory: "t-shirts",
      type: "polo-t-shirt",
      fit: "regular-fit",
      style: "polo-collar",
      neck: "polo-collar",
      sleeve: "short-sleeve",
      materials: ["cotton", "polyester"],
      materialComposition: "70% cotton, 30% polyester",
      colors: ["black", "navy", "white", "grey"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      offers: ["trending", "flash-sale"],
      tags: ["casual", "polo", "everyday-wear", "solid-color"],
      images: [
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/2025/JUNE/3/y8kWwzYX_904ebfbd787d41e58e5b6f1f29f0515b.jpg",
          altText: "Men's polo t-shirt front view",
        },
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/2025/JUNE/3/f77Kerio_17a59c3dca464ac68bcb044d6b742369.jpg",
          altText: "Men's polo t-shirt side view",
        },
        {
          url: "https://assets.myntassets.com/w_2560,q_60,dpr_2,fl_progressive/assets/images/2025/JUNE/3/4N8LMMp5_44a0ae7925014761ae10fbb2d4ce4cc3.jpg",
          altText: "Men's polo t-shirt detail view",
        },
      ],
      rating: {
        average: 4.4,
        count: 134,
      },
      inventory: 87,
      careInstructions: ["machine-wash", "tumble-dry-low"],
      features: [
        "moisture-wicking",
        "breathable-fabric",
        "reinforced-collar",
        "tagless-neck",
      ],
      occasion: ["casual", "smart-casual", "everyday"],
      weight: {
        value: 180,
        unit: "grams",
      },
      fabricWeight: "160 GSM",
      pattern: "solid",
      createdAt: "2025-06-01T00:00:00Z",
      updatedAt: "2025-06-10T00:00:00Z",
    },
    {
      id: 9,
      title: "Women Floral Printed Crop Top with Palazzos",
      brand: "QUIERO",
      price: 999,
      originalPrice: 1427,
      discountPercentage: 30,
      description:
        "Stylish co-ord set with floral printed crop top and matching palazzos",
      gender: "women",
      category: "clothing",
      subcategory: "co-ords",
      type: "top-and-bottom-set",
      fit: "regular",
      materials: ["polyester"],
      colors: ["pink", "green"],
      sizes: ["S", "M", "L"],
      offers: ["buy-1-get-1", "trending"],
      tags: ["floral", "summer", "co-ords"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/25951630/2023/11/30/2a33ea71-de8d-4b3d-ad12-4cae1d33645c1701320429753-QUIERO-Women-Co-Ords-5531701320429198-2.jpg",
          altText: "Crop top and palazzos set front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/25951630/2023/11/30/7c6de091-f777-4e83-aedb-2ff7315ede1d1701320429734-QUIERO-Women-Co-Ords-5531701320429198-3.jpg",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/25951630/2023/11/30/913b44f8-8f0c-4310-a6e1-d1d45ff55a031701320429727-QUIERO-Women-Co-Ords-5531701320429198-4.jpg",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/25951630/2023/11/30/348bc85e-88b5-4db0-a8d5-2055f53d9b571701320429721-QUIERO-Women-Co-Ords-5531701320429198-5.jpg",
        },
      ],
      rating: {
        average: 4.1,
        count: 64,
      },
      inventory: 15,
      setIncluded: true,
      piecesInSet: 2,
    },
    {
      id: 10,
      title: "Floral Printed Oversized Shirt With Palazzos Co-Ords",
      brand: "SASSAFRAS",
      price: 1299, // Added missing price field
      originalPrice: 1699, // Calculated assuming 25% discount if price was missing
      discountPercentage: 25, // Added discount percentage
      description:
        "Stylish co-ord set featuring floral printed oversized shirt with matching palazzos. Perfect for summer outings and casual occasions.", // Added description
      gender: "women",
      category: "top-wear",
      subcategory: "co-ords",
      type: "co-ord-set",
      fit: {
        shirt: "oversized",
        palazzos: "wide-leg",
      },
      sleeve: "full-sleeve",
      length: "regular",
      materials: ["cotton", "viscose"],
      materialComposition: "70% cotton, 30% viscose",
      colors: ["multi-color"],
      print: "floral",
      sizes: ["XS", "S", "M", "L", "XL"],
      setIncludes: ["shirt", "palazzos"],
      piecesInSet: 2,
      offers: ["buy-1-get-1", "trending"],
      tags: ["summer-wear", "floral-print", "matching-set", "casual-outfit"],
      images: [
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/27558686/2024/2/13/9b455e15-7c08-415f-a95a-2634600b8a321707797790081Co-Ords1.jpg",
          altText: "Floral co-ord set front view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/27558686/2024/2/13/85626af2-4364-45ed-b533-eb40d93e11c91707797790113Co-Ords2.jpg",
          altText: "Floral co-ord set side view",
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/27558686/2024/2/13/db6e7901-0c41-44ac-9e2a-978a3e9dc3871707797790121Co-Ords3.jpg",
          altText: "Floral co-ord set detail view",
        },
      ],
      rating: {
        average: 4.2, // Added default rating
        count: 68, // Added rating count
      },
      inventory: 42, // Added inventory count
      careInstructions: ["hand-wash", "dry-in-shade"],
      features: [
        "matching-set",
        "breathable-fabric",
        "elastic-waist",
        "flowy-silhouette",
      ],
      occasion: ["casual", "day-out", "vacation"],
      
    },
    
    // Include all remaining products (5-8, 10-12) following the same structure
  ];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(products),
  };
};
