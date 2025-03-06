const nav = ["shlvar", "aknoc", "televizr", "kastum"];

const data = [
    {
      "id": 1,
      "title": "sunka",
      "price": 19.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "original",
      "image": "https://th.bing.com/th/id/OIP.NViD1HnYvvVrjSRNjUfh5QHaGV?rs=1&pid=ImgDetMain",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 2,
      "title": "mayka ",
      "price": 4,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "original",
      "image": "https://th.bing.com/th/id/OIF.zl4Q9Mk8GxdPRcBRLbWWNA?rs=1&pid=ImgDetMain",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 3,
      "title": "jaket",
      "price": 19,
      "description": "original",
      "category": "original",
      "image": "https://5.imimg.com/data5/SELLER/Default/2022/10/NV/WI/JS/161562894/mens-leather-jacet-1000x1000.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 4,
      "title": "bluska",
      "price": 17,
      "description": "original",
      "category": "men's clothing",
      "image": "https://th.bing.com/th/id/OIP.OQuAJxclHBzaSubcDW9JXwHaJ4?rs=1&pid=ImgDetMain",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 5,
      "title": "tevnoc",
      "price": 1,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "original",
      "image": "https://arshakyans.com/wp-content/uploads/2023/05/bomb-tevnoc-385x385.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 6,
      "title": "Matani ",
      "price": 118,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "original",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 7,
      "title": "matani",
      "price": 1000,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "original",
      "image": "https://th.bing.com/th/id/OIP.0fYeAAJiS-MLrGMu3i1XaAHaFj?rs=1&pid=ImgDetMain",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 8,
      "title": "2 hat matani",
      "price": 9,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "original",
      "image": "https://i.pinimg.com/originals/74/90/9b/74909b34f865ae5e9a270281ff575fa2.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 9,
      "title": "planshet",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "original",
      "image": "https://kattabozor.s3.eu-central-1.amazonaws.com/ri/2b240960ff34908bc617ad0fb7ed3c4dee9750911b1dd6c3e2cb2972c9037081_WnvL3t_640l.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 10,
      "title": "televizr",
      "price": 1010,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "original",
      "image": "https://th.bing.com/th/id/R.4e81205fa85fa441c76bc54a400d532a?rik=Tc3AxYTTbj7XmA&riu=http%3a%2f%2fwww.cumpar.net%2fwp-content%2fuploads%2f2016%2f05%2ftelevizoare-led-super-ieftine.jpg&ehk=dTw6W8t2Ie1%2fqZjSebMbwu1iMXldjE%2bOIeozt%2fR5l2E%3d&risl=&pid=ImgRaw&r=0",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 11,
      "title": "plestation 5",
      "price": 1011,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "original",
      "image": "https://assets.mspimages.in/wp-content/uploads/2021/07/sony-playstation-5-p.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },
    {
      "id": 12,
      "title": "mknik",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "original",
      "image": "https://tiendadegamers.com/wp-content/uploads/2020/09/61U5WlgRiPL._AC_SL1280_-876x1024.jpg",
      "rating": {
        "rate": 10,
        "count": 1000
      }
    },

 
  
]

export {nav, data}