import './App.css'

const notes = [
  { id: 1, text: 'Drink water 💧', color: 'coral' },
  { id: 2, text: 'Call home ☎️', color: 'peach' },
  { id: 3, text: 'Buy mangoes 🥭', color: 'lemon' },
  { id: 4, text: 'Finish CSS project', color: 'lime' },
  { id: 5, text: 'Go for a walk 🚶', color: 'mint' },
  { id: 6, text: 'Water the plants 🌱', color: 'teal' },
  { id: 7, text: 'Reply to emails', color: 'sky' },
  { id: 8, text: 'Read 10 pages 📖', color: 'blue' },
  { id: 9, text: 'Stretch for 5 minutes', color: 'lavender' },
  { id: 10, text: 'Clean my desk', color: 'purple' },
  { id: 11, text: 'Listen to a new song 🎧', color: 'pink' },
  { id: 12, text: 'Sleep before 1 AM 🌙', color: 'rose' },
]

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <h1 className='title'>Sticky notes</h1>
        <p className='subtitle'>Twelve little notes in twelve happy colors</p>
      </header>

      <main className='board'>
        {notes.map((note) => (
          <div className={'note ' + note.color} key={note.id}>
            <p className='note-text'>{note.text}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
export default App;