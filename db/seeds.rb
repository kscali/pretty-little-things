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

Brand.create!(name: "Dermologia", category_id: 2)
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

Product.create!(
  name: 'Amazonian Clay 12-Hour Blush',
  color: ['Exposed - nude pink', 'Sensual - golden nude', 'Seduce - rosy nude', 'Risque - peachy nude', 'Dollface - light pink'],
  size: '0.2 oz/ 5.6 g',
  price: 29.00,
  p_type: 'Blush',
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
  p_type: 'Eye Palettes',
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
  p_type: 'Moisturizer',
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
  p_type: 'Eyeliner',
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
  p_type: 'Shampoo',
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
  p_type: 'Perfume',
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
  p_type: 'tool',
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
  color: [''],
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
  p_type: 'Skin',
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
  p_type: 'Skin',
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
  ingredients: 'Blackberry, Jasmine Flower, White Woods',
  how_to_use: ["Spritz lightly anywhere you want fragrance."],
  category_id: 5,
  image_url: ['https://www.sephora.com/productimages/sku/s1632751-main-grid.jpg', 'https://www.sephora.com/productimages/sku/s1632751-main-zoom.jpg'],
  brand_name: "Marc Jacobs"
)


