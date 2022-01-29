const orders = require('./Orders.json');

const customers = require('./Customers.json');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app'); 
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const credentials = require('./credentials.json');

initializeApp({
    credential: cert (credentials)
});

const db = getFirestore();

const orderRef = db.collection('orders');

const custRef = db.collection('customers');

//create a document under orders 
// db.collection('orders').add(orders[3]) 
// .then(doc => {
//     console.log('Added orders', doc.id)
// })
// .catch(err => {
//     console.error(err); 
// });

//create a document under customers 
// db.collection('customers').add(customers[3]) 
// .then(doc => {
//     console.log('Added customers', doc.id)
// })
// .catch(err => {
//     console.error(err);
// });


//retrieve customer document
// db.collection('customers').doc('X8INo723PR3o3DobFMGS').get()
// .then(doc => {
//     console.log(doc.id, ' => ', doc.data());  
// })
// .catch(err => console.error(err));


//retrieve order collections
db.collection('orders').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data())
    })
})
.catch(console.error)

//retrieve customer collections
// db.collection('customers').get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.id, ' => ', doc.data())
//     })
// })
// .catch(console.error)

//retrieve product collections
// db.collection('products').get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.id, ' => ', doc.data())
//     })
// })
// .catch(console.error)


//Update the documents
// db.collection('customers').doc('hvPeQ7Xn7zYdVp9dG2fi').update({customerId: "hvPeQ7Xn7zYdVp9dG2fi"})
// .then(doc => {
//     console.log('updated customers info')
// })
// .catch(err => {
//     console.error(err); 
// });

