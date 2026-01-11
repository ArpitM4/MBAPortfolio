'use client';
import { motion } from 'framer-motion';

const FocusAreas = () => {
  const areas = [
    {
      title: 'Talent Management & Performance Systems',
      description: 'Designing frameworks that align individual growth with organizational goals.'
    },
    {
      title: 'Employer Branding & Campus Engagement',
      description: 'Building compelling narratives to attract and retain top-tier talent.'
    },
    {
      title: 'Organisational Culture & Change',
      description: 'Driving cultural transformation and managing change effectively.'
    },
    {
      title: 'Data-driven HR using Excel & Power BI',
      description: 'Leveraging analytics to make informed, strategic people decisions.'
    }
  ];

  return (
    <section id="focus-areas" className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4">
            Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-black/80 font-light max-w-2xl mx-auto">
            My current strategic priorities and areas of professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-normal text-black mb-3">{area.title}</h3>
              <p className="text-black/80 font-light leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
