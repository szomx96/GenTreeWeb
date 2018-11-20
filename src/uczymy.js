import React from 'react';
// import Test from './Components/test';

class Klasa extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stan: "To jest Klasa",
            id: this.props.idKlasy
        }
    }

    render(){
        const { alercik} = this.props; 
        const { id } = this.state;
        return(
            <div>
                <button onClick={alercik}></button>
                KLASA - {id}
            </div>
        )
    }
}

// const WielkaLiteraNaPoczatku = (props) => {
//     const { id, name } = props;
//     return(
//         <p> Coś - {id} - {name} - {props.pesel} </p>
//     )
// }

// function Xd(props){
//     return (<p> drugi coś - {props.id}</p>)
// }

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            dupa: "funckcja",
            imie: "...",
            haslo: "...",
        };
        this.alercik = this.alercik.bind(this);
    }
    alercik(){

    }

    // var dupa = "flsdjaf"; - nie :(

    funckcja(){
        var dupa = "kupa";
        return dupa;
    }

    render(){
        return(
            <div>
                kanapka asdsad
                {/* <WielkaLiteraNaPoczatku id={123} name="Imie" pesel="123123123"/>
                <Xd id={321} /> */}
                <Klasa idKlasy={1} nazwa="test" alercik={this.alercik} width={123} />
                <Klasa idKlasy={2} nazwa="test" alercik={this.alercik} />
                <Klasa idKlasy={3} nazwa="test" alercik={this.alercik} />
                <Klasa idKlasy={4} nazwa="test" alercik={this.alercik} />
            </div>
        )
    }
}

export default App;