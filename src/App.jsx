
function App() {
  const [character,setCharacter] = useState('')

  const handleCharacterChange = ({ target }) => {
    setCharacter(target.value)
  }

  return (
    <div>
      <textarea value={character} onChange={handleCharacterChange} />
      <h1>Character Count: {character.length}</h1>
    </div>
  )
}

export default App
