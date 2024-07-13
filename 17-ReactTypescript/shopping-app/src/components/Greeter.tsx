import React from 'react';

/* function Greeter(): JSX.Element {
    return <h1>Hello from Greeter</h1>;
}
 */

interface GreeterProps {
    person: string;
}

/* const Greeter = (props: GreeterProps)=> {
    return <h1>Hello {props.person}</h1>;
} */
const Greeter = ({person}: GreeterProps) => {
    return <h1>Hello {person}</h1>;
}


export default Greeter;