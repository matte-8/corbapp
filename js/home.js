
document.addEventListener('DOMContentLoaded', async () => {
  const { data: partite } = await supabase.from('partite').select('*').order('data', { ascending: true });
  const { data: news } = await supabase.from('news').select('*').order('data', { descending: true });
  const { data: sponsor } = await supabase.from('sponsor').select('*');

  const oggi = new Date();

  const prossima = partite.find(p => new Date(p.data) >= oggi);
  const ultima = [...partite].reverse().find(p => new Date(p.data) < oggi);

  document.getElementById('prossima-partita').innerText = prossima ? `Prossima: ${prossima.data} vs ${prossima.avversario}` : 'Nessuna partita in programma';
  document.getElementById('ultima-partita').innerText = ultima ? `Ultima: ${ultima.data} vs ${ultima.avversario} - ${ultima.risultato}` : 'Nessuna partita giocata';
  document.getElementById('ultima-news').innerText = news[0]?.titolo || 'Nessuna news';
  document.getElementById('sponsor-scroll').innerHTML = sponsor.map(s => `<img src="${s.logo}" alt="${s.nome}" style="height:40px;margin-right:10px;">`).join('');
});
