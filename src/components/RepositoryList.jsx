const repositoryName = 'unform'


export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>List de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositório</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositório</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositório</a>
        </li>
      </ul>
    </section>
  )
}