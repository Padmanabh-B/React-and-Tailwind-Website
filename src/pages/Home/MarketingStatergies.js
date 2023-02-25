import React from "react";

const MarketingStatergies = () => {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
      image: "images/content-marketing.png",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
      image: "images/inbound-marketing.png",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
      image: "images/social-media.png",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
      image: "images/seo.png",
    },
  ];
  return (
    <div>
      <h1 className="text-6xl font-semibold text-primary">
        Want To Boost Your Business Growth?
      </h1>
      <h1 className="mt-10 font-semibold text-7xl text-primary">
        The <b className=" text-secondary">Solution</b>is here...
      </h1>

      <p className="mt-10 text-xl text-gray-600">
        A marketing strategy will detail the advertising, outreach, and public
        relations campaigns to be carried out by a firm, including how the
        company will measure the effect of these initiatives. They will
        typically follow the four Ps. The functions and components of a
        marketing plan include market research to support pricing decisions and
        new market entries
      </p>

      <div className="grid grid-cols-2 gap-20 mt-10">
        {strategies.map((item) => {
          return (
            <div className="flex flex-col p-5 space-y-10 duration-300 transform border rounded shadow-xl border-primary hover:scale-105">
              <h1 className="py-2 mx-20 -mt-8 text-2xl text-center bg-white border rounded border-primary text-secondary">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="w-24 h-24" />
              <p className="mt-10 text-gray-600 text-md hover:text-primary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketingStatergies;
