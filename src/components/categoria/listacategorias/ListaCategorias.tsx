import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaCategorias() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
      buscarCategorias()
  }, [categorias.length])

  async function buscarCategorias() {
      try {
          setIsLoading(true)

          await buscar('/categorias', setCategorias)
      } catch {
          ToastAlerta('Erro ao buscar Categorias!', 'erro')
      } finally {
          setIsLoading(false)
      }
  }

  return (
    <>
        {isLoading && (
          <div className="flex justify-center w-full my-8">
            <SyncLoader
              color="#312e81"
    	        size={32}
	          />
          </div>
        )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {(!isLoading && categorias.length === 0) && (
	            <span className="text-3xl text-center my-8">
		            Nenhum Categoria foi encontrada!
	            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              categorias.map((categoria) => (
    	          <CardCategoria key={categoria.id} categoria={categoria}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias