import "./Examples.css"

function Examples () {
    return(
        <div className="maincard">
        <h1>Nasze Projekty</h1>
        <div className="examplecard">
            <div className="exampleimage">
                <img src="/Ex1.jpg"/>
            </div>
            <div className="exampleinfo">
                <h2>MailChimp</h2>
                <p>Email Marketing</p>
            </div>
        </div>
        <div className="examplecard">
            <div className="exampleimage">
                <img src="/Ex2.jpg"/>
            </div>
            <div className="exampleinfo">
                <h2>Github</h2>
                <p>Code Sharing</p>
            </div>
        </div>
        <div className="examplecard">
            <div className="exampleimage">
                <img src="/Ex3.jpg"/>
            </div>
            <div className="exampleinfo">
                <h2>Data Engine</h2>
                <p>Analiza Danych</p>
            </div>
        </div>
        <div className="examplecard">
            <div className="exampleimage">
                <img src="/Ex4.jpg"/>
            </div>
            <div className="exampleinfo">
                <h2>Apple Arcade</h2>
                <p>Gry</p>
            </div>
        </div>
        </div>

    )
}

export default Examples;