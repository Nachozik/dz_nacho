import ExpensesItem from "./components/expensesItem";

function App() {
    const data = [
        {
        date: new Date(2022, 4,2),
        price: 200,
        tittle: "Car Insurance"
    },{
        date: new Date(2022, 4,7),
        price: 2.99,
        tittle: "Book"
    },{
        date: new Date(2022, 4,12),
        price: 7.49,
        tittle: "Pet cage"
    }
    ];
  return data.map((item) => (
    <ExpensesItem tittle={item.tittle} price={item.price} date={item.date} />
  ))
}

export default App;
