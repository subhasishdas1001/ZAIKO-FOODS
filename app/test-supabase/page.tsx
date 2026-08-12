import { supabase } from '../../lib/supabase'

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .limit(1)

  return (
    <div style={{ padding: 40 }}>
      <h1>Supabase Test</h1>

      {error ? (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}