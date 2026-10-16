const Events = () => {
    const handleClick = (e) => {
        console.log(e);
        console.log('Button clicked!');
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
            <div>
                <button onClick={(e) => {
                    console.log('Button clicked in arrow function!');
                }}>Click me (arrow function)</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true)
                        console.log('Aqui não pode... lógica deve ficar em uma função!')
                }}>Click me (arrow function with if)</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;