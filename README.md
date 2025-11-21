# Portfolio - Rogerio Mattos

Portfolio pessoal desenvolvido com React, TypeScript e Vite, apresentando uma galeria de pixel arts com visualização interativa.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultra rápido
- **CSS3** - Estilização com Grid e animações

## ✨ Funcionalidades

- 📱 Layout responsivo (mobile e desktop)
- 🎨 Galeria de pixel arts com grid adaptativo
- 🔍 Modal de visualização ampliada ao clicar nas artes
- 🎭 Efeitos hover com transições suaves
- 🖼️ Renderização pixelada para manter qualidade das artes
- 📦 Imports dinâmicos de imagens usando Vite glob

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/rogeriomattos/portifolio.git

# Entre na pasta do projeto
cd portifolio

# Instale as dependências
npm install
```

## 🎮 Executando o Projeto

### Modo de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da build

```bash
npm run preview
```

Visualize a versão de produção localmente antes do deploy

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages através de GitHub Actions.

A cada push na branch `main`, o workflow:
1. Instala as dependências
2. Faz o build do projeto
3. Publica automaticamente no GitHub Pages

**URL do projeto:** https://rogeriomattos.github.io/portfolio

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e paletas de cores
│   ├── pixelart/    # Pixel arts da galeria
│   └── palettes/    # Paletas de cores
├── components/      # Componentes React
│   └── PixelartGallery/
├── data/            # Dados estáticos
│   └── pixelartList.ts
└── types/           # Tipos TypeScript
```

## 🎨 Adicionando Novas Pixel Arts

1. Adicione a imagem em `src/assets/pixelart/`
2. Adicione a paleta em `src/assets/palettes/` (se necessário)
3. Atualize o array em `src/data/pixelartList.ts`:

```typescript
{
    id: '0008',
    name: 'Nome da Arte',
    image: pixelarts['/src/assets/pixelart/sua_imagem.png'],
    description: 'Descrição da arte',
    pallette: palettes['/src/assets/palettes/paleta.png']
}
```

## 📄 Licença

Este projeto é pessoal e está disponível para referência.

---

Desenvolvido por [Rogerio Mattos](https://github.com/rogeriomattos)
