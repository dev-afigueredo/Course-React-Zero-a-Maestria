const TemplateExpressions = () => {
  const name = "Axel";
  const data = {
    age: 32,
    job: "Programador",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <h2>Você atua como {data.job} e tem {data.age} anos.</h2>
    </div>
  );
};

export default TemplateExpressions;