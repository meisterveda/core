import styles from './features.module.css';

/* eslint-disable-next-line */
export interface Stacks {
  name: string;
  items: string[];
}


export function Features({stacks}: {stacks:Stacks[]}) {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-blue-50 dark:bg-slate-800 pointer-events-none mb-32"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 pt-8 sm:py-6 lg:py-8 lg:pt-12">
          <div className="mb-8 text-center">
            <p className="text-base text-blue-600 dark:text-blue-200 font-semibold tracking-wide uppercase">
              The Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
              Programming Languages and skills
            </h2>
            <p className="max-w-3xl mx-auto text-center text-xl text-gray-600 dark:text-slate-400">
              Here you can learn what Languages, Frameworks and skills that I
              use.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start my-1">
            {stacks.map((stack) => (
              <div className="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-xl hover:shadow-lg transition dark:border dark:border-slate-800 dark:text-white">
                <div className="flex justify-center items-center mb-4">
                  <div className="ml-4 text-xl font-bold">{stack.name}</div>
                </div>
                <div className="grid grid-cols-3 gap-1 justify-items-start">
                  {stack.items.map((item: string) => (
                    <div className="bg-gray-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 dark:text-slate-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
