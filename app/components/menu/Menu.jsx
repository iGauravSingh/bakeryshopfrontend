

const menuData = [
    {id: 1, title: 'PAIN CHOCOLAT' , detail: 'Thinly sliced bread brushed with olive oil and toasted', price: 19.00},
    {id: 2, title: 'BIALY EGG SANDWICH' , detail: 'Layered with two fried eggs, roasted tomatoes, basil', price: 24.00},
    {id: 3, title: 'MULTIGRAIN HOT CEREAL' , detail: 'Thinly sliced bread brushed with olive oil and toasted', price: 23},
    {id: 4, title: 'LEMON YOGURT PARFAIT' , detail: 'Layered with two fried eggs, roasted tomatoes, basil', price: 12},
    {id: 5, title: 'CROISSANT OMELETTE' , detail: 'Greek yogurt layered with lemon curd', price: 14},
    {id: 6, title: 'ESCARGOT RAISIN' , detail: 'Layered with two fried eggs, roasted tomatoes, basil', price: 21},
    {id: 7, title: 'FRENCH CROISSANT' , detail: 'Thinly sliced bread brushed with olive oil and toasted', price: 4},
    {id: 8, title: 'CHAUSSON POMME' , detail: 'Served with berry compote and sliced almonds', price: 14},

]


export default function Menu() {
  return (
    <div className="mt-24 w-full">
        <div className="flex flex-col items-center font-title md:p-12 w-full">
            {menuData.map(menu=> (
                <div className="text-2xl font-medium w-full px-12" key={menu.id}>
                    <div className="md:flex md:justify-between w-full">
                        <h3 className="mb-4 md:mb-2 text-center">{menu.title}</h3>
                        <p className="text-center mb-8 md:mb-2">₹{menu.price.toFixed(2)}</p>
                    </div>
                    <p className="hidden md:block mb-8 md:text-sm text-slate-700">{menu.detail}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
