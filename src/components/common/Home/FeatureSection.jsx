import FeatureCard from "./FeatureCard";

const features = [
  {
    image: "./src/assets/images/bmw features/bmw-feature1.jpeg", // مسیر تصاویر رو خودت تنظیم کن
    title: "A collector's item full of emotion",
    subtitle: "BMW Concept Speedtop",
  },
  {
    video: "./src/assets/images/bmw features/bmw-feature2.mp4",
    title: "BMW Intelligence",
    subtitle: "Innovation",
  },
  {
    image: "./src/assets/images/bmw features/bmw-feature3.JPG",
    title: "Smart Connectivity",
    subtitle: "Technology",
  },
  {
    video: "./src/assets/images/bmw features/bmw-feature4.mp4",
    title: "Inspired by Nature",
    subtitle: "Design",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          image={item.image}
          video={item.video}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
