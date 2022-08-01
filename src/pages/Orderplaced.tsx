import { Image } from "react-bootstrap";
import checked from '../images/checked.png';

export function Orderplaced() {

    return (
        <>
            <Image style={{ margin: '100px auto auto 650px ' }} src={checked} width='400px'></Image>
            <h3 style={{ margin: '20px auto auto 770px ' }} >Order placed</h3>

        </>

    )
}