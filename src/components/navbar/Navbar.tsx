function NavBar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-lime-600 text-white'>
        <div className="container flex justify-between text-lg mx-8">
          Home

          <div className="flex gap-4">
            Categorias
            Nova Categoria
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar