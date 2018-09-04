import React from 'react';
//
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
//
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Welcome;