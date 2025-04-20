
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { School, Target, Users, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-college-600" />,
      title: "Our Mission",
      description: "To simplify college selection and empower students to make informed educational decisions across India."
    },
    {
      icon: <Users className="h-8 w-8 text-college-600" />,
      title: "Who We Are",
      description: "A dedicated team of education professionals committed to bridging the gap between students and their dream colleges."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-college-600" />,
      title: "What We Do",
      description: "Provide comprehensive college information, eligibility checks, and comparison tools for students nationwide."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <School className="h-12 w-12 text-college-600 mr-4" />
            <h1 className="text-4xl font-bold text-neutral-900">About EduFind</h1>
          </div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            EduFind is your trusted companion in navigating the complex world of higher education. We're here to transform your college selection journey.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h2>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
