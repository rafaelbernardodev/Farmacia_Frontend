function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container flex flex-col items-center text-blue-900 py-8 gap-4">

          <img
            src="https://i.imgur.com/NYaGBdD.png"
            alt="Imagem Página Home"
            className="w-1/3"
          />

          <h2 className="text-5xl font-bold text-center leading-none">
            Bem vindo a Farmácia Boa Vida!
          </h2>

          <p className="text-xl text-center">
            Cuidando da sua saúde com carinho.
          </p>

        </div>
      </div>
    </>
  )
}

export default Home