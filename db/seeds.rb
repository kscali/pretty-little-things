# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)


User.create!(first_name: "user", last_name: "demo", email: "user@demo.com", password: "123456")

Category.create!(name: "MAKEUP" )
Category.create!(name: "SKINCARE" )
Category.create!(name: "HAIR" )
Category.create!(name: "TOOLS & BRUSHES" )
Category.create!(name: "FRAGRANCE" )
Category.create!(name: "BATH & BODY" )

Brand.create!(name: "Patrick Ta", category_id: 1)
Brand.create!(name: "Kosas", category_id: 1)
Brand.create!(name: "Hourglass Cosmetics", category_id: 1)
Brand.create!(name: "Nars", category_id: 1)
Brand.create!(name: "Fenty Beauty by Rihanna", category_id: 1)
Brand.create!(name: "Tarte", category_id: 1)
Brand.create!(name: "Stila", category_id: 1)

Brand.create!(name: "Dermologica", category_id: 2)
Brand.create!(name: "Laneige", category_id: 2)
Brand.create!(name: "Estee Lauder", category_id: 2)
Brand.create!(name: "La Mer", category_id: 2)
Brand.create!(name: "Shisheido", category_id: 2)
Brand.create!(name: "Tatcha", category_id: 2)

Brand.create!(name: "Drybar", category_id: 3)
Brand.create!(name: "Seed Phytonutrients", category_id: 3)
Brand.create!(name: "Kerastase", category_id: 3)
Brand.create!(name: "Moroccanoil", category_id: 3)


Brand.create!(name: "Clarisonic", category_id: 4)
Brand.create!(name: "BeautyBlender", category_id: 4)
Brand.create!(name: "Refa", category_id: 4)
Brand.create!(name: "DermaFlash", category_id: 4)
Brand.create!(name: "Illuminage", category_id: 4)

Brand.create!(name: "Ellis Brooklyn", category_id: 5)
Brand.create!(name: "Chanel", category_id: 5)
Brand.create!(name: "Chloe", category_id: 5)
Brand.create!(name: "Dior", category_id: 5)
Brand.create!(name: "Gucci", category_id: 5)
Brand.create!(name: "Burberry", category_id: 5)
Brand.create!(name: "Victor&Rolf", category_id: 5)

Brand.create!(name: "Fresh", category_id: 6)
Brand.create!(name: "Jack Black", category_id: 6)
Brand.create!(name: "Yuni", category_id: 6)
Brand.create!(name: "Kopari", category_id: 6)
Brand.create!(name: "Rahua", category_id: 6)
Brand.create!(name: "Anastasia", category_id: 1)
Brand.create!(name: "Marc Jacobs", category_id: 5)
Brand.create!(name: "Dyson", category_id: 4)

Product.create!(
  name: 'Amazonian Clay 12-Hour Blush',
  color: ['Exposed - nude pink', 'Sensual - golden nude', 'Seduce - rosy nude', 'Risque - peachy nude', 'Dollface - light pink'],
  size: '0.2 oz/ 5.6 g',
  price: 29.00,
  p_type: 'Face',
  brand_id: 6,
  what_it_is: 'An award-winning powder blush that contains long-wearing Amazonian clay, so pigment looks freshly applied all day.',
  what_it_does: 'This super-soft, silky powder chock is full of true-color mineral pigment, letting you layer on your glow with no harsh lines or chalky buildup. Micronized Amazonian clay helps control oil and infuse moisture for balanced skin and seamless blending.',
  what_else_you_need_to_know: 'This product is dermatologist-tested and formulated without mineral oil, triclosan, and gluten.',
  how_to_use: ['Smile to find the apples of your cheeks.', 'Using a blush brush (sold separately), sweep on in the shape of a check.', 'Continue to blend into skin for the perfect rosy glow.'],
  ingredients: 'Talc, Mica, Polyethylene, Zinc Stearate, Tricaprylin, Caprylic/Capric Triglyceride, Beeswax/Cera Alba/Cire D’abeille, Peg-150 Distearate, Lanolin, Laureth-4, Chlorphenesin, Polysorbate 20, Potassium Sorbate, Kaolin, Tetrasodium Edta, Tocopherol, Ascorbyl Palmitate, Ultramarines (Ci 77007), Bismuth Oxychloride (Ci 77163), Iron Oxides (Ci 77491, Ci 77492, Ci 77499), Red 7 Lake (Ci 15850).',
  category_id: 1,
  image_url: ["https://www.sephora.com/productimages/sku/s1901008-main-grid.jpg", "https://www.sephora.com/productimages/sku/s1306786-main-zoom.jpg", "https://www.sephora.com/productimages/sku/s1306844+sw.jpg","https://www.sephora.com/productimages/sku/s1851435+sw.jpg", "https://www.sephora.com/productimages/sku/s1851443+sw.jpg", "https://www.sephora.com/productimages/sku/s1851450+sw.jpg", "https://www.sephora.com/productimages/sku/s1306802+sw.jpg" ],
  brand_name: "Tarte"
)

Product.create!(
  name: 'Tartelette™ In Bloom Clay Eyeshadow Palette',
  color: [""],
  size: '12 x 0.053 oz/ 1.5 g',
  price: 39.00,
  p_type: 'Eye',
  brand_id: 6,
  what_it_is: 'A bestselling eyeshadow palette with 12 matte and microshimmer shades that are sure to become your everyday basics.',
  what_it_does: 'This palette features the perfect combo of microshimmers and mattes in universally flattering, warm-toned lid, crease, and liner shades. The palette is arranged in rows for three easy looks to mix and match. This formula is infused with Amazonian clay for smooth blending and intense payoff without chalkiness.',
  what_else_you_need_to_know: 'This palette is dermatologist-tested and formulated without mineral oil, triclosan, and gluten.',
  how_to_use: ['Use your favorite shadow brush (sold separately) to create! your own custom looks for any occasion.', 'Follow the included step-by-step tartelette™ guide to create! smoldering, versatile looks.', 'Need a new eyeshadow brush to use with this palette? Try the rule bender double-ended eyeshadow brush (sold separately).'],
  ingredients: 'Amazonian Clay: Provides better, longer, truer wear. -Mineral Pigments: Soothe and soften skin.',
  category_id: 1,
  image_url: ["https://www.sephora.com/productimages/sku/s1775006-main-grid.jpg", "https://www.sephora.com/productimages/sku/s1775006-main-zoom.jpg"],
  brand_name: "Tarte"
)

Product.create!(
  name: 'The Water Cream',
  color: [""],
  size: ' 1.7 oz/ 50 mL',
  price: 68.00,
  p_type: 'Face',
  brand_id: 13,
  what_it_is: 'An oil-free, anti-aging water cream that releases a burst of skin-improving Japanese nutrients, powerful botanicals, and optimal hydration for poreless-looking skin.',
  what_it_does: 'It is solution for dryness, pores, and dullness and uneven texture',
  what_else_you_need_to_know: 'Beauty icons for over 300 years, geisha adopted Japanese wild rose to create! a refined, poreless-looking canvas underneath their makeup. The Water Cream has harnessed this potent botanical to honor the original makeup lover. This pure formula is noncomedogenic, non-irritating, non-sensitizing, dermatologist tested, and cruelty-free. It is formulated without mineral oil, synthetic fragrances, sulfate detergents, urea, DEA, or TEA.',
  how_to_use: ['Scoop a pearl-size amount of cream with the gold spoon.', 'Massage onto face, neck, and décolletage in upward strokes.', 'Use daily, morning and night.'],
  ingredients: 'Water, Saccharomyces/Camellia Sinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Dimethicone, Propanediol, Glycerin, Diglycerin, Diphenylsiloxy Phenyl Trimethicone, Gold, Belamcanda Chinensis Root Extract, Rosa Multiflora Fruit Extract, Houttuynia Cordata Extract, Sophora Angustifolia Root Extract, Sodium Hyaluronate, Lecithin, Pistacia Lentiscus (Mastic) Gum, Sodium Chloride, Sodium Citrate, Mica, Peg-9 Polydimethylsiloxyethyl Dimethicone, Dimethicone/Peg-10/15 Crosspolymer, Dimethicone/Phenyl Vinyl Dimethicone Crosspolymer, Disodium Edta, Tin Oxide, Titanium Dioxide, Butylene Glycol, Ethylhexylglycerin, Parfum/Fragrance, Alcohol, Phenoxyethanol. *Hadasei-3.',
  category_id: 2,
  image_url: ["https://www.sephora.com/productimages/sku/s1932920-main-grid.jpg", "https://www.sephora.com/productimages/product/p418218-av-01-zoom.jpg"],
  brand_name: "Tatcha" 
  )

  Product.create!(
  name: 'Stay All Day® Waterproof Liquid Eye Liner',
  color: ['Black - jet black', 'Dark Brown - chocolate brown', 'Alloy - rich steel-charcoal'],
  size: '0.016 oz/ 0.5 mL',
  price: 22.00,
  p_type: 'Eye',
  brand_id: 7,
  what_it_is: 'An easy-application, waterproof liquid liner that stays on all day and night.',
  what_it_does: 'This easy-glide, quick-dry precision liner stays in place until you say when—no smudges, feathering, or running. The thin, marker-like tip is easy to use, even for the beauty beginner, and delivers any look—from a thin line to a bold, dramatic stroke. It goes on smoothly without skipping, smudging, or pulling, and lasts all day.',
  what_else_you_need_to_know: "Eyeliner",
  how_to_use: ["Shake well before use.", "Before lining, pull gently on the upper corner of the eye area to stretch and smooth the area. This will make it easier to line and eliminate bleeding.", "Apply the liner as close to the lashes as possible. In order to avoid a gap between the lashes and the lining, try painting the liner into the lashes using small, feathering strokes.", "Store horizontally for best performance."],
  ingredients: "Water, Ammonium Styrene/Acrylates Copolymer, Butylene Glycol, Alcohol, Beheneth-30, Acrylates/Octylacrylamide Copolymer, Phenoxyethanol, Methylparaben, Polyglyceryl-3 Disiloxane Dimethicone, Propylparaben, Sodium Hydroxide, Disodium EDTA, Sodium Benzoate. (+/-) Black 2 (CI 77266) (Nano).",
  category_id: 1,
  image_url: ["https://www.sephora.com/productimages/sku/s1221084-main-grid.jpg" , "https://www.sephora.com/productimages/sku/s1221084-main-zoom.jpg", "https://www.sephora.com/productimages/sku/s1221084+sw.jpg", "https://www.sephora.com/productimages/sku/s1312719+sw.jpg","https://www.sephora.com/productimages/sku/s1346725+sw.jpg"],
  brand_name: "Stila"
)

