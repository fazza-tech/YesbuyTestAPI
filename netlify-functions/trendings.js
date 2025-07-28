exports.handler = async function (event, context) {
  const products = [
    {
      id: 1,
      title: "Men Blue & White Slim Fit Striped Casual Shirt",
      brand: "Mast & Harbour",
      price: 669,
      discount: 30, // 15% discount
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
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
      title: "Women Solid Strappy Bodycon Midi Dress",
      brand: "Tokyo Talkies",
      price: 441,
      discount: 25, // 10% discount
      description:
        "This solid strappy bodycon midi dress from Tokyo Talkies is a perfect pick for parties or evening wear. Elegant fit and lightweight fabric ensure style with comfort.",
      category: "women's clothing",
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
      id: 3,
      title: "Regular Fit Shirt",
      brand: "H&M",
      price: 799,
      discount: 20,
      description:
        "A comfortable and stylish regular fit shirt from H&M. Perfect for both casual and semi-formal occasions.",
      category: "men's clothing",
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/AXjfbN2w_dd42db875de04d8fafad2744c4e2be91.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/jp2Sqnui_5da4496ca73348aebe1a82e6e388a41a.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/2025/JANUARY/27/Q7LOtVZB_6116ea9f86aa4f35a778479a2651e316.jpg",
      ],
      rating: {
        rate: 4.4,
        count: 95,
      },
    },
    {
      id: 4,
      title: "Floral Printed Notch Collar Thread Work Cotton A-Line Kurta",
      brand: "FIORRA",
      price: 599,
      discount: 25,
      description:
        "Elegant A-line kurta with floral prints and detailed thread work. Designed with a notch collar and made from breathable cotton fabric for ethnic sophistication and comfort.",
      category: "women's clothing",
      images: [
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/118a30f5-de7d-4f05-8964-f5e479ec1eea1713614141316FIORRAWomenEthnicMotifsPrintedThreadWorkKurta1.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5e2dd41b-3aeb-4a27-87d6-005887f5ea381713614141339FIORRAWomenEthnicMotifsPrintedThreadWorkKurta2.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/5cdcd1df-3d4b-4ebb-a093-a5bf6b955a0d1713614141372FIORRAWomenEthnicMotifsPrintedThreadWorkKurta3.jpg",
        "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/29092082/2024/4/20/76015909-0837-4018-a8c1-5226ddb89aa51713614141361FIORRAWomenEthnicMotifsPrintedThreadWorkKurta5.jpg",
      ],
      rating: {
        rate: 4.3,
        count: 102,
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
