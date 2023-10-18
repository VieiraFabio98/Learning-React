export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>Forms in React</p>
      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  )
}