Product.create!(
  name: 'Hydrating Shampoo',
  color: [""],
  size: '8.5 oz/ 250 mL',
  price: 23.00,
  p_type: 'Hair',
  brand_id: 17,
  what_it_is: 'A hydrating, daily shampoo that’s infused with antioxidant-rich argan oil and replenishing vitamins to nourished hair.',
  what_it_does: "Provides moisture to the hair.",
  what_else_you_need_to_know: 'This product is free of phosphate and is color-safe.',
  how_to_use: ['Massage throughout wet hair and scalp, adding more water to activate a rich lather from the concentrated formula.', 'Rinse thoroughly until water runs clear.', 'Repeat as necessary.'],
  ingredients: 'Water, Dimethicone, Cetearyl Alcohol, Fragrance, Behentrimonium Chloride, Acetamide Mea, Canola Oil, Argania Spinosa (Argan) Kernel Oil, Hydrolyzed Vegetable Protein Pg-Propyl Silanetriol, Nasturtium Officinale Leaf Extract, Allium Sativum Bulb Extract, Lamium Album Flower Extract, Pinus Sylvestris Bud Extract, Arctium Lappa Root Extract, Anthemis Nobelis Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hedera Helix (Ivy) Extract, Arnica Montana Flower Extract, Isopropyl Alcohol, Propylene Glycol, Caprylyl Glycol, Disodium Edta, Chlorphenesin, Phenoxyethanol, Potassium Sorbate, Alpha-Isomethylionone, Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde, Linalool, Butylphenyl Methylpropional.',
  category_id: 6,
  image_url: ["https://www.sephora.com/productimages/sku/s2030336-main-grid.jpg" ,"https://www.sephora.com/productimages/sku/s2030336-main-zoom.jpg"],
  brand_name: "Morrocanoil"
  )

  Product.create!(
  name: 'Flowerbomb',
  color: [""],
  size: '3.4 oz/ 100 mL',
  price: 165.00,
  p_type: 'Fragrance',
  brand_id: 7,
  what_it_is: "A light fragrance.",
  what_it_does: "Wonderful smell.",
  what_else_you_need_to_know: 'Fashion is a dream…Fragrance is a dream in a bottle—Viktor & Rolf',
  how_to_use: [""],
  ingredients: "N/a",
  category_id: 5,
  image_url: ["https://www.sephora.com/productimages/sku/s1377159-main-grid.jpg","https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg"],
  brand_name: "Viktor&Rolfe"
)

