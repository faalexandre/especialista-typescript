//Uma fn que retorna 'never' nao pode ter um ponto de extremidade acessivel. Quer dizer terminar com sucesso

function falhar(msg: string): never {
        throw new Error(msg)
    }
falhar('Description little')