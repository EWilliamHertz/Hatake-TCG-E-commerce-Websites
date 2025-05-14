import React from 'react';
export const AboutPage: React.FC = () => {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold mb-8 text-center">
        Our Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Founded in 2025
          </h2>
          <p className="mb-4">
            Hatake TCG was founded by Ernst-William Hertz, Mark Jensen and Virre
            passionate TCG enthusiasts and entreprenuers committed to creating
            premium, sustainable accessories. Our journey began in Falköping,
            Sweden, with a vision to revolutionize TCG gear while supporting
            Nordic industry.
          </p>
          <p>
            Hatake TCG isn't just about products; it's about building a legacy.
            Virre, Mark, and Ernst-William are dedicated to crafting gear that
            protects and inspires, all while fostering a community where every
            player feels at home. With their sights set on full Nordic
            production, they're proving that passion, teamwork, and a touch of
            Nordic elegance can redefine the TCG experience.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            We combine Swedish design with ethical manufacturing, currently
            partnering with a trusted Chinese supplier who shares our commitment
            to fair labor practices and sustainability.
          </p>
          <p className="mb-4">
            Our mission is to challenge the greedy, monopolized TCG accessory
            market by offering premium products at accessible prices, ensuring
            every player can enjoy high-quality gear without breaking the bank.
          </p>
          <p>
            We're working toward full Nordic production to further reduce our
            environmental impact, blending innovation with tradition to create
            accessories that embody the elegance and durability of Scandinavian
            craftsmanship.
          </p>
        </div>
      </div>
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-heading font-bold mb-4">
          Why Choose Hatake?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Premium quality matching Dragon Shield/KMC</li>
          <li>Unique Nordic-designed products</li>
          <li>Ethical manufacturing practices</li>
          <li>Supporting Swedish industry</li>
          <li>Competitive retailer margins</li>
        </ul>
      </div>
    </div>;
};