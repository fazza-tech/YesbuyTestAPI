exports.handler = async function (event, context) {
  const products = [
    {
      id: 1,
      title: "Men Blue & White Slim Fit Striped Casual Shirt",
      brand: "Mast & Harbour",
      price: 669,
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
