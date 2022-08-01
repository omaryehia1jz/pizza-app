import { Container } from "react-bootstrap";
import pizza from '../images/pizza.png';
import { Image } from "react-bootstrap";
import { Items } from "../components/ItemsDetails";


export function Main() {

    return (
        <>
            <div style={{ marginBottom: '30px', marginTop: '62px', height: '300px', width: '100%', backgroundColor: 'grey' }} className='d-flex justify-content-evenly bg-dark ' >

                <div>
                    <h1 style={{ marginTop: "100px" }} className="fst-italic text-white bg-dark ">What are you craving ?</h1>
                </div>

                <div >
                    <Image src={pizza} width='400px' />
                </div>
            </div>
            <Container style={{ width: '70%' }} >
                <h2 className="d-flex justify-content-center">Menu</h2>
                <div className="d-flex justify-content-between" >
                    <Items />
                    <Items />
                    <Items />
                </div>
                <div className="d-flex justify-content-between" >
                    <Items />
                    <Items />
                    <Items />
                </div><div className="d-flex justify-content-between" >
                    <Items />
                    <Items />
                    <Items />
                </div>
            </Container>







        </>


    )


}

