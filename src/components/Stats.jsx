import { useEffect } from "react";
import "../styles/Stats.css";

const Stats = () => {
  const data = [
    { label: "Casos Vencidos", value: 500, suffix: "+" },
    { label: "Anos de Experiência", value: 5, suffix: "" },
    { label: "Suporte Criminal", value: 24, suffix: "h" },
    { label: "Clientes Satisfeitos", value: 98, suffix: "%" }
  ];

  useEffect(() => {
    const counters = document.querySelectorAll(".value");

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;

      const update = () => {
        const increment = target / 80;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + suffix;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + suffix;
        }
      };

      update();
    });
  }, []);

  return (
    <section className="statsSection">
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="statCard">
            <h2
              className="value"
              data-target={item.value}
              data-suffix={item.suffix}
            >
              0
            </h2>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;