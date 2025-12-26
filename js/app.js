// CONFIGURAÇÃO: Cole aqui o link que você copiou do Google Sheets (Publicar na Web > CSV)
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1OlouxMXbItOEezNLPmxI6UOJaSfyXVo_b6kt0Ib8mBg/pub?output=csv';

// Elementos do DOM
const catalogGrid = document.getElementById('catalogGrid');
const searchInput = document.getElementById('searchInput');

let productsData = []; // Cache para busca

// 1. Função para buscar os dados
async function fetchData() {
    showSkeleton(); // Mostra o efeito de carregamento
    
    Papa.parse(SHEET_URL, {
        download: true,
        header: true,
        complete: (results) => {
            // Filtra linhas onde o nome do produto está preenchido
            productsData = results.data.filter(item => item.Nome && item.Nome.trim() !== "");
            renderCatalog(productsData);
        },
        error: (error) => {
            catalogGrid.innerHTML = `<p class="col-span-full text-center text-red-500">Erro ao carregar dados: ${error.message}</p>`;
        }
    });
}

// 2. Função para renderizar os cards
function renderCatalog(products) {
    catalogGrid.innerHTML = '';
    
    if (products.length === 0) {
        catalogGrid.innerHTML = '<p class="col-span-full text-center py-10 text-gray-500 text-lg font-medium">Nenhum produto encontrado. 😕</p>';
        return;
    }

    products.forEach(item => {
        // Fallback de imagem caso o link esteja quebrado ou vazio
        const imgUrl = item.Link_Imagem || 'https://via.placeholder.com/400x400?text=Sem+Foto';
        
        const card = `
            <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                <div class="relative overflow-hidden h-52 bg-gray-100">
                    <img src="${imgUrl}" alt="${item.Nome}" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         loading="lazy">
                    <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                        ${item.Categoria}
                    </span>
                </div>
                
                <div class="p-5 flex-grow">
                    <h3 class="font-bold text-gray-800 text-lg leading-tight mb-3 h-12 overflow-hidden">${item.Nome}</h3>
                    <div class="flex items-end justify-between">
                        <div class="flex flex-col">
                            <span class="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Preço em Dólar</span>
                            <span class="text-2xl font-black text-green-600 tracking-tight">U$ ${item.Preco_Dolar}</span>
                        </div>
                    </div>
                </div>

                <a href="https://wa.me/SEUNUMERO?text=Olá! Tenho interesse no item: ${item.Nome}" 
                   target="_blank"
                   class="m-4 mt-0 bg-blue-900 hover:bg-blue-800 text-white text-center py-3 rounded-xl font-bold transition-colors shadow-lg shadow-blue-100">
                   Encomendar no Whats
                </a>
            </div>
        `;
        catalogGrid.insertAdjacentHTML('beforeend', card);
    });
}

// 3. Efeito Skeleton Screen (Carregando...)
function showSkeleton() {
    catalogGrid.innerHTML = Array(8).fill(0).map(() => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div class="skeleton h-48 rounded-xl mb-4"></div>
            <div class="skeleton h-4 w-1/4 mb-3 rounded"></div>
            <div class="skeleton h-6 w-3/4 rounded"></div>
        </div>
    `).join('');
}

// 4. Busca em tempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = productsData.filter(p => 
        p.Nome.toLowerCase().includes(term) || 
        p.Categoria.toLowerCase().includes(term)
    );
    renderCatalog(filtered);
});

// Inicializa o App
fetchData();
