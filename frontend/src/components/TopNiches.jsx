const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Welder",
      description:
        "Expert welding services to create, repair, and enhance metal structures, ensuring durability and precision with the highest quality standards.",
    },
    {
      id: 2,
      service: "Fabricator",
      description:
        "Providing expert fabrication services to design, create, and assemble high-quality structures and components, ensuring durability and precision in every project.",
    },
    {
      id: 3,
      service: "Bike Rider",
      description:
        "Reliable and efficient bike rider services to deliver packages, documents, and goods swiftly and safely, ensuring timely and hassle-free transportation.",
    },
    {
      id: 4,
      service: "Carver",
      description:
        "Carver provides innovative solutions to create, enhance, and manage projects, ensuring they deliver exceptional value and meet the highest quality standards.",
    },
    {
      id: 5,
      service: "Wine",
      description:
        "Provide expert wine making services to craft, refine, and perfect wines, ensuring they meet the highest standards of quality and taste.",
    },
    {
      id: 6,
      service: "Nursing",
      description:
        "Providing compassionate and professional nursing care to promote health, support recovery, and enhance the quality of life for patients, ensuring the highest standards of medical and emotional support.",
    },
  ];

  return (
    <>
      <section className="services">
        <h3>Top Jobs</h3>
        <div className="grid">
          {services.map((element) => {
            return (
              <div className="card" key={element.id}>
                <h4>{element.service}</h4>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopNiches;
