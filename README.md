# Modelo de site para barbearia (v2)

Site estático (HTML + CSS + um pouco de JS). Sem build: abre direto no navegador.

## Estrutura

```
modelo-barbearia-v2/
├── index.html
├── styles.css
├── script.js
└── assets/            ← crie esta pasta e coloque as imagens abaixo
    ├── logo.png       (quadrada, fundo transparente, ~200x200)
    ├── espaco.jpg     (foto do espaço, vertical ou quadrada)
    └── trabalho-1.jpg ... trabalho-6.jpg
```

Sem as imagens, o site continua funcionando (o nome aparece sem logo e os espaços de foto ficam em branco).

## Para cada cliente (Ctrl+H no VS Code)

- `Barbearia Exemplo` → nome do cliente
- `Sua Cidade/UF` → cidade real
- `5515999999999` → WhatsApp com 55 + DDD + número, sem espaços
- `seu_usuario` → Instagram
- `Rua Exemplo, 123 – Bairro` e `Rua+Exemplo+123+Sua+Cidade` → endereço (no link use `+` no lugar de espaços; precisa trocar nos dois links do mapa)
- Textos da seção "Sobre", preços e horários: procure os comentários no HTML.
- Cores: topo do `styles.css`.

## Dicas de imagem

- Fotos em JPG, no máximo uns 300 KB cada (reduza em squoosh.app).
- Peça ao cliente autorização para usar as fotos dos clientes dele.

## Publicar

Repositório no GitHub por cliente e hospedagem que permita uso comercial no plano gratuito (ex.: Cloudflare Pages). Não precisa de comando de build; a pasta de saída é a raiz.
