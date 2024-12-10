import Layout from "@components/Layout";
import { NewsletterForm } from "@components/NewsletterSignup";
import { NiceCard } from "@components/NiceCard";
import Header from "@components/PostHeader";
import { ToTopButton } from "@components/ToTopButton";
import { travelblogs } from "@velite";

type MetaInfo = {
  cover: { src: string; alt: string };
  excerpt: string;
  title: string;
};

type Props = {
  travelingStories: string[];
};

const travelingStoriesMeta: Record<string, MetaInfo> = {
  guadeloupe: {
    cover: {
      src: "/assets/blog/guadeloupe/meditating-in-front-of-the-third-carbet-fall.jpg",
      alt: "meditating in front of the third carbet fall",
    },
    title: "Guadeloupe",
    excerpt:
      "Traveling in Guadeloupe was beautiful. A time filled with stories, waterfalls, nice people, crazy hikes, and diving adventures. If I can I'll come back to this paradise in the Carribean once again in the future.",
  },
  transat: {
    cover: {
      src: "/assets/blog/transat/christian-and-rebecca-steering-the-boat-through-the-storm.jpg",
      alt: "Christian and Rebecca steering the boat through the storm",
    },
    title: "Crossing the Atlantic",
    excerpt:
      "Navigating across the Atlantic Ocean was one of the craziest experiences in my entire life. I've never sailed before and hitchhiking a boat without any sailing experience has made my life richer by a lot.",
  },
  "portugal-2024": {
    cover: {
      src: "/assets/blog/portugal-2024/starry-night.jpg",
      alt: "starry night in portugal",
    },
    title: "Portugal - The Fisherman's Trail",
    excerpt:
      "Walking a little bit along the Rota Vicente, a popular hiking trail following the South West coast of Portugal made me appreciate the beauty of this country. The coastline is a natural paradise, beckoning to be explored more.",
  },
};

const TravelBlogs = ({ travelingStories }: Props) => {
  return (
    <Layout
      title="Traveling Stories"
      description="An overview page about the traveling stories I have to tell"
      image={
        "/assets/midjourney/a-hand-writing-down-thoughts-on-a-piece-of-paper.jpg"
      }
      url="posts"
      imageAlt={"a hand writing down thoughts on a piece of paper"}
    >
      <main>
        <section>
          <Header
            title="Traveling"
            subtitle="Stories of the adventures and places I have been to"
          />
          {travelingStories.map((story) => {
            const meta = travelingStoriesMeta[story] || {
              cover: { src: "", alt: "default cover" },
              title: story,
            };

            return (
              <NiceCard
                key={story}
                cover={meta.cover}
                excerpt={meta.excerpt}
                title={meta.title}
                link={`/travel/${story}`}
              />
            );
          })}
        </section>
      </main>

      <footer>
        <NewsletterForm />
        <ToTopButton />
      </footer>
    </Layout>
  );
};

export default TravelBlogs;

export const travelingStoryNames = [
  ...travelblogs.reduce((agg, current) => {
    if (current.published || process.env.NODE_ENV === "development")
      agg.add(current.parentFolder);
    return agg;
  }, new Set<string>()),
];

export const travelingStoryNamesMap = travelblogs.reduce((agg, current) => {
  agg[current.parentFolder] = current.path.split("/").at(-2);
  return agg;
}, {} as Record<string, any>);

export const getStaticProps = async () => {
  return {
    props: { travelingStories: travelingStoryNames },
  };
};
