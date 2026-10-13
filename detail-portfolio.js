// Keep direct section links aligned after the local font and evidence images load.
window.addEventListener('load', async () => {
  await document.fonts.ready;
  const target = document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView({behavior:'instant',block:'start'});
});
