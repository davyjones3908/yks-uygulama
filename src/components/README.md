# Bileşenler (Components)

Bu klasörde yeniden kullanılabilir React bileşenleri bulunur.

## Yapı

```
components/
├── Button/
│   ├── Button.jsx
│   ├── Button.css
│   └── Button.test.js
├── Card/
│   ├── Card.jsx
│   ├── Card.css
│   └── Card.test.js
└── ...
```

## Bileşen Yazma Kuralları

1. Her bileşen kendi klasöründe olmalı
2. İsmini PascalCase ile yazın
3. Bileşen dosyası .jsx uzantısında olmalı
4. CSS dosyasını bileşenle aynı klasörde tutun
5. Test dosyasını eklemeyi unutmayın

## Örnek Bileşen

```jsx
function Button({ label, onClick, disabled }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className="btn"
    >
      {label}
    </button>
  );
}

export default Button;
```
