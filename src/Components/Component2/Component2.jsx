import {Container} from "@material-ui/core"
import { useEffect } from "react";
import {useLocation} from "react-router-dom";
const Component2 =  () => {

    const {age} = useLocation();
    console.log(age?.name);
    console.log(age?.age);

    useEffect(() => {

    },[])

    return (
        <>
            <Container>
                Name: {age?.name} <br/>
                Age: {age?.age}
            </Container>
        </>
    );
}
export default Component2;