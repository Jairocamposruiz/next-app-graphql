import Image from 'next/image';

import { Layout } from '@components/Layout/Layout';

const facts: {title: string, content: string}[] = [
  {
    title: 'Most avocados come from Mexico',
    content: 'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
  },
  {
    title: 'The conquistadors were huge fans',
    content: 'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. Sadly, they had yet to learn how to make avocado toast.',
  },
  {
    title: '“Avocado” wasn’t its original name',
    content: 'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
  },
  {
    title: 'It’s relatively new to the United States',
    content: 'It wasn’t until the 1950s when Americans turned to avocados. This makes it a relatively new food in our country. As with most imported trends, avocados were made popular in the coastal states-Florida and California-and Hawaii, too, before evolving into mainstream culinary culture.',
  },
  {
    title: 'It’s actually a fruit',
    content: 'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
  },
  {
    title: 'The U.S. harvest is best in the spring and early summer',
    content: 'Much like our other favorite farmers market produce, avocados’ peak season in California is April to July, though avocados can be found in the supermarket year-round. Their growing season typically wraps by November.',
  },
  {
    title: 'Some famous celebrities are avocado farmers',
    content: 'Joining the ranks of California’s avocado farmers are actors like Tom Selleck (whose ranch was once owned by actor Dean Martin) and Oscar winner Jamie Foxx. Also on Foxx’s 40-acre ranch? A recording studio!',
  },
  {
    title: 'There are different varieties',
    content: 'Avocados’ taste and texture depend on the region they’re from. Florida-grown avocados are lower in fat and firmer, while Hass avocados, from Mexico, are perfect for mashing and whipping.',
  },
  {
    title: 'They’ve one-upped the banana',
    content: 'Hard to believe, but it’s true: Avocados have higher levels of potassium than bananas. In fact, the levels are almost double-a single avocado contains 975 milligrams of potassium, compared to 487 milligrams in a banana. So throw avocado spears into your smoothie, why don’t you? Start with this recipe for Green Breakfast Smoothie.',
  },
  {
    title: 'Avocados may help lower your cholesterol',
    content: 'Trying to improve your health? Fold more avocados into your diet. A 2015 study by the American Heart Association found that eating an avocado daily can improve LDL cholesterol levels (that’s the bad cholesterol) in people who struggle with obesity or are overweight.',
  },
  {
    title: 'The peel isn’t good for Fido',
    content: 'Be sure to toss avocado remains in the garbage (or compost). The skin and pit can be harmful, and even toxic, to cats and dogs. However, most household pets (except birds) can nosh on the creamy green center and not get sick.',
  },
  {
    title: 'You can substitute it for butter',
    content: 'In lieu of butter, many vegan bakers use avocado to add moistness to cupcakes, cakes and other baked goods. Want to give it a go? Keep in mind that avocados can give a green hue to the finished dish. For more creative substitutes, check out our favorite recipes with secret ingredients.',
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content: 'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit.',
  }
]

const About = () => {
  return (
    <Layout>
      <h1 className={`text-center text-3xl font-bold mb-8`}>13 Surprising Facts About Avocados</h1>
      <Image src={"/images/avocados.jpg"} alt={"Avocados on a table"} width={700} height={500} />
      <p className={`text-gray-400 mt-1`}>
        Original from
        <a
          className={`text-blue-500 ml-2`}
          href={`https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/`}
          target={`_blank`}
        >Taste of Home</a>
      </p>

      <div className={`mt-8 w-full grid grid-cols-2 max-w-5xl gap-10`}>
        {
          facts.map((fact, index) => (
            <div
              key={index}
              className={``}
            >
              <div
                className={`flex gap-4`}
              >
                <p className={`text-7xl font-bold text-gray-300`}>{index + 1}</p>
                <h2 className={`text-2xl font-bold mb-2`}>{fact.title}</h2>
              </div>
              <p className={`text-gray-400`}>{fact.content}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export default About;
