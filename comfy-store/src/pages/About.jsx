const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem, a quas necessitatibus voluptatem magnam, obcaecati beatae libero, magni delectus voluptates eius nulla inventore reprehenderit ab quasi voluptas! Eveniet qui inventore labore eos exercitationem iusto voluptatibus odio voluptate molestiae nisi.
      </p>
    </>
  );
};
export default About;
