import React, { useState } from 'react';
import Banner from "../assets/blogsbanner.jpg";
import Dropdown from '../components/Dropdown';

const Blog = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownData = [
    {
      title: "1. Apartments vs Villa Interiors: Transforming spaces with Ambition",
      content: [
        "Apartments are the epicenter of urban living. They are compact, practical, and frequently located in prime city areas. But don't be fooled by the limited space; apartments can be incredibly stylish and highly efficient when designed with intention. Whereas Villas provide freedom of space and design, which apartments rarely do. These independent homes have larger floor plans, multiple levels, and often private outdoor spaces such as gardens, patios, and pools. Villa interiors are like a blank canvas waiting to be personalized. With fewer structural constraints, villa interiors frequently feature grand entrances, open-concept living, high ceilings, and natural materials.",
        "Villa interiors are like a blank canvas waiting to be personalized. With fewer structural constraints, villa interiors frequently feature grand entrances, open-concept living, high ceilings, and natural materials. Whether you live in an apartment or a villa, your surroundings reflect your vision. Size does not define an ambitious interior; rather, intention does. Any home can be transformed into a personal masterpiece with a bold color scheme, an art wall, or a custom light fixture.",
        "The decision between an apartment and a villa is based on your lifestyle. Do you thrive in a busy city with everything at your fingertips? Or do you prefer peaceful, open spaces with total privacy? Don't hold back, whatever you decide. Infuse your space with your story, energy, and aspirations. Because a home, whether high above the city or nestled in a green enclave, should serve more than just as a place to live. It must be your statement."
    ],
      
    },
    {
      title: "2. Best Bedroom design ideas for Modern Home Interiors",
      content: [
        `The bedroom is a place where comfort and style come together, serving as more than just a
place to sleep. Bedroom design in modern homes has evolved into a delicate balance of
simplicity, elegance, and smart functionality. Whether you're renovating an existing space or
starting from scratch, designing a bedroom that feels calm, curated, and contemporary is
essential for modern living.`,
        `The combination of minimalism and warmth is a defining feature
of modern bedroom design. Begin by selecting a clean color palette. Soft neutrals such as
beige, grey, ivory, or muted pastels create a peaceful backdrop. To avoid feeling too sterile,
incorporate natural textures such as wooden floors, linen bedding, and wool throws. For
those who value functionality, smart storage is essential.`,
`Choose beds with built-in drawers
or floating nightstands to make the most of available floor space. To maintain visual calm, use
full-height wardrobes with sleek, handle less designs that blend in with the wall. A modern
bedroom thrives on organization, and hidden storage keeps your space clutter-free.
If space allows, consider setting up a small reading or lounging area with a comfortable
armchair and a floor lamp. This not only adds depth to the space, but also provides a private
escape within your sanctuary. Curated décor, such as abstract art, sculptural vases, or a
single large indoor plant, can add personality to a room while remaining simple.`
      ],
    
    },
    {
      title: "3. New Homeowner’s guide to choosing Interior Designs",
      content:[
  `Becoming a homeowner is a dream come true, and designing your space is where the real fun and challenge starts. With so many styles, trends, and ideas available, it's easy to become overwhelmed. This quick guide will help you make confident, creative design decisions that reflect your lifestyle. Begin by reflecting on how you live. Do you need open spaces to entertain? Smart storage for a busy family lifestyle? Or a comfortable, minimalist retreat? Your interior should reflect not only your personal preferences, but also your daily needs. Discover your personal style.`,

  `Do you prefer modern minimalism, rustic charm, or eclectic flair? Create a mood board on Pinterest or Instagram to see what catches your eye. This will help you choose furniture, colors, and décor. Once you've decided on a style, concentrate on the most important design elements: color palette, layout, lighting, and texture. Stick to a neutral base and add color with cushions, rugs, or art. Invest in timeless, high-quality pieces and allow your home to evolve naturally; there's no need to finish everything all at once.`,

  `Lighting is more important than you think. Mix ambient, task, and accent lighting to achieve the ideal balance. Mirrors and sheer curtains can help you maximize natural light and make your space feel more open and airy. Don't forget about functionality. Choose materials and furniture that are appropriate for your lifestyle; stylish does not have to mean high-maintenance. Most importantly, include personal touches like a photo wall, travel souvenirs, or handmade art. These make your space feel more like home.`
],
     
    },
    {
      title: "4. Best interior designs for small living room",
      content: [
  `Small living rooms can be comfortable, stylish, and functional if they are properly designed. The key is to make efficient use of space while maintaining comfort and personality. Whether you live in an apartment or a small house, the right design choices can transform a small living room into a cozy, welcoming, and modern retreat. Begin by selecting a light color palette. Soft colors such as white, beige, pastel grey, or pale blues make the room feel airy and spacious. Avoid using heavy, dark colors because they can visually shrink the space. Add pops of color with cushions, rugs, or wall art to keep the space lively without overwhelming it. When it comes to furniture, opt for slim, multifunctional pieces.`,

  `A compact sofa with hidden storage, a foldable coffee table, or nesting side tables can all save space while serving multiple functions. Wall-mounted shelves or floating TV units keep the floor clear and create a sense of openness. Avoid large pieces of furniture that take up too much space. Mirrors are a secret weapon for small rooms. They reflect light and give the illusion of depth, making the room appear larger. Position a large mirror opposite a window or near a light source to instantly brighten the room.`,

  `Consider vertical design by incorporating tall bookshelves, hanging lights, or vertical wall art to draw the eye up. This adds dimension and keeps the room from feeling cramped. Layered lighting, consisting of ceiling lights, floor lamps, and wall sconces, adds warmth and depth without taking up too much space. Another excellent tip is to keep it clutter-free. To keep everyday items hidden, use closed storage, baskets, or lidded ottomans. A clean environment feels more open and welcoming. Choose simple decor that makes a statement without crowding surfaces. With the right interior design, your small living room can feel anything but cramped.`
]

     
    },
    {
      title: "5. How Custom Interiors can transform your living experience",
      content: [
  `A house becomes a home not only through the addition of walls and furniture, but also through thoughtful, intentional design. While ready-made interiors may appear enticing, custom interiors go a step further and are suited to your personality, needs, and lifestyle. From layout to lighting, materials to mood, personalized design may completely change how you live and feel in your home. The most significant advantage of custom interiors is customization.`,

  `Every aspect, from the cabinetry in your kitchen to the lighting in your living room, may be customized to reflect your preferences and habits. If you enjoy entertaining, your area can be built with open seating and ambient lighting. If you work from home, a dedicated, well-lit office can be elegantly integrated into your existing interior design without disrupting the flow. Custom interiors also make greater use of space, which is especially useful in small homes or rooms with irregular shapes.`,

  `Built-in storage, multipurpose furniture, and intelligent zoning allow you to maximize functionality while keeping the design simple and coherent. Another way that bespoke interiors improve your living experience is through emotional connections. When your home represents your story—your favorite colors, important art, and calming textures—it automatically becomes a place where you feel more grounded, inspired, and relaxed. It's more than just decor; it's an expression of who you are. Investing in custom design provides long-term value and longevity. With high-quality materials, craftsmanship, and future-proof layouts, your home will not only look timeless but also function better in the years to come.`
]

     
    },
  ];
  return (
    <>
    <div className="relative h-[55vh] w-full">
              <img
                src={Banner}
                alt="Banner"
                className="absolute inset-0 object-cover object-center blur-xs h-full w-full"
              />
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl md:text-5xl font-spectral-sc-regular font-bold text-white mb-4">
                  Our Blogs
                </h2>
              </div>
      </div>
          <section className="py-20 px-6 max-w-7xl mx-auto">
         
          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              title={dropdown.title}
              image={dropdown.image}
              content={dropdown.content}
              isOpen={openIndex === index}
              onClick={() => handleDropdownClick(index)}
            />
          ))}
        </section>
           
    
    </>
    
  )
}

export default Blog;