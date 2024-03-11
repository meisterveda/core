import styles from './Hero.module.css';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4">
              Welcome to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                Gustavo Cabezal
              </span>{' '}
              Portfolio Website
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 dark:text-slate-400">
                Here you can find how to contact me, about my stacks and what I
                like to learn about. Also you can check my repository and
                projects, and the content I have being posting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
