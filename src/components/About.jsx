import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="md:mt-2 w-full h-full md:h-[140vh] flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/salama-18.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full md:h-1/2 flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-primary_2 text-primary h-full flex flex-col justify-center items-center text-center gap-5 px-3 lg:px-14 py-5">
          <span className="font-semibold text-lg md:text-xl tracking-widest">
            ABOUT US
          </span>
          <p className="text-sm xl:text-lg">
            {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
            <br />
            {"***"}
            <br />
            {`Here, you can enjoy a cocktail in peace and quiet, while savoring Moroccan culinary treasures.`}

            {
              "On the menu are the must-tries: melting shoulder of lamb, delicious Tangia, or delicate Kemias, all prepared with a finesse and savoir-faire that sublimates traditional flavors."
            }
            <br />
            {
              "The ambiance is not to be outdone: every evening, an oriental dance show adds a touch of magic to the atmosphere."
            }
            <br />
            {"***"}
            <br />
            {`But this place doesn't reveal all its secrets at first glance... There are secrets waiting to be discovered, for those who dare to explore beyond the obvious. Come and let yourself be carried away by the mysterious soul of this enchanting place.`}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full bg-transparent"></div>
      </div>
      <div className="w-full h-full md:h-1/2 flex justify-center items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-transparent"></div>
        <div className="w-full md:w-1/2 h-full text-primary bg-primary_2 flex flex-col justify-center items-center text-center gap-5 px-3 lg:px-14 py-5">
          <p className="text-sm xl:text-lg">
            {`Le Salama was born from a dream: to create a place where Moroccan tradition meets contemporary culture, where every dish tells a story, and where every meal becomes an unforgettable moment of sharing.`}
            <br />
            {"***"}
            <br />
            {`Le Salama is a celebration of flavors, an ode to balance, and an invitation to sensory journey in the heart of Marrakech.`}
            <br />
            {
              "Our dishes are crafted with a deep respect for Moroccan tradition, enhanced by global culinary creativity."
            }
            <br />
            {
              "Signature Cocktails to Delight Your Senses. As the sun sets, Le Salama transforms into a lively evening spot."
            }
            <br />
            {"***"}
            <br />
            {
              "Enjoy our curated cocktails and a more festive atmosphere. Whether you’re unwinding after a long day or celebrating with friends, our evening ambiance offers the perfect setting."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
