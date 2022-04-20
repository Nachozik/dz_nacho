function Hero() {
    let clicks = 0;

    return (
        <div>
            <button id={'dz'} onClick={function () {
                console.log('вы нажали на мою домашку '+clicks+' раз');
                clicks+=1;
                document.getElementById('clicks').innerHTML=clicks
            }}>
                <p>Я сделал домашку!</p>
            </button>
            <div id={'clicks'}>
                {clicks}
            </div>
        </div>
    )
}
export default Hero;