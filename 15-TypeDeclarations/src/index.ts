import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }

}

axios.get<User[]>(url).then(res => {
    console.log("WOOO!");
    //printUser(res.data);
    //printUsers(res.data);
    res.data.forEach(user => printUser(user))
}).catch(e => {
    console.log(e);
})

const printUser = (user: User) => {
    console.log(user);;
    console.log(user.email);
    console.log(user.phone);
}

function printUsers(users: User[]) {
    users.forEach(user => {
        console.log(user);
        console.log(user.email);
        console.log(user.phone);
    })
}





/*
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
} */