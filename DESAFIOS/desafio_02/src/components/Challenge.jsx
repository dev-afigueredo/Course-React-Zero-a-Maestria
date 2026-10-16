const Challenge = () => {

    const valueA = 11;
    const valueB = 11;

    const sum = () => {
        const result = valueA + valueB;
        console.log(`O resultado da soma é: ${result}`);
    }

    return (
        <div>
            <h1>Desafio 02</h1>
            <p>Bem-vindo ao desafio 02!</p>

            <div>
                <p>Valor A: {valueA}</p>
                <p>Valor B: {valueB}</p>
            </div>

            <div>
                <button onClick={sum}>Somar</button>
            </div>
        </div>
    );
};

export default Challenge;