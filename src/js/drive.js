const docId = '1lEElQfMJCbzzPyn_OHy7zYvdDhog-KfT';
const url = `https://docs.google.com/document/d/${docId}/export?format=html`;

const drivre = async () => {
    const res = await fetch(url);
    if (!res.ok) return 'Erro ao acessar o documento.';
    return await res.text();
}

const d = document.getElementById('curriculo');
const r = await drivre();

d.innerHTML = r;
