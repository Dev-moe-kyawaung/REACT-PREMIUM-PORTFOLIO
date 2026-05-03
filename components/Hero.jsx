import { useEffect, useState } from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="hero min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Moe Kyaw Aung
            </h1>
            {mounted && (
              <div className="h-16 mb-8">
                <Typed
                  strings={[
                    'Android Developer',
                    'Full Stack Developer', 
                    'Kotlin Expert',
                    'အန်ဒရောက်ဒီဗလပ်ပါ'
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="text-2xl lg:text-4xl font-semibold text-white"
                />
              </div>
            )}
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Hire Me</a>
            </div>
          </div>
          <div className="text-center">
            <div className="glass-card p-8 mx-auto max-w-sm">
              <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-1">Moe Kyaw Aung</h3>
              <p className="text-purple-300">Android Developer at Microsoft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