Product.create!(
  name: 'Sugar Advanced Therapy Lip Treatment',
  color: ['Translucent', 'Dream - sheer pink'],
  size: '0.15 oz/ 4.3 g',
  price: 26.00,
  p_type: 'Lip',
  brand_id: 30,
  what_it_is: 'A bestselling lip balm that hydrates for 24 hours and smooths the look of wrinkles for visibly fuller lips.',
  what_it_does: "Moisturizes your lips.",
  what_else_you_need_to_know: 'The age-defying lip treatment is proven to improve volume and definition (read: plumper pout), making it ideal for overnight or a base layer for lipstick. The sugar formula also contains sea fennel to help smooth fine lines, antioxidant-rich orange extract, and moisturizing hyaluronic acid spheres.',
  how_to_use: ['Apply to lips throughout the day and before bed.', 'For SPF protection, follow with your favorite Sugar Lip Treatment Sunscreen SPF 15.', 'Prep and prime with this lip treatment—use it as a base to keep lips hydrated under any long-wear lipstick, including matte and liquid lipstick.', 'Use this lip treatment as a recovery step after removing drying lipstick.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ["https://www.sephora.com/productimages/sku/s1378215-main-grid.jpg", "https://www.sephora.com/productimages/sku/s1378215-main-zoom.jpg","https://www.sephora.com/productimages/sku/s1378215+sw.jpg","https://www.sephora.com/productimages/sku/s2044907+sw.jpg" ],
  brand_name: "Fresh"
)

Product.create!(
  name: 'the original beautyblender',
  color: [''],
  size: 'limited edition canister',
  price: 20.00,
  p_type: 'Accessory',
  brand_id: 19,
  what_it_is: 'An edgeless, non-disposable, high-definition cosmetic sponge applicator. ',
  what_it_does: "The unique shape and exclusive material available only with beautyblender® ensures impeccable, streak-free application with minimum product waste. Use it with foundations, powders, and any other complexion product. Now, the award-winning makeup sponge is available in a fun, limited-edition canister—fit for any beauty queen. ",
  what_else_you_need_to_know: 'Beautyblender’s unique material is aqua-activated™. When wet, it expands to about twice its size and becomes super soft to create an even, smooth blend and bounce, returning to its original size when it air dries.', 
  how_to_use: ['beautyblender is easy to use: simply wet, squeeze, bounce your way to makeup perfection.', 'Wet beautyblender with water.', 'Squeeze out the excess liquid, using a towel if available.', 'Bounce foundation, powder, or any other complexion product across the face for flawless results.', 'Cleanse after each use to help maintain the integrity of the blender’s exclusive material.', 'Replace your beautyblender every three months, and never miss a bounce.'],
  ingredients: "Latex-Free Polyurethane Foam.",
  category_id: 4,
  image_url: ["https://www.sephora.com/productimages/sku/s2188258-main-grid.jpg", "https://www.sephora.com/productimages/sku/s2188258-main-zoom.jpg"],
  brand_name: "BeautyBlender"
)

Product.create!(
  name: 'DIPBROW gel',
  color: ['Dark Brown'],
  size: 'Matte Finsih',
  price: 18.00,
  p_type: 'Eye',
  brand_id: 35,
  what_it_is: 'A highly-pigmented brow gel with a long-lasting, waterproof formula for creating fuller-looking, defined brows—like DIPBROW® Pomade in a gel form.',
  what_it_does: "Create beautifully shaped brows that stay in place all day.",
  what_else_you_need_to_know: 'This waterproof formula lasts up to 12 hours. The unique applicator allows color to be applied directly onto the brow hairs, as well as the skin, for a natural-looking finish. It’s available in 11 shades that match Anastasia Beverly Hills’ DIPBROW® Pomade assortment.', 
  how_to_use: ['Brush DIPBROW® Gel from the arch and extend toward the tail.', "Fill from the front of the brow toward the arch using the remaining product on the wand.", "Brush in the direction as hair’s natural growth.", 'For fuller coverage, brush the gel through the brows a second time to create hair-like strokes.' ],
  ingredients: "Isododecane, Talc, Trimethylsiloxysilicate, Dimethicone, Beeswax, Vp/Eicosene Copolymer, Caprylyl Methicone, Trihydroxystearin, Triethylhexanoin, Trisiloxane, Silica, Disteardimonium Hectorite, Hdi/Trimethylol Hexyllactone Crosspolymer, Propylene Carbonate, Pentaerythrityl Tetra‐Di‐T‐Butyl Hydroxyhydrocinnamate. May Contain (+/-): Manganese Violet (Ci 77742), Ultramarines (Ci 77007), Carmine (Ci 75470), Yellow 5 Lake (Ci 19140), Iron Oxides (Ci 77491, Ci 77492, Ci 77499), Titanium Dioxide (Ci 77891).",
  category_id: 1,
  image_url: ["https://www.sephora.com/productimages/sku/s2182079-main-grid.jpg", 'https://www.sephora.com/productimages/sku/s2182079-main-zoom.jpg' , 'https://www.sephora.com/productimages/sku/s2182111+sw.jpg'],
  brand_name: "Anastasia"
)

Product.create!(
  name: 'Body Lava',
  color: ['Trophy Wife - lustrous hyper-metallic gold'],
  size: 'Matte Finsih',
  price: 59.00,
  p_type: 'Skin',
  brand_id: 5,
  what_it_is: 'A shimmering body liquid to veil skin in a high-shine finish that feels as dewy as it looks—now in a new shade, plus the two original, bestselling shades.',
  what_it_does: "Cruelty-free face and body illuminator",
  what_else_you_need_to_know: 'Limited-edition Body Lava is back. This body luminizer leaves skin feeling dewy, and has light-diffusing micropearls with a sheer tint of color designed for all skin tones. It’s now available in the iconic shade Trophy Wife, plus the original two bestselling shades—Who Needs Clothes?! and Brown Sugar.', 
  how_to_use: ['Blend onto clean, dry skin with the FENTY BEAUTY Face & Body Kabuki 160 (sold separately).', 'Apply to your body: Cheeks, arms, legs, shoulders, collarbone—anywhere you want to glisten.' ],
  ingredients: "Hydrogenated Polyisobutene, Isododecane, Ethylene/Propylene/Styrene Copolymer, Calcium Sodium Borosilicate, Synthetic Fluorphlogopite, Silica, Fragrance, Butylene/Ethylene/Styrene Copolymer, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Tin Oxide, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492).",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s2206100-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2206100-main-zoom.jpg' , 'https://www.sephora.com/productimages/sku/s2206100+sw.jpg'],
  brand_name: "Fenty"
)


Product.create!(
  name: 'Dewy Skin Cream',
  color: [""],
  size: ' 1.7 oz/ 50 mL',
  price: 68.00,
  p_type: 'Skin',
  brand_id: 13,
  what_it_is: 'A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.',
  what_it_does: 'It is solution for dryness, pores, and dullness and uneven texture',
  what_else_you_need_to_know: 'This cream intensely hydrates and seals in moisture, helping to replenish ceramides for a healthy bounce and instant luminosity. A fermentation of Japanese anti-aging superfoods—green tea, rice, and algae—helps skin to look its most beautiful at any age.',
  how_to_use: ['Scoop a pearl-size amount of cream with the gold spoon.', 'Massage onto face, neck, and décolletage in upward strokes.', 'Use daily, morning and night.'],
  ingredients: 'Water, Saccharomyces/Camellia Sinensis Leaf/Cladosiphon Okamuranus/Rice Ferment Filtrate*, Glycerin, Propanediol, Dimethicone, Squalane, Diisostearyl Malate, Behenyl Alcohol, Myristyl Myristate, Dipentaerythrityl Hexahydroxystearate, Bis-Diglyceryl Polyacyladipate-2, Tridecyl Trimellitate, Chondrus Crispus Extract, Betaphycus Gelatinum Extract, Eisenia Arborea Extract, Oryza Sativa (Rice) Bran Extract, Panax Ginseng Root Extract, Origanum Majorana Leaf Extract, Thymus Serpyllum Extract, Malva Sylvestris (Mallow) Flower Extract, Sodium Hyaluronate, Inositol, Gold, Sericin, Phytosteryl Macadamiate, Butylene Glycol, Beheneth-20, Sorbitan Tristearate, Disodium Edta, Dimethicone/Vinyl Dimethicone Crosspolymer, Sodium Acrylate/Acryloyldimethyltaurate/Dimethylacrylamide Crosspolymer, Caprylyl/Capryl Glucoside, Sorbitan Isostearate, Ethylhexylglycerin, Parfum/Fragrance, Alcohol, Phenoxyethanol, Mica (Ci 77019), Titanium Dioxide (Ci 77891), Tin Oxide (Ci 77861), Violet 2 (Ci 60725). *Hadasei-3.',
  category_id: 2,
  image_url: ["https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg", "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg"],
  brand_name: "Tatcha" 
  )

  Product.create!(
  name: 'Rose Sleeping Mask',
  color: [""],
  size: '1.18 oz/ 2 X 0.35 mL',
  price: 50.00,
  p_type: 'Skin',
  brand_id: 30,
  what_it_is: 'A two-step mask that delivers continuous hydration overnight, drenching skin with moisture and then locking it in for a supple, dewy look.',
  what_it_does: 'Damask rose extract: Hydrates, smooths and supports the skin’s natural moisture barrier.',
  what_else_you_need_to_know: 'This next-level sleeping mask is proven to give you the appearance of plumper, smoother skin after as little as one night of use. Start by replenishing moisture with a cooling gel essence powered by rosewater, damask rose extract, and hyaluronic acid. Then lock it in with a silky water-cream mask that uses time-release technology.',
  how_to_use: ['After cleansing, apply the amber-colored gel essence to your face and let it absorb.', 'Immediately follow with the silky water-cream mask.', 'Leave on overnight.'],
  ingredients: 'Water, Glycerin, Dicaprylyl Carbonate, Propanediol, Ammonium Acryloyldimethyltaurate/VPCopolymer, Dimethicone, PEG-60 Hydrogenated Castor Oil, Cucumis Sativus (Cucumber) FruitExtract, Oenothera Biennis (Evening Primrose) Root Extract, Rosa Damascena Flower Oil,Tocopheryl Acetate, Tocopherol, Butylene Glycol, Dimethicone/Vinyl Dimethicone Crosspolymer,Caprylyl Glycol, Polyacrylamide, C13-14 Isoparaffin, Caprylic/Capric Triglyceride, HydroxylatedLecithin, Trehalose, Urea, Laureth-7, Caramel, Serine, Betaine, Inositol, Taurine, Algin, BHT,Pentylene Glycol, Acacia Senegal Gum, Glyceryl Polyacrylate, Pullulan, SodiumHyaluronate, Citric Acid, Disodium Phosphate, Potassium Phosphate, Potassium Sorbate,Phenoxyethanol, Citronellol, Geraniol.',
  category_id: 2,
  image_url: ["https://www.sephora.com/productimages/sku/s2211167-main-grid.jpg", "https://www.sephora.com/productimages/sku/s2211167-main-zoom.jpg"],
  brand_name: "Fresh" 
  )

  Product.create!(
  name: 'Dior Lip Glow',
  color: ['Pink Glow - light pink'],
  size: '0.12 oz/ 3.52 g',
  price: 34.00,
  p_type: 'Lip',
  brand_id: 26,
  what_it_is: 'A sheer balm, with two brand-new finishes, that enhances your natural lip color while moisturizing and protecting lips.',
  what_it_does: 'The must-have universal balm from Dior Backstage, is now unveiling two new finishes—Matte and Holographic—alongside the original Glow. Inspired by the expert techniques of the Dior Backstage, Lip Glow is the first color reviver balm by Dior, combining the comfort of a balm with a natural flush of custom color.',
  what_else_you_need_to_know: 'A collection of makeup artist essentials, designed to suit all skin tones, used at the Dior runway shows, and inspired by the energy backstage.',
  how_to_use: ['Wear it alone, below, or on top of lipstick.', 'Apply alone for a natural flush of color.', 'Wear as a lip balm or primer.', 'Layer on top of lipstick to change the effect.', 'Top with Lip Maximizer (sold separately) for even more radiant results.'],
  ingredients: "Mango Butter: Ultra nourishing to soothe the lips.",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s2123065-main-grid.jpg','https://www.sephora.com/productimages/sku/s2123065-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1162650+sw.jpg' ],
  brand_name: "Dior"
)

Product.create!(
  name: 'Daisy',
  color: [''],
  size: '1.7 oz/ 50 mL',
  price: 84.00,
  p_type: 'Fragrance',
  brand_id: 36,
  what_it_is: "Charmingly simple with a signature quality, Daisy Marc Jacobs transports you to a place that’s optimistic, beautiful, and pure. The top of the fragrance is infused with succulent wild berries and soft white violets. At the heart, velvety jasmine warms to a dreamy dry-down of sensual sandalwood, for a romantic, lingering finish.",
  what_it_does: "Irresistibly feminine, Daisy Marc Jacobs is the captivating creation of master perfumer Alberto Morillas.",
  what_else_you_need_to_know: 'Whimsical white daisies abloom on its cap give the iconic Daisy bottle a retro-cool twist—as charming and unique as the woman who wears the fragrance.',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  ingredients: 'Strawberry, Violet Leaves, Jasmine',
  category_id: 5,
  image_url: ['https://www.sephora.com/productimages/sku/s1029941-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1029941-main-zoom.jpg'],
  brand_name: "Marc Jacobs"
)

Product.create!(
  name: 'Protective Primer',
  color: [""],
  size: '0.7 oz/ 20g',
  price: 52.00,
  p_type: 'Face',
  brand_id: 13,
  what_it_is: 'A velvety priming balm of pressed silk that smooths and makes makeup last longer while keeping it out of skin, helping to prevent clogged pores and breakouts.',
  what_it_does: 'This multitasking skin-protecting, makeup-perfecting primer is for face, eyes, and lips. Silk extracts feel nourishing on skin and diminish the look of pores, fines lines, and imperfections for the perfect canvas before makeup.',
  what_else_you_need_to_know: 'This product is noncomedogenic, non-irritating, non-sensitizing, dermatologist tested, cruelty-free, and formulated without synthetic fragrances, mineral oil, sulfate detergents, urea, DEA, or TEA.',
  how_to_use: ['Glide the spatula lightly across the top of balm.', 'A little goes a long way; use a rice-sized amount for the whole face.', 'With fingertips, dot the formula on your forehead, nose, chin, eyelids, and cheeks.', 'Gently massage the balm onto your face and allow the silk to melt into a second skin before applying foundation.'],
  ingredients: 'Hadasei-3: A complex of three anti-aging nutrients reveal soft, youthful-looking skin.',
  category_id: 2,
  image_url: ["https://www.sephora.com/productimages/sku/s1970235-main-grid.jpg", "https://www.sephora.com/productimages/sku/s1970235-main-zoom.jpg"],
  brand_name: "Tatcha" 
  )

  Product.create!(
  name: 'Dewy Skin Mist',
  color: [""],
  size: '0.7 oz/ 20g',
  price: 52.00,
  p_type: 'Skin',
  brand_id: 13,
  what_it_is: 'A velvety priming balm of pressed silk that smooths and makes makeup last longer while keeping it out of skin, helping to prevent clogged pores and breakouts.',
  what_it_does: 'This multitasking skin-protecting, makeup-perfecting primer is for face, eyes, and lips. Silk extracts feel nourishing on skin and diminish the look of pores, fines lines, and imperfections for the perfect canvas before makeup.',
  what_else_you_need_to_know: 'This product is noncomedogenic, non-irritating, non-sensitizing, dermatologist tested, cruelty-free, and formulated without synthetic fragrances, mineral oil, sulfate detergents, urea, DEA, or TEA.',
  how_to_use: ['Glide the spatula lightly across the top of balm.', 'A little goes a long way; use a rice-sized amount for the whole face.', 'With fingertips, dot the formula on your forehead, nose, chin, eyelids, and cheeks.', 'Gently massage the balm onto your face and allow the silk to melt into a second skin before applying foundation.'],
  ingredients: 'Hadasei-3: A complex of three anti-aging nutrients reveal soft, youthful-looking skin.',
  category_id: 2,
  image_url: ["https://www.sephora.com/productimages/sku/s1742337-main-grid.jpg", ""],
  brand_name: "Tatcha" 
  )

  Product.create!(
  name: 'Nomade Eau de Parfum',
  color: [''],
  size: '1.7 oz/ 50 mL',
  price: 105.00,
  p_type: 'Fragrance',
  brand_id: 25,
  what_it_is: 'Nomade Eau de Parfum is the essence of a free-spirited and confident women, taking inspiration from her experiences and encounters throughout the world and asserting who she is.',
  what_it_does: 'The intense mineral character of oakmoss is enveloped in the voluptuous softness of mirabelle plum. From this freshness emanates a bright floral note carried by freesia. Natural ingredients brought into focus by the perfumer Quentin Bisch, revealing accords as exhilarating as the feeling of escape they inspire.',
  what_else_you_need_to_know: 'Nomade evokes a vision of escape and openness to the world. A perfume that captures the spirit of Chloé, with its distinctive assertiveness and freedom, staying true to the woman who wears it.',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  ingredients: 'Alcohol Denat., Fragrance, Water, Ethylhexyl Methoxycinnamate, Limonene, Benzyl Salicylate, Linalool, Benzophenone-3, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Coumarin, Alpha-Isomethyl Ionone, Citronellol, Bht, Eugenol, Citral, Alcohol, Propylene Glycol, Hexyl Cinnamal, Tris(Tetramethylhydroxypiperidinol) Citrate, Farnesol, Isoeugenol, Benzyl Alcohol, Geraniol, Acrylates/Octylacrylamide Copolymer, Hydrolyzed Jojoba Esters, Fd&C Red No. 4 (Ci 14700), Ext. D&C Violet No. 2 (Ci 60730), Fd&C Yellow No. 5 (Ci 19140).',
  category_id: 5, 
  image_url: ['https://www.sephora.com/productimages/sku/s2037380-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2037380-main-zoom.jpg'],
  brand_name: "Chloe"
)

Product.create!(
  name: 'Daisy Dream',
  color: [''],
  size: '1.7 oz/ 50 mL',
  price: 84.00,
  p_type: 'Fragrance',
  brand_id: 36,
  what_it_is: 'Light and airy, Daisy Dream captivates with its delectably fruity and floral personality. From the first hints of blackberry, fresh grapefruit, and succulent pear, Daisy Dream draws you in with her easy charm and an irresistibly feminine mix of jasmine flower, lychee, and blue wisteria. The fragrance lingers on the skin, drying down to a dreamy finish of white woods, musk, and an elusive hint of coconut water.',
  what_it_does: 'The fragrance lingers on the skin, drying down to a dreamy finish of white woods, musk, and an elusive hint of coconut water.',
  what_else_you_need_to_know: 'Strewn with delicate daisies on its shoulders and cap, the clear-glass bottle reveals a sky-blue fragrance—the color of a dream.',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  ingredients: 'Blackberry, Jasmine Flower, White Woods',
  category_id: 5,
  image_url: ['https://www.sephora.com/productimages/sku/s1632751-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1632751-main-zoom.jpg'],
  brand_name: "Marc Jacobs"
)

Product.create!(
  name: 'WrinkleResist24 Eye Cream',
  color: [''],
  size: '0.51 oz / 15 mL',
  price: 60.00,
  p_type: 'Eye',
  brand_id: 12,
  what_it_is: 'A rich, fast-absorbing eye cream that visibly smooths and firms lids, crow’s feet, and under eye wrinkles.',
  what_it_does: 'This number one best-selling eye cream developed in Japan targets five types of wrinkles that appear around the delicate eye area, including lid creases, crow’s feet, and fine lines caused by puffiness. The breakthrough WrinkleResist24 technology—formulated with chlorella, mukurossi, and gambir extracts—visibly smooths and restores, while burnet extract visibly firms. Hydroxyproline supports collagen production and super bio-hyaluronic acid N instantly refreshes tired eyes by plumping the appearance skin with much-needed moisture minus any greasy residue.',
  what_else_you_need_to_know: 'This product is dermatologist and ophthalmologist tested.',
  how_to_use: ['Apply every morning and night as the final step of your skincare regimen.'],
  ingredients: 'Water, Hydrogenated Polydecene, Mineral Oil (Paraffinum Liquidum), Glycerin, Petrolatum, Butylene Glycol, Paraffin, Polyglyceryl-2 Diisostearate, Squalane, Glyceryl Oleate, Sodium Glutamate, Sodium Pca, Dipropylene Glycol, Beeswax (Cera Alba), Microcrystalline Wax (Cera Microcristallina), Polyethylene, Methylparaben, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Fragrance (Parfum), Trisodium Edta, Tocopheryl Acetate, Alcohol, Tocopherol, Iron Oxides (Ci 77492), Butylphenyl Methylpropional, Sapindus Mukurossi Peel Extract (Sapindus Mukurossi), Limonene, Linalool, Citronellol, Alpha-Isomethyl Ionone, Geraniol, Uncaria Gambir Extract (Uncaria Gambir), Benzyl Benzoate, Hexyl Cinnamal, Sanguisorba Officinalis Root Extract, Sodium Acetylated Hyaluronate, Hydroxyproline, Iron Oxides (Ci 77491), Chlorella Vulgaris Extract, Bht.',
  category_id: 2,
  image_url: ['https://www.sephora.com/productimages/sku/s1408202-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1408202-main-zoom.jpg'],
  brand_name: "Shisheido"
 )

 Product.create!(
  name: 'Airwrap™ Styler',
  color: [''],
  size: 'n/a',
  price: 549.00,
  p_type: 'Accessory',
  brand_id: 37,
  what_it_is: 'A styler that is engineered for multiple hair types and styles, featuring Coanda air styling and propelled by the Dyson digital motor so users can curl, wave, smooth, and dry with no extreme heat.',
  what_it_does: 'Attracts and wraps hair, using only air.',
  what_else_you_need_to_know: 'Two-year warranty – on parts and labor.',
  how_to_use: ['How to create waves and shape:', 'Begin with wet hair.', 'Attach Pre-styling dryer.', 'Dry to damp using Pre-styling dryer.', 'Attach the Round volumizing brush.', 'Select medium power and high heat.', 'Smooth the brush through to the ends of your hair.', 'Roll hair up from the ends to the roots.', 'Hold until your hair is dry.', 'Push the cold shot to set the curl.', 'Release the curl.', 'Repeat throughout your hair.'],
  ingredients: 'n/a',
  category_id: 4,
  image_url: ['https://www.sephora.com/productimages/sku/s2162493-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2162493-main-zoom.jpg'],
  brand_name: "Dyson"
  )

  Product.create!(
  name: 'Moroccanoil Treatment',
  color: [''],
  size: '1.7 oz/ 50 mL',
  price: 34.00,
  p_type: 'Hair',
  brand_id: 17,
  what_it_is: 'A versatile, argan oil-infused hair styler in a light formulation that can be used for conditioning, styling, and finishing.',
  what_it_does: 'Moroccanoil® Treatment detangles, speeds up drying time, and boosts shine. Featuring the iconic Moroccanoil scent, this treatment is non-greasy and fast-absorbing, and it improves your hair’s manageability and creates a softer texture.',
  what_else_you_need_to_know: 'This product is free of mineral oil.',
  how_to_use: ['Apply a small amount to damp hair from mid-length to ends as the foundation for all styling to prepare the hair for blow-drying. Blow-dry or style as usual.'],
  ingredients: 'Cyclomethicone, Dimethicone, Argania Spinosa (Argan) Kernel Oil, Fragrance, Linum Usitatissimum (Linseed) Seed Extract, CI 26100 (Red 17), CI 47000 (Yellow 11).',
  category_id: 3,
  image_url: ['https://www.sephora.com/productimages/sku/s1869478-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1869478-main-zoom.jpg'],
  brand_name: "Moroccanoil"
  )

  Product.create!(
  name: 'Color Shampoo',
  color: [''],
  size: '8.5 oz/ 250 mL',
  price: 26.00,
  p_type: 'Hair',
  brand_id: 17,
  what_it_is: 'A gentle shampoo that provides continuous repair benefits with each and every use, enabling hair to better retain color.',
  what_it_does: 'Continuously repairs on both a chemical and physical level using COLORLINK™ technology.',
  what_else_you_need_to_know: 'Part of the Moroccanoil® Color Complete Collection, this gentle, sulfate-free shampoo helps prevent haircolor loss by continuously repairing hair on both a physical and chemical level. The full regimen starts in the salon with the Moroccanoil ChromaTech Service.',
  how_to_use: ['Massage through wet hair and scalp. Because Color Continue Shampoo is a low-pH cleanser, foaming will be minimal.', 'Rinse thoroughly and repeat if needed. Follow with Moroccanoil® Color Continue Conditioner.'],
  ingredients: 'Water, Sodium Cocoamphoacetate, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Sodium Methyl Cocoyl Taurate, Cocamidopropyl Hydroxysultaine, Sodium Chloride, Decyl Glucoside, Acrylates/Aminoacrylates/C10-30 Alkyl Peg-20 Itaconate Copolymer, Lauryl Glucoside, Ppg-26-Buteth-26, Citric Acid, Parfum/Fragrance, Polyquaternium-113, Argania Spinosa (Argan) Kernel Oil, Carrageenan, Peg-40 Hydrogenated Castor Oil, Xanthan Gum, Glycerin, Silicone Quaternium-22, Hydroxyacetophenone, Caprylyl Glycol, Hydroxypropyl Gluconamide, Hydroxypropylammonium Gluconate, Dipropylene Glycol, Polyglyceryl-3 Caprate, Caprylic/Capric Triglyceride, Propylene Glycol, Trideceth-50, Algin, Coco-Glucoside, Palmitamidopropyltrimonium Chloride, Sorbitan Oleate, Chitosan, Guar Hydroxypropyltrimonium Chloride, Tartaric Acid, C12-13 Pareth-9, Sodium Lauroyl Lactylate, Ceramide Np, Ceramide Ap, Phytosphingosine, Cholesterol, Carbomer, Ethylhexylglycerin, Ceramide Eop, Benzyl Alcohol, Potassium Sorbate, Sodium Benzoate, Chlorphenesin, Phenoxyethanol, Alpha-Isomethyl Ionone, Linalool.',
  category_id: 3,
  image_url: ['https://www.sephora.com/productimages/sku/s2070290-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2070290-main-zoom.jpg'],
  brand_name: "Moroccanoil"
  )

  Product.create!(
  name: 'Color Conditioner',
  color: [''],
  size: '8.5 oz/ 250 mL',
  price: 27.00,
  p_type: 'Hair',
  brand_id: 17,
  what_it_is: 'A sulfate-free conditioner that supports hair’s natural repair processes, helping to prevent color loss.',
  what_it_does: 'Supports hair’s natural repair processes.',
  what_else_you_need_to_know: 'Part of the Moroccanoil® Color Complete Collection, this nourishing, sulfate-free conditioner uses COLORLINK™ technology to support hair’s natural repair processes, on both a physical and chemical level, helping it to retain color.',
  how_to_use: ['After shampooing, gently squeeze excess water from hair and apply conditioner from mid-length to ends.', 'Leave on for one to two minutes.'],
  ingredients: 'Water, Cetearyl Alcohol, Amodimethicone, Prunus Armeniaca (Apricot) Kernel Oil, Stearyl Alcohol, Citric Acid, Linoleamidopropyl Dimethylamine Dimer Dilinoleate, Hydroxypropyl Gluconamide, Hydroxypropylammonium Gluconate, Behenamidopropyl Dimethylamine, Fragrance, Polyquaternium-113, Argania Spinosa (Argan) Kernel Oil, Carrageenan, Quaternium-91, Cetrimonium Methosulfate, Hydroxyacetophenone, Stearamidopropyl Ethyldimonium Ethosulfate, Guar Hydroxypropyltrimonium Chloride, Dilinoleic Acid, Linoleamidopropyl Ethyldimonium Ethosulfate, Linoleamidopropyl PG-Dimonium Chloride Phosphate Dimethicone, Caprylyl Glycol, Dimethyl Lauramine, Acrylates/Aminoacrylates/C10-30 Alkyl Peg-20 Itaconate Copolymer, C12-13 Pareth-9, Caprylic/Capric Triglyceride, Propylene Glycol, Glycerin, Tribehenin, Dimethyl Lauramine Isostearate, Algin, Tartaric Acid, Chitosan, Coco-Glucoside, Sorbitan Oleate, Xanthan Gum, Trideceth-50, Isopropyl Alcohol, Sodium Lauroyl Lactylate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Carbomer, Ethylhexylglycerin, Ceramide EOP, Cetrimonium Chloride, Dehydroacetic Acid, Benzyl Alcohol, Sodium Benzoate, Chlorphenesin, Potassium Sorbate, Phenoxyethanol, Alpha-Isomethyl Ionone, Linalool.',
  category_id: 3,
  image_url: ['https://www.sephora.com/productimages/sku/s2070282-main-grid.jpg', ''],
  brand_name: "Moroccanoil"
  )

  Product.create!(
  name: 'Rouge Dior Lipstick',
  color: ['999 Matte - red'],
  size: '0.12 oz/ 3.4g',
  price: 37.00,
  p_type: 'Lip',
  brand_id: 26,
  what_it_is: 'A collection of couture, satin-to-matte lipsticks with highly pigmented finishes with lasting comfort.',
  what_it_does: 'Get 16 hours of comfort and elegant lip color—without streaking or drying out lips—with Rouge Dior Lipstick. This lasting lipstick features a myriad of colors in iconic reds, vibrant corals, alluring pinks, romantic rosewoods, and bold, unexpected mattes. It’s enriched with hydrating mango butter and aroelat samphira for its revitalizing action and hyaluronic acid spheres for their filling properties, while Decox creates a volumizing effect.',
  what_else_you_need_to_know: ' "I created this Rouge Dior collection so women can choose and change shades to express themselves."—Peter Philips, Creative and Image Director of Dior Make-up.',
  how_to_use: ['Start by lining the lips with Dior Contour.', 'For perfectly even results, then apply lipstick with the Backstage Lip Brush working from the center of the lips outwards.', 'For a bolder finish, apply the lipstick directly on the lips.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s1853548-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1853548-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1853548+sw.jpg' ],
  brand_name: "Dior"
)

 Product.create!(
  name: 'Rouge Dior Liquid',
  color: ['527 Reckless Matte - orangey beige'],
  size: '0.20 oz/ 6 mL',
  price: 37.00,
  p_type: 'Lip',
  brand_id: 26,
  what_it_is: 'A long-wear liquid lipstick with an innovative single-dose applicator wand.',
  what_it_does: 'Rouge Dior Liquid saturates lips with comfort and coverage, delivering up to 12 hours of wear. The luxurious formula is an expert blend of mineral wax, ultra-fine powders, and oils that gives strength to the color, while delivering a perfect glide over the lips and a long-wearing result. With a reservoir applicator that takes up and deposits just the right amount of product, its fine tip is the perfect tool for outlining the lips with precision. All three finishes—matte, metal, and satin—deliver intense, long-wearing color.',
  what_else_you_need_to_know: '"The idea was to create a Rouge Dior liquid lipstick in astonishing matte, satin, and metal finishes, and to develop a range of shades to suit any skin tone."—Peter Philips, Creative and Image Director for Dior Makeup.',
  how_to_use: ['Prepare lips with Dior Lip Sugar Scrub (sold separately).', 'Saturate entire lip with Rouge Liquid angled precision wand.', 'From matte to satin to metallic, layer finishes for a customized effect.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s1968577-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1968577-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1968577+sw.jpg'],
  brand_name: "Dior"
)

 Product.create!(
  name: 'Major Glow Lip Shine',
  color: ["She's An Influencer - pink pearl"],
  size: '0.23 oz/ 7 mL',
  price: 22.00,
  p_type: 'Lip',
  brand_id: 1,
  what_it_is: 'A universally-flattering, high-shine lip gloss with the cushion and slip of a lip balm for zero stickiness, all shine.',
  what_it_does: 'Advanced Gel System: Creates a glass-like finish that clings to the lips and prevents feathering.',
  what_else_you_need_to_know: 'An advanced gel system with suspended pearl creates the look of volume and fullness, while moisturizing oils and vitamin E envelop lips in comfort.',
  how_to_use: ['Apply generously onto lips, as desired.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s2221307-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2221315-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s2221315+sw.jpg'],
  brand_name: "Patrick Ta"
)

 Product.create!(
  name: 'Blush',
  color: ["Orgasm - peachy pink with shimmer"],
  size: '0.16 oz/ 4.8 g',
  price: 30.00,
  p_type: 'Face',
  brand_id: 4,
  what_it_is: 'What it is: An award-winning, pressed powder blush that delivers healthy-looking color to flatter any skin tone.',
  what_it_does: 'Silky, superfine micronized powder pigments in matte and shimmering shades ensure a seamless application.',
  what_else_you_need_to_know: ' These soft, buildable shades deliver a wide range of effects, from ulta-sheer to powerful pops of color. Each iconic shade features a subtle pink undertone for a natural-looking blush.',
  how_to_use: ['Use #20 Blush Brush (sold separately) and apply to the apples of the cheeks.', 'Sweep the excess across the hairline, bridge of the nose, and chin.'],
  ingredients: "Talc, Octyldodecyl Stearate, Octyldodecyl Stearoyl Stearate, Zinc Stearate, Tin Oxide, Caprylyl Glycol, Phenoxyethanol, [+/- (May Contain): Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci 77499), Manganese Violet (Ci 77742), Mica, Red 28 Lake (Ci 45410), Red 30 Lake (Ci 73360), Red 33 Lake (Ci 17200), Red 34 Lake (Ci 15880), Red 7 Lake (Ci 15850), Titanium Dioxide (Ci 77891), Yellow 5 Lake (Ci 19140)].",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s248930-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s248930-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s248930+sw.jpg'],
  brand_name: "Nars"
)

 Product.create!(
  name: 'Lip Gloss',
  color: ["Super Orgasm - peachy pink w/ gold glitter"],
  size: '0.18 oz/ 6 mL',
  price: 24.00,
  p_type: 'Lip',
  brand_id: 4,
  what_it_is: 'A moisturizing lip gloss for subtle, everyday glamour, enriched with nourishing ingredients for long-lasting, comfortable wear and a luminous shine.',
  what_it_does: 'Boasting sophisticated shine and stunning color, NARS Lip Gloss lavishes lips for subtle everyday glamour in a full spectrum of shades. The formula is enriched with nourishing ingredients for long-lasting, smooth, comfortable wear and a luminous shine. Potent sea lavender helps protect against the signs of aging and helps keep lips soft and supple while hydrating and smoothing the appearance of fine lines. The doe-foot applicator glides smoothly across lips with comfort and precision, leaving deep shine and shimmering color for comfortable non-sticky wear.',
  what_else_you_need_to_know: '"Lips are as sexy as it gets."—François Nars, Founder and Creative Director of NARS Cosmetics ',
  how_to_use: ['Apply to the center of the top and bottom lips for a sophisticated, light-reflecting effect to make lips appear fuller.'],
  ingredients: "Polybutene, Octyldodecanol, Hydrogenated Polyisobutene, Caprylic/Capric Triglyceride, Cera Alba, Olus, Bis-Diglyceryl Polyacyladipate-2, Hydrogenated Polycyclopentadiene, Isododecane, Phenoxyethanol, Ozokerite, Trihydroxystearin, Dipalmitoyl Hydroxyproline (Dipalmitoyl Hydroxyproline), Limonium Gerberi (Limonium Gerberi Extract), [+/- (May Contain): Mica, Ci 77891 (Titanium Dioxide), Ci 77491 (Iron Oxides), Ci 77492 (Iron Oxides), Ci 77499 (Iron Oxides), Ci 15850 (Red 7 Lake), Ci 19140 (Yellow 5 Lake)].",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s1596402-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1596402-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1596402+sw.jpg'],
  brand_name: "Nars"
)

Product.create!(
  name: 'Highlighting Powder',
  color: ["Fort De France - champagne"],
  size: '0.49 oz/ 13.9',
  price: 38.00,
  p_type: 'Face',
  brand_id: 4,
  what_it_is: 'A silky, lightweight highlighting powder in six scintillating shades that melt into skin for a dewy finish.',
  what_it_does: 'No glitter. Just glow. Highlighting hits a new high with NARS’s Highlighting Powder. This uncompromising innovation delivers next-level luminosity with Seamless Glow Technology—a blend of sheer powders and pearls to create second-skin luster that blends effortlessly. Its satin-soft, micro-spherical powder layers evenly and weightlessly, fusing onto all skin tones. Ultra-refined and soft-to-the-touch, new Highlighting Powder accentuates skin with buildable radiance and a seductive, dewy finish. Your features will go from delicately lit to strobed at the speed of light.',
  what_else_you_need_to_know: 'The Highlighting Powder collection was inspired by the beauty of sun-drenched islands and exotic sights. Luminous shades ranging from white-hot to rich bronze put every skin tone on the map. Transport your mind. Transform your skin. Bask in the radiance.',
  how_to_use: ['Use a dome-style brush to dust Highlighting Powder along the cheekbone and blend toward the hairline with emphasis on the high point of the cheek.'],
  ingredients: "Talc, Polymethylsilsesquioxane, Octyldodecyl Stearoyl Stearate, Dimethicone, Zinc Stearate, Dimethiconol Stearate, Tocopherol, Ascorbyl Palmitate, Lecithin, Glyceryl Stearate, Glyceryl Oleate, Polybutene, Tin Oxide, Hexylene Glycol, Citric Acid, Caprylyl Glycol, Phenoxyethanol, [+/- (May Contain): Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci 77499), Mica, Red 7 Lake (Ci 15850), Titanium Dioxide (Ci 77891), Yellow 5 Lake (Ci 19140)].",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s2058642-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2058642-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s2058642+sw.jpg'],
  brand_name: "Nars"
)

Product.create!(
  name: 'Blush Duo Mini',
  color: ["Hot Sand/ Orgasm"],
  size: '0.08 oz/ 2.5 g',
  price: 24.00,
  p_type: 'Face',
  brand_id: 4,
  what_it_is: 'A mini, limited-edition blush duo that delivers a healthy-looking, golden shimmer and a radiant flush of color.',
  what_it_does: 'Heighten the glow with this mini duo of award-winning Orgasm Blush paired with a radiant blush. Together, they help achieve the ultimate in sunkissed radiance through a dynamic duo of signature cheek shades. Orgasm, the industry’s most iconic blush, is a peachy pink that’s infused with golden shimmer—delivering a universally flattering flush of color. Wear them alone or layer them together for instant radiance.',
  what_else_you_need_to_know: '"Blush is one of my favorite products. I think it\'s because my mother used to be so fond of it. She would never leave the house without it. If she didn\'t have blush on, she would pinch her cheeks. It always made her feel better."—Francôis Nars',
  how_to_use: ['Use the deep tone under the cheekbone, blending up toward the apple so that the color hugs the cheek.', 'Use the brighter or lighter tone directly on the apple, blending it into the contour color.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s1935501-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1935501-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1935501+sw.jpg'],
  brand_name: "Nars"
)

Product.create!(
  name: 'Hardwired Single Eyeshadow',
  color: ["Stud - soft pewter bronze"],
  size: '0.04 oz/ 1.1 g',
  price: 22.00,
  p_type: 'Eye',
  brand_id: 4,
  what_it_is: 'A metallic eyeshadow single that delivers high pigment and high shine.',
  what_it_does: 'Amplify eyes with Hardwired Eyeshadow—a rich and radiant lineup of precious-metal-inspired shades that combine high-pigment with high-shine. Ultrafine blends of shimmer, glitter, and pearl reflect light for eye-catching effects. It glides on smoothly and evenly, layers and intensifies effortlessly, and lasts through the night.',
  what_else_you_need_to_know: 'Micronized powder provides improved wear and feel. The formula can be used as an eyeshadow or liner, applied wet or dry. The long-wearing, crease-resistant colors can be applied sheer or layered for more dramatic effects.',
  how_to_use: ['Use an eyeshadow brush to pat color onto lid.', 'Dampen brush for an intensified effect.'],
  ingredients: "n/a",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s2090413-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2090413-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s2090413+sw.jpg'],
  brand_name: "Nars"
)

Product.create!(
  name: 'Eyeliner Stylo',
  color: ["Carpates - black"],
  size: '0.02 oz/ 0.7 mL',
  price: 28.00,
  p_type: 'Eye',
  brand_id: 4,
  what_it_is: 'A felt-tip liquid eyeliner pen.',
  what_it_does: 'This super-fine tip pen allows for precise application and versatility in line width for a variety of looks. The rich, highly pigmented color glides on smoothly and effortlessly for intense payoff that dries down quickly and stays put without smudging for up to 24 hours.',
  what_else_you_need_to_know: 'This product is ophthalmologist tested.The non-staining formula does not flake after application and can be easily removed.',
  how_to_use: ['Avoid creating a heavy line on upper and lower lash line.'],
  ingredients: "Water, Alcohol, Butylene Glycol, Styrene/Acrylates Copolymer , Acrylates/Octylacrylamide Copolymer, Beheneth-30, Phenoxyethanol, Pentylene Glycol, Caprylyl Glycol, 1,2-Hexanediol, Ethylhexylglycerin, Sodium Hydroxide, Disodium Edta, Sodium Dehydroacetate, Xanthan Gum, [+/- (May Contain): Ci 77891 (Titanium Dioxide), Ci 77491 (Iron Oxides), Ci 77492 (Iron Oxides), Ci 77499 (Iron Oxides), Ci 77266 (Black 2), Ci 77510 (Ferric Ammonium Ferrocyanide)].",
  category_id: 1,
  image_url: ['https://www.sephora.com/productimages/sku/s1433945-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1433945-main-zoom.jpg', 'https://www.sephora.com/productimages/sku/s1433945+sw.jpg'],
  brand_name: "Nars"
)

Product.create!(
  name: 'Triple Sec 3-in-1',
  color: [""],
  size: '4.2 oz',
  price: 26.00,
  p_type: 'Hair',
  brand_id: 14,
  what_it_is: 'An airy dry spray that provides instant texture, volume, and body. ',
  what_it_does: 'Adds texture.',
  what_else_you_need_to_know: 'On second or third day hair, use Triple Sec for allover body, Detox Dry Shampoo at the roots to absorb oils, and Detox Dry Conditioner at the ends to hydrate.',
  how_to_use: ['For use on dry hair.'],
  ingredients: "Crystal Clear Microporous Minerals: Add matte texture, create separation for fuller styles, and absorb light oils.",
  category_id: 3,
  image_url: ['https://www.sephora.com/productimages/sku/s1638212-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1638212-main-zoom.jpg'],
  brand_name: "Drybar"
)

Product.create!(
  name: 'Sake Bomb Shampoo',
  color: [""],
  size: '8.5 oz',
  price: 24.00,
  p_type: 'Hair',
  brand_id: 14,
  what_it_is: 'A luxurious formula that cleanses and hydrates dry strands, leaving them looking softer and shinier.',
  what_it_does: 'Keratin: A highly moisturizing protein; reinforces the structure of the hair and helps prevent damage.',
  what_else_you_need_to_know: 'Sake Bomb Shampoo features Drybar\'s Original scent with notes of jasmine, sandalwood, and Madagascar vanilla.',
  how_to_use: ['Massage a generous dollop into wet hair from roots to ends.'],
  ingredients: "Water, Disodium Laureth Sulfosuccinate, Sodium Lauroyl Sarcosinate, Cocoamide MEA, Cocamidopropyl Hydroxysultaine, Sodium Lauryl Sulfateacetate, Acrylates Copolymer- 4, PEG-120 Methyl Glucose Dioleate, Keratin, Hydrolyzed Keratin, Citrus Junos Peel Extract, Prunus Insititia Seed Oil, Rhodiola Rosea Root Extract, Caesalpinia Spinosa Gum, Cocamidopropyl Betaine, Nasturtium Officinale Extract, Rice Oil Glycereth-8 Esters, Helianthus Annuus (Sunflower) Seed Extract, Hydrogenated Coco-Glycerides, Panthenol, Dimethicone, Octyldodecanol, Amodimethicone, Cyclopentasiloxane, Glycol Distearate, Divinyldimethicone/Dimethicone Copolymer, Glycerin, Silicone Quaternium-22, Laureth-23, Laureth-4, Cetrimonium Chloride, Trideceth-12, Ethylhexylglycerin, Tocopheryl Acetate, Behentrimonium Chloride, Sodium Chloride, Sodium Sulfate, Fragrance, Polyquaternium-10, Potassium Sorbate, Quaternium-95, Dimethiconol, Dipropylene Glycol, Polyglyceryl- 3 Caprate, Cystine Bis-PG-Propyl Silanetriol, Propanediol, Octocrylene, C12-13 Pareth-23, C12-13 Pareth- 3, Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, Butyl Methoxydibenzoylmethane, Phenoxyethanol, Citric Acid, Chlorphenesin, Potassium Hydroxide, Disodium EDTA, BHT, Methylisothiazolinone, Inulin Lauryl Carbamate, Caprylic/Capric Triglyceride, Sucrose Laurate, Sodium Benzoate, Benzoic Acid, Dehydroacetic Acid, Polyaminopropyl Biguanide, Eugenol, Limonene, Linalool, Alpha-Isomethyl Ionone.",
  category_id: 3,
  image_url: ['https://www.sephora.com/productimages/sku/s1585330-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1585330-main-zoom.jpg'],
  brand_name: "Drybar"
)

 Product.create!(
  name: 'Roses De Chloé',
  color: [''],
  size: '2.5 oz/ 75 mL',
  price: 125.00,
  p_type: 'Fragrance',
  brand_id: 25,
  what_it_is: 'Bergamot, Damascena Rose Essence, Amber Musk.',
  what_it_does: 'The fragrance comes in a modern, delicately pleated bottle adorned with a hand-tied pink ribbon. ',
  what_else_you_need_to_know: 'Freedom, lightness and femininity: these are the principles on which Chloé was founded in Paris more than 60 years ago. Today Chloé’s vision of romantic, effortless chic lives in ready-to-wear, accessories, and fragrances.',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  ingredients: 'Alcohol Denat., Fragrance, Water, Ethylhexyl Methoxycinnamate, Benzophenone-3, Ethylhexyl Salicylate, Hexyl Cinnamal, Hydroxycitronellal, Butyl Methoxydibenzoylmethane, Citronellol, Linalool, Butylphenyl Methylpropional, Limonene, Geraniol, Alpha-Isomethyl Ionone, Propylene Glycol, Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde, Citral, Amyl Cinnamal, Cinnamyl Alcohol, Bht, Acrylates/Octylacrylamide Copolymer, Hydrolyzed Jojoba Esters, Fd&C Yellow No. 6 (Ci 15985), Fd&C Red No. 4 (Ci 14700), Ext. D&C Violet No. 2 (Ci 60730), Fd&C Blue No. 1 (Ci 42090).',
  category_id: 5, 
  image_url: ['https://www.sephora.com/productimages/sku/s1580448-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1580448-main-hero-300.jpg'],
  brand_name: "Chloe"
)

Product.create!(
  name: 'Chloé Rollerball',
  color: [''],
  size: '.33 oz/ 10 mL',
  price: 30.00,
  p_type: 'Fragrance',
  brand_id: 25,
  what_it_is: 'Chloé Eau de Parfum captures the creative, confident individuality of the Chloé woman. A fresh and feminine fragrance suited to a free spirit with an utterly innate sense of chic.',
  what_it_does: 'The scent takes the classic rose and ingeniously translates it into a vibrant perfume, intimate and sensual. Chloé Eau de Parfum begins with a combination of floral powdery notes: hints of peony, lychee, and springtime freesia. The airy, flirtatious head notes drift away to reveal the richer and more sensual side of the rose. The distinctive character of this unique rose is accompanied by magnolia and lily of the valley, as well as subtle intimations of warm amber and elegant cedarwood.',
  what_else_you_need_to_know: 'Freedom, lightness and femininity: these are the principles on which Chloé was founded in Paris more than 60 years ago. Today Chloé’s vision of romantic, effortless chic lives in ready-to-wear, accessories, and fragrances.',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  ingredients: 'Alcohol Denat., Fragrance, Water, Butylphenyl Methylpropional, Ethylhexyl Methoxycinnamate, Acrylates/Octylacrylamide Copolymer, Alpha-Isomethyl Ionone, Benzophenone-3, Benzyl Salicylate, Bht, Butyl Methoxydibenzoylmethane, Citronellol, Ethylhexyl Salicylate, Geraniol, Hexyl Cinnamal, Hydrolyzed Jojoba Esters, Hydroxycitronellal, Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde, Limonene, Linalool, Fd&C Red No. 4 (Ci 14700), Fd&C Yellow No. 5 (Ci 19140).',
  category_id: 5, 
  image_url: ['https://www.sephora.com/productimages/sku/s1284025-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1284025-main-hero-300.jpg'],
  brand_name: "Chloe"
)

Product.create!(
  name: 'Crème de la Mer',
  color: [''],
  size: '.5 oz/ 15 mL',
  price: 85.00,
  p_type: 'Skin',
  brand_id: 11,
  what_it_is: 'An ultra-rich moisturizing cream that creates an instant dewy finish.',
  what_it_does: 'This highly coveted moisturizer is known for its power to hydrate and improve dryness in as little as three days. Miracle Broth™ helps skin appear softer, nourished, soothed, and energized, while the powerful antioxidant lime tea protects against stress and pollution for a healthy-looking glow. Skin looks radiant and naturally balanced as imperfections fade.',
  what_else_you_need_to_know: 'The iconic opal jar is hand-filled within eight hours of the Crème’s creation.',
  how_to_use: ["To activate the Miracle Broth™, warm between your fingers until it becomes translucent to the eye.", 'Press gently onto cleansed face and neck, morning and night.'],
  ingredients: 'Algae (Seaweed) Extract, Mineral Oil, Petrolatum, Glycerin, Isohexadecane, Microcrystalline Wax, Lanolin Alcohol, Citrus Aurantifolia (Lime) Extract, Sesamum Indicum (Sesame) Seed Oil, Eucalyptus Globulus (Eucalyptus) Leaf Oil, Sesamum Indicum (Sesame) Seed Powder, Medicago Sativa (Alfalfa) Seed Powder, Helianthus Annuus (Sunflower) Seedcake, Prunus Amygdalus Dulcis (Sweet Almond) Seed Meal, Sodium Gluconate, Copper Gluconate, Calcium Gluconate, Magnesium Gluconate, Zinc Gluconate, Magnesium Sulfate, Paraffin, Tocopheryl Succinate, Niacin, Water, Beta-Carotene, Decyl Oleate, Aluminum Distearate, Octyldodecanol, Citric Acid, Cyanocobalamin, Magnesium Stearate, Panthenol, Limonene, Geraniol, Linalool, Hydroxycitronellal, Citronellol, Benzyl Salicylate, Citral, Sodium Benzoate, Alcohol Denat., Fragrance.',
  category_id: 2, 
  image_url: ['https://www.sephora.com/productimages/sku/s1932193-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1932193-main-hero-300.jpg'],
  brand_name: "La Mer"
)

Product.create!(
  name: 'The Renewal Oil',
  color: [''],
  size: '1 oz/ 30 mL',
  price: 245.00,
  p_type: 'Skin',
  brand_id: 11,
  what_it_is: 'A multitasking, dual-phase oil that hydrates and supports healthy skin and hair from head to toe.',
  what_it_does: 'This cult favorite offers endless possibilities as it floods skin, hair, or nails with hydration and beauty benefits. Soft and ultra-smooth, skin glows with translucency and head-turning radiance. This oil also helps to support natural collagen production, which helps soften the look of emerging lines and wrinkles and visibly firms. Fast-absorbing and lightweight enough for daytime use. Its silky texture melts into the skin and is just the right weight for layering.',
  what_else_you_need_to_know: 'Miracle Broth™ is at the heart of La Mer and is infused into every treatment in the collection. This elixir is formulated with hand-harvested sea kelp and other nutrients and minerals unlocked via a natural fermentation process. Surging with vital energies, it supports the five facets of natural healing: moisture, regeneration, soothing, smoothing, and radiance—which help to bring skin back to its healthiest state.',
  how_to_use: ['Sweep three to five drops over face, neck, and any other dry areas, morning and evening.'],
  ingredients: 'Limnanthes Alba (Meadowfoam) Seed Oil, Dimethicone, Caprylic/Capric Triglyceride, Water, Trisiloxane, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Polydecene, Hydrogenated Polydecene, Butylene Glycol, Propanediol, Glycerin, Algae (Seaweed) Extract, Brassica Campestris (Rapeseed) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil, Sesamum Indicum (Sesame) Seed Oil, Eucalyptus Globulus (Eucalyptus) Leaf Oil, Camelina Sativa Seed Oil, Oxycoccus Palustris (Cranberry) Seed Oil, Olea Europaea (Olive) Fruit Oil, Hippophae Rhamnoides Oil, Medicago Sativa (Alfalfa) Seed Powder, Helianthus Annuus (Sunflower) Seedcake, Prunus Amygdalus Dulcis (Sweet Almond) Seed Meal, Sodium Gluconate, Copper Gluconate, Calcium Gluconate, Magnesium Gluconate, Zinc Gluconate, Tocopheryl Succinate, Niacin, Sesamum Indicum (Sesame) Seed Powder, Laminaria Ochroleuca Extract, Laminaria Saccharina Extract, Hydrolyzed Algin, Sea Salt/Maris Sal/Sel Marin, Chlorella Vulgaris Extract, Salicornia Herbacea Extract, Sigesbeckia Orientalis (St. Paul\'S Wort) Extract, Laminaria Digitata Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Magnolia Officinalis Bark Extract, Yeast Extract/Faex/Extrait De Levure, Crithmum Maritimum Extract, Commiphora Mukul Resin Extract, Citrus Aurantifolia (Lime) Peel Extract, Molasses Extract/Saccharum Officinarum/Extrait De Melasse, Sucrose, Acetyl Hexapeptide-8, Acetyl Glucosamine, Caffeine, Tocopheryl Acetate, Phenyl Trimethicone, Sodium Chloride, Tetrahexyldecyl Ascorbate, Alcohol Denat., Fragrance, Hexyl Cinnamal, Linalool, Amyl Cinnamal, Geraniol, Limonene, Citral, Benzyl Benzoate, Coumarin, Citronellol, Bht, Phenoxyethanol, Yellow 5 (Ci 19140), Yellow 6 (Ci 15985)',
  category_id: 2, 
  image_url: ['https://www.sephora.com/productimages/sku/s1932649-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1932649-main-hero-300.jpg'],
  brand_name: "La Mer"
)

Product.create!(
  name: 'S CARAT',
  color: [''],
  size: 'one size',
  price: 160.00,
  p_type: 'Accessory',
  brand_id: 20,
  what_it_is: 'A facial roller designed to fit the finer contours of your face to help tighten and tone the look of skin around your eyes, lips, and forehead.',
  what_it_does: 'For Those Concerned With Loss of Firmness and Elasticity, Fine Lines and Wrinkles, and Dullness and Uneven Texture Skin. ',
  what_else_you_need_to_know: 'Equipped with two platinum multi-angular rollers and a soothing microcurrent generated by a solar panel, the ReFa S CARAT replicates the gentle point kneading action of an esthetician’s fingers to help tighten and tone the appearance of skin that tends to slacken around the eyes, lips, and forehead.',
  how_to_use: ['Roll in both directions along the lines of your eyes, lips, and forehead.'],
  ingredients: 'n/a',
  category_id: 4, 
  image_url: ['https://www.sephora.com/productimages/sku/s2209518-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2209526-main-hero-300.jpg'],
  brand_name: "Refa"
)

Product.create!(
  name: 'CARAT',
  color: [''],
  size: 'one size',
  price: 290.00,
  p_type: 'Accessory',
  brand_id: 20,
  what_it_is: 'A platinum, waterproof, multi-angular massage roller for the face and body that helps visibly firm, tone, and contour tired, puffy, and sagging skin.',
  what_it_does: 'For Those Concerned With Loss of Firmness and Elasticity, Fine Lines and Wrinkles, and Dullness and Uneven Texture Skin. ',
  what_else_you_need_to_know: 'Rediscover your radiance from head to toe. Equipped with two 360° multi-angular rollers and a solar panel that generates a soothing microcurrent, the ReFa CARAT helps visibly tighten, tone, and contour the appearance of skin all over your face and body.',
  how_to_use: ['Roll in both directions along the lines of your eyes, lips, and forehead.'],
  ingredients: 'n/a',
  category_id: 4, 
  image_url: ['https://www.sephora.com/productimages/sku/s2209500-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2209500-main-hero-300.jpg'],
  brand_name: "Refa"
)

Product.create!(
  name: 'Firming Massaging Head',
  color: [''],
  size: 'one size',
  price: 59.00,
  p_type: 'Accessory',
  brand_id: 18,
  what_it_is: 'An advanced anti-aging brush head for face, neck, and décolleté that targets 15 signs of aging.',
  what_it_does: 'This Uplift Firming Massage Head with patented sound technology targets loss of firmness on the face, neck, and décolleté.',
  what_else_you_need_to_know: ' In as little as three minutes, 27,000 micro-lifting massages visibly relax your features and target 15 signs of aging for a youthful appearance. Turn your superior Smart Profile facial cleansing device into a powerful anti-aging tool.',
  how_to_use: ['For anti-aging massage: follow smart mode timer with gentle massaging motion starting with forehead (30 seconds), cheeks (30 seconds each), jawline (30 seconds), neck (30 seconds), and décolleté (30 seconds).'],
  ingredients: 'n/a',
  category_id: 4, 
  image_url: ['https://www.sephora.com/productimages/sku/s1927151-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1927151-main-hero-300.jpg'],
  brand_name: "Clarisonic"
)

Product.create!(
  name: 'Mia Prima Brush',
  color: ['white'],
  size: 'one size',
  price: 99.00,
  p_type: 'Accessory',
  brand_id: 18,
  what_it_is: 'A facial cleansing brush that removes long-wear makeup and improves the appearance of pores.',
  what_it_does: 'One mode, one button, one minute for fast and simple skin cleansing. Mia Prima Sonic Facial Cleansing Brush minimizes the appearance of pores and allows skincare products that follow to absorb better.',
  what_else_you_need_to_know: 'If you have concerns about enlarged pores, acne treatment, or extra sensitive facial cleansing, Clarisonic offers additional replacement brush heads that are tailored to different skin concerns. The Clarisonic Sonic Foundation Brush Head for flawless makeup application and blending is compatible with Mia Prima (sold separately).',
  how_to_use: ['For anti-aging massage: follow smart mode timer with gentle massaging motion starting with forehead (30 seconds), cheeks (30 seconds each), jawline (30 seconds), neck (30 seconds), and décolleté (30 seconds).'],
  ingredients: 'n/a',
  category_id: 4, 
  image_url: ['https://www.sephora.com/productimages/sku/s2109635-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s2109635-main-hero-300.jpg'],
  brand_name: "Clarisonic"
)









