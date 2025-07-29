exports.handler = async function (event, context) {
  const products = [
    {
      id: 1,
      title: "Men Blue & White Slim Fit Striped Casual Shirt",
      brand: "Mast & Harbour",
      price: 669,
      originalPrice: 787, // price / (1 - discountPercentage/100)
      discountPercentage: 15,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
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
          altText: "Men's striped shirt front view"
        },
        {
          url: "https://i.imgur.com/SZPDSgy.jpeg",
          altText: "Men's striped shirt side view"
        },
        {
          url: "https://i.imgur.com/sJv4Xx0.jpeg",
          altText: "Men's striped shirt detail view"
        }
      ],
      rating: {
        average: 3.9,
        count: 120
      },
      inventory: 45,
      createdAt: "2024-01-15T00:00:00Z",
      updatedAt: "2024-01-20T00:00:00Z"
    },
    {
      id: 2,
      title: "Floral Printed Notch Collar Thread Work Cotton A-Line Kurta",
      brand: "FIORRA",
      price: 999,
      originalPrice: 1537,
      discountPercentage: 35,
      description: "Elegantly designed floral printed cotton kurta with thread work. Perfect for casual and festive occasions.",
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
          altText: "Floral kurta front view"
        },
        {
          url: "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5e2dd41b-3aeb-4a27-87d6-005887f5ea381713614141339FIORRAWomenEthnicMotifsPrintedThreadWorkKurta2.jpg",
          altText: "Floral kurta detail view"
        }
      ],
      rating: {
        average: 4.3,
        count: 86
      },
      inventory: 28,
      careInstructions: ["hand-wash", "dry-in-shade"]
    },
    {
      id: 3,
      title: "Men Regular Fit Shirt",
      brand: "H&M",
      price: 1299,
      originalPrice: 1624,
      discountPercentage: 20,
      description: "This men's regular fit shirt is ideal for casual outings or semi-formal occasions. Designed for comfort and a clean look.",
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
          altText: "Men's shirt front view"
        }
      ],
      rating: {
        average: 4.3,
        count: 85
      },
      inventory: 32
    },
    {
      id: 4,
      title: "Women Solid Strappy Bodycon Midi Dress",
      brand: "Tokyo Talkies",
      price: 441,
      originalPrice: 588,
      discountPercentage: 25,
      description: "This solid strappy bodycon midi dress from Tokyo Talkies is a perfect pick for parties or evening wear. Elegant fit and lightweight fabric ensure style with comfort.",
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
          altText: "Women's dress front view"
        }
      ],
      rating: {
        average: 4.2,
        count: 87
      },
      inventory: 18
    },
    // Continuing with all other products in the same standardized format...
    {
      id: 9,
      title: "Women Floral Printed Crop Top with Palazzos",
      brand: "QUIERO",
      price: 999,
      originalPrice: 1427,
      discountPercentage: 30,
      description: "Stylish co-ord set with floral printed crop top and matching palazzos",
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
          altText: "Crop top and palazzos set front view"
        }
      ],
      rating: {
        average: 4.1,
        count: 64
      },
      inventory: 15,
      setIncluded: true,
      piecesInSet: 2
    }
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