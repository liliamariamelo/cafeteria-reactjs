  import Food from  './Food'

function App() {
  const foods  = [{
    name:  'Capuccino com Nutella',
    image: 'imgs/capNutella.jpg'
  },
  {
    id: 2,
    name: 'Capuccino Tradicional',
    image: 'imgs/capuccino.jpg',
  },
  {
    id: 3,
    name: 'Café mocca',
    image: 'imgs/mocca.jpg',
  },
  {
    id: 4,
    name: 'Smoothie de Morango',
    image: 'imgs/smoothie.jpg',
  },]
 
  return (
    <div className="container">
     <h1 className="mt-5 text center">Menu</h1>
      <div className="text-right">
      <button
       type="button"
       className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
       data-toggle="modal"
       data="#formFoodModal"
   // onClick="loadFormCreateFood()"> + </button>
     </div>
     <section className="card-deck my-3">
       {foods.map((food) =>{ return <Food food={food} key={food.id} /> })}
      </section>
    </div> 
  );
}

export default App;
