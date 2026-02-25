import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-lime-600 text-white'>
        <div className="container flex justify-between text-lg mx-8">
          <Link to='/home' className="text-2xl font-bold">Home</Link>

          <div className="flex gap-4">
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar