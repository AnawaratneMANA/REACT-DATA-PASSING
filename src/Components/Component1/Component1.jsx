import React, {useState} from "react"
import {Container} from "@material-ui/core"
import {Link} from 'react-router-dom'
const Component1 =  () => {

    const [data, setData] = useState({
        name: '',
        age: ''
    })

    return (
        <>
            <Container>
            <form>
                <label>Name</label>
                <input 
                type="text" 
                placeholder="Insert Name..."
                value={data.name}
                onChange={(e) => setData({...data, name:e.target.value})}
                /><br/>

                <label>Age</label>
                <input 
                type="text" 
                placeholder="Insert Age..."
                value={data.age}
                onChange={(e) => setData({...data, age:e.target.value})}
                /><br/>

<Link to={{
                                    pathname: '/2',
                                    age: {name: "tutor2"}
                                }}><button primary={true}>Course table</button></Link>

                
            </form>
            </Container>
        </>
    );
}
export default Component1;